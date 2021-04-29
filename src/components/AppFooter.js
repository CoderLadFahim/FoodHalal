import './AppFooterStyles.scss';
import { useLocation } from 'react-router-dom';

function AppFooter() {
	const { pathname: currentRoutePath } = useLocation();

	return (
		<footer className={currentRoutePath === '/' ? 'homeFooter' : ''}>
			<h1>This site is completely fictional</h1>
			<p>Made by CoderLadFahim</p>
		</footer>
	);
}

export default AppFooter;
