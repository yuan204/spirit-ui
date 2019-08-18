<template>
    <section style="margin-top: 40px;">
        <h2><slot name="title"></slot></h2>
        <p class="desc"><slot name="description"></slot></p>
        <div class="content">
            <div class="comp" >
                <slot name="component"></slot>
            </div>
            <div class="codes" :class="{codesClass:showCodes}">
                <collapse-transition>
                    <div v-show="showCodes" class="codes-content-wrapper">
                        <div class="codes-content">
<!--                            <pre><code class="html">{{codes}}</code></pre>-->
<!--                            <pre><code class="javascript">{{jsCodes}}</code></pre>-->
                            <highlight-code lang="vue">
                                {{codes}}
                            </highlight-code>
                            <highlight-code lang="javascript" v-if="jsCodes">
                                {{jsCodes}}
                            </highlight-code>
                        </div>

                    </div>
                </collapse-transition>
                <div class="codes-header" @click="showCodes = !showCodes">
                    <div class="codes-header-inner">
                        <s-icon name="down"></s-icon>
                        <span style="display: none">
                         {{showCodes ?  '隐藏代码' :'显示代码'}}
                     </span>
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
        name: "feature",
        props: {
            codes: {
                type: String,
            },
            jsCodes: {
                type: String,
            }
        },
        components: {
            SIcon,
            CollapseTransition

        },
        data() {
            return {
                showCodes: false,
            }
        },

    }
</script>

<style scoped lang="scss">
    section {
        /*width: 100%;*/
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
