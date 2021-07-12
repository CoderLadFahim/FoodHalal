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
			<h3>Application created by</h3>
			<h1>CoderLadFahim</h1>
			<div className="links">
				<FontAwesomeIcon icon={faGithub} />
				<FontAwesomeIcon icon={faFacebook} />
				<FontAwesomeIcon icon={faLinkedin} />
			</div>
		</footer>
	);
}

export default AppFooter;
