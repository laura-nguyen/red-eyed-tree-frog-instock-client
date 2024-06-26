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
                <div className="cell">
                  <h4 className="cell__heading">INVENTORY ITEM</h4>
                  <Link to={`/inventory/${inventory.id}`}>
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
                  </Link>
                </div>
                <div className="cell cell--category">
                  <h4 className="cell__heading">CATEGORY</h4>
                  <p className="p-medium">{inventory.category}</p>
                </div>
              </div>
              <div className="inventory-list__right">
                <div className="cell cell--status">
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
                <div className="cell cell--qty">
                  <h4 className="cell__heading">QTY</h4>
                  <p className="p-medium">{inventory.quantity}</p>
                </div>
                <div className="cell cell--warehouse">
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
        </div>
      ))}
    </>
  );
};

export default InventoryItemRow;
