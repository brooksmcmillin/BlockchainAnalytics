<template>
  <div class="session-wrapper">
    <div class="container container-full">
      <div class="row session-dark-block">
        <div class="col-sm-12 col-md-6">
          <div class="session-block">
            <div class="text-center">
              <h2 class="text-uppercase mb-20 session-title">Login</h2>
              <div class="mb-30">
                <img class="img-fluid rounded-circle" width="110" height="110" src="/static/img/user-1.jpg" />
              </div>
            </div>
            <div class="form-wrapper">
              <b-form @submit="onSubmit">
                <b-form-group id="exampleInputGroup1">
                  <b-form-input id="exampleInput1" class="custom-field form-control-lg" type="text" v-model="form.userName" required placeholder="Username">
                  </b-form-input>
                </b-form-group>
                <b-form-group id="exampleInputGroup2">
                  <b-form-input id="exampleInput2" class="custom-field form-control-lg" type="password" v-model="form.password" required placeholder="Password">
                  </b-form-input>
                </b-form-group>
                <div class="forgot-pwd mb-40">
                  <a href="javascript:;" class="text-danger small">Forgot Password ?</a>
                </div>
                <b-button type="submit" variant="danger">Log in</b-button>
              </b-form>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 px-50 py-70">
          <h2 class="mb-30">Dont have an account?</h2>
          <h4 class="mb-20">Lorem ipsum dolor sit amet, consec adipisicing elit. Aspernatur.</h4>
          <a class="btn btn-primary" href="javascript:;">SIGN UP</a>
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
        userName: '',
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
