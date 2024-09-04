
import About from "../components/About"
import { ContactUs } from "../components/ContactUs"
import { Contract } from "../components/Contract"
import { Corousel } from "../components/Corousel"
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import Review from "../components/Review"

export const Home = () =>{


    return <div className="">
           <Navbar/>
           <Corousel /> 
           <About/>
           <Review />
           <div className="flex justify-center">
           <Contract/>
           </div>
           <ContactUs/> 
           <Footer /> 
         </div>
}
