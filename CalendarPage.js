import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const events = [
  { title: "Meeting", start: new Date(), end: new Date() },
];

 function CalendarPage() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Calendar</h2>
      <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" style={{ height: 500 }} />
    </div>
  );
}
export default CalendarPage;
