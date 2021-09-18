import React from 'react';
import Link from 'next/link';

const Nav = () => {
    return (
        <div className="py-2 px-3 bg-gray-700 text-gray-300 flex justify-between">
            <div className="text-xl p-1 border-2 rounded-md border-dotted border-gray-900 border-opacity-75 text-purple-300"><Link href="/">CHQF TNR MAP</Link></div>
            <div className="flex items-center">
                {/* internal routes */}
                <div className=""><Link href="/add">Add</Link></div>
                <div className="ml-3"><Link href="/about">About</Link></div>
                {/* external link to clinic hq cloud software used by CHQF */}
                <div className="ml-2 text-xs text-gray-900">|</div>
                <div className="ml-2 p-1 rounded-md bg-gray-600 bg-opacity-60 text-pink-400"><a target="_blank" href="https://clinichq.com/account/login">C-HQ</a></div>
            </div>
        </div>
    )
}

export default Nav