import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Schedule from "./pages/schedule/Schedule"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/schedule" element={<Schedule />}/>
      <Route path="*" element={<Home/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App
