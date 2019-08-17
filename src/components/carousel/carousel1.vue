<template>
    <div class="s-carousel">
        <div class="s-carousel-items" :style="carouselStyle" ref="originCarousel">
            <slot></slot>
        </div>
        <div class="s-carousel-items" :style="copyCarouselStyle" ref="copyCarousel" :class="{higher:isHigher}">
        </div>
        <button class="s-arrow s-arrow-left" @click="prev">
            <s-icon name="leftArrow"></s-icon>
        </button>
        <button class="s-arrow s-arrow-right" @click="next">
            <s-icon name="rightArrow"></s-icon>
        </button>
    </div>
</template>

<script>
    import SIcon from "@/components/icon/icon";


    export default {
        name: "SpiritCarousel",
        props: {
            loop: {
                type: Boolean,
                default: true
            },
        },
        components: {
            SIcon
        },
        data() {
            return {
                width: 0,
                height: 0,
                offset: 0,
                left: 0,
                copyLeft: 0,
                isHigher: false
            }
        },
        computed: {
            carouselStyle() {
                return {
                    width: this.width + "px",
                    height: this.height + "px",
                    left: this.left + "px",

                }
            },
            copyCarouselStyle() {
                return {
                    width: this.width + "px",
                    height: this.height + "px",
                    left: this.copyLeft + "px",

                }
            },
        },
        mounted() {
            console.log(this.$children);
            const w = this.$el.getBoundingClientRect().width
            const h = this.$el.getBoundingClientRect().height
            this.width = (this.$children.length - 2) * w
            this.height = h
            this.offset = w
            this.$children.forEach(item => item.$el.style.width = w + "px")
            if (this.loop) {
                this.$refs.copyCarousel.innerHTML = this.$refs.originCarousel.innerHTML
                // this.copyLeft = -this.width
            }

        },
        methods: {
            prev() {
                // if (this.left === 0) {
                //     this.isHigher = true;
                // }
                // if (this.isHigher) {
                //     this.copyLeft += this.offset
                //
                //     return
                // }
                // this.left += this.offset
                console.log(2);
                if (this.isHigher) {
                    console.log(3);
                    if (this.copyLeft === 0) {
                        this.isHigher = false;
                        this.left = -this.width
                        this.left += this.offset

                    }
                    this.copyLeft += this.offset
                } else {
                    if (this.left === 0) {

                        this.copyLeft = -this.width

                        // this.$refs.copyCarousel.style.left = this.copyLeft + "px"
                        this.$refs.copyCarousel.offsetWidth
                          // this.$forceUpdate()
                           this.$refs.copyCarousel.style.transition = "left .3s"
                           this.$refs.originCarousel.style.transition = "left .3s"



                        this.isHigher = true;
                         this.copyLeft += this.offset

                        this.$refs.copyCarousel.style.left = this.copyLeft + "px"


                    }
                    this.left += this.offset
                    // this.$refs.originCarousel.style.left = this.offset + "px"

                }
            },
            next() {
                this.left -= this.offset
            }
        },

    }
</script>

<style scoped lang="scss">
    @import "../../styles/common.scss";

    .s-carousel {
        width: 600px;
        height: 300px;
        overflow: hidden;
        position: relative;

        .s-carousel-items {

            position: absolute;
            top: 0;
            left: 0;
            /*transition: left .3s;*/
            z-index: 10;

            &.higher {
                z-index: 20;
            }


        }

        .s-arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 36px;
            height: 36px;
            background-color: rgba(31, 45, 61, .11);
            border: none;
            border-radius: 50%;
            color: white;
            outline: none;
            cursor: pointer;
            z-index: 50;

            &.s-arrow-left {
                left: 10px;

            }

            &.s-arrow-right {
                right: 10px;
            }

            .s-icon {
                width: 16px !important;
            }
        }
    }
</style>
