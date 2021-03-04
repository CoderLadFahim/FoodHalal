import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import './App.scss';

function App() {
	let p = useRef(null);

	useEffect(() => {
		gsap.from(p, { scale: 0 });
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<p ref={el => (p = el)}>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
