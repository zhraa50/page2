import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import CartPage from "./pages/Cartbages";
import NavBar from "./componets/Navigation/NavBar";
import PostPage from "./pages/Postbage";
import Roomcart from './componets/Roomcart'
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/room" element={<Roomcart />} />






      </Routes>
    </Router>
  );
}

export default App;
