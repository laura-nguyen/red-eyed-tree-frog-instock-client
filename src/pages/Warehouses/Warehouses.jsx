import { useNavigate } from "react-router-dom";

const Warehouses = () => {
  const navigate = useNavigate();
  const handleAddClick = () => {
    navigate(`/warehouses/add/`);
  };
  return (
    <div>
      <p>Warehouses</p>
      <button onClick={() => handleAddClick()}>Add</button>
    </div>
  );
};

export default Warehouses;
