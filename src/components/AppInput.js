import './AppInputStyles.scss';

function AppInput({ type, content, contentSetter, children }) {
	return (
		<div className="app-input">
			<input
				value={content}
				onChange={e => contentSetter(prevContent => e.target.value)}
				type={type || 'text'}
				name="name"
				autoComplete="off"
				required
			/>
			<label htmlFor="name" className="input-label">
				<span className="label-content">{children}</span>
			</label>
		</div>
	);
}

export default AppInput;
