import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home/Home";
import AllRooms from "./Pages/AllRooms/AllRooms";
import RoomDetails from "./Pages/RoomDetails/RoomDetails";
import Footer from "./Components/Footer";
import MyBookings from "./Pages/My-Bookings/MyBookings";
import HotelReg from "./Components/HotelReg";

function App() {
  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <>
      {!isOwnerPath && <Navbar />}
      {false && <HotelReg/>}
      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<AllRooms />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="/my-bookings" element={<MyBookings />} />
        
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
