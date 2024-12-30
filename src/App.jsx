import "./App.scss";
import HomePage from "./Pages/HomePage";
import { Routes, Route } from "react-router-dom";
import ShopPage from "./Pages/ShopPage";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
