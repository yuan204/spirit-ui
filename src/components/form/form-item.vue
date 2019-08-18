<template>
    <div class="s-form-item">
        <div class="s-form-item-inner" :style="positionStyle">
            <label v-if="label" :style="{width:this.form.labelWidth,textAlign: form.labelPosition}">{{label}}</label>
            <div class="s-form-content"
                 :style="{marginLeft:!label?this.form.labelWidth : '',padding:form.labelPosition === 'top' ? '10px 0' : '0 15px'}"
            >
                <slot></slot>
            </div>
        </div>
        <span class="s-message" :style="{marginLeft:label?this.form.labelWidth : '',padding:form.labelPosition === 'top' ? '5px 0' : '0 15px'}">{{message}}</span>
    </div>
</template>

<script>
    import Validator from "async-validator";
    import emitter from "../../mixins/emitter";


    export default {
        name: "SpiritFormItem",
        props: {
            label: {
                type: String,
                // default:""
            },
            prop: {
                type: String
            },
        },

        mixins: [emitter],
        inject: ["form"],
        data() {
            return {
                message: ""
            }
        },
        computed: {
            positionStyle() {
                return {
                    flexDirection: this.form.labelPosition === 'top' ? 'column' : 'row',
                    alignItems: this.form.labelPosition === 'top' ? 'flex-start' : 'center'
                }
            }
        },
        methods: {
            validate(trigger) {
                const prop = this.prop
                if (!prop) return
                let rules = this.form.rules[prop];
                if (trigger)
                    rules = rules.filter(rule => rule.trigger === trigger)
                const descriptor = {
                    [prop]: rules
                }
                const validator = new Validator(descriptor)
                return validator.validate(
                    {[prop]: this.form.model[prop]},
                    (errors, fields) => {
                        this.message = errors ? errors[0].message : ""

                    })
            }
        },
        created() {
            this.dispatch("sForm", "form-item-add", this)
            this.$on("form-change", () => {
                this.validate("change")
            })
            this.$on("form-blur", () => {
                this.validate("blur")
            })
        },
        destroyed() {
            this.dispatch("sForm", "form-item-remove", this)
        }
    }
</script>

<style scoped lang="scss">
    @import "../../styles/common.scss";
    .s-message {
        font-size: 12px;
        display: inline-block;
        color: #ed4014;
    }

    .s-form-item {
      .s-form-item-inner {
          display: flex;
          align-items: center;
          .s-form-content {
              padding: 0 15px;
              flex: 1;
          }
      }
    }
</style>
