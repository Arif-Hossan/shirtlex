import React, { useContext } from 'react';
import { PropertyContext } from '../Grandpa/Grandpa';

const Brother = () => {
    const property = useContext(PropertyContext);
    return (
        <div>
            <p>Brother</p>
            <small>{property}</small>
        </div>
    );
};

export default Brother;