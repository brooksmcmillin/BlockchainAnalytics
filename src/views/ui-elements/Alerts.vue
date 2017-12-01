<template>
  <div id="alerts">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <div class="idb-block">
          <div class="idb-block-title">
            <h4>Link Color</h4>
          </div>
          <div class="idb-block-content">
            <b-alert show variant="primary">
              Primary Alert with <a href="#" class="alert-link">an example link</a>.
            </b-alert>
            <b-alert show variant="secondary">
              Secondary Alert with <a href="#" class="alert-link">an example link</a>.
            </b-alert>
            <b-alert show variant="success">
              Success Alert with <a href="#" class="alert-link">an example link</a>.
            </b-alert>
            <b-alert show variant="danger">
              Danger Alert with <a href="#" class="alert-link">an example link</a>.
            </b-alert>
            <b-alert show variant="warning">
              Warning Alert with <a href="#" class="alert-link">an example link</a>.
            </b-alert>
            <b-alert show variant="info">
              Info Alert with <a href="#" class="alert-link">an example link</a>.
            </b-alert>
            <b-alert show variant="light">
              Light Alert with <a href="#" class="alert-link">an example link</a>.
            </b-alert>
            <b-alert show variant="dark">
              Dark Alert with <b-link href="#" class="alert-link">an example link</b-link>.
            </b-alert>
          </div>
        </div>
        <div class="idb-block">
          <div class="idb-block-title">
            <h4>Additional Content Inside Alerts</h4>
          </div>
          <div class="idb-block-content">
            <b-alert show variant="success">
              <h4 class="alert-heading">Well done!</h4>
              <p>
                Aww yeah, you successfully read this important alert message.
                This example text is going to run a bit longer so that you can see
                how spacing within an alert works with this kind of content.
              </p>
              <hr>
              <p class="mb-0">
                Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
              </p>
            </b-alert>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <div class="idb-block">
          <div class="idb-block-title">
            <h4>Normal Alerts With Dismiss</h4>
          </div>
          <div class="idb-block-content">
            <b-alert show dismissible>
              Dismissible Alert!  Click the close button over there <b>&rArr;</b>
            </b-alert>
            <b-alert show dismissible variant="primary">
              Dismissible Alert!  Click the close button over there <b>&rArr;</b>
            </b-alert>
            <b-alert show dismissible variant="secondary">
              Dismissible Alert!  Click the close button over there <b>&rArr;</b>
            </b-alert>
            <b-alert show dismissible variant="danger">
              Dismissible Alert!  Click the close button over there <b>&rArr;</b>
            </b-alert>
            <b-alert show dismissible variant="warning">
              Dismissible Alert!  Click the close button over there <b>&rArr;</b>
            </b-alert>
            <b-alert show dismissible variant="success">
              Dismissible Alert!  Click the close button over there <b>&rArr;</b>
            </b-alert>
          </div>
        </div>
        <div class="idb-block">
          <div class="idb-block-title">
            <h4>Auto dismissing alerts</h4>
          </div>
          <div class="idb-block-content">
            <b-alert :show="dismissCountDown"
             dismissible
             variant="warning"
             @dismissed="dismissCountdown=0"
             @dismiss-count-down="countDownChanged">
              This alert will dismiss after {{dismissCountDown}} seconds...
            </b-alert>
            <b-btn @click="showAlert" variant="info" class="m-1">
              Show alert with count-down timer
            </b-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'alerts',
  data () {
    return {
      dismissSecs: 5,
      dismissCountDown: 0
    }
  },
  methods: {
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    }
  }
}
</script>
