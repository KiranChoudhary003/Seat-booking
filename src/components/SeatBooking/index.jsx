import React, { useEffect, useState } from 'react'
import Wrapper from './style'
import rightclick from './rightClick.png'
import codeupShow from './codeupShow.jpg'
import { QRCodeCanvas } from 'qrcode.react'
import { useLocation } from 'react-router'
import logo from './logo.png'

const SeatBooking = () => {

    const location = useLocation();
    const userData = location.state;

    const [qrCode, setQrCode] = useState("")

    useEffect(() => {
        if (userData) {
            const qrData = JSON.stringify(userData);
            setQrCode(qrData);
            
            fetch("http://localhost:5000/bookings", {
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

    return (
        <Wrapper>
            <div className='seat-booked'>
                <div className='logo'>
                    <img src={logo} alt="The Codeup Show" />    
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
