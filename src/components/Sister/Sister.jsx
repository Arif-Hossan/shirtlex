import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Sister = () => {
    const [money] = useContext(MoneyContext)
    return (
        <div>
            <p>Sister</p>
            {money}
        </div>
    );
};

export default Sister;