import { useNavigate } from "react-router-dom";

import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";

const Warehouses = () => {
  const navigate = useNavigate();
  const handleAddClick = () => {
    navigate(`/warehouses/add/`);
  };
  return (
    <div>
    <p>Warehouses</p>
    <button onClick={() => handleAddClick()}>Add</button>
    <WarehouseDetails />;
    </div>
  )
}

export default Warehouses;
