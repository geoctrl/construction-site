import stackOfPhotos from '../../pages/home/assets/stack-of-photos.svg';
import closeIcon from '../../pages/home/assets/close.svg'
import Velocity from 'velocity-animate';

export default function() {

	let ctrl = function($element) {
		"ngInject";
		let gallery = $element.children()[1],
				body = document.body;

		let vm = this;

		vm.open = () => {
			body.classList.add('no-scroll');
			Velocity(gallery, {
				opacity: 1,
				translateY: [0, 100]
			}, {
				display: 'block',
				duration: 500,
				ease: 'ease-in'
			});
		};

		vm.close = () => {
			Velocity(gallery, {
				opacity: 0,
				translateY: [100, 0]
			}, {
				display: 'none',
				duration: 500,
				ease: 'ease-in',
				complete: () => {
					body.classList.remove('no-scroll');
				}
			})
		}
	};

	let template = `
		<a class="gallery__open" ng-click="gallery.open()">
			${stackOfPhotos}
			<div>View Project Gallery</div>
		</a>
		<div class="gallery__container">
			<button class="gallery__close btn btn-white-transparent btn-square" ng-click="gallery.close()">${closeIcon}</button>
			<div class="gallery">
				<div class="container-fluid">
					<h2 class="gallery__title">Project Image Gallery</h2>
					<div class="gallery__section">
						<h3>New Construction <span>- Commercial</span></h3>
						<div class="img-group">
							<div>Brook's Tower <span>Denver, CO</span></div>
							<img src="/images/brooks-tower.jpg" alt="">						
						</div>
						<div class="img-group">
							<div>Executive Tower <span>Dever, CO</span></div>
							<img src="/images/executive-tower.jpg" alt="">
						</div>
						<div class="img-group">
							<div>Eisenhower Tunnel <span>Summit, CO</span></div>
							<img src="/images/tunnel-2.jpg" alt="">						
							<img src="/images/tunnel-1.jpg" alt="">						
						</div>
					</div>
					<div class="gallery__section">
						<h3>Multi Family <span>- Residential</span></h3>
						<div class="img-group">
							<div>Jackson Street Condominium Renovation <span>Dallas, TX</span></div>
							<img src="/images/jackson-street-ext-2.jpg" alt="">
							<img src="/images/jackson-street-ext-1.jpg" alt="">
							<img src="/images/jackson-street-living.jpg" alt="">
							<img src="/images/jackson-street-bath.jpg" alt="">						
						</div>
					</div>
					<div class="gallery__section">
						<h3>Remodeling <span>- Residential</span></h3>
						<div class="img-group">
							<div>Kitchens</div>
							<img src="/images/sheldon-kitchen-1.jpg" alt="">
							<img src="/images/sheldon-kitchen-2.jpg" alt="">
						</div>
						<div class="img-group img-group--break">
							<div>Bathrooms</div>
							<img src="/images/sheldon-shower.jpg" alt="">
							<img src="/images/sheldon-shower-tile.jpg" alt="">
							<img src="/images/tyson-bathroom-tub.jpg" alt="">
							<img src="/images/tyson-bathroom-tub-tile.jpg" alt="">
							<img src="/images/tyson-bathroom-vanity.jpg" alt="">
						</div>
					</div>
				</div>
			</div>
		</div>
`;

	return {
		restrict: 'E',
		controller: ctrl,
		controllerAs: 'gallery',
		template: template
	};

};