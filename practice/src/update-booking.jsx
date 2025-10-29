import React, { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import axios from "axios"
import tr2 from "./assets/tr2.png"
const UpdateBooking = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const ticket = location.state?.ticket
  if (!ticket) {
    return <p style={{ color: "red" }}>No booking data found.</p>
  }
  const [formData, setFormData] = useState({
    name: ticket.name,
    email: ticket.email,
    age: ticket.age,
    destination: ticket.destination,
    date: ticket.date,
  })
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })}
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.put(`http://127.0.0.1:8000/ticket/${ticket.id}`, formData)
      alert("Booking updated successfully!")
      localStorage.setItem("email",formData.email)
      navigate("/booking",{state:{email:formData.email}})
    } catch (err) {
      alert("Failed to update booking")
    }}
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Update Booking</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Name:</label>
        <input style={styles.input} type="text" name="name" value={formData.name} onChange={handleChange}/>
        <label style={styles.label}>Email:</label>
        <input style={styles.input} type="email" name="email" value={formData.email} onChange={handleChange}/>
        <label style={styles.label}>Age:</label>
        <input style={styles.input} type="number" name="age" value={formData.age} onChange={handleChange}/>
        <label style={styles.label}>Destination:</label>
        <input style={styles.input} type="text" name="destination" value={formData.destination} onChange={handleChange}/>
        <label style={styles.label}>Date:</label>
        <input style={styles.input} type="date" name="date" value={formData.date} onChange={handleChange}/>
        <button type="submit" style={styles.btn}>Save Changes</button> </form>
    </div>
  )}
const styles = {
  page: {
    fontFamily: "Ari+al, sans-serif",
    padding: "20px",
    background: `url(${tr2})`,
    backgroundSize: "cover",
    minHeight: "97vh"
  },
  title: {
    color: "purple",
    marginLeft:"560px",
    marginBottom: "20px"
  },
  form: {marginLeft:"560px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    background: "white",
    padding: "20px",
    borderRadius: "8px",
    maxWidth: "400px",
    boxShadow: "0 3px 8px rgba(0,0,0,0.1)"
  },
  label: {
    fontWeight: "bold"
  },
  input: {
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc"
  },
  btn: {
    background: "purple",
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "10px",
    cursor: "pointer",
    marginTop: "10px"
  }}
export default UpdateBooking
