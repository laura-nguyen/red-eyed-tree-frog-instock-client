import { Link } from "react-router-dom";
import chevronIcon from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";

import "./InventoryItemRow.scss";

const InventoryItemRow = ({ inventories }) => {
  return (
    <>
      {inventories.map((inventory) => (
        <div key={inventory.id} className="inventory-list">
          <article className="inventory-list__item-wrapper">
            <div className="inventory-list__item">
              <div className="inventory-list__left">
                <div className="td--item">
                  <h4 className="td__heading">INVENTORY ITEM</h4>
                  <Link to={`/inventories/${inventory.id}`}>
                    <div className="td__link">
                      <p className="td__link-text p-medium">
                        {inventory.item_name}
                      </p>
                      <img
                        className="td__icon td__icon--chevron"
                        src={chevronIcon}
                        alt="View Inventory Icon"
                      />
                    </div>
                  </Link>
                </div>
                <div className="td td--category">
                  <h4 className="td__heading">CATEGORY</h4>
                  <p className="p-medium">{inventory.category}</p>
                </div>
              </div>
              <div className="inventory-list__right">
                <div className="td td--status">
                  <h4 className="td__heading">STATUS</h4>
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
                <div className="td td--qty">
                  <h4 className="td__heading">QTY</h4>
                  <p className="p-medium">{inventory.quantity}</p>
                </div>
                <div className="td td--warehouse">
                  <h4 className="td__heading">WAREHOUSE</h4>
                  <p className="p-medium">{inventory.warehouse_name}</p>
                </div>
              </div>
            </div>
            <div className="td--actions">
              <img
                className="td__icon"
                src={deleteIcon}
                alt="Delete Inventory Icon"
              />
              <Link to={`/inventories/edit/${inventory.id}`}>
                <img
                  className="cell__icon"
                  src={editIcon}
                  alt="Edit Inventory Icon"
                />
              </Link>
            </div>
          </article>
          <hr className="divider" />
        </div>
      ))}
    </>
  );
};

export default InventoryItemRow;
