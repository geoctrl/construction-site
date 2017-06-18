import teamCraig from '../assets/team-craig.jpg';
import teamDon from '../assets/team-don.jpg';
import teamMark from '../assets/team-mark.jpg';
import teamRob from '../assets/team-rob.jpg';

export function TeamComponent(app) {
  app.component('teamComponent', {
    template:
`<section class="home-team" id="team">
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
							<img src="${teamRob}" alt="">
						</div>
						<div class="home-team__person-content">
							<div class="home-team__person-name">Rob Behunin <span>VP, Construction Operations</span></div>
							<div class="home-team__person-bio">Rob has been in the construction industry for over twenty years, functioning in a variety of roles in both commercial and residential construction. As the VP of Construction Operations for Behunin Construction, he oversees supplier relationships and coordinates materials selection and purchasing. Known for his high-touch customer service, Rob's focus is on accommodating the customers' tastes while at the same time, being keenly aware of budget constraints. With an extensive knowledge of vendors nationwide and familiarity with a variety of pricing models, Rob provides an invaluable service to our discriminating clientele.</div>
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
		</section>`
  });
}