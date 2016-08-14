// require app styles
import './sass/main.scss';

// require vendor dependencies
import angular from 'angular';
import 'angular-local-storage';
import 'angular-ui-router';

import 'swiper';
import 'angular-swiper';

// polyfill the Promise global
import promise from 'es6-promise';
promise.polyfill();

var app = angular.module('contructionSite', [

  // vendor dependencies
  'LocalStorageModule',
  'ui.router',
	'ksSwiper'

]);

// app components
import core from './core';
import components from './components';
import pages from './pages';

core(app);
components(app);
pages(app);