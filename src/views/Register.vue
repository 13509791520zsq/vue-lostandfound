<template>
  <div class="register">
    <label>Register</label>
    <el-form :model="registerform" :rules="rules2" ref="registerform" label-width="100px" class="demo-ruleForm formdiv">

      <el-form-item label="email" prop='email' style="max-width: 20rem;">
        <el-input type='email' v-model="registerform.email"  placeholder='请输入邮箱'></el-input>
      </el-form-item>

      <el-form-item label="username" prop='username' style="max-width: 20rem;">
        <el-input v-model="registerform.username" placeholder='请输入用户名'></el-input>
      </el-form-item>

      <el-form-item label="password" prop='password' style="max-width: 20rem;">
        <el-input v-model="registerform.password" type="password" placeholder='请输入密码'></el-input>
      </el-form-item>

      <el-form-item label="password" prop='password2' style="max-width: 20rem;">
        <el-input v-model="registerform.password2" type="password" placeholder='请确认密码'></el-input>
      </el-form-item>

      <el-form-item class="btn">
        <el-button type="primary" @click="submitForm('registerform')">Register</el-button>
        <el-button @click="resetForm('registerform')">  Reset  </el-button>
      </el-form-item>
      <p class="bottomtext">已有帐号？现在<router-link to="/login">登录</router-link></p>

    </el-form>
    <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="2"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="repulse"
        class="lizibg"
      >
      </vue-particles>
  </div>
  
  </template>
  <script>
  export default {
    name: 'register',
    data(){
      var validatePass2 = (rule, value, callback) => {
        if (value !== this.registerform.password) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      }
      return{
        registerform: {
          email: '',
          username: '',
          password: '',
          password2: ''
        },
        rules2: {
            email: [
              { required: true, message: '请输入邮箱', trigger: 'blur' },
              { type: 'email', message: '邮箱格式有误', trigger: 'blur' }
            ],
            username: [
              { required: true, message: '请输入用户名', trigger: 'blur' },
              { min: 3, max: 16, message: '长度在 3 到 16 个字符', trigger: 'blur' }
            ],
            password: [
              { required: true, message: '请输入密码', trigger: 'blur' },
              { min: 3, max: 16, message: '长度在 3 到 16 个字符', trigger: 'blur' }
            ],
            password2: [
              { required: true, message: '请输入密码', trigger: 'blur' },
              { min: 3, max: 16, message: '长度在 3 到 16 个字符', trigger: 'blur' },
              { validator: validatePass2, trigger: 'blur'}
            ]
        }
      }
    },
    methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              this.$axios.post('/api/users/register',this.registerform)
                         .then(res=>{
                            this.$message({
                              type: 'success',
                              message: '注册成功！'
                            })
                            this.$router.push('/login')
                         })
                         .catch(err=>console.log(err))
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        },
        linktologin(){
          this.$router.push('/new/login')
        }
    },
    components: {

    }

  }
  </script>

  <style scoped>
  .register{
    width: 100%;
    height: 100%;
    /* background: url("../../public/images/p1.jpg") no-repeat; */
    /* background-size: cover; */
  }
  label{
  color: darkcyan;
  font-size: 4rem;
  font-weight: bolder;
  display: block;
  width: 15rem;
  height: 5rem;
  margin: 0 auto;
  position: relative;
  top: 10%;
}
  .formdiv{
    width: 30%;
    height: auto;
    margin: 0 auto;
    position: relative;
    top: 40%;
    transform: translateY(-50%);
    padding: 2rem;
    background-color: rgba(229, 240, 217, 0.7);
    border-radius: 1rem;
    box-shadow: 0px 0px 5px 5px rgb(75, 73, 77);
  }
  .bottomtext{
    float: right;
    font-size: small;
    
  }
  a{
    text-decoration: none;
  }
  .lizibg{
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-image: url('../assets/loginbg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
  </style>