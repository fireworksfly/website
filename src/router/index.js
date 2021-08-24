import { createRouter, createWebHistory } from 'vue-router'
import Home from "views/home/Home";
import CateGory from "views/category/CateGory";
import Profile from "views/profile/Profile";
import shopCart from "views/shopcart/shopCart";
const routes = [
  {
    path: '',
    component: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: CateGory
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/shopcart',
    component: shopCart
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
