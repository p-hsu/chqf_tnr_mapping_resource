import React from 'react';

const Colony = () => {
    return (
        <div className="h-auto m-1 px-2 border-2 rounded-md border-gray-700 bg-blue-300 bg-opacity-25 flex-auto text-base">
            <h1 className="text-lg">Colony name</h1>
            <h3 >Status:<span className="bg-yellow-200"> Pending</span>/<span className="bg-green-300">Ongoing</span>/<span className="bg-pink-300">Completed</span></h3>
            <div className="p-2 grid auto-cols-max grid-cols-2">
                <p># of cats:</p>
                <p className="grid auto-row-max grid-row-2"> Resources
                    <p className="mt-1 text-xs">food:</p>
                    <p className="mt-1 text-xs">houses:</p>
                </p>
            </div>
        </div>
    )
}

export default Colony