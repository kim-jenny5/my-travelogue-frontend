// import React from "react";
// import TextField from "@mui/material/TextField";
// import DateRangePicker from "@mui/lab/DateRangePicker";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";
// import Box from "@mui/material/Box";

// export default function DatePicker() {
// 	const [selectedDate, setSelectedDate] = React.useState(new Date());

// 	const handleChange = (e) => {
// 		this.setState({ ...this.state, [e.target.name]: e.target.value });
// 	};

// 	return (
// 		<LocalizationProvider dateAdapter={AdapterDateFns}>
// 			<DateRangePicker
// 				startText="Check-in"
// 				endText="Check-out"
// 				value={selectedDate}
// 				onChange={handleChange}
// 				renderInput={(startProps, endProps) => (
// 					<React.Fragment>
// 						<TextField {...startProps} />
// 						<Box sx={{ mx: 2 }}> to </Box>
// 						<TextField {...endProps} />
// 					</React.Fragment>
// 				)}
// 			/>
// 		</LocalizationProvider>
// 	);
// }

import React from "react";
import { DateRangePicker } from "materialui-daterange-picker";

const DatePicker = (props) => {
	const [open, setOpen] = React.useState(true);
	const [dateRange, setDateRange] = React.useState({});

	const toggle = () => setOpen(!open);

	return (
		<DateRangePicker
			open={open}
			toggle={toggle}
			onChange={(range) => setDateRange(range)}
			closeOnClickOutside="false"
		/>
	);
};

export default DatePicker;
