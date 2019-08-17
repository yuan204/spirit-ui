<template>
    <div>
        <doc-feature :codes="code1" :js-codes="jsCode1">
            <template #title>
                基础用法
            </template>
            <template #description>
            </template>
            <template #component>
                <s-switch v-model="status"></s-switch>
            </template>
        </doc-feature>
        <doc-feature :codes="code2">
            <template #title>
                尺寸
            </template>
            <template #description>
                设置size为large或者small改变开关尺寸
            </template>
            <template #component>
                <s-switch size="small" v-model="status2"></s-switch>
                <s-switch size="large" v-model="status3"></s-switch>
            </template>
        </doc-feature>
        <doc-feature :codes="code3">
            <template #title>
                禁用状态
            </template>
            <template #description>
                设置disabled禁用
            </template>
            <template #component>
                <s-switch  v-model="status4" disabled></s-switch>
                <s-switch  v-model="status5" disabled></s-switch>
            </template>
        </doc-feature>
        <doc-feature :codes="code4">
            <template #title>
                背景色和文字描述
            </template>
            <template #description>
                设置open-color,close-color改变背景色
                设置 open-text，close-text添加切换时的文字描述
            </template>
            <template #component>
                <s-switch
                        v-model="status"
                        open-color="#13ce66"
                        close-color="#ff4949"
                        close-text="不吃饭"
                        open-text="吃饭"
                >
                </s-switch>
            </template>
        </doc-feature>
        <doc-spec :infos="items">
            <template #title>
                Switch  Props
            </template>
        </doc-spec>
        <doc-event :infos="items2">
            <template #title>
                Switch Event
            </template>
        </doc-event>
    </div>
</template>

<script>
    import DocFeature from "./common/feature";
    import DocSpec from "./common/spec";
    import SSwitch from "../../../src/components/switch/switch";
    import DocEvent from "./common/event";
    export default {
        name: "switch-demo",
        components: {
            DocFeature,
            DocSpec,
            SSwitch,
            DocEvent

        },
        data() {
            return {
                status: true,
                status2: false,
                status3: false,
                status4: false,
                status5: true,
                status6: true,
                code1: `<s-switch v-model="status"></s-switch>`,
                jsCode1: `data() {
            return {
                status: false
            }
        },`,
                code2: `<s-switch size="small" v-model="status2"></s-switch>
            <s-switch size="large" v-model="status3"></s-switch>`,
                code3: `<s-switch  v-model="status4" disabled></s-switch>
                <s-switch  v-model="status5" disabled></s-switch>`,
                code4: `<s-switch
                        v-model="status6"
                        open-color="#13ce66"
                        close-color="#ff4949"
                        close-text="不吃饭"
                        open-text="吃饭"
                >
                </s-switch>`,
                items:[
                    {parameter:"value",spec:"绑定值,支持v-model",type:"Boolean",optionValue:"—",defaultValue:"false"},
                    {parameter:"size",spec:"尺寸大小",type:"String",optionValue:"large | default | small",defaultValue:"default"},
                    {parameter:"disabled",spec:"是否禁用",type:"Boolean",optionValue:"—",defaultValue:"false"},
                    {parameter:"close-color",spec:"关闭时的背景色",type:"String",optionValue:"—",defaultValue:"#ccc"},
                    {parameter:"open-color",spec:"打开时的背景色",type:"String",optionValue:"—",defaultValue:"#2d8cf0"},
                    {parameter:"close-text",spec:"关闭时的文字描述",type:"String",optionValue:"—",defaultValue:"—"},
                    {parameter:"open-text",spec:"打开时的文字描述",type:"String",optionValue:"—",defaultValue:"—"},
                ],
                items2: [
                    {name:"change",spec:"switch 状态发生变化时触发",returnValue:"当前状态的值"},
                ],
            }
        },
    }
</script>

<style scoped>

</style>
