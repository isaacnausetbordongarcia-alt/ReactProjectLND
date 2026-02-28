import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Schedule from "./pages/schedule/Schedule"
import Contact from "./pages/contact/Contact"
import Privacy from "./components/privacy/Privacy"
import Term from "./components/term/Term"
import ForumList from "./pages/forum-list/ForumList"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home/>}/>
      <Route path="/schedule" element={<Schedule />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/forum-list" element={<ForumList />}/>
      <Route path="/privacy" element={<Privacy />}/>
      <Route path="/term" element={<Term />}/>
      <Route path="*" element={<Home/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App
