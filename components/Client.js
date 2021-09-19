import React from 'react';

const Client = ({clients}) => {
    return (
        <div className="h-auto m-1 px-2 border-2 rounded-md border-gray-700 text-gray-200 bg-gradient-to-b from-gray-700 to-gray-500 flex-auto text-base shadow-lg">
            <h1 className="text-lg">{clients.firstName} {clients.lastName}</h1>
            <p className="text-xs"> telephone # / {clients.email}</p>
            <p> {clients.status}</p>
            <p> {clients.address} </p>
            <p> notes</p>
        </div>
    )
}

export default Client