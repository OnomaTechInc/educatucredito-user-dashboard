import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Profile from '@/components/Profile'
import Files from '@/components/Files'
import Videos from '@/components/Videos'
import Login from '@/components/Login'
import ForgotPassword from '@/components/ForgotPassword'
import Register from '@/components/Register'
import PageNotFound from '@/components/404'
import Oauth2callback from '@/components/Oauth2callback'
import MyAccount2 from '@/components/MyAccount'
import Agents from '@/components/Agents'

Vue.use(Router)

function requireAuth (to, from, next) {
  var authenticated = localStorage.getItem('session')
  if (authenticated === null) {
    next({
      path: '/user/login',
      query: {
        redirect: to.fullPath
      }
    })
  } else {
    next()
  }
}

export default new Router({
  mode: 'history',
  routes: [{
    path: '/user/login',
    name: 'Login',
    component: Login,
    meta: {
      plainLayout: true
    }
  },
  {
    path: '/user/register',
    name: 'Register',
    component: Register,
    meta: {
      plainLayout: true
    }
  },
  {
    path: '/user/forgotpassword',
    name: 'ForgotPassword',
    component: ForgotPassword,
    meta: {
      plainLayout: true
    }
  },
  {
    path: '/user/logout',
    name: 'Logout',
    component: Login,
    meta: {
      plainLayout: true
    }
  },
  {
    path: '/user/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter: requireAuth
  },
  {
    path: '/user',
    name: 'Home',
    component: Dashboard,
    beforeEnter: requireAuth
  },
  {
    path: '/user/oauth2callback',
    name: 'Oauth2callbackk',
    component: Oauth2callback,
    beforeEnter: requireAuth
  },
  {
    path: '/user/myaccount',
    name: 'MyAccount',
    component: MyAccount2,
    beforeEnter: requireAuth
  },
  {
    path: '/user/agents',
    name: 'Agents',
    component: Agents,
    beforeEnter: requireAuth
  },
  {
    path: '/user/profile',
    name: 'Profile',
    component: Profile,
    beforeEnter: requireAuth
  },
  {
    path: '/user/files',
    name: 'Files',
    component: Files,
    beforeEnter: requireAuth
  },
  {
    path: '/user/videos',
    name: 'Videos',
    component: Videos,
    beforeEnter: requireAuth
  },
  {
    path: '/user/*',
    name: 'PageNotFound',
    component: PageNotFound
  }
  ]
})
