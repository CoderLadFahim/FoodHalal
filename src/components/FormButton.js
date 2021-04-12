import './FormButtonStyles.scss';

function FormButton({ disableBtn, children }) {
	return (
		<button className={`btn submit-btn ${disableBtn && 'disabled'}`}>
			{' '}
			{children}{' '}
		</button>
	);
}

export default FormButton;
