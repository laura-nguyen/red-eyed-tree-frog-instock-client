import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';
import Inventory from "./pages/Inventory/Inventory";
import Warehouses from "./pages/Warehouses/Warehouses";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Header from './components/Header/Header';
import DeleteWarehouse from "./components/DeleteWarehouse/DeleteWarehouse";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
    {/* <Header /> */}
      <Routes>
        <Route path='/' element ={<DeleteWarehouse/>}/>
        <Route path="/inventories" element={<Inventory />}/>
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
