import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Warehouses from "./pages/Warehouses/Warehouses";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";
import AddWarehouse from "./components/AddWarehouse/AddWarehouse";
import EditWarehouse from "./components/EditWarehouse/EditWarehouse";
import Inventory from "./pages/Inventory/Inventory";
import AddInventory from "./components/AddInventory/AddInventory";
import InventoryDetailsPage from "./pages/InventoryDetailsPage/InventoryDetailsPage";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Warehouses />} />
        <Route path="/warehouses" element={<Warehouses />} />
        <Route
          path="/warehouses/:warehouseId"
          element={<WarehouseDetailsPage />}
        />
        <Route
          path="/warehouses/edit/:warehouseId"
          element={<EditWarehouse />}
        />
        <Route path="/warehouses/add" element={<AddWarehouse />} />

        <Route path="/inventories" element={<Inventory />} />
        <Route path="/inventories/add" element={<AddInventory />} />
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
