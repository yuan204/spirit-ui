# Layout 布局容器
容器布局，可快速搭建页面的基本结构


 `<s-container>` : 布局容器,
 当里面包含`<s-header>`或者`<s-footer>`竖直排列,否则水平排列。里面可以放置`<s-header>`,`<s-aside>`,`<s-main>`,`<s-footer>`,`<s-container>`
 
 `<s-header>` : 顶部布局,只能放在`<s-container>`中
 
 `<s-aside>` : 侧边栏,只能放在`<s-container>`中
 
 `<s-main>` : 内容部分,只能放在`<s-container>`中
 
`<s-footer>` : 底部布局,只能放在`<s-container>`中


<ClientOnly>
<layout-demo></layout-demo>
</ClientOnly>
