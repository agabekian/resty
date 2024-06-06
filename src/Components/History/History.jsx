import React, { useState } from 'react';

const History = (props) => {
    // Ensure props.history is an array before using it
    const items = Array.isArray(props.history) ? props.history : [];

    // State to control visibility of history
    const [showHistory, setShowHistory] = useState(false);

    const renderHistory = () => {
        return items.map((item, index) => (
            <p key={index}>{item}</p>
        ));
    };

    return (
        <div>
            <button
                className='historyBtn'
                style={{ fontSize: "16px" }}
                title='History Results'
                onClick={() => setShowHistory(!showHistory)} // Toggle visibility
            >
                HISTORY
            </button>
            {/* Display history if showHistory is true */}
            {showHistory && (
                <div>
                    <h2>History:</h2>
                    {renderHistory()}
                </div>
            )}
        </div>
    );
};

export default History;
