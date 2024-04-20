import { createBrowserRouter, createRoutesFromElements, Route, Routes, RouterProvider } from "react-router-dom";

import { useState } from "react";
import Container from "./components/Container";
import FuelQuote from "./components/FuelQuote";
import Login from "./components/Login";
import Profile from './components/Profile';
import QuoteHistory from "./components/QuoteHistory";
import Registration from './components/Registration';

export default function App() {

  const [loggedInUsername, setLoggedInUsername] = useState('');
  const [loggedInAddress, setLoggedInAddress] = useState('');

  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="" element={
            <Container 
              loggedInUsername={loggedInUsername}
              setLoggedInUsername={setLoggedInUsername}
              setLoggedInAddress={setLoggedInAddress}/>
        }>
          <Route index path="/" element={<Login setLoggedInUsername={setLoggedInUsername}/>} />
          <Route path="/register" element={<Registration />} />
          <Route path="/profile" element={<Profile loggedInUsername={loggedInUsername} setLoggedInAddress={setLoggedInAddress}/>} />
          <Route path="/fuelquote" element={<FuelQuote loggedInUsername={loggedInUsername} loggedInAddress={loggedInAddress}/>} />
          <Route path="/quotehistory" element={<QuoteHistory loggedInUsername={loggedInUsername}/>} />
        </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  )
}
