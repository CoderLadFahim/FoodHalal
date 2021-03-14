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
			<PageTitle>{'ABOUT US'}</PageTitle>

			<div className="info-paragraphs">
				<div className="info">
					<h1 className="text-title">Lorem Ipsum</h1>
					<p className="text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
						officiis suscipit dignissimos corporis voluptas neque, iusto
						<span className="pink"> repudiandae</span> quaerat quas culpa
						expedita, ipsum sint architecto totam error at adipisci nostrum,{' '}
						<br /> <br /> Amet qui consequuntur debitis, voluptates consectetur
						eius, beatae natus assumenda recusandae vero aut ab est accusantium
						molestiae minus! Odio, molestiae?
					</p>
				</div>
				<div className="info">
					<h1 className="text-title">Duis aute irure</h1>
					<p className="text">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						Dignissimos necessitatibus unde ipsa eius nisi consequuntur delectus
						atque inventore <br /> <br /> ullam nemo, aliquid, ut expedita vitae{' '}
						<span className="orange">asperiores</span>, incidunt nihil cum
						nesciunt sunt. Nam perferendis dolorum repellat deserunt doloribus
						iste fuga laborum.
					</p>
				</div>
				<div className="info">
					<h1 className="text-title">sunt in culpa</h1>
					<p className="text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
						aliquam! Id eveniet voluptatem in, totam accusamus sint, culpa
						expedita provident sapiente nobis maxime voluptas repudiandae
						quibusdam velit <span className="pink">laborum</span> eius nemo
						architecto <br /> <br /> impedit sit commodi, voluptates quisquam?
						Minus tempore ullam exercitationem consequuntur id eveniet <br />{' '}
						<br /> quae illo voluptatum sit ipsa iusto ex molestiae placeat
						nulla officiis aliquid, quos cupiditate quam itaque.
					</p>
				</div>
				<div className="info">
					<h1 className="text-title">Lorem Ipsum</h1>
					<p className="text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
						officiis suscipit corporis voluptas neque, iusto repudiandae quaerat
						quas culpa expedita, ipsum sint architecto totam error at adipisci
						nostrum, <br /> <br /> amet qui?{' '}
						<span className="pink">Consequuntur</span>
						debitis, voluptates consectetur eius, beatae natus assumenda ipsam
						recusandae vero aut ab est accusantium molestiae minus! Odio,
						molestiae?
					</p>
				</div>
				<div className="info">
					<h1 className="text-title">Duis aute irure</h1>
					<p className="text">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						Dignissimos necessitatibus voluptatem unde ipsa eius nisi
						consequuntur atque inventore ullam nemo, aliquid, ut expedita vitae
						asperiores, incidunt nihil <br /> <br /> cum nesciunt sunt. Nam
						perferendis dolorum repellat deserunt{' '}
						<span className="pink">doloribus</span> iste fuga laborum.
					</p>
				</div>
				<div className="info">
					<h1 className="text-title">sunt in culpa</h1>
					<p className="text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
						aliquam! Id eveniet voluptatem in, totam accusamus sint, culpa
						expedita provident <br /> <br /> sapiente nobis maxime voluptas
						repudiandae quibusdam velit <span className="beige">laborum</span>{' '}
						eius nemo architecto impedit sit commodi, voluptates quisquam? Minus
						<br /> <br /> tempore ullam consequuntur id eveniet quae illo
						voluptatum sit ipsa iusto ex <br /> <br /> molestiae placeat nulla
						officiis aliquid, quos cupiditate doloribus quam itaque.
					</p>
				</div>
			</div>
			<div className="circle watermark"></div>
			<div className="square watermark"></div>
			<div className="logo watermark">FH</div>
		</section>
	);
}

export default About;
