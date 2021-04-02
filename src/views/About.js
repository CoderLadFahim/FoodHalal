import { useEffect } from 'react';
import TweenLite from 'gsap';
import './AboutStyles.scss';

import PageTitle from '../components/PageTitle';

function About(props) {
	useEffect(() => {
		// about page timeline
		// const aboutPageTL = TweenLite.timeline();
	}, []);

	return (
		<section className="about-page">
			<div className="page-hero">
				<PageTitle>{'ABOUT US'}</PageTitle>
			</div>

			<div className="page-content wrapper">
				<div className="info-cards">
					<div className="info-card">
						<h2>Lorem ipsum</h2>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
					</div>
					<div className="info-card">
						<h2>Dolor Sit</h2>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
					</div>
					<div className="info-card">
						<h2>Amet Consectetur</h2>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
					</div>
				</div>

				<div className="detailed-infos">
					<div className="info">
						<h1>Lorem ipsum</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing{' '}
							<strong>
								{' '}
								<em> elit </em>{' '}
							</strong>{' '}
							. Inventore delectus corrupti nulla, fugiat libero qui sapiente!{' '}
							<br /> <br /> Impedit quos laudantium culpa nisi consequuntur
							reprehenderit modi optio mollitia sint{' '}
							<strong>
								{' '}
								<em> facere </em>{' '}
							</strong>{' '}
							quidem nihil rerum, eveniet harum exercitationem officiis natus
							neque in dicta?
							<br /> <br />
							Tenetur voluptate quo accusamus nesciunt hic quidem maiores magnam
							magni velit.
						</p>
					</div>
					<div className="info">
						<h1>Dolor Sit</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
							delectus corrupti nulla, fugiat libero qui sapiente! Impedit quos
							laudantium culpa nisi{' '}
							<strong>
								{' '}
								<em> consequuntur </em>{' '}
							</strong>{' '}
							reprehenderit <br /> <br /> modi optio mollitia sint facere quidem
							nihil rerum, eveniet harum exercitationem officiis natus neque in
							dicta? Tenetur voluptate quo <br /> <br />
							<strong>
								{' '}
								<em> Accusamus </em>{' '}
							</strong>{' '}
							nesciunt hic quidem maiores magnam magni velit.
						</p>
					</div>
					<div className="info">
						<h1>Consectetur Amet</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur <br /> <br /> adipisicing
							elit.
							<strong>
								{' '}
								<em> Inventore </em>{' '}
							</strong>{' '}
							delectus corrupti nulla, fugiat libero qui sapiente! Impedit quos
							laudantium culpa nisi consequuntur <br /> <br /> reprehenderit
							modi optio mollitia sint facere quidem nihil rerum, eveniet harum
							<strong>
								{' '}
								<em> exercitationem </em>{' '}
							</strong>{' '}
							officiis natus neque in dicta? Tenetur voluptate quo accusamus
							nesciunt hic quidem maiores magnam magni velit.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
