import React from 'react';
import Card from '../components/Card';
import { FaCheckCircle,FaBell} from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { CgProfile } from "react-icons/cg";

const ClassNav = () => {
    return (
        <div className='flex flex-col' >
            <div className='flex flex-row p-2 pb-4 justify-between'>
                <p className='text-4xl font-semibold text-black-400 '>ClassNav</p>
                <div className='flex flex-row float-end space-x-8'>
                    <HiOutlineQuestionMarkCircle className='text-textprimary text-3xl' />
                    <FaBell className='text-textprimary text-3xl' />
                    <BsFillGrid3X3GapFill className='text-textprimary text-3xl' />
                    <CgProfile className='text-textprimary text-3xl' />
                </div>
            </div>

            <div>
                <h1></h1>
                <iframe
                    src="https://classnav.ou.edu"
                    title="erm"
                    width="100%"
                    height="800vh"
                    allow="fullscreen"
                    className="embedded-iframe" 
                ></iframe>
            </div>
        </div>

    );
}
export default ClassNav;