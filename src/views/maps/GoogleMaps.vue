<template>
  <div id="google-maps">
    <div class="idb-block">
      <div class="idb-block-title">
        <h2>Google Map</h2>
      </div>
      <div class="idb-block-content">
        <gmap-map :center="center" :zoom="9" style="width: '100%'; height: 400px">
          <gmap-marker
            :position="markers.position"
            :clickable="true"
            :draggable="true"
            @click="center=markers.position"
          ></gmap-marker>
        </gmap-map>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'google-maps',
  data: function () {
    return {
      center: {lat: 30.7, lng: 76.7},
      markers: {
        position: {lat: 30.7, lng: 76.7}
      }
    }
  }
}
</script>
