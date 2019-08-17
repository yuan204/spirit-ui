<template>
        <div class="s-date-picker" @click.stop>
            <s-input icon="date" placeholder="选择日期" @click.native="handleInputClick"
                     v-model="inputDate"
                     @keydown.native.enter="handleKeydown"
                     clearable
                     ref="inputComponent"
                     class="s-date-input"
            ></s-input>
            <transition name="date">
                <div class="s-picker-panel" v-show="show">
                    <div class="s-picker-panel-header">
                        <div class="s-picker-panel-header-prev">
                            <s-button type="text" class="s-picker-panel-header-btn" @click="prevYear"><<</s-button>
                            <s-button type="text" class="s-picker-panel-header-btn" @click="prevMonth"><</s-button>
                        </div>
                        <div>
                            {{year}}年{{month}}月
                        </div>
                        <div class="s-picker-panel-header-next">
                            <s-button type="text" class="s-picker-panel-header-btn" @click="nextMonth">></s-button>
                            <s-button type="text" class="s-picker-panel-header-btn" @click="nextYear">>></s-button>
                        </div>
                    </div>
                    <div class="s-picker-panel-content">
                        <div class="s-picker-weekdays">
                            <div v-for="weekday in weekdays">{{weekday}}</div>
                        </div>
                        <div class="s-picker-days-of-month">
                            <template v-for="(days,i) in daysOfMonth">
                                <div v-for="d in days"
                                     :class="{'s-not-current-month-day':i !== 1,active:d === day && i === 1}"
                                     @click="handleDateClick($event,i)">
                                    <span :class="{active:d === day && i === 1 && isCurrentDate}">{{d}}</span>
                                </div>
                            </template>

                        </div>
                    </div>
                </div>
            </transition>



        </div>

</template>

