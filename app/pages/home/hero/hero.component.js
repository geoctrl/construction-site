import homeFoldBackground from '../assets/home-fold-background.jpg';
import logo from '../assets/logo.svg';

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
  </div>
</section>`
  });
}