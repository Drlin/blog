<template>
  <div class="login">
    <div class="join">
      <form @submit="submit">
        <input 
          type="text" 
          placeholder="输入你的姓名"
          v-model="text"
        >
        <button>来聊一发</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      text: ''
    }
  },
  methods: {
    submit (e) {
      e.preventDefault()
      if (this.text) {
        this.$router.push({path: 'message', query: { name: this.text }})
      }
    }
  }
}
</script>

<style>
.join input {
  width: 200px;
  height: 40px;
  outline: none;
  font-size: 18px;
  padding: 0px 12px 0px 35px;
  border: 1px solid #c8c8c8;
  border-radius: 0 0 4px 4px;
  background-color: hsla(0,0%,71%,.1);
  border-radius: 4px 4px 0 0;
}
.join button {
  width: 100px;
  height: 40px;
  font-size: 18px;
  border: none;
  border-radius: 4px;
  color: #fff;
  background: #42c02e;
  cursor: pointer;
  outline: none;
}


</style>
