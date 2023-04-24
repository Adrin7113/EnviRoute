import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Institute from "./pages/Institute";
import Vendor from "./pages/Vendor";
import Patient from "./pages/Patient";
import InstituteData from "./pages/InstituteData";
import VendorList from "./pages/VendorList";
import { useEffect, useState } from "react";
import Loading from "./pages/Loading";
import Hospital from "./pages/Hospital";
import Report from "./pages/Report";
import ReportForm from "./pages/ReportForm";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  }, []);
  return (
    <>
      <div className="bg-hero bg-intro bg-cover bg-center bg-no-repeat w-full h-auto">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {loading && <Loading />}
                  <Landing />
                </>
              }
            />
            <Route
              path="/institute"
              element={
                <>
                  <Institute />
                </>
              }
            />
            <Route
              path="/institute/data"
              element={
                <>
                  <InstituteData />
                </>
              }
            />
            <Route
              path="/vendor"
              element={
                <>
                  <Vendor />
                </>
              }
            />
            <Route
              path="/vendor/list"
              element={
                <>
                  <VendorList />
                </>
              }
            />
            <Route
              path="/hospital"
              element={
                <>
                  <Hospital />
                </>
              }
            />
            <Route
              path="/hospital/patient"
              element={
                <>
                  <Patient />
                </>
              }
            />
            <Route
              path="/report"
              element={
                <>
                  <Report />
                </>
              }
            />
            <Route
              path="/report/form"
              element={
                <>
                  <ReportForm />
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
