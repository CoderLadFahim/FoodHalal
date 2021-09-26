import './AppFooterStyles.scss';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
function AppFooter() {
	const { pathname: currentRoutePath } = useLocation();

	return (
		<footer className={currentRoutePath === '/' ? 'homeFooter' : ''}>
			<a
				href="https://github.com/CoderLadFahim/FoodHalal"
				target="_blank"
				className="src-code"
			>
				{' </> '}
			</a>
			<h3>Application created by</h3>
			<h1>CoderLadFahim</h1>
			<div className="links">
				<FontAwesomeIcon className="link" icon={faGithub} />
				<FontAwesomeIcon className="link" icon={faFacebook} />
				<FontAwesomeIcon className="link" icon={faLinkedin} />
			</div>
		</footer>
	);
}

export default AppFooter;
