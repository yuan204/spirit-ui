<template>
    <div class="s-textarea" v-if="type === 'textarea'">
        <textarea   :placeholder="placeholder" @input="$emit('input',$event.target.value)" :disabled="disabled" :value="value" :rows="rows"></textarea>
    </div>
    <div class="s-input" v-else   @mouseenter="handleMouseenter"
         @mouseleave="handleMouseleave" :class="inputClass">

        <span  class="prefix-icon">
            <slot name="prefix">
                   <s-icon :name="prefixIcon" v-if="prefixIcon" ></s-icon>
            </slot>
        </span>
        <input :type="type" :placeholder="placeholder" :class="{'icon-input':prefixIcon || $slots.prefix}" @input="handleInput" :disabled="disabled"  ref="input" :value="value" :readonly="readonly"
               @blur="handleBlur"
        >

        <span  class="suffix-icon" >
            <span v-show="showSuffix">
                 <slot name="suffix" >
                  <s-icon :name="suffixIcon" v-if="suffixIcon"  @click.native="handleIconClick"></s-icon>
            </slot>
            </span>

            <s-icon name="clear"
                    v-show="clearable && clear"
                    @click.native="handleClear"
            ></s-icon>
        </span>

    </div>

</template>

<script>
    import SIcon from "../icon/icon";
    import emitter from "../../mixins/emitter";

    export default {
        name: "SpiritInput",
        mixins:[emitter],
        props: {
            value: {
                type:String
            },
            placeholder: {
                type: String
            },
            type:{
                type: String,
                default:"text"
            },
            prefixIcon:{
                type: String
            },
            suffixIcon: String,
            disabled:{
                type:Boolean,
                default: false
            },
            clearable: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            size: {
                type: String,
                validator(value) {
                    return ["large","small"].includes(value)
                }
            },
            rows: {
                type: Number,
                default: 2
            }


        },
        components:{
            SIcon
        },
        data() {
            return {
                clear: "",
                showSuffix: true
            }
        },
        computed: {
            inputClass() {
                return {
                    large: this.size === "large",
                    small: this.size === 'small'
                }
            }
        },
        methods: {
            handleMouseenter() {

                if (this.clearable && this.$refs.input.value) {
                    this.clear = "clear";
                    this.showSuffix = false
                }



            },
            handleMouseleave() {
                if (this.clearable){
                    this.clear = "";
                    this.showSuffix = true
                }
            },
            handleClear(e) {
                //
                this.$refs.input.value = ""
                this.handleMouseleave()
                this.$emit('input',this.$refs.input.value)
                this.$emit('on-click',e)
                this.$emit('click',e)
                this.$emit('on-clear',e)
                this.$emit('clear',e)
            },
            handleInput(e) {
                if (this.clearable)
                    this.handleMouseenter();
                this.$emit('input',e.target.value)
                this.$emit('change',e.target.value)
                this.dispatch("sFormItem","form-change")
            },
            handleIconClick(e) {
                this.$emit('on-click',e)
                this.$emit('click',e)
            },
            handleBlur(e) {
                this.$emit("blur",e)
                this.dispatch("sFormItem","form-blur")
            }
        },



    }
</script>

<style scoped lang="scss">
    @import "../../styles/common.scss";
    @import "../../styles/color.scss";
    .s-input {
        display: inline-block;
        width: 100%;
        height:32px;
        font-size: 14px;
        color: $main;
        position: relative;
        line-height: 32px;
        &.large {
            font-size: 16px;
            height: 36px;
        }

        &.small {
            font-size: 12px;
            height: 28px;
        }
        input {
            width: 100%;
            height:100%;
            border: 1px solid $border;
            padding: 0 5px;
            cursor: pointer;
            border-radius: 4px;


            &.icon-input {
                padding-left: 24px;
            }
            &:disabled {
                background-color: #F3F3F3;
                cursor: no-drop;
                &::-webkit-input-placeholder { /* WebKit browsers */
                    color: #ccc;
                }
                &:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
                    color: #ccc;
                }
                &::-moz-placeholder { /* Mozilla Firefox 19+ */
                    color: #ccc;
                }
                &:-ms-input-placeholder { /* Internet Explorer 10+ */
                    color: #ccc;
                }

            }
            &:hover {
                border-color:rgba(0, 0, 0, 0.25);
            }
        }
        >.icon {
            position: absolute;
            left: 5px;
            top: 50%;
            transform: translateY(-50%);
            color: $sub;
        }
        .suffix-icon {
            position:absolute;
            top: 50%;
            transform: translateY(-50%);
            right:5px;
        }
        .prefix-icon {
            position:absolute;
            top: 50%;
            transform: translateY(-50%);
            left:5px;
        }

    }
    .s-textarea {
        width: 100%;
        display: inline-block;
        textarea {
            width: 100%;
            min-height: 33px;
            padding: .5em .5em;
            resize: vertical;
            font-size: 14px;
            &:hover {
                border-color:rgba(0, 0, 0, 0.25);
            }
        }
    }
</style>
