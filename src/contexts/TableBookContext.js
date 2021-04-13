import { useState, createContext } from 'react';

export const TableBookContext = createContext();

// TableBookContext stores TableDetails, DinerDetails and their respective setters

function TableBookContextProvider(props) {
	const [tableDetails, setTableDetails] = useState({
		dinersCount: 1,
		dineDate: '',
		dineTime: '',
	});

	const [dinerDetails, setDinerDetails] = useState({
		dinerName: '',
		dinerCell: '',
		dinerEmail: '',
	});

	const updateTableDetails = newDetails =>
		setTableDetails(prevState => (prevState = newDetails));

	const updateDinerDetails = (name, cell, email = '') =>
		setDinerDetails({ dinerName: name, dinerCell: cell, dinerEmail: email });

	return (
		<TableBookContext.Provider
			value={{
				tableDetails,
				dinerDetails,
				updateTableDetails,
				updateDinerDetails,
			}}
		>
			{props.children}
		</TableBookContext.Provider>
	);
}

export default TableBookContextProvider;
