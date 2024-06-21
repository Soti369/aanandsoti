import { useState } from "react";

import { Link } from "react-router-dom";
// import emoji from '../components/assets/emoji.gif'
import andst from "../components/assets/andst.jpg";

function LogoComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-end mt-12">
      <div className="flex pt-32">
        <div className="flex gap-10 mr-24 w-72">
          <div className=" bg-pink-100 border-4 border-black px-4 rounded-t-3xl mt-6">
            <img
              src={andst}
              alt="emoji123"
              className="motion-reduce animate-pulse ml-2 mt-2 rounded-full h-16"
            ></img>

            <div className="text-center text-xs font-mono  hover:bg-red-400 p-3 rounded-t-xl border-b-2 border-black ease-in-out duration-1000">
              Nothing is impossible in this universe even the impossible word
              take itself I M Possible on it.
              <br />
              you know what, there is still some people in this universe that
              they think like a monk.
            </div>
            <div className="flex justify-left">
              <form onSubmit={handleSubmit}>
                <div className=" hover:bg-yellow-200 w-72 rounded-xl p-9 h-72 ease-in-out duration-1000 ">
                  <div className="h-48">
                    <label className="font-mono text-sm mt-2">Username</label>
                    <br />
                    <input
                      className="w-56 h-8 rounded-3xl border-2 border-black pl-3 mb-3"
                      type="firstname"
                      id="firstname"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="enter your username"
                    />
                    <br />
                    <label className="font-mono text-sm"> Password </label>
                    <br />
                    <input
                      className="w-56 h-8 rounded-3xl border-2 mb-3 border-black pl-3"
                      type="lastname"
                      id="lastname"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="enter your password"
                    />

                    <Link
                      to="/home"
                      className=" bg-sky-400 p-1 rounded-xl mr-1 text-s font-mono"
                    >
                      login
                    </Link>

                    <Link
                      to="signup"
                      className="mt-2 bg-sky-400 p-1 rounded-xl ml-28 font-mono"
                    >
                      signup
                    </Link>
                    <br />
                    <Link to="/" className="ml-16 mt-2 text-xs">
                      if you don't have account.{" "}
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoComponent;
