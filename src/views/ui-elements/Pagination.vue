<template>
  <div id="pagination">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div class="idb-block">
          <div class="idb-block-title">
            <h2>Basic Usage</h2>
          </div>
          <div class="idb-block-content">
            <div class="mb-20">
              <h5 class="mb-20">Default</h5>
              <b-pagination size="md" :total-rows="100" v-model="basicPage" :per-page="10">
              </b-pagination>
            </div>
            <div class="mb-20">
              <h5 class="mb-20">Small</h5>
              <b-pagination size="sm" :total-rows="100" v-model="basicPage" :per-page="10">
              </b-pagination>
            </div>
            <div class="mb-20">
              <h5 class="mb-20">Large</h5>
              <b-pagination size="lg" :total-rows="100" v-model="basicPage" :per-page="10">
              </b-pagination>
            </div>
            <br>
          </div>
        </div>
        <div class="idb-block">
          <div class="idb-block-title">
            <h2>Alignment</h2>
          </div>
          <div class="idb-block-content">
            <p class="mb-30">By default the pagination component is left aligned. Change the alignment to <code>center</code> or <code>right</code> (right is an alias for end) by setting the prop align to the appropriate value.</p>
            <div class="mb-20">
              <h5 class="mb-20">Left alignment (default)</h5>
              <b-pagination :total-rows="100" v-model="alignMentPage" :per-page="10">
              </b-pagination>
            </div>
            <div class="mb-20">
              <h5 class="mb-20">Center alignment</h5>
              <b-pagination align="center" :total-rows="100" v-model="alignMentPage" :per-page="10">
              </b-pagination>
            </div>
            <div class="mb-20">
              <h5 class="mb-20">Right (end) alignment</h5>
              <b-pagination align="right" :total-rows="100" v-model="alignMentPage" :per-page="10">
              </b-pagination>
            </div>
            <div>currentPage: {{alignMentPage}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pagination',
  data () {
    return {
      basicPage: 3,
      alignMentPage: 3
    }
  }
}
</script>
