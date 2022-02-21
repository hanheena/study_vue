import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
//import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // {
  //   path: '/',
  //   name: 'about',
  //   component: AboutView
  // },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited. 방문하는 순간 컴포넌트 로드
    // 캐시에에 저장되어 있다가 사용자가 불러올 시 가지고 옴, 오히려 너무 많이 사용할 시 속도 저하됨
    component: () => import( /* webpackChunkName: "about" */ '../views/AboutView.vue') 
  },
  {
    path: '/contact',
    name: 'Contact',
    //처음에 뷰 프로젝트가 로딩이 될 때 캐시에 올라오게 따로 처리함 => vue.config 설정 파일에서 webpackPrefetch가 꺼져있어도
    component: () => import( /* webpackChunkName: "contact", webpackPrefetch:true */ ContactView) 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
