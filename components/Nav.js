import React from 'react';
import Link from 'next/link';

const Nav = () => {
    return (
        <div className="py-4 px-8 bg-gray-600 text-white flex justify-between">
            <div className="text-xl"><Link href="/">CHQF TNR MAP</Link></div>
            <div className="flex items-center">
                <div className="ml-8"><Link href="/add">Add</Link></div>
                <div className="ml-8"><Link href="/about">About</Link></div>
            </div>
        </div>
    )
}

export default Nav