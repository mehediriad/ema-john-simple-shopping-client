import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './OrderItem.css';

const OrderItem = (props) => {
    const {name,img,price,quantity,shipping}= props.product;
    
    return (
        <div className='single-order-item-container'>
            <div className='single-order-item-info'>
                <div className='order-item-img'>
                    <img src={img} alt="Img" />
                </div>
                <div>
                    <h6 title={name}>{name.length>20? name.slice(0,20)+"..." : name}</h6>
                    <p><small>Price: <span className='orange-color'>${price}</span></small></p>
                    <p><small>Shipping Charge: <span className='orange-color'>${shipping}</span></small></p>
                    <p><small>Quantity: <span className='orange-color'>${quantity}</span></small></p>
                </div>
            </div>
            <div className='order-delete-btn'>
                <button onClick={()=>props.handleRemoveProduct(props.product._id)}>
                <FontAwesomeIcon icon={faTrashCan} />
                </button>
            </div>
        </div>
    );
};

export default OrderItem;