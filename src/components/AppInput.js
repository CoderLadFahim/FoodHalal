import './AppInputStyles.scss';

function AppInput(props) {
	return (
		<div className="app-input">
			<input type="text" name="name" autoComplete="off" required />
			<label htmlFor="name" className="input-label">
				<span className="label-content">{props.children}</span>
			</label>
		</div>
	);
}

export default AppInput;
