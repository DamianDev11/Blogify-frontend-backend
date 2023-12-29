import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AllPosts from "./pages/AllPosts/AllPosts";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import About from "./pages/AboutUs/About";
import Contact from "./pages/ContactUs/Contact";
import CreatePost from "./pages/CreatePost/CreatePost";
import Logout from "./pages/Logout/Logout";
import "./App.css";
import Footer from "./pages/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/all" element={<AllPosts />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
