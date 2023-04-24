import { supabase } from "../js/supabaseClient";

const Patient = () => {
  const handleSubmit = async () => {
    const name = document.getElementById("name").value;
    const hname = document.getElementById("hname").value;
    const age = document.getElementById("age").value;
    const address = document.getElementById("address").value;
    const cnum = document.getElementById("cnum").value;
    const { error } = await supabase.from("Patients").insert({
      name: name,
      hospital: hname,
      age: age,
      address: address,
      contact: cnum,
    });
    if (error) {
      console.log(error);
    } else {
      document.getElementById("submit").innerText = "Submitted";
    }
  };

  return (
    <div className="min-h-screen flex justify-center">
      <div className="w-1/2 flex flex-col  items-center mt-14">
        <h1 className="text-5xl jose text-[#002B5B] mb-10 underline  decoration-[#002B5B] underline-offset-[12px]">
          Enter A New Request
        </h1>
        <input
          placeholder="Name"
          type="text"
          id="name"
          className={`bg-[#BBD6B8] placeholder-white mb-5 w-1/2 h-16 pl-3  rounded-xl jose text-xl text-[#002B5B] hover:bg-[#AEC2B6] transition-all ease-in-out duration-300 `}
        ></input>
        <input
          placeholder="Hospital Name"
          type="text"
          id="hname"
          className={`bg-[#BBD6B8] placeholder-white mb-5 w-1/2 h-16 pl-3  rounded-xl jose text-xl text-[#002B5B] hover:bg-[#AEC2B6] transition-all ease-in-out duration-300 `}
        ></input>
        <input
          placeholder="Age"
          type="number"
          id="age"
          className={`bg-[#BBD6B8] placeholder-white mb-5 w-1/2 h-16 pl-3  rounded-xl jose text-xl text-[#002B5B] hover:bg-[#AEC2B6] transition-all ease-in-out duration-300 `}
        ></input>
        <input
          placeholder="Address"
          type="text"
          id="address"
          className={`bg-[#BBD6B8] placeholder-white mb-5 w-1/2 h-16 pl-3  rounded-xl jose text-xl text-[#002B5B] hover:bg-[#AEC2B6] transition-all ease-in-out duration-300 `}
        ></input>
        <input
          placeholder="Contact Number"
          type="number"
          id="cnum"
          className={`bg-[#BBD6B8] placeholder-white mb-5 w-1/2 h-16 pl-3  rounded-xl jose text-xl text-[#002B5B] hover:bg-[#AEC2B6] transition-all ease-in-out duration-300 `}
        ></input>
        <button
          id="submit"
          className={`bg-[#BBD6B8] mt-5 placeholder-white mb-5 w-1/2 h-16 pl-3  rounded-xl jose text-xl text-[#002B5B] hover:bg-[#AEC2B6] transition-all ease-in-out duration-300 flex items-center`}
          onClick={() => handleSubmit()}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Patient;
