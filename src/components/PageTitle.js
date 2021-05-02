import './PageTitleStyles.scss';
import { useEffect } from 'react';
import TweenLite from 'gsap';

function PageTitle(props) {
	useEffect(() => {
		const pageTitleTL = TweenLite.timeline();
		pageTitleTL
			.from('.page-title', {
				duration: 0.5,
				yPercent: 100,
				opacity: 0,
			})
			.from('.bottom-border', {
				duration: 0.5,
				width: 0,
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
