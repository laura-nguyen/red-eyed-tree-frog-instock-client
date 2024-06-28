import InventoryItemRow from "../InventoryItemRow/InventoryItemRow.jsx";
import sortIcon from "../../assets/icons/sort-24px.svg";
import "./InventoryList.scss";

const InventoryList = ({ openModal, inventories }) => {
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
            {title !== "ACTIONS" ? (
              <img
                className="header-cell__sort-icon"
                src={sortIcon}
                alt="Sort Icon"
              />
            ) : (
              ""
            )}
          </div>
        ))}
      </article>
      <InventoryItemRow inventories={inventories} openModal={openModal} />
    </section>
  );
};

export default InventoryList;
