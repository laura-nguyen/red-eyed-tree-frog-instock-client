import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const WarehouseDetailsPage = () => {
  const [warehouseDetails, setWarehouseDetails] = useState([]);

  const { warehouseId } = useParams();

  const getWarehouse = async () => {
    let res = await axios.get(
      `http://localhost:8080/api/warehouses/${warehouseId}`
    );
    setWarehouseDetails(res.data);
  };

  useEffect(() => {
    getWarehouse();
  }, []);

  if (warehouseDetails.length < 1) {
    return <div>loading...</div>;
  }
  return (
    <>
      <WarehouseDetails warehouseDetails={warehouseDetails} />
    </>
  );
};

export default WarehouseDetailsPage;
