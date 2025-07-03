import React from "react";
import logo from "../assets/JD.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbarr = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      {/* Logo Section */}
      <div className="flex flex-shrink-0 items-center border-2 border-cyan-400 rounded-full p-1 w-24 h-24 justify-center">
        <a href="/" aria-label="Home">
          <img
            src={logo}
            alt="Logo"
            className="w-20 h-20 rounded-full object-cover"
          />
        </a>
      </div>

      {/* Social Media Icons */}
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/john-doe/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-blue-600"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/john-doe"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-gray-700"
        >
          <FaGithub />
        </a>
        <a
          href="https://x.com/JD/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="hover:text-blue-500"
        >
          <FaSquareXTwitter />
        </a>
        <a
          href="https://www.instagram.com/jd"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-pink-500"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbarr;
