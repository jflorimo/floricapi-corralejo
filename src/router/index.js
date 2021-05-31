import Vue from 'vue'
import Router from 'vue-router'

// Containers
const TheContainer = () => import('@/containers/TheContainer')

// Main Pages
const Dashboard = () => import('@/views/Dashboard')
const Index = () => import('@/views/Index')
const Stock = () => import('@/views/Stock')
const Crypto = () => import('@/views/Crypto')

// Other Pages
const Page404 = () => import('@/views/Page404')
const Page500 = () => import('@/views/Page500')
const Login = () => import('@/views/Login')
const Register = () => import('@/views/Register')

Vue.use(Router)

export default new Router({
  mode: 'history', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})

function configRoutes () {
  return [
    {
      path: '/',
      redirect: '/',
      name: 'Home',
      component: TheContainer,
      children: [
        {
          path: '',
          name: 'Dashboard',
          component: Dashboard,
          meta: {
            title: 'Flocapi'
          }
        },
        {
          path: '/index/',
          name: 'Index',
          component: Index
        },
        {
          path: '/stock/',
          name: 'Stock',
          component: Stock
        },
        {
          path: '/cryptocurrency/',
          name: 'Crypto',
          component: Crypto
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: 'Page404',
          component: Page404
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500
        },
        {
          path: 'login',
          name: 'Login',
          component: Login
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        }
      ]
    }
  ]
}

