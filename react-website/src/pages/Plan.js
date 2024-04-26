import React from 'react';
import Card from '../components/Card';
import { FaCheckCircle,FaBell} from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

import 'react-circular-progressbar/dist/styles.css';
import { Link } from 'react-router-dom';

const RegistrationStatus = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex flex-row p-2 justify-between'>
                <p className='text-4xl font-bold text-black-400 px-4'>Plan and Register</p>
                <div className='flex flex-row float-end space-x-8'>
                    <HiOutlineQuestionMarkCircle className='text-textprimary text-3xl' />
                    <FaBell className='text-textprimary text-3xl' />
                    <BsFillGrid3X3GapFill className='text-textprimary text-3xl' />
                    <CgProfile className='text-textprimary text-3xl' />
                </div>
            </div>

            <div className='flex flex-row'>
                <div className='w-1/2 flex-col space-y-4 pl-2'>
                    {/*{title, addSemester=false, semesterval='Fall 2024',addlink=false, linkurl='nolink', linktext='linktext', children} */}
                    <Card title='Search & Filter' addSemester={true} semesterval="FALL 24" >
                        <div className='flex flex-row items-center space-x-4 leading-loose p-2.5'>
                            <FaCheckCircle className='text-green-500 text-3xl' />
                            <div className='text-xl text-textprimary font-semibold'>Good Student Status</div>
                        </div>
                        <div className='flex flex-row items-center space-x-4 leading-loose p-2.5'>
                            <FaCheckCircle className='text-green-500 text-3xl' />
                            <div className='text-xl text-textprimary font-semibold'>Good Academic Standing</div>
                        </div>
                        <div className='flex flex-row items-center space-x-4  leading-loose p-2.5'>
                            <FaCheckCircle className='text-green-500 text-3xl' />
                            <div className='text-xl text-textprimary font-semibold'>No Holds</div>
                        </div>
                        <p className='text-textprimary p-4'> You have no holds preventing registration.</p>

                    </Card>
                </div>


                <div className='w-1/2 flex-col space-y-4'>
                    {/*{title, addSemester=false, semesterval='Fall 2024',addlink=false, linkurl='nolink', linktext='linktext', children} */}
                    <Card title='Fall 2024 Schedule'  addlink={true} linkurl='/plan' linktext='View Past Schedules'>
                        <img src='/imagesched.png' alt="schedule" className="w-96 h-64 px-1 py-1 text-center" />
                    </Card>

                    

                </div>
            </div>

        </div>
    );
}
export default RegistrationStatus;

