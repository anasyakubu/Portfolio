import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import { Toaster } from "react-hot-toast";
import Projects from "./Pages/Projects/Projects";
import Blog from "./Pages/Blog/Blog";
import ReadBlog from "./Pages/ReadBlog/ReadBlog";
import Resume from "./Pages/Resume/Resume";
import Messages from "./Pages/Messages/Messages";
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
            <Route path="/Projects" element={<Projects />}></Route>
            <Route path="/Blog" element={<Blog />}></Route>
            <Route path="/ReadBlog/:id" element={<ReadBlog />}></Route>
            <Route path="/Resume" element={<Resume />}></Route>
            <Route path="/Messages" element={<Messages />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
