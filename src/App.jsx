import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import { Toaster } from "react-hot-toast";
// 1. import `NextUIProvider` component

// import axios from "axios";

// axios.defaults.baseURL = "https://devograph.onrender.com";
// axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <div className="App font-nunito-eb">
        <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            {/* <Route path="/Articles" element={<Articles />}></Route> */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
