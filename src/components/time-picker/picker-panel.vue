<template>
    <div class="s-picker-panel">
        <div class="s-time-wrapper" ref="hour">
            <ul class="s-time" >
                <li v-for="h in 24" :key="h" :class="{active: h-1 === hour,disabled: !activeHours.includes(h-1)}" ref="t" @click.stop="selectChangeTime('hour',h-1)">{{timePicker.format(h-1)}}</li>
            </ul>
        </div>
        <div class="s-time-wrapper" ref="minute">
            <ul class="s-time" >
                <li v-for="m in 60" :key="m" :class="{active: m-1 === minute,disabled: !activeMinutes.includes(m-1)}" @click.stop="selectChangeTime('minute',m-1)">{{timePicker.format(m-1)}}</li>
            </ul>
        </div>
        <div class="s-time-wrapper" ref="second">
            <ul class="s-time" >
                <li v-for="s in 60" :key="s" :class="{active: s-1 === second,disabled: !activeSeconds.includes(s-1)}" @click.stop="selectChangeTime('second',s-1)">{{timePicker.format(s-1)}}</li>
            </ul>
        </div>
    </div>

</template>

<script>
    import {range} from "../../utils/help";
    import {SDate} from "@/utils/date";
    export default {
        name: "SpiritPickerPanel",
        inject: ["timePicker"],
        props: {
            hour: {
                type: Number,
            },
            minute: {
                type: Number,
            },
            second: {
                type: Number,
            },

        },
        data() {
            return {
                tHeight: 32,
                activeHours: [],
                activeMinutes: [],
                activeSeconds: [],
                startTime: null,
                endTime: null
            }
        },
        watch: {
            hour(newValue) {
                if (this.activeHours.includes(newValue))
                    this.$refs.hour.scrollTop =  this.tHeight * newValue;
            },
            minute(newValue) {
                if (this.activeMinutes.includes(newValue))
                    this.$refs.minute.scrollTop =  this.tHeight * newValue;
            },
            second(newValue) {
                if (this.activeSeconds.includes(newValue))
                    this.$refs.second.scrollTop =  this.tHeight * newValue;
            },
        },

        methods: {
            capitalize(s) {
                return s[0].toUpperCase() + s.slice(1)
            },
            changeTime(name,val) {

                   // this.$refs[name].scrollTop =  this.tHeight * val;
                   this.$parent.$emit(`change-${name}`,val)


            },
            selectChangeTime(name,val) {
                if (this[`active${this.capitalize(name)}s`].includes(val)) {
                    this.changeTime(name,val)
                }
            },
            generateActiveTime() {
                const selectRange = this.timePicker.options.selectRange

                if (selectRange) {
                    const [start,end] = selectRange.split("-")
                    this.startTime = new SDate(start,"hh:mm:ss")
                    this.endTime = new SDate(end,"hh:mm:ss")
                    const [startHour,startMinute,startSecond] = start.split(":").map(parseInt);
                    const [endHour,endMinute,endSecond] = end.split(":").map(parseInt);
                    this.activeHours = range(startHour,endHour + 1)
                    if (startHour < endHour) {
                        this.activeMinutes = range(0,60)
                        this.activeSeconds = range(0,60)
                    } else if (startHour === endHour) {
                        this.activeMinutes = range(startMinute,endMinute + 1)
                        if (startMinute < endMinute) {
                            this.activeSeconds = range(0,60)
                        } else if (startMinute === endMinute) {
                            this.activeSeconds = range(startSecond,endSecond + 1)
                        }
                    }
                } else {
                    this.activeHours = range(0,24)
                    this.activeMinutes = range(0,60)
                    this.activeSeconds = range(0,60)
                }
            }
        },
        mounted() {

        },
        created() {
            this.generateActiveTime()
            const unwatch = this.$watch("timePicker.showPanel", (newValue, oldValue) => {
                if (newValue) {
                    setTimeout(() => {

                        const ulElements = document.querySelectorAll(".s-time")

                        ulElements.forEach(ul => {
                            const li = document.createElement("li")
                            li.style.height = this.tHeight * 3 + "px"
                            ul.prepend(li)
                            ul.append(li.cloneNode(true))
                        })
                        if (this.activeHours.includes(this.hour) && this.activeMinutes.includes(this.minute) && this.activeSeconds.includes(this.second)) {
                            this.$refs.hour.scrollTop =  this.tHeight * this.hour;
                            this.$refs.minute.scrollTop =  this.tHeight * this.minute;
                            this.$refs.second.scrollTop =  this.tHeight * this.second;
                        } else {
                          this.changeTime("hour",0)
                          this.changeTime("minute",0)
                          this.changeTime("second",0)
                        }


                        unwatch()
                    },100)
                }
            })
        }
    }
</script>

<style scoped lang="scss">
    @import "../../styles/common.scss";
    ::-webkit-scrollbar {
        width:14px;
    }
 .s-picker-panel {
     width: 180px;
     background-color: #fff;
     height: 187px;
     border: 1px solid #e4e7ed;
     border-radius: 4px;
     box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
     margin-top: 12px;
     display: flex;
     position: relative;
     &::before,&::after {
         content: "";
         display: inline-block;
         height: 1px;
         width: 100%;
         background-color: #E4E7ED;
         position: absolute;
         top: 50%;


     }

     &::after {
         transform: translateY(32px);
     }
     .s-time-wrapper {
         flex: 1;
         overflow-y: scroll;
         ul {
             font-size: 12px;
             padding-left: 5px;
             color: #606266;
             /*position: absolute;*/

             li {
                 padding: 5px;
                 color: #606266;
                 text-align: center;
                 height: 32px;

                 &:hover {
                     background-color: #f5f7fa;
                 }

                 &.active {
                     color: #303133;
                     font-weight: bold;
                     &:hover {
                         background-color: #fff;
                     }
                 }

                 &.disabled {
                     cursor: not-allowed;
                     color: #c0c4cc;
                     &:hover {
                         background-color: #fff;
                     }
                 }


             }


         }
     }
 }
</style>
