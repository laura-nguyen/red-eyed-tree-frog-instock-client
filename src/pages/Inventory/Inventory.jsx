import InventoryList from "../../components/InventoryList/InventoryList";
import Search from "../../components/Search/Search";
import "./Inventory.scss";

const Inventory = () => {
  return (
    <main className="main">
      <section className="inventory">
        <div className="inventory__title-bar">
          <h1 className="inventory__heading">Inventory</h1>
          <Search />
        </div>
        <hr className="divider divider--hide-big" />
        <InventoryList />
      </section>
    </main>
  );
};

export default Inventory;
