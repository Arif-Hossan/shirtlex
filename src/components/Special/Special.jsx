import React from 'react';

const Special = ({ring,children}) => {
    return (
        <div>
            <p>Special</p>
            <small>{children}</small>
            {ring}
        </div>
    );
};

export default Special;