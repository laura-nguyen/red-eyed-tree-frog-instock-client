import sortIcon from "../../assets/icons/sort-24px.svg";
import chevronIcon from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import { Link } from "react-router-dom";
import "./WarehouseInventoryList.scss";

const WarehouseInventoryList = ({ warehouseInventoryDetails }) => {
  const headerArray = [
    "Inventory Item",
    "Category",
    "Status",
    "Quantity",
    "Actions",
  ];

  return (
    <section>
      <div className="wh-inv__header">
        {headerArray.map((title, index) => (
          <div
            key={index}
            className={`wh-inv__header-subtitles ${
              title === "Status" ? "wh-inv__header-subtitles--status" : ""
            } ${
              title === "Category" ? "wh-inv__header-subtitles--category" : ""
            }  ${
              title === "Inventory Item" ? "wh-inv__header-subtitles--item" : ""
            }  ${
              title === "Quantity" ? "wh-inv__header-subtitles--quantity" : ""
            } ${
              title === "Actions" ? "wh-inv__header-subtitles--actions" : ""
            }`}
          >
            <h4 className="wh-inv__header-label">{title}</h4>
            {title !== "Actions" ? (
              <img
                className="wh-inv__icon--sort"
                src={sortIcon}
                alt="sort icon"
              />
            ) : (
              ""
            )}
          </div>
        ))}
      </div>

      <div className="wh-inv__items">
        {warehouseInventoryDetails.map((item, index) => (
          <div key={index} className="wh-inv__row">
            <div className="wh-inv__item">
              <h4 className="wh-inv__subtitle--mobile">Inventory Item</h4>
              <Link
                to={`/inventories/${item.id}`}
                className="wh-inv__item--link"
              >
                {item.item_name}
                <img
                  className="cell__icon cell__icon--chevron"
                  src={chevronIcon}
                  alt="View Inventory Icon"
                />
              </Link>
            </div>
            <h4 className="wh-inv__subtitle--mobile">Category</h4>

            <div className="wh-inv__category">{item.category}</div>
            <div className="wh-inv__status">
              <h4 className="wh-inv__subtitle--mobile">Status</h4>
              <div
                className={
                  item.status === "In Stock"
                    ? "tag tag--in-stock"
                    : "tag tag--out-of-stock"
                }
              >
                {item.status}
              </div>
            </div>
            <h4 className="wh-inv__subtitle--mobile">Qty</h4>
            <div className="wh-inv__quantity">{item.quantity}</div>
            <div className="wh-inv__actions">
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default WarehouseInventoryList;
