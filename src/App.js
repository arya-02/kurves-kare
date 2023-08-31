import "./App.css";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeCare from "./pages/HomeCare";
import Health from "./pages/Health";
import Pharmacy from "./pages/Pharmacy";
import STC from "./pages/STC";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact-us" element={<ContactUs />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/services/home-care" element={<HomeCare />}></Route>
          <Route path="/services/health" element={<Health />}></Route>
          <Route path="/services/pharmacy" element={<Pharmacy />}></Route>
          <Route path="/services/special-treatment" element={<STC />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
