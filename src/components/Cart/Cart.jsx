// import React from 'react';
import './Cart.css';

const Cart = ({ cart,handleRemoveFromCart }) => {
    // conditional rendering using if else
    let message;
    if(cart.length===0){
        message = <p>Buy Some Product</p>
    }else {
        message = <div>
            <p>Borolox</p>
            <p>Thanks for wasting money</p>
        </div>
    }
    return (
        <div>
            <h2 className={cart.length === 0 ? 'red' : 'purple'}>Order Summary : {cart.length}</h2>
            {/* another way of conditional rendering */}
            {cart.length>=2 ? 
            <span>Buy More</span> 
            : <span>Goribzzz</span>}

            {/* conditional rendering using if else */}
            {message}

            {/* logical and for conditional rendering */}
            {cart.length ===3 && <span>You Added three product in cart</span> }
            
            {/* logical or for conditional rendering */}
            {cart.length === 3 || <span>Not 3</span>}

            {cart.map(tshirt => <p
                key={tshirt._id}>
                {tshirt.name}
                <button onClick={()=>handleRemoveFromCart(tshirt._id)}>X</button></p>)}

                <p className={`yellow mota ${cart.length===4 ? 'purple':'orange'}`}>Test</p>
        </div>
    );
};

export default Cart;