import { useState } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

import TableBookContextProvider from './views/TableBook';

import Home from './views/Home';
import Menu from './views/Menu';
import About from './views/About';
import Contact from './views/Contact';
import TableBook from './views/TableBook';
import AppFooter from './components/AppFooter';

import Opening from './components/Opening';
import AppNav from './components/AppNav';
import HamburgerMenu from './components/HamburgerMenu';

function App() {
	const [navToggleState, setNavToggleState] = useState(false);

	const toggleNav = () => setNavToggleState(prevState => !prevState);

	return (
		<Router>
			<Opening />
			<section className="App">
				<HamburgerMenu navToggler={toggleNav} navToggleState={navToggleState} />
				<AppNav navToggler={toggleNav} navToggleState={navToggleState} />

				{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
				<TableBookContextProvider>
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
				</TableBookContextProvider>
			</section>
			<AppFooter></AppFooter>
		</Router>
	);
}

export default App;
