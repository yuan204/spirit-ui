<template>
    <div>
        <doc-feature :codes="code1">
            <template #title>
                基础用法
            </template>
            <template #component>
                <s-button>默认按钮</s-button>
                <s-button type="primary">primary按钮</s-button>
                <s-button type="info">info按钮</s-button>
                <s-button type="success">success按钮</s-button>
                <s-button type="danger">danger按钮</s-button>
                <s-button type="warning">warning按钮</s-button>
            </template>
        </doc-feature>
        <doc-feature :codes="code2">
            <template #title>
                禁用状态
            </template>
            <template #component>
                <s-button disabled>默认按钮</s-button>
                <s-button type="primary" disabled>primary按钮</s-button>
                <s-button type="info" disabled>info按钮</s-button>
                <s-button type="success" disabled>success按钮</s-button>
                <s-button type="danger" disabled>danger按钮</s-button>
                <s-button type="warning" disabled>warning按钮</s-button>
            </template>
        </doc-feature>
        <doc-feature :codes="code3">
            <template #title>
                文字按钮
            </template>
            <template #component>
                <s-button type="text">文字按钮</s-button>
                <s-button type="text" disabled>文字按钮</s-button>
            </template>
        </doc-feature>
        <doc-feature :codes="code4">
            <template #title>
                图标按钮
            </template>
            <template #component>
                <s-button icon="user" type="success">设置</s-button>
                <s-button icon="clear" type="success">清除</s-button>
                <s-button icon="time" type="success" position="right">时间</s-button>
                <s-button icon="warning" type="warning" position="right">警告</s-button>
            </template>
        </doc-feature>

        <doc-feature :codes="code5">
            <template #title>
                加载按钮
            </template>
            <template #description>
                点击按钮显示加载中,再次点击按钮停止加载
            </template>
            <template #component>
                <s-button type="primary" loading>primary按钮</s-button>
            </template>
        </doc-feature>

        <doc-feature :codes="codeGroup">
            <template #title>
                按钮组
            </template>

            <template #component>
                <s-button-group>
                    <s-button>button 1</s-button>
                    <s-button>button 2</s-button>
                    <s-button>button 3</s-button>
                    <s-button>button 4</s-button>
                </s-button-group>
                <s-button-group>
                    <s-button type="primary">button 1</s-button>
                    <s-button type="primary">button 2</s-button>
                    <s-button type="primary">button 3</s-button>
                    <s-button type="primary">button 4</s-button>
                </s-button-group>
                <s-button-group>
                    <s-button type="success">button 1</s-button>
                    <s-button type="success">button 2</s-button>
                    <s-button type="success">button 3</s-button>
                    <s-button type="success">button 4</s-button>
                </s-button-group>
                <s-button-group>
                    <s-button type="info">button 1</s-button>
                    <s-button type="info">button 2</s-button>
                    <s-button type="info">button 3</s-button>
                    <s-button type="info">button 4</s-button>
                </s-button-group>
                <s-button-group>
                    <s-button type="danger">button 1</s-button>
                    <s-button type="danger">button 2</s-button>
                    <s-button type="danger">button 3</s-button>
                    <s-button type="danger">button 4</s-button>
                </s-button-group>
                <s-button-group>
                    <s-button type="warning">button 1</s-button>
                    <s-button type="warning">button 2</s-button>
                    <s-button type="warning">button 3</s-button>
                    <s-button type="warning">button 4</s-button>
                </s-button-group>
            </template>
        </doc-feature>

        <doc-spec :infos="items">
            <template #title>
                Attributes
            </template>
        </doc-spec>



    </div>

</template>

