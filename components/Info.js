import React from 'react';
import Client from './Client';
import Colony from './Colony';

const Info = (props) => {
    return (
        <div className="flex flex-1 grid grid-row-2 gap-1">
            {/* {props.clients.map((clients) => {
                return <Client clients={clients} />
                }
            )} */}

            {props.colony.map((colony, index) => {
                return <Colony colony={colony} key={index}/>
                }
            )}

        </div>
    )
}

export default Info