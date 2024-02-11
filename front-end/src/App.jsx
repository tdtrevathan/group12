import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Registration from './components/Registration'
import FuelQuote from "./components/FuelQuote";
import Profile from './components/Profile';

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/fuelqoute" element={<FuelQuote />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )

}
