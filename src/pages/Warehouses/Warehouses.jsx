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
                      <th onclick="sortTable(0)">ID</th>
                      <th onclick="sortTable(1)">Warehouse Name</th>
                      <th onclick="sortTable(2)">Item Name</th>
                      <th onclick="sortTable(3)">Description</th>
                      <th onclick="sortTable(4)">Category</th>
                      <th onclick="sortTable(5)">Status</th>
                      <th onclick="sortTable(6)">Quantity</th>
                  </tr>
              </thead>
              <tbody>
                  {/* <!-- Data rows will go here --> */}
                  <tr>
                      <td>1</td>
                      <td>Warehouse A</td>
                      <td>Item A</td>
                      <td>Description A</td>
                      <td>Category A</td>
                      <td>Available</td>
                      <td>100</td>
                  </tr>
                  <tr>
                      <td>2</td>
                      <td>Warehouse B</td>
                      <td>Item B</td>
                      <td>Description B</td>
                      <td>Category B</td>
                      <td>Out of Stock</td>
                      <td>50</td>
                  </tr>
                  {/* <!-- More rows as needed --> */}
              </tbody>
          </table>
          <script src="script.js"></script>
        </body>

  )
}

