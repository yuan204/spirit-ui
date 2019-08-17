<template>
    <div class="s-select" @click.stop="handleClick">
        <s-input :readonly="!filterable"
                 :placeholder="this.selected.length > 0 ? '' :  placeholder"
                 :value="filterable ? inputValue : selectedLabel"
                 :style="{height:inputHeight + 'px'}"
                 :disabled="disabled"
                 :clearable="clearable"
                 @clear ="handleClear"
                 @input="handleFilter"

        >
            <s-icon slot="suffix" name="down" :class="{dropdown:showOptions}" ></s-icon>
        </s-input>
        <div class="tag-group" v-if="multiple" ref="tagGroup" >
                 <s-tag v-for="{value,label} in selectedOptions" type="info" disable-transition :closable ="!disabled" @close="handleClose($event,value)" >{{label}}</s-tag>
            <input type="text" class="s-select-input" v-show="selectedOptions.length > 0"   @input="handleFilter($event.target.value)" :value="inputValue">
        </div>
        <transition name="slide">
            <ul class="s-options" v-show="showOptions" :style="{top: inputHeight + 5 + 'px'}" @click.stop>
                <template v-if="isFilter">
                    <s-option v-for="option in filterOptions"
                              :value="option.value"
                              :key="option.value"
                              :label="option.label"
                              :disabled="option.disabled"
                              :class="{'no-match':!match}"
                    >

                    </s-option>
                </template>
                <template v-else>
                    <slot></slot>
                </template>
            </ul>
        </transition>

    </div>
</template>

<script>
    import SInput from "../input/input";
    import STag from "../tag/tag";
    import SIcon from "../icon/icon";
    import SOption from "./option";




    export default {
        name: "sSelect",
        components: {
            SInput,
            STag,
            SIcon,
            SOption
        },
        props: {
            value: {
                type: [Number, String, Array],
            },
            placeholder: {
                type: String,
                default: "请选择"
            },
            multiple: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            clearable: {
                type: Boolean,
                default: false
            },
            filterable: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                selected: this.value ? this.value : (this.multiple ? [] : ""),
                showOptions: false,
                inputHeight: 40,
                cursorLeft: 0,
                selectedOptions: [],
                options: [],
                // filterOptions:[],
                inputValue: "",
                isFilter: false,
                isChange: false,
                match: false
            }
        },

        provide() {
            return {
                select: this
            }
        },
        computed: {
            selectedLabel() {
                if (Array.isArray(this.selected))
                    return ""
                else {
                    const option = this.options.find(option => option.value === this.selected)
                    return option ? option.label : ""
                }
            },
            filterOptions: {
                set(v) {
                    this.inputValue = v;
                    this.isChange = false
                },
                get() {
                    const filterValues = this.options.filter(option => option.label.includes(this.inputValue));
                    if (filterValues.length === 0) {
                        this.match = false
                        filterValues.push({label: "无匹配数据",value:"no match value",disabled: false})
                    } else {
                        this.match = true
                    }
                    if (this.multiple) {
                        return this.isChange ? (this.inputValue = "",this.options) : filterValues
                    } else {
                        return this.inputValue === "" ? this.options :filterValues
                    }
                }
            }

        },
        methods: {
            handleClose(e,val) {
               e.stopPropagation()
                this.$emit('select',{value:val},this.showOptions)
            },
            handleClick() {
                if (this.disabled) return
                if (this.multiple && this.filterable && this.showOptions) return;
                this.showOptions = !this.showOptions
                if (this.filterable) this.inputValue = ""
            },
            handleClear(e) {
                e.stopPropagation()
                this.$emit('select',{value:""},false)
            },
            handleFilter(val) {
                // this.filterOptions = val === "" ? this.options :this.options.filter(option => option.label.includes(val))
                this.filterOptions = val
            },
        },
        created() {
            document.addEventListener("click",() => {
                this.showOptions = false
            })
            this.$on("select",(option,showOptions) => {
                if (this.multiple) {
                    this.isChange = true
                    if (option.active) {
                        this.selectedOptions.push(option)
                        this.selected.push(option.value)
                    }
                else
                    {
                        this.selectedOptions = this.selectedOptions.filter(({value}) => value !== option.value);
                        this.selected = this.selected.filter(value => value !== option.value);

                    }
                    this.$nextTick(() => {
                        this.inputHeight = this.selectedOptions.length === 0 ? this.inputHeight : this.$refs.tagGroup.getBoundingClientRect().height
                        this.cursorLeft = this.$refs.tagGroup.getBoundingClientRect().width
                    })
                } else {
                    this.selected =option.value
                    if (this.filterable)
                        this.inputValue = this.options.find(option => option.value === this.selected).label
                }
                this.showOptions = showOptions;
                this.$emit("input",this.selected)

            })

            this.$on("init-options",(option) => {

                this.options.push(option)
                if (this.multiple && this.selected.includes(option.value)) {
                    this.selectedOptions.push(option)
                    this.$nextTick(() => {
                        this.inputHeight = this.selectedOptions.length === 0 ? this.inputHeight : this.$refs.tagGroup.getBoundingClientRect().height
                        this.cursorLeft = this.$refs.tagGroup.getBoundingClientRect().width
                    })
                }
            })
        },
        mounted() {
            this.$off("init-options")
            this.isFilter = this.filterable
        }
    }
</script>

<style scoped lang="scss">
    @import "../../styles/common.scss";
    @import "../../styles/transition.scss";
    .s-select {
        position: relative;
        .tag-group {
            display: flex;
            /*align-items: center;*/
            align-content: space-around;
            flex-wrap: wrap;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            padding: 1px ;
            z-index: 1;
            .s-tag {
                margin: 3px;
            }
            .s-select-input {
               border: none;
                outline: none;
                width: 0;
                flex: auto;
            }

        }
        .s-options {
            position: absolute;
            background-color: #fff;
            padding: 5px 0;
            box-shadow: 0 1px 6px rgba(0,0,0,.2);
            top: 42px;
            border-radius: 5px;
            width: 100%;
            transform-origin: top center;
        }
        .s-icon {
            transition: transform .3s;
        }
        .dropdown {
            transform: rotate(180deg);
        }
    }

    .no-match {
        justify-content: center;
        color: #ccc;
    }
</style>

<style scoped>
    .s-input >>> .suffix-icon {
        z-index: 10;
    }
</style>