<script>
    import SButton from "../../../src/components/button/button";
    import SButtonGroup from "../../../src/components/button/button-group";
    import DocFeature from "./common/feature";
    import DocSpec from "./common/spec";




    export default {
        name: "buttonDemo",
        components: {
            SButton,
            DocFeature,
            DocSpec,
            SButtonGroup
        },

        methods: {
            click() {
                console.log(2);
            },

        },
        data() {
            return {
                showCodes: false,

                items:[
                    {parameter:"icon",spec:"图标名",type:"String",optionValue:"—",defaultValue:"—"},
                    {parameter:"position",spec:"图标的位置",type:"String",optionValue:"left,right",defaultValue:"left"},
                    {parameter:"loading",spec:"是否加载",type:"Boolean",optionValue:"—",defaultValue:"false"},
                    {parameter:"type",spec:"类型",type:"String",optionValue:"text,info,primary,warning,danger,success",defaultValue:"—"},
                    {parameter:"disabled",spec:"是否禁用按钮",type:"Boolean",optionValue:"—",defaultValue:"false"},
                ],
                code1: `<s-button>默认按钮</s-button>
   <s-button type="primary">primary按钮</s-button>
   <s-button type="info">info按钮</s-button>
   <s-button type="success">success按钮</s-button>
   <s-button type="danger">danger按钮</s-button>
   <s-button type="warning">warning按钮</s-button>`,
                code2: `<s-button disabled>默认按钮</s-button>
   <s-button type="primary" disabled>primary按钮</s-button>
   <s-button type="info" disabled>info按钮</s-button>
   <s-button type="success" disabled>success按钮</s-button>
   <s-button type="danger" disabled>danger按钮</s-button>
   <s-button type="warning" disabled>warning按钮</s-button>`,
                code3: `<s-button type="text">文字按钮</s-button>
   <s-button type="text" disabled>文字按钮</s-button>`,
                code4: `<s-button icon="user" type="success">设置</s-button>
   <s-button icon="clear" type="success">清除</s-button>
   <s-button icon="time" type="success" position="right">时间</s-button>
   <s-button icon="warning" type="warning" position="right">警告</s-button>`,
                code5: `<s-button  type="primary" loading>primary按钮</s-button>`,
                codeGroup: `<s-button-group>
            <s-button>button 1</s-button>
            <s-button>button 2</s-button>
            <s-button>button 3</s-button>
            <s-button>button 4</s-button>
        </s-button-group>
        <s-button-group>
            <s-button type="primary">button 1</s-button>
            <s-button type="primary">button 2</s-button>
            <s-button type="primary">button 3</s-button>
            <s-button type="primary">button 4</s-button>
        </s-button-group>
        <s-button-group>
            <s-button type="success">button 1</s-button>
            <s-button type="success">button 2</s-button>
            <s-button type="success">button 3</s-button>
            <s-button type="success">button 4</s-button>
        </s-button-group>
        <s-button-group>
            <s-button type="info">button 1</s-button>
            <s-button type="info">button 2</s-button>
            <s-button type="info">button 3</s-button>
            <s-button type="info">button 4</s-button>
        </s-button-group>
        <s-button-group>
            <s-button type="danger">button 1</s-button>
            <s-button type="danger">button 2</s-button>
            <s-button type="danger">button 3</s-button>
            <s-button type="danger">button 4</s-button>
        </s-button-group>
        <s-button-group>
            <s-button type="warning">button 1</s-button>
            <s-button type="warning">button 2</s-button>
            <s-button type="warning">button 3</s-button>
            <s-button type="warning">button 4</s-button>
        </s-button-group>`,

            }
        },
    }
</script>

<style scoped lang="scss">

    .container {
        border: 1px solid #ebebeb;
    }

    .btns {
        padding: 20px;
    }

    .btns > * {
        margin-right: 1em;
        margin-top: 1em;
    }

    .codes-content-wrapper {
        background-color: #FAFAFA;
    }

    .codesClass {
        border-top: 1px solid #eaeefb;


        .s-icon {
            transform: rotate(180deg);
        }
    }

    .codes-header {
        border-top: 1px solid #eaeefb;
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        /*color: #D3DCE6;*/

        .codes-header-inner {
            transition: all .3s;
        }
    }

    .codes-header:hover {
        background-color: #f9fafc;
        color: #409eff;

        .codes-header-inner {
            transform: translateX(-20px);

            & > span {
                margin-left: 10px;
                display: inline-block !important;
            }
        }


    }

    .codes-content {

        font-size: 16px;
    }

    .s-button-group {
        margin-top: 10px;
    }


</style>
