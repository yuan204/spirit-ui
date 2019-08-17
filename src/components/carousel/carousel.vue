<template>
    <div class="s-carousel">
        <div class="s-carousel-items" :style="carouselStyle" ref="originCarousel" >
            <slot></slot>
        </div>
        <button class="s-arrow s-arrow-left" ref="prevBtn">
            <s-icon name="leftArrow"></s-icon>
        </button>
        <button class="s-arrow s-arrow-right" ref="nextBtn">
            <s-icon name="rightArrow"></s-icon>
        </button>
    </div>
</template>

<script>
    import SIcon from "@/components/icon/icon";


    export default {
        name: "SpiritCarousel",

        components: {
            SIcon
        },
        props: {
            autoplay: {
                type: Boolean,
                default: true
            },
            duration: {
                type: Number,
                default: 3000
            }
        },
        data() {
            return {
                width: 0,
                height: 0,
                offset: 0,
                left: 0,
                cur: 1,
                transition: 0,
                timer: null
            }
        },
        computed: {
            carouselStyle() {
                return {
                    width: this.width + "px",
                    height: this.height + "px",
                    left: this.left + "px",
                    transition: `left ${this.transition}ms`

                }
            },
        },
        mounted() {
            const w = this.$el.getBoundingClientRect().width
            const h = this.$el.getBoundingClientRect().height
            this.width = (this.$slots.default.length + 2) * w
            this.height = h
            this.offset = w
            this.$children.forEach(item => item.$el.style.width = w + "px")

            const slots = this.$slots.default;
            this.$refs.originCarousel.append(slots[0].elm.cloneNode(true))
            this.$refs.originCarousel.prepend(slots[slots.length - 1].elm.cloneNode(true))
            this.left = -this.offset

            this.$refs.prevBtn.onclick = this.prev
            this.$refs.nextBtn.onclick = this.next

            if (this.autoplay) {
                // this.transition = this.duration
                this.timer = setTimeout(() => {
                    this.next()
                },this.duration)

            }
            //

            this.$refs.originCarousel.addEventListener("transitionend", this.cancel)

        },
        methods: {
            prev(e) {
                this.transition = 500
                const carouselRef = this.$refs.originCarousel
                this.left += this.offset
                this.$refs.prevBtn.onclick = null

                carouselRef.addEventListener("transitionend", this.cancel)


            },
            next(e) {
                console.log(this.left);
                this.transition = this.timer ? this.duration : 500
                const carouselRef = this.$refs.originCarousel
                this.left -= this.offset
                // if (!this.autoplay)
                if(e){
                    this.$refs.nextBtn.onclick = null
                }

                // carouselRef.addEventListener("transitionend", this.cancel.bind(this,e))

            },
            cancel(e) {
                const carouselRef = this.$refs.originCarousel

                if (this.left === 0) {
                    this.transition = 0
                    this.left = -(this.width - this.offset * 2)
                    carouselRef.offsetWidth


                } else if (this.left === -(this.width - this.offset)) {
                    this.transition = 0
                    this.left = -this.offset
                }
                // if (!this.autoplay) {
                if (e) {
                    this.$refs.prevBtn.onclick = this.prev
                    this.$refs.nextBtn.onclick = this.next
                }

                // }

                // carouselRef.removeEventListener("transitionend", this.cancel)
               this.next()


            },
        


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

            /*&.transition {*/
            /*    transition: left .5s;*/
            /*}*/


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
