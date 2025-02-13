import React, { useState } from "react"
import Wrapper from "./style"
import { QRCodeCanvas } from "qrcode.react"

const Form = () => {
  const [search, setSearch] = useState("")
  const [selectedInstitute, setSelectedInstitute] = useState("")

  const institutes = [
    "Global Institute of Technology(GIT)",
    "Swami Keshvanand Institute of Technology(SKIT)",
    "JECRC Foundation",
    "Poornima College of Engineering",
    "Arya College",
    "Vivekananda Institute of Technology(VIT)",
    "JECRC University",
    "Poornima University",
    "University of Engineering & Management(UEM)",
    "Jaipur National University",
    "Anand International College of Engineering",
    "Yagyavalkya Institute of Technology",
    "Sri Balaji College of Engineering and Technology",
    "Shri Bhawani Niketan Institute of Technology & Management",
    "Regional College For Education Research and Technology",
    "Compucom Institute of Technology and Management",
    "Apex Institute of Engineering and Technology",
    "Birla Institute of Technology Mesra, Jaipur Campus",
    "Rajasthan Institute of Engineering & Technology",
    "Malaviya National Institute of Technology Jaipur (MNIT)",
    "Central Institute Of Petrochemicals Engineering & Technology",
    "MGEC College Jaipur",
    "The LNM Institute of Information Technology",
    "Manipal University",
    "Jagannath University Jaipur",
    "Apex University",
    "Rajasthan College of Engineering for Women",
    "Vivekananda Global University",
    "Poddar Group of Institutions",
    "Rajdhani Engineering College",
  ]

  const filteredInstitutes = institutes.filter((institute) =>
    institute.toLowerCase().includes(search.toLowerCase())
  )

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    contactNo: "",
    institute: "",
  })

  const [qrCode, setQrCode] = useState("");

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    })
  }

  const handleInstituteSelect = (inst) => {
    setSelectedInstitute(inst);
    setUserData({
      ...userData,
      institute: inst,
    })
    setSearch("");
  }

  const handleSubmit = async () => {
    if (!userData.name || !userData.email || !userData.contactNo || !userData.institute) {
      alert("Please fill in all the fields before submitting.");
      return;
    }

    const qrData = JSON.stringify(userData);
    setQrCode(qrData); // Set QR Code after successful submission

    try {
      const response = await fetch("http://localhost:5000/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const result = await response.json();
      console.log(result);
      alert("Booking successful!");
    } catch (error) {
      console.error("Error submitting booking:", error);
    }
  }

  return (
    <Wrapper>
      <div className="seat-book-form">
        <h2>Seat Book Registration Form</h2>
        <div className="details">
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Name*"
            value={userData.name}
            onChange={handleChange}
            required
          />
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email*"
            value={userData.email}
            onChange={handleChange}
            required
          />
          <input
            id="contactNo"
            name="contactNo"
            type="text"
            placeholder="Contact No.*"
            value={userData.contactNo}
            onChange={handleChange}
            pattern="[0-9]{10}"
            required
          />
          <input
            id="institute"
            name="institute"
            type="text"
            placeholder="Institute*"
            value={selectedInstitute || search}
            onChange={(e) => {
              setSearch(e.target.value);
              setSelectedInstitute("");
            }}
            required
          />
          {search && (
            <ul className="dropdown">
              {filteredInstitutes.map((inst, index) => (
                <li key={index} onClick={() => handleInstituteSelect(inst)}>
                  {inst}
                </li>
              ))}
            </ul>
          )}

          <button id="submit" onClick={handleSubmit}>Submit</button>
        </div>

        {qrCode && (
          <div className="qr-code">
            <h3>QR Code</h3>
            <QRCodeCanvas value={qrCode} size={200} />
          </div>
        )}
      </div>
    </Wrapper>
  )
}

export default Form
