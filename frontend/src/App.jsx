import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateProduct from "./components/CreateProduct";
import Footer from "./components/Footer";
import Navabar from "./components/Navbar";
import { ProductTable } from "./components/ProductTable";
import UpdateProduct from "./components/UpdateProdcut";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <div className="bg-[#eee] font-[Inter] text-white">
          <Navabar />
        </div>
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<ProductTable />} />
            <Route path="/add" element={<CreateProduct />} />
            <Route path="/update/:productId" element={<UpdateProduct />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
