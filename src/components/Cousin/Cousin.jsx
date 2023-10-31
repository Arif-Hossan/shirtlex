import React from 'react';
import Friend from '../Friend/Friend';

const Cousin = ({children, hasFriend, ring}) => {
    return (
        <div>
            <p>Cousin</p>
            {children}
            {hasFriend && <Friend ring={ring}></Friend>}
        </div>
    );
};

export default Cousin;