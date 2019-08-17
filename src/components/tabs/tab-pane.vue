<template>
   <div class="s-tab-pane" >
       <slot name="label" v-if="false"></slot>
       <slot></slot>
   </div>
</template>

<script>
    export default {
        name: "sTabPane",
        props: {
            label: {
                type: String,
            },
            name: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
       destroyed() {
            this.$parent.$emit("tab-pane-destroy",this)
        }
    }
</script>

<style scoped lang="scss">
    @import "../../styles/common.scss";
    .s-tab-pane {
        display: none;
    }
</style>
