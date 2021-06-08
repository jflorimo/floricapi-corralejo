import Vue from 'vue'
import Router from 'vue-router'

// Containers
const TheContainer = () => import('@/containers/TheContainer')

// Main Pages
const Dashboard = () => import('@/views/Dashboard')
const Index = () => import('@/views/Index')
const Stock = () => import('@/views/Stock')
const Crypto = () => import('@/views/Crypto')
const CryptoAsset = () => import('@/views/CryptoAsset')


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
          component: Crypto,
        },
        {
          path: '/cryptocurrency/:fcid',
          name: 'CryptoAsset',
          component: CryptoAsset,
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
      path: '*',
      name: 'Error',
      component: Page404
    }
  ]
}

