import React from "react";
import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="py-6 bg-gray-100 text-gray-900 bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800">
      <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
        <div className="grid grid-cols-12">
          <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
            <Link className="flex justify-center space-x-3 md:justify-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-600">
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="300.000000pt"
                  height="300.000000pt"
                  viewBox="0 0 300.000000 300.000000"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g
                    transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
                    fill="#000000"
                    stroke="none"
                  >
                    <path
                      d="M1285 2754 c-250 -45 -473 -158 -658 -333 -354 -337 -483 -829 -341
-1301 81 -269 273 -525 510 -683 111 -74 270 -150 352 -168 28 -7 52 -15 52
-18 0 -3 19 -7 41 -8 23 -2 47 -7 53 -12 46 -38 413 -39 558 -3 96 25 145 40
183 57 17 8 33 14 37 14 8 1 33 15 138 74 185 104 367 302 463 502 51 107 66
144 73 181 3 22 9 44 13 49 3 6 6 15 8 20 25 119 34 191 35 290 1 139 -6 203
-34 300 -33 115 -39 146 -32 157 4 7 2 8 -4 4 -7 -4 -12 -1 -12 8 0 9 -20 61
-44 116 -149 338 -451 610 -796 714 -186 56 -418 72 -595 40z m469 -189 c55
-9 109 -20 118 -25 10 -5 25 -7 34 -3 12 4 15 3 10 -5 -5 -8 0 -12 12 -12 66
0 257 -122 373 -239 211 -211 321 -480 321 -786 0 -621 -499 -1118 -1122
-1117 -361 1 -686 166 -900 456 -51 70 -134 232 -125 246 3 6 2 10 -3 10 -5 0
-14 30 -21 67 -7 38 -16 82 -19 98 -4 17 -7 100 -6 185 1 126 5 171 23 240 63
239 146 391 303 552 260 268 627 389 1002 333z"
                    />
                    <path
                      d="M1210 2064 c-180 -78 -273 -374 -176 -563 108 -210 103 -189 111
-417 6 -151 18 -208 58 -276 46 -78 84 -97 178 -89 30 2 46 61 53 194 10 198
39 294 100 327 25 14 28 13 41 -4 25 -33 38 -119 44 -297 5 -155 8 -180 25
-198 21 -23 65 -28 97 -11 13 7 19 7 19 0 0 -5 13 -10 30 -10 23 0 35 8 56 39
39 60 52 118 59 268 8 160 24 232 70 325 61 119 78 189 73 288 -5 80 -10 98
-56 193 -58 122 -115 190 -187 223 -76 36 -119 32 -217 -20 -58 -31 -102 -47
-139 -50 l-54 -6 45 17 c42 15 43 17 20 23 -14 4 -48 19 -77 34 -60 30 -119
33 -173 10z m50 -29 c0 -2 -13 -11 -29 -20 -16 -8 -57 -40 -90 -71 -34 -31
-61 -52 -61 -47 0 22 56 87 98 114 40 26 82 38 82 24z"
                    />
                  </g>
                </svg>
              </div>
              <span className="self-center text-2xl font-semibold">
                <p>
                  Dentist <span className="text-rose-400">Jishan</span>
                </p>
              </span>
            </Link>
          </div>
          <div className="col-span-6 text-center md:text-left md:col-span-3">
            <p className="pb-1 text-lg font-medium">Have a Look</p>
            <ul>
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>Service</Link>
              </li>
              <li>
                <Link>FAQ</Link>
              </li>
              <li>
                <Link>Blog</Link>
              </li>
              <li>
                <Link>Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-6 text-center md:text-left md:col-span-3">
            <p className="pb-1 text-lg font-medium">Service</p>
            <ul>
              <li>
                <Link>General Dentistry</Link>
              </li>
              <li>
                <Link>Cosmetic Dentistry</Link>
              </li>
              <li>
                <Link>Periodontal Dentistry</Link>
              </li>
              <li>
                <Link>Orthodontic Dentistry</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid justify-center pt-6 lg:justify-between">
          <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
            <span>©2023 All rights reserved</span>
            <a rel="noopener noreferrer" href="#">
              <span>Privacy policy</span>
            </a>
            <a rel="noopener noreferrer" href="#">
              <span>Terms of service</span>
            </a>
          </div>
          <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
            <Link to="/">
              <AiFillFacebook size={"30px"}></AiFillFacebook>
            </Link>
            <Link to="/">
              <AiFillGithub size={"30px"}></AiFillGithub>
            </Link>
            <Link to="/">
              <AiFillTwitterCircle size={"30px"}></AiFillTwitterCircle>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
