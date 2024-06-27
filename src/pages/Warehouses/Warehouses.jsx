import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";

import { useNavigate } from "react-router-dom";

const Warehouses = () => {
  const navigate = useNavigate();

  const handleEditClick = (id) => {
    navigate(`/warehouses/edit/${id}`);
  };
  return (
    <div>
    <p>Warehouses</p>
    <div>
      <h2>Warehouse 1</h2>
      <button onClick={() => handleEditClick(1)}>Edit</button>
    </div>
    <WarehouseDetails />
    </div>
  )
}

export default Warehouses;
