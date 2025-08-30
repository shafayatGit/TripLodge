
import { useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'

function App() {
  
  const isOwnerPath = useLocation().pathname.includes("owner");

  return (



    <>
     { !isOwnerPath && <Navbar/>}
    </>
  )
}

export default App
