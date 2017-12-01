<template>
  <div id="progress-bar">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-sm-6 col-lg-6">
        <div class="idb-block">
          <div class="idb-block-title">
            <h2>Simple Progress Bar With Labels</h2>
          </div>
          <div class="idb-block-content">
            <p class="text-muted mb-30">Simply use a element <code> &#60;b-progress&#62;&#60;/b-progress&#62; </code></p>
            <div class="mb-20">
              <p>No label</p>
              <b-progress :value="33.3" :max="100"></b-progress>
            </div>
            <div class="mb-20">
              <p>Value label</p>
              <b-progress :value="33.3" :max="100" show-value></b-progress>
            </div>
            <div class="mb-20">
              <p>Progress label</p>
              <b-progress :value="67" :max="100" show-progress></b-progress>
            </div>
            <div class="mb-20">
              <p>Value label with precision</p>
              <b-progress :value="33.3" :max="100" :precision="2" show-value></b-progress>
            </div>
            <div class="mb-20">
              <p>Progress label with precision</p>
              <b-progress :value="66.3" :max="100" :precision="2" show-progress></b-progress>
            </div>
          </div>
        </div>
        <div class="idb-block">
          <div class="idb-block-title">
            <h2>Colored Progress Bars</h2>
          </div>
          <div class="idb-block-content">
            <p class="text-muted mb-30">
              Simply use a element <code>&#60;b-progress variant="primary"&#62;&#60;/b-progress&#62;</code>
            </p>
            <b-progress :value="60" variant="primary gradient-primary" class="mb-30"></b-progress>
            <b-progress :value="40" variant="warning gradient-warning" class="mb-30"></b-progress>
            <b-progress :value="80" variant="danger gradient-danger" class="mb-30"></b-progress>
            <b-progress :value="70" variant="info gradient-info" class="mb-30"></b-progress>
            <b-progress :value="55" variant="success gradient-success" class="mb-30"></b-progress>
          </div>
        </div>
        <div class="idb-block">
          <div class="idb-block-title">
            <h2>Stacked Bars</h2>
          </div>
          <div class="idb-block-content">
            <b-progress :max="100" class="mb-3">
              <b-progress-bar variant="primary" :value="15"></b-progress-bar>
              <b-progress-bar variant="danger" :value="30"></b-progress-bar>
              <b-progress-bar variant="info" :value="35"></b-progress-bar>
            </b-progress>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-sm-6 col-lg-6">
        <div class="idb-block">
          <div class="idb-block-title">
            <h2>Sizing Progress Bar</h2>
          </div>
          <div class="idb-block-content">
            <p class="text-muted mb-30">
                Simply use a element <code> &#60;b-progress class="w-75" height="4px" variant="primary"&#62;&#60;/b-progress&#62;</code>
            </p>
            <div class="progress-width-style mb-4">
              <p>Custom heights</p>
              <b-progress height="5px" :value="40" show-progress class="mb-30"></b-progress>
              <b-progress height="8px" :value="70" show-progress class="mb-30"></b-progress>
              <b-progress height="12px" :value="50" show-progress class="mb-30"></b-progress>
              <b-progress height="20px" :value="50" show-progress class="mb-30"></b-progress>
            </div>
            <div class="progress-width-style">
              <p>Custom widths</p>
              <b-progress :value="40" class="w-75 mb-30"></b-progress>
              <b-progress :value="50" class="w-50 mb-30"></b-progress>
              <b-progress :value="70" class="w-25"></b-progress>
            </div>
          </div>
        </div>
        <div class="idb-block">
          <div class="idb-block-title">
            <h2>Striped Progress Bar</h2>
          </div>
          <div class="idb-block-content">
            <p class="text-muted mb-30">
                Simply use a element <code>&#60;b-progress striped :animated="true" variant="primary"&#62;&#60;/b-progress&#62;</code>
            </p>
            <b-progress :value="60" :animated="true" variant="primary" striped class="mb-30"></b-progress>
            <b-progress :value="40" variant="warning" :animated="true" striped class="mb-30"></b-progress>
            <b-progress :value="70" variant="danger" :animated="true" striped class="mb-30"></b-progress>
            <b-progress :value="45" variant="info" :animated="true" class="mb-30" striped></b-progress>
            <b-progress :value="35" variant="success" :animated="true" striped></b-progress>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'progress-bar'
}
</script>
