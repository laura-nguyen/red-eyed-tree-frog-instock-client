import { Link, NavLink } from "react-router-dom";
import InventoryList from "../../components/InventoryList/InventoryList";
import Search from "../../components/Search/Search";
import "./Inventory.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Inventory = () => {
  return (
    <main className="main">
      <Header/>
      <section className="inventory">
        <div className="inventory__title-bar">
          <h1 className="inventory__heading">Inventory</h1>
          <Search />
          <NavLink to="/inventories/add">
            <button className="button button--search">+ Add New Item</button>
          </NavLink>
        </div>
        <hr className="divider divider--hide-big" />
        <InventoryList />
      </section>
      <Footer />
    </main>
  );
};

export default Inventory;
