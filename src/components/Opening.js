import gsap from 'gsap';
import { useEffect } from 'react';

import './OpeningStyles.scss';

function Opening() {
	const lettersToAnimate = ['o', 'd', 'a', 'l'];
	const logoText = 'FoodHalal'.split('').map((l, i) => (
		<span key={i} className={lettersToAnimate.includes(l) ? 'la' : ''}>
			{l}
		</span>
	));

	const disclaimerText = "We don't exist".split('').map((l, i) => (
		<span key={i} className="la2">
			{l}
		</span>
	));

	useEffect(() => {
		const openingTl = gsap.timeline();

		openingTl
			.from('.app-title', {
				duration: 1,
				opacity: 0,
				yPercent: -100,
			})
			.from('.la', {
				duration: 0.5,
				fontSize: '0.1px',
				stagger: 0.1,
				// ease: 'bounce.out',
			})
			.from('.la2', {
				duration: 0.5,
				opacity: 0,
				top: 50,
				ease: 'power3.out',
				stagger: 0.02,
			})
			.to('.opening', {
				delay: 0.5,
				duration: 0.5,
				yPercent: -100,
				opacity: 0,
				display: 'none',
				pointerEvents: 'none',
			});
	}, []);

	return (
		<section className="opening">
			<h1 className="app-title logo-grad">{logoText}</h1>
			<h2 className="disclaimer">{disclaimerText}</h2>
		</section>
	);
}

export default Opening;
