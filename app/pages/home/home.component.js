import { _images, _thumbnails } from './images';

export function HomeComponent(app) {
  app.component('homeComponent', {

    controller() {
      let vm = this;
      vm.images = _images;
      vm.thumbnails = _thumbnails;
    },

    template:
`<hero-component></hero-component>
<projects-component></projects-component>
<references-component></references-component>
<team-component></team-component>
<contact-component></contact-component>`
  });
}