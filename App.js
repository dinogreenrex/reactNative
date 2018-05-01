import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Font } from "expo";

import store from './app/store'; //Import the store
import Main from './app/index'
import {AsyncStorage} from "react-native"; //Import the app/index.js file

export default class App extends Component {
	async componentDidMount() {
		await Font.loadAsync({
			Arial: require("./fonts/arial.ttf"),
			Roboto_medium: require("./fonts/Roboto-Medium.ttf"),
		});
	}

	render() {
		return (
			<Provider store={store}>
				<Main />
			</Provider>
		);
	}
}