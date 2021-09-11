import React from 'react';
import Client from './Client';
import Colony from './Colony';

const Info = () => {
    return (
        <div className=" border-2 rounded-md border-gray-700 flex flex-1 grid grid-row-2 gap-1 overflow-auto overscroll-y-contain">
            <Client />
            <Colony />

        </div>
    )
}

export default Info