import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { supabase } from "../js/supabaseClient";

const InstituteData = () => {
  const [tagsState, setTagsState] = useState("Tags: ");
  const tags = [...tagsState];
  const { state } = useLocation();
  const auth = state;
  const [show, setShow] = useState(false);
  const handleSubmit = async () => {
    const date = document.getElementById("date").value;
    const { error } = await supabase.from("InstitutesData").insert({
      date: date,
      tags: tagsState,
      name: auth.name,
      address: auth.address,
      Taken: false,
    });
    if (error) {
      console.log(error);
    }
  };
  const [instituteData, setInstituteData] = useState(null);
  useEffect(() => {
    const onRender = async () => {
      const { data, error } = await supabase
        .from("InstitutesData")
        .select("*")
        .eq("name", auth.name)
        .order("id", { ascending: true });
      if (error) {
        console.log(error);
      }
      if (data) {
        setInstituteData(data);
      }
    };
    onRender();
  }, [auth.name]);
  return (
    <div className="min-h-screen flex">
      {auth && (
        <>
          <div className="w-1/2 flex flex-col  items-center mt-28">
            <h1 className="text-5xl jose text-[#002B5B] mb-10 underline  decoration-[#002B5B] underline-offset-[12px]">
              Enter A New Request
            </h1>
            <input
              placeholder="Date(DD/MM/YY)"
              type="text"
              id="date"
              className={`bg-[#BBD6B8] placeholder-white mb-5 w-1/2 h-16 pl-3  rounded-xl jose text-xl text-[#002B5B] hover:bg-[#AEC2B6] transition-all ease-in-out duration-300 `}
            ></input>
            <input
              id="Image"
              placeholder="Upload Image"
              type="file"
              className={`hidden`}
            ></input>
            <label
              htmlFor="Image"
              className={`bg-[#BBD6B8] placeholder-white mb-5 w-1/2 h-16 pl-3  rounded-xl jose text-xl text-white hover:bg-[#AEC2B6] transition-all ease-in-out duration-300 flex items-center `}
            >
              Upload Image
            </label>
            <div className="w-1/2 relative">
              <button
                onClick={() => setShow(!show)}
                className={`bg-[#BBD6B8]  min-w-full scrollbar  h-16 pl-5 text-left rounded-xl jose text-xl flex flex-wrap text-white hover:bg-[#AEC2B6] transition-all ease-in-out duration-300  items-center`}
              >
                <h1 placeholder="Tags">{tagsState}</h1>
              </button>
              {show && (
                <div className="absolute h-44 z-20 mt-2 w-full overflow-y-auto scrollbar">
                  <div
                    onClick={() => {
                      if (!tagsState.includes("Papers ")) {
                        tags.push("Papers ");
                        setTagsState(tags);
                      } else {
                        const index = tags.indexOf("Papers ");
                        tags.splice(index, 1);
                        setTagsState(tags);
                      }
                    }}
                    className="bg-[#159895] w-full border-2 border-black pl-5 text-xl jose"
                  >
                    Papers
                  </div>
                  <div
                    onClick={() => {
                      if (!tagsState.includes("Notebooks ")) {
                        tags.push("Notebooks ");
                        setTagsState(tags);
                      } else {
                        const index = tags.indexOf("Notebooks ");
                        tags.splice(index, 1);
                        setTagsState(tags);
                      }
                    }}
                    className="bg-[#159895] w-full border-2 border-black pl-5 text-xl jose"
                  >
                    Notebooks
                  </div>
                  <div
                    onClick={() => {
                      if (!tagsState.includes("Plastic-Bottles ")) {
                        tags.push("Plastic-Bottles ");
                        setTagsState(tags);
                      } else {
                        const index = tags.indexOf("Plastic-Bottles ");
                        tags.splice(index, 1);
                        setTagsState(tags);
                      }
                    }}
                    className="bg-[#159895] w-full border-2 border-black pl-5 text-xl jose"
                  >
                    Plastic Bottles
                  </div>
                  <div
                    onClick={() => {
                      if (!tagsState.includes("Glass ")) {
                        tags.push("Glass ");
                        setTagsState(tags);
                      } else {
                        const index = tags.indexOf("Glass ");
                        tags.splice(index, 1);
                        setTagsState(tags);
                      }
                    }}
                    className="bg-[#159895] w-full border-2 border-black pl-5 text-xl jose"
                  >
                    Glass
                  </div>
                  <div
                    onClick={() => {
                      if (!tagsState.includes("E-Waste ")) {
                        tags.push("E-Waste ");
                        setTagsState(tags);
                      } else {
                        const index = tags.indexOf("E-Waste ");
                        tags.splice(index, 1);
                        setTagsState(tags);
                      }
                    }}
                    className="bg-[#159895] w-full border-2 border-black pl-5 text-xl jose"
                  >
                    E-Waste
                  </div>
                  <div
                    onClick={() => {
                      if (!tagsState.includes("Cardboard ")) {
                        tags.push("Cardboard ");
                        setTagsState(tags);
                      } else {
                        const index = tags.indexOf("Cardboard ");
                        tags.splice(index, 1);
                        setTagsState(tags);
                      }
                    }}
                    className="bg-[#159895] w-full border-2 border-black pl-5 text-xl jose"
                  >
                    Cardboard
                  </div>
                </div>
              )}
            </div>
            <button
              className={`bg-[#BBD6B8] mt-5 placeholder-white mb-5 w-1/2 h-16 pl-3  rounded-xl jose text-xl text-[#002B5B] hover:bg-[#AEC2B6] transition-all ease-in-out duration-300 flex items-center`}
              onClick={() => handleSubmit()}
            >
              Submit
            </button>
          </div>
          <div className="w-1/2 flex flex-col mt-28">
            <h1 className="text-5xl jose text-[#002B5B] mb-10 underline  decoration-[#002B5B] underline-offset-[12px]">
              Previous Requests
            </h1>

            {instituteData && (
              <div className="h-[400px] w-full overflow-y-auto  rounded-xl">
                {instituteData.map((value, i) => (
                  <div
                    key={i}
                    className="h-[100px] w-2/3 flex items-center p-5 bg-white border-4 border-[#AEC2B6] rounded-xl mb-5 gap-5"
                  >
                    <div>
                      <h1 className="text-3xl jose text-[#002B5B]">
                        {value.name}
                      </h1>
                      <h1 className="text-xl jose text-[#002B5B]">
                        {value.date}
                      </h1>
                    </div>
                    <h1 className="text-xl jose text-[#002B5B] bg-[#BBD6B8] p-3 rounded-xl">
                      {value.tags}
                    </h1>
                    {value.Taken && (
                      <h1 className="text-xl jose text-[#002B5B]">Accepted</h1>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default InstituteData;
