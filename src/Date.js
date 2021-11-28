import React from 'react'
import './Date.css';

const Date = () => {
    const date = () => {
        new Date().getFullYear();
    }

    return (
        <div>
            <div className="calender">
                <div className="calender-top">
                    <h5 className="calender-top">{date}</h5>
                </div>
            </div>
        </div>
    )
}

export default Date;