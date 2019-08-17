<template>
    <div>
        <doc-feature :codes="code1" :js-codes="jscode1">
            <template #title>
                基础用法
            </template>
            <template #description>
                可以包含各种表单项,例如radio,checkbox,select,textarea,button等
            </template>
            <template #component>
                <s-form :model="formItem">
                    <s-form-item>
                        <s-input type="text" v-model="formItem.input" placeholder="请输入">
                        </s-input>
                    </s-form-item>
                    <s-form-item>
                        <s-input type="textarea" placeholder="文本框" v-model="formItem.text"></s-input>
                    </s-form-item>
                    <s-form-item>
                        <s-radio-group v-model="fruit">
                            <s-radio value="apple">苹果</s-radio>
                            <s-radio value="pear">梨</s-radio>
                            <s-radio value="banana">香蕉</s-radio>
                        </s-radio-group>
                    </s-form-item>
                    <s-form-item>
                        <s-button type="primary">登录</s-button>
                        <s-button type="primary">注册</s-button>
                    </s-form-item>
                </s-form>
            </template>
        </doc-feature>
        <doc-feature :codes="code3">
            <template #title>
                行内表单
            </template>
            <template #description>
                inline属性可以使表单水平排列
            </template>
            <template #component>
                <s-form :model="formItem" inline label-width="100px">
                    <s-form-item label="输入框">
                        <s-input type="text" v-model="formItem.input" placeholder="请输入">
                        </s-input>
                    </s-form-item>
                    <s-form-item label="登录">
                        <s-button type="primary">登录</s-button>
                    </s-form-item>
                </s-form>
            </template>
        </doc-feature>
        <doc-feature :codes="code4">
            <template #title>
                对齐方式
            </template>
            <template #description>
                设置属性label-position可以改变标签的位置,left左对齐,right右对齐,top位于表单项的顶部
            </template>
            <template #component>
                <s-form label-position="left" label-width="100px">
                    <s-form-item label="名字">
                        <s-input type="text"  placeholder="name">
                        </s-input>
                    </s-form-item>
                    <s-form-item label="年龄">
                        <s-input type="text"  placeholder="age">
                        </s-input>
                    </s-form-item>
                    <s-form-item label="家庭地址">
                        <s-input type="text"  placeholder="address">
                        </s-input>
                    </s-form-item>
                </s-form>
                <s-form label-position="right" label-width="100px">
                    <s-form-item label="名字">
                        <s-input type="text"  placeholder="name">
                        </s-input>
                    </s-form-item>
                    <s-form-item label="年龄">
                        <s-input type="text"  placeholder="age">
                        </s-input>
                    </s-form-item>
                    <s-form-item label="家庭地址">
                        <s-input type="text"  placeholder="address">
                        </s-input>
                    </s-form-item>
                </s-form>
                <s-form label-position="top" >
                    <s-form-item label="名字">
                        <s-input type="text"  placeholder="name">
                        </s-input>
                    </s-form-item>
                    <s-form-item label="年龄">
                        <s-input type="text"  placeholder="age">
                        </s-input>
                    </s-form-item>
                    <s-form-item label="家庭地址">
                        <s-input type="text"  placeholder="address">
                        </s-input>
                    </s-form-item>
                </s-form>
            </template>
        </doc-feature>
        <doc-feature :codes="code2" :js-codes="jsCode2">
            <template #title>
                表单验证
            </template>
            <template #description>
                基于
                <a href="https://github.com/yiminghe/async-validator">async-validator</a>
                实现的数据验证,
                必须给form组件设置rules规则,同时给FormItem组件设置prop指定表单域 model对应的字段,验证每个表单项的触发方式有两种, 分别是blur和change,在rules指定。
            </template>
            <template #component>
                <s-form ref="formInline" :model="formInline" :rules="ruleInline" label-width="100px">
                    <s-form-item prop="user" label="username">
                        <s-input type="text" v-model="formInline.user" placeholder="Username">
                        </s-input>
                    </s-form-item>
                    <s-form-item prop="password" label="password">
                        <s-input type="password" v-model="formInline.password" placeholder="Password">
                        </s-input>
                    </s-form-item>
                    <s-form-item>
                        <s-button type="primary" @click="handleSubmit('formInline')">Signin</s-button>
                    </s-form-item>
                </s-form>
            </template>
        </doc-feature>

        <doc-spec :infos="items1">
            <template #title>
                Form Attributes
            </template>
        </doc-spec>
        <doc-spec :infos="items2">
            <template #title>
                FormItem Attributes
            </template>
        </doc-spec>
        <doc-method :infos="items3">
            <template #title>
                Form Methods
            </template>
        </doc-method>
    </div>
</template>

