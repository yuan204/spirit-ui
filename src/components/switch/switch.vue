<template>
    <span class="s-switch-wrapper">
        <span class="close-text"  v-if="closeText" :style="closeTextColor">{{closeText}}</span>
        <span class="s-switch" :class="[size,{open:isOpen},{disabled}]" @click="toggle" :style="bgColor">
            <span class="circle"></span>
        </span>
        <span class="open-text" v-if="openText" :style="openTextColor">{{openText}}</span>
    </span>

</template>

<script>
    export default {
        name: "sSwitch",
        props: {
            value: {
                type: Boolean,
                default: false

            },
            size: {
                type: String,
                default: "default"
            },
            disabled: {
                type:Boolean,
                default:false
            },
            closeColor: {
                type: String,
                default: "#ccc"
            },
            openColor:{
                type:String,
                default: "#2d8cf0"
            },
            closeText: {
                type: String,

            },
            openText:{
                type:String,

            }
        },
        methods: {
            toggle() {
                if (this.disabled) return
                const newValue = !this.value
                this.$emit("input",newValue)
                this.$emit("change",newValue)
            }
        },
        computed: {
            isOpen() {
                return  this.value;
            },
            bgColor() {

                return {
                    backgroundColor:  this.isOpen ? this.openColor : this.closeColor
                }
            },
            closeTextColor() {
                return {
                    color: this.isOpen ? "#303133" : "#409eff"
                }
            },
            openTextColor() {
                return {
                    color: this.isOpen ? "#409eff" : "#303133"
                }
            },
        },
    }
</script>

<style scoped lang="scss">
    @import "../../styles/color";
    .s-switch-wrapper {
        display: inline-block;

        .s-switch {
            background-color: $close;
            display: inline-flex;
            align-items: center;
            border-radius: 22px;
            transition: all .5s;
            position: relative;
            &.disabled {
                cursor: not-allowed;
            }

            &.disabled.open {
                opacity: .5;
            }

            .circle {
                position: absolute;
                transition: all .5s;
                left: 3px;
                display: inline-block;
                width: 18px;
                height: 18px;
                background-color: #fff;
                border-radius: 50%;
            }
            &.open {
                background-color: $open;
                .circle {
                    left: 23px;
                }

                &.large {
                    .circle {
                        left: 35px;
                    }
                }

                &.small {
                    .circle {
                        left: 13px;
                    }
                }

            }


            &.default {
                width: 44px;
                height: 22px;
            }
            &.large {
                width: 56px;
                height: 22px;
            }
            &.small {
                width: 28px;
                height: 16px;
                .circle {
                    display: inline-block;
                    width: 12px;
                    height: 12px;
                    background-color: #fff;
                    border-radius: 50%;
                }
            }
        }
        .close-text,.open-text {
            vertical-align: top;
            font-size: 14px;
        }

        .close-text {
            margin-right: 10px;
        }
        .open-text {
            margin-left: 10px;
        }
    }
</style>
