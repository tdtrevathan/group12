import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Registration from './components/Registration'
import FuelQuote from "./components/FuelQuote";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/fuelqoute" element={<FuelQuote />} />
      </Routes>
    </BrowserRouter>
  )

}
