export function ReferencesComponent(app) {
  app.component('referencesComponent', {
    template:
`<section class="references" id="customers">
    <div class="container">
        <div class="references__title">What Our Customers Are Saying</div>
        <div class="row">
            <div class="col-sm-6">
                <div class="references-box">
                    <div class="references-box__content">
                        "I recently contracted with Behunin Construction to renovate the exterior of our home. I've used them in the past, and continue turn to them for any work on my home. I trust them to give me a no nonsense evaluation of what work needs to be done to minimize my costs. And their craftsmanship is exquisite. I'd recommend them to anyone in need of commercial or residential construction services."
                    </div>
                    <div class="references-box__name">Brian</div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="references-box">
                    <div class="references-box__content">
                        "We hired Behunin Construction to renovate several areas of our home, including bathrooms and the kitchen. We found them to be wonderful to work with and very attentive to our needs as their customer. We are also very happy with the quality of their workmanship. We recommend them highly to anyone in need of home remodeling of any kind."
                    </div>
                    <div class="references-box__name">John and Leann</div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6">
                <div class="references-box">
                    <div class="references-box__content">
                        "We contracted with Behunin Construction to renovate our office space. They performed the work with professionalism and great attention to our needs. Their pricing was competitive and their craftsmanship, second to none. We can recommend them without reservation to anyone in need of commercial construction or tenant improvement services."
                    </div>
                    <div class="references-box__name">G&S Oil Products</div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="references-box">
                    <div class="references-box__content">
                        "We recently contracted with Behunin Construction to construct a darkroom in our facility required for a specific type of test we provide. They completed the work in a timely fashion, and with the upmost concern for the important work being done around them in our lab. We also found their pricing to be very competitive. We recommend Behunin Construction to anyone in need of tenant improvement construction services."
                    </div>
                    <div class="references-box__name">Biochemical Lab</div>
                </div>
            </div>
        </div>
    </div>
</section>`
  });
}