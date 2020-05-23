<template>
  <div class="letterupload">
    <el-form :model="letter" :rules="rules" ref="letter" label-width="4rem" class="demo-ruleForm infoform">
      

      <el-form-item label="标题" prop="title" size='middle' class="formtext">
        <el-input  v-model="letter.title"></el-input>
      </el-form-item>

      <el-form-item label="正文" prop="body" size='middle'  class="formtext letterbody">
        <el-input type='textarea' v-model="letter.body" :rows='5'></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('letter')">立即发表</el-button>
        <el-button @click="resetForm('letter')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default{
  name: 'letterupload',
  data(){
    return{
      letter: {
        title: '',
        body: '',
        date: '',
        userid: this.$store.getters.user.id
      },
      rules: {
        title: [
          { required: true, message: '请输入标题', trigger: 'blur' }
        ],
        body: [
          { required: true, message: '请输入正文', trigger: 'blur' }
        ]

      }
    }
  },
  methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$axios.post('/api/letters/uploadletters/',this.letter)
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
.letterupload{
  width: 100%;
  height: 100%;
  background-color: whitesmoke;
  padding-top: 2rem;
}
.infoform{
  width: 80%;
  height: 80%;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 1rem;
  border: lightblue 2px solid;
  background-color: white;
}

.formtext{
  width: 80%;
  margin: 1rem auto;
}
.letterbody{
  height: 10rem;
}

</style>