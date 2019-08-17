<template>
   <div class="input-demo">
       <s-input placeholder="请输入" ></s-input>
       <s-input placeholder="请输入" disabled></s-input>
       <s-input placeholder="请输入" clearable></s-input>
<!--       <s-input placeholder="请输入" icon="user" disabled></s-input>-->
<!--       <s-input placeholder="v-model绑定" icon="lock" v-model="input"></s-input>-->
<!--       {{input}}-->
<!--       <s-input placeholder="错误状态" suffix-icon="error"></s-input>-->
<!--       <s-input placeholder="清空"  clearable v-model="input"></s-input>-->
<!--       <s-input type="textarea"></s-input>-->
   </div>
</template>

<script>
    import SInput from "@/components/input/input";


    export default {
        name: "InputDemo",
        components:{
            SInput
        },
        data() {
            return {
                input: "aaaa"
            }
        },
    }
</script>

<style scoped>
.input-demo > * {
    margin-top: 10px;
}
</style>
