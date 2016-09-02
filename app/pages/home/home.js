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
		<section class="contact-banner">
			<div class="container">Ph: (303) 451-8890</div>
		</section>
		<section class="home-fold" ng-style="{backgroundImage: 'url(${homeFoldBackground})'}">
			<div class="container">
				<div class="clearfix">
					<drawer></drawer>
					<div class="home-fold__logo">
						${logo}
					</div>
				</div>
				<div class="home-fold__content">
					<div class="home-fold__title">Building Confidence.</div>
					<div class="home-fold__tag">
					In business for over 35 years, Behunin Construction is the contracting partner for discriminating
					clients seeking superior craftsmanship at a competitive price. With deep expertise in both
					commercial and residential construction, we have created a multi-million dollar project portfolio
					throughout the Rocky Mountain West and the surrounding states. Your needs are our needs. Your
					concerns are our concerns. Our primary objective is to see your job through to completion on-
					budget, on-time, with minimal hassle for you, our valued customer.
					</div>
					<div class="home-fold__btn"><a class="btn btn-primary btn-large">Get a Quote</a></div>
					<div class="home-fold__btn"><a class="btn btn-white-line btn-large">Become a Preferred Contractor</a></div>
				</div>
			</div>
		</section>
		
		<section class="home-proof">
			<div class="container">
				<div class="home-proof__title">
					Our Projects
				</div>
				<div class="home-proof__tag pb-lg">
					With a project portfolio totaling hundreds of millions of dollars, Behunin Construction is one of the
					premier construction companies in the Rocky Mountain West. Projects range from functional office
					space to high-end, multi-family complexes to luxury, single-family residences.
				</div>
				<!--<div class="home-proof__content-mobile">-->
			    <!--<ks-swiper-container-->
			          <!--loop="true"-->
                <!--slides-per-view="1"-->
                <!--pagination-is-active="true"-->
					      <!--autoplay="8000">-->
						<!--<ks-swiper-slide class="swiper-slide" ng-repeat="image in ${directiveName}.images">-->
					    <!--<div class="home-proof__content-mobile-image" ng-style="{'backgroundImage': 'url('+image+')'}"></div>-->
					  <!--</ks-swiper-slide>-->
					<!--</ks-swiper-container>-->
				<!--</div>-->
				<!--<div class="home-proof__gallery">-->
					<!--<div class="home-proof__gallery-item-container" ng-repeat="thumbnail in ${directiveName}.thumbnails">-->
						<!--<div class="home-proof__gallery-item" ng-style="{'backgroundImage': 'url('+thumbnail+')'}"></div>-->
					<!--</div>-->
				<!--</div>-->
				<div class="row">
					<div class="col-sm-5">
						<div class="text-center mb-lg" style="margin-top: 20px;">
							<svg width="100" height="100" viewPort="0 0 100 100"><ellipse cx="50" cy="50" rx="50" ry="50" fill="grey"></ellipse></svg>
						</div>
						<h2 class="text-center mb-lg">Commercial</h2>
						<div class="row">
							<div class="col-sm-6 text-center">
								<h4>New Construction</h4>
							</div>
							<div class="col-sm-6 text-center">
								<h4>Tenant Improvement</h4>
							</div>
						</div>
					</div>
					<div class="col-sm-6 col-sm-offset-1">
						<div class="text-center mb-lg" style="margin-top: 60px;" ">
							<svg width="100" height="100" viewPort="0 0 100 100"><ellipse cx="50" cy="50" rx="50" ry="50" fill="grey"></ellipse></svg>
						</div>
						<h2 class="text-center mb-lg">Residential</h2>
						<div class="row">
							<div class="col-sm-4 text-center">
								<h4>Single Family</h4>
							</div>
							<div class="col-sm-4 text-center">
								<h4>Multi Family</h4>
							</div>
							<div class="col-sm-4 text-center">
								<h4>Remodeling</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		
		<section class="home-team">
			
		</section>
	`;

	return {
		controller: ctrl,
		controllerAs: directiveName,
		template: template
	};
}