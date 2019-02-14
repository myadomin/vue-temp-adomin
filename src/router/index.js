import VueRouter from 'vue-router'
const Home = () => import('@src/page/Home')
const Login = () => import('@src/page/Login')
const Welcome = () => import('@src/page/welcome/Welcome')
const Mock = () => import('@src/page/mock/Mock')

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/',
        component: Welcome
      },
      {
        path: '/mock',
        component: Mock
      }
    ]
  },
  {
    path: '/login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
