<template>
        <s-carousel >
            <s-carousel-item>
                <div class="demo-carousel">1</div>
            </s-carousel-item>
            <s-carousel-item>
                <div class="demo-carousel">2</div>
            </s-carousel-item>
            <s-carousel-item>
                <div class="demo-carousel">3</div>
            </s-carousel-item>
            <s-carousel-item>
                <div class="demo-carousel">4</div>
            </s-carousel-item>
        </s-carousel>
</template>

<script>
    import {SCarousel, SCarouselItem} from "@/components/carousel";


    export default {
        name: "CarouselDemo",
        components: {
            SCarouselItem,
            SCarousel
        }
    }
</script>

<style scoped lang="scss">
 .s-carousel {
     margin: 50px auto;
     .demo-carousel {
         background-color: red;
         display: flex;
         justify-content: center;
         align-items: center;

     }
 }
</style>
