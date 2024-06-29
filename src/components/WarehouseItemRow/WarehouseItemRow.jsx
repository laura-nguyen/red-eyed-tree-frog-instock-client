import { Link } from "react-router-dom";
import chevronIcon from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";

import "./WarehouseItemRow.scss";

const WarehouseItemRow = ({ warehouses }) => {
  return (
    <>
      {warehouses.map((warehouses) => (
        <div key={warehouses.id} className="warehouse-list">
          <article className="warehouse-list__item-wrapper">
            <div className="warehouse-list__item">
              <div className="warehouse-list__left">
                <div className="wh-td wh-td--name">
                  <h4 className="wh-td__heading">WAREHOUSE</h4>
                  <Link to={`/warehouses/${warehouses.id}`}>
                    <div className="wh-td__link">
                      <p className="wh-td__link-text p-medium">
                        {warehouses.warehouse_name}
                      </p>
                      <img
                        className="wh-td__icon wh-td__icon--chevron"
                        src={chevronIcon}
                        alt="View warehouse icon"
                      />
                    </div>
                  </Link>
                </div>
                <div className="wh-td wh-td--address">
                  <h4 className="wh-td__heading">ADDRESS</h4>
                  <p className="p-medium">
                    {`${warehouses.address}, ${warehouses.city}, ${warehouses.country}`}
                  </p>
                </div>
              </div>
              <div className="warehouse-list__right">
                <div className="wh-td wh-td--contact-name">
                  <h4 className="wh-td__heading">CONTACT NAME</h4>
                  <p className="p-medium">{warehouses.contact_name}</p>
                </div>
                <div className="wh-td wh-td--contact-info">
                  <h4 className="wh-td__heading">CONTACT INFORMATION</h4>
                  <p className="p-medium">{warehouses.contact_phone}</p>
                  <p className="p-medium">{warehouses.contact_email}</p>
                </div>
              </div>
            </div>
            <div className="wh-td--actions">
              <img
                className="wh-td__icon"
                src={deleteIcon}
                alt="Delete warehouse icon"
              />
              <Link
                to={`/warehouses/edit/${warehouses.id}`}
                className="wh-td--actions-edit"
              >
                <img
                  className="wh-td__icon"
                  src={editIcon}
                  alt="Edit warehouse icon"
                />
              </Link>
            </div>
          </article>
          <hr className="divider" />
        </div>
      ))}
    </>
  );
};

export default WarehouseItemRow;
