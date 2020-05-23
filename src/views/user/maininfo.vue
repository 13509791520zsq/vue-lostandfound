<template>
  <div class="userinfo">
    <span>账号信息</span>
    <div class="info">
      <div class="block"><el-avatar :size="50" :src="info.avatar"></el-avatar></div>
      <div class="username">username: {{info.username}}</div>
      <div class="email">email: {{info.email}}</div>
      <div class="identity">identity: {{info.identity}}</div>
    </div>

  </div>


</template>
<script>
  export default{
    name: 'userinfo',
    data(){
      return{
        info:{}
      }
    },
    methods: {
      getinfo(){
        this.info=this.$store.getters.user
      }
    },
    created(){
      this.getinfo()
    },
    component: {

    }
  }
</script>
<style scoped>
.userinfo{
  width: 100%;
  height: 100%;
  background-color: whitesmoke;
}
.info{
  width: 50%;
  height: 50%;
  position: relative;
  top: 15%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.email,
.identity,
.username{
  font-size: large;
  font-weight: bolder;
  font-family: Arial, Helvetica, sans-serif;
  color: #000;
  margin-top: 20px;
  text-align: left;
}


</style>