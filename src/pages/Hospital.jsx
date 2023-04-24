import { useState } from "react";
import { supabase } from "../js/supabaseClient";
import sha256 from "crypto-js/sha256";
import Base64 from "crypto-js/enc-base64";
import { useNavigate } from "react-router-dom";
const Hospital = () => {
  // const delay = (delayInms) => {
  //   return new Promise((resolve) => setTimeout(resolve, delayInms));
  // };
  const navigate = useNavigate();
  const [auth, setAuth] = useState(false);
  const [data, setData] = useState(null);
  const [loginError, setLoginError] = useState(false);
  const login = async () => {
    const password = document.getElementById("password");
    const hash = Base64.stringify(sha256(password.value));
    const { data, error } = await supabase
      .from("Hospitals")
      .select("*")
      .eq("password", hash);
    if (data[0]) {
      setAuth(true);
      setData(data);
    } else {
      setLoginError(true);
      const errorText = document.getElementById("errorText");
      errorText.classList.remove("invisible");
      setAuth(false);
    }
    if (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex w-screen">
      {auth && navigate("/hospital/patient", { state: data[0] })}
      <div className="w-full min-h-screen  flex justify-center items-center flex-col">
        <h1 className="text-7xl jose text-[#002B5B]">EnviRoute</h1>
        <h1 className="text-2xl text-[#002B5B] pb-16">
          From Waste To Wellness
        </h1>

        <input
          placeholder="Email"
          type="text"
          className={`bg-[#BBD6B8] border-4 mb-5 w-1/3 sm:w-1/2 h-16 pl-5  rounded-xl jose text-xl text-[#002B5B] hover:bg-[#AEC2B6] transition-all ease-in-out duration-300 ${
            loginError ? "border-red-700" : "border-[#AEC2B6]"
          }`}
        ></input>
        <input
          placeholder="Password"
          type="password"
          id="password"
          className={`bg-[#BBD6B8] border-4 mb-5 w-1/3 sm:w-1/2 h-16 pl-5  rounded-xl jose text-xl text-[#002B5B] hover:bg-[#AEC2B6] transition-all ease-in-out duration-300 ${
            loginError ? "border-red-700" : "border-[#AEC2B6]"
          }`}
        ></input>
        <h1
          id="errorText"
          className="invisible transition-all ease-in-out duration-300 text-xl pb-5 jose text-red-700"
        >
          Your email or password is incorrect.
        </h1>
        <button
          onClick={async () => {
            await login();
            console.log(auth);
          }}
          className="bg-[#BBD6B8] w-1/3 h-16  rounded-xl jose text-3xl text-[#002B5B] hover:bg-[#AEC2B6] transition-all ease-in-out duration-300"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Hospital;
