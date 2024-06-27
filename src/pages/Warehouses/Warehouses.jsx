import { useNavigate } from "react-router-dom";

const Warehouses = () => {
  const navigate = useNavigate();

  const handleEditClick = (id) => {
    navigate(`/warehouses/edit/${id}`);
  };

  const handleAddClick = () => {
    navigate(`/warehouses/add/`);
  };

  return (
    <div>
      <p>Warehouses</p>
      <button onClick={() => handleAddClick()}>Add New Warehouse</button>
      <div>
        <h2>Warehouse 1</h2>
        <button onClick={() => handleEditClick(1)}>Edit Warehouse</button>
      </div>
    </div>
  );
};

export default Warehouses;
