import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component:()=>import('./components/login.vue'),
     },
     {
     path: '/login',
     component:()=>import('./components/login.vue'),
      },
      {
        path: '/main1',
        component:()=>import('./views/Main1.vue'),
        children:[
          {
            path: '/grxx',
            component:()=>import('./views/Grxx.vue'),
          },
          {
            path: '/main1',
            component:()=>import('./views/Home.vue'),
          },
          {
            path: '/passwordUp',
            component:()=>import('./views/PasswordUp.vue'),
          },
          {
            path: '/bmsz',
            component:()=>import('./views/Bmsz.vue'),
          },
          {
            path: '/ygzh',
            component:()=>import('./views/Ygzh.vue'),
          },
          {
            path: '/jsgl',
            component:()=>import('./views/Jsgl.vue'),
          },
          {
            path: '/shzl',
            component:()=>import('./views/Yhzl.vue'),
          },
          {
            path: '/dlrz',
            component:()=>import('./views/Dlrz.vue'),
          },
          {
            path: '/czrz',
            component:()=>import('./views/Czrz.vue'),
          },
          {
            path: '/ywxx',
            component:()=>import('./views/Ywxx.vue'),
          },
          {
            path: '/xtgg',
            component:()=>import('./views/Xtgg.vue'),
          },
          {
            path: '/sjgg',
            component:()=>import('./views/Sjgg.vue'),
          },
          {
            path: '/gmfw',
            component:()=>import('./views/Gmfw.vue'),
          },
        ]
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
        {
          path: '/supplieradd',
          component:()=>import('./views/Supplieradd.vue'),
        },
        {
          path: '/supplierUp',
          component:()=>import('./views/SupplierUp.vue'),
        },
        {
          path: '/supplierSee',
          component:()=>import('./views/SupplierSee.vue'),
        },
        {
          path: '/purchase',
          component:()=>import('./views/Purchase.vue'),
        },
        {
          path: '/purchaseadd',
          component:()=>import('./views/Purchaseadd.vue'),
        },
        {
          path: '/orderPromotion',
          component:()=>import('./views/OrderPromotion.vue'),
        },
        {
          path: '/orderPromotionAdd',
          component:()=>import('./views/OrderPromotionAdd.vue'),
        },
        {
          path: '/purchaseUp',
          component:()=>import('./views/PurchaseUp.vue'),
        },
        {
          path: '/purchaseSee',
          component:()=>import('./views/PurchaseSee.vue'),
        },
        {
          path: '/cgthd',
          component:()=>import('./views/Cgthd.vue'),
        },
        {
          path: '/cgthdAdd',
          component:()=>import('./views/CgthdAdd.vue'),
        },
        {
          path: '/cgthdUp',
          component:()=>import('./views/CgthdUp.vue'),
        },
        {
          path: '/cgthdSee',
          component:()=>import('./views/CgthdSee.vue'),
        },
        {
          path: '/sprk',
          component:()=>import('./views/Sprk.vue'),
        },
        {
          path: '/sprkSee',
          component:()=>import('./views/SprkSee.vue'),
        },
        {
          path: '/sprkadd',
          component:()=>import('./views/Sprkadd.vue'),
        },
        {
          path: '/sprkUp',
          component:()=>import('./views/SprkUp.vue'),
        },
        {
          path: '/kctb',
          component:()=>import('./views/Kctb.vue'),
        },
        {
          path: '/kctdadd',
          component:()=>import('./views/Kctdadd.vue'),
        },
        {
          path: '/kctbSee',
          component:()=>import('./views/KctbSee.vue'),
        },
        {
          path: '/kctbUp',
          component:()=>import('./views/KctbUp.vue'),
        },
        {
          path: '/spck',
          component:()=>import('./views/Spck.vue'),
        },
        {
          path: '/spckadd',
          component:()=>import('./views/Spckadd.vue'),
        },
        {
          path: '/spckSee',
          component:()=>import('./views/SpckSee.vue'),
        },
        {
          path: '/spckUp',
          component:()=>import('./views/SpckUp.vue'),
        },
        {
          path: '/kcpd',
          component:()=>import('./views/Kcpd.vue'),
        },
        {
          path: '/spkc',
          component:()=>import('./views/Spkc.vue'),
        },
        {
          path: '/spkcmx',
          component:()=>import('./views/Spkcmx.vue'),
        },
        {
          path: '/orderPromotionUp',
          component:()=>import('./views/OrderPromotionUp.vue'),
        },
        {
          path: '/orderPromotionSee',
          component:()=>import('./views/OrderPromotionSee.vue'),
        },
        {
          path: '/spcx',
          component:()=>import('./views/Spcx.vue'),
        },
        {
          path: '/zdxsd',
          component:()=>import('./views/Zdxsd.vue'),
        },
        {
          path: '/zdthd',
          component:()=>import('./views/Zdthd.vue'),
        },
        {
          path: '/scxsd',
          component:()=>import('./views/Scxsd.vue'),
        },
        {
          path: '/zdxsjymx',
          component:()=>import('./views/Zdxsjymx.vue'),
        },
        {
          path: '/zdcwsymx',
          component:()=>import('./views/Zdcwsymx.vue'),
        },
        {
          path: '/zdxsjyhz',
          component:()=>import('./views/Zdxsjyhz.vue'),
        },
        {
          path: '/zdcwsthz',
          component:()=>import('./views/Zdcwsthz.vue'),
        },
        {
          path: '/zdcwtkhz',
          component:()=>import('./views/Zdcwtkhz.vue'),
        },
        {
          path: '/zdxq',
          component:()=>import('./views/Zdxq.vue'),
        },
        {
          path: '/zdxq1',
          component:()=>import('./views/Zdxq1.vue'),
        },
        {
          path: '/zdxq2',
          component:()=>import('./views/Zdxq2.vue'),
        },
        {
          path: '/hylb',
          component:()=>import('./views/Hylb.vue'),
        },
        {
          path: '/hylbadd',
          component:()=>import('./views/Hylbadd.vue'),
        },
        {
          path: '/hyLb1',
          component:()=>import('./views/HyLb1.vue'),
        },
        {
          path: '/hyLb1add',
          component:()=>import('./views/HyLb1add.vue'),
        },
        {
          path: '/hyLb1See',
          component:()=>import('./views/HyLb1See.vue'),
        }, 
      ]
    },
  ]
})
