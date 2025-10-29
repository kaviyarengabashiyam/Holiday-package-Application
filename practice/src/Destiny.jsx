import React from "react";
import { useNavigate } from "react-router-dom";
import paris from "./assets/paris1.jpg"
import maldives from "./assets/Maldives1.jpg" 
import america from "./assets/america.jpg"
import london from "./assets/london.jpg" 
import tr2 from "./assets/tr2.png" 
const Card = ({ title, description, id , image}) => {
  const navigate = useNavigate()
  return (
    <div
      onClick={() => navigate(`/details/${id}`)}
      style={{
        backgroundColor:"white",
        border: "1px solid #f567baff",
        padding: "10px",
        margin: "60px",
        borderRadius: "10px",
        cursor: "pointer",
        width: "300px",
        height:"450px"
      }}>
      <img src={image}style={{ width: "250px", height: "200px", objectFit: "cover" }} >
</img>
<h3>{title}</h3>
      <p>{description}</p>
    </div>
  )}
export default function Home() {
  const cardData = [
    { id: "paris", title: "Paris", description: "Paris: A dream you can walk through.' 'Every corner, a postcard. Every moment, unforgettable.' 'Discover the magic, mystery, and magnificence of Paris",image:paris },
    { id: "maldives", title: "Maldives", description: "Maldives: where dreams float on crystal-clear waters.Dive into a world of vibrant coral reefs and exotic marine life.Let your footprints fade with the tide on Maldives' untouched shores.",image:maldives },
    { id: "london", title: "London", description: "stroll beside the Thames, where London comes to life.London drizzle, endless sizzle this city shines rain or shine.Discover centuries of stories behind London timeless landmarks",image:london },
    {id:"America", title:"America", description:"Skyscrapers, street food, and dreams welcome to the USA's urban heartbeat.Stand at the edge of wonder in America breathtaking national parks.Feel the Pacific breeze or Atlantic charm the USA has it all", image:america}
  ]
  return (
    <>
    <div className="rr" style={{background:`url(${tr2})`,backgroundSize:"cover",minHeight:"99vh",minWidth:"1280px"}}>
    <div>
    <h1 style={{color:"white",textAlign:"center",background:"purple",fontSize:"40px"}}>Dream destinations</h1>
    </div>
    <div style={{ display: "flex",textAlign:"center"}}>
      {cardData.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
    </div>
    </>
  )}
