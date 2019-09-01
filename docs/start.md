# 快速上手
## 安装
```bash
npm install spirit-ui
或者
yarn add spirit-ui
```

## 使用
在用npm或者yarn安装好之后,一般在webpack入口页面main.js中如下配置：
```js
import Vue from 'vue'
import App from './App.vue'
import Spirit from 'spirit-ui';
import 'spirit-ui/dist/spirit-ui.css';
Vue.config.productionTip = false
Vue.use(Spirit)

new Vue({
  render: h => h(App),
}).$mount('#app')
```
