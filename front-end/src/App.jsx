import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Registration from './components/Registration'
import Profile from './components/Profile';
import FuelQuote from "./components/FuelQuote";
import Container from "./components/Container";
import QuoteHistory from "./components/QuoteHistory"
import { useState } from "react";

export default function App() {

  const [navShow, setShowNav] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Container navShow={navShow}/>}>
          <Route index path="/" element={<Login setNavShow={setShowNav}/>} />
          <Route path="/register" element={<Registration />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/fuelquote" element={<FuelQuote />} />
          <Route path="/quotehistory" element={<QuoteHistory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
