<template>
    <div>
        <doc-feature :codes="code1">
            <template #title>
                基础用法
            </template>
            <template #description>
                span指定的栅格占据的列数
            </template>
            <template #component>
                <s-row class="row">
                    <s-col span="12" class="col">col-12</s-col>
                    <s-col span="12" class="col">col-12</s-col>
                </s-row>
                <s-row class="row">
                    <s-col span="8" class="col">col-8</s-col>
                    <s-col span="8" class="col">col-8</s-col>
                    <s-col span="8" class="col">col-8</s-col>
                </s-row>
                <s-row class="row">
                    <s-col span="6" class="col">col-6</s-col>
                    <s-col span="6" class="col">col-6</s-col>
                    <s-col span="6" class="col">col-6</s-col>
                    <s-col span="6" class="col">col-6</s-col>
                </s-row>
            </template>
        </doc-feature>
        <doc-feature :codes="code2">
            <template #title>
                间隔布局
            </template>
            <template #description>
                给row添加gutter给每列添加间隔
            </template>
            <template #component>
                <s-row class="row-gutter" :gutter="10">
                    <s-col span="4" class="col"><div class="gutter">col-4</div></s-col>
                    <s-col span="8" class="col"><div class="gutter">col-8</div></s-col>
                    <s-col span="4" class="col"><div class="gutter">col-4</div></s-col>
                    <s-col span="8" class="col"><div class="gutter">col-8</div></s-col>
                </s-row>
            </template>
        </doc-feature>
        <doc-feature :codes="code6">
            <template #title>
                改变栅格的顺序
            </template>
            <template #description>
            </template>
            <template #component>
                <s-row class="row">
                    <s-col span="6" class="col" order="3">order 3 | 1</s-col>
                    <s-col span="6" class="col" order="4">order 4 | 2</s-col>
                    <s-col span="6" class="col" order="1">order 1 | 3</s-col>
                    <s-col span="6" class="col" order="2">order 2 | 4</s-col>
                </s-row>
            </template>
        </doc-feature>
        <doc-feature :codes="code7">
            <template #title>
                水平对齐方式
            </template>
            <template #description>
            </template>
            <template #component>
                    向左排列
                    <s-row class="row" justify="start">
                        <s-col span="4" class="col">col</s-col>
                        <s-col span="4" class="col">col</s-col>
                        <s-col span="4" class="col">col</s-col>
                        <s-col span="4" class="col">col</s-col>
                    </s-row>
                    <br>
                    向右排列
                    <s-row class="row" justify="end">
                        <s-col span="4" class="col">col</s-col>
                        <s-col span="4" class="col">col</s-col>
                        <s-col span="4" class="col">col</s-col>
                        <s-col span="4" class="col">col</s-col>
                    </s-row>
                    <br>
                    居中排列
                    <s-row class="row" justify="center">
                        <s-col span="4" class="col">col</s-col>
                        <s-col span="4" class="col">col</s-col>
                        <s-col span="4" class="col">col</s-col>
                        <s-col span="4" class="col">col</s-col>
                    </s-row>
                    <br>
                     分散排列
                    <s-row class="row" justify="space-around">
                        <s-col span="4" class="col">col</s-col>
                        <s-col span="4" class="col">col</s-col>
                        <s-col span="4" class="col">col</s-col>
                        <s-col span="4" class="col">col</s-col>
                    </s-row>
                    <br>
                    等宽排列
                    <s-row class="row" justify="space-between">
                        <s-col span="4" class="col">col</s-col>
                        <s-col span="4" class="col">col</s-col>
                        <s-col span="4" class="col">col</s-col>
                        <s-col span="4" class="col">col</s-col>
                    </s-row>

            </template>
        </doc-feature>
        <doc-feature :codes="code8">
            <template #title>
                竖直对齐方式
            </template>
            <template #description>
            </template>
            <template #component>
                    顶部对齐
                    <s-row class="row" align="top" justify="center" style="background: #ccc;height: 200px">
                        <s-col span="4" class="col">col</s-col>
                        <s-col span="4" class="col">col</s-col>
                        <s-col span="4" class="col">col</s-col>
                        <s-col span="4" class="col">col</s-col>
                    </s-row>

                    <br>
                    居中对齐
                    <s-row class="row" align="middle" justify="center" style="background: #ccc;height: 200px">
                        <s-col span="4" class="col">col</s-col>
                        <s-col span="4" class="col">col</s-col>
                        <s-col span="4" class="col">col</s-col>
                        <s-col span="4" class="col">col</s-col>
                    </s-row>
                    <br>
                    底部对齐
                    <s-row class="row" align="bottom" justify="center" style="background: #ccc;height: 200px">
                        <s-col span="4" class="col">col</s-col>
                        <s-col span="4" class="col">col</s-col>
                        <s-col span="4" class="col">col</s-col>
                        <s-col span="4" class="col">col</s-col>
                    </s-row>

            </template>
        </doc-feature>
        <doc-feature :codes="code3">
            <template #title>
                区块偏移
            </template>
            <template #description>
                offset指定偏移的栅格数
            </template>
            <template #component>
                <s-row class="row">
                    <s-col span="8" class="col">col-8</s-col>
                    <s-col span="8" offset="8" class="col">col-8 | offset-8</s-col>
                </s-row>
                <s-row class="row">
                    <s-col span="6" offset="8" class="col">col-6 | offset-8</s-col>
                    <s-col span="6" offset="4" class="col">col-6 | offset-4</s-col>
                </s-row>
                <s-row class="row">
                    <s-col span="12" offset="8" class="col">col-12 | offset-8</s-col>
                </s-row>
            </template>
        </doc-feature>
        <doc-feature :codes="code4">
            <template #title>
                响应式布局
            </template>
            <template #description>
                参照 Bootstrap的响应式设计，预设六个响应尺寸：xs sm md lg xl xxl
            </template>
            <template #component>
                <s-row class="row">
                    <s-col :xs="2" :sm="4" :md="6" :lg="8" class="col">Col</s-col>
                    <s-col :xs="20" :sm="16" :md="12" :lg="8" class="col">Col</s-col>
                    <s-col :xs="2" :sm="4" :md="6" :lg="8" class="col">Col</s-col>
                </s-row>
            </template>
        </doc-feature>
        <doc-feature :codes="code5">
            <template #title>
                添加属性的响应式布局
            </template>
            <template #description>
                span,offset属性添加到xs sm md lg xl xxl中
            </template>
            <template #component>
                <s-row class="row">
                    <s-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }" class="col">Col</s-col>
                    <s-col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }" class="col">Col</s-col>
                    <s-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }" class="col">Col</s-col>
                </s-row>
            </template>
        </doc-feature>

        <doc-spec :infos="items1">
            <template #title>
                Row Attributes
            </template>
        </doc-spec>
        <doc-spec :infos="item2">
            <template #title>
                Col Attributes
            </template>
        </doc-spec>
    </div>
