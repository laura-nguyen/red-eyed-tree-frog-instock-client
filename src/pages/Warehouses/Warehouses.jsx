import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Warehouses () {
  const API_URL = import.meta.env.VITE_API_URL;
  const [warehouseList, setWarehouse] = useState([]);
  const [selectedWarehouse, seSelectedWarehouse] = useState(null);
  let { warehouseId } = useParams();
  const getWarehouseListEndPoint = `${API_URL}api/warehouses`;

  const getwarehouseList = async () => {
    console.log("came here", getWarehouseListEndPoint);
    try{
      const result= await axios.get(getWarehouseListEndPoint);
      const warehouseList = result.data;
      console.log(warehouseList);
      setWarehouse(warehouseList);
    }catch(e){
      console.log(e);
    }
  }
  useEffect(() => {
    getwarehouseList();
  }, []);

  return (
    <div>Warehouses</div>
  )
}

