import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import Result from './pages/Results/index'

import Home from './pages/Home';

const App = ({ store }) => (
	<Provider store={store}>
		<Router>
			<div>
				<Route exact path="/" component={Home} />
				<Route exact path="/results" component={Result} />

			</div>
		</Router>
	</Provider>
);

App.propTypes = {
	store: PropTypes.object.isRequired
};

export default App;
