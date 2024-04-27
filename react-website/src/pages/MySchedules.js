import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { FaCheckCircle,FaBell} from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

const localizer = momentLocalizer(moment);

// Your events array
const myEventsList = [
  {
    title: 'Monday Wake-Up Hour',
    start: new Date(2024, 3, 22, 8, 0), // Note: Months are 0-indexed in JavaScript Dates
    end: new Date(2024, 3, 22, 9, 0),
    allDay: false,
  },
  {
    title: 'All-Team Kickoff',
    start: new Date(2024, 3, 22, 9, 0),
    end: new Date(2024, 3, 22, 10, 0),
    allDay: false,
  },
  // ... more events
];

const eventStyleGetter = (event, start, end, isSelected) => {
  var style = {
    backgroundColor: '#bf2e24',
    borderRadius: '5px',
    opacity: 0.8,
    color: 'white',
    border: '0px',
    display: 'block'
  };
  return {
    style: style
  };
};

const MySchedules = () => {
  return (
    
    <div className='flex flex-col pl-2'>
            <div className='flex flex-row p-2 pb-4 justify-between'>
                <p className='text-4xl font-semibold text-black-400 '>My Schedules</p>
                <div className='flex flex-row float-end space-x-8'>
                    <HiOutlineQuestionMarkCircle className='text-textprimary text-3xl' />
                    <FaBell className='text-textprimary text-3xl' />
                    <BsFillGrid3X3GapFill className='text-textprimary text-3xl' />
                    <CgProfile className='text-textprimary text-3xl' />
                </div>
            </div>
      
      <div>
        {/* Any additional elements or headings can be added here */}
        <Calendar
          localizer={localizer}
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 675, width: '100%' }}
          eventPropGetter={eventStyleGetter}

        />
      </div>
    </div>
  );
};

export default MySchedules;