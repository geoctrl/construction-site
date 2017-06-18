import contactOffice from '../assets/contact-office.jpg';

export function ContactComponent(app) {
  app.component('contactComponent', {
    template:
`<section class="home-contact" id="contact">
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
</section>`
  });
}