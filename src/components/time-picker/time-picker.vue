<template>
    <div class="s-time-picker">
        <s-input
                :placeholder="placeholder"
                clearable icon="time"
                class="s-time-input"
                v-model="selectTime"
                @keydown.native.enter="handleInput"
                @on-clear="handleClear"
                @click.native.stop="handleClick"

        >

        </s-input>
        <transition name="slide">
            <s-picker-panel :hour="hour" :minute="minute" :second="second"
                            v-show="showPanel"></s-picker-panel>
        </transition>

    </div>
</template>

<script>
    import SInput from "@/components/input/input";
    import SIcon from "@/components/icon/icon";
    import STimePanel from "./time-panel";
    import SPickerPanel from "./picker-panel";
    import {SDate} from "../../utils/date";


    export default {
        name: "SpiritTimePicker",
        components: {
            SIcon,
            SInput,
            STimePanel,
            SPickerPanel

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
                type: [Date, String]
            },


        },
        provide() {
            return {
                timePicker: this
            }
        },
        data() {
            return {
                showPanel: false,
                // selectValue: this.value,
                selectIndex: -1,
                hour: 0,
                minute: 0,
                second: 0,
                // clear: false,
                selectTime: "",
                isClear: false,
                isInit: true

            }
        },
        // computed: {
        //     selectTime: {
        //         get() {
        //             return `${this.format(this.hour)}:${this.format(this.minute)}:${this.format(this.second)}`
        //         },
        //         set(val) {
        //             // console.log(val);
        //             // this.setTime(val)
        //         }
        //     }
        // },

        methods: {
            // handleClickSelect(v, i) {
            //     this.selectValue = v
            //     this.showPanel = false
            //     this.selectIndex = i
            //     this.$emit("input", v)
            //
            // },
            handleInput() {
                this.setTime(this.selectTime)
            },

            handleClick() {

                this.showPanel = true
                if (this.isClear) {
                    this.showPanel = false
                    this.isClear = false
                }

            },

            handleClear() {
                // this.selectTime = ""
              this.isClear = true
                this.$emit("input","")
            },
            format(time) {
                return time < 10 ? '0' + time : time;
            },
            setTime(value,isInit = false) {
                if (/[^:0-9]/g.test(value)) {
                   value = "00:00:00"
                }
                let date = value === "" ? new Date() : new SDate(value,"hh:mm:ss");
                this.hour = date.getHours();
                this.minute = date.getMinutes();
                this.second = date.getSeconds()
                // if (isInit){
                //     setTimeout(() => {
                //         this.selectTime = ""
                //     },0)
                //
                // }


            }
        },
        watch: {
            hour: {
                handler(newValue, oldValue) {
                    this.selectTime = `${this.format(newValue)}:${this.format(this.minute)}:${this.format(this.second)}`;
                    this.$emit("input",new SDate(this.selectTime,"hh:mm:ss"))
                },
                // immediate: true
            },
            minute: {
                handler(newValue, oldValue) {
                    this.selectTime = `${this.format(this.hour)}:${this.format(newValue)}:${this.format(this.second)}`
                    this.$emit("input",new SDate(this.selectTime,"hh:mm:ss"))
                },
                // immediate: true
            },
            second: {
                handler(newValue, oldValue) {
                    this.selectTime = `${this.format(this.hour)}:${this.format(this.minute)}:${this.format(newValue)}`
                    this.$emit("input",new SDate(this.selectTime,"hh:mm:ss"))


                },
                // immediate: true
            }
        },

        created() {
            this.setTime(this.value)
            this.$on("change-hour", h => {
                // this.clear = false
                this.hour = h

            })
            this.$on("change-minute", m => {
                // this.clear = false
                this.minute = m

            })
            this.$on("change-second", s => {
                // this.clear = false
                this.second = s

            })
            document.addEventListener("click", () => this.showPanel = false)
        }

    }
</script>

<style scoped lang="scss">
    @import "../../styles/common.scss";
    @import "../../styles/transition.scss";

    .s-time-picker {
        position: relative;

        .s-time-input {
            width: 180px;
        }

        .s-picker-panel {
            transform-origin: 0 0;
            position: absolute;
        }
    }
</style>
