import './PageTitleStyles.scss';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TweenLite from 'gsap';

function PageTitle(props) {
	const { pathname: currentRoutePath } = useLocation();

	useEffect(() => {
		const pageTitleTL = TweenLite.timeline();

		// the about page has a different PageTitle animation
		if (currentRoutePath !== '/about') {
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
		} else {
			pageTitleTL
				.from(
					'.page-title',
					{
						duration: 0.5,
						y: 50,
						opacity: 0,
					},
					'+=1'
				)
				.from('.page-title .bottom-border', {
					duration: 0.3,
					width: 0,
				});
		}
	}, []);

	return (
		<h1 className="page-title">
			<span className="title-text">{props.children}</span>
			<span className="bottom-border"></span>
		</h1>
	);
}

export default PageTitle;
