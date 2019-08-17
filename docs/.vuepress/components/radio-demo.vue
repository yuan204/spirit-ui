<template>
<div>
    <doc-feature :codes="code1" :js-codes="jsCode1">
        <template #title>
            基础用法
        </template>
        <template #description>
        </template>
        <template #component>
            <div>
                <s-radio v-model="fruit" value="apple">苹果</s-radio>
                <s-radio v-model="fruit" value="pear">梨</s-radio>
                <s-radio v-model="fruit" value="banana">香蕉</s-radio>
            </div>
        </template>
    </doc-feature>
    <doc-feature :codes="code2">
        <template #title>
            禁用状态
        </template>
        <template #description>
            被禁用的单选按钮不可选
        </template>
        <template #component>
            <div>
                <s-radio v-model="fruit2" value="apple" >苹果</s-radio>
                <s-radio v-model="fruit2" value="pear" disabled>梨</s-radio>
                <s-radio v-model="fruit2" value="banana">香蕉</s-radio>
            </div>
        </template>
    </doc-feature>
    <doc-feature :codes="code3">
        <template #title>
            单选框组
        </template>
        <template #description>
            radio-group实现一组互斥的单选框组
        </template>
        <template #component>
            <div>
                <s-radio-group v-model="fruit3">
                    <s-radio  value="apple">苹果</s-radio>
                    <s-radio  value="pear">梨</s-radio>
                    <s-radio value="banana">香蕉</s-radio>
                </s-radio-group>
            </div>
        </template>
    </doc-feature>
    <doc-feature :codes="code4">
        <template #title>
            垂直
        </template>
        <template #description>
            radio-group设置属性 vertical垂直显示
        </template>
        <template #component>
            <div>
                <s-radio-group v-model="fruit4" vertical>
                    <s-radio  value="apple">苹果</s-radio>
                    <s-radio  value="pear">梨</s-radio>
                    <s-radio value="banana">香蕉</s-radio>
                </s-radio-group>
            </div>
        </template>
    </doc-feature>
    <doc-feature :codes="code5">
        <template #title>
            按钮样式
        </template>
        <template #description>
            radio-group设置属性 type为button开启按钮样式
        </template>
        <template #component>
            <div>
                <s-radio-group v-model="fruit5" type="button">
                    <s-radio  value="apple" >苹果</s-radio>
                    <s-radio  value="pear">梨</s-radio>
                    <s-radio value="banana">香蕉</s-radio>
                </s-radio-group>
            </div>
        </template>
    </doc-feature>
    <doc-feature :codes="code6">
        <template #title>
            带有边框
        </template>
        <template #description>
            设置属性border使得单选框带有边框
        </template>
        <template #component>

                <div>
                    <s-radio v-model="fruit6" value="apple"  border>苹果</s-radio>
                    <s-radio v-model="fruit6" value="pear"  border>梨</s-radio>
                    <s-radio v-model="fruit6" value="banana"  border>香蕉</s-radio>
                </div>

        </template>
    </doc-feature>
    <doc-spec :infos="items">
        <template #title>
           Radio  Props
        </template>
    </doc-spec>
    <doc-event :infos="items3">
        <template #title>
            Radio Event
        </template>
    </doc-event>
    <doc-spec :infos="items2">
        <template #title>
            RadioGroup  Props
        </template>
    </doc-spec>
    <doc-event :infos="items4">
        <template #title>
            RadioGroup Event
        </template>
    </doc-event>
</div>
</template>

<script>
    import SRadio from "../../../src/components/radio/radio";
    import SRadioGroup from "../../../src/components/radio/radio-group";
    import DocFeature from "./common/feature";
    import DocSpec from "./common/spec";
    import DocEvent from "./common/event";
    export default {
        name: "radio-demo",
        components: {
            DocFeature,
            DocSpec,
            SRadio,
            SRadioGroup,
            DocEvent
        },
        data() {
            return {
                fruit:"apple",
                fruit2:"apple",
                fruit3: "pear",
                fruit4: "banana",
                fruit5: "apple",
                fruit6: "apple",
                code1: `<s-radio v-model="fruit" value="apple">苹果</s-radio>
                <s-radio v-model="fruit" value="pear">梨</s-radio>
                <s-radio v-model="fruit" value="banana">香蕉</s-radio>`,
                jsCode1: `data() {
            return {
                fruit:"apple"
            }
        },`,
                code2: `<s-radio v-model="fruit" value="apple" >苹果</s-radio>
                <s-radio v-model="fruit" value="pear" disabled>梨</s-radio>
                <s-radio v-model="fruit" value="banana">香蕉</s-radio>`,
                code3: `<s-radio-group v-model="fruit3">
                    <s-radio  value="apple">苹果</s-radio>
                    <s-radio  value="pear">梨</s-radio>
                    <s-radio value="banana">香蕉</s-radio>
                </s-radio-group>`,
                code4: `<s-radio-group v-model="fruit4" vertical>
                    <s-radio  value="apple">苹果</s-radio>
                    <s-radio  value="pear">梨</s-radio>
                    <s-radio value="banana">香蕉</s-radio>
                </s-radio-group>`,
                code5: `<s-radio-group v-model="fruit5" type="button">
                    <s-radio  value="apple" >苹果</s-radio>
                    <s-radio  value="pear">梨</s-radio>
                    <s-radio value="banana">香蕉</s-radio>
                </s-radio-group>`,
                code6: `<div>
                    <s-radio v-model="fruit6" value="apple"  border>苹果</s-radio>
                    <s-radio v-model="fruit6" value="pear"  border>梨</s-radio>
                    <s-radio v-model="fruit6" value="banana"  border>香蕉</s-radio>
                </div>`,
                items:[
                    {parameter:"modelValue/v-model",spec:"绑定值",type:"—",optionValue:"—",defaultValue:"—"},
                    {parameter:"value",spec:"选项的value值",type:"—",optionValue:"—",defaultValue:"—"},
                    {parameter:"disabled",spec:"是否禁用",type:"Boolean",optionValue:"—",defaultValue:"false"},
                    {parameter:"border",spec:"是否带有边框",type:"Boolean",optionValue:"—",defaultValue:"false"},
                ],
                items2:[
                    {parameter:"value",spec:"当前选中的值，可以使用v-model绑定",type:"—",optionValue:"—",defaultValue:"—"},
                    {parameter:"type",spec:"当为button使用按钮样式",type:"String",optionValue:"button",defaultValue:"—"},
                    {parameter:"vertical",spec:"是否垂直",type:"Boolean",optionValue:"—",defaultValue:"false"},

                ],
                items3: [
                    {name:"change",spec:"绑定值发生变化时触发",returnValue:"当前选项的值"},
                ],
                items4: [
                    {name:"input",spec:"绑定值发生变化时触发",returnValue:"当前选项的值"},
                ],
            }
        },
    }
</script>

<style scoped>

</style>