</template>

<script>

    import DocFeature from "./common/feature";
    import DocSpec from "./common/spec";
    import SCol from "../../../src/components/grid/col";
    import SRow from "../../../src/components/grid/row";

    export default {
        name: "grid-demo",
        components: {
            DocFeature,
            DocSpec,
            SCol,
            SRow
        },
        data() {
            return {
                code1: `<s-row class="row">
                    <s-col span="12" class="col">col-12</s-col>
                    <s-col span="12" class="col">col-12</s-col>
                </s-row>
                <s-row class="row">
                    <s-col span="8" class="col">col-8</s-col>
                    <s-col span="8" class="col">col-8</s-col>
                    <s-col span="8" class="col">col-8</s-col>
                </s-row>
                <s-row class="row">
                    <s-col span="6" class="col">col-6</s-col>
                    <s-col span="6" class="col">col-6</s-col>
                    <s-col span="6" class="col">col-6</s-col>
                    <s-col span="6" class="col">col-6</s-col>
                </s-row>`,
                code2: `<s-row class="row-gutter" :gutter="10">
                <s-col span="4" class="col"><div class="gutter">col-4</div></s-col>
                <s-col span="8" class="col"><div class="gutter">col-8</div></s-col>
                <s-col span="4" class="col"><div class="gutter">col-4</div></s-col>
                <s-col span="8" class="col"><div class="gutter">col-8</div></s-col>
            </s-row>`,
                code3: `<s-row class="row">
                    <s-col span="8" class="col">col-8</s-col>
                    <s-col span="8" offset="8" class="col">col-8 | offset-8</s-col>
                </s-row>
                <s-row class="row">
                    <s-col span="6" offset="8" class="col">col-6 | offset-8</s-col>
                    <s-col span="6" offset="4" class="col">col-6 | offset-4</s-col>
                </s-row>
                <s-row class="row">
                    <s-col span="12" offset="8" class="col">col-12 | offset-8</s-col>
                </s-row>`,
                code4: `<s-row class="row">
                    <s-col :xs="2" :sm="4" :md="6" :lg="8" class="col">Col</s-col>
                    <s-col :xs="20" :sm="16" :md="12" :lg="8" class="col">Col</s-col>
                    <s-col :xs="2" :sm="4" :md="6" :lg="8" class="col">Col</s-col>
                </s-row>
               `,
                code5: `<s-row class="row">
                    <s-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }" class="col">Col</s-col>
                    <s-col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }" class="col">Col</s-col>
                    <s-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }" class="col">Col</s-col>
                </s-row>`,
                code6: `<s-row class="row">
                    <s-col span="6" class="col" order="3">order 3 | 1</s-col>
                    <s-col span="6" class="col" order="4">order 4 | 2</s-col>
                    <s-col span="6" class="col" order="1">order 1 | 3</s-col>
                    <s-col span="6" class="col" order="2">order 2 | 4</s-col>
                </s-row>`,
                code7: `向左排列
                    <s-row class="row" justify="start">
                        <s-col span="4" class="col">col</s-col>
                        <s-col span="4" class="col">col</s-col>
                        <s-col span="4" class="col">col</s-col>
                        <s-col span="4" class="col">col</s-col>
                    </s-row>
                    <br>
                    向右排列
                    <s-row class="row" justify="end">
                        <s-col span="4" class="col">col</s-col>
                        <s-col span="4" class="col">col</s-col>
                        <s-col span="4" class="col">col</s-col>
                        <s-col span="4" class="col">col</s-col>
                    </s-row>
                    <br>
                    居中排列
                    <s-row class="row" justify="center">
                        <s-col span="4" class="col">col</s-col>
                        <s-col span="4" class="col">col</s-col>
                        <s-col span="4" class="col">col</s-col>
                        <s-col span="4" class="col">col</s-col>
                    </s-row>
                    <br>
                     分散排列
                    <s-row class="row" justify="space-around">
                        <s-col span="4" class="col">col</s-col>
                        <s-col span="4" class="col">col</s-col>
                        <s-col span="4" class="col">col</s-col>
                        <s-col span="4" class="col">col</s-col>
                    </s-row>
                    <br>
                    等宽排列
                    <s-row class="row" justify="space-between">
                        <s-col span="4" class="col">col</s-col>
                        <s-col span="4" class="col">col</s-col>
                        <s-col span="4" class="col">col</s-col>
                        <s-col span="4" class="col">col</s-col>
                    </s-row>`,
                code8: `  顶部对齐
                    <s-row class="row" align="top" justify="center" style="background: #ccc;height: 200px">
                        <s-col span="4" class="col">col</s-col>
                        <s-col span="4" class="col">col</s-col>
                        <s-col span="4" class="col">col</s-col>
                        <s-col span="4" class="col">col</s-col>
                    </s-row>

                    <br>
                    居中对齐
                    <s-row class="row" align="middle" justify="center" style="background: #ccc;height: 200px">
                        <s-col span="4" class="col">col</s-col>
                        <s-col span="4" class="col">col</s-col>
                        <s-col span="4" class="col">col</s-col>
                        <s-col span="4" class="col">col</s-col>
                    </s-row>
                    <br>
                    底部对齐
                    <s-row class="row" align="bottom" justify="center" style="background: #ccc;height: 200px">
                        <s-col span="4" class="col">col</s-col>
                        <s-col span="4" class="col">col</s-col>
                        <s-col span="4" class="col">col</s-col>
                        <s-col span="4" class="col">col</s-col>
                    </s-row>
`,
                items1: [
                    {parameter: "gutter", spec: "间隔 ", type: "Number", optionValue: "—", defaultValue: "0"},
                    {parameter: "justify", spec: "水平排列", type: "String", optionValue: "start | end | center | space-around | space-between", defaultValue: "—"},
                    {parameter: "align", spec: "垂直排列", type: "String", optionValue: "top | middle | bottom", defaultValue: "—"},
                    ],
                  item2:  [
                      {parameter: "span", spec: "列所占据的栅格数", type: "String | Number", optionValue: "—", defaultValue: "—"},
                      {parameter: "offset", spec: "偏移的栅格数", type: "String | Number", optionValue: "—", defaultValue: "—"},
                      {parameter: "order", spec: "栅格的顺序", type: "String | Number", optionValue: "—", defaultValue: "—"},
                      {parameter: "xs", spec: "<576px", type: "Number | Object", optionValue: "—", defaultValue: "—"},
                      {parameter: "sm", spec: "≥576px", type: "Number | Object", optionValue: "—", defaultValue: "—"},
                      {parameter: "lg", spec: "≥768px", type: "Number | Object", optionValue: "—", defaultValue: "—"},
                      {parameter: "md", spec: "≥992px", type: "Number | Object", optionValue: "—", defaultValue: "—"},
                      {parameter: "xl", spec: "≥1200px", type: "Number | Object", optionValue: "—", defaultValue: "—"},
                      {parameter: "xll", spec: "≥1600px", type: "Number | Object", optionValue: "—", defaultValue: "—"},
                  ],
            }
        },
    }
</script>

<style scoped lang="scss">
    .row {
        margin-top: 20px;
        /*border: 1px solid green;*/
        .col {
            padding: 10px;
            color: white;
            text-align: center;

        }

        .col:nth-child(even) {
            background-color: rgba(0, 153, 229, .7);
        }

        .col:nth-child(odd) {
            background-color: rgba(0, 153, 229, .9);
        }
    }

    .row-gutter {
        margin-top: 20px;

        .col {

            color: white;
            text-align: center;

            .gutter {
                padding: 10px;

                &:nth-of-type(even) {
                    background-color: rgba(0, 153, 229, .7);
                }

                &:nth-of-type(odd) {
                    background-color: rgba(0, 153, 229, .9);
                }
            }
        }
    }
</style>
