import { useEffect } from 'react';
import TweenLite from 'gsap';
import './AboutStyles.scss';

import PageTitle from '../components/PageTitle';

function About(props) {
	useEffect(() => {
		// about page timeline
		const aboutPageTL = TweenLite.timeline({ delay: 0.5 });

		aboutPageTL.from('.info', {
			delay: 1,
			duration: 1,
			opacity: 0,
			y: 50,
			stagger: 0.5,
		});
	}, []);

	return (
		<section className="about-page wrapper">
			<PageTitle>{'About Us'}</PageTitle>

			<div className="info-paragraphs">
				<div className="info">
					<h1 className="text-title">Lorem Ipsum</h1>
					<p className="text">
						{/* Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim
						veniam, quis nostrud */}
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
						officiis suscipit dignissimos corporis voluptas neque, iusto
						repudiandae quaerat quas culpa expedita, ipsum sint architecto totam
						error at adipisci nostrum, amet qui? Consequuntur debitis,
						voluptates consectetur eius, beatae natus assumenda ipsam recusandae
						vero aut ab est accusantium molestiae minus! Odio, molestiae?
					</p>
				</div>
				<div className="info">
					<h1 className="text-title">Duis aute irure</h1>
					<p className="text">
						{/* Dolor in reprehenderit in voluptate velit esse cillum dolore eu
						fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident. */}
						Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						Dignissimos necessitatibus voluptatem unde ipsa eius nisi
						consequuntur delectus atque inventore ullam nemo, aliquid, ut
						expedita vitae asperiores, incidunt nihil cum nesciunt sunt. Nam
						perferendis dolorum repellat deserunt doloribus iste fuga laborum.
					</p>
				</div>
				<div className="info">
					<h1 className="text-title">sunt in culpa</h1>
					<p className="text">
						{/* Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
						quae ab illo inventore veritatis et quasi architecto beatae vitae
						dicta sunt explicabo. */}
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
						aliquam! Id eveniet voluptatem in, totam accusamus sint, culpa
						expedita provident sapiente nobis maxime voluptas repudiandae
						quibusdam velit laborum eius nemo architecto impedit sit commodi,
						voluptates quisquam? Minus tempore ullam exercitationem consequuntur
						id eveniet quae illo voluptatum sit ipsa iusto ex molestiae placeat
						nulla officiis aliquid, quos cupiditate doloribus quam itaque.
					</p>
				</div>
				<div className="info">
					<h1 className="text-title">Lorem Ipsum</h1>
					<p className="text">
						{/* Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim
						veniam, quis nostrud */}
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
						officiis suscipit dignissimos corporis voluptas neque, iusto
						repudiandae quaerat quas culpa expedita, ipsum sint architecto totam
						error at adipisci nostrum, amet qui? Consequuntur debitis,
						voluptates consectetur eius, beatae natus assumenda ipsam recusandae
						vero aut ab est accusantium molestiae minus! Odio, molestiae?
					</p>
				</div>
				<div className="info">
					<h1 className="text-title">Duis aute irure</h1>
					<p className="text">
						{/* Dolor in reprehenderit in voluptate velit esse cillum dolore eu
						fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident. */}
						Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						Dignissimos necessitatibus voluptatem unde ipsa eius nisi
						consequuntur delectus atque inventore ullam nemo, aliquid, ut
						expedita vitae asperiores, incidunt nihil cum nesciunt sunt. Nam
						perferendis dolorum repellat deserunt doloribus iste fuga laborum.
					</p>
				</div>
				<div className="info">
					<h1 className="text-title">sunt in culpa</h1>
					<p className="text">
						{/* Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
						quae ab illo inventore veritatis et quasi architecto beatae vitae
						dicta sunt explicabo. */}
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
						aliquam! Id eveniet voluptatem in, totam accusamus sint, culpa
						expedita provident sapiente nobis maxime voluptas repudiandae
						quibusdam velit laborum eius nemo architecto impedit sit commodi,
						voluptates quisquam? Minus tempore ullam exercitationem consequuntur
						id eveniet quae illo voluptatum sit ipsa iusto ex molestiae placeat
						nulla officiis aliquid, quos cupiditate doloribus quam itaque.
					</p>
				</div>
			</div>
			<div className="circle watermark"></div>
		</section>
	);
}

export default About;
