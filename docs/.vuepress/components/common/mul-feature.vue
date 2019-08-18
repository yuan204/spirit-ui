<template>
    <section style="margin-top: 40px">
        <h2><slot name="title"></slot></h2>
        <p class="desc"><slot name="description"></slot></p>
        <div class="content" v-for="n in count" :key="n">
            <div>
                <div class="comp">
                    <slot :name="'component' + n" ></slot>
                </div>
                <div class="codes" :class="{codesClass:showCodes[n-1]}">
                    <collapse-transition>
                        <div v-show="showCodes[n-1]" class="codes-content-wrapper">
                            <highlight-code lang="vue">
                                {{codes[n-1]}}
                            </highlight-code>

                        </div>
                    </collapse-transition>
                    <div class="codes-header" @click="handleShow(n-1)">
                        <div class="codes-header-inner">
                            <s-icon name="down"></s-icon>
                            <span style="display: none">
                         {{showCodes[n-1] ?  '隐藏代码' :'显示代码'}}
                     </span>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </section>
</template>

<script>

    import CollapseTransition from "../../../../src/components/base/collapse-transition";
    import SIcon from "../../../../src/components/icon/icon";
    export default {
        name: "mul-feature",
        props: {
            codes: {
                type: Array,
            },
            // jsCodes: {
            //     type: String,
            // },
            count: {
                type: Number,
                default: 0
            }
        },
        components: {
            SIcon,
            CollapseTransition

        },
        data() {
            return {
                showCodes: [],
            }
        },
        created() {
            this.showCodes = Array.from({length:this.count},v => false)

        },

        methods: {
            handleShow(i) {
                this.$set(this.showCodes,i,!this.showCodes[i])
            }
        },



    }
</script>

<style scoped lang="scss">
    section {
        margin-top: 20px;

    }
    .desc {
        margin: 10px 0;
    }
    .container {
        border: 1px solid #ebebeb;
    }

    .comp {
        padding: 20px;
    }

    .comp > * {
        margin-right: 1em;
        margin-top: 1em;
    }

    .codes-content-wrapper {
        background-color: #FAFAFA;
    }
    .content {
        border:1px solid #eaeefb ;
    }
    .codesClass {
        border-top: 1px solid #eaeefb;


        .s-icon {
            transform: rotate(180deg);
        }
    }

    .codes-header {
        border-top: 1px solid #eaeefb;
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        /*color: #D3DCE6;*/

        .codes-header-inner {
            transition: all .3s;
        }
    }

    .codes-header:hover {
        background-color: #f9fafc;
        color: #409eff;

        .codes-header-inner {
            transform: translateX(-20px);

            & > span {
                margin-left: 10px;
                display: inline-block !important;
            }
        }


    }

    .codes-content {

        font-size: 16px;
    }


</style>
