import { useEffect } from 'react';
import TweenLite from 'gsap';
import './PageTitleStyles.scss';

function PageTitle(props) {
	const splitText = (str, className) =>
		str.split('').map((l, i) => (
			<span key={i} className={className}>
				{l}
			</span>
		));

	useEffect(() => {
		// page title timeline
		const pageTitleTl = TweenLite.timeline();

		pageTitleTl
			.from('.bottom-border', {
				duration: 0.5,
				left: '-100%',
			})
			.from('.tTL', {
				duration: 0.5,
				fontSize: '0px',
				opacity: 0,
				stagger: 0.05,
			});
	}, []);

	return (
		<h1 className="page-title">
			<span className="title-text">{splitText(props.children, 'tTL')}</span>
			<span className="bottom-border"></span>
		</h1>
	);
}

export default PageTitle;
