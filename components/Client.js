import React from 'react';

const Client = () => {
    return (
        <div className="h-auto m-1 px-2 border-2 rounded-md border-gray-700 bg-blue-300 bg-opacity-25 flex-auto text-base">
            <h1 className="text-lg">Client name</h1>
            <p className="text-xs"> telephone # / email</p>
            <p> address </p>
            <p> notes</p>
        </div>
    )
}

export default Client