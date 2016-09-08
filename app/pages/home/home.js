import homeFoldBackground from './assets/home-fold-background.jpg';
import proofBackground from './assets/proof-background.jpg';
import teamCraig from './assets/team-craig.jpg';
import teamDon from './assets/team-don.jpg';
import teamMark from './assets/team-mark.jpg';
import teamRob from './assets/team-rob.jpg';
import teamTami from './assets/team-tami.jpg';
import contactOffice from './assets/contact-office.jpg';
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
					<!--<div class="home-fold__btn"><a class="btn btn-primary btn-large">Get a Quote</a></div>-->
					<!--<div class="home-fold__btn"><a class="btn btn-white-line btn-large">Become a Preferred Contractor</a></div>-->
				</div>
			</div>
		</section>
		
		<section class="home-proof" ng-style="{backgroundImage: 'url(${proofBackground})'}">
			<div class="container">
				<div class="home-proof__title">
					Our Projects
				</div>
				<div class="home-proof__tag">
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
				<ul class="home-proof__list">
					<li>Commercial <span>- New Construction</span></li>
					<li>Commercial <span>- Tenant Improvement</span></li>
					<li>Residential <span>- Single Family</span></li>
					<li>Residential <span>- Multi Family</span></li>
					<li>Residential <span>- Remodeling</span></li>
				</ul>
			</div>
		</section>
		
		<section class="home-team">
			<div class="container">
				<div class="home-team__title">
					Our Team
				</div>
				<div class="home-team__tag">
					The team at Behunin Construction will manage your project with unequaled attention to
					administrative detail, quality workmanship, and a commitment to customer satisfaction that is
					second to none.
				</div>
				<ul class="home-team__person">
					<li>
						<div class="home-team__person-image">
							<img src="${teamCraig}" alt="">
						</div>
						<div class="home-team__person-content">
							<div class="home-team__person-name">Don Behunin <span>CEO</span></div>
							<div class="home-team__person-bio">Bio Forthcoming</div>
						</div>
					</li>
					<li>
						<div class="home-team__person-image">
							<img src="${teamTami}" alt="">
						</div>
						<div class="home-team__person-content">
							<div class="home-team__person-name">Tami Behunin <span>President</span></div>
							<div class="home-team__person-bio">Bio Forthcoming</div>
						</div>
					</li>
					<li>
						<div class="home-team__person-image">
							<img src="${teamRob}" alt="">
						</div>
						<div class="home-team__person-content">
							<div class="home-team__person-name">Rob Behunin <span>VP, Construction Operations</span></div>
							<div class="home-team__person-bio">Bio Forthcoming</div>
						</div>
					</li>
					<li>
						<div class="home-team__person-image">
							<img src="${teamMark}" alt="">
						</div>
						<div class="home-team__person-content">
							<div class="home-team__person-name">Mark Behunin <span>VP, Construction Services</span></div>
							<div class="home-team__person-bio">Bio Forthcoming</div>
						</div>
					</li>
					<li>
						<div class="home-team__person-image">
								<img src="${teamDon}" alt="">
						</div>
						<div class="home-team__person-content">
							<div class="home-team__person-name">Craig Smith <span>VP, Sales & Marketing</span></div>
							<div class="home-team__person-bio">Craig has enjoyed a successful, 30-year career in sales, sales management, and partner
support for Global 1000 companies. He has extensive experience in construction;
enterprise software; call center management and operations; and Internet of Things
(IoT) technology. As an IoT Partner Account Manager with T-Mobile, Craig signed and
launched multiple strategic partnerships in several vertical markets. He also worked as
the channel liaison with T-Mobile Marketing teams, coordinating all marketing initiatives
for the IoT group. He has also played a key role in the launch and subsequent expansion
of both residential and commercial construction companies, focusing on sales and
marketing in multiple markets.</div>
						</div>
					</li>
				</ul>
			</div>
		</section>
		<section class="home-contact">
			<div class="container">
				<div class="row">
					<div class="col-sm-6">
						<div class="home-contact__title">
							Contact Us
						</div>
						<div class="home-contact__address">
							1901 Leroy Dr., Suite B<br>
							Northglenn, CO 80233
						</div>
						<div class="home-contact__phone">
							Ph. (303) 451-8890
						</div>
						<div class="home-contact__phone">
							Fax (303) 252-9431
						</div>
						<a href="mailto:info@behuninconstruction.com"
							 class="home-contact__email"
							 target="_blank">
							info@behuninconstruction.com
						</a>
					</div>
					<div class="col-sm-6">
						<div class="home-contact__office">
							<img src="${contactOffice}" />
						</div>
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