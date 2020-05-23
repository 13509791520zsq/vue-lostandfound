<template>
  <div class="list">
    <div class="leftmenu">
      <el-menu
      default-active='/lost'
      background-color='#363433'
      text-color='#fff'
      class="el-menu-vertical-demo elmenu"
      router
      >

      <el-menu-item index="/lost">
        <i class="el-icon-menu"></i>
        <span slot="title">lost</span>
      </el-menu-item>
      <el-menu-item index="/found">
        <i class="el-icon-menu"></i>
        <span slot="title">found</span>
      </el-menu-item>
      <el-menu-item index="/thanksletter">
        <i class="el-icon-menu"></i>
        <span slot="title">thanksletter</span>
      </el-menu-item>
      <el-menu-item index="/letterupload">
        <i class="el-icon-menu"></i>
        <span slot="title">letterupload</span>
      </el-menu-item>
    </el-menu>
    </div>

    <div class="showbox">
      <router-view></router-view>
    </div>

  </div>
</template>
<script>
export default{
  name: 'list',
  components: {}
}

</script>
<style scoped>
.list{
  width: 80%;
  height: 100%;
  margin: 0 auto;
  
}
.list .leftmenu{
  width: 20%;
  height: 100%;
  float: left;
 
}
.elmenu{
  width: 100%;
  height: 100%;

}
.showbox{
  float: left;
  width: 70%;
  height: 100%;

}
</style>