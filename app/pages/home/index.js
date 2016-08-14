import home from './home';
import config from './config';

export default function(app) {
	app.config(config);
	app.directive('home', home);
};