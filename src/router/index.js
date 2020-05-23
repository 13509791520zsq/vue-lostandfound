import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Index from '../views/Index.vue'

import Query from '../views/Query.vue'

import InfoUpload from '../views/InfoUpload.vue'

import List from '../views/list.vue'
import Lost from '../views/Lost.vue'
import Found from '../views/Found.vue'
import ThanksLetter from '../views/thanksletter.vue'
import LetterUpload from '../views/letterupload.vue';

import SelfInfo from '../views/SelfInfo.vue'
import LostList from '../views/user/lostlist.vue'
import FoundList from '../views/user/foundlist.vue'
import MainInfo from '../views/user/maininfo.vue'
import UserInfo from'../views/user/userinfo.vue'
import MyLetters from '../views/user/myletters.vue';

import NotFound from '../views/404.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect: '/lost'
  },
  {
    path: '/index',
    name: 'index',
    component: Index,
    children: [
      {  path: '',  name: 'list',  component: List },
      {  path: '/infoupload',  name: 'infoupload',  component: InfoUpload },
      {  path: '/list',
         name: 'list',
         component: List,
         children: [
          {  path: '',  name: 'lost',  component: Lost },
          {  path: '/lost',  name: 'lost',  component: Lost },
          {  path: '/found',  name: 'found',  component: Found },
          {  path: '/thanksletter',  name: 'thanksletter',  component: ThanksLetter },
          {  path: '/letterupload',  name: 'letterupload',  component: LetterUpload },
        ]
      },
      {  path: '/query',  name: 'query',  component: Query },
      {   path: '/selfinfo',
          name: 'selfinfo',
          component: SelfInfo,
          children: [
            {  path: '',  name: 'userinfo',  component: UserInfo },
            {  path: '/lostlist',  name: 'lostlist',  component: LostList },
            {  path: '/foundlist',  name: 'foundlist',  component: FoundList },
            {  path: '/maininfo',  name: 'maininfo',  component: MainInfo },
            {  path: '/userinfo',  name: 'userinfo',  component: UserInfo },
            {  path: '/myletters',  name: 'myletters',  component: MyLetters }
          ]
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },{
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '*',
    name: '404',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/new/',
  routes
})
router.beforeEach((to,from,next)=>{
  const isLogin = localStorage.eleToken? true : false
  if(to.path == '/login' || to.path == '/register'){
    next()
  }else{
    isLogin? next() : next('/login')
  }
})

export default router
