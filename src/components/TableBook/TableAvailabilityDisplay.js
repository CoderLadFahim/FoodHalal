import './TableAvailabilityDisplayStyles.scss';
import { useEffect } from 'react';
import TweenLite from 'gsap';

function TableAvailabilityDisplay({ tableAvailability }) {
	const statusClass = `table-availbility-status ${
		!tableAvailability ? 'unavailable' : 'available'
	}`;

	useEffect(() => {
		const tasTL = TweenLite.timeline();

		tasTL.to('.table-availbility-status', {
			duration: 0.2,
			scale: 1,
			ease: 'power4.out',
		});
	}, [tableAvailability]);

	return (
		<p className={statusClass}>
			{`Table ${
				!tableAvailability
					? 'Unavailable, try changing your details'
					: 'Availabile!'
			}`}
		</p>
	);
}

export default TableAvailabilityDisplay;
