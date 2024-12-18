import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import logo from "../assets/raviKumarLogo.webp";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} className="mx-2" width={50} height={33} alt="Logo" />
        </a>
      </div>

      {/* This will align the icons to the right */}
      <div className="flex items-center justify-end gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/abhijeetaryan2807/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linkedin"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://www.linkedin.com/in/abhijeetaryan2807/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linkedin"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://www.linkedin.com/in/abhijeetaryan2807/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linkedin"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://www.linkedin.com/in/abhijeetaryan2807/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label=""
        >
          <SiLeetcode />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
