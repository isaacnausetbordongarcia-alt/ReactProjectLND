import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Schedule from "./pages/schedule/Schedule"
import Contact from "./pages/contact/Contact"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/schedule" element={<Schedule />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="*" element={<Home/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App
