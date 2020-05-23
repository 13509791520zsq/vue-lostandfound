<template>
  <div class="lost" lazy>
    <div class="container">

      <div class="items" v-for="item in lostitems">
        <!-- <div class="img">
          <img :src="item.image">
        </div> -->
        <div class="top-text">
          <div class="name">{{item.itemname}}</div>
        </div>
        <div class="bottom-text">
          <div class="itemsketch">{{item.sketch}}</div>
          <div class="itemplace">遗失地点： {{item.place}}</div>
          <div class="itemdate">遗失时间： {{item.date}}</div>
          <div class="itemphone">联系电话： {{item.phone}}</div>
        </div>
        <div class="del" :v-if="isroot">
          <el-button
          type="danger"
          icon="el-icon-delete"
          circle
          size='mini'
          @click='delitems(item)'></el-button>
        </div>
      </div>


    </div>

  </div>
</template>
<script>
export default{
  name: 'lost',
  data(){
    return{
      lostitems: [
      ]

    }
  },
  methods:{
    getlostinfo(){
      this.$axios.get('/api/get/getalllitems')
                 .then(res=>{
                  //  console.log(res.data)
                  this.lostitems = res.data
                 })
                 .catch(err=>console.log(err))
    },
    delitems(item){
      this.$axios.delete(`/api/items/ldelete/${item._id}`)
                  .then(res=>{
                    if(res.data.success==true){
                      this.$message({
                        message: '删除成功！',
                        type: 'success'
                      })
                      this.getlostinfo()
                    }
                  })
                  .catch(err=>console.log(err))
    }
  },
  computed: {
    isroot(){
      return this.$store.getters.user.identity=='root'
    }
  },
  created(){
    this.getlostinfo()
  }
}

</script>
<style scoped>

.lost{
width: 100%;
height: 100%;
text-align: center;
}
.container{
  width: 100%;
  height: 100%;
  padding-top: 1rem;
  overflow: scroll;
  background-color: white;
}


.items{
  border: 1px solid #20894d;
  width: 80%;
  height: auto;
  margin: 0.5rem auto;
  border-radius: 0.5rem;
  background-color: #f2e6ce;
  overflow: auto;
}
.items .top-text{
  width: 100%;
  height: 2rem;
  /* background-color: lightblue; */
  background-color: #b598a1;
  padding-left: 2rem;
}
.items .top-text .name{
  font-weight: bolder;
  font-size: larger;
  text-align: left;
  line-height: 2rem;
}
.bottom-text{
  padding: 1rem;
}
.bottom-text .itemsketch{
  text-align: left;
}
.bottom-text .itemplace{
  text-align: left;
  font-size: small;
}
.bottom-text .itemdate{
  text-align: left;
  font-size: small;
}
.bottom-text .itemphone{
  text-align: left;
  font-size: small;
}
.del{
  float: right;
  margin-right: 1rem;
  margin-bottom: 0.5rem;
}
::-webkit-scrollbar {
  width: 10px;
  height: 0;
}
::-webkit-scrollbar-track{
-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
background-color: rosybrown;
border-radius: 3px;
}
::-webkit-scrollbar-thumb{
border-radius: 7px;
-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
background-color: #E8E8E8;
}
/*定义两端按钮的样式*/
::-webkit-scrollbar-button {
display: none;
}
/*定义右下角汇合处的样式*/
::-webkit-scrollbar-corner {
background:khaki;
}
</style>