import './FormButtonStyles.scss';

function FormButton({ className, btnDisabler, children, clickHandler }) {
	return (
		<button
			onClick={clickHandler}
			className={`btn ${className || ''}${btnDisabler && 'disabled'}`}
		>
			{' '}
			{children}{' '}
		</button>
	);
}

export default FormButton;
