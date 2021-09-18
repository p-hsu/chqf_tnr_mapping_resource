import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

// layout component that wraps around entire app regardless of route
const Layout = ({ children }) => {
    return (
        <div className="static h-screen flex flex-col">
            <Nav />
            {children}
            <Footer />
        </div>
    )
}

export default Layout

