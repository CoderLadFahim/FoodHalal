import './ContactStyles.scss';

import TweenLite from 'gsap';
import { useState, useEffect } from 'react';

import AppInput from '../components/AppInput';
import PageTitle from '../components/PageTitle';
import FormButton from '../components/FormButton';
import FormSubmissionView from '../components/FormSubmissionView';

function Contact(props) {
	// relevant states for this component to function
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [userIssue, setUserIssue] = useState('');

	// this state determines what to show on the contact page
	const [submissionState, setSubmissionState] = useState(false);

	const handleFormSubmission = e => {
		e.preventDefault();
		setSubmissionState(prevState => !prevState);
	};

	// this function runs on confirmation-msg OK btn click after user submits a form
	const resetFields = () => {
		setName('');
		setEmail('');
		setSubject('');
		setUserIssue('');

		setSubmissionState(prevState => !prevState);
	};

	// disabling the submit-btn (by adding a 'disbled' className) if required information is falsy
	const requiredFieldsFilled = [name, email, subject, userIssue].every(
		field => field
	);

	useEffect(() => {
		const contactPageTimeline = TweenLite.timeline();

		const elementsToAnimate = Array.from(
			document.querySelectorAll('.contact-form > *')
		);

		// removing the submit-btn from the flow
		elementsToAnimate.pop();

		// running title animation only when page first loads not on submissionState change
		if (!submissionState) {
			contactPageTimeline
				.from('.page-title', {
					duration: 0.5,
					yPercent: 100,
					opacity: 0,
				})
				.from('.bottom-border', {
					duration: 0.5,
					width: 0,
				});
		}

		contactPageTimeline
			.from(elementsToAnimate, {
				duration: 1,
				opacity: 0,
				y: -50,
				ease: 'power3.out',
				stagger: 0.1,
			})
			.to(
				'.btn.submit-btn',
				{
					opacity: 1,
					y: 0,
					ease: 'power3.out',
				},
				'-=0.5'
			);
	}, [submissionState]);

	return (
		<section className="contact-page wrapper">
			<PageTitle>Contact</PageTitle>

			{!submissionState ? (
				<form
					className="contact-form content-container"
					onSubmit={handleFormSubmission}
				>
					<AppInput
						attrs={{ type: 'text', name: 'fullName', required: true }}
						content={name}
						contentSetter={setName}
					>
						{' '}
						Full Name{' '}
					</AppInput>
					<AppInput
						attrs={{ type: 'text', name: 'contact', required: true }}
						content={email}
						contentSetter={setEmail}
					>
						{' '}
						Email / Phone{' '}
					</AppInput>
					<AppInput
						attrs={{ type: 'text', name: 'subject', required: true }}
						content={subject}
						contentSetter={setSubject}
					>
						{' '}
						Subject{' '}
					</AppInput>
					<textarea
						value={userIssue}
						onChange={e => setUserIssue(prevIssue => e.target.value)}
						required
						placeholder="Tell us your issue"
					></textarea>
					<FormButton
						className="submit-btn"
						btnDisabler={!requiredFieldsFilled}
					>
						{' '}
						Submit{' '}
					</FormButton>
				</form>
			) : (
				<FormSubmissionView clickHandler={resetFields}></FormSubmissionView>
			)}
		</section>
	);
}

export default Contact;
