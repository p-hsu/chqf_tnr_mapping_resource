import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

// layout component that wraps around entire app regardless of route
const Layout = ({ children }) => {
    return (
        <div className="static h-screen flex flex-col bg-pink-100 bg-opacity-25">
            <Nav />
            {children}
            <Footer />
        </div>
    )
}

export default Layout

