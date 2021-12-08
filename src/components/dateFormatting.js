import { isSameMonth, isSameYear, format } from "date-fns";

export default function DateFormatting(start_date, end_date) {
	// const start_date = new Date(trip.start_date);
	// const end_date = new Date(trip.end_date);
	const start = new Date(start_date);
	const end = new Date(end_date);
	if (isSameMonth(start, end) && isSameYear(start, end)) {
		return `${format(start, "MMMM d")} - ${format(end, "d, yyyy")}`;
	} else if (isSameYear(start, end)) {
		return `${format(start, "MMMM d")} - ${format(end, "MMMM d, yyyy")}`;
	} else {
		return `${format(start, "MMMM d, yyyy")} - ${format(end, "MMMM d, yyyy")}`;
	}
}
