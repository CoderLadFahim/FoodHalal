import './PageTitleStyles.scss';

function PageTitle(props) {
	return (
		<h1 className="page-title">
			<span className="title-text">{props.children}</span>
			<span className="bottom-border"></span>
		</h1>
	);
}

export default PageTitle;
