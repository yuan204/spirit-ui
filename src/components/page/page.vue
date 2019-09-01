<template>
    <div class="s-page">
        <span v-if="showTotal" class="s-page-total">共 {{total}} 条</span>
        <s-button v-if="prevText" type="text"
                  @click="dec" :disabled = "curPage === 1"
                  :class="{background}"
                  class="s-text"

        >
            {{prevText}}
        </s-button>
        <s-button v-else icon="leftArrow" type="text"
                  @click="dec" :disabled = "curPage === 1"
                  :class="{background}"

        >
        </s-button>
        <ul class="s-page-numbers">
            <li  @click="handleClickPage(1)" :class="{active:curPage === 1,background}"  >1</li>
            <li @click="handlePrevClick" v-show="showPrev" style="padding:0"> <s-button icon="more" type="text" :class="{background}"></s-button></li>
            <li v-for="n in pages" :class="{active:curPage === n,background}" @click="handleClickPage(n)">{{n}}</li>
            <li @click="handleNextClick" v-show="showNext" style="padding:0"> <s-button icon="more" type="text" :class="{background}"></s-button></li>
            <li  @click="handleClickPage(pageNumber)" :class="{active:curPage === pageNumber,background}" v-if="pageNumber !== 1">{{pageNumber}}</li>


        </ul>
        <s-button v-if="nextText" type="text" @click="inc" :disabled = "curPage === pageNumber" :class="{background}" class="s-text">{{nextText}}</s-button>
        <s-button v-else icon="arrow-right" type="text" @click="inc" :disabled = "curPage === pageNumber" :class="{background}">
        </s-button>

        <s-select v-if="pageSizes" v-model="size">
            <s-option v-for="size in pageSizes" :value="size" :label="`${size}条/页`" :key="size"></s-option>
        </s-select>
        <div v-if="showJump" class="s-page-jump">
            <span>跳至</span>
            <input type="number" min="1" :max="pageNumber" v-model.number.lazy="curPage">
            <span>页</span>
        </div>

    </div>
</template>

<script>
    import SIcon from "../icon/icon";
    import SButton from "../button/button";
    import SSelect from "../select/select";
    import SOption from "../select/option";
    import {range} from "../../utils/help";


    export default {
        name: "sPage",
        components:{
            SIcon,
            SButton,
            SSelect,
            SOption
        },
        props: {
            total: {
                type: Number,
            },
            pageSize: {
                type: Number,
                default:10
            },
            currentPage: {
                type:Number,
                default: 1
            },
            background: {
                type: Boolean,
                default: false
            },
            pageSizes: {
                type: Array,
            },
            showJump: {
                type: Boolean,
                default: false
            },
            showTotal: {
                type: Boolean,
                default: false
            },
            prevText: {
                type: String
            },
            nextText: {
                type: String
            }

        },
        data() {
            return {
                curPage: this.currentPage,
                startPages:[],
                pageNumber: 0,
                endPages: range(1,8),
                showPrev : false,
                showNext : false,
                pages: [],
                size: this.pageSize,


            }
        },


        watch: {
            currentPage(val) {
                this.curPage = val;
            },
            curPage(val,oldVal) {
                let cp = val;

                if (val < 1) cp = 1;
                if (val > this.pageNumber) cp = this.pageNumber;
                this.curPage = cp;
                if (this.pageNumber > 7) {
                    this.changePage(cp)
                }
                this.$emit("update:currentPage",cp)
                this.$emit("current-page",cp)

            },
            size(newValue) {
                this.pageNumber = Math.ceil(this.total / newValue)
                this.endPages = range(this.pageNumber - 5,this.pageNumber)
                if (this.pageNumber <= 7) {
                    this.pages = range(2,this.pageNumber)
                    this.$emit("size-change",this.pageNumber)
                    return
                }

                this.changePage(this.curPage)
                this.$emit("size-change",this.pageNumber)
            }
        },
        methods: {
            handleClickPage(num) {
                this.curPage = num;
            },
            handlePrevClick() {
                this.curPage -= 5;
                if (this.curPage < 1) this.curPage = 1
            },
            handleNextClick() {
                this.curPage += 5;
                if (this.curPage > this.pageNumber) this.curPage = this.pageNumber
            },
            changePage(val) {
                if (1 <= val && val < 5) {
                    this.showPrev = false;
                    this.showNext = true;

                    this.pages = this.startPages
                }
                else if (this.pageNumber - 4 < val && val <= this.pageNumber){
                    this.showPrev = true;
                    this.showNext = false;
                    this.pages = this.endPages
                }
                else {
                    this.showPrev = true;
                    this.showNext = true;
                    this.pages =  range(val - 2,val + 3)
                }
            },
            inc() {
                if (this.curPage === this.pageNumber) return
                this.curPage++
            },
            dec() {
                if (this.curPage === 1) return
                this.curPage--
            }
        },

        created() {
            if (this.pageSizes)
                this.size = this.pageSizes[0]
            this.startPages = range(2,7)
            this.pageNumber = Math.ceil(this.total / this.size)
            this.endPages = range(this.pageNumber - 5,this.pageNumber)
            if (this.pageNumber <= 7) {
                this.pages = range(2,this.pageNumber)
                return
            }

            this.changePage(this.curPage)
        }
    }
</script>

<style scoped lang="scss">
    @import "../../styles/common.scss";
    .s-page {
        display: flex;
        align-items: center;
        font-size: 13px;
        font-weight: bold;
        .background {
            background-color: #f4f4f5;
        }
        .s-button {
            padding: 0;
            height: 28px;
            width: 28px;
            &.s-text {
                width: auto;
            }


        }
        & > .s-button:hover {
            color: #409EFF;

        }
        /*&.disabled {*/
        /*    cursor: not-allowed;*/
        /*    color: ;*/
        /*}*/

        .s-page-numbers {
            display: flex;

            & > li {
                height: 28px;
                line-height: 28px;
                width: 28px;
                padding: 0 4px;
                margin: 0 5px;
                cursor: pointer;
                text-align: center;
                &.active,&:hover {
                    color: #409EFF;
                }

            }
        }

        .s-select {
            width: 100px;
            flex-shrink: 0;
        }

        .s-page-jump {
            color: #606266;
            display: inline-block;
            flex-shrink: 0;

            input {
                height: 28px;
                border-radius: 4px;
                border: 1px solid #dcdfe6;
            }
            & > * {
                margin-right: 5px;
            }
        }

        .s-page-total {
            color: #606266;
            /*display: inline-flex;*/
            /*align-items: center;*/
            margin-right: 5px;
            flex-shrink: 0;
        }
        .s-button {
            flex-shrink: 0;

        }
    }
</style>
