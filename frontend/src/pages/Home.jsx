

import {About} from "../components/About"
import { ContactUs } from "../components/ContactUs"
import { Contract } from "../components/Contract"
import { Corousel } from "../components/Corousel"
import { Footer } from "../components/Footer"

import { Navbar } from "../components/Navbar"

export const Home = () =>{


    return <div className="">
           <Navbar/>
           <Corousel/> 
           <About/>
           <div className=" flex justify-center pb-20">
           <Contract/>
           </div>
           <ContactUs/>
          <div className="">
          </div>
         </div>
}
