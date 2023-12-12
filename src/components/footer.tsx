"use client";
import React from "react";
import {
  FaDiscord,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaEnvelope,
  FaCreativeCommons,
  FaInstagram,
} from "react-icons/fa";
import { SiDevpost } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-900 opacity-95 w-full h-20 flex justify-around items-center mt-5">
      <div className="hover:scale-125 transition-transform">
        <FaDiscord size={30} />
      </div>
      <div className="hover:scale-125 transition-transform">
        <FaGithub size={30} />
      </div>
      <div className="hover:scale-125 transition-transform">
        <FaTwitter size={30} />
      </div>
      <div className="hover:scale-125 transition-transform">
        <FaLinkedin size={30} />
      </div>
      <div className="hover:scale-125 transition-transform">
        <FaYoutube size={30} />
      </div>
      <div className="hover:scale-125 transition-transform">
        <FaInstagram size={30} />
      </div>
      <div className="hover:scale-125 transition-transform">
        <FaEnvelope size={30} />
      </div>
      <div className="hover:scale-125 transition-transform">
        <SiDevpost size={30} />
      </div>
    </footer>
  );
};

export default Footer;
