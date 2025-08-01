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
        <div className="flex flex-col items-center text-center">
            {/* <h4>{label}</h4> */}
            <div className="mb-2">
                <label className="regular-text font-bold mr-4">{dateLabel}</label>
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
                required
                // className="border p-2 mb-4 w-full border-pink-xtra-dark rounded-full border-2 bg-pink-light"
                />
            </div>

            {/* Visits per day count */}
            <div className="mb-2">
                <label className="regular-text font-bold mr-4">{"How many times per day?"}</label>
                <input
                    type="number"
                    min="1"
                    max="3"
                    value={data.visitsPerDay || ''}
                    onChange={handleCountChange}
                    className="border p-2 border-pink-xtra-dark rounded-full border-2 bg-pink-light"
                    required
                />
            </div>

            {/* Time inputs */}
            {Array.isArray(data.times) &&
                data.times.map((time, index) => (
                <div key={index} className="mb-2">
                    <label className="regular-text font-bold mr-4">Approximate Time #{index + 1}</label>
                    <input
                        type="time"
                        value={time}
                        onChange={(e) => handleTimeChange(index, e.target.value)}
                        className="border p-2 border-pink-xtra-dark rounded-full border-2 bg-pink-light"
                        required
                    />
                </div>
            ))}
        </div>
    );
}

export default DropInDetails;