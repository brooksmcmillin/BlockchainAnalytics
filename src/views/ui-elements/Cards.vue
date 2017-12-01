<template>
  <div id="cards">
    <div class="row">
      <div class="col-lg-6 col-xl-6 mb-40">
        <b-card img-src="static/img/card-list.jpg" img-alt="Card image" img-top title="Card title" sub-title="Card subtitle" footer="Card Footer" footer-tag="footer">
            <div class="card-text">
              <p>Some quick example text to build on the <em>card title</em> and make up the bulk of the card's content.</p>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
            <a href="#" class="card-link">Card link</a>
            <b-link href="#" class="card-link">Another link</b-link>
        </b-card>
      </div>
      <div class="col-lg-6 col-xl-6 mb-40">
        <b-card class="black-tp-layer" overlay img-src="static/img/post-3.jpg" img-alt="Card Image" text-variant="white">
          <div class="card-text">
            <h2 class="mb-20">Overlay Card</h2>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </b-card>
      </div>
    </div>
    <div class="card-block">
      <b-card-group deck>
          <b-card class="mb-30" header="featured" header-tag="header" footer="Card Footer" footer-tag="footer" title="Title">
              <p class="card-text">Header and footers using props.</p>
              <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
          <b-card class="mb-30" title="Title" header-tag="header" footer-tag="footer">
              <h6 slot="header" class="mb-0">Header Slot</h6>
              <em slot="footer">Footer Slot</em>
              <p class="card-text">Header and footers using slots.</p>
              <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
          <b-card class="mb-30" title="Title" header-tag="header" footer-tag="footer">
              <h6 slot="header" class="mb-0">Header Slot</h6>
              <em slot="footer">Footer Slot</em>
              <p class="card-text">Header and footers using slots.</p>
              <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
      </b-card-group>
    </div>
    <div class="card-block">
      <b-card-group deck>
        <b-card bg-variant="primary" text-variant="white" header="Primary" class="text-center mb-30">
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </b-card>
        <b-card bg-variant="secondary" text-variant="white" header="Secondary" class="text-center mb-30">
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </b-card>
        <b-card bg-variant="success" text-variant="white" header="Success" class="text-center mb-30">
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </b-card>
      </b-card-group>
      <b-card-group deck>
        <b-card bg-variant="info" text-variant="white" header="Info" class="text-center mb-30">
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </b-card>
        <b-card bg-variant="warning" text-variant="white" header="Warning" class="text-center mb-30">
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </b-card>
        <b-card bg-variant="danger" text-variant="white" header="Danger" class="text-center mb-30">
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </b-card>
    </b-card-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cards'
}
</script>
