import proofBackground from '../assets/proof-background.jpg';
import pcNewConstruction from '../assets/projects-c-new-construction.svg';
import pcTenantImprovement from '../assets/projects-c-tenant-improvement.svg';
import prMultiFamily from '../assets/projects-r-multifamily.svg';
import prRemodeling from '../assets/projects-r-remodeling.svg';
import prSingleFamily from '../assets/projects-r-single-family.svg';


export function ProjectsComponent(app) {
  app.component('projectsComponent', {
    template:
`<section class="home-proof" id="projects" ng-style="{backgroundImage: 'url(${proofBackground})'}">
  <div class="container">
    <div class="home-proof__title">
      Our Projects
    </div>
    <div class="home-proof__tag">
      Behunin Construction's projects extend to an exquisite multi-faceted, multi-million-dollar portfolio. Specializing in functional office spaces, high-end multi-family communities, and luxury single family residences, Behunin Construction is the premier builder of the Rocky Mountain West.
    </div>
    <ul class="home-proof__list">
      <li>${pcNewConstruction} <span>New Construction</span> <span class="sub">- Commercial</span></li>
      <li>${pcTenantImprovement} <span>Tenant Improvement</span> <span class="sub">- Commercial</span></li>
      <li>${prSingleFamily} <span>Single Family</span> <span class="sub">- Residential</span></li>
      <li>${prMultiFamily} <span>Multi Family</span> <span class="sub">- Residential</span></li>
      <li>${prRemodeling} <span>Remodeling</span> <span class="sub">- Residential</span></li>
    </ul>
    <gallery></gallery>
  </div>
</section>`
  });
}