<template>

   <div>
       <s-button  @click="open2">成功</s-button>
       <s-button  @click="open3">警告</s-button>
       <s-button  @click="open1">消息</s-button>
       <s-button  @click="open4">错误</s-button>
   </div>
</template>

<script>
    import SButton from "@/components/button/button";


    export default {
        name: "MessageDemo",
        components: {
            SButton
        },
        methods: {
            open1() {
                this.$message({
                    showClose: true,
                    message: '这是一条消息提示'
                });
            },
            open2() {
                this.$message({
                    message: '恭喜你，这是一条成功消息',
                    type: 'success'
                });
            },

            open3() {
                this.$message({
                    message: '警告哦，这是一条警告消息',
                    type: 'warning'
                });
            },

            open4() {
                this.$message.error({
                    message:'错了哦，这是一条错误消息',
                    type: "error"
                });
            }
        },
    }
</script>

<style scoped>

</style>
