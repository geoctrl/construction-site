import homeFoldBackground from './assets/home-fold-background.jpg';
import proofBackground from './assets/proof-background.jpg';
import teamCraig from './assets/team-craig.jpg';
import teamDon from './assets/team-don.jpg';
import teamMark from './assets/team-mark.jpg';
import teamRob from './assets/team-rob.jpg';
import teamTami from './assets/team-tami.jpg';
import contactOffice from './assets/contact-office.jpg';
import logo from './assets/logo.svg';
import pcNewConstruction from './assets/projects-c-new-construction.svg';
import pcTenantImprovement from './assets/projects-c-tenant-improvement.svg';
import prMultiFamily from './assets/projects-r-multifamily.svg';
import prRemodeling from './assets/projects-r-remodeling.svg';
import prSingleFamily from './assets/projects-r-single-family.svg';
import { _images, _thumbnails } from './images';

const directiveName = 'home';

export default function() {

	let ctrl = function() {
		"ngInject";

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
					With over 35 years of experience, Behunin Construction is the premier contracting partner for customers seeking to realize their dream of a new or upgraded home, or renovated office space. Our rates are competitive, yet craftsmanship is never sacrificed. The quality with which your project will be completed is second to none. Our extensive experience in residential and commercial construction has resulted in a multi-million-dollar project portfolio that covers the Rocky Mountain West and surrounding states. As our customer, your needs are our needs. Your concerns are our concerns. Our primary objective is to see your job through to completion on-budget, on-time, and with minimal hassle for you. At Behunin Construction, we focus on what matters most - seeing that your dream becomes a reality.
					</div>
					<!--<div class="home-fold__btn"><a class="btn btn-primary btn-large">Get a Quote</a></div>-->
					<!--<div class="home-fold__btn"><a class="btn btn-white-line btn-large">Become a Preferred Contractor</a></div>-->
				</div>
			</div>
		</section>
		
		<section class="home-proof" id="projects" ng-style="{backgroundImage: 'url(${proofBackground})'}">
			<div class="container">
				<div class="home-proof__title">
					Our Projects
				</div>
				<div class="home-proof__tag">
					Behunin Construction's projects extend to an exquisite multi-faceted, multi-million-dollar portfolio. Specializing in functional office spaces, high-end multi-family communities, and luxury single family residences, Behunin Construction is the premier builder of the Rocky Mountain West.
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
					<li>${pcNewConstruction} <span>New Construction</span> <span class="sub">- Commercial</span></li>
					<li>${pcTenantImprovement} <span>Tenant Improvement</span> <span class="sub">- Commercial</span></li>
					<li>${prSingleFamily} <span>Single Family</span> <span class="sub">- Residential</span></li>
					<li>${prMultiFamily} <span>Multi Family</span> <span class="sub">- Residential</span></li>
					<li>${prRemodeling} <span>Remodeling</span> <span class="sub">- Residential</span></li>
				</ul>
				<gallery></gallery>
			</div>
		</section>
		
		<section class="home-team" id="team">
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
							<div class="home-team__person-bio">
Mr. Behunin has spent the past 35 years building a successful career in high-density, multi-family property development and construction. With a property portfolio totaling several hundred million dollars, he has been responsible for acquisitions, all aspects of finance and budgeting, and the successful orchestration of multi-faceted partnerships. Mr. Behunin has a BS Degree in Accounting and Finance from the University of Utah where he also attended law school. He also holds a Class A, Unlimited Construction license. As the founder and CEO of Behunin Construction, Mr. Behunin's ingenuity and optimism will ensure that the vision and corporate goals of Behunin Construction surpass expectations.
							</div>
						</div>
					</li>
					<li>
						<div class="home-team__person-image">
							<img src="${teamTami}" alt="">
						</div>
						<div class="home-team__person-content">
							<div class="home-team__person-name">Tami Behunin <span>President</span></div>
							<div class="home-team__person-bio">
							As an energetic, innovative entrepreneur, Ms. Behunin has enjoyed a 30-year career in multi-family
property management during which she has filled multiple management and strategic
marketing roles. Recognizing a need in the marketplace for a more effective solution for
managing multi-family assets, Ms. Behunin developed an on-line platform that enables the
remote management of apartment properties efficiently and profitably. Property managers
throughout the Rocky Mountain West are now realizing the benefits of this unique product.
Known for her commitment to excellence and the importance of leveraging technology in
business, Ms. Behunin brings an invaluable skill-set to the management of Behunin
Construction.
							</div>
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
							<div class="home-team__person-bio">
							With 25 years in commercial and residential construction, Mark Behunin is qualified to oversee complex projects with skill and precision. He has learned the construction field "from the ground up", starting out as a laborer and working his way up to Managing Partner of both Behunin Brick and Block and GRM Real Estate, LLC.  Mark has managed construction operations of numerous single family, multi-family and commercial projects throughout Colorado and Texas. He is a Master Tradesman in Tile, Carpentry, Concrete and Jobsite Management.
							</div>
						</div>
					</li>
					<li>
						<div class="home-team__person-image">
								<img src="${teamDon}" alt="">
						</div>
						<div class="home-team__person-content">
							<div class="home-team__person-name">Craig Smith <span>VP, Sales & Marketing</span></div>
							<div class="home-team__person-bio">Craig has enjoyed a successful 30-year career in sales, sales management, and partner
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
		<section class="home-contact" id="contact">
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