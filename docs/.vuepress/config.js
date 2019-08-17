module.exports = {
    title: 'Spirit UI',
    base: '/spirit-ui/',
    description: '一个基于vue的ui组件库',
    themeConfig: {
        sidebar: [
            {
                title: "入门",
                collapse: false,
                children:[
                    "/install",
                    "/start"
                ]
            },
            {
                title: "组件",
                collapse: false,
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
