import React from 'react';
import './Feed.css';
import { MdAddCircleOutline, MdInventory } from 'react-icons/md';

const Feed = () => {
    return (
        <div>
            <h1 className="Feed">Feed</h1>

            <div className="btn">
                <div>
                    <MdInventory size="20" color="white" />
                    <h3 className="category">일반</h3>
                    <MdAddCircleOutline size="17" color="white" />
                </div>
            </div>
        </div>
    );
}

export default Feed;