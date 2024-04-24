import React from 'react';
import Card from '../components/Card';
import { FaCheckCircle,FaBell} from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { CgProfile } from "react-icons/cg";

import 'react-circular-progressbar/dist/styles.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex flex-row p-2 justify-between'>
                <p className='text-4xl font-bold text-black-400 px-4'>Home</p>
                <div className='flex flex-row float-end space-x-8'>
                    <HiOutlineQuestionMarkCircle className='text-textprimary text-3xl' />
                    <FaBell className='text-textprimary text-3xl' />
                    <BsFillGrid3X3GapFill className='text-textprimary text-3xl' />
                    <CgProfile className='text-textprimary text-3xl' />
                </div>
            </div>
            <div className='flex flex-row'>
                <div className='w-1/2 flex-col space-y-4'>
                    {/*{title, addSemester=false, semesterval='Fall 2024',addlink=false, linkurl='nolink', linktext='linktext', children} */}
                    <Card title='Registration Status' addSemester={true} semesterval="FALL 24" >
                        <div className='flex flex-row items-center space-x-4'>
                            <FaCheckCircle className='text-green-500 text-3xl' />
                            <div className='text-xl text-textprimary font-semibold'>Enrollment Permitted</div>
                        </div>
                        <p className='text-textprimary p-4'> You have no holds preventing registration</p>
                        <Link to="/registrationstatus"><GoArrowRight className=' float-right text-3xl text-textprimary' /></Link>

                    </Card>

                    <Card title='Academic Profile'>
                        <div className='flex flex-row items-center space-x-4 px-2'>
                            <div className='flex flex-col'>
                                <p className='text-textprimary text-3xl font-semibold'>Senior</p>
                                <p className=' text-textprimary font-thin text-lg py-2 '>Admitted Fall 2020</p>
                            </div>
                            <div className='flex flex-col px-2'>
                                <p className='text-textprimary text-3xl font-semibold'>115</p>
                                <p className=' text-textprimary font-thin text-lg py-2 '>GPA Hours</p>
                            </div>
                            <div className='flex flex-col px-2'>
                                <p className='text-textprimary text-3xl font-semibold'>4.0</p>
                                <p className=' text-textprimary font-thin text-lg py-2 '>Overall GPA</p>
                            </div>
                        </div>
                        <div className='flex flex-row items-center space-x-4 px-2'>
                            <div className='flex flex-col w-1/2'>
                                <p className='text-textprimary text-3xl font-semibold'>Major</p>
                                <p className=' text-textprimary font-thin text-lg py-2 '>Computer Science</p>
                            </div>
                            <a href="https://ou.edu/content/dam/CoE/CS/CS%202021%20Flowchart.pdf" target="_blank" className='text-blue-500 w-1/2'>Check Degreesheet</a>

                        </div>
                        <div className='flex flex-row items-center space-x-4 px-2'>
                            <div className='flex flex-col w-1/2'>
                                <p className='text-textprimary text-3xl font-semibold'>Minor</p>
                                <p className=' text-textprimary font-thin text-lg py-2 '>Mathematics</p>
                            </div>
                            <a href="https://ou.edu/content/dam/CoE/CS/CS%202021%20Flowchart.pdf" target="_blank" className='text-blue-500 w-1/2'>Check Degreesheet</a>
                            
                        </div>
                    </Card>
                    
                    <Card title='Browse Catalogue' addSemester={true} semesterval="FALL 24">
                        <div className='flex flex-row items-center space-x-4 px-2'>
                            <p className=' text-textprimary font-thin text-lg py-2 '>View Available Courses for Fall 2024</p>
                            <Link to="/classnav"><GoArrowRight className=' float-right text-3xl text-textprimary' /></Link>
                        </div>
                        
                    </Card>


                </div>
                <div className='w-1/2 flex-col space-y-4'>
                    {/*{title, addSemester=false, semesterval='Fall 2024',addlink=false, linkurl='nolink', linktext='linktext', children} */}
                    <Card title='Spring 24 Schedule'  addlink={true} linkurl='/plan' linktext='View Past Schedules'>
                        <img src='/imagesched.png' alt="schedule" className="w-96 h-64 px-1 py-1 text-center" />
                    </Card>

                    <Card title='Degree Progress'>
                        <div className='flex flex-row items-center space-x-4 px-2'>
                            <div className='max-w-32'>
                                <CircularProgressbar
                                value={85}
                                text = {`85%`}
                                strokeWidth={15}
                                styles = {buildStyles({
                                    rotation: 0.25,
                                    textSize: '12px',
                                    pathTransitionDuration: 0.5,
                                    pathColor: `#741E18`,
                                    textColor: '#741E18',
                                    trailColor: '#d6d6d6',
                                    backgroundColor: '#3e98c7',
                                })}
                                />
                            </div>
                            <div className='flex flex-col px-2'>
                                <p className='text-textprimary text-3xl font-semibold'>Expected Graduation</p>
                                <p className=' text-textprimary font-thin text-lg py-2 '>Spring 2024</p>
                                <div className='space-y-1'>
                                    <p className=' text-textprimary font-thin text-lg '><a href='one.ou.edu' target='_blank' className='text-blue-500 w-1/2'>File for Graduation</a></p>
                                    <p className=' text-textprimary font-thin text-lg '><a href='iadvise.ou.edu' target='_blank' className='text-blue-500 w-1/2'>Schedule Advisor Appointment</a></p>
                                </div>
                                
                            </div>
                        </div>
                        
                    </Card>
                    

                </div>
            </div>

        </div>
    );
}
export default Home;