<script>
    import DocFeature from "./common/feature";
    import DocSpec from "./common/spec";
    import DocMethod from "./common/method";
    import {SFormItem, SForm} from "../../../src/components/form";
    import SInput from "../../../src/components/input/input";
    import SButton from "../../../src/components/button/button";
    import SRadioGroup from "../../../src/components/radio/radio-group";
    import SRadio from "../../../src/components/radio/radio";

    export default {
        name: "form-demo",
        components: {
            DocFeature,
            DocSpec,
            SFormItem,
            SForm,
            SInput,
            SButton,
            DocMethod,
            SRadioGroup,
            SRadio
        },
        data() {
            return {
                fruit: "apple",
                formItem: {
                    input: "",
                    text: ""
                },
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        {required: true, message: '请填写用户名', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请填写密码.', trigger: 'blur'},
                        {type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'change'}
                    ]
                },
                code1: `<s-form  :model="formItem" >
                <s-form-item>
                    <s-input type="text" v-model="formItem.input" placeholder="请输入">
                    </s-input>
                </s-form-item>
                <s-form-item>
                    <s-input type="textarea" placeholder="文本框" v-model="formItem.text"></s-input>
                </s-form-item>
                <s-form-item>
                    <s-radio-group v-model="fruit">
                        <s-radio  value="apple">苹果</s-radio>
                        <s-radio  value="pear">梨</s-radio>
                        <s-radio value="banana">香蕉</s-radio>
                    </s-radio-group>
                </s-form-item>
                <s-form-item>
                    <s-button type="primary">登录</s-button>
                    <s-button type="primary" >注册</s-button>
                </s-form-item>`,
                code2: `<s-form ref="formInline" :model="formInline" :rules="ruleInline" inline>
                <s-form-item prop="user">
                    <s-input type="text" v-model="formInline.user" placeholder="Username">
                    </s-input>
                </s-form-item>
                <s-form-item prop="password">
                    <s-input type="password" v-model="formInline.password" placeholder="Password">
                    </s-input>
                </s-form-item>
                <s-form-item>
                    <s-button type="primary" @click="handleSubmit('formInline')">Signin</s-button>
                </s-form-item>
            </s-form>`,
                code3: `<s-form  :model="formItem" inline label-width="100px">
                <s-form-item label="输入框">
                    <s-input type="text" v-model="formItem.input" placeholder="请输入">
                    </s-input>
                </s-form-item>
                <s-form-item label="登录">
                    <s-button type="primary">登录</s-button>
                </s-form-item>
            </s-form>`,
                code4: `<s-form label-position="left" label-width="100px">
                    <s-form-item label="名字">
                        <s-input type="text"  placeholder="name">
                        </s-input>
                    </s-form-item>
                    <s-form-item label="年龄">
                        <s-input type="text"  placeholder="age">
                        </s-input>
                    </s-form-item>
                    <s-form-item label="家庭地址">
                        <s-input type="text"  placeholder="address">
                        </s-input>
                    </s-form-item>
                </s-form>
                <s-form label-position="right" label-width="100px">
                    <s-form-item label="名字">
                        <s-input type="text"  placeholder="name">
                        </s-input>
                    </s-form-item>
                    <s-form-item label="年龄">
                        <s-input type="text"  placeholder="age">
                        </s-input>
                    </s-form-item>
                    <s-form-item label="家庭地址">
                        <s-input type="text"  placeholder="address">
                        </s-input>
                    </s-form-item>
                </s-form>
                <s-form label-position="top" >
                    <s-form-item label="名字">
                        <s-input type="text"  placeholder="name">
                        </s-input>
                    </s-form-item>
                    <s-form-item label="年龄">
                        <s-input type="text"  placeholder="age">
                        </s-input>
                    </s-form-item>
                    <s-form-item label="家庭地址">
                        <s-input type="text"  placeholder="address">
                        </s-input>
                    </s-form-item>
                </s-form>`,
                jscode1: `data () {
                    fruit:"apple",
                    formItem: {
                        input: "",
                        text: ""
                    },
                }`,
                jsCode2: `data () {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'change' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate(() => console.log("success"),() => console.log("fail"))
            }
        }`,
                items1: [
                    {parameter: "rules", spec: "验证规则 ", type: "Object", optionValue: "—", defaultValue: "—"},
                    {parameter: "model", spec: "表单数据", type: "Object", optionValue: "—", defaultValue: "—"},
                    {parameter: "inline", spec: "表单内联排列", type: "Boolean", optionValue: "—", defaultValue: "false"},
                    {parameter: "label-width", spec: "标签的宽度", type: "String", optionValue: "—", defaultValue: "—"},
                    {parameter: "label-position", spec: "标签的位置", type: "String", optionValue: "left | right | top", defaultValue: "right"},
                ],
                items2: [
                    {parameter: "label", spec: "标签文本 ", type: "Object", optionValue: "—", defaultValue: "—"},
                    {
                        parameter: "prop",
                        spec: "表单域 model 字段,用于表单验证规则必填字段",
                        type: "String",
                        optionValue: "—",
                        defaultValue: "—"
                    },
                ],
                items3: [
                    {
                        name: "validate",
                        spec: "对整个表单进行验证,参数有两个,一个是成功的回调,一个是失败的回调",
                        parameters: "Function(callback1,callback2)"
                    }
                ],
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate(this.success, this.fail)
            },
            success() {
                this.$message({
                    message: '表单验证成功',
                    type: 'success'
                });
            },
            fail() {
                this.$message({
                    message: '表单验证失败',
                    type: 'error'
                });
            }
        },

    }
</script>

<style scoped>

</style>
