import axios from 'axios';
import React, { useEffect } from 'react'
import toast from 'react-hot-toast'

function Product() {
    useEffect(() => {
        try{
            async function getProducts(){
                const {data} = axios.get('https://fakestoreapi.com/products');
                console.log(data);
            }
            getProducts();
        }catch(error){
            console.log(error);
        }
        
    },[])
  return (
    <div></div>
  )
}

export default Product