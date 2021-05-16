import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import { useState } from 'react';

import CartContextProvider from './contexts/CartContext';

import Home from './views/Home';
import Menu from './views/Menu';
import About from './views/About';
import Contact from './views/Contact';
import TableBook from './views/TableBook';
import AppFooter from './components/AppFooter';
// import Opening from './components/Opening';
import AppNav from './components/AppNav';
import HamburgerMenu from './components/HamburgerMenu';
import AppCart from './components/Cart/AppCart';

function App() {
	const [navToggleState, setNavToggleState] = useState(false);

	const toggleNav = () => setNavToggleState(prevState => !prevState);

	return (
		<Router>
			{/* <Opening /> */}
			<section className="App">
				<CartContextProvider>
					<HamburgerMenu
						navToggler={toggleNav}
						navToggleState={navToggleState}
					/>
					<AppNav navToggler={toggleNav} navToggleState={navToggleState} />

					<AppCart />

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
				</CartContextProvider>
			</section>
			<AppFooter></AppFooter>
		</Router>
	);
}

export default App;
