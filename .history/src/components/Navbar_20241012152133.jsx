import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";
import logo from "../assets/companylogo.png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} className="mx-2" width-20 height-16} alt="Logo" />
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
          href="https://www.geeksforgeeks.org/user/abhijeetaykem/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linkedin"
        >
          <SiGeeksforgeeks />
        </a>

        <a
          href="https://github.com/Abhi2807ar"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://leetcode.com/u/abhi979850/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Leetcode"
        >
          <SiLeetcode />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
