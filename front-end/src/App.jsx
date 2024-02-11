import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Registration from './components/Registration'

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="register" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  )

}
