
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Countries from "./pages/countries";
import Rate from "./pages/rate";
import Share from "./pages/share";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="countries" element={<Countries />} />
            <Route path="rate" element={<Rate/>} />
            <Route path="share" element={<Share />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
