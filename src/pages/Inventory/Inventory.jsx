import InventoryList from "../../components/InventoryList/InventoryList";
import Search from "../../components/Search/Search";
import "./Inventory.scss";

const Inventory = () => {
  return (
    <main className="main">
      <section className="inventory">
        <h1 className="inventory__heading">Inventory</h1>
        <Search />
        <hr className="divider" />
        <InventoryList />
      </section>
    </main>
  );
};

export default Inventory;
