import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [money,setMoney] = useContext(MoneyContext);
    return (
        <div>
            <p>Uncle</p>
            <small>Grandpa Money : {money}</small>
            <button onClick={()=>setMoney(money+1000)}>Send 1000$</button>
            <section className='flex'>
                <Cousin>Nabil</Cousin>
                <Cousin>Nabila</Cousin>
            </section>
        </div>
    );
};

export default Uncle;