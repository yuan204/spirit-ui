<template>
    <div class="s-main">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "sMain"
    }
</script>

<style scoped lang="scss">
    @import "../../styles/common.scss";
    .s-main {
        /*flex-grow: 1;*/

        padding: 20px;
    }
</style>
