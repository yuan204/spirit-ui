<template>
    <div>
        <doc-feature :codes="code1">
            <template #title>
                基础用法
            </template>
            <template #description>
                type指定标签的类型
            </template>
            <template #component>
                <s-tag>标签一</s-tag>
                <s-tag type="info">标签二</s-tag>
                <s-tag type="success">标签三</s-tag>
                <s-tag type="warning">标签四</s-tag>
                <s-tag type="error">标签五</s-tag>
            </template>
        </doc-feature>
        <doc-feature :codes="code2" :js-codes="jscode2">
            <template #title>
                可关闭标签
            </template>
            <template #description>
                添加closable可关闭标签，点击关闭图标,触发close事件，自己实现移除标签的逻辑，disable-transition禁用关闭时的过渡动画
            </template>
            <template #component>
                <s-tag type="info" closable @close="handleClose1" v-if="show1">可关闭标签</s-tag>
                <s-tag type="info" closable @close="handleClose2" v-if="show2" disable-transition>禁用过渡动画的可关闭标签</s-tag>
            </template>
        </doc-feature>
        <doc-feature :codes="code3">
            <template #title>
                不同尺寸
            </template>
            <template #description>
                除了默认尺寸外，通过size还可以设置medium,small,mini这些额外的尺寸
            </template>
            <template #component>
                <s-tag>默认标签</s-tag>
                <s-tag size="medium">中等标签</s-tag>
                <s-tag size="small">小型标签</s-tag>
                <s-tag size="mini">超小标签</s-tag>
            </template>
        </doc-feature>
        <doc-feature :codes="code4" :js-codes="jscode4">
            <template #title>
                不同主题
            </template>
            <template #description>
               有三种theme,分别是dark,plain,light,其中light是默认theme
            </template>
            <template #component>
                <div class="tags">
                    <s-tag
                            v-for="item in items"
                            :key="item.label"
                            :type="item.type"
                            effect="dark" closable>
                        Dark {{ item.label }}
                    </s-tag>
                </div>
                <div class="tags">
                    <s-tag
                            v-for="item in items"
                            :key="item.label"
                            :type="item.type"
                            effect="plain" closable>
                        Plain {{ item.label }}
                    </s-tag>
                </div>
                <div class="tags">
                    <s-tag
                            v-for="item in items"
                            :key="item.label"
                            :type="item.type"
                             closable>
                        Light {{ item.label }}
                    </s-tag>
                </div>
            </template>
        </doc-feature>
        <doc-spec :infos="items1">
            <template #title>
                Tag Props
            </template>
        </doc-spec>
        <doc-event :infos="items2">
            <template #title>
                Tag Event
            </template>
        </doc-event>
    </div>
</template>

<script>
    import STag from "../../../src/components/tag/tag";
    import DocFeature from "./common/feature";
    import DocSpec from "./common/spec";
    import DocEvent from "./common/event";
    export default {
        name: "tag-demo",
        components: {
            DocFeature,
            DocSpec,
            STag,
            DocEvent
        },
        data() {
            return {
                show1: true,
                show2: true,
                items: [
                    { type: 'primary', label: '一' },
                    { type: 'success', label: '二' },
                    { type: 'info', label: '三' },
                    { type: 'error', label: '四' },
                    { type: 'warning', label: '五' }
                ],
                code1: `<s-tag>标签一</s-tag>
                <s-tag type="info">标签二</s-tag>
                <s-tag type="success">标签三</s-tag>
                <s-tag type="warning">标签四</s-tag>
                <s-tag type="error">标签五</s-tag>`,
                code2: `<s-tag type="info" closable @close="handleClose1" v-if="show1">标签二</s-tag>
                <s-tag type="info" closable @close="handleClose2" v-if="show2" disable-transition>标签二</s-tag>`,
                jscode2: `data() {
            return {
                show1: true,
                show2: true,
            }
        },
        methods: {
            handleClose1() {
                this.show1 = false;
            },
            handleClose2() {
                this.show2 = false;
            }
        }`,
                code3: `<s-tag>默认标签</s-tag>
                <s-tag size="medium">中等标签</s-tag>
                <s-tag size="small">小型标签</s-tag>
                <s-tag size="mini">超小标签</s-tag>`,
                code4: `<div class="tags">
                    <s-tag
                            v-for="item in items"
                            :key="item.label"
                            :type="item.type"
                            effect="dark" closable>
                        Dark {{ item.label }}
                    </s-tag>
                </div>
                <div class="tags">
                    <s-tag
                            v-for="item in items"
                            :key="item.label"
                            :type="item.type"
                            effect="plain" closable>
                        Plain {{ item.label }}
                    </s-tag>
                </div>
                <div class="tags">
                    <s-tag
                            v-for="item in items"
                            :key="item.label"
                            :type="item.type"
                             closable>
                        Light {{ item.label }}
                    </s-tag>
                </div>`,
                jscode4: `data() {
            return {
                show1: true,
                show2: true,
                items: [
                    { type: 'primary', label: '一' },
                    { type: 'success', label: '二' },
                    { type: 'info', label: '三' },
                    { type: 'error', label: '四' },
                    { type: 'warning', label: '五' }
                ]
    }
},`,
                items1: [
                    {parameter: "type", spec: "标签类型 ", type: "String", optionValue: "primary | success | info | warning | error", defaultValue: "primary"},
                    {parameter: "closable", spec: "是否可移除", type: "Boolean", optionValue: "—", defaultValue: "false"},
                    {parameter: "size", spec: "标签尺寸", type: "Boolean", optionValue: "medium | small | mini", defaultValue: "—"},
                    {parameter: "effect", spec: "主题", type: "String", optionValue: "dark | light | plain", defaultValue: "light"},
                    {parameter: "disable-transition", spec: "禁用关闭时的过渡动画", type: "Boolean", optionValue: "—", defaultValue: "false"},
                ],
                items2: [
                    {name:"close",spec:"点击关闭时触发",returnValue:"event"},
                ],
            }
        },

        methods: {
            handleClose1() {
                this.show1 = false;
            },
            handleClose2() {
                this.show2 = false;
            }
        },
    }
</script>

<style scoped>
    .tags {
        margin-bottom: 10px;

    }
    .tags > .s-tag {
        margin-right: 10px;
    }
</style>
