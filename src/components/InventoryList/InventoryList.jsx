import { Link } from "react-router-dom";
import chevronIcon from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import "./InventoryList.scss";

const InventoryList = () => {
  return (
    <section className="inventory-list">
      <article className="inventory-list__item-wrapper">
        <div className="inventory-list__item">
          <div className="inventory-list__left">
            <div className="cell">
              <h4 className="cell__heading">INVENTORY ITEM</h4>
              <Link className="cell__link">
                <p className="cell__link-text p-medium">Television</p>
                <img
                  className="cell__icon cell__icon--chevron"
                  src={chevronIcon}
                  alt="View Inventory Icon"
                />
              </Link>
            </div>
            <div className="cell">
              <h4 className="cell__heading">CATEGORY</h4>
              <p className="p-medium">Electronics</p>
            </div>
          </div>
          <div className="inventory-list__right">
            <div className="cell">
              <h4 className="cell__heading">STATUS</h4>
              <div className="tag tag--in-stock">IN STOCK</div>
            </div>
            <div className="cell">
              <h4 className="cell__heading">QTY</h4>
              <p className="p-medium">500</p>
            </div>
            <div className="cell">
              <h4 className="cell__heading">WAREHOUSE</h4>
              <p className="p-medium">Manhattan</p>
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
    </section>
  );
};

export default InventoryList;
