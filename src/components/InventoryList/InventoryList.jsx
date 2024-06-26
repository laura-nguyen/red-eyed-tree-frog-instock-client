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

  const headerArray = [
    "INVENTORY ITEM",
    "CATEGORY",
    "STATUS",
    "QTY",
    "WAREHOUSE",
    "ACTIONS",
  ];

  return (
    <section className="inventory-list">
      <article className="inventory-list__header">
        {headerArray.map((title, index) => (
          <div key={index} className="header-cell">
            <h4 className="header-cell__title">{title}</h4>
            <img
              className="header-cell__sort-icon"
              src={sortIcon}
              alt="Sort Icon"
            />
          </div>
        ))}
      </article>
      <InventoryItemRow inventories={inventories} />
    </section>
  );
};

export default InventoryList;
