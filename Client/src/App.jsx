import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home/Home";
import AllRooms from "./Pages/AllRooms/AllRooms";
import RoomDetails from "./Pages/RoomDetails/RoomDetails";
import Footer from "./Components/Footer";
import MyBookings from "./Pages/My-Bookings/MyBookings";
import HotelReg from "./Components/HotelReg";
import Layout from "./Pages/hotelOwner/Layout/Layout";
import Dashboard from "./Pages/hotelOwner/Dashboard/Dashboard";
import ListRoom from "./Pages/hotelOwner/ListRoom/ListRoom";
import AddRoom from "./Pages/hotelOwner/AddRoom/AddRoom";

function App() {
  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <>
      {!isOwnerPath && <Navbar />}
      {false && <HotelReg />}
      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<AllRooms />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/owner" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="list-room" element={<ListRoom />} />
            <Route path="add-room" element={<AddRoom />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
