import axios from "axios";

import { useEffect, useState } from "react";
import InventoryItemRow from "../InventoryItemRow/InventoryItemRow.jsx";
import sortIcon from "../../assets/icons/sort-24px.svg";
import "./InventoryList.scss";

const InventoryList = () => {
  const API_URL = import.meta.env.VITE_API_URL;

  const [inventories, setInventories] = useState([]);

  useEffect(() => {
    const getAllInventories = async () => {
      try {
        const response = await axios.get(`${API_URL}/inventories`);
        setInventories(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getAllInventories();
  }, []);

  if (inventories.length === 0) {
    return <div className="loader">Loading...</div>;
  }

  return (
    <section className="inventory-list">
      <article className="inventory-list__header">
        <div className="header-cell">
          <h4 className="header-cell__title">INVENTORY ITEM</h4>
          <img
            className="header-cell__sort-icon"
            src={sortIcon}
            alt="Sort Icon"
          />
        </div>
        <div className="header-cell">
          <h4 className="header-cell__title">CATEGORY</h4>
          <img
            className="header-cell__sort-icon"
            src={sortIcon}
            alt="Sort Icon"
          />
        </div>
        <div className="header-cell">
          <h4 className="header-cell__title">STATUS</h4>
          <img
            className="header-cell__sort-icon"
            src={sortIcon}
            alt="Sort Icon"
          />
        </div>
        <div className="header-cell">
          <h4 className="header-cell__title">QTY</h4>
          <img
            className="header-cell__sort-icon"
            src={sortIcon}
            alt="Sort Icon"
          />
        </div>
        <div className="header-cell">
          <h4 className="header-cell__title">WAREHOUSE</h4>
          <img
            className="header-cell__sort-icon"
            src={sortIcon}
            alt="Sort Icon"
          />
        </div>
        <div className="header-cell">
          <h4 className="header-cell__title">ACTIONS</h4>
          <img
            className="header-cell__sort-icon header-cell__sort-icon--hidden"
            src={sortIcon}
            alt="Sort Icon"
          />
        </div>
      </article>

      <InventoryItemRow inventories={inventories} />
    </section>
  );
};

export default InventoryList;
