import React, { useState } from "react"
import tr2 from "./assets/tr2.png"
import { useNavigate } from "react-router-dom"
import axios from "axios"
export default function AuthPage() {
  const [isRegister, setIsRegister] = useState(false)
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  const navigate = useNavigate()
  const handleLogin = async (e) => {
    e.preventDefault()
    setMessage("")
    try {
      const response = await axios.post("http://127.0.0.1:8000/login", {
       email,
       password
      })
      setMessage(response.data.message)
      if (response.data.message === "Login successful") {
        localStorage.setItem("username", response.data.username)
        localStorage.setItem("email",email)
  navigate("/home", { state: { username: response.data.username} })
}} catch (error) {
      if (error.response) {
        setMessage(error.response.data.detail)
      } else {
        setMessage("Something went wrong. Please try again.")
      }}}
  const handleRegister = async (e) => {
    e.preventDefault()
    setMessage("")
    try {
      const registerRes = await axios.post("http://127.0.0.1:8000/register", {
        username,
        email,
        password
      })
      setMessage(registerRes.data.message)
      setIsRegister(false)
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.detail)
      } else {
        setMessage("Something went wrong. Please try again.")
      }}}
  return (
    <div style={{
        background: `url(${tr2})`,
        backgroundSize: "cover",
        minHeight: "97vh"
      }}>
      <div>
        <h1 style={{ color: "purple", fontSize: "40px", textAlign: "center" }}>Highfly Holidays</h1></div>
      <div style={styles.container}>
        {isRegister ? (
          <>
            <h2>Register</h2>
            <form onSubmit={handleRegister} style={styles.form}>
              <input type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} style={styles.input} required />
              <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} style={styles.input} required />
              <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} style={styles.input} required />
              <button type="submit" style={styles.registerButton}>Register</button>
            </form>
            <p>Already have an account?{" "} <span onClick={() => setIsRegister(false)} style={{ color: "blue", cursor: "pointer" }}>Login here</span></p></>
        ) : (
          <>
            <h2>Login</h2>
            <form onSubmit={handleLogin} style={styles.form}>
              <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} style={styles.input} required />
              <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} style={styles.input} required />
              <button type="submit" style={styles.button}>Login</button>
            </form>
            <p>Don’t have an account?{" "}
              <span onClick={() => setIsRegister(true)} style={{ color: "blue", cursor: "pointer" }}> Register here</span></p>
          </>
        )}
        {message && <p style={{ color: "green" }}>{message}</p>}
      </div>
    </div>
  )}
const styles = {
  container: {
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    textAlign: "center",
    background: "beige",
    color: "purple",
    width: "400px",
    fontSize: "20px",
    marginTop: "80px",
    marginLeft: "570px"
  },
  form: {
    margin: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },
  input: {
    margin: "10px",
    padding: "12px",
    fontSize: "14px",
    border: "1px solid #ccc",
    borderRadius: "5px"
  },
  button: {
    padding: "10px 20px",
    fontSize: "18px",
    background: "purple",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  },
  registerButton: {
    padding: "10px 20px",
    fontSize: "18px",
    background: "purple",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }}
