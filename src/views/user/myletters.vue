<template>
  <div class="myletters">
    <div class="table">
      <el-table
          :data="tableData"
          height='90%'
          max-height="90%"
          border
          :header-cell-style="{background:'#eef1f6',color:'#606266'}"
          style="width: 100%"
          >
          <el-table-column
            type="index"
            label="序号"
            width="200"
            align='center'>
          </el-table-column>
  
          <el-table-column
            prop="title"
            label="标题"
            width="200"
            align='center'>
          </el-table-column>
          <el-table-column
          prop="body"
          label="正文"
          width="500"
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
    name: 'myletters',
    data(){
      return{
        tableData:[]
      }
    },
    methods:{
      getletters(){
        this.$axios.get('/api/letters/getmyletters')
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

        this.$axios.delete(`/api/letters/deleteletter/${item._id}`)
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
                        this.getletters()
                      }
                    })
                    .catch(err=>console.log(err))
      }
    },
    created(){
      this.getletters()
    },
    component: {

    }
  }
</script>
<style scoped>
  .myletters{
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
  el-table::-webkit-scrollbar {
  width: 10px;
  height: 0;
}
el-table::-webkit-scrollbar-track{
-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
background-color: rosybrown;
border-radius: 3px;
}
el-table::-webkit-scrollbar-thumb{
border-radius: 7px;
-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
background-color: #E8E8E8;
}
/*定义两端按钮的样式*/
el-table::-webkit-scrollbar-button {
display: none;
}
/*定义右下角汇合处的样式*/
el-table::-webkit-scrollbar-corner {
background:khaki;
}
</style>