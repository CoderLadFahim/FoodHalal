import './FormButtonStyles.scss';

function FormButton({ className, btnDisabler, children }) {
	return (
		<button className={`btn ${className || ''}  ${btnDisabler && 'disabled'}`}>
			{' '}
			{children}{' '}
		</button>
	);
}

export default FormButton;
