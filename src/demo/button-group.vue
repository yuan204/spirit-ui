<template>
    <s-button-group>
        <s-button>button 1</s-button>
        <s-button>button 2</s-button>
        <s-button>button 3</s-button>
        <s-button>button 4</s-button>
    </s-button-group>
</template>

<script>
    import SButtonGroup from "@/components/button/button-group";
    import SButton from "@/components/button/button";


    export default {
        name: "button-group",
        components:{
            SButtonGroup,
            SButton
        }
    }
</script>

<style scoped>

</style>
