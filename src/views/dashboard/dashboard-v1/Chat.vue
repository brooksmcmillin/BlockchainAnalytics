<template>
  <div class="chat-wrapper">
    <div class="chat-list">
      <div class="chat-section mb-20" v-for="chat in chats">
        <div class="media">
          <div class="media-object d-flex mr-20">
            <img :src="chat.img" class="rounded-circle" alt="user" width="50" height="50" />
          </div>
          <div class="chat-block">
            <p>{{ chat.message }}</p>
          </div>
        </div>
        <div class="d-flex justify-content-between pl-70">
          <div class="d-flex align-self-center">
            <span class="sender">{{ chat.from }}</span>
          </div>
          <div class="d-flex align-self-center">
            <span class="fs-12">{{ chat.time }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="send-msg">
      <div class="input-group">
        <input type="text" v-model="chatMessage" class="form-control mr-20" placeholder="Reply" style="resize: none; cursor: text" @keyup.enter="sendMessage" />
        <span class="btn btn-danger text-white" @click="sendMessage">Send</span>
      </div>
    </div>
  </div>
</template>

<script>
const chats = [
  {
    img: '/static/img/user-1.jpg',
    message: 'This is exactly I needed. You guys did a great job. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    admin: false,
    time: '2 Hours ago',
    from: 'Emset Lee'
  },
  {
    img: '/static/img/user-2.jpg',
    message: 'We are always here to help you. Our customer care service is 24X7. ',
    admin: true,
    time: '2 Hours ago',
    from: 'Sally Drake'
  },
  {
    img: '/static/img/user-1.jpg',
    message: 'I got it fixed with your guidelines. Great and quick support !',
    admin: false,
    time: '2 Hours ago',
    from: 'Emset Lee'
  }
]
export default {
  name: 'chat',
  data () {
    return {
      chatMessage: '',
      chats: chats
    }
  },
  methods: {
    sendMessage () {
      if (this.chatMessage) {
        this.chats.push({
          img: '/static/img/user-2.jpg',
          message: this.chatMessage,
          from: 'Sally Drake',
          time: 'Just Now',
          admin: true
        })
        this.chatMessage = ''
      }
    }
  }
}
</script>
