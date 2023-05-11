import Logo from "../assets/logo.png";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [IsOpen1, setIsOpen1] = useState(false);
  const [IsOpen2, setIsOpen2] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex flex-wrap items-center justify-between md:px-12 lg:px-24 py-4 bg-white backdrop-blur-lg shadow-md"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link to="/" className="group">
              <div className="flex items-center w-[50px] h-[50px]">
                <img src={Logo} alt="" className="object-cover" />
                <Link to="/" className="">
                  <button className="pl-2 text-2xl font-semibold text-[#020181]">
                    Himatif
                  </button>
                </Link>
              </div>
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i>
                <svg
                  fill="#020181"
                  width="40px"
                  height="40px"
                  viewBox="0 0 32 32"
                  enable-background="new 0 0 32 32"
                  id="Glyph"
                  version="1.1"
                  xml:space="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <path
                    d="M26,16c0,1.104-0.896,2-2,2H8c-1.104,0-2-0.896-2-2s0.896-2,2-2h16C25.104,14,26,14.896,26,16z"
                    id="XMLID_314_"
                  />
                  <path
                    d="M26,8c0,1.104-0.896,2-2,2H8c-1.104,0-2-0.896-2-2s0.896-2,2-2h16C25.104,6,26,6.896,26,8z"
                    id="XMLID_315_"
                  />
                  <path
                    d="M26,24c0,1.104-0.896,2-2,2H8c-1.104,0-2-0.896-2-2s0.896-2,2-2h16C25.104,22,26,22.896,26,24z"
                    id="XMLID_316_"
                  />
                </svg>
              </i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-wrap items-center" +
              (navbarOpen ? "flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="">
                <Link
                  className="px-3 py-2 inline-block lg:flex items-center text-md uppercase font-bold leading-snug"
                  to=""
                  onClick={() => setIsOpen1(!IsOpen1)}
                  onMouseLeave={() => setIsOpen1(false)}
                >
                  <button className="ml-2 flex items-center text-[20px] font-medium">
                    Agenda
                    <i className="text-lg leading-lg">
                      <svg
                        width="35px"
                        height="35px"
                        viewBox="-3 -1 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_429_11251)">
                          <path
                            d="M7 10L12 15"
                            stroke="#292929"
                            stroke-width="2.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12 15L17 10"
                            stroke="#292929"
                            stroke-width="2.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_429_11251">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </i>
                  </button>
                  <div
                    className={`bg-[#FAFEFF] shadow-lg lg:absolute rounded p-2 w-[200px] ${
                      IsOpen1 ? "block" : "hidden"
                    } w-full flex-grow lg:items-center lg:w-auto transition duration-500 ease-in-out`}
                    style={{ top: "80%" }}
                  >
                    <div className="flex flex-col">
                      <Link
                        to="/Seminar"
                        className="p-1 hover:bg-[#020181] hover:rounded-lg hover:text-white"
                      >
                        Seminar
                      </Link>
                    </div>
                    <div className="flex flex-col">
                      <Link
                        to="/Icc"
                        className="p-1 hover:bg-[#020181] hover:rounded-lg hover:text-white"
                      >
                        ICC Season 2
                      </Link>
                    </div>
                  </div>
                </Link>
              </li>
              <li className="">
                <Link
                  className="px-3 py-2 inline-block lg:flex items-center text-md uppercase font-bold leading-snug"
                  to=""
                  onClick={() => setIsOpen2(!IsOpen2)}
                  onMouseLeave={() => setIsOpen2(false)}
                >
                  <button className="ml-2 flex items-center text-[20px] font-medium">
                    About
                    <i className="text-lg leading-lg">
                      <svg
                        width="35px"
                        height="35px"
                        viewBox="-3 -1 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_429_11251)">
                          <path
                            d="M7 10L12 15"
                            stroke="#292929"
                            stroke-width="2.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12 15L17 10"
                            stroke="#292929"
                            stroke-width="2.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_429_11251">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </i>
                  </button>
                  <div
                    className={`bg-[#FAFEFF] shadow-lg lg:absolute rounded p-2 w-[200px] ${
                      IsOpen2 ? "block" : "hidden"
                    } w-full flex-grow lg:items-center lg:w-auto transition duration-500 ease-in-out`}
                    style={{ top: "80%" }}
                  >
                    <div className="flex flex-col">
                      <Link
                        to="/VisiMisi"
                        className="p-1 hover:bg-[#020181] hover:rounded-lg hover:text-white"
                      >
                        Vision and Mision
                      </Link>
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
