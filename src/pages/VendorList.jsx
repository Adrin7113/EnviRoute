import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { supabase } from "../js/supabaseClient";

const VendorList = () => {
  const { state } = useLocation();
  const auth = state;
  const [list, setList] = useState(null);
  const [accept, setAccept] = useState(false);
  useEffect(() => {
    const onRender = async () => {
      const { data, error } = await supabase
        .from("InstitutesData")
        .select("*")
        .eq("Taken", false)
        .order("id", { ascending: true });
      if (error) {
        console.log(error);
      }
      if (data) {
        setList(data);
      }
    };
    onRender();
  }, []);

  useEffect(() => {
    const onChange = async () => {
      const { data, error } = await supabase
        .from("InstitutesData")
        .select("*")
        .eq("Taken", false)
        .order("id", { ascending: true });
      if (error) {
        console.log(error);
      }
      if (data) {
        setList(data);
      }
    };
    onChange();
  }, [accept]);

  const handleAccept = async (value) => {
    const { error } = await supabase
      .from("InstitutesData")
      .update({ Taken: true, TakenBy: auth.name })
      .eq("id", value.id);
    if (error) {
      console.log(error);
    } else {
      setAccept(!accept);
    }
  };
  return (
    <>
      {auth && (
        <div className="min-h-screen w-screen flex flex-col items-center gap-5 py-10">
          <h1 className="text-5xl jose text-[#002B5B] mb-10 underline  decoration-[#002B5B] underline-offset-[12px]">
            Available Offers
          </h1>
          {list && (
            <>
              {list.map((value, i) => (
                <div
                  key={i}
                  className="bg-white border-[#159895] rounded-xl border-4 h-[125px] w-2/3 flex justify-between items-center p-5 gap-2"
                >
                  <div className="flex gap-5">
                    <div>
                      <h1 className="text-3xl jose text-[#002B5B]">
                        {value.name}
                      </h1>
                      <h1 className="text-3xl jose text-[#002B5B]">
                        {value.date}
                      </h1>
                    </div>
                    <h1 className="text-xl jose text-[#002B5B] bg-[#57C5B6] p-3 rounded-xl h-max">
                      {value.tags}
                    </h1>
                  </div>
                  <button
                    onClick={() => handleAccept(value)}
                    className="bg-[#159895] w-44 h-16  rounded-xl jose text-3xl text-[#002B5B] hover:bg-[#1A5F7A] transition-all ease-in-out duration-300"
                  >
                    Accept
                  </button>
                </div>
              ))}
            </>
          )}
        </div>
      )}
    </>
  );
};

export default VendorList;