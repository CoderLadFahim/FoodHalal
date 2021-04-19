import './AppInputStyles.scss';

function AppInput({ attrs, content, contentSetter, children }) {
	return (
		<div className="app-input">
			<input
				{...attrs}
				value={content}
				onChange={e => contentSetter(prevContent => e.target.value)}
				autoComplete="off"
			/>
			<label htmlFor="name" className="input-label">
				<span className="label-content">{children}</span>
			</label>
		</div>
	);
}

export default AppInput;
