<template>
    <div class="s-sticky"  ref="stickyRef" :class="stickyClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "SpiritSticky",
        props: {
            distance: {
                type: Number,
                default: 0
            },

        },
        data() {
            return {

                isSticky:false,
            }
        },
        computed: {

            stickyClass() {
                return {
                    "s-sticky-class": this.isSticky
                }
            }
        },
        mounted() {
            const stickyEle = this.$refs.stickyRef
            const {top,width} = stickyEle.getBoundingClientRect();
            stickyEle.style.width = width + "px"
            window.onscroll =  () =>  {
                if (window.pageYOffset >= top - this.distance){
                    stickyEle.style.top = this.distance + "px";
                    this.isSticky = true
                }
                else{
                    stickyEle.style.top = top + "px";
                    this.isSticky = false
                }





            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../styles/common.scss";
    .s-sticky-class {
        margin-top: 0 !important;
        position: fixed !important;
    }

</style>
