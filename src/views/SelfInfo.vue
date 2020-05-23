<template>
  <div class="selfinfo">
          <el-menu
            background-color='#363433'
            text-color='#fff'
            class="el-menu-vertical-demo menu"
            router>
            <el-menu-item index="/lostlist">
              <i class="el-icon-menu"></i>
              <span slot="title">lostlist</span>
            </el-menu-item>
            <el-menu-item index="/foundlist">
              <i class="el-icon-menu"></i>
              <span slot="title">foundlist</span>
            </el-menu-item>
            
            <el-menu-item index="/myletters">
              <i class="el-icon-menu"></i>
              <span slot="title">myletters</span>
            </el-menu-item>
            <el-menu-item index="/maininfo">
              <i class="el-icon-menu"></i>
              <span slot="title">maininfo</span>
            </el-menu-item>
            <el-menu-item index="/userinfo" :v-if='isroot'>
              <i class="el-icon-menu"></i>
              <span slot="title">userinfo</span>
            </el-menu-item>
            

          </el-menu>
        <div class="showarea">
          <router-view></router-view>
        </div>
  </div>
</template>
<script>
export default{
  name: 'selfinfo',
  components: [],
  computed:{
    isroot(){
      return this.$store.getters.user.identity=='root'
    }
  }

}
</script>
<style scoped>
  *{
    box-sizing: border-box;
  }
.selfinfo{
  width: 100%;
  height: 100%;
}

.menu{
  float: left;
  width: 20%;
  height: 100%;
}
.showarea{
  float: right;
  width: 80%;
  height: 100%;
}

</style>