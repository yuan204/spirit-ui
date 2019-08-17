<template>
    <div class="s-time-panel" ref="panelItems">
        <ul >
            <li v-for="(time,i) in timeArray" @click="handleClick($event,time,i)" :class="{active: selectIndex === i}" ref="panelItem" :key="i" > {{time}}</li>
        </ul>
    </div>
</template>

<script>
    import {SDate} from "@/utils/date";

    export default {
        name: "SpiritTimePanel",
        props: {
            options: {
                type: Object
            },
            selectIndex:Number
        },
        data() {
            return {
                timeArray: [],
                itemHeight:0
            }
        },

        methods: {
            handleClick(e,time,i) {


                this.$emit('click',time,i)



            }
        },
        created() {

            const startDate = new SDate(this.options.start, "mm:ss")
            const endDate = new SDate(this.options.end, "mm:ss")
            let tempDate = startDate;
            while ([0, -1].includes(tempDate.compare(endDate))) {
                this.timeArray.push(tempDate.format("mm:ss"))
                tempDate = tempDate.add(this.options.step, "mm:ss")
            }


        },
        updated() {

                this.itemHeight = this.$refs.panelItem[0].offsetHeight
            console.log(this.itemHeight);


        },

    }
</script>

<style scoped lang="scss">
    @import "../../styles/common.scss";

    .s-time-panel {
        width: 180px;
        background-color: #fff;
        height: 187px;
        overflow: auto;
        border: 1px solid #e4e7ed;
        border-radius: 4px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
        margin-top: 12px;
        /*position: relative;*/

        ul {
            font-size: 14px;
            padding-left: 5px;
            color: #606266;
            /*position: absolute;*/

            li {
                padding: 10px;
                cursor: pointer;

                &:hover {
                    background-color: #f5f7fa;
                    font-weight: bold;
                }

                &.active {
                    color: #409eff;
                }
            }


        }
    }
</style>
