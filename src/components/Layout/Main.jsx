// import React from 'react';
import { Toaster } from 'react-hot-toast';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Toaster></Toaster>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;