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
                <p className='text-4xl font-semibold text-black-400 px-4'>Registration Status</p>
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
                    <Card title='Registration Status' addSemester={true} semesterval="FALL 24" >
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

                    <Card title='Earned Hours'>
                        <div className='flex flex-row items-center space-x-4 px-2'>
                            <div className='flex flex-col'>
                                <p className='text-textprimary text-3xl font-semibold'>60</p>
                                <p className=' text-textprimary font-thin text-lg py-2 '>Institution Hours</p>
                            </div>
                            <div className='flex flex-col px-2'>
                                <p className='text-textprimary text-3xl font-semibold'>80</p>
                                <p className=' text-textprimary font-thin text-lg py-2 '>Transfer Hours</p>
                            </div>
                            <div className='flex flex-col px-2'>
                                <p className='text-textprimary text-3xl font-semibold'>4.0</p>
                                <p className=' text-textprimary font-thin text-lg py-2 '>Overall GPA</p>
                            </div>
                        </div>

                    </Card>
                </div>
                <div className='w-1/2 flex-col space-y-4'>
                    {/*{title, addSemester=false, semesterval='Fall 2024',addlink=false, linkurl='nolink', linktext='linktext', children} */}
                    <Card title='Primary Curriculum'>
                        <div className='flex flex-row items-center space-x-4 pl-2'>
                            <div className='text-xl text-textprimary font-semibold pl-2'>Major/Department</div>
                        </div>
                        <p className='text-textprimary p-4 '> Computer Science, Bachelor of Science</p>
                        <a href="https://ou.edu/content/dam/CoE/CS/CS%202021%20Flowchart.pdf" target="_blank" className='text-blue-500 w-1/2 flex flex-row items-center space-x-4 pl-4'>Degree Checksheet</a>
                        

                        <div className='flex flex-row items-center space-x-4 pl-2'>
                            <div className='text-xl text-textprimary font-semibold pl-2'>Level</div>
                        </div>
                        <p className='text-textprimary p-4'> Undergraduate</p>

                        <div className='flex flex-row items-center space-x-4 pl-2'>
                            <div className='text-xl text-textprimary font-semibold pl-2'>College</div>
                        </div>
                        <p className='text-textprimary p-4'> Gallogly College of Engineering</p>

                        <div className='flex flex-row items-center space-x-4 pl-2'>
                            <div className='text-xl text-textprimary font-semibold pl-2'>Campus</div>
                        </div>
                        <p className='text-textprimary p-4'> Norman Campus</p>

                        <div className='flex flex-row items-center space-x-4 pl-2'>
                            <div className='text-xl text-textprimary font-semibold pl-2'>Admission</div>
                        </div>
                        <p className='text-textprimary p-4'> Fall 2020, Undergraduate</p>

                        <div className='flex flex-row items-center space-x-4 pl-2'>
                            <div className='text-xl text-textprimary font-semibold pl-2'>Catalog Term</div>
                        </div>
                        <a href="https://ou.edu/content/dam/CoE/CS/CS%202021%20Flowchart.pdf" target="_blank" className='text-blue-500 w-1/2 flex flex-row items-center space-x-4 pl-4'>Fall 2023</a>
                        
                        

                    </Card>

                    

                </div>
            </div>

        </div>
    );
}
export default RegistrationStatus;

