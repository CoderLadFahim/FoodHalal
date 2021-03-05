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

	const disclaimerText = 'Fictional Site'.split('').map((l, i) => (
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
				ease: 'bounce.out',
			})
			.from('.la2', {
				duration: 0.5,
				top: 200,
				opacity: 0,
				fontSize: '1rem',
				ease: 'power3.out',
				stagger: 0.02,
			})
			.to('.overlay', {
				duration: 0.5,
				xPercent: -100,
				delay: 1,
			})
			.to('.opening', {
				duration: 0.5,
				xPercent: -100,
				pointerEvents: 'none',
			});
	}, []);

	return (
		<section className="opening">
			<h1 className="app-title logo-grad">{logoText}</h1>
			<h2 className="disclaimer">{disclaimerText}</h2>
			<div className="overlay"></div>
		</section>
	);
}

export default Opening;
