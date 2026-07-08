import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Restaurants from "./pages/Restaurants";
import Profile from "./pages/Profile";
import Delivery from "./pages/Delivery";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/orders" element={<Orders />} />

        <Route path="/restaurants" element={<Restaurants />} />

        <Route path="/profile" element={<Profile />} />
        
        <Route path="/delivery" element={<Delivery />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;