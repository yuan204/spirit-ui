<template>
    <div class="s-collapse" >
        <slot></slot>
    </div>
</template>

<script>

    export default {
        name: "sCollapse",
        props: {
            value: {
                type: [Array,String]
            },
            accordion: {
                type: Boolean,
                default:false,
            }

        },
        data() {
            return {
                selected: this.value
            }
        },
        watch: {
            selected(newVal) {
                this.$emit("input",newVal)
                this.$emit("change",newVal)
            }
        },


        created() {
            this.$on("change",(val) => {
                if (this.accordion) {

                    this.$children.forEach(item => {
                        if (item.name === val) {
                            item.show = true

                        }
                    })
                } else {
                    this.$children.forEach(item => {

                        if(val.includes(item.name)) {
                            item.show = true
                        } else {
                            item.show = false
                        }
                    })
                }
            })

        }
    }
</script>

<style scoped lang="scss">
    @import "../../styles/common.scss";
    .s-collapse {
        border: 1px solid #dcdee2;
        border-top: none;
    }
</style>
