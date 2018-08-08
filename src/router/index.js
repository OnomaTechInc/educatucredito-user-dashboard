import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Profile from '@/components/Profile'
import Files from '@/components/Files'
import Videos from '@/components/Videos'
import Login from '@/components/Login'
import Register from '@/components/Register'
import PageNotFound from '@/components/404'

Vue.use(Router)

function requireAuth (to, from, next) {
  var authenticated = localStorage.getItem('session')
  if (authenticated === null) {
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
  mode: 'hash',
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
