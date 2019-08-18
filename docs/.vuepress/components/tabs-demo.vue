<template>
<div>
    <doc-feature :codes="code1" :js-codes="jsCode1">
        <template #title>
            基础用法
        </template>
        <template #description>
            value与某一个tabPane的name相等，那一个tabPanel就被选中
        </template>
        <template #component>
            <s-tabs v-model="activeName">
                <s-tab-pane label="标签一" name="name1">标签一的内容</s-tab-pane><s-tab-pane label="标签二" name="name2">标签二的内容</s-tab-pane><s-tab-pane label="标签三" name="name3">标签三的内容</s-tab-pane>
            </s-tabs>
        </template>
    </doc-feature>
    <doc-feature :codes="code2">
        <template #title>
            禁用
        </template>
        <template #description>
            设置tabPane的disabled属性就被禁用
        </template>
        <template #component>
            <s-tabs v-model="activeName">
                <s-tab-pane label="标签一" name="name1" disabled>标签一的内容</s-tab-pane><s-tab-pane label="标签二" name="name2">标签二的内容</s-tab-pane><s-tab-pane label="标签三" name="name3">标签三的内容</s-tab-pane>
            </s-tabs>
        </template>
    </doc-feature>
    <doc-feature :codes="code3">
        <template #title>
            卡片样式
        </template>
        <template #description>
            设置type为card使选项卡变为标签风格
        </template>
        <template #component>
            <s-tabs v-model="activeName3" type="card">
                <s-tab-pane label="标签一" name="name1">标签一的内容</s-tab-pane><s-tab-pane label="标签二" name="name2">标签二的内容</s-tab-pane><s-tab-pane label="标签三" name="name3">标签三的内容</s-tab-pane>
            </s-tabs>
        </template>
    </doc-feature>
    <doc-feature :codes="code4">
        <template #title>
            带border的卡片样式
        </template>
        <template #description>
            设置type为border-card使选项卡变为带border的卡片样式
        </template>
        <template #component>
            <s-tabs v-model="activeName4" type="border-card">
                <s-tab-pane label="标签一" name="name1">标签一的内容</s-tab-pane><s-tab-pane label="标签二" name="name2">标签二的内容</s-tab-pane><s-tab-pane label="标签三" name="name3">标签三的内容</s-tab-pane>
            </s-tabs>
        </template>
    </doc-feature>
    <doc-feature :codes="code5">
        <template #title>
            自定义标签页
        </template>
        <template #description>
            tabPanel用具名label slot自定义内容
        </template>
        <template #component>
            <s-tabs v-model="activeName" type = "border-card">
                <s-tab-pane label="标签一" name="name1" >
                    <template v-slot:label>
                        <s-icon name="search"></s-icon>
                        search
                    </template>
                    标签一的内容
                </s-tab-pane><s-tab-pane label="标签二" name="name2" >标签二的内容</s-tab-pane><s-tab-pane label="标签三" name="name3">标签三的内容</s-tab-pane>
            </s-tabs>
        </template>
    </doc-feature>
    <doc-feature :codes="code6" :js-codes="jsCode6">
        <template #title>
            可关闭
        </template>
        <template #description>
            设置属性 closable 并且结合 tab-remove 事件 关闭某一项，仅在卡片样式风格有效。
        </template>
        <template #component>
            <s-tabs v-model="activeName" type = "card" closable @tab-remove = "handleClose">
                <s-tab-pane label="标签一" name="name1" v-if="'name1' !== tabName" key="name1">
                    标签一的内容
                </s-tab-pane><s-tab-pane label="标签二" name="name2" v-if="'name2' !== tabName" key="name2">标签二的内容</s-tab-pane><s-tab-pane label="标签三" name="name3" v-if="'name3' !== tabName" key="name3">标签三的内容</s-tab-pane>
            </s-tabs>
        </template>
    </doc-feature>
    <doc-spec :infos="items">
        <template #title>
            Tabs   Props
        </template>
    </doc-spec>
    <doc-spec :infos="items2">
        <template #title>
            TabPane    Props
        </template>
    </doc-spec>
    <doc-slot :infos="items3">
        <template #title>
            TabPane Slot
        </template>
    </doc-slot>
    <doc-event :infos="items4">
        <template #title>
            Tabs  Event
        </template>
    </doc-event>
</div>
</template>

