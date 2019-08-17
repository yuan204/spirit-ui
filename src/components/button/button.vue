<template>
    <button class="s-button" :class="{normal,[type]:type,active}" @click="handleClick"  :disabled = "disabled" >
        <template v-if="loading && isLoading">
            <s-icon name="loading" class="s-icon icon-loading"></s-icon>
        </template>
        <template v-else>
            <s-icon :name="icon" v-if="icon" :class="['s-icon',{'right-icon':!isLeft}]"></s-icon>
        </template>

        <slot></slot>
    </button>
</template>

<script>
    import SIcon from "../icon/icon";
    export default {
        name: "sButton",
        props:{
            icon:{
                type:String
            },

            position: {
                type: String,
                default: "left",
                validator(value) {
                    return value === "left" || value === "right"
                }
            },
            normal: {
                type: Boolean,
                default: false
            },

            loading: {
                type: Boolean,
                default: false
            },
            type: {
                type: String,
                validator(value) {
                    return ["text","info","primary","warning","danger","success"].includes(value)
                },
            },
            disabled: {
                type: Boolean,
                default:false
            }
        },
        components:{
            SIcon
        },
        computed: {
            isLeft() {
                return this.position === 'left'
            }
        },
        data() {
            return {
                isLoading: false,
                active: false
            }
        },
        methods: {
            handleClick(e) {
                this.isLoading = !this.isLoading
                // this.active = true
                this.$emit("click",e)
            },
            // handleBlur() {
            //     this.active = false
            // }
        },


    }
</script>

<style scoped lang="scss">
    @import "../../styles/color";
    .s-button {
        height: 32px;
        padding: 0 1em;
        border: $borderbase;
        background-color: transparent;
        border-radius: 4px;
        font-size: 14px;
        justify-content: center;
        align-items: center;
        display: inline-flex;
        vertical-align: top;
        outline: none;
        cursor: pointer;
        &:hover {
            color: $primary;
            border-color: $primary;
        }
        &.text {
            border: none;

        }
        &.primary {
            background-color: $primary;
            color: white;
            &:hover {
                opacity: .8;
                color: white;
                border-color: rgba(0, 0, 0, .15);
            }
        }
        &.success {
            background-color: $success;
            color: white;
            &:hover {
                opacity: .8;
                 color: white;
                border-color: rgba(0, 0, 0, .15);
            }
        }
        &.info {
            background-color: $info;
            color: white;
            &:hover {
                opacity: .8;
                 color: white;
                border-color: rgba(0, 0, 0, .15);
            }
        }
        &.danger {
            background-color: $error;
            color: white;
            &:hover {
                opacity: .8;
                 color: white;
                border-color: rgba(0, 0, 0, .15);
            }
        }
        &.warning {
            background-color: $warning;
            color: white;
            &:hover {
                opacity: .8;
                 color: white;
                border-color: rgba(0, 0, 0, .15);
            }

        }

        .s-icon {
            margin-right: 7px;
        }

        .right-icon {
            order: 1;
            margin-left: 7px;
            margin-right: 0;
        }
        &.normal {
            background-color: $bg;
        }
        &:disabled {
            cursor: not-allowed;
            opacity: 0.4;
            &:hover {
                opacity: 0.4;
                border-color: rgba(0, 0, 0, .15);
                color: rgb(128,128,128);
                &.success,&.primary,&.danger,&.info,&.warning {
                    color: white;
                }
            }

        }

        .icon-loading {
            animation: loading 1s linear infinite;
        }
    }

    @keyframes loading {
        from {
            transform: rotate(0);
        }

        to {
            transform: rotate(360deg);
        }
    }
</style>
