import andst from "../assets/andst.jpg";

import mentors from "../assets/mentors.png";

const AboutPage = () => {
  return (
    <div className="flex">
      <div className="mt-32 text-center text-white ml-10 font-serif">
        <h1>
          Er. Aananda Soti
          <br />
          sotiaananda51@gmail.com
          <br />
          Developer,Content Creater
        </h1>
        <img src={andst} alt="andst" className=" rounded-lg h-96 w-72" />
      </div>

      <div className="flex">
        <div className="bg-gray-800 w-96 mt-32 rounded-xl text-justify text-white text-xs ml-16 border-black border-2 p-2 font-mono">
          .......<h2>Dear Users...</h2>
          <span>
            As an accomplished IT professional with a robust background in
            systems architecture, network security, and software development, I
            specialize in crafting innovative solutions that drive business
            efficiency and growth. Leveraging a blend of strategic vision and
            technical acumen, I excel in managing complex projects, optimizing
            IT infrastructures, and implementing cutting-edge technologies. My
            expertise encompasses cloud computing, cybersecurity, and data
            analytics, enabling organizations to achieve seamless digital
            transformations and maintain competitive edges in rapidly evolving
            markets. With a proactive approach and a keen eye for emerging
            trends, I am dedicated to advancing IT strategies that align with
            business objectives and foster sustainable success.
          </span>
          <h4>-------------------------------------------------------</h4>
          <img src={mentors} alt="mentors" className="h-40 w-full" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
