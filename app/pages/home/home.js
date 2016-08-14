import homeFoldBackground from './assets/home-fold-background.jpg';
import logo from './assets/logo.svg';
import { _images, _thumbnails } from './images';

const directiveName = 'home';

export default function() {

	let ctrl = function() {
		let vm = this;
		vm.images = _images;
		vm.thumbnails = _thumbnails;
	};

	let template = `
		<section class="home-fold" ng-style="{backgroundImage: 'url(${homeFoldBackground})'}">
			<div class="container">
				<div class="home-fold__logo">
					${logo}
				</div>
				<div class="home-fold__content">
					<div class="home-fold__title">We Make Awesome Stuff.</div>
					<div class="home-fold__tag">
						Some Tag Line Here that explains quickly what this company does (what is your value-add).
					</div>
					<a class="btn btn-primary btn-large">Get a Quote</a>
					<a class="btn btn-white-line btn-large">Become a Preferred Contractor</a>
				</div>
			</div>
		</section>
		<section class="home-proof">
			<div class="container">
				<div class="home-proof__title">
					The Proof
				</div>
				<div class="home-proof__tag">
					Some sort of paragraph here about how your work speaks for itself or maybe how the work is gimmick-free.
				</div>
				<div class="home-proof__content-mobile">
			    <ks-swiper-container
			          loop="true"
                slides-per-view="1"
                pagination-is-active="true"
					      autoplay="8000">
						<ks-swiper-slide class="swiper-slide" ng-repeat="image in ${directiveName}.images">
					    <div class="home-proof__content-mobile-image" ng-style="{'backgroundImage': 'url('+image+')'}"></div>
					  </ks-swiper-slide>
					</ks-swiper-container>
				</div>
				<div class="home-proof__gallery">
					<div class="home-proof__gallery-item-container" ng-repeat="thumbnail in ${directiveName}.thumbnails">
						<div class="home-proof__gallery-item" ng-style="{'backgroundImage': 'url('+thumbnail+')'}"></div>
					</div>
				</div>
			</div>
		</section>
	`;

	return {
		controller: ctrl,
		controllerAs: directiveName,
		template: template
	};
}