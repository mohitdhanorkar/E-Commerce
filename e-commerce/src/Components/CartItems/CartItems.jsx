import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const {all_products, CartItems, removeFromCart} = useContext(ShopContext)
  return (
    <div className='cartitems'>
      <div className="cartitems-formate-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_products.map((e)=>{
        if(CartItems[e.id]>0)
        {
            return (
                <div key={e.id} className="cartitems-format">
                    <img src={e.image} alt="" className='carticon-product-icon' />
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='cartitems-quantity'>{CartItems[e.id]}</button>
                    <p>{e.new_price * CartItems[e.id]}</p>
                    <img
                        src={remove_icon}
                        onClick={() => {
                            removeFromCart(e.id);
                        }}
                        alt=""
                    />
                </div>
            );
        }
        return null; // Optional: Add this line to handle the case where the condition is not met
    })}
    <hr />
</div>
);
};

export default CartItems;