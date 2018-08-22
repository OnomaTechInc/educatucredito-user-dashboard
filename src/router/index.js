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
  if (authenticated === null || authenticated === '[]') {
    next({
      path: '/login',
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
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      plainLayout: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      plainLayout: true
    }
  },
  {
    path: '/forgotpassword',
    name: 'ForgotPassword',
    component: ForgotPassword,
    meta: {
      plainLayout: true
    }
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Login,
    meta: {
      plainLayout: true
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter: requireAuth
  },
  {
    path: '/',
    name: 'Home',
    component: Dashboard,
    beforeEnter: requireAuth
  },
  {
    path: '/oauth2callback',
    name: 'Oauth2callbackk',
    component: Oauth2callback,
    beforeEnter: requireAuth
  },
  {
    path: '/myaccount',
    name: 'MyAccount',
    component: MyAccount2,
    beforeEnter: requireAuth
  },
  {
    path: '/agents',
    name: 'Agents',
    component: Agents,
    beforeEnter: requireAuth
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    beforeEnter: requireAuth
  },
  {
    path: '/files',
    name: 'Files',
    component: Files,
    beforeEnter: requireAuth
  },
  {
    path: '/videos',
    name: 'Videos',
    component: Videos,
    beforeEnter: requireAuth
  },
  {
    path: '*',
    name: 'PageNotFound',
    component: PageNotFound
  }
  ]
})
