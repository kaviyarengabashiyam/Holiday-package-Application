import React, { useState } from "react";
import "./details.css";
import tr2 from "./assets/tr2.png"
import { useParams, useNavigate } from "react-router-dom"
export default function Details() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [selectedDay, setSelectedDay] = useState("")
  const packages = {
    paris: {
      title: "Paris Package",
      level: [
        { day: " Paris Beauty", details: <ul><li>Arrive at Paris airport, transfer to hotel, relax.</li><li>the Eiffel Tower, the Louvre, Ecole Militaire, Champs-Elysees, and Galeries Lafayette. You can also see a cabaret show at the Lido in the evening.</li><li>Interact with your favourite Disney characters, get on rides, and relish delectable snacks throughout the day</li><li>2-3Days- Price:Rs.40000 </li></ul> },
        { day: "Paris Sightseeing", details: <ul><li>Eiffel Tower, Seine Cruise, Champs Elysees, Louvre.</li><li>Arc de Triomphe, Les Invalides, Place de la Concorde, and Tuileries Gardens. Head over to Latin Quarter later in the day, filled with cafes, bookshops, and bistros.</li><li>Paris’ iconic attractions, including the Louvre Museum, Eiffel Tower, Notre Dame, Arc de Triomphe, Jardin du Luxembourg, Pantheon, and Palace of Versailles.</li><li>5-6Days- Price:Rs.70000</li></ul> },
        { day: " Journey of paris", details: <ul><li>Champs-Elysees, Louvre Museum, Galeries Lafayette Haussmann, and Arc de Triomphe. In the evening, catch a fascinating cabaret show at Lido</li><li>Royal Palace of Madrid, Museo Nacional del Prado, and Buen Retiro Park. Make sure to stop by one of the tapas bars to relish some delicious snacks and beverages.</li><li>Check out and transfer to airport.</li><li>7-8Days- Price:Rs.110000</li></ul> }
      ]},
    london: {
      title: "London Package",
      level: [
        { day: " London Beauty", details: <ul><li>Tower of London, the Crown Jewels, The British Museums, The National Gallery, and Buckingham Palace.</li><li>Visit Madame Tussauds to explore its lifelike wax figures of celebrities and historical figures.</li><li>explore the shopping districts of London, such as Oxford Street, Regent Street, or Covent Garden.</li><li>2-3Days- Price:Rs.57000</li></ul> },
        { day: "London Splendid", details: <ul><li>Take a relaxing boat ride along River Thames to see famous landmarks such as the London Eye, the Shard, and Tower Bridge from a different perspective.</li><li>Explore the vibrant nightlife in the West End. Catch a musical or play in one of the famous theaters like the Royal Opera House or the Theatre Royal Drury Lane.</li><li>The National Museum of Scotland, St. Giles' Cathedral, and the beautiful Royal Botanic Garden.</li><li>5-6Days- Price:Rs.85000</li></ul> },
        { day: " Journey of London", details: <ul><li>Afterward, head to Covent Garden, a vibrant area filled with street performers, boutique shops, and charming cafes. Enjoy lunch at one of the many restaurants in the area.</li><li>Cross the Millennium Bridge to reach St. Paul's Cathedral. Marvel at its stunning architecture and climb to the top for panoramic city views.</li><li>Explore the vibrant street of Oxford Street for some shopping or visit the high-end department stores of Harrods or Selfridges.</li><li>7-8Days- Price:Rs.120000</li></ul> }
      ]},
    america: {
      title: "America Package",
      level: [
        { day: " America Beauty", details: <ul><li>Niagara Adventure Pass, which grants you access to the Hornblower Cruise - Voyage to the Falls, Journey behind the Falls, Niagara’s Fury, and White-Water Walk.</li><li>Parliament buildings, museums, the Canadian Mint, the National Gallery of Canada, the Museum of Civilization, the Prime Minister's residence, and the National Arts Centre.</li><li>Plains of Abraham, the Citadel, Chateau Frontenac, Place d’Armes, Quebec National Assembly, and the Notre Dame Basilica.</li><li>2-3Days- Price:Rs.65000</li></ul> },
        { day: "America Mystery", details: <ul><li>Eiffel Tower, Seine Cruise, Champs Elysees, Louvre.</li><li>Arc de Triomphe, Les Invalides, Place de la Concorde, and Tuileries Gardens. Head over to Latin Quarter later in the day, filled with cafes, bookshops, and bistros.</li><li>Paris’ iconic attractions, including the Louvre Museum, Eiffel Tower, Notre Dame, Arc de Triomphe, Jardin du Luxembourg, Pantheon, and Palace of Versailles.</li><li>5-6Days- Price:Rs.90000</li></ul> },
        { day: " Journey of America", details: <ul><li>Champs-Elysees, Louvre Museum, Galeries Lafayette Haussmann, and Arc de Triomphe. In the evening, catch a fascinating cabaret show at Lido</li><li>Royal Palace of Madrid, Museo Nacional del Prado, and Buen Retiro Park. Make sure to stop by one of the tapas bars to relish some delicious snacks and beverages.</li><li>Check out and transfer to airport.</li><li>7-8Days- Price:Rs.145000</li></ul> }
      ]},
    maldives: {
      title: "Maldives Package",
      level: [
        {
          day: " Maldives Mystery", details: <ul><li>Standard beach villas,beach sunset,scuba diving, Basic meals and Travel parks with return flight Upon your arrival at the Velana International Airport in Male, our tour manager will guide you to the ferry terminal to catch your speedboat and take you to Maafushi Island. The journey takes around 45 minutes and offers a panoramic view of the beautiful islands along the route.Check into the hotel and spend the rest of the day exploring places around the resort. You can also enjoy a candlelight dinner on the beach.</li><li>snorkelling, scuba diving, swimming, dolphin safaris, and catamaran riding</li>
            <li>Rent a private  boat to enjoy the tiny islands around Maafushi.</li><li>explore the many tourist attractions, including Sultan Park, the Artificial Beach, Rasfannu, and the Victory Monument.Later, catch your return flight to India.</li><li>4-5Days- Price:Rs.94000</li></ul>
        },
        { day: " Maldives Splendid ", details: <ul><li>Flagship Resorts with premium water villas, Roaming routes of Thrillophilia,coral reef tours</li><li>exciting adventure, you can head to Vaadhoo Island, where the magic of the Glowing Beach is sure to win you over.</li><li> Cinnamon Hakurra, where you can see some adorable dolphins being playful, before returning to your hotel.</li><li>6-7Days- Price:Rs.110000</li></ul> },
        { day: " Journey of Maldives", details: <ul><li>Resort transfer by speedboat, beach sunset.Snorkeling, scuba diving, coral reef tours.Relax on beach, shopping, return flight.</li><li>scuba diving, snorkelling, surfing, sailing, canoeing, or water skiing.</li><li>Spend the day island hopping to enjoy activities offered by the resort. Or, you could lie down by the beach to soak in the views or dip in the pool. Get back to the hotel for a delicious dinner.</li><li>7-8Days- Price:Rs.156000</li></ul> }
      ]
    }}
  const selectedPackage = packages[id.toLowerCase()];
  if (!selectedPackage) return <h2>Package Not Found</h2>;
  return (
    <div style={{ padding: "20px", margin: "auto", background: `url(${tr2})`, backgroundSize: "cover", minHeight: "95vh" }}>
      <h1 style={{ color: "purple", textAlign: "center" }}>{selectedPackage.title}</h1>
      <select onChange={(e) => setSelectedDay(e.target.value)} value={selectedDay || ""} style={{ padding: "8px", marginBottom: "20px", width: "100%", fontSize: "20px" }} >
        <option value="" style={{ color: "purple" }}>-- Select a packages --</option>
        {selectedPackage.level.map((item, index) => (
          <option key={index} value={index}>{item.day}</option>
        ))}
      </select>
      {selectedDay !== null && selectedDay !== "" && (
        <div style={{
          fontSize: "20px",
          color: "purple",
          border: "1px solid #ccc",
          padding: "15px",
          borderRadius: "6px",
          background: "#fdfcfd87"
        }}>
          <h3>{selectedPackage.level[selectedDay].day}</h3>
          <p>{selectedPackage.level[selectedDay].details}</p>
        </div>
      )}
      <div style={{
        display: "flex", justifyContent: "space-between", marginTop: "30px"
      }}><button onClick={() => navigate(-1)} style={{ backgroundColor: "blue", color: "white", borderRadius: "5px", fontSize: "25px", marginLeft: "50px" }}> Back </button>
        <button onClick={() => {
          if (selectedDay === "") {
            alert("please select a package day before booking");
            return
          }
          navigate("/tickets", {
            state: {
              selectedDay: selectedPackage.level[selectedDay].day,
              destination: selectedPackage.title
            }})
        }} style={{ backgroundColor: "blue", color: "white", borderRadius: "5px", fontSize: "25px" }}> Book tickets </button>
      </div></div>
  )}
