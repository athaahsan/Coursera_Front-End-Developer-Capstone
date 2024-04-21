import React, { useState } from 'react';
import BookingForm from './BookingForm';

function ParentComponent() {
    // Manage state of available times
    const [availableTimes, setAvailableTimes] = useState([
        '07:00 - 10:00',
        '11:00 - 14:00',
        '17:00 - 21:00'
    ]);

    return (
        <div>
            <BookingForm availableTimes={availableTimes} />
        </div>
    );
}

export default ParentComponent;
