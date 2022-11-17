import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from "react-router-dom";
import './Cart.css';

const Cart = (props) => {
    
    const {cartItems} = props;
    const navigate = useNavigate()
    

    let total = 0;
    let shipping = 0;
    let selectedItem = 0;
    for(const product of cartItems){
        selectedItem = selectedItem + product.quantity;
        total = total + (product.price*product.quantity);
        shipping = shipping + (product.shipping*product.quantity);
    }

    const tax = (total * .1).toFixed(2);
    const grandTotal = total + shipping + parseFloat(tax);

    
    

    return (
        <div className='ema-john-cart'>
            <h3 className='order-summary'>Order Summary</h3>

            <p>Selected Items: {selectedItem}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <p className='grand-total'>Grand Total: ${grandTotal}</p>
            <div className='clear-cart'>
                <button onClick={()=>props.handleClearCart()}>Clear Cart <FontAwesomeIcon icon={faTrashCan} /></button>
            </div>
            <div className='review-order'>
                {props.children}
            </div>
        </div>
    );
};

export default Cart;