<template>
    <div>
        <s-upload action="//jsonplaceholder.typicode.com/posts/" :before-upload="handleBeforeUpload">
            <s-button icon="upload">upload files</s-button>
        </s-upload>
        <s-upload action="//jsonplaceholder.typicode.com/posts/" drag>
            <s-icon name="upload">upload files</s-icon>
            <div>将文件拖到此处</div>
        </s-upload>
    </div>

</template>

<script>
    import SButton from "@/components/button/button";
    import SIcon from "@/components/icon/icon";
    import SUpload from "@/components/upload/upload";


    export default {
        name: "UploadDemo",
        components:{
            SUpload,
            SButton,
            SIcon
        },
        methods: {
            remove(file) {
                console.log(file);
            },
            handleExceed(file,fileList) {
                this.$message({
                    message: '文件数量超出了',
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
        data() {
            return {

            }
        },

    }
</script>

<style scoped>
 .s-upload {
     margin-left: 100px;
 }
</style>
