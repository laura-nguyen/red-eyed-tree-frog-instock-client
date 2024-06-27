import Search from "../../components/Search/Search";
import "./Warehouses.scss";
import WarehousesList from '../../components/WarehouseList/WarehouseList'

const Warehouses = () => {
  return (
    <main className="main">
      <section className="warehouses">
        <div className="warehouses__title-bar">
          <h1 className="warehouses__heading">Warehouses</h1>
          <Search />
        </div>
        <hr className="divider divider--hide-big" />
        <WarehousesList />
      </section>
    </main>
  );
};

export default Warehouses;
