<template>
    <div>
        <doc-mul-feature :codes="[code1,code2,code3,code4,code5]" :count="5">
            <template #title>
               布局示例
            </template>
            <template #component1>
                <s-container class="container">
                    <s-header class="s-header">header</s-header>
                    <s-main>main</s-main>
                    <s-footer class="s-footer">footer</s-footer>
                </s-container>
            </template>
            <template #component2>
                <s-container >
                    <s-header >Header</s-header>
                    <s-container>
                        <s-aside width="200px">Aside</s-aside>
                        <s-main >Main</s-main>
                    </s-container>
                </s-container>
            </template>
            <template #component3>
                <s-container>
                    <s-header>Header</s-header>
                    <s-container>
                        <s-aside width="200px" style="line-height: 260px;">Aside</s-aside>
                        <s-container>
                            <s-main>Main</s-main>
                            <s-footer>Footer</s-footer>
                        </s-container>
                    </s-container>
                </s-container>
            </template>
            <template #component4>
                <s-container>
                    <s-aside width="200px" style="line-height: 260px;">Aside</s-aside>
                    <s-container>
                        <s-header>Header</s-header>
                        <s-main>Main</s-main>
                    </s-container>
                </s-container>
            </template>
            <template #component5>
                <s-container>
                    <s-aside width="200px" style="line-height: 320px;">Aside</s-aside>
                    <s-container>
                        <s-header>Header</s-header>
                        <s-main>Main</s-main>
                        <s-footer>Footer</s-footer>
                    </s-container>
                </s-container>
            </template>
        </doc-mul-feature>
        <doc-spec :infos="items1">
            <template #title>
                Aside Attributes
            </template>
        </doc-spec>
        <doc-spec :infos="items2">
            <template #title>
                Footer Attributes
            </template>
        </doc-spec>
        <doc-spec :infos="items3">
            <template #title>
                Header Attributes
            </template>
        </doc-spec>

    </div>
</template>

<script>

    import SAside from "../../../src/components/container/aside";
    import SContainer from "../../../src/components/container/container";
    import SFooter from "../../../src/components/container/footer";
    import SHeader from "../../../src/components/container/header";
    import SMain from "../../../src/components/container/main";
    import DocMulFeature from "./common/mul-feature";
    import DocSpec from "./common/spec";

    export default {
        name: "layout-demo",
        components: {
            SMain,
            SHeader,
            SFooter,
            SContainer,
            SAside,
            DocMulFeature,
            DocSpec
        },
        data() {
            return {
                code1: `<s-container class="container">
                <s-header class="s-header">header</s-header>
                <s-main>main</s-main>
                <s-footer class="s-footer">footer</s-footer>
</s-container>`,
                code2: `<s-container >
            <s-header>Header</s-header>
            <s-container>
                <s-aside width="200px">Aside</s-aside>
                <s-main >Main</s-main>
            </s-container>
</s-container>`,
                code3: `<s-container>
            <s-header>Header</s-header>
            <s-container>
                <s-aside width="200px" style="line-height: 260px;">Aside</s-aside>
                <s-container>
                    <s-main>Main</s-main>
                    <s-footer>Footer</s-footer>
                </s-container>
            </s-container>
        </s-container>`,
                code4: `<s-container>
            <s-aside width="200px">Aside</s-aside>
            <s-container>
                <s-header>Header</s-header>
                <s-main>Main</s-main>
            </s-container>
        </s-container>`,
                code5: `<s-container>
            <s-aside width="200px">Aside</s-aside>
            <s-container>
                <s-header>Header</s-header>
                <s-main>Main</s-main>
                <s-footer>Footer</s-footer>
            </s-container>
        </s-container>`,
                items1: [
                    {parameter:"width",spec:"宽度",type:"String",optionValue:"—",defaultValue:"300px"},
                ],
                items2: [
                    {parameter:"height",spec:"高度",type:"String",optionValue:"—",defaultValue:"60px"},
                ],
                items3: [
                    {parameter:"height",spec:"高度",type:"String",optionValue:"—",defaultValue:"60px"},
                ]
            }
        },
    }
</script>

<style scoped>
    .s-header, .s-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .s-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .s-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }


</style>
