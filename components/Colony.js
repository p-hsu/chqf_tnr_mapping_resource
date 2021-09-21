import React from 'react';

const Colony = ({colony}) => {
    return (
        <div className="h-auto m-1 px-2 border-2 rounded-md border-gray-700 text-gray-200 bg-gradient-to-b from-gray-700 to-gray-500 flex-auto text-base shadow-lg">
            <h1 className="text-lg">{colony.name}</h1>
            <h3 >Status:<span className="bg-yellow-400"> Pending</span>/<span className="bg-green-600">Ongoing</span>/<span className="bg-pink-400">Completed</span></h3>
            <div className="p-2 grid auto-cols-max grid-cols-2">
                <p>{colony.fixed} / {colony.total} fixed</p>
                <p>{colony.rescue} / {colony.total} to rescues</p>
                <p>{colony.coordinates[0]}, {colony.coordinates[1]}</p>
                <p className="grid auto-row-max grid-row-2"> Resources
                    <p className="mt-1 text-xs">food:</p>
                    <p className="mt-1 text-xs">houses:</p>
                </p>
            </div>
        </div>
    )
}

export default Colony