import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component:()=>import('./components/login.vue'),
     },
    {
      path:'/main',
      component:()=>import('./views/Main.vue'),
      children:[
        {
          path: '/category',
          component:()=>import('./views/Category.vue'),
        },
        {
          path: '/brand',
          component:()=>import('./views/Brand.vue'),
        },
        {
          path: '/main',
          component:()=>import('./views/Home.vue'),
        },
        {
          path: '/company',
          component:()=>import('./views/Company.vue'),
        },
        {
          path: '/home',
          component:()=>import('./views/Home.vue'),
        },
        {
          path: '/code',
          component:()=>import('./views/Code.vue'),
        },
        {
          path: '/archives',
          component:()=>import('./views/Archives.vue'),
        },
        {
          path: '/picture',
          component:()=>import('./views/Picture .vue'),
        },
        {
          path: '/archivesadd',
          component:()=>import('./views/Archivesadd.vue'),
        },
        {
          path: '/pictureadd',
          component:()=>import('./views/Pictureadd.vue'),
        },
        {
          path: '/archivesUp',
          component:()=>import('./views/ArchivesUp.vue'),
        },
        {
          path: '/pictureUp',
          component:()=>import('./views/PictureUp.vue'),
        },
        {
          path: '/pictureSees',
          component:()=>import('./views/PictureSee.vue'),
        },
        {
          path: '/supplier',
          component:()=>import('./views/Supplier.vue'),
        },
        
      ]
    }
  ]
})
