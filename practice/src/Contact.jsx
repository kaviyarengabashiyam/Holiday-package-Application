import React, { useState } from "react";
import axios from "axios"
import tr2 from "./assets/tr2.png"
import { useNavigate } from "react-router-dom";
const Contact = () => {
  const [formData, setFormData] = useState({name: "", email: "",message: ""})
  const [submitted, setSubmitted] = useState(false)
  const navigate = useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }
  const handleSubmit = async(e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields")
      return
    }
    try {
      await axios.post("http://127.0.0.1:8000/contact/", formData)
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
  }
  catch(error){
     console.error("Error sending contact form:", error)
      alert("Something went wrong! Please try again.")
    }}
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={{ color: "purple", textAlign: "center" }}>Contact Us </h1>
        {!submitted ? (
          <form onSubmit={handleSubmit} style={styles.form}>
            <input type="text"name="name"placeholder="Your Name"value={formData.name} onChange={handleChange}style={styles.input}/>
            <input type="email"name="email"placeholder="Your Email"value={formData.email} onChange={handleChange}style={styles.input}/>
            <textarea name="message"placeholder="Your Message"  value={formData.message} onChange={handleChange}style={styles.textarea}/>
            <button type="submit" style={styles.button}>Send Message</button>
          </form>
        ) : (
          <div style={styles.success}>
            Thank you for contacting us!<br/>
              <button onClick={() => navigate("/")} style={{ ...styles.button, marginTop: "10px" }}>Go Home</button></div>
        )}
        <div style={styles.infoBox}>
          <h2>Our Office</h2>
          <p> 154 Travel Street, Chennai, India</p>
          <p>📞 +91 98765 43210</p>
          <p>📧 Highfly@holidayswebsite.com</p>
        </div>
      </div>
    </div>
  )}
const styles = {
  page: {
    background: `url(${tr2})`,
    backgroundSize: "cover",
    minHeight: "95vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px"
  },
  container: {
    background: "beige",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    width: "450px",
    textAlign: "center"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px"
  },
  textarea: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
    minHeight: "100px"
  },
  button: {
    padding: "12px",
    border: "none",
    borderRadius: "8px",
    background: "purple",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer"
  },
  success: {
    background: "#e6ffe6",
    color: "#2d572c",
    padding: "15px",
    borderRadius: "8px",
    marginTop: "15px",
    fontWeight: "bold"
  },
  infoBox: {
    marginTop: "30px",
    textAlign: "left",
    fontSize: "14px",
    background: "#f0f0f0",
    padding: "15px",
    borderRadius: "8px"
  }}
export default Contact