import "./App.css";
import Layout from "./Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Kezdolap from "./Pages/Kezdolap";
import Urlap from "./Pages/Urlap";
import Adatok from "./Pages/Adatok";
import NoPage from "./Pages/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Kezdolap />} />
        <Route path="urlap" element={<Urlap />} />
        <Route path="adatok" element={<Adatok />} />
        <Route path="" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
