// import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css';
import { useState } from 'react';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);
    const handleAddToCart = tshirt => {
        console.log(tshirt);
    }
    return (
        <div className='home-container'>

            <div className="grid grid-cols-3 gap-2">
                {tshirts.map(tshirt => <Tshirt
                    key={tshirt._id}
                    tshirt={tshirt}
                    handleAddToCart={handleAddToCart}>
                </Tshirt>)}
            </div>
            <div>
                <p>Oder Summary</p>
            </div>
        </div>

    );
};

export default Home;