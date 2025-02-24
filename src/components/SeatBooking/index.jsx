import React, { useEffect, useRef, useState } from 'react'
import Wrapper from './style'
import rightclick from './rightClick.png'
import codeupShow from './codeupShow.jpg'
import { QRCodeCanvas } from 'qrcode.react'
import { useLocation } from 'react-router'
import logo from './logo.png'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import download from './download.png'

const SeatBooking = () => {

    const location = useLocation();
    const userData = location.state;

    const [qrCode, setQrCode] = useState("")

    useEffect(() => {
        if (userData) {
            const qrData = JSON.stringify(userData);
            setQrCode(qrData);

            fetch("https://seat-booking-backend-sand.vercel.app/bookings", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Booking saved:", data)
                })
                .catch((error) => {
                    console.error("Error saving booking:", error)
                })
        }
    }, [userData])

    const pdfRef = useRef()

    const downloadPDF = () => {
        const input = pdfRef.current
        html2canvas(input, {
            useCORS: true,
            backgroundColor: getComputedStyle(document.body).backgroundColor,
            scale: 2,
            windowWidth: document.documentElement.scrollWidth,
            windowHeight: document.documentElement.scrollHeight,
            scrollX: 0,
            scrollY: 0,
            x: input.getBoundingClientRect().left,
            y: input.getBoundingClientRect().top,
        }).then((canvas) => {
            const imgData = canvas.toDataURL("image/png")
            const pdf = new jsPDF('p', 'mm', 'a4', true)
            const pdfWidth = pdf.internal.pageSize.getWidth()
            const pdfHeight = pdf.internal.pageSize.getHeight()
            const imgWidth = canvas.width
            const imgHeight = canvas.height
            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight)
            const imgX = (pdfWidth - imgWidth * ratio) / 2
            const imgY = 0
            pdf.addImage(imgData, 'PDF', imgX, imgY, imgWidth * ratio, imgHeight * ratio)
            pdf.save("Booking-confirmation.pdf")
        })
    }

    return (
        <Wrapper>
            <div className='seat-booked' ref={pdfRef} style={{
                backgroundImage: getComputedStyle(document.body).backgroundImage,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "repeat"
            }}>
                <div className='logo'>
                    <img src={logo} alt="The Codeup Show" className='logoImage' />
                    <img src={download} alt="Download" onClick={downloadPDF} className='download' />
                </div>
                <div className='seat-confirmation'>
                    <img src={rightclick} alt="Right Click Icon" />
                    <h2>Booking confirmed</h2>
                </div>
                <div className='details'>
                    <img src={codeupShow} alt="Codeup Show" />
                    <div className='guest-details'>
                        <h3>Apoorav Purohit</h3>
                        <p>Site Reliabity Engineer</p>
                        <p>at Google</p>
                    </div>
                </div>
                <div className='user-detail'>
                    <div className='venue'>
                        <p>Venue:Global Institute of Technology(GIT) Sitapura, Jaipur</p>
                    </div>
                    <div className='qrCode'>
                        <h3>Fri, 28 Feb | 10:00 AM</h3>
                    </div>
                    <hr className='separator' />
                    {qrCode && (
                        <div className="qr-code">
                            <QRCodeCanvas value={qrCode} size={200} className='qr-code-canva' />
                        </div>
                    )}
                </div>
            </div>
        </Wrapper>
    )
}

export default SeatBooking
