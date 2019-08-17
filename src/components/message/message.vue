<template>
    <transition
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
            v-on:after-enter="afterEnter"

            v-on:before-leave="beforeLeave"
            v-on:leave="leave"
    >
        <div class="s-message" :style="messageStyle"  v-show="visible">
            <s-icon :name="type"></s-icon>
            <template v-if="render">
                <render-content :render-content="render"></render-content>
            </template>
            <template v-else>
                <p v-if="dangerouslyUseHTMLString" v-html="message"></p>
                <p v-else> {{message}}</p>
            </template>



            <s-button icon="close-small" type="text" v-if="showClose" @click="closeMessage"></s-button>
        </div>
    </transition>
</template>

<script>
    import SIcon from "../../../src/components/icon/icon";
    import SButton from "../../../src/components/button/button";
    import {RenderContent} from "./render-content";


    export default {
        name: "sMessage",
        components: {
            SIcon,
            SButton,
            RenderContent
        },
        props: {
            message: {
                type: String,
            },
            type: {
                type:String,
                default: "info",
                validator(value) {
                    return ["success","warning","info","error"].includes(value)
                }
            },
            duration: {
                type:Number,
                default: 3000
            },
            offset: {
                type: Number,
                default: 20
            },
            showClose: {
                type:Boolean,
                default:false
            },
            dangerouslyUseHTMLString: {
                type: Boolean,
                default: false
            },
            render: {
                type: Function
            }
        },
        data() {
            return {
              colors: {
                  info:"#909399",
                  success:"#67C23A",
                  warning:"#E6A23C",
                  error:"#f5222d"
              },
                bgColors: {
                    info:"#edf2fc",
                    success:"#f0f9eb",
                    warning:"#fdf6ec",
                    error:"#FEF0F0"
                },
                visible: false
            }
        },
        computed: {
            messageStyle() {
                return {
                    backgroundColor: this.bgColors[this.type],
                    color: this.colors[this.type]
                }
            },

        },
        methods: {
            show() {
                this.visible = true

            },

            beforeEnter: function (el) {

                el.style.top = 0;


            },

            enter: function (el,done) {

              setTimeout(() => {
                  el.style.transition = "all .3s linear"
                  el.style.top = `${this.offset}px`;
                  el.style.opacity = 1;
                  done();
              },0)



            },
            afterEnter: function (el) {
                setTimeout(() => {
                    this.visible = false
                },this.duration)



            },
            beforeLeave: function (el) {
                el.style.top = `${this.offset}px`;


            },
            leave: function (el) {


                    el.style.transition = "all .3s linear"
                    el.style.top = 0;
                el.style.opacity = 0;


            },
            closeMessage() {
                this.visible = false
            }


        },


    }
</script>

<style scoped lang="scss">
    @import "../../styles/common.scss";
    @import "../../styles/color.scss";

    .s-message {
        width: 380px;
        padding: 20px;
        position: fixed;
        top: 0;
        left: 50%;
        opacity: 0;
        z-index: 1000;

        transform: translateX(-50%);

        border-radius: 4px;
        display: flex;
        align-items: center;
        .s-icon {
            width: 24px;
            height: 24px;
            margin-right: 10px;
            display: inline-block;
        }

        .s-button {
            margin-right: 0;
            margin-left: auto;
        }


    }


</style>

<style scoped>
    .s-button >>> .s-icon {
        font-size: 30px;
    }
</style>
