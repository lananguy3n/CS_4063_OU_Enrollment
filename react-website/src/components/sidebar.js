import React from 'react';
import {AiOutlineInfoCircle, AiOutlineSetting} from 'react-icons/ai';
import { BsSliders } from "react-icons/bs";
import { Link } from 'react-router-dom';
const Sidebar = () => {
    return (
        <div className=" items-center justify-center w-64 h-screen bg-primary flex flex-col">
            <div className='flex flex-row items-center justify-center p-4'>
                <img src="logo_white.png" alt="Logo" className="w-16 h-16 px-1 py-1" />
                <h1 className='text-white text-2xl px-0 py-2 font-bold'>ENROLL</h1>
            </div>
            
            <ul className=" text-white w-10/12 justify-center">
                <li className="font-medium px-4 py-3 hover:bg-tertiary cursor-pointer h-12" ><Link to="/">Home</Link></li>
                <li className="font-medium px-4 py-3 hover:bg-tertiary cursor-pointer h-12 "><Link to="/registrationstatus">Registration Status</Link></li>
                <li className="font-medium px-4 py-3 hover:bg-tertiary cursor-pointer h-12 "><Link to="/plan">Plan & Register</Link></li>
                <li className="font-medium px-4 py-3 hover:bg-tertiary cursor-pointer h-12 "><Link to="/classnav">ClassNav</Link></li>
                <li className="font-medium px-4 py-3 hover:bg-tertiary cursor-pointer h-12"><Link to="/myschedule">My Schedules</Link></li>
            </ul>
            <div className="mt-auto w-10/12"> 
                <ul className="text-white">
                    <li className="font-medium p-4 hover:bg-tertiary cursor-pointer"><AiOutlineInfoCircle className="inline mr-2" /> About</li>
                    <li className="font-medium p-4 hover:bg-tertiary cursor-pointer"><BsSliders className="inline mr-2" />Keyboard Shortcuts</li>
                    <li className="font-medium p-4 hover:bg-tertiary cursor-pointer"> <AiOutlineSetting className="inline mr-2" />Privacy Policy</li>
                </ul>
           
           </div>
        </div>
    );
}
export default Sidebar;
