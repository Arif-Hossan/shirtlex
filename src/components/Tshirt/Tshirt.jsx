// import React from 'react';

const Tshirt = ({tshirt}) => {
    const {name,price,picture} = tshirt;
    return (
        <div className="tshirt">
            <img className="h-48" src={picture} alt="" />
            <p>{name}</p>
            <p>{price}</p>
            <button>Buy Now</button>
        </div>
    );
};

export default Tshirt;