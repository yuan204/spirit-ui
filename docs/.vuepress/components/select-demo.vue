<template>
    <div>
        <doc-feature :codes="code1" :js-codes="jsCode1">
            <template #title>
                基础用法
            </template>
            <template #description>
                单选
            </template>
            <template #component>
                <s-select  v-model="value">
                    <s-option v-for="item in options"  :key="item.value"  :value="item.value" :label="item.label"></s-option>
                </s-select>
            </template>
        </doc-feature>
        <doc-feature :codes="code2" :js-codes="jsCode2">
            <template #title>
                禁用
            </template>
            <template #description>
                为s-select设置disabled整个选择器不可用
                <br>
                为s-option设置disabled使得单个选项禁用
            </template>
            <template #component>
                <s-select  v-model="value2" disabled style="display: inline-block;">
                    <s-option v-for="item in options"  :key="item.value"  :value="item.value" :label="item.label" ></s-option>
                </s-select>
                <s-select  v-model="value3" style="display: inline-block;">
                    <s-option v-for="item in options2"  :key="item.value"  :value="item.value" :label="item.label" :disabled="item.disabled"></s-option>
                </s-select>
            </template>
        </doc-feature>
        <doc-feature :codes="code3">
            <template #title>
                可清空
            </template>
            <template #description>
                设置clearable，可将选择器清空.只适用单选
            </template>
            <template #component>
                <s-select  v-model="value4" clearable>
                    <s-option v-for="item in options"  :key="item.value"  :value="item.value" :label="item.label"></s-option>
                </s-select>
            </template>
        </doc-feature>
        <doc-feature :codes="code4">
            <template #title>
                多选
            </template>
            <template #description>
                设置属性multiple开启多选模式
            </template>
            <template #component>
                <s-select  v-model="value5" multiple>
                    <s-option v-for="item in options"  :key="item.value"  :value="item.value" :label="item.label"></s-option>
                </s-select>
            </template>
        </doc-feature>
        <doc-feature :codes="code5">
            <template #title>
                自定义模板
            </template>
            <template #description>
                对于option优先使用slot的值，没有slot使用label的值
            </template>
            <template #component>
                <s-select v-model="value6">
                    <s-option
                            v-for="item in cities"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        <span style="float: left">{{ item.label }}</span>
                        <span style="float: right; color: #ccc;">{{ item.value }}</span>
                    </s-option>
                </s-select>
            </template>
        </doc-feature>
        <doc-feature :codes="code6">
            <template #title>
                可搜索
            </template>
            <template #description>
                快速搜索需要查询的信息，设置filterable开启搜索模式，单选和多选都支持。
            </template>
            <template #component>
                <s-select  placeholder="单选搜索" v-model="value7"  style="display: inline-block" filterable>
                    <s-option v-for="item in options"  :key="item.value"  :value="item.value" :label="item.label"></s-option>
                </s-select>
                <s-select placeholder="多选搜索" v-model="value8"  style="display: inline-block" filterable multiple>
                    <s-option v-for="item in options"  :key="item.value"  :value="item.value" :label="item.label"></s-option>
                </s-select>
            </template>
        </doc-feature>
        <doc-spec :infos="items1">
            <template #title>
                Select Props
            </template>
        </doc-spec>
        <doc-spec :infos="items2">
            <template #title>
                Option Props
            </template>
        </doc-spec>
    </div>
</template>

<script>
    import DocFeature from "./common/feature";
    import DocSpec from "./common/spec";
    import SSelect from "../../../src/components/select/select";
    import SOption from "../../../src/components/select/option";
    export default {
        name: "select-demo",
        components: {
            DocFeature,
            DocSpec,
            SSelect,
            SOption
        },
        data() {
            return {
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                options2: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶',
                    disabled: true
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                cities: [{
                    value: 'Beijing',
                    label: '北京'
                }, {
                    value: 'Shanghai',
                    label: '上海'
                }, {
                    value: 'Nanjing',
                    label: '南京'
                }, {
                    value: 'Chengdu',
                    label: '成都'
                }, {
                    value: 'Shenzhen',
                    label: '深圳'
                }, {
                    value: 'Guangzhou',
                    label: '广州'
                }],
                value: "",
                value2: "",
                value3: "",
                value4: "",
                value5: "",
                value6: "",
                value7: "",
                value8: "",
                code1: `<s-select  v-model="value">
                    <s-option v-for="item in options"  :key="item.value"  :value="item.value" :label="item.label"></s-option>
                </s-select>`,
                jsCode1: `data() {
            return {
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value: ""
}`,
                code2: `<s-select  v-model="value2" disabled>
                    <s-option v-for="item in options"  :key="item.value"  :value="item.value" :label="item.label" ></s-option>
                </s-select>
                <s-select  v-model="value3">
                    <s-option v-for="item in options2"  :key="item.value"  :value="item.value" :label="item.label" :disabled="item.disabled"></s-option>
                </s-select>`,
                jsCode2: `data() {
            return {
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶',
                    disabled: true
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value2: "",
                value3: ""
}`,
                code3: `<s-select  v-model="value4" clearable>
                    <s-option v-for="item in options"  :key="item.value"  :value="item.value" :label="item.label"></s-option>
                </s-select>`,
                code4: `<s-select  v-model="value5" multiple>
                    <s-option v-for="item in options"  :key="item.value"  :value="item.value" :label="item.label"></s-option>
                </s-select>`,
                code5: `<s-select v-model="value6">
                    <s-option
                            v-for="item in cities"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        <span style="float: left">{{ item.label }}</span>
                        <span style="float: right; color: #ccc;">{{ item.value }}</span>
                    </s-option>
                </s-select>`,
                code6: `<s-select  v-model="value7"  style="display: inline-block" filterable>
                    <s-option v-for="item in options"  :key="item.value"  :value="item.value" :label="item.label"></s-option>
                </s-select>
                <s-select  v-model="value8"  style="display: inline-block" filterable multiple>
                    <s-option v-for="item in options"  :key="item.value"  :value="item.value" :label="item.label"></s-option>
                </s-select>`,
                items1: [
                    {parameter: "value", spec: "绑定值", type: "Number | String | Array", optionValue: "—", defaultValue: "—"},
                    {parameter: "placeholder", spec: "占位符", type: "String", optionValue: "—", defaultValue: "请选择"},
                    {parameter: "multiple", spec: "是否开启多选", type: "Boolean", optionValue: "—", defaultValue: "false"},
                    {parameter: "disabled", spec: "是否禁用这个选择器", type: "Boolean", optionValue: "—", defaultValue: "false"},
                    {parameter: "clearable", spec: "是否开启清空功能", type: "Boolean", optionValue: "—", defaultValue: "false"},
                    {parameter: "filterable", spec: "是否开启索索模式", type: "Boolean", optionValue: "—", defaultValue: "false"},
                ],
                items2: [
                    {parameter: "value", spec: "选项的值", type: "Number | String", optionValue: "—", defaultValue: "—"},
                    {parameter: "label", spec: "选项标签", type: "Number | String", optionValue: "—", defaultValue: "—"},
                    {parameter: "disabled", spec: "是否禁用这个选项", type: "Boolean", optionValue: "—", defaultValue: "false"}
                ],
            }
        },
    }
</script>

<style scoped>
        .s-select {
            width: 200px;
        }
</style>
