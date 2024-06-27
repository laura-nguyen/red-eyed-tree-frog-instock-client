import { BrowserRouter, Route, Routes } from "react-router-dom";

import AddWarehouse from "./components/AddWarehouse/AddWarehouse";
import EditWarehouse from "./components/EditWarehouse/EditWarehouse";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Inventory from "./pages/Inventory/Inventory";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";
import InventoryDetailsPage from "./pages/InventoryDetailsPage/InventoryDetailsPage";
import Warehouses from "./pages/Warehouses/Warehouses";

import "./App.scss";

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
        <Route
          path="/warehouses/edit/:warehouseId"
          element={<EditWarehouse />}
        />
        <Route path="/warehouses/add" element={<AddWarehouse />} />

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
