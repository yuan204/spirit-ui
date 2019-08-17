<template>
    <div class="s-cascader-panel">
        <ul>
            <li v-for="(option,optionIndex) in options" class="s-cascader-item" @click="handleClick(option,optionIndex,option.value)" :class="{active:activeIndex === optionIndex,disabled:option.disabled}" @mouseenter="handleHover(option,optionIndex,option.value)">
                <span class="s-cascader-label" >{{option.label}}</span>
                <s-icon name="rightArrow" v-if="option.children" class="s-cascader-right-arrow"></s-icon>

            </li>
        </ul>

    </div>
</template>

<script>
    import SIcon from "../icon/icon";
    export default {
        name: "sCascaderPanel",
        props: {
            options: {
                type: Array,
            },
            panelIndex: Number,
            activeIndex: {
                type: Number,
                default: -1
            },

        },
        components: {
            SIcon
        },
        data() {
            return {

            }
        },
        methods: {
            handleClick(option,i,value) {
                this.$emit('panel',option.children,this.panelIndex,option.label,i,value)
            },
            handleHover(option,i,value) {
                if (option.disabled || !option.children || this.$parent.trigger === "click") return;
                this.$emit('panel',option.children,this.panelIndex,option.label,i,value)
            }
        },
        created() {

            this.$on("select-item",(l) => {
                const i = this.options.map(option => option.label).indexOf(l)
                this.handleClick(this.options[i],i,this.options[i].value)
                setTimeout(() => this.$parent.$emit("active-item"),0)
            })

        }




    }
</script>

<style scoped lang="scss">
    @import "../../styles/common.scss";
    @import "../../styles/color.scss";
    .s-cascader-panel {
        width: 180px;
        background-color: #fff;
        height: 187px;
        overflow: auto;
        border: 1px solid #e4e7ed;
        padding-top: 12px;
        border-radius: 4px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
        margin-top: 12px;
        .s-cascader-item {
            height: 34px;
            line-height: 34px;
            padding: 0 20px 0 20px;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #606266;
            text-align: left;
            &:hover {
                background-color: #f5f7fa;
            }
            &.active {
                background-color: #f5f7fa;
                color: #409eff;
                font-weight: bold;
                outline: none;
            }
            &.disabled {
                color: #ccc;
                cursor: not-allowed;
                &:hover {
                    background-color: #fff;
                }
            }





            .s-cascader-label {
                font-size: 14px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                /*&.active {*/
                /*    color: #409eff;*/
                /*    font-weight: bold;*/
                /*    outline: none;*/

                /*}*/
            }
            .s-cascader-right-arrow {
                font-size: 12px;
            }

        }
    }
</style>
