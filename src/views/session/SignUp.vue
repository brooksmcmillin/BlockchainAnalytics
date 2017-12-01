<template>
  <div class="session-wrapper">
    <div class="container container-full">
      <div class="row session-dark-block">
        <div class="col-sm-12 col-md-6 p-70">
          <h2 class="mb-30">Already having an Account?</h2>
          <h4 class="mb-20">Lorem ipsum dolor sit amet, consec adipisicing elit. Aspernatur.</h4>
          <a class="btn btn-danger" href="javascript:;">Log In</a>
        </div>
        <div class="col-sm-12 col-md-6">
          <div class="session-block-signin">
            <div class="text-center">
              <h2 class="text-uppercase mb-20 session-title">Sign Up</h2>
            </div>
            <div class="form-wrapper">
              <b-form @submit="onSubmit">
                <div class="mb-40">
                  <b-form-group id="exampleInputGroup1">
                    <b-form-input id="exampleInput1" class="custom-field form-control-lg" type="text" v-model="form.userName" required placeholder="Username">
                    </b-form-input>
                  </b-form-group>
                  <b-form-group id="exampleInputGroup2">
                    <b-form-input id="exampleInput2" class="custom-field form-control-lg" type="text" v-model="form.email" required placeholder="Email Address">
                    </b-form-input>
                  </b-form-group>
                  <b-form-group id="exampleInputGroup3">
                    <b-form-input id="exampleInput3" class="custom-field form-control-lg" type="password" v-model="form.password" required placeholder="Password">
                    </b-form-input>
                  </b-form-group>
                  <b-form-group id="exampleInputGroup4">
                    <b-form-input id="exampleInput4" class="custom-field form-control-lg" type="password" v-model="form.confirmPassword" required placeholder="Confirm Password">
                    </b-form-input>
                  </b-form-group>
                </div>
                <label class="custom-control custom-checkbox d-block mb-40">
                  <input type="checkbox" class="custom-control-input">
                  <span class="custom-control-indicator"></span>
                  <span class="custom-control-description ml-10">I Agree Terms &amp; Conditions</span>
                </label>
                <div class="d-flex align-self-start">
                  <div class="d-flex align-items-start">
                    <b-button type="submit" variant="primary">Sign Up</b-button>
                  </div>
                  <div class="d-flex align-items-start ml-20 pt-10">
                    <span class="small">Or Log In Using</span>
                    <ul class="list-inline session-social-links mb-0 ml-10">
                      <li class="list-inline-item">
                        <a href="javascript:;"><i class="ti-facebook"></i></a>
                      </li>
                      <li class="list-inline-item">
                        <a href="javascript:;"><i class="ti-google"></i></a>
                      </li>
                      <li class="list-inline-item">
                        <a href="javascript:;"><i class="ti-twitter-alt"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </b-form>
            </div>
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
        userName: '',
        password: '',
        email: '',
        confirmPassword: ''
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
