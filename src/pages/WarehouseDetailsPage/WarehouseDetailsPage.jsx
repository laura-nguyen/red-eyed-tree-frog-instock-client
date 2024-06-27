import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import WarehouseInventoryList from "../../components/WarehouseIntentoryList/WarehouseInventoryList";
const API_URL = import.meta.env.VITE_API_URL;

const WarehouseDetailsPage = () => {
  const [warehouseDetails, setWarehouseDetails] = useState([]);

  const { warehouseId } = useParams();

  const getWarehouse = async () => {
    let res = await axios.get(`${API_URL}/warehouses/${warehouseId}`);
    setWarehouseDetails(res.data);
  };

  useEffect(() => {
    getWarehouse();
  }, []);

  if (warehouseDetails.length < 1) {
    return <div>Loading...</div>;
  }

  return (
    <main className="wh-details__wrapper">
      <WarehouseDetails warehouseDetails={warehouseDetails} />
      <WarehouseInventoryList />
    </main>
  );
};

export default WarehouseDetailsPage;
