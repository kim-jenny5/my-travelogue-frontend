import { isSameMonth, isSameYear, format } from "date-fns";

export default function DateFormatting(trip) {
	const start_date = new Date(trip.start_date);
	const end_date = new Date(trip.end_date);
	if (isSameMonth(start_date, end_date) && isSameYear(start_date, end_date)) {
		return `${format(start_date, "MMMM d")} - ${format(end_date, "d, yyyy")}`;
	} else if (isSameYear(start_date, end_date)) {
		return `${format(start_date, "MMMM d")} - ${format(
			end_date,
			"MMMM d, yyyy"
		)}`;
	} else {
		return `${format(start_date, "MMMM d, yyyy")} - ${format(
			end_date,
			"MMMM d, yyyy"
		)}`;
	}
}
