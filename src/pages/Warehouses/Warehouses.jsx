import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Search from "../../components/Search/Search";
import "./Warehouses.scss";
import Header from "../../components/Header/Header";
import WarehousesList from "../../components/WarehouseList/WarehouseList";
import Footer from "../../components/Footer/Footer";
import Popup from "../../components/PopUp/PopUp";

const Warehouses = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL;
  const [deleteWareHouseName, setDeleteWareHouseName] = useState("");
  const [deleteWareHouseId, setDeleteWareHouseId] = useState("");
  const navigate = useNavigate();
  const deleteWarehouseEndPoint = `${API_URL}/warehouses/`;

  const closePopup = () => {
    setIsPopupVisible(false);
  };
  const DeleteWarehouse = async () => {
    try {
      console.log(`${API_URL}/warehouses/${deleteWareHouseId}`);
      console.log({ deleteWareHouseId });
      const result = await axios.delete(
        `${API_URL}/warehouses/${deleteWareHouseId}`
      );
      const warehouseList = result.data;
      // setWarehouse(warehouseList);
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

  const handleDelete = () => {
    DeleteWarehouse();
    hidePopup();
  };
  return (
    <>
      <main className="main">
        <section className="warehouses__outerSec warehouses__outerSec--tablet">
          <Header />
          <section className="warehouses">
            <div className="warehouses__title-bar">
              <h1 className="warehouses__heading">Warehouses</h1>
              {!isPopupVisible && <Search />}
              <button
                className="button button--search"
                onClick={() => handleAddClick()}
              >
                + Add New Item
              </button>
            </div>
            <hr className="divider divider--hide-big" />
            <WarehousesList openModal={showPopup} />
            {isPopupVisible && (
              <Popup
                handleDelete={handleDelete}
                closePopup={closePopup}
                warehouseName={deleteWareHouseName}
                warehouseId={deleteWareHouseId}
              />
            )}
          </section>
          <Footer />
        </section>
      </main>
    </>
  );
};

export default Warehouses;
