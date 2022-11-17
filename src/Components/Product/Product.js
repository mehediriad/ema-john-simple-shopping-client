import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name,img,price,ratings,seller} = props.product;
    return (
        <div className='ema-john-product'>
            <div className="product-info">
                <div className="product-thamnail">
                    <img src={img} alt="" />
                </div>
                <div className='product-details'>
                    <h3>{name}</h3>
                    <p>Price: ${price}</p>  
                </div>
            </div>
            

            <div className='other-product-details'>
                <p><small>Manufacturer : {seller}</small></p>
                <p><small>Rating: {ratings} star</small></p>
                <div className='add-to-cart'>
                    <button onClick={()=>props.handleAddToCart(props.product)}>Add to Cart <FontAwesomeIcon icon={faCartPlus} /></button>
                </div>
            </div> 
        </div>
    );
};

export default Product;