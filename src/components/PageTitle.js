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
			.from('.page-title', {
				duration: 0.5,
				y: 30,
				opacity: 0,
			})
			.from('.bottom-border', {
				duration: 0.3,
				left: '-100%',
			});
	}, []);

	return (
		<h1 className="page-title">
			<span className="title-text">{props.children}</span>
			<span className="bottom-border"></span>
		</h1>
	);
}

export default PageTitle;
