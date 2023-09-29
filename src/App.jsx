import { Outlet } from "react-router-dom"
import Header from "./componants/Header"
import Footer from "./componants/Footer"

function App() {


  return (
    < >
     <Header />
     <Outlet />
     <Footer /> 
    </>
  )
}

export default App
