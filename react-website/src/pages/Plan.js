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
    const courses = [
        {
            crn: '44481',
            subject: 'A HI',
            course: '3980',
            section: '001',
            sectionTitle: 'Honors Research (HONORS)',
            primaryInstructor: 'TBA',
            schedule: 'Independent Study',
            courseDates: 'Aug 19 - Dec 13',
            seatsLeft: '1 out of 1',
          },
          {
            crn: '45025',
            subject: 'A HI',
            course: '4960',
            section: '002',
            sectionTitle: 'Directed Readings',
            primaryInstructor: 'Bailey, Robert',
            schedule: 'Independent Study',
            courseDates: 'Aug 19 - Dec 13',
            seatsLeft: '1 out of 1',
          },
          {
            crn: '48302',
            subject: 'A HI',
            course: '4960',
            section: '003',
            sectionTitle: 'Directed Readings',
            primaryInstructor: 'Palmer, Allison',
            schedule: 'Independent Study',
            courseDates: 'Aug 19 - Dec 13',
            seatsLeft: '5 out of 5',
          }
          
    ];

    return (
        <div className='flex flex-col'>
            <div className='flex flex-row p-2 justify-between'>
                <p className='text-4xl font-semibold text-black-400 px-4'>Plan and Register</p>
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
                    <div className='flex flex-row'>
                        <div className='w-1/2 flex-col space-y-4 pl-2'>
                            <div className='bg-white p-4 shadow rounded-lg'>
                            <div className='mb-4'>
                                <label htmlFor="semester" className='block text-gray-700 text-sm font-bold mb-2'>Semester</label>
                                <select id="semester" name="semester" className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'>
                                <option value="fall2024">Fall 2024</option>
                                <option value="summer2024">Summer 2024</option>
                                </select>
                            </div>

                            <div className='mb-4'>
                                <label htmlFor="subject" className='block text-gray-700 text-sm font-bold mb-2'>Subject</label>
                                <select id="subject" name="subject" className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'>
                                <option value="all">All Subjects</option>
                                <option value="cs">Computer Science</option>
                                <option value="fa">Fine Arts</option>
                                </select>            
                            </div>

                            <div className='mb-4'>
                                <label htmlFor="schedule" className='block text-gray-700 text-sm font-bold mb-2'>Schedule</label>
                                <select id="schedule" name="schedule" className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'>
                                <option value="all">All Schedules</option>
                                <option value="discNoCredit">Discussion with No Credit</option>
                                <option value="fieldStudy">Field Study</option>
                                </select>            
                            </div>
                            </div>
                        </div>
                        </div>
                    </Card>
            </div>


                <div className='w-1/2 flex-col space-y-4'>
                    {/*{title, addSemester=false, semesterval='Fall 2024',addlink=false, linkurl='nolink', linktext='linktext', children} */}
                    <Card title='Fall 2024 Schedule'  addlink={true} linkurl='/plan' linktext='View Past Schedules'>
                        <img src='/imagesched.png' alt="schedule" className="w-96 h-64 px-1 py-1 text-center" />
                    </Card>

                </div>
            </div>

            <div title='Search & Filter'>
                <div className='space-y-4 pl-2 rounded-2xl overflow-hidden shadow-lg bg-white p-2 m-2'>
                    <table className='min-w-full leading-normal'>
                        <thead>
                            <tr>
                                <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                                    CRN
                                </th>
                                <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                                    Subject
                                </th>
                                <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                                    Course
                                </th>
                                <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                                    Section
                                </th>
                                <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                                    Section Title
                                </th>
                                <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                                    Primary Instructor
                                </th>
                                <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                                    Schedule
                                </th>
                                <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                                    Course Dates
                                </th>
                                <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                                    Seats Left
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {courses.map((course, index) => (
                                <tr key={index} className='hover:bg-gray-100'>
                                    <td className='px-5 py-2 border-b border-gray-200 bg-white text-sm'>
                                        {course.crn}
                                    </td>
                                    <td className='px-5 py-2 border-b border-gray-200 bg-white text-sm'>
                                        {course.subject}
                                    </td>
                                    <td className='px-5 py-2 border-b border-gray-200 bg-white text-sm'>
                                        {course.course}
                                    </td>
                                    <td className='px-5 py-2 border-b border-gray-200 bg-white text-sm'>
                                        {course.section}
                                    </td>
                                    <td className='px-5 py-2 border-b border-gray-200 bg-white text-sm'>
                                        {course.sectionTitle}
                                    </td>
                                    <td className='px-5 py-2 border-b border-gray-200 bg-white text-sm'>
                                        {course.primaryInstructor}
                                    </td>
                                    <td className='px-5 py-2 border-b border-gray-200 bg-white text-sm'>
                                        {course.schedule}
                                    </td>
                                    <td className='px-5 py-2 border-b border-gray-200 bg-white text-sm'>
                                        {course.courseDates}
                                    </td>
                                    <td className='px-5 py-2 border-b border-gray-200 bg-white text-sm'>
                                        {course.seatsLeft}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
        


  
export default RegistrationStatus;

