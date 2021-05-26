import './ContactStyles.scss';

import TweenLite from 'gsap';
import { useState, useEffect } from 'react';

import AppInput from '../components/AppInput';
import PageTitle from '../components/PageTitle';
import FormButton from '../components/FormButton';
import FormSubmissionView from '../components/FormSubmissionView';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function Contact(props) {
	// relevant states for this component to function
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [userIssue, setUserIssue] = useState('');

	const emailChecker = /^[\w.%+-]+@[\w.-]+\.[\w]{2,6}$/;

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
		const contactPageTimeline = TweenLite.timeline({ delay: 1 });

		const elementsToAnimate = Array.from(
			document.querySelectorAll('.contact-form > *')
		);

		// removing the submit-btn from the flow
		elementsToAnimate.pop();

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
						attrs={{
							type: 'text',
							name: 'contact',
							required: true,
							// adding color red if entered email is not valid
							style: { color: `${!emailChecker.test(email) ? 'red' : ''}` },
						}}
						content={email}
						contentSetter={setEmail}
					>
						{' '}
						Email{' '}
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
						// disabling FormButton if fields aren't filled properly
						btnDisabler={!requiredFieldsFilled || !emailChecker.test(email)}
					>
						{' '}
						Submit{' '}
					</FormButton>
				</form>
			) : (
				<FormSubmissionView clickHandler={resetFields}></FormSubmissionView>
			)}
			<FontAwesomeIcon
				className="watermark"
				icon={faPhone}
				style={{
					top: '26%',
					left: '15%',
					color: '#ff7979',
				}}
			/>
			<FontAwesomeIcon
				className="watermark"
				icon={faPaperPlane}
				style={{
					bottom: '25%',
					right: '15%',
					color: '#ff834d',
				}}
			/>
		</section>
	);
}

export default Contact;
