<template>
  <div class="lock-screen-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-sm-10 col-md-4 mx-auto text-center">
          <div class="lock-screen-block">
            <div class="s-user mb-40">
              <img class="rounded-circle img-fluid" src="/static/img/user-4.jpg" width="143" height="143" >
            </div>
            <div class="form-wrapper">
              <b-form @submit="onSubmit">
                <div class="mb-40">
                  <b-form-group id="exampleInputGroup3">
                    <b-form-input id="exampleInput3" class="form-control-lg" type="password" v-model="form.password" required placeholder="Enter Password">
                    </b-form-input>
                  </b-form-group>
                </div>
                <b-button type="submit" variant="btn btn-outline-light rounded-circle square-50 btn-circle"><i class="ti-angle-right"></i></b-button>
              </b-form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      form: {
        password: ''
      }
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    }
  }
}
</script>
