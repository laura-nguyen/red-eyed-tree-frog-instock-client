import "./WarehouseDetails.scss";

const WarehouseDetails = () => {
  return (
    <main className="wrapper">
      <div className="edit-wh__header">
        <Link className="edit-wh__back-link" to={"/warehouses"}>
          <img
            className="edit-wh__back-icon"
            src={backArrow}
            alt="back arrow"
          />
        </Link>
        <h1 className="edit-wh__title">Edit Warehouse</h1>
      </div>
      <hr className="edit-wh__divider" />
      <div className="header">
        <button className="header__button--back"></button>
        <h1 className="header__name">Washington</h1>
        <button className="header__button--edit"></button>
      </div>
      <div className="details">
        <div className="details__address">
          <h4>Warehouse Address:</h4>
          <p>Washington, USA</p>
        </div>
        <div className="details__contact">
          <div className="details__contact-name">
            <h4>Contact Name:</h4>
            <p>Graeme Lyon</p>
            <p>Warehouse Manager</p>
          </div>
          <div className="details__contact__info">
            <h4>Contact Information:</h4>
            <p>453454353443</p>
            <p>glyon@instock.com</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WarehouseDetails;