<script>
    import DocFeature from "./common/feature";
    import DocSpec from "./common/spec";
    import STabs from "../../../src/components/tabs/tabs";
    import STabPane from "../../../src/components/tabs/tab-pane";
    import SIcon from "../../../src/components/icon/icon";
    import DocSlot from "./common/slot";
    import DocEvent from "./common/event";
    export default {
        name: "tabs-demo",
        components: {
            DocSpec,
            DocFeature,
            STabs,
            STabPane,
            SIcon,
            DocSlot,
            DocEvent
        },
        data() {
            return {
                activeName: "name3",
                activeName2: "name2",
                activeName3: "name2",
                activeName4: "name2",
                tabName: "",
                code1: `<s-tabs v-model="activeName">
                <s-tab-pane label="标签一" name="name1">标签一的内容</s-tab-pane>
                <s-tab-pane label="标签二" name="name2">标签二的内容</s-tab-pane>
                <s-tab-pane label="标签三" name="name3">标签三的内容</s-tab-pane>
            </s-tabs>`,
                jsCode1: `data() {
            return {
                activeName: "name3"
            }
        }`,
                code2: `<s-tabs v-model="activeName">
                <s-tab-pane label="标签一" name="name1" disabled>标签一的内容</s-tab-pane>
                <s-tab-pane label="标签二" name="name2">标签二的内容</s-tab-pane>
                <s-tab-pane label="标签三" name="name3">标签三的内容</s-tab-pane>
            </s-tabs>`,
                code3: `<s-tabs v-model="activeName3" type="card">
                <s-tab-pane label="标签一" name="name1">标签一的内容</s-tab-pane>
                <s-tab-pane label="标签二" name="name2">标签二的内容</s-tab-pane>
                <s-tab-pane label="标签三" name="name3">标签三的内容</s-tab-pane>
            </s-tabs>`,
                code4: `<s-tabs v-model="activeName4" type="border-card">
                <s-tab-pane label="标签一" name="name1">标签一的内容</s-tab-pane>
                <s-tab-pane label="标签二" name="name2">标签二的内容</s-tab-pane>
                <s-tab-pane label="标签三" name="name3">标签三的内容</s-tab-pane>
            </s-tabs>`,
                code5: `<s-tabs v-model="activeName" type = "border-card">
                <s-tab-pane label="标签一" name="name1" >
                    <template v-slot:label>
                        <s-icon name="search"></s-icon>
                        search
                    </template>
                    标签一的内容
                </s-tab-pane>
                <s-tab-pane label="标签二" name="name2" >标签二的内容</s-tab-pane>
                <s-tab-pane label="标签三" name="name3">标签三的内容</s-tab-pane>
            </s-tabs>`,
                code6: `<s-tabs v-model="activeName" type = "card" closable @tab-remove = "handleClose">
          <s-tab-pane label="标签一" name="name1" v-if="'name1' !== tabName" key="name1">
              标签一的内容
          </s-tab-pane>
          <s-tab-pane label="标签二" name="name2" v-if="'name2' !== tabName" key="name2">标签二的内容</s-tab-pane>
          <s-tab-pane label="标签三" name="name3" v-if="'name3' !== tabName" key="name3">标签三的内容</s-tab-pane>
      </s-tabs>`,
                jsCode6: `methods: {
            handleClose(name) {
                this.tabName = name;
            }
        }`,
                items:[
                    {parameter:"value",spec:"绑定值,支持v-model",type:"String",optionValue:"—",defaultValue:"—"},
                    {parameter:"type",spec:"卡片类型",type:"String",optionValue:"card | border-card",defaultValue:"—"},
                    {parameter:"closable",spec:"是否关闭选项",type:"Boolean",optionValue:"—",defaultValue:"false"},
                ],
                items2:[
                    {parameter:"label",spec:"选项卡标题",type:"String",optionValue:"—",defaultValue:"—"},
                    {parameter:"name",spec:"标识选型卡，对应value",type:"String",optionValue:"—",defaultValue:"—"},
                    {parameter:"disabled",spec:"禁用选项",type:"Boolean",optionValue:"—",defaultValue:"false"},
                ],
                items3: [
                    {name:"label",spec:"自定义选项卡内容"},
                ],
                items4: [
                    {name:"tab-remove",spec:"点击关闭tab按钮时触发",returnValue:"移除选项的name"},
                ],
            }
        },
        methods: {
            handleClose(name) {
                this.tabName = name;
            }
        },

    }
</script>

<style scoped>

</style>
