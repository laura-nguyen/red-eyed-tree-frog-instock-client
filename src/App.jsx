import { BrowserRouter, Route, Routes } from "react-router-dom";

import AddWarehouse from "./components/AddWarehouse/AddWarehouse";
import EditWarehouse from "./components/EditWarehouse/EditWarehouse";
import Inventory from "./pages/Inventory/Inventory";
import InventoryDetails from "./pages/InventoryDetails/InventoryDetails";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";
import Warehouses from "./pages/Warehouses/Warehouses";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
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
        <Route path="/inventory/:id" element={<InventoryDetails />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
