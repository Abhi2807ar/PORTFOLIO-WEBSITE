import { FaLinkedin } from "react-icons/fa";
import logo from "../assets/raviKumarLogo.webp"
const Navbar = () => {
  return (
    <nav className="flex-items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label="Home">
            <img src={logo} className="mx-2" width={50} height={33}
            alt="Logo" /></a>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/abhijeetaryan2807/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin">

            </a>

            <a href="https://www.linkedin.com/in/abhijeetaryan2807/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin">  
            <FaLinkedin/>   
            </a>

            <a href="https://www.linkedin.com/in/abhijeetaryan2807/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin"> 
            </a>

            <a href="https://www.linkedin.com/in/abhijeetaryan2807/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin">
            </a>
        </div>
    </nav>
    
  )
}

export default Navbar