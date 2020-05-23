<template>
  <div class="infoupload">
    <el-form :model="infoform" :rules="rules" ref="infoform" label-width="100px" class="demo-ruleForm infoform">
      <div class="formtype">
        <el-radio v-model="lorf" label="lost" border>lost</el-radio>
        <el-radio v-model="lorf" label="found" border>found</el-radio>
      </div>

      <el-form-item label="物品名称" prop="itemname" size='small' class="formtext">
        <el-input v-model="infoform.itemname"></el-input>
      </el-form-item>
      
      <el-form-item label="联系电话" prop="phone" size='small' class="formtext">
        <el-input v-model="infoform.phone"></el-input>
      </el-form-item>

      <el-form-item label="丢失地点" prop="place" size='small' class="formtext">
        <el-input v-model="infoform.place"></el-input>
      </el-form-item>

      <el-form-item label="时间" required size='small' class="formtext">
        <el-col :span="24">
          <el-form-item prop="date">
            <el-date-picker type="date" placeholder="选择日期" v-model="infoform.date" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      
      <el-form-item label="物品简述" prop="sketch" size='small' class="formtext">
        <el-input type="textarea" v-model="infoform.sketch"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('infoform')">立即上传</el-button>
        <el-button @click="resetForm('infoform')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default{
  name: 'infoupload',
  data(){
    return{
      infoform: {
        itemname: '',
        place: '',
        date: '',
        sketch: '',
        image: [],
        phone: ''
      },
      lorf:'lost',
      rules: {
        itemname: [
          { required: true, message: '请输入物品名称', trigger: 'blur' }
        ],
        place: [
          { required: true, message: '请输入大致丢失地点', trigger: 'blur' }
        ],
        date: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'blur' }
        ],
        sketch: [
          { required: true, message: '请输入物品的简要描述', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ]

      }
    }
  },
  methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            if(this.lorf=='lost'){
              this.$axios.post('/api/items/lupload/',this.infoform)
                        .then(res=>{
                          if(res.data.success){
                            this.$message({
                              type: 'success',
                              message: '上传成功！'
                            })
                          }else{
                            this.$message({
                              type: 'error',
                              message: '上传失败！'
                            })
                          }
                        })
                        .catch(err=>console.log(err))
            }else if(this.lorf=='found'){
              this.$axios.post('/api/items/fupload/',this.infoform)
                        .then(res=>{
                          if(res.data.success){
                            this.$message({
                              type: 'success',
                              message: '上传成功！'
                            })
                          }else{
                            this.$message({
                              type: 'error',
                              message: '上传失败！'
                            })
                          }
                        })
                        .catch(err=>console.log(err))
            }


          } else {
            console.log('error submit!!')
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
  },
  components: {

  }
}
</script>
<style scoped>
.infoupload{
  width: 100%;
  height: 100%;
  background-color: whitesmoke;
  padding-top: 2rem;
}
.infoform{
  width: 50%;
  height: 80%;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 1rem;
  border: lightblue 2px solid;
  background-color: white;
}
.formtype{
  margin-bottom: 1rem;
}
.formtext{
  width: 80%;
  margin: 1rem auto;
}
el-input{
  width: 50%;
}

</style>