<template>
    <div class="input-demo">
        <doc-feature :codes="code1">
            <template #title>
                基础用法
            </template>
            <template #component>
                <s-input placeholder="请输入" ></s-input>
            </template>
        </doc-feature>
        <doc-feature :codes="code2">
            <template #title>
                禁用状态
            </template>
            <template #component>
                <s-input placeholder="请输入"  disabled></s-input>
            </template>
        </doc-feature>
        <doc-feature :codes="code3">
            <template #title>
                可清空
            </template>
            <template #component>
                <s-input placeholder="请输入"  clearable v-model="value"></s-input>
            </template>
        </doc-feature>
        <doc-feature :codes="code4">
            <template #title>
                带有图标的输入框
            </template>
            <template #description>
                通过prefix-icon和suffix-icon设置首尾icon图标,或者通过具名插槽suffix和prefix设置首尾图标
            </template>
            <template #component>
                <s-input placeholder="username"  prefix-icon="user"></s-input>
                <s-input placeholder="search"  suffix-icon="search" ></s-input>
                <br>
                <s-input placeholder="username">
                    <s-icon slot="prefix" name="user"></s-icon>
                </s-input>
                <s-input placeholder="search">
                    <s-icon slot="suffix" name="search"></s-icon>
                </s-input>
            </template>
        </doc-feature>
        <doc-feature :codes="code5">
            <template #title>
                输入框尺寸
            </template>
            <template #description>
                输入框尺寸有large,small或者默认值
            </template>
            <template #component>
                <s-input placeholder="username"  prefix-icon="user"></s-input>
                <s-input placeholder="username"  prefix-icon="user" size="small"></s-input>
                <s-input placeholder="username"  prefix-icon="user" size="large"></s-input>
            </template>
        </doc-feature>
        <doc-feature :codes="code6">
            <template #title>
                文本域
            </template>
            <template #description>
                用于输入多行信息，文本域高度由rows确定
            </template>
            <template #component>
                <s-input placeholder="username"  type="textarea"></s-input>
                <s-input placeholder="username"  type="textarea" :rows="5"></s-input>
            </template>
        </doc-feature>
        <doc-spec :infos="items">
            <template #title>
               Input Props
            </template>
        </doc-spec>
        <doc-slot :infos="items2">
            <template #title>
                Input Slot
            </template>
        </doc-slot>
        <doc-event :infos="items3">
            <template #title>
                Input Event
            </template>
        </doc-event>
    </div>
</template>

<script>
    import SInput from "../../../src/components/input/input";
    import SIcon from "../../../src/components/icon/icon";
    import DocSpec from "./common/spec";
    import DocFeature from "./common/feature";
    import DocSlot from "./common/slot";
    import DocEvent from "./common/event";
    export default {
        name: "input-demo",
        components: {
            SInput,
            SIcon,
            DocSpec,
            DocFeature,
            DocSlot,
            DocEvent
        },
        data() {
            return {
                value: "",
                code1: `<s-input placeholder="请输入"></s-input>`,
                code2: `<s-input placeholder="请输入" disabled></s-input>`,
                code3: `<s-input placeholder="请输入" clearable v-model="value"></s-input>`,
                code4: `<s-input placeholder="username"  prefix-icon="user"></s-input>
<s-input placeholder="search"  suffix-icon="search" ></s-input>
<s-input placeholder="username">
     <s-icon slot="prefix" name="user"></s-icon>
</s-input>
<s-input placeholder="search">
     <s-icon slot="suffix" name="search"></s-icon>
</s-input>`,
                code5: `<s-input placeholder="username"  prefix-icon="user"></s-input>
                <s-input placeholder="username"  prefix-icon="user" size="small"></s-input>
                <s-input placeholder="username"  prefix-icon="user" size="large"></s-input>`,
                code6: `<s-input placeholder="username"  type="textarea"></s-input>
                <s-input placeholder="username"  type="textarea" :rows="5"></s-input>`,
                items:[
                    {parameter:"placeholder",spec:"占位文本",type:"String",optionValue:"—",defaultValue:"—"},
                    {parameter:"type",spec:"输入框类型",type:"String",optionValue:"text | password | textarea | url | email | date | number | tel",defaultValue:"text"},
                    {parameter:"prefix-icon",spec:"首图标",type:"String",optionValue:"—",defaultValue:"—"},
                    {parameter:"suffix-icon",spec:"尾图标",type:"String",optionValue:"—",defaultValue:"—"},
                    {parameter:"disabled",spec:"禁止输入",type:"Boolean",optionValue:"—",defaultValue:"false"},
                    {parameter:"clearable",spec:"是否带有清除功能",type:"Boolean",optionValue:"—",defaultValue:"false"},
                    {parameter:"readonly",spec:"设置输入框为只读",type:"Boolean",optionValue:"—",defaultValue:"false"},
                    {parameter:"size",spec:"输入框尺寸",type:"String",optionValue:"large,small",defaultValue:"—"},
                    {parameter:"rows",spec:"文本框行数",type:"Number",optionValue:"—",defaultValue:"2"},
                ],
                items2: [
                    {name:"prefix",spec:"输入框头部图标"},
                    {name:"suffix",spec:"输入框尾部图标"},
                ],
                items3: [
                    {name:"change",spec:"输入改变时触发",returnValue:"String "},
                    {name:"blur",spec:"失去焦点时触发",returnValue:"Event"},
                    {name:"click",spec:"点击焦点时触发",returnValue:"Event"},
                    {name:"clear",spec:"设置clearable属性后，点击清空按钮时触发",returnValue:"Event"},
                ],
            }
        },
    }
</script>

<style scoped>
 .input-demo  .s-input, .input-demo  .s-textarea {
     width: 180px;
 }
</style>
