import react from 'react';
import tr2 from "./assets/tr2.png"
import Navbar from './Navbar'
const Home=()=>{
    return(
    <>
    <div className='bg' style={{background:`url(${tr2})`,backgroundSize:"cover",minHeight:"97vh"}}>
            <Navbar/>
    </div>
    </>
    )}
export default Home