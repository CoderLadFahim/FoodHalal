import { useState, createContext } from 'react';

export const TableBookContext = createContext();

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

	const requiredFieldsFilled = [...[tableDetails], ...[dinerDetails]].every(
		field => field
	);

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
				requiredFieldsFilled,
			}}
		>
			{props.children}
		</TableBookContext.Provider>
	);
}

export default TableBookContextProvider;
