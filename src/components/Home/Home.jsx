// import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css';

const Home = () => {
    const tshirts = useLoaderData();
    return (
        <div className='home-container'>
            
            <div className="grid grid-cols-3">
                {tshirts.map(tshirt => <Tshirt key={tshirt._id} tshirt={tshirt}></Tshirt>)}
            </div>
            <div>
                <p>Oder Summary</p>
            </div>
        </div>
        
    );
};

export default Home;