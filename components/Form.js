import React from 'react';
import Button from '../components/Button';

const Form = () => {

    const handleSubmit = async (e) => {
        e.preventDefault()
    }

    return (
        <form className="form" onSubmit="handleSubmit">
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
                    <label className="mt-1 ml-1 uppercase text-gray-200 text-xs font-semibold" for="status">Status</label>
                </div>
                <div className="form-div">
                    <select className="form-input bg-white" id="status">
                        <option>--</option>
                        <option>Feeder</option>
                        <option>Trapper</option>
                        <option>Transporter</option>
                        <option>Organization</option>
                    </select>
                </div>
                <Button />
        </form>
    )
}

export default Form
