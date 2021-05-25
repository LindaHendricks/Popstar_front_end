import React from 'react';
import "./Checkout.scss"
import Subtotal from './Subtotal';
import Cart from './Cart';

const Checkout = ({cart}) => {
    
    const cartItems = cart.map(item => <Cart key={item.id} {...item}/>)

    return (
        <div className="checkout">
            
            <div className="checkout__left">                
                <div>
                    <h2 className="checkout__title">
                        Your Shopping Cart
                    </h2>
                    {cartItems}
                </div>
            </div>

            <div className="checkout__right">
            </div>
        </div>
     );
}
 
export default Checkout;