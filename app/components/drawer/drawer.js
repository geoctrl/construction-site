import closeIcon from '../../pages/home/assets/close.svg';
import menuIcon from '../../pages/home/assets/menu.svg';
import Velocity from 'velocity-animate';

export function drawer() {

	let ctrl = function() {

		let vm = this;
		let backdropEl,
				drawerEl;

		this.getBackdropEl = el => {
			backdropEl = el;
		};

		this.getActualDrawerEl = el => {
			drawerEl = el;
		};

		vm.open = () => {
			Velocity(backdropEl, {
				opacity: 1
			}, {
				display: 'block'
			});
			Velocity(drawerEl, {
				translateX: [0, 200]
			}, {

			});
		};

		vm.close = () => {
			Velocity(backdropEl, {
				opacity: 0
			}, {
				display: 'none'
			});
			Velocity(drawerEl, {
				translateX: 200
			}, {

			});
		};

		this.close = vm.close;

	};

	let template = `
		<button class="btn btn-white-transparent btn-square home-fold__menu"
						ng-click="drawer.open()">
			${menuIcon}
		</button>
		<ul class="nav">
			<li ng-click=""><button class="btn btn-white-transparent">Home</button></li>
			<li ng-click=""><button class="btn btn-white-transparent">Our Projects</button></li>
			<li ng-click=""><button class="btn btn-white-transparent">Our Team</button></li>
			<li ng-click=""><button class="btn btn-white-transparent">Contact Us</button></li>
		</ul>
		<drawer-backdrop></drawer-backdrop>
		<actual-drawer></actual-drawer>
	`;

	return {
		restrict: 'E',
		controller: ctrl,
		controllerAs: 'drawer',
		template: template
	}
}

export function actualDrawer() {
	return {
		restrict: 'E',
		replace: true,
		link: function(scope, el, attrs, ctrl) {
			ctrl.getActualDrawerEl(el);
			scope.close = ctrl.close;
		},
		require: '^drawer',
		template: `
			<div class="drawer">
				<button class="btn btn-white-transparent btn-square" ng-click="close()">${closeIcon}</button>
				<ul>
					<li ng-click="close()">Home</li>
					<li ng-click="close()">Our Projects</li>
					<li ng-click="close()">Our Team</li>
					<li ng-click="close()">Contact Us</li>
				</ul>
			</div>
		`
	}
}

export function drawerBackdrop() {
	return {
		restrict: 'E',
		replace: true,
		link: function(scope, el, attrs, ctrl) {
			ctrl.getBackdropEl(el);
			el.on('click', ctrl.close)
		},
		require: '^drawer',
		template: '<div class="drawer__backdrop"></div>'
	}
}