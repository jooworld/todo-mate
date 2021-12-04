import React from 'react'
import { MdCheckCircle } from "react-icons/md";
import './Date.css';

const Date = () => {
    const date = () => {
        new Date().getFullYear();
    }

    return (
        <div>
            <div className="calender">
                <div className="calender-top">
                    <h5>2021년 12월
                        <span>
                            <MdCheckCircle style={{ marginRight: "5px", maringLeft: "10px", paddingBottom: "0" }} />46
                        </span>
                    </h5>
                </div>

                <div>

                </div>
            </div>
        </div>
    )
}

export default Date;