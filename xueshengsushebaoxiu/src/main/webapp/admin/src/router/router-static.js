import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

     import users from '@/views/modules/users/list'
    import dictionary from '@/views/modules/dictionary/list'
    import gonggao from '@/views/modules/gonggao/list'
    import guzhangshangbao from '@/views/modules/guzhangshangbao/list'
    import sushe from '@/views/modules/sushe/list'
    import susheRen from '@/views/modules/susheRen/list'
    import weixiuyuan from '@/views/modules/weixiuyuan/list'
    import xuesheng from '@/views/modules/xuesheng/list'
    import dictionaryDanyuan from '@/views/modules/dictionaryDanyuan/list'
    import dictionaryGonggao from '@/views/modules/dictionaryGonggao/list'
    import dictionaryGuzhangshangbao from '@/views/modules/dictionaryGuzhangshangbao/list'
    import dictionaryLoudong from '@/views/modules/dictionaryLoudong/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryWeixiuzhuangtai from '@/views/modules/dictionaryWeixiuzhuangtai/list'
    import dictionaryWupin from '@/views/modules/dictionaryWupin/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
    ,{
        path: '/dictionaryDanyuan',
        name: '单元',
        component: dictionaryDanyuan
    }
    ,{
        path: '/dictionaryGonggao',
        name: '公告类型',
        component: dictionaryGonggao
    }
    ,{
        path: '/dictionaryGuzhangshangbao',
        name: '故障分类',
        component: dictionaryGuzhangshangbao
    }
    ,{
        path: '/dictionaryLoudong',
        name: '楼栋',
        component: dictionaryLoudong
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryWeixiuzhuangtai',
        name: '维修状态',
        component: dictionaryWeixiuzhuangtai
    }
    ,{
        path: '/dictionaryWupin',
        name: '物品分类',
        component: dictionaryWupin
    }


    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/gonggao',
        name: '公告',
        component: gonggao
      }
    ,{
        path: '/guzhangshangbao',
        name: '故障上报',
        component: guzhangshangbao
      }
    ,{
        path: '/sushe',
        name: '宿舍',
        component: sushe
      }
    ,{
        path: '/susheRen',
        name: '宿舍人员',
        component: susheRen
      }
    ,{
        path: '/weixiuyuan',
        name: '维修人员',
        component: weixiuyuan
      }
    ,{
        path: '/xuesheng',
        name: '学生',
        component: xuesheng
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
