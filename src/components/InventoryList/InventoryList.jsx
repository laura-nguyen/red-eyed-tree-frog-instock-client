import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import chevronIcon from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
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

  console.log(inventories);

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
            className="header-cell__sort-icon"
            src={sortIcon}
            alt="Sort Icon"
          />
        </div>
      </article>

      {inventories.map((inventory) => (
        <Link key={inventory.id} to={`/inventory/${inventory.id}`}>
          <article className="inventory-list__item-wrapper">
            <div className="inventory-list__item">
              <div className="inventory-list__left">
                <div className="cell">
                  <h4 className="cell__heading">INVENTORY ITEM</h4>
                  <div className="cell__link">
                    <p className="cell__link-text p-medium">
                      {inventory.item_name}
                    </p>
                    <img
                      className="cell__icon cell__icon--chevron"
                      src={chevronIcon}
                      alt="View Inventory Icon"
                    />
                  </div>
                </div>
                <div className="cell">
                  <h4 className="cell__heading">CATEGORY</h4>
                  <p className="p-medium">{inventory.category}</p>
                </div>
              </div>
              <div className="inventory-list__right">
                <div className="cell cell--no-flex">
                  <h4 className="cell__heading">STATUS</h4>
                  <div
                    className={
                      inventory.status === "In Stock"
                        ? "tag tag--in-stock"
                        : "tag tag--out-of-stock"
                    }
                  >
                    {inventory.status}
                  </div>
                </div>
                <div className="cell">
                  <h4 className="cell__heading">QTY</h4>
                  <p className="p-medium">{inventory.quantity}</p>
                </div>
                <div className="cell">
                  <h4 className="cell__heading">WAREHOUSE</h4>
                  <p className="p-medium">{inventory.warehouse_name}</p>
                </div>
              </div>
            </div>
            <div className="inventory-list__actions">
              <img
                className="cell__icon"
                src={deleteIcon}
                alt="Delete Inventory Icon"
              />
              <img
                className="cell__icon"
                src={editIcon}
                alt="Edit Inventory Icon"
              />
            </div>
          </article>
          <hr className="divider" />
        </Link>
      ))}
    </section>
  );
};

export default InventoryList;
