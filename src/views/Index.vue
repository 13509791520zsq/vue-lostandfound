<template>
  <div class="container">
    <div class="navbar">
      <span class="logo">LOST&FOUND</span>
      <span class="router">
        <router-link to="/infoupload" active-class="current" tag="label">infoupload</router-link>
        <router-link to="/list" tag="label" active-class="current">list</router-link>
        <!-- <router-link to="/lost" tag="label" active-class="current">lost</router-link> -->
        <!-- <router-link to="/found" tag="label" active-class="current">found</router-link> -->
        <router-link to="/query" tag="label" active-class="current">Query</router-link>
        
        <el-dropdown class="dropdown">
          <span class="el-dropdown-link">
            <i class="el-icon-user-solid"></i>个人中心
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item class="dropdownbox"><router-link to="/selfinfo">selfinfo</router-link></el-dropdown-item>
            <el-dropdown-item class="dropdownbox"><span @click='quit()'>退出</span></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

      </span>

    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>


export default{
  name: 'index',
  methods:{
    quit(){
      localStorage.removeItem('eleToken')
      this.$router.go('/login')
    }
  },
  components: {
    
  }
}

</script>
<style scoped>
  a{
    text-decoration: none;
  }
  .container{
    width: 100%;
    height: 100%;
  }
.navbar{
  position: fixed;
  top: 0;
  width: 100%;
  height: 10%;
  font-size: 1.5rem;
  font-weight: 800;
  font-family: serif;
  background-color: #b598a1;
  color: antiquewhite;
}
.logo{
  color: wheat;
  font-size: 2rem;
  font-weight: bolder;
  font-family: monospace;
  float: left;
  margin-left: 3rem;
  line-height: 4rem;
  letter-spacing: 0.5rem;
  cursor:pointer;
}
.router{
  float: right;
}
label{
  display: inline-block;
  width: 10rem;
  height: 100%;
  border-radius: 0.3rem;
  line-height: 4rem;
}
label:hover{
  color: #ed2f6a;
}
.current{
  background: #4b1e2f;
}
.main{
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 90%;
}
.el-dropdown-link {
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 800;
    font-family: serif;
    color: antiquewhite;
  }
  .el-icon-arrow-down {
    font-size: 12px;
    font-family: 仿宋;
  }
.dropdown{
  width: 10rem;
  height: 100%;
  line-height: 4rem;
  position: relative;

}
.dropdownbox{
  width: 10rem;
  text-align: center;
}

</style>