import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Inventory from "./pages/Inventory/Inventory";
import Warehouses from "./pages/Warehouses/Warehouses";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";
import InventoryDetailsPage from "./pages/InventoryDetailsPage/InventoryDetailsPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/warehouses" element={<Warehouses />} />
        <Route
          path="/warehouses/:warehouseId"
          element={<WarehouseDetailsPage />}
        />
        <Route path="/inventories" element={<Inventory />} />
        <Route
          path="/inventories/:inventoryId"
          element={<InventoryDetailsPage />}
        />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
