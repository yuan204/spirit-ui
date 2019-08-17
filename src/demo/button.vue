<template>
   <div class="btns">
       <s-button>默认按钮</s-button>
       <s-button type="primary">primary按钮</s-button>
       <s-button type="info">info按钮</s-button>
       <s-button type="success">success按钮</s-button>
       <s-button type="danger">danger按钮</s-button>
       <s-button type="warning">warning按钮</s-button>
       <hr>
       <s-button disabled>默认按钮</s-button>
       <s-button type="primary" disabled>primary按钮</s-button>
       <s-button type="info" disabled>info按钮</s-button>
       <s-button type="success" disabled>success按钮</s-button>
       <s-button type="danger" disabled>danger按钮</s-button>
       <s-button type="warning" disabled>warning按钮</s-button>
       <hr>
        <s-button type="text">文字按钮</s-button>
        <s-button type="text" disabled>文字按钮</s-button>
       <hr>
       <hr>
       <s-button icon="user" type="success">设置</s-button>
       <s-button icon="clear" type="success">清除</s-button>
       <s-button icon="time" type="success" position="right">时间</s-button>
       <s-button icon="warning" type="warning" position="right">警告</s-button>
       <hr>
       <hr>
       <s-button  type="primary" loading>primary按钮</s-button>
       <hr>
       <s-button icon="setting">设置按钮</s-button>
       <s-button icon="setting" position="right">设置按钮</s-button>
       <s-button  normal>normal按钮</s-button>

       <s-button icon="setting" loading >primary按钮</s-button>
       <s-button type="text" >文字按钮</s-button>
   </div>
</template>

<script>
    import SButton from "@/components/button/button";
    export default {
        name: "buttonDemo",
        components:{
            SButton
        },
        methods: {
            click() {
                console.log(2);
            }
        },
    }
</script>

<style scoped>
    .btns > * {
        margin-right: 1em;
    }
</style>
