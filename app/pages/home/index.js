import { HomeComponent } from './home.component';
import { HeroComponent } from './hero/hero.component';
import { ProjectsComponent } from './projects/projects.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { ReferencesComponent } from './references/references.component';

export default function(app) {
  HomeComponent(app);
  HeroComponent(app);
  ProjectsComponent(app);
  TeamComponent(app);
  ContactComponent(app);
  ReferencesComponent(app);

  app.config(function($stateProvider) {
    "ngInject";
    $stateProvider.state('home', {
      url: '/',
      template: `<home-component></home-component>`
    });
  });
};