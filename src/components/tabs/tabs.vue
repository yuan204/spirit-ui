<template>
    <div class="s-tabs"
         :class="[{'s-card': type === 'card' || type === 'border-card'},{'s-border-card': type === 'border-card'}]">
        <div class="s-tabs-labels-wrapper">
            <div class="s-tabs-labels">
              <span v-for="tab,index in tabs" class="s-tabs-label" @click="changeTab(index)"
                    :class="{activeLabel:currentIndex === index,disabled:tab.disabled}" :key="tab.name">
                  <span ref="labels">
<!--                      <span v-if="tab.$slots.label" v-html="tab.$slots.label[0].context.$el.innerHTML"></span>-->
                      <label-component :tab="tab"></label-component>
                      <s-icon name="close-small" v-if="closable && ['card','border-card'].includes(type)" @click.native.stop="$emit('tab-remove',tab.name)"></s-icon>

                  </span>
              </span>
            </div>
        </div>

        <div class="s-tabs-line">
            <div class="s-tabs-active-line" ref="activeLine"></div>
        </div>
        <div class="s-tabs-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import SIcon from "../icon/icon";
    const LabelComponent = {
        props: {
            tab: {
            }
        },
        render(h) {
            return h('span',this.tab.$slots.label || this.tab.label)
        }
    }
    export default {
        name: "sTabs",
        components: {
            LabelComponent,
            SIcon
        },
        props: {
            value: {
                type: String,
            },
            type: {// card/border-card
                type: String,
            },
            closable: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {

                tabs: [],
                tabsWidth: [],
                currentIndex: 0,
                disabledIndexs: [],

            }
        },
        methods: {
            changeTab(i) {
                if (this.disabledIndexs.includes(i)) return
                const srcLeft = this.$refs.labels[0].getBoundingClientRect().left
                const targetLeft = this.$refs.labels[i].getBoundingClientRect().left
                const offsetLeft = targetLeft - srcLeft
                // this.$refs.activeLine.style.transform = `translateX(${offsetLeft}px)`
                this.$refs.activeLine.style.left = `${offsetLeft}px`

                this.tabs.forEach(tab => tab.$el.style.display = "none")
                this.tabs[i].$el.style.display = "block"
                this.currentIndex = i
                this.$refs.activeLine.style.width = this.tabsWidth[this.currentIndex] + "px"
                this.$emit("input", this.tabs[this.currentIndex].name)


            }
        },

        mounted() {
            this.$slots.default.forEach(({componentInstance:item}, i) => {
                if (item.disabled) this.disabledIndexs.push(i)
                this.tabs.push(item)
                if (item.name === this.value && !item.disabled)
                    this.currentIndex = i;
            })
            this.$nextTick(() => {
                this.$refs.labels.forEach(label => this.tabsWidth.push(label.getBoundingClientRect().width))
                this.$refs.activeLine.style.transition = "none"
                this.changeTab(this.currentIndex)
                setTimeout(() => {
                    this.$refs.activeLine.style.transition = "left .3s"
                }, 0)


            })

        },
        created() {
           this.$on("tab-pane-destroy",tabPane => {
               this.tabs = this.tabs.filter(tab => tab !== tabPane)
           })
        }
    }
</script>

<style scoped lang="scss">
    @import "../../styles/common.scss";
    .s-tabs {
        .s-tabs-labels {
            .s-tabs-label {
                font-size: 14px;
                padding: 0 20px;
                display: inline-block;
                color: #303133;
                font-weight: 500;
                padding-bottom: 10px;
                cursor: pointer;
                &.activeLabel {
                    color: #409eff;

                }

                &:first-of-type {
                    padding-left: 0;

                }

                &.disabled {
                    color: #ccc;
                    cursor: not-allowed;
                }
            }

        }

        .s-tabs-line {
            height: 3px;
            background-color: #e4e7ed;
            position: relative;

            .s-tabs-active-line {
                position: absolute;
                background-color: #409eff;
                height: 100%;
                top: 0;
                left: 0;
                /*transition: transform .3s;*/
                /*transition: left .3s;*/

            }

        }

        .s-tabs-content {
            padding: 10px 0;

        }

        &.s-card {
            .s-tabs-labels-wrapper {
                border-bottom: 1px solid #E4E7ED;

                .s-tabs-labels {
                    margin-bottom: -1px;

                    .s-tabs-label {


                        border: 1px solid #E4E7ED;
                        border-left: none;
                        padding-top: 10px;
                        text-align: center;

                        .s-icon {
                            font-size: 16px;
                            margin-left: 10px;
                        }
                        &:first-of-type {
                            padding-left: 20px;
                            border-left: 1px solid #E4E7ED;
                        }

                        &.activeLabel {
                            border-bottom-color: #fff;


                        }

                    }


                }
            }


            .s-tabs-line {
                height: 0px;

            }

            .s-tabs-content {
                padding: 20px;
            }
        }

        &.s-border-card {
            /*box-shadow: 0 4px 0 rgba(0,0,0,.2);*/
            box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
            .s-tabs-labels-wrapper {
                background-color: #F5F7FA;
                border-top: 1px solid #E4E7ED;
                .s-tabs-label {
                    border-top: none !important;
                }
                .activeLabel {
                    /*border-bottom-color: #fff;*/
                    background-color: #fff;


                }
            }
        }
    }
</style>
