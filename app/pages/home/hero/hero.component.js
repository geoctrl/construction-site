import homeFoldBackground from '../assets/home-fold-background.jpg';
import logo from '../assets/logo.svg';
import cert from '../assets/certificate.svg';

export function HeroComponent(app) {
  app.component('heroComponent', {
    template:
`<section class="home-fold" id="home" ng-style="{backgroundImage: 'url(${homeFoldBackground})'}">
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
      <div class="cert">
        <div class="cert-message">
            ${cert}
            <span>
                Behunin Construction is fully licensed and insured.
            </span>
        </div>        
        
        <!--<div class="cert-block-parent">-->
            <!--<div class="cert-block">-->
                <!--<div class="cert-block__name">Arvada</div>-->
                <!--<div class="cert-block__title">General Contractor</div>-->
                <!--<div class="cert-block__number">#AEC1029</div>-->
            <!--</div>-->
            <!--<div class="cert-block">-->
                <!--<div class="cert-block__name">Brighton</div>-->
                <!--<div class="cert-block__title">General Contractor</div>-->
                <!--<div class="cert-block__number">#CO-11946</div>-->
            <!--</div>-->
            <!--<div class="cert-block">-->
                <!--<div class="cert-block__name">Denver</div>-->
                <!--<div class="cert-block__title">General Contractor</div>-->
                <!--<div class="cert-block__number">Class A #17860</div>-->
            <!--</div>-->
            <!--<div class="cert-block">-->
                <!--<div class="cert-block__name">Douglas County</div>-->
                <!--<div class="cert-block__title">General Contractor</div>-->
                <!--<div class="cert-block__number">#A170303</div>-->
            <!--</div>-->
        <!--</div>-->
      </div>
  </div>
</section>`
  });
}