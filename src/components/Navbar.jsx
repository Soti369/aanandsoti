import React from "react";
import { Link } from "react-router-dom";
import { useTypewriter } from "react-simple-typewriter";
import mentors from "../components/assets/mentors.png";

function Gap() {
  const [typeEffect] = useTypewriter({
    words: [
      "  React Developer 🧑‍💻",
      "  Mobile Phone Connector 📲",
      "  React Native Developer 🎋",
    ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 100,
  });

  return (
    <div className="flex justify-end">
      <div className="text-right font-mono text-purple-950 bg-gray-500 px-3 mr-6 rounded-full">
        <h1>Hi I'm a Fluint</h1>
        <span className="text-white">{typeEffect}</span>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <div className="">
      <Link to="/home">
        <img
          src={mentors}
          alt="logo369"
          className="inline-block h-20 w-20 rounded-full ring-2 ring-black mt-12 ml-20 fixed top-0 left-0 right-0 cursor-pointer hover:-translate-y-3 duration-1000"
        />
      </Link>

      <div className="flex justify-end ">
        <div className="bg-pink-100 flex mt-16 gap-6 rounded-t-xl text-sm font-mono border-t-2 border-x-2 border-black font-Poppins font-semibold cursor-pointer px-3 py-1 hover:bg-red-400 h-11 w-90 mr-4 pl-5 ease-in-out duration-1000">
          <Link to="/signup" className="text-xl">
            👨‍💻|Sign up
          </Link>

          <Link to="/about" className="text-xl">
            👻|About Me
          </Link>

          <Link to="/home" className="text-xl">
            🏡|Home
          </Link>

          {/* Add more navigation links as needed */}
        </div>
      </div>
      <Gap />
    </div>
  );
}

export default Navbar;
