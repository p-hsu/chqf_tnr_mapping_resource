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
                <div className="form-div">
                    <input type="text" placeholder="Colony name *" className="form-input"/>
                </div>
                <div className="form-div">
                    <input type="text" placeholder="Street *" className="form-input"/>
                </div>
                <div className="form-div grid grid-cols-3 gap-2">
                    <input type="text" className="form-input bg-white cursor-not-allowed" value="St. Louis"/>
                    <input type="text" className="form-input bg-white cursor-not-allowed" value="Missouri"/>
                    <input type="text" placeholder="Zipcode *" className="form-input"/>
                </div>
                <div className="form-div h-14">
                    <textarea placeholder="Notes..." className="form-input resize-none" rows="5"/>
                </div>
                <div className="form-div">
                    <label className="mt-1 ml-1 uppercase text-gray-200 text-xs font-semibold" for="group">Group *</label>
                </div>
                <div className="form-div grid grid-cols-2 gap-2 justify-items-center">
                    <div className="flex items-center h-5">
                        <input type="checkbox" className="form-input h-5 sm:h-4 w-5 sm:w-4" name="group1"/>
                        <label className="text-gray-200 text-s font-semibold px-3" for="group1">Felman Levin Ferals</label>
                    </div>
                    <div className="flex items-center h-5">
                        <input type="checkbox" className="form-input h-5 sm:h-4 w-5 sm:w-4" name="group2"/>
                        <label className="text-gray-200 text-s font-semibold px-3" for="group2">TNR Sunday Ferals</label>
                    </div>
                </div>
                <div className="form-div">
                    <label className="mt-1 ml-1 uppercase text-gray-200 text-xs font-semibold" for="status">Status *</label>
                </div>
                {/* section for status > determines color code for pin */}
                <div className="form-div">
                    <select className="form-input bg-white" id="status">
                        <option>--</option>
                        <option>Pending</option>
                        <option>In Process</option>
                        <option>Complete (for now...)</option>
                    </select>
                </div>
                <div className="form-div">
                    <div className="flex-initial">
                        <input type="text" placeholder="fixed *" className="form-input w-16 md:w-20"/>
                        <span className="text-gray-200 text-m font-semibold mx-3">/</span>
                        <input type="text" placeholder="total *" className="form-input w-16 md:w-20"/>
                    </div>
                    <div className="flex-auto ml-8 md:ml-12">  
                        <input type="text" placeholder="to rescue *" className="form-input w-24"/>
                    </div>
                </div>
                <Button />
        </form>
    )
}

export default Form
