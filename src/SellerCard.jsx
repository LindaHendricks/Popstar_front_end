import React from 'react';

function handleClick () {
    console.log("clicked")
}

const SellerCard = () => {
    return (
        <div className="sellercard">
            <p> {/* <p> SellerCard info</p> */}</p>
            <p> {/* <p> SellerCard product</p> */}</p>
            <p> {/* <p> SellerCard Name</p> */}</p>
    
            <img className="card__image" src="https://m.media-amazon.com/images/G/01/beauty/Gillette_4.17_DOTD._AC_SY480_.jpg" alt="" />
            <button className="cart__button" onClick={handleClick}>Buy this Funko </button>
    </div>
    );
}


export default SellerCard