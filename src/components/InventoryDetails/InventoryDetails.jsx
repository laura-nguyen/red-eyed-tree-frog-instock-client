import "./InventoryDetails.scss";
import { Link } from "react-router-dom";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import editIcon from "../../assets/icons/edit-20px-white.svg";

const InventoryDetails = ({ inventoryDetails }) => {
  const {
    id,
    warehouse_name,
    item_name,
    description,
    category,
    status,
    quantity,
  } = inventoryDetails;

  return (
    <main className="inv-details__wrapper">
      <div className="inv-details__header">
        <div className="inv-details__header-text-wrapper">
          <Link className="inv-details__header-btn--back" to={"/inventories"}>
            <img
              className="inv-details__header-icon--back"
              src={backArrow}
              alt="back arrow"
            />
          </Link>
          <h1 className="inv-details__title">{item_name}</h1>
        </div>
        <div>
          <Link to={`/inventories/edit/${id}`}>
            <button className="inv-details__header-btn--edit-mobile">
              <img src={editIcon} alt="edit icon" />
            </button>
          </Link>
          <Link to={`/inventories/edit/${id}`}>
            <button className="inv-details__header-btn--edit-tablet">
              <img src={editIcon} alt="edit icon" />
              Edit
            </button>
          </Link>
        </div>
      </div>

      <div className="inv-details__content">
        <div className="inv-details__content-left">
          <div className="inv-details__description">
            <h4 className="inv-details__label">Item Description:</h4>
            <p className="inv-details__text">{description}</p>
          </div>
          <div className="inv-details__category">
            <h4 className="inv-details__label">Category:</h4>
            <p className="inv-details__text">{category}</p>
          </div>
        </div>
        <div className="inv-details__content-right">
          <div className="inv-details__status">
            <h4 className="inv-details__label">Status</h4>
            <p
              className={
                status === "In Stock"
                  ? "tag tag--in-stock"
                  : "tag tag--out-of-stock"
              }
            >
              {status}
            </p>
          </div>
          <div className="inv-details__quantity">
            <h4 className="inv-details__label">Quantity</h4>
            <p className="inv-details__text">{quantity}</p>
          </div>
          <div className="inv-details__warehouse">
            <h4 className="inv-details__label">Warehouse</h4>
            <p className="inv-details__text">{warehouse_name}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default InventoryDetails;
