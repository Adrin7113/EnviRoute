import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Institute from "./pages/Institute";
import Vendor from "./pages/Vendor";
import Patient from "./pages/Patient";
import InstituteData from "./pages/InstituteData";
import VendorList from "./pages/VendorList";

function App() {
  return (
    <>
      <div className="bg-hero bg-intro bg-cover bg-center bg-no-repeat w-full h-auto">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
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
              path="/patient"
              element={
                <>
                  <Patient />
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
