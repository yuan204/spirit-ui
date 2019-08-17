<template>
    <div class="s-carousel-item" >
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "SpiritCarouselItem",


    }
</script>

<style scoped lang="scss">
    .s-carousel-item {
        height: 100%;
        float: left;
       & > * {
            height: 100%;
        }
    }
</style>
