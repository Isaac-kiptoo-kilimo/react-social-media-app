
import './App.scss'
import Navbar from './layout/Navbar'
import Main from './layout/Main'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './layout/Login'
import Register from './layout/Register'
// import Timeline from './pages/Timeline'
// import FriendsPage from './pages/FriendsPage'
// import GroupsPage from './pages/GroupsPage'
// import Photos from './pages/Photos'
// import Events from './pages/Events'
// import Videos from './pages/Videos'
// import Profile from './pages/Profile'


function App() {

  return (
<BrowserRouter>
<div className="social-media">
  <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="*" element={<Main/>} />
          {/* <Route path="profile" element={<Profile />} />
          <Route path="timeline" element={<Timeline />} />
          <Route path="friends" element={<FriendsPage />} />
          <Route path="groups" element={<GroupsPage />} />
          <Route path="videos" element={<Videos />} />
          <Route path="photos" element={<Photos />} />
          <Route path="events" element={<Events />} /> */}
    {/* </Route> */}
  </Routes>
  {/* <Navbar/>
  <Main/> */}
</div>
</BrowserRouter>
  )
}

export default App
