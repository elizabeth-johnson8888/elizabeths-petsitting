import { Calendar } from "primereact/calendar";

function DropInDetails ({ data, setData, unavailableDates, dateLabel, timeLabel, label }) {
    const sixDaysFromNow = new Date();
    sixDaysFromNow.setDate(sixDaysFromNow.getDate() + 6);

    const threeMonthsFromToday = new Date();
    threeMonthsFromToday.setMonth(threeMonthsFromToday.getMonth() + 3); 

    function isDateDisabled(date, disabledDates) {
        return disabledDates.some(
            (disabled) => disabled.toDateString() === date.toDateString()
        );
    }

    function isRangeValid(start, end, disabledDates) {
        const current = new Date(start);
        while (current <= end) {
            if (isDateDisabled(current, disabledDates)) return false;
            current.setDate(current.getDate() + 1);
        }
        return true;
    }

    const handleCountChange = (e) => {
    const visits = parseInt(e.target.value) || 0;
    const newTimes = Array(visits).fill('');
        setData({
        ...data,
        visitsPerDay: visits,
        times: newTimes
        });
    };

    // Handle individual time change
    const handleTimeChange = (index, value) => {
        const updatedTimes = [...data.times];
        updatedTimes[index] = value;
        setData({
        ...data,
        times: updatedTimes
        });
    };

    return (
        <div>
            <h4>{label}</h4>
            <div>
                <label>{dateLabel}</label>
                <Calendar 
                value={data.dates} 
                onChange={(e) => {
                    const range = e.value;
                    if (Array.isArray(range) && range.length === 2) {
                        const [start, end] = range;
                        if (!isRangeValid(start, end, unavailableDates)) {
                            alert("Your selected range includes unavailable dates.");
                            return; // Prevent updating form
                        }
                    }
                    setData({
                        ...data,
                        dates: range
                    });
                }} 
                selectionMode="range" 
                readOnlyInput
                minDate={sixDaysFromNow}
                maxDate={threeMonthsFromToday}
                disabledDates={unavailableDates}
                />
            </div>

            {/* Visits per day count */}
            <div>
                <label>{"How many times per day?"}</label>
                <input
                    type="number"
                    min="1"
                    value={data.visitsPerDay || ''}
                    onChange={handleCountChange}
                />
            </div>

            {/* Time inputs */}
            {Array.isArray(data.times) &&
                data.times.map((time, index) => (
                <div key={index}>
                    <label>Approximate Time #{index + 1}</label>
                    <input
                        type="time"
                        value={time}
                        onChange={(e) => handleTimeChange(index, e.target.value)}
                    />
                </div>
            ))}
        </div>
    );
}

export default DropInDetails;