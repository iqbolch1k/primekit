import { Route, Routes } from "react-router-dom"
import Start from "./pages/Start/Start"
import About from "./pages/About/About"
import Solutions from "./pages/Solutions/Solutions"
import Pages from "./pages/Pages/Pages"
import Contact from "./pages/Contact/Contact"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/solutions" element={<Solutions/>}/>
        <Route path="/pages" element={<Pages/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App