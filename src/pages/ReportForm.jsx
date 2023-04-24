import { useLocation } from "react-router-dom";
import { supabase } from "../js/supabaseClient";

const ReportForm = () => {
  const { state } = useLocation();
  const auth = state;
  const handleSubmit = async () => {
    const report = document.getElementById("report").value;

    const { error } = await supabase.from("Reports").insert({
      report: report,
    });
    if (error) {
      console.log(error);
    } else {
      document.getElementById("submit").innerText = "Submitted";
    }
  };

  return (
    <div className="min-h-screen flex justify-center">
      {auth && (
        <div className="w-full flex flex-col  items-center mt-14">
          <h1 className="text-5xl jose text-[#002B5B] mb-10 underline  decoration-[#002B5B] underline-offset-[12px]">
            Submit A Report
          </h1>
          <textarea
            placeholder="Enter Your Report"
            id="report"
            cols="50"
            rows="10"
            className={`bg-[#BBD6B8] placeholder-white mb-5 w-1/2 pl-3  rounded-xl jose text-xl text-[#002B5B] hover:bg-[#AEC2B6] transition-all ease-in-out duration-300 `}
          ></textarea>
          <button
            id="submit"
            className={`bg-[#BBD6B8]  placeholder-white w-1/6 h-16 pl-3 rounded-xl jose text-xl text-[#002B5B] hover:bg-[#AEC2B6] transition-all ease-in-out duration-300 flex items-center`}
            onClick={() => handleSubmit()}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default ReportForm;
