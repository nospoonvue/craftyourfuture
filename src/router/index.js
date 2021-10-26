import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import Blog from '../views/Blog.vue'
import Knowledgebase from '../views/Knowledgebase.vue'
import Login from '../views/Login.vue'
import Courses from '../views/Courses.vue'
import Course from '../views/Course.vue'
import Discover from '../views/Discover.vue'
import Tools from '../views/Tools.vue'
import Teacher from '../views/Teacher.vue'
import Alliance from '../views/Alliance.vue'



Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/discover',
    name: 'Discover',
    component: Discover
    },
  {
  path: '/projects',
  name: 'Projects',
  component: Projects
  },
  {
  path: '/blog',
  name: 'Blog',
  component: Blog
  },
  {
    path: '/knowledgebase',
    name: 'Knowledgebase',
    component: Knowledgebase
    },
    {
      path: '/tools',
      name: 'Tools',
      component: Tools
      },
      {
        path: '/teacher',
        name: 'Teacher',
        component: Teacher
        },      
        {
          path: '/alliance',
          name: 'Alliance',
          component: Alliance
          },   
  {
  path: '/login',
  name: 'Login',
  component: Login
  },
  {
  path: '/courses',
  name: 'Courses',
  component: Courses
  },
  {
  path: '/course/:name',
  name: 'Course',
  props: true,
  component: Course
  }
]

const router = new VueRouter({

  routes
})
//  mode: "history",
export default router
