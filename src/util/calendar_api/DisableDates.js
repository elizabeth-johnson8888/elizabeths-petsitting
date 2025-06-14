// gets array of calendar events and makes a list of unavailable dates for the calendar to use
// primereact wants a list of new Date()
export function disableDates( calendarEntries ) {
    console.log(calendarEntries);

    // i want to return the dates if one day has:
    // 1. all day event with the summary "busy"
    // 2. all day event with 1 or more timed events labeled "drop-in"
    // 3. all day event with 1 or more timed events labeled "drop-in" or one timed "busy" event
    // 4. 4 or more timed events labeled "drop-in"
    // 5. one timed busy event and 1 or more timed drop-in

    const grouped = {};

    calendarEntries.forEach(event => {
        const isAllDay = !!event.start.date;
        // const dateKey = new Date(isAllDay ? event.start.date : event.start.dateTime).toDateString();
        let dateKey;
        if (isAllDay) {
            const [year, month, day] = event.start.date.split('-').map(Number);
            dateKey = new Date(year, month - 1, day).toDateString();
        } else {
            dateKey = new Date(event.start.dateTime).toDateString();
        }

        if (!grouped[dateKey]) {
        grouped[dateKey] = {
            allDay: [],
            timed: []
        };
        }

        if (isAllDay) {
            grouped[dateKey].allDay.push(event);
        } else {
            grouped[dateKey].timed.push(event);
        }
    });

    console.log("grouped", grouped);

    const unavailableDates = [];

    for (const [dateKey, { allDay, timed }] of Object.entries(grouped)) {
        const hasAllDayBusy = allDay.some(e => e.summary?.toLowerCase() === 'busy');
        const dropInTimed = timed.filter(e => e.summary?.toLowerCase() === 'drop-in');
        const busyTimed = timed.filter(e => e.summary?.toLowerCase() === 'busy');

        const condition1 = hasAllDayBusy;
        const condition2 = allDay.length > 0 && dropInTimed.length >= 1;
        const condition3 = allDay.length > 0 && (dropInTimed.length >= 1 || busyTimed.length >= 1);
        const condition4 = dropInTimed.length >= 4;
        const condition5 = dropInTimed.length >= 1 && busyTimed.length >= 1;

        if (condition1 || condition2 || condition3 || condition4 || condition5) {
            unavailableDates.push(new Date(dateKey));
        }
    }

    return unavailableDates;
}