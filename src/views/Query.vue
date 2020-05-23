<template>
  <div class="lostquery">
    
      <el-form :inline="true" :model="lostform" class="demo-form-inline lostform">
        <el-select v-model="type" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-form-item label="物品名称">
          <el-input v-model="lostform.itemname" placeholder="请输入物品名称"></el-input>
        </el-form-item>

        <el-form-item label="地点">
          <el-input v-model="lostform.place" placeholder="请输入地点"></el-input>
        </el-form-item>

        <el-form-item label="时间">
              <el-date-picker type="date" placeholder="选择日期" v-model="lostform.date"></el-date-picker>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>

      </el-form>

      <el-table
        v-if='lshow'
        :data="tableDatal"
        height='80%'
        max-height="80%"
        border
        style="width: 100%">
        <el-table-column
          type="index"
          label="序号"
          width="180"
          align='center'>
        </el-table-column>

        <el-table-column
          prop="itemname"
          label="物品名"
          width="180"
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
          width="180"
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
      </el-table>


      <el-table
        v-if='fshow'
        :data="tableDataf"
        height='80%'
        max-height="80%"
        border
        style="width: 100%">
        <el-table-column
          type="index"
          label="序号"
          width="180"
          align='center'>
        </el-table-column>

        <el-table-column
          prop="itemname"
          label="物品名"
          width="180"
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
          width="180"
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
      </el-table>





  </div>

</template>
<script>
export default{
  name: 'lostquery',
  data() {
      return {
        type: 'lostquery',
        lshow: true,
        fshow: false,
        options: [
          {label: 'lostquery',value: 'lostquery'},
          {label: 'foundquery',value: 'foundquery'}
        ],
        lostform: {
          itemname: '',
          place: '',
          date: ''
        },
        tableDatal: [],
        tableDataf: []
      }
    },
    methods: {
      onSubmit() {
        if(this.type==='lostquery'){
          this.$axios.post('/api/query/querylitems',this.lostform)
                    .then(res=>{
                      if(res.data.success==false){
                        this.$message({
                          message: '搜索失败！',
                          type: 'error'
                        })
                      }else{
                        this.lostform={
                          itemname: '',
                          place: '',
                          date: ''}
                        this.tableDatal = res.data
                        this.fshow = false
                        this.lshow = true
                      }
                    })
        }else if(this.type==='foundquery'){
          this.$axios.post('/api/query/queryfitems',this.foundform)
                    .then(res=>{
                      if(res.data.success==false){
                        this.$message({
                          message: '搜索失败！',
                          type: 'error'
                        })
                      }else{
                        this.foundform={
                          itemname: '',
                          place: '',
                          date: ''}
                        this.tableDataf = res.data
                        this.lshow = false
                        this.fshow = true
                      }
                    })
        }


        
      }
    },
  components: {

  }
}

</script>
<style scoped>
  
.lostquery{
  width: 100%;
  height: 100%;
  background-color: whitesmoke;
  padding: 2rem;
  
}
.lostform{
  width: 100%;
  margin: 0 auto;

}





</style>