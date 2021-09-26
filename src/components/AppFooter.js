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
				<a
					href="https://www.linkedin.com/in/fahim-al-emroz-52b21720b/"
					target="_blank"
				>
					<FontAwesomeIcon className="link" icon={faLinkedin} />
				</a>
				<a href="https://github.com/CoderLadFahim" target="_blank">
					<FontAwesomeIcon className="link" icon={faGithub} />
				</a>
				<a href="https://www.facebook.com/Comet.258456/" target="_blank">
					<FontAwesomeIcon className="link" icon={faFacebook} />
				</a>
			</div>
		</footer>
	);
}

export default AppFooter;
