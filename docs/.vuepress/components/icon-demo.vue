<template>
   <div>
       <doc-feature :codes="code">
           <template #title>
               使用方法
           </template>
           <template #component>
               <s-icon name="success"></s-icon>
               <s-icon name="search"></s-icon>
               <s-icon name="time"></s-icon>
               <s-icon name="lock"></s-icon>
           </template>
       </doc-feature>
       <doc-spec :infos="items">
           <template #title>
               Icon Props
           </template>
       </doc-spec>
   </div>
</template>

<script>
    import SIcon from "../../../src/components/icon/icon";
    import DocSpec from "./common/spec";
    import DocFeature from "./common/feature";
    export default {
        name: "icon-demo",
        components: {
            SIcon,
            DocSpec,
            DocFeature
        },
        data() {
            return {
                code: `<s-icon name="success"></s-icon>
            <s-icon name="search"></s-icon>
            <s-icon name="time"></s-icon>
            <s-icon name="lock"></s-icon>`,
                items:[
                    {parameter:"name",spec:"图标名字",type:"String",optionValue:"—",defaultValue:"—"},]
            }
        },

    }
</script>

<style scoped>
    .s-icon {
        width: 30px;
        height: 30px;
    }
</style>
