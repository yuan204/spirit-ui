<template>
    <transition



            v-on:before-enter="beforeEnter"
            v-on:enter="enter"


            v-on:before-leave="beforeLeave"
            v-on:leave="leave"





    >
        <slot></slot>
    </transition>
</template>

<script>
    export default {
        name: "SpiritCollapseTransition",
        data() {
            return {}
        },
        methods: {

            beforeEnter: function (el) {

                el.style.height = 0;


            },

            enter: function (el) {

                el.style.transition = "all .2s linear"

                el.style.height =el.scrollHeight + "px"



                el.style.overflow = "hidden"

            },





            beforeLeave: function (el) {
                el.style.height =el.scrollHeight + "px"


            },
            leave: function (el) {

                 setTimeout(() => {
                     el.style.transition = "all .2s linear"
                     el.style.height = 0;
                     el.style.overflow = "hidden"
                 },0)




            },



        }
    }
</script>

<style scoped lang="scss">
    @import "../../styles/common.scss";

</style>


