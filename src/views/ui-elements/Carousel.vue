<template>
  <div id="carousel">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div class="idb-block">
          <div class="idb-block-title">
            <h2>Carousel</h2>
          </div>
          <div class="idb-block-content">
            <b-carousel id="carousel1" controls indicators :interval="4000" img-width="700" img-height="480" v-model="slide" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
            <!-- Text slides with image -->
            <b-carousel-slide caption="First slide" text="Nulla vitae elit libero, a pharetra augue mollis interdum." img-src="/static/img/post-1.jpg"></b-carousel-slide>
            <!-- Slides with custom text -->
            <b-carousel-slide img-src="/static/img/post-2.jpg" class="img-fluid">
              <h2 class="text-white">Hello world!</h2>
            </b-carousel-slide>
            <!-- Slides with image only -->
            <b-carousel-slide img-src="/static/img/post-3.jpg" class="img-fluid">
            </b-carousel-slide>
              <!-- Slides with img slot -->
              <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
              <b-carousel-slide>
                <img slot="img" class="d-block img-fluid w-100" width="700" height="480" src="/static/img/post4.jpg" alt="image slot">
              </b-carousel-slide>
            </b-carousel>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'carousel',
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>
