<template>
  <div id="buttons">
    <div class="row mb-4">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div class="idb-block">
          <div class="idb-block-title">
            <h2>Predefined Button Styles</h2>
          </div>
          <div class="idb-block-content">
            <div class="mb-4">
              <p class="text-muted mb-30">
                Simply use a element <code> &#60;b-button&#62;Primary&#60;/b-button&#62; </code> &nbsp; <code> &#60;b-button variant="secondary"&#62;Secondary&#60;/b-button&#62; </code> quickly create a general button.
              </p>
              <div class="btn-style">
                <b-button variant="primary" class="mb-10 mr-10">Primary</b-button>
                <b-button variant="secondary" class="mb-10 mr-10">Secondary</b-button>
                <b-button variant="success" class="mb-10 mr-10">Success</b-button>
                <b-button variant="warning" class="mb-10 mr-10">Warning</b-button>
                <b-button variant="danger" class="mb-10 mr-10">Danger</b-button>
                <b-button variant="info" class="mb-10 mr-10">Info</b-button>
                <b-button variant="dark" class="mb-10 mr-10">Dark</b-button>
                <b-button variant="light" class="mb-10 mr-10">Light</b-button>
                <b-button variant="link" class="mb-10 mr-10">Link</b-button>
              </div>
            </div>
          </div>
        </div>
        <div class="idb-block">
          <div class="idb-block-title">
            <h2>Outline Buttons</h2>
          </div>
          <div class="idb-block-content">
            <p class="text-muted mb-30">
              Simply use a element <code>&#60;b-button variant="outline-primary"&#62;Primary&#60;/b-button&#62; </code>
            </p>
            <div class="btn-style">
              <b-button variant="outline-primary" class="mb-10 mr-10">Primary</b-button>
              <b-button variant="outline-secondary" class="mb-10 mr-10">Secondary</b-button>
              <b-button variant="outline-success" class="mb-10 mr-10">Success</b-button>
              <b-button variant="outline-warning" class="mb-10 mr-10">Warning</b-button>
              <b-button variant="outline-danger" class="mb-10 mr-10">Danger</b-button>
              <b-button variant="outline-info" class="mb-10 mr-10">Info</b-button>
              <b-button variant="outline-dark" class="mb-10 mr-10">Dark</b-button>
              <b-button variant="outline-link" class="mb-10 mr-10">Link</b-button>
            </div>
          </div>
        </div>
        <div class="idb-block">
          <div class="idb-block-title">
            <h2>Buttons Sizes</h2>
          </div>
          <div class="idb-block-content">
            <p class="text-muted mb-30">
              Simply use a element <code>&#60;b-button size="lg" variant="outline-primary"&#62;Primary&#60;/b-button&#62; </code>
            </p>
            <div class="btn-style mb-30">
              <b-button size="lg" variant="primary" class="mb-10 mr-10">Large</b-button>
              <b-button variant="primary" class="mb-10 mr-10">Medium</b-button>
              <b-button size="sm" variant="primary" class="mb-10 mr-10">Small</b-button>
            </div>
            <div class="btn-style mb-30">
              <b-button size="lg" variant="outline-primary" class="mb-10 mr-10">Large</b-button>
              <b-button variant="outline-primary" class="mb-10 mr-10">Medium</b-button>
              <b-button size="sm" variant="outline-primary" class="mb-10 mr-10">Small</b-button>
            </div>
          </div>
        </div>
        <div class="idb-block">
          <div class="idb-block-title">
            <h2>Block Level Buttons</h2>
          </div>
          <div class="idb-block-content">
            <p class="text-muted mb-30">
              Simply use a element <code>&#60;b-button block variant="primary"&#62;Block Level Button&#60;/b-button&#62; </code>
            </p>
            <div class="btn-style mb-30">
              <b-button variant="primary" block class="mb-10">Block Level Button</b-button>
              <b-button variant="danger" block class="mb-10">Block Level Button</b-button>
            </div>
          </div>
        </div>
        <div class="idb-block">
          <div class="idb-block-title">
            <h2>Dropdown & Dropup</h2>
          </div>
          <div class="idb-block-content">
              <p class="text-muted mb-30">
                Simply use a element <code>&#60;b-dropdown text="Dropdown" variant="primary"&#62;&#60;b-dropdown-item href="#"&#62;Action&#60;/b-dropdown-item&#62;&#60;/b-dropdown&#62; </code>
              </p>
              <div class="btn-style mb-30">
                <b-dropdown id="ddown1" text="Dropdown" variant="secondary" class="mb-10 mr-10">
                   <b-dropdown-item href="#">Action</b-dropdown-item>
                   <b-dropdown-item href="#">Another action</b-dropdown-item>
                   <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                </b-dropdown>
                <b-dropdown id="ddown2" text="Dropdown" variant="primary" class="mb-10 mr-10">
                  <b-dropdown-item href="#">Action</b-dropdown-item>
                  <b-dropdown-item href="#">Another action</b-dropdown-item>
                  <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                </b-dropdown>
                <b-dropdown id="ddown3" text="Dropdown" variant="success" class="mb-10 mr-10">
                  <b-dropdown-item href="#">Action</b-dropdown-item>
                  <b-dropdown-item href="#">Another action</b-dropdown-item>
                  <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                </b-dropdown>
                <b-dropdown id="ddown3" text="Dropdown" variant="warning" class="mb-10 mr-10">
                  <b-dropdown-item href="#">Action</b-dropdown-item>
                  <b-dropdown-item href="#">Another action</b-dropdown-item>
                  <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                </b-dropdown>
                <b-dropdown id="ddown3" text="Dropdown" variant="danger" class="mb-10 mr-10">
                  <b-dropdown-item href="#">Action</b-dropdown-item>
                  <b-dropdown-item href="#">Another action</b-dropdown-item>
                  <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                </b-dropdown>
              </div>
              <p class="text-muted mb-30">
                Simply use a element <code>&#60;b-dropdown text="Dropdown" split variant="primary"&#62;&#60;b-dropdown-item href="#"&#62;Action&#60;/b-dropdown-item&#62;&#60;/b-dropdown&#62; </code>
              </p>
              <div class="btn-style">
                <b-dropdown id="ddown2" text="Dropdown" variant="secondary" split class="mb-10 mr-10">
                  <b-dropdown-item href="#">Action</b-dropdown-item>
                  <b-dropdown-item href="#">Another action</b-dropdown-item>
                  <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                </b-dropdown>
                <b-dropdown id="ddown2" text="Dropdown" variant="primary" split class="mb-10 mr-10">
                  <b-dropdown-item href="#">Action</b-dropdown-item>
                  <b-dropdown-item href="#">Another action</b-dropdown-item>
                  <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                </b-dropdown>
                <b-dropdown id="ddown2" text="Dropdown" variant="success" split class="mb-10 mr-10">
                  <b-dropdown-item href="#">Action</b-dropdown-item>
                  <b-dropdown-item href="#">Another action</b-dropdown-item>
                  <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                </b-dropdown>
                <b-dropdown id="ddown2" text="Dropdown" variant="warning" split class="mb-10 mr-10">
                  <b-dropdown-item href="#">Action</b-dropdown-item>
                  <b-dropdown-item href="#">Another action</b-dropdown-item>
                  <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                </b-dropdown>
                <b-dropdown id="ddown2" text="Dropdown" variant="danger" split class="mb-10 mr-10">
                  <b-dropdown-item href="#">Action</b-dropdown-item>
                  <b-dropdown-item href="#">Another action</b-dropdown-item>
                  <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                </b-dropdown>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'buttons'
}
</script>
