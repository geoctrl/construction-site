import drawer from './drawer';
import gallery from './gallery';

export default function(app) {
	drawer(app);
	app.directive('gallery', gallery);
};
