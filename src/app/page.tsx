import Link from "next/link";
import Image from "next/image";
import logo from "./public/logo.png"
import me from "./public/me.jpg"
export default function Home(){
  return(
  
    <div className = "homeContainer">
      <div className = "childContainer">
        <nav className = "Logo">
          <Image src = {logo} alt ="logo"
          />
        </nav>
        Hey, 
        <h1>
        My name is <span className = "blueColor"> Rooba Iftikhar</span>
        </h1>
        <br />
        I am Next JS Developer.
        This is my Official Portfolio 
        <br />
        Website to showcase my all works related to Web
        <br />
        development and UI Design.
        
        <div className = "childContainer2">
          <Image src={me} alt = "me"/>

        </div>
      </div>
    </div>
  )
}