const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-5">
      <h1 className="text-7xl jose text-[#002B5B]">EnviRoute</h1>

      <h1 className="text-2xl text-[#002B5B]">What are you: </h1>
      <div className="pt-5 flex flex-col gap-5">
        <a href="/institute">
          <button className="bg-[#159895] w-56 h-16 rounded-2xl jose text-3xl text-[#002B5B] hover:bg-[#1A5F7A] transition-all ease-in-out duration-300">
            Institute
          </button>
        </a>
        <a href="/vendor">
          <button className="bg-[#159895] w-56 h-16 rounded-2xl jose text-3xl text-[#002B5B] hover:bg-[#1A5F7A] transition-all ease-in-out duration-300">
            Collectors
          </button>
        </a>
        <a href="/patient">
          <button className="bg-[#159895] w-56 h-16 rounded-2xl jose text-3xl text-[#002B5B] hover:bg-[#1A5F7A] transition-all ease-in-out duration-300">
            Patients
          </button>
        </a>
      </div>
    </div>
  );
};

export default Landing;
