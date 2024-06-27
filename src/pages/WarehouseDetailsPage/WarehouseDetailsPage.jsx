import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const API_URL = import.meta.env.VITE_API_URL;

const WarehouseDetailsPage = () => {
  const [warehouseDetails, setWarehouseDetails] = useState([]);

  const { warehouseId } = useParams();

  const getWarehouse = async () => {
    try {
      let res = await axios.get(`${API_URL}/warehouses/${warehouseId}`);
      setWarehouseDetails(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getWarehouse();
  }, []);

  if (warehouseDetails.length < 1) {
    return <div>Loading...</div>;
  }

  return <WarehouseDetails warehouseDetails={warehouseDetails} />;
};

export default WarehouseDetailsPage;
