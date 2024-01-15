import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'

const Product = ()=> {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();  // product in number formate
  const product = all_product.find ((e)=> e.id === Number(productId)) // product in string formate convert it into Number
  return (
    <div>
      
    </div>
  )
}

export default Product
