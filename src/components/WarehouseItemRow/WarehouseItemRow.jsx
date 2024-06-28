import { Link, useNavigate } from "react-router-dom";
import chevronIcon from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";

import "./WarehouseItemRow.scss";

const WarehouseItemRow = ({ warehouses }) => {
  console.log(warehouses);
  const navigate = useNavigate();

  const handleEditClick = (id) => {
    navigate(`/warehouses/edit/${id}`);
  };
  return (
    <>
      {warehouses.map((warehouses) => (
        <div key={warehouses.id} className="warehouse-list">
          <article className="warehouse-list__item-wrapper">
            <div className="warehouse-list__item">
              <div className="warehouse-list__left">
                <div className="cell">
                  <h4 className="cell__heading">WAREHOUSE</h4>
                  <Link to={`/warehouses/${warehouses.id}`}>
                    <div className="cell__link">
                      <p className="cell__link-text p-medium">
                        {warehouses.warehouse_name}
                      </p>
                      <img
                        className="cell__icon cell__icon--chevron"
                        src={chevronIcon}
                        alt="View warehouse icon"
                      />
                    </div>
                  </Link>
                </div>
                <div className="cell cell--category">
                  <h4 className="cell__heading">ADDRESS</h4>
                  <p className="p-medium">
                    {warehouses.address}, {warehouses.country}
                  </p>
                </div>
              </div>
              <div className="warehouse-list__right">
                <div className="cell cell--status">
                  <h4 className="cell__heading">CONTACT NAME</h4>
                  <p className="p-medium">{warehouses.contact_name}</p>
                </div>
                <div className="cell cell--qty">
                  <h4 className="cell__heading">CONTACT INFORMATION</h4>
                  <p className="p-medium">{warehouses.contact_phone}</p>
                  <p className="p-medium">{warehouses.contact_email}</p>
                </div>
              </div>
            </div>
            <div className="warehouse-list__actions">
              <img
                className="cell__icon"
                src={deleteIcon}
                alt="Delete warehouse icon"
              />
              <img
                onClick={() => handleEditClick(1)}
                className="cell__icon"
                src={editIcon}
                alt="Edit warehouse icon"
              />
            </div>
          </article>
          <hr className="divider" />
        </div>
      ))}
    </>
  );
};

export default WarehouseItemRow;