<script>
    import SInput from "@/components/input/input";
    import SButton from "@/components/button/button";

    export default {
        name: "SpiritDatePicker",
        components: {
            SInput,
            SButton
        },
        props: {
            value: {
                type: [String,Date]
            },
        },
        data() {
            return {
                weekdays: ["日", "一", "二", "三", "四", "五", "六"],
                year: 0,
                month: 0,
                day: 0,
                show: false,
                date: "",
                tempDate:"",
                isValid:true


            }
        },
        methods: {
            isLeapYear() {
                return this.year % 400 === 0 || (this.year % 4 === 0 && this.year % 100 !== 0)
            },
            totalDays(m) {
                let days = 0;
                if ([1, 3, 5, 7, 8, 10, 12].includes(m))
                    days = 31
                else if ([4, 6, 9, 11].includes(m))
                    days = 30
                else
                    days = this.isLeapYear() ? 29 : 28;

                return Array.from({length: days}, (v, k) => k + 1)
            },
            prevYear() {
                this.year -= 1
            },
            nextYear() {
                this.year += 1
            },
            prevMonth() {
                this.month = this.month === 1 ? (this.prevYear(), 12) : this.month - 1;
            },
            nextMonth() {
                this.month = this.month === 12 ? (this.nextYear(), 1) : this.month + 1
            },
            handleDateClick(e, i) {
                if (i === 0)
                    this.prevMonth();
                else if (i === 2)
                    this.nextMonth()
                this.day = Number(e.target.textContent)
                this.tempDate = this.date = this.formatDate(this.year, this.month, this.day)
                this.show = false;

            },
            padZero(n) {
                return n < 10 ? "0" + n : n;
            },
            formatDate(year, month, day) {
                return `${year}-${this.padZero(month)}-${this.padZero(day)}`
            },
            handleKeydown(e) {

                    const dateReg = /(\d+)-(\d{1,2})-(\d{1,2})/;
                    const result = dateReg.exec(this.tempDate)
                    if (result) {
                        const [, y, m, d] = result

                        this.year = +y;
                        this.month = +m;
                        this.day = +d;
                        this.tempDate = this.date = this.formatDate(this.year, this.month, this.day)
                        this.show = false
                    } else
                        this.isValid = false

                },
            handleInputClick(e) {

                if (e.target.innerHTML.includes("icon-clear"))
                    this.show = false;
                else
                    this.show = true
            }



        },

        computed: {
            daysOfMonth() {

                const date = new Date(this.year, this.month - 1, 1)
                const days = 7 * 6;
                let dayOfWeek = date.getDay();
                dayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
                const prevDays = this.totalDays(this.month === 1 ? 12 : this.month - 1).slice(-dayOfWeek);
                const currentDays = this.totalDays(this.month)
                const nextDays = Array.from(
                    {length: days - prevDays.length - currentDays.length},
                    (v, k) => k + 1
                )

                return [prevDays, currentDays, nextDays]


            },
            isCurrentDate() {
                return this.formatDate(this.year, this.month, this.day) === this.date
            },

            inputDate: {
                get() {
                    return this.tempDate;
                },
                set(v) {

                  this.tempDate = v;



                }
            }


        },
        created() {
            document.addEventListener("click", () => {
                this.show = false;
                if (!this.isValid) {
                    this.tempDate = this.date
                    this.isValid = true
                }
                // this.tempDate = this.date
            })
            const date = this.value ? new Date(this.value) : new Date();
            this.year = date.getFullYear();
            this.month = date.getMonth() + 1;
            this.day = date.getDate();
            this.tempDate = this.date = this.formatDate(this.year, this.month, this.day)
        },
        watch: {
            date(newVal) {
                 this.$emit("input",new Date(newVal))
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../styles/common.scss";
    @import "../../styles/color.scss";

    .s-date-picker {
        width: 220px;
        position: relative;

        .s-picker-panel {
            width: 322px;
            border: 1px solid #e4e7ed;
            padding: 12px;
            border-radius: 4px;
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
            margin-top: 12px;
            position: absolute;
            z-index: 999;
            background-color: #ffffff;
            transform-origin: 0 0;

            &::before {
                content: "";
                display: inline-block;
                border-width: 6px;
                border-style: solid;
                border-color: transparent transparent #ebeef5 transparent;
                border-top-width: 0;
                position: absolute;
                top: -7px;
                left: 35px;

            }

            &::after {
                content: "";
                display: inline-block;
                border-width: 6px;
                border-style: solid;
                border-color: transparent transparent #fff transparent;
                border-top-width: 0;
                position: absolute;
                top: -6px;
                left: 35px;
            }

            .s-picker-panel-header {
                display: flex;
                justify-content: space-around;
                align-items: center;

                .s-picker-panel-header-btn {
                    color: #303133;
                    font-size: 12px;
                }

            }

            .s-picker-panel-content {
                .s-picker-weekdays, .s-picker-days-of-month {
                    display: flex;
                    font-size: 12px;
                    flex-wrap: wrap;

                    > div {
                        padding: 5px;
                        text-align: center;
                        width: 14.285%;
                        display: inline-block;
                    }
                }

                .s-picker-weekdays {
                    border-bottom: 1px solid $border;
                    padding-bottom: 5px;
                }

                .s-picker-days-of-month {
                    > div {
                        cursor: pointer;

                        &.s-not-current-month-day {
                            color: #c0c4cc;
                        }

                        span {
                            height: 24px;
                            width: 24px;
                            display: inline-block;
                            line-height: 24px;
                            text-align: center;

                            &.active {
                                background-color: #409eff;
                                color: white;
                                border-radius: 50%;
                            }
                        }

                    }
                }
            }

        }
    }




    .date-enter, .date-leave-to {
        transform: scaleY(0);


    }

    .date-enter-active, .date-leave-active {
        transition: all .3s linear;

    }

    .date-enter-to, .date-leave {
        transform: scaleY(1);
    }


</style>
