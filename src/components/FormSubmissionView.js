import './FormSubmissionViewStyles.scss';

function FormSubmissionView({ clickHandler }) {
	return (
		<div className="submission-view">
			<h3>
				This site is fictional. <br /> Nothing was sent
			</h3>
			<button className="btn" onClick={clickHandler}>
				Okay
			</button>
		</div>
	);
}

export default FormSubmissionView;
