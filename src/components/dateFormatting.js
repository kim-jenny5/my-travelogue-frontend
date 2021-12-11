import { isSameMonth, isSameYear, format } from "date-fns";

export default function DateFormatting(startDate, endDate) {
	// const startDate = new Date(trip.startDate);
	// const endDate = new Date(trip.endDate);
	const start = new Date(startDate);
	const end = new Date(endDate);
	if (isSameMonth(start, end) && isSameYear(start, end)) {
		return `${format(start, "MMMM d")} - ${format(end, "d, yyyy")}`;
	} else if (isSameYear(start, end)) {
		return `${format(start, "MMMM d")} - ${format(end, "MMMM d, yyyy")}`;
	} else {
		return `${format(start, "MMMM d, yyyy")} - ${format(end, "MMMM d, yyyy")}`;
	}
}
