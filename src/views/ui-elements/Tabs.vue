<template>
  <div id="tabs">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <div class="idb-block">
          <div class="idb-block-title">
            <h2>Basic Usage</h2>
          </div>
          <div class="idb-block-content">
            <b-tabs>
              <b-tab title="First" active>
                <p> Basic tabs example using <code>.nav-tabs</code> class. Also requires base <code>.nav</code> class. </p>
              </b-tab>
              <b-tab title="Second">
                <p>This style Should Apply same for all the possible variations of this sections.</p>
              </b-tab>
              <b-tab title="disabled" disabled>
                <p> Basic tabs example using <code>.nav-tabs</code> class. Also requires base <code>.nav</code> class.</p>
              </b-tab>
            </b-tabs>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <div class="idb-block">
          <div class="idb-block-title">
            <h2>Pills Variant</h2>
          </div>
          <div class="idb-block-content">
            <b-tabs pills>
              <b-tab title="First" active>
                <p> Basic tabs example using <code>.nav-tabs</code> class. Also requires base <code>.nav</code> class. </p>
              </b-tab>
              <b-tab title="Second">
                <p>This style Should Apply same for all the possible variations of this sections.</p>
              </b-tab>
              <b-tab title="disabled" disabled>
                <p> Basic tabs example using <code>.nav-tabs</code> class. Also requires base <code>.nav</code> class.</p>
              </b-tab>
            </b-tabs>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div class="idb-block">
          <div class="idb-block-title">
            <h2>Advanced Examples</h2>
          </div>
          <div class="idb-block-content">
            <b-tabs card ref="tabs" v-model="tabIndex">
              <b-tab title="General">
                <p>Easily make tabs equal widths of their parent with <code>.nav-justified</code> class.</p>
              </b-tab>
              <b-tab title="Edit profile">
                <p>I'm the second tab</p>
                <b-card>I'm the card in tab</b-card>
              </b-tab>
              <b-tab title="Premium Plan" disabled>
                Sibzamini!
              </b-tab>
              <b-tab title="Info">
                <p>Easily make tabs equal widths of their parent with <code>.nav-justified</code> class.</p>
              </b-tab>
            </b-tabs>
            <!-- Control buttons-->
            <div class="text-center">
              <b-button-group class="p-20">
                <b-btn variant="danger" @click="tabIndex--">Previous</b-btn>
                <b-btn variant="danger" @click="tabIndex++">Next</b-btn>
              </b-button-group>
              <br>
              <span class="text-muted">Current Tab: {{tabIndex}}</span>
            </div>
          </div>
        </div>
        <div class="idb-block">
          <div class="idb-block-title">
            <h2>Dynamic Tabs</h2>
          </div>
          <div class="idb-block-content">
            <b-tabs card>
              <!-- Render Tabs -->
              <b-tab :title="`Tab ${i}`" v-for="i in tabs" :key="i">
                Tab Contents {{i}}
                <b-btn size="sm" variant="danger" class="float-right" @click="()=>closeTab(i)">
                  Close tab
                </b-btn>
              </b-tab>
              <!-- New Tab Button (Using tabs slot) -->
              <b-nav-item slot="tabs" @click.prevent="newTab" href="#">
                +
              </b-nav-item>
              <!-- Render this if no tabs -->
              <div slot="empty" class="text-center text-muted">
                There are no open tabs
                <br> Open a new tab using + button.
              </div>
            </b-tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabs',
  data () {
    return {
      tabIndex: 0,
      tabs: [],
      tabCounter: 0
    }
  },
  methods: {
    closeTab (x) {
      for (let i = 0; i < this.tabs.length; i++) {
        if (this.tabs[i] === x) {
          this.tabs.splice(i, 1)
        }
      }
    },
    newTab () {
      this.tabs.push(this.tabCounter++)
    }
  }
}
</script>
