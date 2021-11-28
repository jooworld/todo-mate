import React from 'react'
import './Info.css';
import { MdAddCircleOutline } from 'react-icons/md';

const Info = () => {
    return (
        <div>
            <div style={{ margin: "0", padding: "0", backgroundColor: "red" }}>
                <MdAddCircleOutline size="35" color="white" />
                <MdAddCircleOutline size="35" color="white" />
            </div>

            <h1 className="nickname">Ellena</h1>
        </div>
    )
}

export default Info;
