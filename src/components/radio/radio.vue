<template>
    <s-button v-if="group && group.type === 'button'"
              @click="handleClick"
              ref="btnRadio"
              :disabled="disabled"
              :type="group.radioValue === value ? 'primary' : undefined"
    >
        <slot></slot>
    </s-button>
    <label class="s-radio-wrapper" :style="displayStyle" :class="{disabled,'border-checked':border && checked,border}" v-else>
       <input type="radio"
              :checked="checked"
              @change="$emit('change',value)"
              :value="value"
              class="s-radio"
              :disabled="disabled"

       >
        <span class="fake-radio"></span>
        <span class="text"> <slot></slot></span>
    </label>
</template>

<script>


    import SButton from "../button/button";
    // import EmitMixin from "../../mixins/emitter";


    export default {
        name: "sRadio",
        components: {
            SButton
        },
        // mixins:[EmitMixin],
        model: {
            prop: "modelValue",
            event: "change"
        },
         inject: {
            group: {
                default: null
            }
         },

        props: {
            value: {

            },
            modelValue: {

            },
            disabled: {
                type:Boolean,
                default:false
            },
            border: {
                type:Boolean,
                default:false
            },
        },
        data() {
            return {
                type: undefined
            }
        },
        computed: {
            displayStyle() {
                return  {
                    display: this.group && this.group.vertical ? "block" : "inline-block"
                }
            },
            checked() {
                return this.group ? this.group.radioValue === this.value : this.value === this.modelValue
            }
        },
        methods: {
            handleClick() {
                this.$emit('change',this.value)
            }
        },

    }
</script>

<style scoped lang="scss">
    @import "../../styles/common.scss";
    @import "../../styles/color.scss";
    .s-radio-wrapper {


        align-items: center;
        position: relative;
        margin-right: 15px;
        display: inline-block;
        &.disabled {
            cursor: not-allowed;
            color: #ccc;
            .s-radio {
                &:checked + .fake-radio{
                    border-color: #ccc;


                }
                &:checked +  .fake-radio::after{

                    background-color: #C0C4CC;
                }
            }

        }

        &.border {
            border: 1px solid #ccc;
            border-radius: 4px;
            padding: 10px;
            margin-right: 40px;
            display: inline-block;
            .fake-radio {
                position: absolute;
                left: 10px;
                top: 50%;
                transform: translateY(-50%);


            }
        }
        &.border.border-checked {
            border-color: $primary;

        }
        .s-radio {
           opacity: 0;
            width: 16px;
            height: 16px;
            &:checked + .fake-radio{
                border-color: $primary;


            }
            &:checked +  .fake-radio::after{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                content: "";
                display: inline-block;
                width: 8px;
                height: 8px;

                border-radius: 50%;
                background-color: $primary;
            }

            &:checked ~ .text {
                color: $primary;
            }

        }
        .fake-radio {
            position: absolute;
            left: 0;
            top: 3px;
            /*top: 50%;*/

            width: 16px;
            height: 16px;
            border-radius: 50%;
            border: 1px solid $border;
            display: inline-block;
            margin-right: 7px;

        }

        .text {
            margin-left: 8px;

        }
    }
</style>
