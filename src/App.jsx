import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Routes/Home'
import About from './Routes/About'
import Download from './Routes/Download'
import Contact from './Routes/Contact'
import Navbar from './Routes/Navbar'

function App() {
  

  return (
    
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>}/>
            <Route path="/Home" element={<Home/>} />            
            <Route path='/About' element={<About/>}/>
            <Route path='/Download' element={<Download/>}/>
            <Route path='/Contact' element={<Contact/>}/>
        </Routes>
      </Router>
    
  )
}

export default App
