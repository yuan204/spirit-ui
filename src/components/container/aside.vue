<template>
    <div :style="{width}" class="s-aside">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "sAside",
        props: {
            width: {
                type: String,
                default: "300px"
            },
        },
    }
</script>

<style scoped lang="scss">
    @import "../../styles/common.scss";
    .s-aside {
        flex: none;
    }
</style>
