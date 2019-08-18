module.exports = {
    title: 'Spirit UI',
    base: '/spirit-ui/',
    description: '一个基于vue的ui组件库',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Github', link: 'https://github.com/gaolei11/spirit-ui' }
        ],
        sidebar: [
            {
                title: "入门",
                collapsable: false,
                children:[
                    "/start"
                ]
            },
            {
                title: "组件",
                collapsable: false,
                children: [
                    "/components/icon",
                    "/components/button",
                    "/components/cascader",
                    "/components/collapse",
                    "/components/layout",
                    "/components/form",
                    "/components/grid",
                    "/components/input",
                    "/components/message",
                    "/components/page",
                    "/components/tag",
                    "/components/select",
                    "/components/radio",
                    "/components/switch",
                    "/components/tabs",
                    "/components/upload"
                ]
            }
        ]

    }
}
