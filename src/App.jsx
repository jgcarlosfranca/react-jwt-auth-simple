import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resgister from "./Views/Resgister";
import Login from "./Views/Login";
import Secret from "./Views/Secret";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/register" element={<Resgister />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Secret />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
