import './HomeStyles.scss';
import { Link } from 'react-router-dom';

function Home(props) {
	return (
		<section className="home-page">
			<h1 className="app-logo">FoodHalal</h1>
			<p className="app-description">
				<span className="line1">Enjoy our top-quality</span>
				<span className="line2">professionally cooked meals</span>
				<span className="line3">that are 100% Halal certified</span>
			</p>
			<div className="app-btns">
				<button className="table-btn">
					BOOK A TABLE
					{/* Arrow here */}
				</button>

				<button className="order-btn">ORDER NOW</button>
			</div>
		</section>
	);
}

export default Home;
