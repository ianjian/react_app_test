import Routes from './router.config';
import { defineConfig } from 'umi';  // 配置文件，包含 umi 内置功能和插件的配置。

const { APP_TYPE, } = process.env;
const plugin = [
  'umi-plugin-react',
  {
    antd: true,
    dva: {
      hmr: true,  // 表示是否启用 dva model 的热更新。
    },
    locale: {
      enable: true,
      default: 'en-US',
      baseNavigator: false,
    },
  },
];

export default defineConfig({
  define: {  // 用于提供给代码中可用的变量。
    APP_TYPE: APP_TYPE || '',
      'process.env.baseApi': 'http://ianjian.top:5000/baseapi',  // ?
  },
  mock: false,
  routes: Routes,  // umi 的路由基于 react-router@5 实现，配置和 react-router 基本一致，详见路由配置章节。
  theme: {  // 配置主题，实际上是配 less 变量。https://3x.ant.design/docs/react/customize-theme-cn
    '@primary-color': '#ff2d74',
  },
  hash: true,  // 配置是否让生成的文件包含 hash 后缀，通常用于增量发布和避免浏览器加载缓存。
  // cssLoaderOptions: {  // https://github.com/webpack-contrib/css-loader#options ???不懂(＠_＠;)
  // },
  nodeModulesTransform: {
    type: 'none',
  },
});
