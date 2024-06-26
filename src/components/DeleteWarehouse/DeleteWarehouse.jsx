import React from 'react';
import deleteIcon from '../../assets/icons/close-24px.svg';
import './../DeleteWarehouse/DeleteWarehouse.scss';

const DeleteWarehouse = ({warehouseName})=>{
    return (
        <main className='delete'>
            <section className='delete__sec'>
                <div className='delete__iconDiv'>
                    <img src={deleteIcon} alt="cancel image" />
                </div>
                <div className='delete__question'>
                    Delete {warehouseName} warehouse?
                </div>
                <p className='delete__description'>
                    Please confirm that you'd like to delete the {warehouseName} from the list of warehouses.You wont't be able to undo this action.
                </p>
            </section>
            <div className='delete__buttonDiv'>
                <button>
                    Cancel
                </button>
                <button>
                    Delete
                </button>
            </div>
        </main>
    );
};
export default DeleteWarehouse;
