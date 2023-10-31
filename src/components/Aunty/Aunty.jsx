import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = ({ring}) => {
    return (
        <div>
            <p>Aunty</p>
            <section className='flex'>
                <Cousin>Beel</Cousin>
                <Cousin ring={ring} hasFriend={true}>Bela</Cousin>
            </section>
        </div>
    );
};

export default Aunty;