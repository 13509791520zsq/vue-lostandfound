<template>
  <div class="userinfo">
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
            prop="username"
            label="用户名"
            width="100"
            align='center'>
          </el-table-column>
  
          <el-table-column
            prop="email"
            label="email"
            width="220"
            align='center'>
          </el-table-column>

          <el-table-column
          prop="identity"
          label="identity"
          width="100"
          align='center'>
        </el-table-column>

          <el-table-column
            label="操作"
            fixed="right"
            width="200"
            align='center'>
            <template slot-scope="scope">
              <el-button type="warning" plain @click="privilege(scope.row)">提升权限</el-button>

              <el-button type="danger" plain @click="deleteuser(scope.row)">删除</el-button>

            </template>

          </el-table-column>
        </el-table>
    </div>


  </div>
</template>
<script>
  export default{
    name: 'userinfo',
    components:[],
    data(){
      return{
        tableData: []
      }
    },
    methods:{
      getuserinfo(){
        this.$axios.get('/api/users/getuser')
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
      deleteuser(item){

        this.$axios.delete(`/api/users/deleteuser/${item._id}`)
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
                        this.getuserinfo()
                      }
                    })
                    .catch(err=>console.log(err))
      },
      privilege(item){
        this.$axios.post('/api/users/privilege',{id: item._id})
                    .then(res=>{
                      if(res.data.success==true){
                        this.$message({
                          message: '提升权限成功',
                          type: 'success'
                        })
                        this.getuserinfo()
                      }
                    })
                    .catch(err=>console.log(err))
                    

      }
    },
    created(){
      this.getuserinfo()
    }
  }
</script>
<style scoped>
  .userinfo{
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