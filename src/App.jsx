import { ToastContainer } from "react-toastify";
import { Contacts } from "./components/Contacts";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { MiddleSection } from "./components/MiddleSection";

export function App() {  
  return ( 
     <> 
      <ToastContainer />
      <Header/>
      <Main/>
      <MiddleSection/>
      <Contacts/>
      <Footer/>       
   </> 
   
  )
}