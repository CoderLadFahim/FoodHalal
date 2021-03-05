import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.scss';

import Home from './views/Home';
import Menu from './views/Menu';
import About from './views/About';
import Contact from './views/Contact';
import TableBook from './views/TableBook';

import Opening from './components/Opening';

function App() {
	return (
		<Router>
			<Opening />
			<section className="App">
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/menu">Menu</Link>
						</li>
						<li>
							<Link to="/contact">Contact</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
					</ul>
				</nav>

				<Link to="/book">
					<button>Book a Table</button>
				</Link>

				{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/menu">
						<Menu />
					</Route>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>
					<Route path="/book">
						<TableBook />
					</Route>
				</Switch>
			</section>
		</Router>
	);
}

export default App;
