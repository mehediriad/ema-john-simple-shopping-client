
const getToDb = () =>{
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        const parseStoredCart = JSON.parse(storedCart);
        return parseStoredCart;
    }else{
        return {}
    }
}

const addToDb = id =>{
    const shoppingCart = getToDb();
    if(shoppingCart){
        const quantity = shoppingCart[id];
        if(quantity){
            const newQuantity = quantity + 1;
            shoppingCart[id] = newQuantity;
        }else{
            shoppingCart[id] = 1;
        }
        localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))  
    }
}

const removeProduct = id =>{
    const storedCart = getToDb();
    if(storedCart){
        if(id in storedCart){
            delete storedCart[id];
            localStorage.setItem('shopping-cart',JSON.stringify(storedCart))  
        }
    }
}
const clearCart = () =>{
    localStorage.clear()
}
export {
    addToDb,
    getToDb,
    clearCart,
    removeProduct
};

