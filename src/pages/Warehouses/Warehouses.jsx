import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Search from "../../components/Search/Search";
import "./Warehouses.scss";
import WarehousesList from "../../components/WarehouseList/WarehouseList";
import Popup from "../../components/PopUp/PopUp";

const Warehouses = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL;
  const [deleteWareHouseName, setDeleteWareHouseName] = useState("");
  const [deleteWareHouseId, setDeleteWareHouseId] = useState("");
  const navigate = useNavigate();
  const [warehouseList, setWarehouse] = useState([]);
  const getWarehouseListEndPoint = `${API_URL}/warehouses`;

  const getwarehouseList = async () => {
    try {
      const result = await axios.get(getWarehouseListEndPoint);
      const warehouseList = result.data;
      setWarehouse(warehouseList);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getwarehouseList();
  }, []);

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  const DeleteWarehouse = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.delete(
        `${API_URL}/warehouses/${deleteWareHouseId}`
      );
      setWarehouse(
        warehouseList.filter((item) => item.id !== deleteWareHouseId)
      );
    } catch (e) {
      console.log(e);
    }
  };

  const handleAddClick = () => {
    navigate(`/warehouses/add/`);
  };

  const showPopup = (warehouseName, id) => {
    setIsPopupVisible(true);
    setDeleteWareHouseName(warehouseName);
    setDeleteWareHouseId(id);
  };

  const hidePopup = () => {
    setIsPopupVisible(false);
  };

  const handleDelete = (e) => {
    DeleteWarehouse(e);
    hidePopup();
  };

  return (
    <>
      <main className="main">
        <section className="warehouses__outerSec warehouses__outerSec--tablet">
          <section className="warehouses">
            <div className="warehouses__title-bar">
              <h1 className="warehouses__heading">Warehouses</h1>
              {!isPopupVisible && <Search />}
              <button
                className="button button--search"
                onClick={() => handleAddClick()}
              >
                + Add New Warehouse
              </button>
            </div>
            <hr className="divider divider--hide-big" />
            <WarehousesList
              openModal={showPopup}
              warehouseList={warehouseList}
            />
            {isPopupVisible && (
              <Popup
                handleDelete={handleDelete}
                closePopup={closePopup}
                question={`Delete ${deleteWareHouseName} warehouse?`}
                description={`Please confirm that you'd like to delete ${deleteWareHouseName} from the list of warehouses. You won't be able to undo this action.`}
              />
            )}
          </section>
        </section>
      </main>
    </>
  );
};

export default Warehouses;
