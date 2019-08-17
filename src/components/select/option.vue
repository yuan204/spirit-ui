<template>
    <div class="s-option" @click="handleSelect" :class="{active,disabled}">
        <template v-if="!$slots.default">{{label}}</template>
        <slot></slot>
        <s-icon name="selected" v-show="select.multiple && active"></s-icon>
    </div>
</template>

<script>
    import EmitMixin from "../../mixins/emitter";
    import SIcon from "../icon/icon";




    export default {
        name: "sOption",
        props: {
            value: {
                type: [Number, String]
            },
            label: {
                type: [Number, String]
            },
            disabled: {
                type: Boolean,
                default: false
            },

        },
        components: {
            SIcon
        },
        inject: ["select"],
        mixins: [EmitMixin],
        data() {
            return {
                active: false,
            }
        },
        watch: {
            "select.selected": {
                handler(newValues) {

                    if (Array.isArray(newValues)) {
                        if (!newValues.includes(this.value))
                            this.active = false
                        else
                            this.active = true
                    } else {
                        // console.log(newValues === this.value);
                        this.active = newValues === this.value
                    }
                },
                immediate: true
            }

        },
        methods: {
            handleSelect() {
                let showOptions = false;
                if (this.disabled) return
                if (this.select.multiple) {
                    this.active = !this.active
                    showOptions = true
                } else {
                    // this.active = true
                    showOptions = false
                }
                this.dispatch("sSelect", "select",this,showOptions);
            }
        },
        created() {
            if (this.disabled) return
            this.dispatch("sSelect", "init-options",this);
        }
    }
</script>

<style scoped lang="scss">
    .s-option {
        font-size: 14px;
        padding: 5px 10px;
        color: #606266;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;

        &:hover {
            background-color: #F5F7FA;

        }

        &.active {
            background-color: #F5F7FA;
            color: #409eff;
            font-weight: bold;

        }
        &.disabled {
            cursor: not-allowed;
            color: #c0c4cc;
            &:hover {
                background-color: white;
            }
        }




    }
</style>
