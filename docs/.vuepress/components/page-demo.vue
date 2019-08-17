<template>
    <div>
        <doc-feature :codes="code1">
            <template #title>
                基础用法
            </template>
            <template #description>
                当页数大于7时分页会自动折叠
            </template>
            <template #component>
                <s-page :total="70"></s-page>
                <s-page :total="500" :current-page.sync="curPage"></s-page>
            </template>
        </doc-feature>
        <doc-feature :codes="code2">
            <template #title>
                带有背景色的分页
            </template>
            <template #description>

            </template>
            <template #component>
                <s-page :total="500" background></s-page>
            </template>
        </doc-feature>
        <doc-feature :codes="code3">
            <template #title>
                每页数量
            </template>
            <template #description>
                切换每页显示的数量
            </template>
            <template #component>
                <s-page :total="1000" :page-sizes="[100, 200, 300, 400]"></s-page>
            </template>
        </doc-feature>
        <doc-feature :codes="code4">
            <template #title>
                跳转
            </template>
            <template #description>
               任意跳转某一页
            </template>
            <template #component>
                <s-page :total="1000" show-jump></s-page>
            </template>
        </doc-feature>
        <doc-feature :codes="code5">
            <template #title>
                总数
            </template>
            <template #description>
               显示所有的数据
            </template>
            <template #component>
                <s-page :total="1000"  show-total></s-page>
            </template>
        </doc-feature>
        <doc-feature :codes="code6">
            <template #title>
                上一页和下一页
            </template>
            <template #description>
               设置属性prev-text和next-text替换图标显示文字
            </template>
            <template #component>
                <s-page :total="1000" prev-text="上一页" next-text="下一页"></s-page>
            </template>
        </doc-feature>
        <doc-spec :infos="items1">
            <template #title>
                Page Props
            </template>
        </doc-spec>
        <doc-event :infos="items2">
            <template #title>
                Page Event
            </template>
        </doc-event>
    </div>
</template>

<script>
    import SPage from "../../../src/components/page/page";
    import DocFeature from "./common/feature";
    import DocSpec from "./common/spec";
    import DocEvent from "./common/event";
    export default {
        name: "page-demo",
        components: {
            SPage,
            DocFeature,
            DocSpec,
            DocEvent
        },
        data() {
            return {
                curPage: 30,
                code1: ` <s-page :total="70"></s-page>
 <s-page :total="500" :current-page.sync="curPage"></s-page>`,
                code2: `<s-page :total="500" background></s-page>`,
                code3: `<s-page :total="1000" :page-sizes="[100, 200, 300, 400]"></s-page>`,
                code4: `<s-page :total="1000" show-jump></s-page>`,
                code5: `<s-page :total="1000"  show-total></s-page>`,
                code6: ` <s-page :total="1000" prev-text="上一页" next-text="下一页"></s-page>`,
                items1: [
                    {parameter: "total", spec: "总条数", type: "Number", optionValue: "—", defaultValue: "—"},
                    {parameter: "page-size", spec: "每页显示的条数", type: "Number", optionValue: "—", defaultValue: "10"},
                    {parameter: "current-page", spec: "当前页数,支持sync修饰符", type: "Number", optionValue: "—", defaultValue: "1"},
                    {parameter: "background", spec: "是否为分页开启背景色", type: "Boolean", optionValue: "—", defaultValue: "false"},
                    {parameter: "page-sizes", spec: "改变每页显示条数的选择器设置", type: "Array", optionValue: "—", defaultValue: "—"},
                    {parameter: "show-jump", spec: "是否开启跳转模式", type: "Boolean", optionValue: "—", defaultValue: "false"},
                    {parameter: "prev-text", spec: "替代图标显示的上一页文字", type: "String", optionValue: "—", defaultValue: "—"},
                    {parameter: "show-jump", spec: "替代图标显示的下一页文字", type: "String", optionValue: "—", defaultValue: "—"},
                ],
                items2: [
                    {name:"current-page",spec:"当前页改变时触发",returnValue:"当前页"},
                    {name:"size-change",spec:"每页的条数改变时触发",returnValue:"每页条数"},

                ],
            }
        },
    }
</script>

<style scoped>

</style>
