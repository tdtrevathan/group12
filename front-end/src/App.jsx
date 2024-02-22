import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Registration from './components/Registration'
import Profile from './components/Profile';
import FuelQuote from "./components/FuelQuote";
import Container from "./components/Container";
import QuoteHistory from "./components/QuoteHistory"
import { useState } from "react";

export default function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Container loggedIn={loggedIn}/>}>
          <Route index path="/" element={<Login setLoggedIn={setLoggedIn}/>} />
          <Route path="/register" element={<Registration />} />
          <Route path="/profile" element={<Profile loggedIn={loggedIn}/>} />
          <Route path="/fuelquote" element={<FuelQuote loggedIn={loggedIn}/>} />
          <Route path="/quotehistory" element={<QuoteHistory loggedIn={loggedIn}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
