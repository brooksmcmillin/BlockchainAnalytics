<template>
  <div class="idb-block">
    <div class="idb-block-title">
      <h2>Vue Draggable</h2>
    </div>
    <div class="idb-block-content">
      <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-6">
          <ul class="list-group">
            <draggable v-model="list" class="dragArea" :options="{group:'people'}">
              <li class="list-group-item" v-for="item in list">
                <div class="d-flex justify-content-start">
                  <div class="d-flex align-items-start flex-column mr-20">
                    <img :src="item.image" alt="user thumb" class="rounded-circle align-self-center artical-user" width="80" height="80" />
                  </div>
                  <div class="d-flex align-items-start flex-column pt-10">
                    <h6 class="font-lg">{{item.name}}</h6>
                    <p class="mb-0">Project -- Setup the project..!</p>
                    <p class="small fw-bold">5 min ago</p>
                  </div>
                </div>
              </li>
            </draggable>
          </ul>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6">
          <ul class="list-group">
            <draggable v-model="list2" class="dragArea" :options="{group:'people'}">
              <li class="list-group-item" v-for="item in list2">
                <div class="d-flex justify-content-start">
                  <div class="d-flex align-items-start flex-column mr-20">
                    <img :src="item.image" alt="user thumb" class="rounded-circle align-self-center artical-user" width="80" height="80" />
                  </div>
                  <div class="d-flex align-items-start flex-column pt-10">
                    <h6 class="font-lg">{{item.name}}</h6>
                    <p class="mb-0">Project -- Setup the project..!</p>
                    <p class="small fw-bold">5 min ago</p>
                  </div>
                </div>
              </li>
            </draggable>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  data: function () {
    return {
      list: [{
        name: 'John',
        image: '/static/img/user-1.jpg'
      }, {
        name: 'Joao',
        image: '/static/img/user-2.jpg'
      }, {
        name: 'Jean',
        image: '/static/img/user-3.jpg'
      }],
      list2: [{
        name: 'Juan',
        image: '/static/img/user-4.jpg'
      }, {
        name: 'Edgard',
        image: '/static/img/user-5.jpg'
      }, {
        name: 'Johnson',
        image: '/static/img/user-6.jpg'
      }]
    }
  },
  components: {
    draggable
  }
}
</script>
