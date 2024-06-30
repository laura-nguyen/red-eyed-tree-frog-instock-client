// import axios from "axios";
// import { useState, useEffect } from "react";
import "../../pages/Warehouses/Warehouses.scss";
import sortIcon from "../../assets/icons/sort-24px.svg";
import "../../components/WarehouseList/WarehouseList.scss";
import WarehouseItemRow from "../WarehouseItemRow/WarehouseItemRow";

export default function Warehouses({ openModal, warehouseList }) {
  const headerArray = [
    "WAREHOUSE",
    "ADDRESS",
    "CONTACT NAME",
    "CONTACT INFORMATION",
    "ACTIONS",
  ];
  return (
    <section className="warehouse-list">
      <article className="warehouse-list__header">
        {headerArray.map((title, index) => (
          <div
            key={index}
            className={`wh-th-cell wh-th-cell--${title
              .toLowerCase()
              .split(" ")
              .join("-")}`}
          >
            <h4 className="wh-th-cell__title">{title}</h4>
            {title !== "ACTIONS" ? (
              <img
                className="wh-th-cell__sort-icon"
                src={sortIcon}
                alt="Sort Icon"
              />
            ) : (
              ""
            )}
          </div>
        ))}
      </article>
      <WarehouseItemRow warehouses={warehouseList} openModal={openModal} />
    </section>
  );
}
