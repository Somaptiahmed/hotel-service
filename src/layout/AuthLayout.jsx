import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const AuthLayout = () => {
    return (
        <div>
             <Navbar></Navbar>
            <div className="min-h-screen">
                <Outlet /> {/* Renders child routes */}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AuthLayout;