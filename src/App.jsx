import "./App.scss";
import HomePage from "./Pages/HomePage";
import { Routes, Route } from "react-router-dom";
import ShopPage from "./Pages/ShopPage";
import NavBar from "./Components/NavBar";
import SignUpPage from "./Pages/SignUpPage";
import SignInPage from "./Pages/signInPage";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
