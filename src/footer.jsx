import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <div>
      <div className="relative flex flex-col md:flex-row w-full bg-gray-900 h-auto lg:h-72">
        {/* Background Curve */}
        <svg
          className="hidden md:block absolute bottom-0 left-0 w-full h-full"
          viewBox="0 40 1440 200"
          preserveAspectRatio="none"
          
        >
        <path fill="gray" d="M0,0 L0,75 C360,120 1080,30 1440,75 L1440,0 Z" />
        </svg>

        <div className="relative z-10 flex flex-col md:flex-row w-full">
          {/* LEFT SIDE */}
          <div className="flex flex-col h-full w-full md:w-1/2 items-center md:items-start justify-center lg:px-10 lg:py-8 text-center md:text-left">
            <h2 className="text-white text-xl font-semibold mb-3">
              Let’s Connect
            </h2>

            {/* Email */}
            <a
              href="mailto:muhammadzainweb.dev@gmail.com"
              className="flex items-center gap-2 text-gray-300 hover:text-indigo-400 transition"
            >
              <HiOutlineMail className="text-indigo-400 text-lg" />
              muhammadzainweb.dev@gmail.com
            </a>

            {/* Phone */}
            <p className="text-gray-300 mt-2">📱 0309-7966970</p>

            {/* Social Icons */}
            <div className="flex gap-5 my-5 text-xl">
              <a
                href="https://wa.me/923097966970"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://github.com/zain929292"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-indigo-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/m-zain-/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-indigo-400 transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden md:flex h-full w-full md:w-1/2 items-center justify-center text-white">
            <div className="max-w-md text-center md:text-left px-4">
              <h3 className="text-lg font-semibold mb-2">About Me</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Frontend Developer specializing in React & Next.js.
                Passionate about building responsive, high-performance web
                applications and clean UI/UX experiences.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="w-full text-center text-sm text-gray-400 pb-3 bg-gray-900">
        © {new Date().getFullYear()} Zain. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
