<template>
    <svg class="s-icon" aria-hidden="true">
        <use :xlink:href="`#icon-${name}`"></use>
    </svg>
</template>

<script>
    import "./svg"

    export default {
        name: "sIcon",
        props:{
            name: {
                type: String,
                required:true
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../styles/common.scss";
    .s-icon {
        width: 1em; height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;


    }
</style>
