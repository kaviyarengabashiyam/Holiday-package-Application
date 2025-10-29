import './App.css'
import react from 'react';
import Home from './Home'
import './app.css'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Login'
import Front from './Front'
import Destiny from './Destiny'
import Tickets from './Tickets'
import Contact from './Contact'
import Details from './Details'
import BookingHistory from './Booking'
import UpdateBooking from './update-booking'
function App() {
return(
<BrowserRouter>
<Routes>
  <Route path="/home" element={<Home />}/>
  <Route path="/" element={<Front/>}/>
    <Route path="/login" element={<Login />}/> 
    <Route path="/destiny" element={<Destiny />}/>
    <Route path="/tickets" element={<Tickets />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/Booking" element={<BookingHistory />}/>
    <Route path="/details/:id" element={<Details />} /> 
    <Route path="/update-booking" element={<UpdateBooking/>}/>
</Routes>
</BrowserRouter> 
)}
export default App
