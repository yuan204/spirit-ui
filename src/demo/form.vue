<template>
    <div>
        <s-form  :model="formItem" inline label-width="100px">
            <s-form-item label="输入框">
                <s-input type="text" v-model="formItem.input" placeholder="请输入">
                </s-input>
            </s-form-item>
            <s-form-item label="登录">
                <s-button type="primary">登录</s-button>
            </s-form-item>
        </s-form>
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

    </div>
</template>

<script>
    import {SForm,SFormItem} from "@/components/form";
    import SInput from "@/components/input/input";
    import SButton from "@/components/button/button";



    export default {
        name: "FormDemo",
        components: {
            SForm,SFormItem,SInput,SButton
        },
        data () {
            return {
                fruit:"apple",
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
                this.$refs[name].validate(this.success,() => console.log("fail"))
            },
            success() {
                this.$message({
                    message: '表单验证成功',
                    type: 'success'
                });
            },
        }

    }
</script>

<style scoped>

</style>
