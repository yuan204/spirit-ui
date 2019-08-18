<template>
    <div>
        <doc-feature :codes="code1">
            <template #title>
                基础用法
            </template>
            <template #description>
                点击上传,一次只能上传一个文件
            </template>
            <template #component>
                <s-upload action="//jsonplaceholder.typicode.com/posts/">
                    <s-button icon="upload">upload files</s-button>
                </s-upload>
            </template>
        </doc-feature>
        <doc-feature :codes="code2" :js-codes="jscode2">
            <template #title>
                多选
            </template>
            <template #description>
                设置multiple,可以同时上传多个文件
            </template>
            <template #component>
                <s-upload action="//jsonplaceholder.typicode.com/posts/"
                          :on-exceed = "handleExceed"
                          multiple
                          :limit="3"


                >
                    <s-button icon="upload">upload files</s-button>
                </s-upload>
            </template>
        </doc-feature>
        <doc-feature :codes="code3">
            <template #title>
                拖拽上传
            </template>
            <template #description>
                设置属性drag，可以拖拽上传。
            </template>
            <template #component>
                <s-upload action="//jsonplaceholder.typicode.com/posts/" drag>
                    <s-icon name="upload"></s-icon>
                    <div>将文件拖到此处</div>
                </s-upload>
            </template>
        </doc-feature>
        <doc-feature :codes="code4" :js-codes="jscode4">
            <template #title>
                手动上传
            </template>
            <template #description>
                使用before-upload钩子手动控制文件上传。
            </template>
            <template #component>
                <s-upload action="//jsonplaceholder.typicode.com/posts/" :before-upload="handleBeforeUpload">
                    <s-button icon="upload">手动上传</s-button>
                </s-upload>
            </template>
        </doc-feature>
        <doc-spec :infos="items1">
            <template #title>
                upload Props
            </template>
        </doc-spec>
    </div>
</template>

<script>
    import DocFeature from "./common/feature";
    import DocSpec from "./common/spec";
    import SButton from "../../../src/components/button/button";
    import SIcon from "../../../src/components/icon/icon";
    import SUpload from "../../../src/components/upload/upload";
    import Message from "../../../src/components/message";
    import Vue from 'vue'
    Vue.use(Message)
    export default {
        name: "upload-demo",
        components: {
            SButton,
            SIcon,
            SUpload,
            DocFeature,
            DocSpec
        },
        data() {
            return {
                code1: `<s-upload action="//jsonplaceholder.typicode.com/posts/">
                <s-button icon="upload">upload files</s-button>
            </s-upload>`,
                code2: `<s-upload action="//jsonplaceholder.typicode.com/posts/"
                  :on-exceed = "handleExceed"
                  multiple
                  :limit="3">
            <s-button icon="upload">upload files</s-button>
        </s-upload>`,
                jscode2: `methods: {
            handleExceed(file,fileList) {
                this.$message({
                    message: '文件数量超出了,最多只能上传3个',
                    type: 'warning'
                });
            }
        }`,
                code3: `<s-upload action="//jsonplaceholder.typicode.com/posts/" drag>
                    <s-icon name="upload"></s-icon>
                    <div>将文件拖到此处</div>
                </s-upload>`,
                code4: `<s-upload action="//jsonplaceholder.typicode.com/posts/" :before-upload="handleBeforeUpload">
                    <s-button icon="upload">手动上传</s-button>
                </s-upload>`,
                jscode4: `methods: {
            handleBeforeUpload(file) {
                if (file.type !== "image/png") {
                    this.$message.error({
                        message: '上传头像图片只能是 PNG 格式!'
                    })
                }
                return file.type === "image/png"
            }
        }`,
                items1: [
                    {parameter: "action", spec: "上传的地址,必须设置", type: "String", optionValue: "—", defaultValue: "—"},
                    {parameter: "multiple", spec: "是否可以同时上传多个文件", type: "Boolean", optionValue: "—", defaultValue: "false"},
                    {parameter: "limit", spec: "允许最多上传文件个数", type: "Number", optionValue: "—", defaultValue: "—"},
                    {parameter: "on-remove", spec: "删除文件的钩子", type: "Function", optionValue: "—", defaultValue: "—"},
                    {parameter: "on-exceed", spec: "文件超出限制时的钩子", type: "Function", optionValue: "—", defaultValue: "—"},
                    {parameter: "before-upload", spec: "上传文件之前的钩子,如果返回false则停止上传", type: "Function", optionValue: "—", defaultValue: "—"},
                    {parameter: "drag", spec: "是否可以拖拽", type: "Boolean", optionValue: "—", defaultValue: "false"},
                ],
            }
        },
        methods: {
            handleExceed(file,fileList) {
                this.$message({
                    message: '文件数量超出了,最多只能上传3个',
                    type: 'warning'
                });
            },
            handleBeforeUpload(file) {
                if (file.type !== "image/png") {
                    this.$message.error({
                        message: '上传头像图片只能是 PNG 格式!'
                    })
                }
                return file.type === "image/png"
            }
        },
    }
</script>

<style scoped>

</style>
