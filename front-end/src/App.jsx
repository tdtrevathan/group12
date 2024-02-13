import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Registration from './components/Registration'
import Profile from './components/Profile';
import FuelQuote from "./components/FuelQuote";
import Container from "./components/Container";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Container />}>
          <Route index path="/" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/fuelquote" element={<FuelQuote />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
