<template>
    <div class="s-container" :style="containerStyle">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "sContainer",
        mounted() {
            this.$children.forEach(child => {
                if (["sHeader","sFooter"].includes(child.$options.name)){
                    this.direction = "column";


                }

            })

        },
        data() {
            return {
                direction: "row"
            }
        },
        computed: {
            containerStyle() {
                return {
                    flexDirection: this.direction
                }
            }
        },
    }
</script>

<style scoped lang="scss">
    @import "../../styles/common.scss";
    .s-container {
        display: flex;
        &>* {
            flex: auto;
        }

    }
</style>
