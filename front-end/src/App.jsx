import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Registration from './components/Registration'
import Profile from './components/Profile';
import FuelQuote from "./components/FuelQuote";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/fuelquote" element={<FuelQuote />} />
      </Routes>
    </BrowserRouter>
  )
}
