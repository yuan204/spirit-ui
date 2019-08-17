<template>
   <div>
     <div>
         <s-switch
                 v-model="status"
                 open-color="#13ce66"
                 close-color="#ff4949"
         >
         </s-switch>
         <s-switch size="small" v-model="status"></s-switch>
         <s-switch size="large" v-model="status" disabled></s-switch>
         <s-switch
                 v-model="status"
                 open-color="#13ce66"
                 close-color="#ff4949"
                 close-text="不吃饭"
                 open-text="吃饭"
         >
         </s-switch>
         <s-switch  v-model="status" @change="handleChange"></s-switch>
     </div>

   </div>
</template>

<script>
    import SSwitch from "@/components/switch/switch";


    export default {
        name: "SwitchDemo",
        components:{
            SSwitch
        },
        data() {
            return {
                status: false
            }
        },
        methods: {
            handleChange(status) {
                console.log("开关状态: " + status)
            }
        },
    }
</script>

<style scoped>

</style>
