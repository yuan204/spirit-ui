<template>
    <transition name="fade" v-if="!disableTransition">
          <span class="s-tag" :style="tagStyle" :class="{[size]:size}">
            <slot></slot>
            <s-icon v-if="closable" name="close-small" :style="iconStyle" @click.native="handleClose"></s-icon>
        </span>
    </transition>
    <span class="s-tag" :style="tagStyle" :class="{[size]:size}" v-else>
            <slot></slot>
            <s-icon v-if="closable" name="close-small" :style="iconStyle" @click.native="handleClose"></s-icon>
        </span>

</template>

<script>
    import SIcon from "../icon/icon";


    export default {
        name: "sTag",
        components: {
            SIcon
        },
        props: {
            type: {
                type: String,
                default: "primary",
                validator(value) {
                    return ["primary", "success", "info", "warning", "error"].includes(value)
                }
            },
            closable: {
                type: Boolean,
                default: false
            },
            size: {
                type: String,
                validator(value) {
                    return ["medium", "small", "mini"].includes(value)
                }
            },
            effect: {
                type: String,
                default: "light",
                validator(value) {
                    return ["light", "dark", "plain"].includes(value)
                }
            },
            disableTransition: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                colors: {
                    info: "#909399",
                    success: "#67C23A",
                    warning: "#E6A23C",
                    error: "#f5222d",
                    primary: "#409eff"
                },
                bgColors: {
                    info: "#f4f4f5",
                    success: "#f0f9eb",
                    warning: "#fdf6ec",
                    error: "#FEF0F0",
                    primary: "#ecf5ff"
                },
                borderColors: {
                    info: "#e9e9eb",
                    success: "#e1f3d8",
                    warning: "#faecd8",
                    error: "#fde2e2",
                    primary: "#d9ecff"
                },

            }
        },
        computed: {
            tagStyle() {
                if (this.effect === "light") {
                    return {
                        color: this.colors[this.type],
                        backgroundColor: this.bgColors[this.type],
                        border: `1px solid ${this.borderColors[this.type]}`
                    }
                } else if (this.effect === "plain") {
                    return {
                        color: this.colors[this.type],
                        border: `1px solid ${this.borderColors[this.type]}`
                    }
                } else {
                    return {
                        color: "white",
                        backgroundColor: this.colors[this.type],
                        border: `1px solid ${this.borderColors[this.type]}`
                    }
                }

            },
            iconStyle() {
                return {
                    color: this.effect === "dark" ? "white" : this.colors[this.type],
                    '--icon-background-color':  this.effect === "dark" ?  "rgba(255,255,255,0.3)":this.colors[this.type],
                }
            }
        },
        methods: {
            handleClose(e) {

                this.$emit("close",e)
            }
        },
    }
</script>

<style scoped lang="scss">
    @import "../../styles/common.scss";

    .s-tag {
        display: inline-flex;
        padding: 5px;
        font-size: 12px;
        border-radius: 4px;
        align-items: center;
        height: 32px;

        &.medium {
            height: 28px;
        }

        &.small {
            height: 24px;
        }

        &.mini {
            height: 20px;
        }

        .s-icon {
            font-size: 16px;
            cursor: pointer;
            border-radius: 50%;
            margin-left: 5px;
            display: inline-block;

            &:hover {
                color: white !important;
                background-color: var(--icon-background-color);
            }
        }

        /*.s-dark-icon:hover {*/
        /*    opacity: .3;*/
        /*}*/
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
