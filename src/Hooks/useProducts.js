import { useEffect, useState } from "react";

const useProducts = (page,size) =>{
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/products?page=${page}&size=${size}`)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[page,size])

    return [products,setProducts]
}

export default useProducts;