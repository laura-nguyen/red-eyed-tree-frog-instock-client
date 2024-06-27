import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import '../Warehouses/Warehouses.scss';
import Search from "../../components/Search/Search";
import chevronIcon from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import sortIcon from "../../assets/icons/sort-24px.svg";

export default function Warehouses () {
  const API_URL = import.meta.env.VITE_API_URL;
  const [warehouseList, setWarehouse] = useState([]);
  const getWarehouseListEndPoint = `${API_URL}api/warehouses`;

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

  return (
    <main className="main">
    <section className="warehouse">
      <div className="warehouse__title-bar">
        <h1 className="warehouse__heading">Warehouse</h1>
        <Search />
      </div>
      <hr className="divider" />
            <table id="warehouseTable">
              <thead>
                  <tr>
                      <th>
                        WAREHOUSE
                        <img
                            className="header-cell__sort-icon"
                            src={sortIcon}
                            alt="Sort Icon"
                          />
                      </th>
                      <th>ADDRESS</th>
                      <th>CONTACT NAME</th>
                      <th>CONTACT INFORMATION</th>
                      <th>ACTIONS</th>
                  </tr>
              </thead>
              <tbody>
                { warehouseList?.length > 0 ? (
                  warehouseList.map((warehouse, index) => (
                      <tr key={warehouse.id}>
                          <td>
                            <div>
                            {warehouse.warehouse_name} 

                            </div>
                          </td>
                          <td>{warehouse.address}</td>
                          <td>{warehouse.contact_name}</td>
                          <td>{warehouse.contact_phone}</td>
                          <td>
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
                          </td>
                      </tr>
                  )))
                   : (  <></>)
                }
            </tbody>
          </table>
    </section>
  </main>
  )
}

