<template>
    <div class="s-cascader" @click.stop>
        <s-input
                class="s-cascader-input"
                v-model="strResult"
                @click.native="handleClick"
                :readonly = "readonly"
                placeholder="请选择"
                clearable
                @on-click.stop="handleClear"
                :disabled="disabled"
                @input="handleInput"




        >

            <template v-slot:suffix>

                        <s-icon name="down"
                                :class="['arrow',{'arrow-rotate':isUp},{'arrow-hover':arrowHover}]">

                   </s-icon>

            </template>

        </s-input>
        <transition name="slide">

                <div class="s-cascader-panels" v-show="show">
                    <s-cascader-panel ref="panels"
                            v-for="(ops,i) in optionsArray"
                            :options="ops"
                            :panelIndex = "i"
                            @panel="addOptions"
                            :active-index="activeindexs[i]"




                    >
                    </s-cascader-panel>


            </div>

        </transition>
        <transition name="slide">
            <ul v-show="filterable && showFilter" class="filter">
                <li v-for="item in filterItems" @click="handleFilter(item)" :class="[match?'match':'empty']">{{item}}</li>
            </ul>
        </transition>



    </div>
</template>

<script>
    import SInput from "../input/input";
    import SCascaderPanel from "./cascader-panel";
    import SIcon from "../icon/icon";


    export default {
        name: "sCascader",
        components:{
            SInput,
            SCascaderPanel,
            SIcon
        },
        props: {
            options: {
                type: Array,
            },
            value: Array,
            disabled:{
                type:Boolean,
                default: false
            },
            trigger: {
                type: String,
                default: "click",
                validator(value) {
                    return ["click","hover"].includes(value)
                }
            },
            filterable: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                optionsArray: [],
                tempOptionsArray: [],
                result: [],
                tempResult:[],
                show:false,
                activeindexs:[],
                tempActiveIndexs:[],
                values:[],
                tempValues:[],
                strResult:"",
                isUp: false,
                arrowHover: false,
                readonly:true,
                total: [],
                filterItems:[],
                showFilter:false,
                match: true


            }
        },

        methods: {
            addOptions(options,panelIndex,label,activeindex,value) {



                if (options) {
                    if (this.activeindexs[panelIndex] === activeindex)
                        return
                    this.optionsArray.splice(panelIndex + 1)
                    this.optionsArray.push(options)

                    this.activeindexs.splice(panelIndex)
                    this.activeindexs.push(activeindex)
                    this.tempResult.splice(panelIndex)
                    this.tempResult.push(label)
                    this.tempValues.splice(panelIndex)
                    this.tempValues.push(value)





                } else {

                    this.$set(this.activeindexs,panelIndex,activeindex)
                    this.$set(this.tempResult,panelIndex,label)
                    this.$set(this.tempValues,panelIndex,value)
                    this.tempActiveIndexs = [...this.activeindexs]
                    this.tempOptionsArray = [...this.optionsArray]
                    this.result = [...this.tempResult]
                    this.strResult = this.result.join("/")
                    this.values = [...this.tempValues]
                    this.show = false
                    this.$emit("input",this.values)
                    this.isUp = !this.isUp
                    this.arrowHover = true


                }

            },
            handleClick() {
                if (this.disabled) return
                this.show = !this.show
                // setTimeout(() => {
                    this.optionsArray = [...this.tempOptionsArray]
                    this.activeindexs = [...this.tempActiveIndexs]
                    this.tempResult = [...this.result]
                    this.tempValues = [...this.values]
                // },1000)
                this.isUp = !this.isUp

            },
            handleClear() {
                this.show = false
                this.arrowHover = false
                this.tempOptionsArray = [this.options]
                this.tempActiveIndexs = []
                this.values = []
                this.result = []
                this.$emit("input",this.values)
            },
            handleBlur(e) {
                this.show = false
               // setTimeout(() => {
                   this.optionsArray = [...this.tempOptionsArray]
                   this.activeindexs = [...this.tempActiveIndexs]
                   this.tempResult = [...this.result]
                   this.tempValues = [...this.values]
               // },1000)
                this.isUp =false
            },
            handleInput(v){

                if (v === "") {
                    this.filterItems = []
                    this.show = true
                    this.showFilter = false
                }
                else{
                    this.filterItems = this.total.filter(item => item.includes(v))
                    this.match = true
                    if (this.filterItems.length === 0) {
                        this.filterItems.push("无匹配数据")
                        this.match = false
                    }
                    this.show = false
                    this.showFilter = true
                }

            },
            handleFilter(item) {
                this.show = true
                this.showFilter = false
                if (item === "无匹配数据") {
                    this.show = false
                    this.showFilter = true

                    return;
                }

                const items = item.split("/")
                const len = items.length
                // if (len === 0) return
                let j = 0;
                this.$on("active-item",() => {
                    ++j
                    if (j < len) {
                        this.$refs.panels[j].$emit("select-item",items[j])
                    }

                })
                this.$refs.panels[0].$emit("select-item",items[j])

            },
            getSubTotal(label,children) {
                if (!children) return [label]
                let result = []
                for (let i = 0; i < children.length; i++) {
                    const item = children[i];
                    result = result.concat(this.getSubTotal(label + "/" + item.label,item.children))
                }
                return result;
            },
            getTotal() {
                for (let i = 0; i < this.options.length; i++) {
                    const option = this.options[i];
                    this.total =  this.total.concat(this.getSubTotal(option.label,option.children))
                }
            }
        },
        created() {
            this.optionsArray.push(this.options)
            this.tempOptionsArray = [...this.optionsArray]
            window.addEventListener("click",this.handleBlur)
            if (this.filterable) {
                this.readonly = false
                this.getTotal()

            }






        }
    }
</script>

<style scoped lang="scss">
    @import "../../styles/common.scss";
    @import "../../styles/color.scss";
    div {
        display: inline-block;
    }
    .s-cascader {
        position: relative;
        .s-cascader-input {
            width: 220px;
            &:hover   .arrow-hover {
                display: none;
            }


        }

        .arrow {
            transition: all .3s;
            font-size: 14px;
            color: #c0c4cc;
            &.arrow-rotate {
                transform: rotate(180deg);
            }

        }
        .s-cascader-panels {
            display: flex;
            position: absolute;
            transform-origin: 0 0;
        }

        .filter {
            position: absolute;
            min-width: 230px;
            transform-origin: 0 0;
            background-color: #fff;
            max-height: 204px;

            overflow: auto;
            border: 1px solid #e4e7ed;
            border-radius: 4px;
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
            margin-top: 12px;
            li.match {
                white-space:nowrap;
                padding: 10px 15px;
                cursor: pointer;
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: #606266;
                font-size: 14px;
                text-align: left;
                &:hover {
                    background-color: #f5f7fa;
                }
            }

            li.empty {
                color: #c0c4cc;
                margin: 10px 0;
                font-size: 14px;
                text-align: center;
            }
        }

    }

    .slide-enter, .slide-leave-to {
        transform: scaleY(0);


    }

    .slide-enter-active, .slide-leave-active {
        transition: all .1s ease;

    }

    .slide-enter-to, .slide-leave {
        transform: scaleY(1);
    }







</style>
