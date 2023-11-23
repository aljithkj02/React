import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {

  return (
    <div>
      <Navbar />
      <div className="w-10/12 m-auto">
        <Outlet />
      </div>
  </div>
  )
}

export default App
