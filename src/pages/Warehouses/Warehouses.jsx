import { useNavigate } from "react-router-dom";
import Search from "../../components/Search/Search";
import "./Warehouses.scss";
import WarehousesList from "../../components/WarehouseList/WarehouseList";

const Warehouses = () => {
  const navigate = useNavigate();

  const handleAddClick = () => {
    navigate(`/warehouses/add/`);
  };

  return (
    <main className="main">
      <section className="warehouses">
        <div className="warehouses__title-bar">
          <h1 className="warehouses__heading">Warehouses</h1>
          <Search />
          <button
            className="button button--search"
            onClick={() => handleAddClick()}
          >
            + Add New Warehouse
          </button>
        </div>
        <hr className="divider divider--hide-big" />
        <WarehousesList />
      </section>
    </main>
  );
};

export default Warehouses;
