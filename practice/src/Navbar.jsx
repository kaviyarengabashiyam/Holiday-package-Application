import React from "react"
import "./navbar.css"
import { motion } from "framer-motion"
import { Link, useLocation} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import maldives from "./assets/Maldives1.jpg"
import paris from "./assets/paris1.jpg"
import america from "./assets/america.jpg"
import london from "./assets/london.jpg"
import russia from "./assets/russia.jpg"
import logo from "./assets/logo3.png"
export default function Navbar() {
  const location = useLocation()
  const username = location.state?.username || localStorage.getItem("username") || "Guest"
  const cardData = [
    { title: "Paris", image: paris },
    { title: "Maldives", image: maldives },
    { title: "America", image: america },
    { title: "London", image: london },
    { title: "Russia", image: russia }]
  return (
    <><nav className="navbar navbar-light bg-light px-3">
        <div style={{ display: "flex" }}><img src={logo} style={{ height: "70px", width: "90px" }}></img>
          <h1 style={{ color: "purple", fontSize: "40px", margin: "9px" }}>Highfly Holidays</h1></div>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" >
          <span className="navbar-toggler-icon"></span></button>
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Highfly Holidays</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button></div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item">
                <Link className="nav-link" to="/destiny">Destinations</Link></li>
              <li className="nav-item">
                <Link className="nav-link" to="/booking" state={{email:localStorage.getItem("email")}}>My Booking</Link></li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact Us</Link></li></ul>
          </div></div></nav>
      <div style={{color:"purple",textAlign:"center",marginTop:"40px"}}><h1>Welcome,{username}</h1></div>
      <div style={{ display: "flex", gap: "30px", marginTop: "230px", marginLeft: "90px" }}>
        {cardData.map((item, index) => (
          <motion.div key={item.title} style={styles.card}  initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.2, duration: 0.6,type:"spring",stiffness:80}} 
            whileHover={{scale: 1.1, rotate: 2}}>
            <img src={item.image} alt={item.title} style={styles.image} />
            <h3>{item.title}</h3></motion.div>
        ))}</div></>
      )}
const styles = {
  card: {
    backgroundColor: "#f5b4ecff",
    border: "1px solid #ddd",
    borderRadius: "20px",
    width: "250px",
    padding: "5px",
    boxShadow: "0px 2px 8px rgba(219, 54, 54, 0.1)",
    textAlign: "center"
  },
  image: {
    width: "100%",
    height: "200px",
    borderRadius: "15px"
  }}
