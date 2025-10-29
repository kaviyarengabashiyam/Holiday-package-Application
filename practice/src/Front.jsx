import react from 'react';
import fim from "./assets/fim.jpg"
import logo from "./assets/logo3.png"
import { useNavigate } from 'react-router-dom';
const Front=()=>{
      const navigate = useNavigate()
    return(
    <><div style={{background:`url(${fim})`,backgroundSize:"cover",  backgroundrepeat: "no-repeat",
textAlign:"center",minHeight:"97vh",color: "#71047fff"}}>
        <div style={{ display: "flex" }}><img src={logo} style={{ height: "70px", width: "90px" }}></img>
                  <h1 style={{ color: "purple", fontSize: "40px", margin: "9px" ,textAlign:"center"}}>Highfly Holidays</h1></div>
    <div style={{ textAlign: "center", marginTop: "80px", color: "#070707ff",backgroundColor:"#ddd",width:"650px",marginLeft:"500px",borderRadius:"20px",height:"300px"}}>
        <h1 style={{color:"purple"}}>Highfly Holidays</h1>
        <h3>Travel is the only thing you can buy that makes you richer</h3>
        <h3>Adventure awaits</h3><button className="bt" onClick={() => navigate("/login")}>Let's Explore</button>
      </div></div>
    </>
    )}
export default Front
