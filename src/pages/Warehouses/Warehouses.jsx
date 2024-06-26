import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import '../Warehouses/Warehouses.scss';

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
      <body>
          <table id="inventoryTable">
              <thead>
                  <tr>
                      <th>WAREHOUSE</th>
                      <th>ADDRESS</th>
                      <th>CONTACT NAME</th>
                      <th>CONTACT INFORMATION</th>
                      <th>ACTIONS</th>
                  </tr>
              </thead>
              <tbody>
                  {/* <!-- Data rows will go here --> */}
                  <tr>
                      <td>Warehouse </td>
                      <td>Item A</td>
                      <td>Description A</td>
                      <td>Category A</td>
                      <td>Available</td>
                  </tr>
                  <tr>
                      <td>Warehouse B</td>
                      <td>Item B</td>
                      <td>Description B</td>
                      <td>Category B</td>
                      <td>Out of Stock</td>
                  </tr>
                  {/* <!-- More rows as needed --> */}
              </tbody>
          </table>
        </body>

  )
}

