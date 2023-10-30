// import React from 'react';
import './Tshirt.css';

const Tshirt = ({tshirt,handleAddToCart}) => {
    const {name,price,picture} = tshirt;
    return (
        <div className="tshirt rounded-lg">
            <img className="h-52 w-full" src={picture} alt={name} />
            <p>{name}</p>
            <p>{price}</p>
            <button onClick={()=>handleAddToCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default Tshirt;