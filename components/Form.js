import React from 'react';

const Form = () => {
    return (
        <form className="p-2 m-auto w-full border-2 border-gray-700 border-opacity-50 rounded-md bg-gradient-to-b from-gray-700 via-gray-500 to-gray-700 shadow-lg">
                <div className="text-xs text-gray-200">
                    <p>* required fields</p>
                </div>
                <div className="form-div grid grid-cols-2 gap-2">
                    <input type="text" placeholder="First Name/Org. *" className="form-input"/>
                    <input type="text" placeholder="Last Name" className="form-input"/>
                </div>
                <div className="form-div">
                    <input type="text" placeholder="Street *" className="form-input"/>
                </div>
                <div className="form-div grid grid-cols-3 gap-2">
                    <input type="text" placeholder="City *" className="form-input"/>
                    <input type="text" placeholder="State *" className="form-input"/>
                    <input type="text" placeholder="Zipcode *" className="form-input"/>
                </div>
                <div className="form-div">
                    <input type="text" placeholder="Phone #" className="form-input"/>
                </div>
                <div className="form-div">
                    <input type="text" placeholder="Email" className="form-input"/>
                </div>
                <div className="form-div">
                    <label className="mt-1 ml-1 uppercase text-gray-200 text-xs font-semibold">Status</label>
                </div>
                <div className="form-div">
                    <select className="form-input bg-white">
                        <option>--</option>
                        <option>Feeder</option>
                        <option>Trapper</option>
                        <option>Transporter</option>
                        <option>Organization</option>
                    </select>
                </div>
        </form>
    )
}

export default Form
