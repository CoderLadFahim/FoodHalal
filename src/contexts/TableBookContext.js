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

	const updateTableDetails = newTableDetails =>
		setTableDetails(prevTableDetails => (prevTableDetails = newTableDetails));

	const updateDinerDetails = newDinerDetails =>
		setDinerDetails(prevDinerDetails => (prevDinerDetails = newDinerDetails));

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
