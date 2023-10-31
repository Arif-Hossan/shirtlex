import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css';

export const PropertyContext = createContext();
export const MoneyContext = createContext(0);

const Grandpa = () => {
    const ring = 'diamond';
    const [money, setMoney] = useState(0);

    return (
        <div className='grandpa'>
            <p>Grandpa</p>
            <p>Has Money : {money}</p>
            <MoneyContext.Provider value ={[money,setMoney]}>
                <PropertyContext.Provider value='Gold Ring'>
                    <section className='flex'>
                        <Father ring={ring}></Father>
                        <Uncle></Uncle>
                        <Aunty ring={ring}></Aunty>
                    </section>
                </PropertyContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;