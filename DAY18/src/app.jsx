import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Product from "./components/Products/Products";
import ProductDetails from "./components/Products/ProductsDetails/ProductsDetails";
import NotFound from "./components/NotFound/NotFound";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
       <Route path="/products" element={<Product />}>
       <Route path=":id" element={<ProductDetails />} />
       </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;