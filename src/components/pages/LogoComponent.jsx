import mives from "../assets/mives.jpg";

function HomePage() {
  return (
    <div className="h-72 w-44 mt-16">
      <div className="flex justify-self ml-9">
        <div className="text-center text-xs font-bold text-white font-mono my-5 hover:bg-gray-700 p-3 rounded-t-xl border-b-2 border-black ease-in-out duration-1000">
          <span>
            Nothing is impossible in this universe even the impossible word take
            itself I M Possible on it.
          </span>
          <p>
            you know what, there is still some people in this universe that they
            think like a monk.
          </p>
        </div>

        <div className="h-96 flex justify-center">
          <h1 className="mt-6 rounded-xl text-white text-5xl ml-36 font-extrabold">
            Welcome <span className="text-gray-500">To</span> NoteZone
          </h1>
          <img
            src={mives}
            alt="book123"
            className="ml-6 mt-24 h-36 w-36 rounded-full flex items-center animate-bounce"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
