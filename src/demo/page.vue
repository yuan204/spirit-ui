<template>
   <div class="demoPage">
       <s-page :current-page.sync="curPage" :total="1000" background></s-page>
       {{curPage}}
       <s-page :total="70"></s-page>
       <s-page :total="10"></s-page>
       <s-page :total="12"></s-page>
       <s-page :total="1000" :page-sizes="[100, 200, 300, 400]"></s-page>
       <s-page :total="1000" show-jump show-total></s-page>
       <s-page :total="1000" prev-text="上一页" next-text="下一页"></s-page>
   </div>
</template>

<script>
    import SPage from "@/components/page/page";


    export default {
        name: "PageDemo",
        components: {
            SPage
        },
        data() {
            return {
                curPage: 5
            }
        },
    }
</script>

<style scoped>
    .demoPage {
        margin-left: 50px;
    }
</style>
