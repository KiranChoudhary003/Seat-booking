import React, { useState } from "react"
import Wrapper from "./style"
import { useNavigate } from "react-router"
import star from "./star.png"

const Form = () => {
  const [search, setSearch] = useState("")
  const [userData, setUserData] = useState({
    contactNo: "",
    institute: "",
  })

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
  ].sort()

  const filteredInstitutes = institutes.filter((inst) =>
    inst.toLowerCase().includes(search.toLowerCase())
  )

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    })
  }

  const handleInstituteChange = (e) => {
    const value = e.target.value
    setSearch(value)
    setUserData({ ...userData, institute: value })
  }

  const handleInstituteSelect = (inst) => {
    setUserData({ ...userData, institute: inst })
    setSearch("")
  }

  const navigate = useNavigate()

  const seatBooking = () => {
    navigate("/seatBooking", { state: userData })
  }

  const handleSubmit = () => {
    if (!userData.contactNo || !userData.institute) {
      alert("Please fill in all the fields before submitting.")
      return;
    }
  
    const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || []
  
    if (registeredUsers.includes(userData.contactNo)) {
      alert("You have already registered! Registration cannot be processed further.")
      return
    }
  
    registeredUsers.push(userData.contactNo);
    localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers))
  
    seatBooking()
  }
  

  return (
    <Wrapper>
      <h1>The Codeup Show</h1>
      <div className="seat-book-form">
        <h2>Seat Book Registration Form</h2>
        <div className="details">
          <div className="user-info">
            <span>Contact Number</span>
            <img src={star} alt="Star" />
          </div>
          <input
            id="contactNo"
            name="contactNo"
            type="text"
            value={userData.contactNo}
            onChange={handleChange}
            pattern="[0-9]{10}"
            required
          />

          <div className="user-info">
            <span>Institute</span>
            <img src={star} alt="Star" />
          </div>
          <input
            id="institute"
            name="institute"
            type="text"
            value={userData.institute}
            onChange={handleInstituteChange}
            required
          />
          {search && filteredInstitutes.length > 0 && (
            <ul className="dropdown">
              {filteredInstitutes.map((inst, index) => (
                <li key={index} onClick={() => handleInstituteSelect(inst)}>
                  {inst}
                </li>
              ))}
            </ul>
          )}

          <input
            id="submit"
            type="button"
            name="Submit"
            value="Submit"
            required
            onClick={handleSubmit}
          />
        </div>
      </div>
    </Wrapper>
  )
}

export default Form
