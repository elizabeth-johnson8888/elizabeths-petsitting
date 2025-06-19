// import SingleTimeInput from "./TimeInput.jsx";

import { Calendar } from "primereact/calendar";

function HouseSitDetails ({ data, setData, unavailableDates, dateLabel, label }) {
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
                });}} 
                selectionMode="range" 
                readOnlyInput
                minDate={sixDaysFromNow}
                maxDate={threeMonthsFromToday}
                disabledDates={unavailableDates}
                />
            </div>
            
            <div>
                <label className="regular-text font-bold mr-4">Approximate Start time: </label>
                <input 
                    type="time"
                    value={data.startTime || ''}
                    onChange={(e) => setData({ ...data, startTime: e.target.value })}
                    className="border p-2 mb-2 border-pink-xtra-dark rounded-full border-2 bg-pink-light"
                />
            </div>

            <div>
                <label className="regular-text font-bold mr-4">Approximate End time: </label>
                <input 
                    type="time"
                    value={data.endTime || ''}
                    onChange={(e) => setData({ ...data, endTime: e.target.value })}
                    className="border p-2 mb-2 border-pink-xtra-dark rounded-full border-2 bg-pink-light"
                />
            </div>
        </div>
    );
}

export default HouseSitDetails;