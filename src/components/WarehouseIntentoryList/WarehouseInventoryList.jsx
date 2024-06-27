import sortIcon from "../../assets/icons/sort-24px.svg";
import "./WarehouseInventoryList.scss";

const WarehouseInventoryList = ({ warehouseInventoryDetails }) => {
  const { item_name, category, status, quantity } = warehouseInventoryDetails;

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
    </section>
  );
};

export default WarehouseInventoryList;
