<template>
  <div class="message">
    <h1>{{name}},欢迎来到聊天室</h1>
    <div class="content">
      <ul>
        <li v-for="item in messages">
          <a target="_blank">{{item.name}}:{{item.message}}</a>
        </li>
      </ul>
       <textarea
        v-model="message"
        class="text-input"
      >
      </textarea>
      <a href="javascript:void(0)" @click="submit">提交</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      name: this.$route.query.name,
      messages: [],
      message: ''
    }
  },
  mounted () {
    this.$socket.emit('login', {name: this.name})
  },
  sockets: {
    someoneComing (name) {
      this.$toast(`${name.name}加入房间`)
    },
    someoneTalking (data) {
      this.messages.push(data)
    }
  },
  methods: {
    submit () {
      if (!this.message) {
        return
      }
      let {name, message} = this
      this.$socket.emit('talk', {name, message})
      this.message = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.message > .content {
  width: 80%;
  margin: 0 auto;
  padding: 10px 20px;
  border: 1px solid #ccc;
}
.content > ul {
  border: 1px solid #ccc;
  border-top: none;
}
.content > ul > li {
  padding: 4px 0;
  border-top: 1px solid #ccc;
}
.message > .content > .text-input {
  width: 100%;
  outline: none;
}
.message > .content > a {
  
}
</style>
