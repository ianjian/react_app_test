export default [
  // user 登录页面的布局？
  // {
  //   path: '/user',
  //   component: '../layouts/userLayout',
  //   resCode: 'user',
  //   routes: [
  //     {
  //       path: '/user',
  //       redirect: '/user/login',
  //     },
  //     {
  //       path: '/user/login',
  //       name: 'login',
  //       component: './user/login',
  //     },
  //     {
  //       path: '/user/register',
  //       name: 'register',
  //       component: './user/register',
  //     },
  //   ],
  // },
  // app
  {
    path: '/',
    component: '../pages/index',  // 除登录页面外，其他所有页面都有这个布局
    // Routes: ['src/pages/Authorized'],  // 不知道是干嘛的，认证？
    // routes: [
    //   {
    //     path: '/',
    //     name: 'home',
    //     component: './user/index',
    //   },
    // ],
  },
];
