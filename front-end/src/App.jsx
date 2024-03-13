import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useState } from "react";
import Container from "./components/Container";
import FuelQuote from "./components/FuelQuote";
import Login from "./components/Login";
import Profile from './components/Profile';
import QuoteHistory from "./components/QuoteHistory";
import Registration from './components/Registration';

export default function App() {

  const [loggedInID, setLoggedInID] = useState('');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Container loggedInID={loggedInID}/>}>
          <Route index path="/" element={<Login setLoggedInID={setLoggedInID}/>} />
          <Route path="/register" element={<Registration />} />
          <Route path="/profile" element={<Profile loggedInID={loggedInID}/>} />
          <Route path="/fuelquote" element={<FuelQuote loggedInID={loggedInID}/>} />
          <Route path="/quotehistory" element={<QuoteHistory loggedInID={loggedInID}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
