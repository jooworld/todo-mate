import React from 'react';
import './Feed.css';
import { MdAddCircleOutline } from 'react-icons/md';

const Feed = () => {
    return (
        <div>
            <h1 className="Feed">Feed</h1>

            <button>
                <span style={{ backgroundColor: "red" }}>일반</span>
                <MdAddCircleOutline size="20" style={{ backgroundColor: "green" }} />
            </button>
        </div>
    );
}

export default Feed;