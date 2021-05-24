import React from "react";
import "./Subtotal.scss";
import CurrencyFormat from  "react-currency-format";
const Subtotal = () => {
  return (
    <div className="subtotal">
      
      Subtotal:
    <CurrencyFormat
      renderText={(value) => {
      <>
          <p>Hello</p>
        </>
        
      }}

      decimalScale={2}
      value={900}
        displayType={'text'}
        prefix={"$"}
        renderText={value => <div>{value}</div>}

    />
    
  </div>
  ) 
};

export default Subtotal;
