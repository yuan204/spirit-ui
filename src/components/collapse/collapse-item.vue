<template>
    <div class="s-collapse-item">
        <div class="s-collapse-item-title" @click="handleCollapse">
            <s-icon name="down"></s-icon>
            <slot name="title"></slot>
        </div>
        <s-collapse-transition>
            <div class="s-collapse-item-content" v-show="show">
                <div class="s-collapse-item-content-inner">
                    <slot name="content"></slot>
                </div>
            </div>
        </s-collapse-transition>


    </div>
</template>

<script>
    import SIcon from "../icon/icon";
    import {SCollapseTransition} from "../base";


    export default {
        name: "sCollapseItem",
        components: {
            SIcon,
            SCollapseTransition
        },
        data() {
            return {
                show: false
            }
        },
        props: {
            name: {
                type: String,

            },
        },
        methods: {
            handleCollapse() {

                if (this.$parent.accordion) {
                    const prevShow = this.show
                    this.$parent.$children.forEach(item => item.show = false)
                    if (!prevShow) this.show = true
                    this.$parent.selected = this.show ? this.name : ""
                } else {
                    this.show = !this.show
                    if (this.show) this.$parent.selected.push(this.name)
                    else this.$parent.selected =
                        this.$parent.selected.filter(item => item !== this.name)
                }


            }
        },
        mounted() {
            this.$parent.$emit("change", this.$parent.selected)
        }


    }
</script>

<style scoped lang="scss">
    @import "../../styles/common.scss";
    @import "../../styles/transition.scss";
    .s-collapse-item {
        .s-collapse-item-title {
            cursor: pointer;
            height: 38px;
            line-height: 38px;
            padding-left: 16px;
            color: #666;
            border-top: 1px solid #dcdee2;
            background-color: #f7f7f7;
            .s-icon {
                margin-right: 20px;
                font-size: 12px;
            }
            & > * {
                display: inline-block;
            }
        }
        .s-collapse-item-content {
            color: #515a6e;
            background-color: #fff;
            .s-collapse-item-content-inner {
                padding: 16px;
            }
        }
    }
</style>
