import { drawer, actualDrawer, drawerBackdrop } from './drawer';

export default function(app) {
	app.directive('drawer', drawer);
	app.directive('actualDrawer', actualDrawer);
	app.directive('drawerBackdrop', drawerBackdrop);
}