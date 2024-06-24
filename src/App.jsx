import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';
import Inventory from "./pages/Inventory/Inventory";
import Warehouses from "./pages/Warehouses/Warehouses";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/warehouses' element ={<Warehouses/>}/>
        <Route path="/inventories" element={<Inventory />}/>
        <Route path="/*" element={<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
