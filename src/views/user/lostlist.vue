<template>
  <div class="lostlist">
    <div class="table">
      <el-table
          :data="tableData"
          height='90%'
          max-height="90%"
          border
          style="width: 100%"
          >
          <el-table-column
            type="index"
            label="序号"
            width="50"
            align='center'>
          </el-table-column>
  
          <el-table-column
            prop="itemname"
            label="物品名"
            width="100"
            align='center'>
          </el-table-column>
  
          <el-table-column
            prop="date"
            label="日期"
            width="220"
            align='center'>
          </el-table-column>
          
          <el-table-column
            prop="place"
            label="地点"
            width="100"
            align='center'>
          </el-table-column>
  
          <el-table-column
            prop="sketch"
            label="简述"
            width="180"
            align='center'>
          </el-table-column>
  
          <el-table-column
            prop="phone"
            label="联系方式"
            width="180"
            align='center'>
          </el-table-column>

          <el-table-column
            label="操作"
            fixed="right"
            width="100"
            align='center'>
            <template slot-scope="scope">
              <el-button type="danger" plain @click="delitem(scope.row)">删除</el-button>
              
            </template>

           
          </el-table-column>
        </el-table>
    </div>

  </div>
</template>
<script>
  export default{
    name: 'lostlist',
    data(){
      return{
        tableData:[]
      }
    },
    methods:{
      getlitems(){
        this.$axios.get('/api/get/getlitems')
                    .then(res=>{
                      if(res.data.success==false){
                        this.$message({
                          message: '获取信息失败！',
                          type: 'error'
                        })
                      }else{
                        this.tableData = res.data
                      }
                    })
      },
      delitem(item){

        this.$axios.delete(`/api/items/ldelete/${item._id}`)
                    .then(res=>{
                      if(res.data.success==false){
                        this.$message({
                          message: '删除失败！',
                          type: 'error'
                        })
                      }else if(res.data.success==true){
                        this.$message({
                          message: '删除成功！',
                          type: 'success'
                        })
                        this.getlitems()
                      }
                    })
                    .catch(err=>console.log(err))
      }
    },
    created(){
      this.getlitems()
    },
    component: {

    }
  }
</script>
<style scoped>
  .lostlist{
    width: 100%;
    height: 100%;
    background-color: whitesmoke;
  }
  .table{
    width: 95%;
    height: 90%;
    position: relative;
    margin: 0 auto;
    top: 10%;
  }
</style>