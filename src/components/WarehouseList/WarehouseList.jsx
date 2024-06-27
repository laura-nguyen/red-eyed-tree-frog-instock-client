import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import '../../pages/Warehouses/Warehouses.scss'
import Search from "../../components/Search/Search";
import chevronIcon from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import sortIcon from "../../assets/icons/sort-24px.svg";
import '../../components/WarehouseList/WarehouseList.scss';
import WarehouseItemRow from '../WarehouseItemRow/WarehouseItemRow';

export default function Warehouses () {
  const API_URL = import.meta.env.VITE_API_URL;
  const [warehouseList, setWarehouse] = useState([]);
  const getWarehouseListEndPoint = `${API_URL}/warehouses`;

  const getwarehouseList = async () => {
    try{
      const result= await axios.get(getWarehouseListEndPoint);
      const warehouseList = result.data;
      setWarehouse(warehouseList);
    }catch(e){
      console.log(e);
    }
  }
  useEffect(() => {
    getwarehouseList();
  }, []);
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
      <WarehouseItemRow warehouses={warehouseList} />
    </section>
  );
}

