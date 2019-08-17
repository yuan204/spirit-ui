<template>
    <s-button-group v-if="type === 'button'">
        <slot></slot>
    </s-button-group>
    <div v-else>
        <slot></slot>
    </div>
</template>

<script>
    import SButtonGroup from "../button/button-group";


    export default {
        name: "sRadioGroup",
        components: {
            SButtonGroup
        },
        props: {
            value:{},
            vertical: {
                type:Boolean,
                default:false
            },
            type: {
                type: String
            }

        },
        data() {
            return {
                group: {
                    radioValue:this.value,
                    isGroup:true,
                    vertical: this.vertical,
                    type: this.type
                }
            }
        },
        provide() {
           return {
             group: this.group
           }
        },
        mounted() {
            this.$slots.default.forEach(slot => {
                slot.componentInstance &&  slot.componentInstance.$on("change",(v) => {
                    this.$emit("input",v)
                })

            })
        },
        watch: {
            value(newVal,oldVal) {

                this.group.radioValue = newVal;

            }
        }
    }
</script>

<style scoped>

</style>
