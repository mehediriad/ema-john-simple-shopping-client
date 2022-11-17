import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import { clearCart, removeProduct } from '../../utilities/LocalDb';
import Cart from '../Cart/Cart';
import OrderItem from '../OrderItem/OrderItem';
import './Orders.css';

const Orders = () => {
    const [products] = useProducts()
    const [cart,setCart] = useCart(products);

    const handleRemoveProduct = id =>{
        if(cart){
            const rest = cart.filter(cartProduct=>cartProduct._id !== id);
            setCart(rest);
            removeProduct(id)
        }
    }
    const handleClearCart = () =>{
        clearCart();
        setCart([])
    }
    const handleProceedCheckout = () =>{
        console.log('checkout');
    }
    return (
        <div className='order-container'>
            <div className="order-item-container">
                {
                    cart.map(product=> <OrderItem
                        key={product._id}
                        product={product}
                        handleRemoveProduct={handleRemoveProduct}
                    ></OrderItem>)
                }
            </div>
            <div className="order-cart-container">
                <Cart key={cart._id} cartItems={cart} handleClearCart={handleClearCart}>
                <button onClick={handleProceedCheckout}>Proceed Checkout <FontAwesomeIcon icon={faMoneyBill} /></button>
                </Cart>
            </div>
            
        </div>
    );
};

export default Orders;