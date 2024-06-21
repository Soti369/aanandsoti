import React, { useState } from "react";
import { Link } from "react-router-dom";
import emoji from "../assets/emoji.gif";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstame] = useState("");
  const [lastname, setLastname] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div>
        <div className=" flex justify-center">
          <div className=" ml-9 h-96 bg-white py-5 px-5 rounded-t-2xl hover:bg-green-300 flex justify-center mt-36 ease-in-out duration-1000 drop-shadow-md shadow-white">
            <div className="text-3xl font-mono p-2 bg-sky-400 text-center rounded-t-2xl pt-6 border-2 border-black w-72">
              <span>Register Here</span>
              <h1 className="text-sm text-center px-4 mt-9 ">
                Welcome to the place where you want to connect with us.
              </h1>
              <img src={emoji} alt="emoji1" className="h-24 w-24 mt-6 ml-16" />
            </div>
            <form onSubmit={handleSubmit}>
              <div className=" hover:bg-yellow-200 w-72 rounded-xl p-9 h-72 ease-in-out duration-1000 ">
                <div className="h-48">
                  <label className="font-mono text-sm mt-2"> First name </label>
                  <br />
                  <input
                    className="w-44 h-8 rounded-3xl border-2 border-black pl-3 mb-3"
                    type="firstname"
                    id="firstname"
                    value={firstname}
                    onChange={(e) => setFirstame(e.target.value)}
                    placeholder="enter your first name"
                  />
                  <br />
                  <label className="font-mono text-sm"> Last name </label>
                  <br />
                  <input
                    className="w-44 h-8 rounded-3xl border-2 border-black pl-3"
                    type="lastname"
                    id="lastname"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    placeholder="enter your last name"
                  />

                  <br />
                  <label className="font-mono text-s"> Email </label>
                  <br />
                  <input
                    className="w-44 h-8 rounded-3xl border-2 border-black pl-3"
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="enter your email"
                  />
                  <br />

                  <label className="font-mono text-s"> Password </label>
                  <br />
                  <input
                    className="w-44 h-8 mb-3 rounded-3xl border-2 border-black pl-3"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="enter yous password"
                  />
                  <br />
                  <Link
                    to="/"
                    className="mt-3 bg-sky-400 p-1 rounded-xl text-s font-mono"
                  >
                    sign up
                  </Link>

                  <Link
                    to="/"
                    className="mt-2 bg-sky-400 p-1 rounded-xl text-s ml-3 font-mono"
                  >
                    click me
                  </Link>

                  <a href="/" className="ml-2 text-xs">
                    if you already have account.{" "}
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
