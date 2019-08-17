<template>
    <div class="s-time-select">
        <s-input
                :placeholder="placeholder"
                clearable icon="time"
                class="s-time-input"
                @click.native="showPanel = !showPanel"
                v-model="selectValue"
                @keydown.native.enter="handleInput"
                @on-clear="handleClear"
        >

        </s-input>
        <transition name="slide">
            <s-time-panel  v-show="showPanel" :options="options" @click="handleClickSelect" class="s-time-panel" :selectIndex="selectIndex" ref="timePanel"></s-time-panel>
        </transition>

    </div>
</template>

<script>
    import SInput from "@/components/input/input";
    import SIcon from "@/components/icon/icon";
    import STimePanel from "./time-panel";




    export default {
        name: "SpiritTimeSelect",
        components: {
            SIcon,
            SInput,
            STimePanel,

        },
        props: {
            placeholder: {
                type: String,
                default: "select time"
            },
            options: {
                type: Object
            },
            value: {
                type:[Date,String]
            },


        },
        data() {
            return {
                showPanel: false,
                selectValue: this.value,
                selectIndex: -1
            }
        },

        methods: {
            handleClickSelect(v,i) {
                this.selectValue = v
                this.showPanel = false
                this.selectIndex = i
                this.$emit("input",v)

            },
            handleInput() {
                const index = this.$refs.timePanel.timeArray.indexOf(this.selectValue)
                if (index > -1) {
                    this.selectIndex = index;
                    this.showPanel = false

                    this.$nextTick(() => {
                        this.$refs.timePanel.$refs.panelItems.scrollTop =  this.$refs.timePanel.itemHeight * this.selectIndex
                    })


                }
            },

            handleClear() {
                this.selectIndex = -1;
                this.$emit("input","")
            }
        },

    }
</script>

<style scoped lang="scss">
    @import "../../styles/common.scss";
    @import "../../styles/transition.scss";
    .s-time-select {
        position: relative;
        .s-time-input {
            width: 180px;
        }
        .s-time-panel {
            transform-origin: 0 0;
            position: absolute;
        }
    }
</style>
