
import './App.scss'
import Navbar from './layout/Navbar'
import Main from './layout/Main'
import { BrowserRouter } from 'react-router-dom'


function App() {

  return (
<BrowserRouter>
<div className="social-media">
  <Navbar/>
  <Main/>
</div>
</BrowserRouter>
  )
}

export default App
