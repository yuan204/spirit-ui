<template>
    <div :style="{height}" class="s-header">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "sHeader",
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
