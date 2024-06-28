import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import WarehouseInventoryList from "../../components/WarehouseIntentoryList/WarehouseInventoryList";
const API_URL = import.meta.env.VITE_API_URL;

const WarehouseDetailsPage = () => {
  const [warehouseDetails, setWarehouseDetails] = useState([]);
  const [warehouseInventoryDetails, setWarehouseInventoryDetails] = useState(
    []
  );

  const { warehouseId } = useParams();

  const getWarehouse = async () => {
    try {
      let res = await axios.get(`${API_URL}/warehouses/${warehouseId}`);
      setWarehouseDetails(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getWarehouseInventory = async () => {
    let res = await axios.get(
      `${API_URL}/warehouses/${warehouseId}/inventories`
    );
    setWarehouseInventoryDetails(res.data);
  };

  useEffect(() => {
    getWarehouse();
    getWarehouseInventory();
  }, [warehouseId]);

  if (warehouseDetails.length < 1) {
    return <div>Loading...</div>;
  }

  return (
    <main className="wh-details__wrapper">
      <WarehouseDetails warehouseDetails={warehouseDetails} />
      <WarehouseInventoryList
        warehouseInventoryDetails={warehouseInventoryDetails}
      />
    </main>
  );
};

export default WarehouseDetailsPage;
