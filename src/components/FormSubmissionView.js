export default function FormSubmissonView({ clickHandler }) {
	return (
		<div className="confirmation-msg content-container">
			<h3>This site is fictional. Nothing was sent.</h3>
			<button className="btn" onClick={clickHandler}>
				Okay
			</button>
		</div>
	);
}
