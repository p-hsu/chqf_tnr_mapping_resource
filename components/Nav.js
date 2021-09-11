import React from 'react';
import Link from 'next/link';

const Nav = () => {
    return (
        <div className="py-4 px-8 bg-gray-700 text-yellow-400 flex justify-between">
            <div className="text-xl"><Link href="/">CHQF TNR MAP</Link></div>
            <div className="flex items-center">
                <div className="ml-8"><Link href="/add">Add</Link></div>
                <div className="ml-8"><Link href="/about">About</Link></div>
                <div className="ml-8 p-1 rounded-md bg-gray-600 bg-opacity-60 text-purple-400"><a target="_blank" href="https://clinichq.com/account/login">C-HQ</a></div>
            </div>
        </div>
    )
}

export default Nav