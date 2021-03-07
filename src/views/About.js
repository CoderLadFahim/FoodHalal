import './AboutStyles.scss';

function About(props) {
	return (
		<section className="about-page wrapper">
			<h1 className="page-title">About Us</h1>
			<div className="info-paragraphs">
				<div className="info">
					<h1 className="text-title">Lorem Ipsum</h1>
					<p className="text">
						Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim
						veniam, quis nostrud
					</p>
				</div>
				<div className="info">
					<h1 className="text-title">Duis aute irure</h1>
					<p className="text">
						Dolor in reprehenderit in voluptate velit esse cillum dolore eu
						fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident.
					</p>
				</div>
				<div className="info">
					<h1 className="text-title">sunt in culpa</h1>
					<p className="text">
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
						quae ab illo inventore veritatis et quasi architecto beatae vitae
						dicta sunt explicabo.
					</p>
				</div>
			</div>
		</section>
	);
}

export default About;
