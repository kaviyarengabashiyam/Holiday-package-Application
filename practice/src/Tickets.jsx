import React, { useState,useEffect } from "react"
import axios from "axios"
import { useLocation, useNavigate } from "react-router-dom";
import tr2 from "./assets/tr2.png"
const Tickets = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const selectedDay=location.state?.selectedDay ||""
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    date: "",
    destination: "",
    selectedDay:selectedDay
  })
  const [preview, setPreview] = useState(false)
  const [finalSubmit, setFinalSubmit] = useState(false)
  useEffect(() => {
    if (selectedDay) {
      setFormData((prev) => ({ ...prev, selectedDay }));
    }
  }, [selectedDay]);
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }
  const handlePreview = (e) => {
    e.preventDefault();
    for (let key in formData) {
      if (!formData[key]) {
        alert(`Please fill out the ${key} field`)
        return
      }}
    setPreview(true)
  }
  const handleFinalSubmit = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/ticket", formData)
      alert(response.data.message)
      setFinalSubmit(true)
      setPreview(false)
    } catch (error) {
      alert("error booking ticket: " + (error.response?.data?.detail || "server error"))
    }}
  return (
    <div style={styles.page}>
      <style>
        {`
          .form-container {
            text-align:center;
            background: beige;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 3px 8px rgba(0,0,0,0.1);
            width: 500px;
            margin:40px;
          }
          input, button {
            margin-top: 10px;
            padding: 8px;
            width: 75%;
            border: 1px solid #070707ff;
            border-radius: 10px;
          }
          select{
            margin-top: 10px;
            padding: 8px;
            width: 75%;
            border: 1px solid #070707ff;
            border-radius: 5px;
          }
          button {
            background: purple;
            color: white;
            font-weight: bold;
            border: none;
            cursor: pointer;
          }
          button:hover {
            background: #2ba309ff;
          }
          .form-container form {
            display: flex;
            flex-direction: column;
            width: 100%;
          } 
          .confirmation {
            margin-top: 20px;
            background: #e6ffe6;
            padding: 10px;
            border-radius: 8px;
            color: #2d572c;
            font-weight: bold;
          }
          .preview-box {
            background: #ffcdebff;
            padding: 10px;
            color: #856404;
            margin-top: 10px;
          }
        `}
      </style>
      <div style={{ color: "purple", fontWeight: "bolder" }}>
        <h1>Highfly Holidays</h1>
      </div>
      <div className="form-container">
        <h1 style={{ color: "purple" }}>Booking Now</h1>
        {!preview && !finalSubmit && (
          <form onSubmit={handlePreview}>
            <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} />
            <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
            <input type="number" name="age" placeholder="Enter your age" value={formData.age} onChange={handleChange} />
            <input type="date" name="date" value={formData.date} onChange={handleChange} />
            <select name="destination" value={formData.destination} onChange={handleChange}>
              <option value="">Choose destination</option>
              <option value="Paris">Paris</option>
              <option value="Maldives">Maldives</option>
              <option value="America">America</option>
              <option value="London">London</option>
            </select>
              <input type="text" name="selectedDay" placeholder="Selected Day" value={formData.selectedDay} readOnly/>
            <br/>
            <button type="submit">Book Ticket</button>
          </form>
        )}
        {preview && (
          <div>
            <div className="preview-box">
              <h3>Preview Ticket</h3>
              <p><b>Name:</b> {formData.name}</p>
              <p><b>Email:</b> {formData.email}</p>
              <p><b>Age:</b> {formData.age}</p>
              <p><b>Date:</b> {formData.date}</p>
              <p><b>Destination:</b> {formData.destination}</p>
              <p><b>SelectedDay:</b> {formData.selectedDay}</p>
            </div>
            <button onClick={handleFinalSubmit}>Final Submit</button>
          </div>
        )}
        {finalSubmit && (
          <div className="confirmation">
            <p>Your trip has been successfully booked for {formData.name} to{" "}{formData.destination} on {formData.date}({formData.selectedDay}).</p>
            <button onClick={() => navigate("/booking", { state: { email: formData.email } })}style={{ marginTop: "10px" }}>Go to Booking History</button>
          </div>
        )}
      </div></div>
  )}
const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
    background: `url(${tr2})`,
    backgroundSize: "cover",
    minHeight: "97vh",
    padding: "0px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0px"
  }}
export default Tickets
