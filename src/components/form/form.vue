<template>
    <div :class="{horizontal:inline}">
        <slot></slot>
    </div>
</template>

<script>

    export default {
        name: "sForm",
        props: {
            rules: {
                type: Object,
            },
            model: {
                type: Object
            },
            inline: {
                type: Boolean,
                default: false
            },
            labelWidth: {
                type: String
            },
            labelPosition: {
                type: String,
                default: "right",

            }
        },
        provide() {
            return {
                form:this
            }
        },
        methods: {
            validate(resolve,reject) {
               Promise.all(this.formItems.map(item => item.validate()))
                   .then(resolve,reject)

            }
        },
        data() {
            return {
                formItems: []
            }
        },
        created() {
            this.$on("form-item-add",(item) => {
                this.formItems.push(item)
            })
            this.$on("form-item-remove",item => {
                this.formItems = this.formItems.filter(field => field !== item)
            })
        }
    }
</script>

<style scoped lang="scss">
    .horizontal {
       & > .s-form-item {
           display: inline-block;
         }
    }
</style>
