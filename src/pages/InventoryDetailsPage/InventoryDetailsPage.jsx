import InventoryDetails from "../../components/InventoryDetails/InventoryDetails";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const API_URL = import.meta.env.VITE_API_URL;

const InventoryDetailsPage = () => {
  const [inventoryDetails, setInventoryDetails] = useState([]);

  const { inventoryId } = useParams();

  const getInventory = async () => {
    try {
      let res = await axios.get(`${API_URL}/inventories/${inventoryId}`);
      setInventoryDetails(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getInventory();
  }, []);

  if (inventoryDetails.length < 1) {
    return <div>Loading...</div>;
  }

  return <InventoryDetails inventoryDetails={inventoryDetails} />;
};

export default InventoryDetailsPage;
