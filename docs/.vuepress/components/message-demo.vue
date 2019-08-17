<template>
    <div>
        <doc-feature :codes="code1" :js-codes="jsCode1">
            <template #title>
                基础用法
            </template>
            <template #description>
                消息提示,3s后消失
            </template>
            <template #component>
                <s-button @click="open">消息</s-button>
            </template>
        </doc-feature>
        <doc-feature :codes="code2" :js-codes="jsCode2">
            <template #title>
                提示类型
            </template>
            <template #description>
                显示成功、警告、消息、错误的不同提示状态
            </template>
            <template #component>
                <s-button  @click="open2">成功</s-button>
                <s-button  @click="open3">警告</s-button>
                <s-button  @click="open1">消息</s-button>
                <s-button  @click="open4">错误</s-button>
            </template>
        </doc-feature>
        <doc-feature :codes="code3" :js-codes="jsCode3">
            <template #title>
                可关闭
            </template>
            <template #description>
                showClose为true时点击关闭按钮时Message会关闭
            </template>
            <template #component>
                <s-button @click="openClose">手动关闭消息提示</s-button>
            </template>
        </doc-feature>
        <doc-feature :codes="code3" :js-codes="jsCode3">
            <template #title>
                支持 HTML
            </template>
            <template #description>
                将dangerouslyUseHTMLString属性设置为 true，message 就会被当作 HTML处理。
            </template>
            <template #component>
                <s-button @click="openHTML">html提示</s-button>
            </template>
        </doc-feature>
        <doc-feature :codes="code4" :js-codes="jsCode4">
            <template #title>
                自定义 Render 函数
            </template>
            <template #description>
                用渲染函数创造message的内容
            </template>
            <template #component>
                <s-button @click="renderFunc">render</s-button>
            </template>
        </doc-feature>
        <doc-spec :infos="items">
            <template #title>
                 Options
            </template>
        </doc-spec>

        <h2>API</h2>

        <ul class="api" style="list-style: disc;">
            <li>this.$message.info(options)</li>
            <li>this.$message.success(options)</li>
            <li>this.$message.warning(options)</li>
            <li>this.$message.error(options)</li>
        </ul>


    </div>
</template>

<script>
    import SButton from "../../../src/components/button/button";
    import DocFeature from "./common/feature";
    import DocSpec from "./common/spec";

    export default {
        name: "message-demo",
        components: {
            SButton,
            DocFeature,
            DocSpec
        },
        data() {
            return {
                code1: `<s-button @click="open">消息</s-button>`,
                jsCode1: `methods: {
    open() {
        this.$message.info({
            message: '这是一条消息提示'
        });
    },
}`,
                code2: `<s-button  @click="open2">成功</s-button>
                <s-button  @click="open3">警告</s-button>
                <s-button  @click="open1">消息</s-button>
                <s-button  @click="open4">错误</s-button>`,
                jsCode2: `methods: {
    open1() {
                this.$message({
                    showClose: true,
                    message: '这是一条消息提示'
                });
            },
            open2() {
                this.$message({
                    message: '恭喜你，这是一条成功消息',
                    type: 'success'
                });
            },

            open3() {
                this.$message({
                    message: '警告哦，这是一条警告消息',
                    type: 'warning'
                });
            },

            open4() {
                this.$message.error({
                    message: '错了哦，这是一条错误消息',
                    type: "error"
                });
            }
}`,
                code3: `<s-button @click="openClose">手动关闭消息提示</s-button>`,
                jsCode3: `methods: {
    openClose() {
                this.$message.info({
                    message: '手动关闭消息提示',
                    showClose: true
                });
    },
}`,
                code4: `<s-button @click="renderFunc">render</s-button>`,
                jsCode4: `methods: {
    renderFunc () {
                this.$message.info({
                    render: h => {
                        return h('span',{
                            style: {
                                color: "lightblue"
                            }
                        }, "自定义render内容")
                    }
                });
            }
}`,
                items:[
                    {parameter:"message",spec:"消息文字",type:"String",optionValue:"—",defaultValue:"—"},
                    {parameter:"type",spec:"消息类型",type:"String",optionValue:"success | warning | info | error",defaultValue:"info"},
                    {parameter:"duration",spec:"出现时间,毫秒数",type:"Number",optionValue:"—",defaultValue:"3000"},
                    {parameter:"offset",spec:"距离顶部的距离",type:"Number",optionValue:"—",defaultValue:"20"},
                    {parameter:"showClose",spec:"是否显示关闭按钮",type:"Boolean",optionValue:"—",defaultValue:"false"},
                    {parameter:"dangerouslyUseHTMLString",spec:"显示内容是否按照html处理",type:"Boolean",optionValue:"—",defaultValue:"false"},
                    {parameter:"render",spec:"自定义描述内容，使用 vue 的 Render 函数",type:"Function",optionValue:"—",defaultValue:"—"},
                ],
            }
        },
        methods: {
            open() {
                this.$message.info({
                    message: '这是一条消息提示'
                });
            },
            open1() {
                this.$message({
                    showClose: true,
                    message: '这是一条消息提示'
                });
            },
            open2() {
                this.$message({
                    message: '恭喜你，这是一条成功消息',
                    type: 'success'
                });
            },

            open3() {
                this.$message({
                    message: '警告哦，这是一条警告消息',
                    type: 'warning'
                });
            },

            open4() {
                this.$message.error({
                    message: '错了哦，这是一条错误消息',
                    type: "error"
                });
            },
            openClose() {
                this.$message.info({
                    message: '手动关闭消息提示',
                    showClose: true
                });
            },
            openHTML() {
                this.$message.info({
                    message: '<span style="color: #409eff">html</span><i>提示</i>',
                    showClose: true,
                    dangerouslyUseHTMLString: true
                });
            },
            renderFunc () {
                this.$message.info({
                    render: h => {
                        return h('span',{
                            style: {
                                color: "lightblue"
                            }
                        }, "自定义render内容")
                    }
                });
            }
        },
    }
</script>

<style scoped>
 .api {
     margin-top: 10px;
 }
</style>
