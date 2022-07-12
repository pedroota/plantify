import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { Home } from "@/pages/Home";
import { Cart } from "@/pages/Cart";
import { Login } from "@/pages/Login";

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </BrowserRouter>
  );
}
