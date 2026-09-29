import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Components/Login'
import Register from './Components/Register'
import Home from './pages/Home'
import Fpassword from './Components/Fpassword'
import Navbar from './Components/Navbar'
import Profile from './Components/Profile'
import Profilepage from './pages/Profilepage'
import Jobs from './pages/Jobs'
import Notification from './pages/Notification'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path='/fpassword' element={<Fpassword/>}/>
          <Route path='/profilepage'element={<Profilepage/>}/>
          <Route path='/jobs' element={<Jobs/>}/>
          <Route path='/notification' element={<Notification/>}/>
          
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
