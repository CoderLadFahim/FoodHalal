import './AppFooterStyles.scss';
import { useLocation } from 'react-router-dom';

function AppFooter() {
	const { pathname: currentRoutePath } = useLocation();

	return (
		<footer className={currentRoutePath === '/' ? 'homeFooter' : ''}>
			<h1>This site is completely fictional</h1>
			<p>
				Made by{' '}
				<a
					className="author-link"
					href="https://github.com/CoderLadFahim"
					target="_blank"
					rel="noreferrer"
				>
					CoderLadFahim
				</a>
			</p>

			<a
				className="source-code-link"
				href="https://github.com/CoderLadFahim/FoodHalal"
				target="_blank"
				rel="noreferrer"
			>
				Application source code
			</a>
		</footer>
	);
}

export default AppFooter;
