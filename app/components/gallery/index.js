import stackOfPhotos from '../../pages/home/assets/stack-of-photos.svg';

export default function() {

	let ctrl = function($element) {
		let gallery = $element.children()[1];
	};

	let template = `
		<a class="gallery__open">
			${stackOfPhotos}
			<div>View Project Gallery</div>
		</a>
		<div class="gallery">
			<div class="container">
				<h2 class="gallery__title">Project Image Gallery</h2>
				<div class="gallery__section">
					<h3>New Construction <span>- Commercial</span></h3>
					<img src="/images/brooks-tower.jpg" alt="">
					<img src="/images/executive-tower.jpg" alt="">
				</div>
				<div class="gallery__section">
					<h3>Multi Family <span>- Residential</span></h3>
					<img src="/images/jackson-street-ext-2.jpg" alt="">
					<img src="/images/jackson-street-ext-1.jpg" alt="">
					<img src="/images/jackson-street-living.jpg" alt="">
					<img src="/images/jackson-street-bath.jpg" alt="">
				</div>
				<div class="gallery__section">
					<h3>Remodeling <span>- Residential</span></h3>
					<img src="/images/sheldon-kitchen-1.jpg" alt="">
					<img src="/images/sheldon-kitchen-2.jpg" alt="">
					<img src="/images/sheldon-shower.jpg" alt="">
					<img src="/images/sheldon-shower-tile.jpg" alt="">
					<img src="/images/tyson-bathroom-tub.jpg" alt="">
					<img src="/images/tyson-bathroom-tub-tile.jpg" alt="">
					<img src="/images/tyson-bathroom-vanity.jpg" alt="">
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