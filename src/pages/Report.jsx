import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

const Report = () => {
  // const delay = (delayInms) => {
  //   return new Promise((resolve) => setTimeout(resolve, delayInms));
  // };
  const navigate = useNavigate();
  const login = async () => {
    let captcha = document.getElementById("captcha").value;

    if (validateCaptcha(captcha) == true) {
      navigate("/report/form", { state: true });
    } else {
      alert("Captcha Does Not Match");
    }
  };
  useEffect(() => {
    loadCaptchaEnginge(6, "#BBD6B8");
  }, []);
  return (
    <div className="min-h-screen flex ">
      <div className="w-full min-h-screen  flex justify-center items-center flex-col">
        <h1 className="text-7xl jose text-[#002B5B]">EnviRoute</h1>
        <h1 className="text-2xl text-[#002B5B] pb-16">
          From Waste To Wellness
        </h1>

        <LoadCanvasTemplate reloadColor="#002B5B" />

        <input
          placeholder="Captcha"
          type="text"
          id="captcha"
          className={`bg-[#BBD6B8] border-4 mb-5 w-1/3 h-16 pl-5  rounded-xl jose text-xl text-[#002B5B] hover:bg-[#AEC2B6] transition-all ease-in-out duration-300`}
        ></input>
        <h1
          id="errorText"
          className="invisible transition-all ease-in-out duration-300 text-xl pb-5 jose text-red-700"
        >
          Something went wrong!
        </h1>
        <button
          onClick={async () => {
            await login();
          }}
          className="bg-[#BBD6B8] w-1/3 h-16  rounded-xl jose text-3xl text-[#002B5B] hover:bg-[#AEC2B6] transition-all ease-in-out duration-300"
        >
          Send OTP
        </button>
      </div>
    </div>
  );
};

export default Report;
