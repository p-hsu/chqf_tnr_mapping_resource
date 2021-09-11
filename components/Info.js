import React from 'react';
import Client from './Client';
import Colony from './Colony';

const Info = () => {
    return (
        <div className="flex flex-1 grid grid-row-2 gap-1">
            <Client />
            <Colony />

        </div>
    )
}

export default Info