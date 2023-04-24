import { useEffect } from "react";

const Loading = () => {
  const delay = (delayInms) => {
    return new Promise((resolve) => setTimeout(resolve, delayInms));
  };
  useEffect(() => {
    const onRender = async () => {
      const trash = document.getElementById("trash");
      const recycle = document.getElementById("recycle");
      const heart = document.getElementById("heart");
      trash.classList.remove("left-10");
      trash.classList.add("left-56");
      trash.classList.add("opacity-0");
      await delay(1000);
      recycle.classList.add("scale-110");
      recycle.classList.add("rotate-180");
      await delay(1200);
      heart.classList.remove("left-56");
      heart.classList.add("opacity-100");
      heart.classList.add("left-96");
    };
    onRender();
  }, []);
  return (
    <div className="fixed top-0 bg-white h-screen w-screen">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <h1 className="text-7xl jose text-[#002B5B]">EnviRoute</h1>
        <h1 className="text-2xl text-[#002B5B]">From Waste To Wellness</h1>
        <div className="w-1/3 h-44 relative">
          <img
            src={"/trash.png"}
            id="trash"
            alt="Represents trash."
            className="w-20 h-20 absolute top-10 left-10 transition-all ease-in-out duration-1000"
          />
          <img
            src={"/recycle.png"}
            id="recycle"
            alt="Represents recycling."
            className="w-36 h-20 absolute top-10 left-44 transition-all ease-in-out duration-1000 "
          />
          <img
            src={"/heart.png"}
            id="heart"
            alt="Represents a heart(idk)?."
            className="w-28 h-28 absolute top-6 left-56 opacity-0 transition-all ease-in-out duration-1000"
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;
