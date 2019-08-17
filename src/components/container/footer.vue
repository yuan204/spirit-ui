<template>
    <div :style="{height}" class="s-footer">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "sFooter",
        props: {
            height: {
                type: String,
                default: "60px"
            },
        },
    }
</script>

<style scoped lang="scss">
    @import "../../styles/common.scss";

</style>
