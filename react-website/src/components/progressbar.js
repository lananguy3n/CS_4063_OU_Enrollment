import React from 'react'

const progressbar = ({progress}) => {
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    return (
        <div className='flex justify-center items-center'>
            <svg className='transform-rotate-90' width="100" height="100">
                <circle
                    stroke = "gray"
                    strokeWidth = "10"
                    fill = "transparent"
                    r = {radius}
                    cx = {50}
                    cy = {50}
                    strokeDasharray = {circumference}
                    strokeDashoffset = {circumference}
                />
                <circle
                    stroke = "#741E18"
                    strokeWidth = "10"
                    fill = "transparent"
                    r = {radius}
                    cx = {50}
                    cy = {50}
                    strokeDasharray = {circumference}
                    strokeDashoffset = {offset}
                    strokeLinecap="round"
                />
            </svg>
            <div className='absolute text-xl font-semibold' style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                {progress}%
            </div>
        </div>
      );
};


export default progressbar;