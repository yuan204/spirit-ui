
import VueHighlightJS from 'vue-highlight.js';
import css from 'highlight.js/lib/languages/css';
import javascript from 'highlight.js/lib/languages/javascript';
import vue from 'vue-highlight.js/lib/languages/vue';
import 'highlight.js/styles/atom-one-dark.css';
import MessagePlugin from "../../src/components/message";



// const datas = []
// helloworld.replace(/glyph-name="(\w+)"/g,function (match,p) {
//     datas.push(p)
// })
// console.log(datas);
//
// const file = new File([],"./icons/fonts/fontawesome-webfont.svg")
// const reader = new FileReader()
// reader.readAsText(file)
// reader.onload = function (data) {
//     console.log(this.result);
// }
// const fs = require("fs")
// console.log(fs);
// var data = fs.readFileSync('./icons/fonts/fontawesome-webfont.svg');
// console.log(data.match(/glyph-name="\w+"/g));

export default ({
                    Vue, // VuePress 正在使用的 Vue 构造函数
                    // options, // 附加到根实例的一些选项
                    // router, // 当前应用的路由实例
                    // siteData // 站点元数据
                }) => {
// ...做一些其他的应用级别的优化
    Vue.use(VueHighlightJS,{
        languages: {
            css,
            javascript,
            vue
        }
    })
    Vue.use(MessagePlugin)
}
