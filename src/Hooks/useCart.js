import { useEffect, useState } from "react";
import { getToDb } from "../utilities/LocalDb";

const useCart = () =>{
    const [cartItems,setCartItems] = useState([])

    useEffect(()=>{
        const storedShoppingCart = getToDb();
        const keys = Object.keys(storedShoppingCart);

        fetch('http://localhost:5000/products-by-keys',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(keys)
        })
        .then(res=>res.json())
        .then(products=>{
            console.log(products);
            const savedCart = []
            for(const id in storedShoppingCart){
                const storedProduct = products.find(product=> product._id === id)
                if(storedProduct){
                    storedProduct.quantity = storedShoppingCart[id];
                    savedCart.push(storedProduct)
                }
            }
            setCartItems(savedCart)
        })
        


        
        
    },[])

    return [cartItems,setCartItems];
}

export default useCart;