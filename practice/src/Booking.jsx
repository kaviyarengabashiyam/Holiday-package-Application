import React, { useEffect, useState } from "react"
import axios from "axios"
import tr2 from "./assets/tr2.png"
import { useLocation,useNavigate } from "react-router-dom"
const BookingHistory = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const userEmail = location.state?.email || localStorage.getItem("email")
  const [tickets, setTickets] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/ticket")
        if (userEmail) {
          setTickets(response.data.filter(ticket => ticket.email === userEmail))
        } else {
          setTickets(response.data)        }}
         catch (err) {
        setError("Failed to load booking history")
      } finally {
        setLoading(false)
      }}
    fetchTickets()
  }, [userEmail])
  const handleUpdate = (ticket) => {
    navigate("/update-booking", { state: { ticket } })
  }
  const handleCancel = async (id) => {
    if (!window.confirm("Are you sure you want to cancel this booking?")) return
    try {
      await axios.delete(`http://127.0.0.1:8000/ticket/${id}`)
      setTickets((prev) => prev.filter((ticket) => ticket.id !== id))
    } catch (err) {
      alert("Failed to cancel booking")
    }}
  if (loading) return <p style={styles.msg}>Loading booking history</p>
  if (error) return <p style={styles.error}>{error}</p>
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Booking History</h1>
      {tickets.length === 0 ? (
        <p style={styles.msg}>
          {userEmail ? `No bookings found for ${userEmail}` : "No bookings found."}
        </p>
      ) : (
       <div style={{marginTop:"60px",width:"650px",backgroundColor:"beige"}}>
   <table style={styles.table}>
          <thead>
            <tr style={styles.headerRow}>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Destination</th>
              <th>Date</th>
              </tr></thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.id}>
                <td>{ticket.id}</td>
                <td>{ticket.name}</td>
                <td>{ticket.email}</td>
                <td>{ticket.age}</td>
                <td>{ticket.destination}</td>
                <td>{ticket.date}</td>
                <td><button style={styles.Btn} onClick={() => handleUpdate(ticket)}>Edit</button></td>
                <td><button style={styles.Btn} onClick={() => handleCancel(ticket.id)}>Cancel</button></td></tr>
            ))}
          </tbody>
        </table></div>
      )}
      <button onClick={()=>navigate("/Contact")} style={styles.button}>Next</button>
    </div>
  )}
const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    background: `url(${tr2})`,
    backgroundSize:"cover",
    minHeight: "100vh"
  },
  title: {
    color: "purple",
    marginBottom: "20px"
  },
  msg: {
    color: "gray",
    fontSize: "18px"
  },
  error: {
    color: "red"
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    background: "white",
    boxShadow: "0 3px 8px rgba(0,0,0,0.1)"
  },
  headerRow: {
    background: "purple",
    color: "white"
  },
  Btn: {
    background: "crimson",
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "5px 10px",
    cursor: "pointer"
  },
button:{
  marginTop:"20px",
  background:"purple",
  color:"white",
  fontSize:"25px",
  width:"80px",
  borderRadius:"5px"
}}
export default BookingHistory
