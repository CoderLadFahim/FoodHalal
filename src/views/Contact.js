import './ContactStyles.scss';

import TweenLite from 'gsap';
import { useState, useEffect } from 'react';

import AppInput from '../components/AppInput';
import PageTitle from '../components/PageTitle';

function Contact(props) {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [userIssue, setUserIssue] = useState('');

	const requiredFieldsFilled = [name, email, subject, userIssue].every(
		field => field
	);

	const submitBtnClass = `submit-btn ${
		!requiredFieldsFilled ? 'disabled' : ''
	}`;

	useEffect(() => {
		const contactPageTimeline = TweenLite.timeline();

		const elementsToAnimate = Array.from(
			document.querySelectorAll('.contact-form > *')
		);

		elementsToAnimate.pop();

		contactPageTimeline
			.from('.page-title', {
				duration: 0.5,
				yPercent: 100,
				opacity: 0,
			})
			.from('.bottom-border', {
				duration: 0.5,
				width: 0,
			})
			.from(elementsToAnimate, {
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

			<form className="contact-form">
				<AppInput content={name} contentSetter={setName}>
					{' '}
					Full Name{' '}
				</AppInput>
				<AppInput content={email} contentSetter={setEmail}>
					{' '}
					Email / Phone{' '}
				</AppInput>
				<AppInput content={subject} contentSetter={setSubject}>
					{' '}
					Subject{' '}
				</AppInput>
				<textarea
					value={userIssue}
					onChange={e => setUserIssue(prevIssue => e.target.value)}
					required
					placeholder="Tell us your issue"
				></textarea>
				<button className={submitBtnClass}>Submit</button>
			</form>
		</section>
	);
}

export default Contact;
