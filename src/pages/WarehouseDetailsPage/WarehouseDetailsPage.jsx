import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import axios from "axios";
import Popup from "../../components/PopUp/PopUp";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import WarehouseInventoryList from "../../components/WarehouseInventoryList/WarehouseInventoryList";
const API_URL = import.meta.env.VITE_API_URL;

const WarehouseDetailsPage = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [warehouseDetails, setWarehouseDetails] = useState([]);
  const [warehouseInventoryDetails, setWarehouseInventoryDetails] = useState(
    []
  );
  const [deleteInventoryName, setDeleteInventoryName] = useState("");
  const [deleteInventoryId, setDeleteInventoryId] = useState("");

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
    try {
      let res = await axios.get(
        `${API_URL}/warehouses/${warehouseId}/inventories`
      );
      setWarehouseInventoryDetails(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getWarehouse();
    getWarehouseInventory();
  }, [warehouseId]);

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  const DeleteInventory = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.delete(
        `${API_URL}/inventories/${deleteInventoryId}`
      );
      setWarehouseInventoryDetails(
        warehouseInventoryDetails.filter(
          (item) => item.id !== deleteInventoryId
        )
      );
    } catch (e) {
      console.log(e);
    }
  };
  const showPopup = (inventoryName, id) => {
    setIsPopupVisible(true);
    setDeleteInventoryName(inventoryName);
    setDeleteInventoryId(id);
  };

  const hidePopup = () => {
    setIsPopupVisible(false);
  };

  const handleDelete = (e) => {
    DeleteInventory(e);
    hidePopup();
  };

  if (warehouseDetails.length < 1) {
    return <div>Loading...</div>;
  }

  return (
    <main className="wh-details__wrapper">
      <WarehouseDetails warehouseDetails={warehouseDetails} />
      <WarehouseInventoryList
        warehouseInventoryDetails={warehouseInventoryDetails}
        openModal={showPopup}
      />
      {isPopupVisible && (
        <Popup
          handleDelete={handleDelete}
          closePopup={closePopup}
          question={`Delete ${deleteInventoryName} inventory item?`}
          description={`Please confirm that you'd like to delete ${deleteInventoryName} from the  inventory list. You won't be able to undo this action.`}
        />
      )}
    </main>
  );
};

export default WarehouseDetailsPage;
