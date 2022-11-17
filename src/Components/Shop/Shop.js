import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import { addToDb, clearCart } from '../../utilities/LocalDb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const size = 9
    const [pages,setPages]= useState(0)
    const [currentPage,setCurrentPage]= useState(0)
    const [products,setProducts] = useProducts(currentPage,size );
    const [cartItems,setCartItems] = useCart()
    const navigate = useNavigate()
    

    const handleAddToCart = (product) =>{
        
        let isExists = cartItems.find(cartItem => cartItem._id === product._id);
        let newCart = []
        if(!isExists){
            product.quantity = 1;
            newCart = [...cartItems,product];
        }else{
            const rest = cartItems.filter(cartItem => cartItem._id !== product._id);
            isExists.quantity = isExists.quantity + 1;
            newCart = [...rest,isExists]
        }
        
        setCartItems(newCart);
        addToDb(product._id);
    }

    const handleClearCart = () =>{
        clearCart();
        setCartItems([])
        
    }
    const handleOrderReview = () =>{
        navigate('/order-review')
    }

    useEffect(()=>{
        fetch('http://localhost:5000/productsCount')
        .then(res=>res.json())
        .then(data=>{
            const count = data.count;
            const pageCount = Math.ceil(count/size);
            setPages(pageCount)
        })
    },[])
    return (
        <>
        <section className='ema-jhon-shop'>
            <div>
            <div className="shop-container">
            
            {
                products.map(product=> <Product 
                    key={product._id}
                    product={product}
                    handleAddToCart= {handleAddToCart}
                />)
            }

            
            </div>

            <div className='pagination'>
            {
                [...Array(pages).keys()].map(number=> <button
                    className={currentPage === number ? 'selected':''}
                    onClick={()=>setCurrentPage(number)}
                >{number+1}</button> )
            }
         </div>
            </div>
            
            <div className="cart-container">
                <Cart
                    cartItems = {cartItems}
                    handleClearCart={handleClearCart}
                >
                    <button onClick={handleOrderReview}>Review Order <FontAwesomeIcon icon={faArrowRight} /></button>
                </Cart>
            </div>
        </section>
       
    </>
    );
};

export default Shop;