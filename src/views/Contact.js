import './ContactStyles.scss';

import TweenLite from 'gsap';
import { useEffect } from 'react';

import AppInput from '../components/AppInput';
import PageTitle from '../components/PageTitle';

function Contact(props) {
	useEffect(() => {
		const contactPageTimeline = TweenLite.timeline();

		const elementsToAnimate = Array.from(
			document.querySelectorAll('.contact-form > *')
		);

		elementsToAnimate.pop();

		contactPageTimeline
			.from(elementsToAnimate, {
				delay: 1,
				duration: 1,
				opacity: 0,
				y: -50,
				ease: 'power3.out',
				stagger: 0.1,
			})
			.to(
				'.submit-btn',
				{
					opacity: 1,
					y: 0,
					ease: 'power3.out',
				},
				'-=0.5'
			);
	}, []);

	return (
		<section className="contact-page wrapper">
			<PageTitle>Contact</PageTitle>

			<form className="contact-form" onSubmit={e => e.preventDefault()}>
				<AppInput> Full Name </AppInput>
				<AppInput> Email / Phone </AppInput>
				<AppInput> Subject </AppInput>
				<textarea required placeholder="Tell us your issue"></textarea>
				<button className="submit-btn">Submit</button>
			</form>
		</section>
	);
}

export default Contact;
