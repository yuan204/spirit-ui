<template>
    <div :class="colClass" :style="colStyle">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "sCol",
        props: {
            span: {
                type: [String,Number]
            },
            offset: {
                type: [String,Number]
            },
            order: {
                type: [Number,String]
            },
            xs:{
                type:[Number,Object]
            },
            sm:{
                type:[Number,Object]
            },
            lg:{
                type:[Number,Object]
            },
            md:{
                type:[Number,Object]
            },
            xl:{
                type:[Number,Object]
            },
            xll:{
                type:[Number,Object]
            },
        },
        computed: {
            colStyle() {
                return {
                    paddingLeft: `${this.$parent.gutter / 2}px`,
                    paddingRight: `${this.$parent.gutter / 2}px`,
                    order: this.order
                }
            },
            colClass() {
                const props = ["span","offset"]
                const sizes = ["xs","sm","lg","md","xl","xll"]
                const cls1 =  [this.span && `s-col-normal-span${this.span}`,this.offset && `s-col-normal-offset${this.offset}`];
                const cls2 = sizes.map(size => {
                    return props.map(prop => {
                        let o = this[size]
                        if (!o) return
                        if (typeof o === "number") o = {"span":o}
                        return o[prop] &&  `s-col-${size}-${prop}${o[prop]}`


                    })
                }).flat()
                return cls1.concat(cls2)
            }
        },
    }
</script>

<style scoped lang="scss">
    @import "../../styles/common.scss";


    @mixin responsiveClass($name) {
        @for $i from 1 to $grid-columns {
            .s-col-#{$name}-span#{$i} {
                width: percentage($i / $grid-columns);
            }
        }

        @for $i from 1 to $grid-columns {
            .s-col-#{$name}-offset#{$i} {
                margin-left: percentage($i / $grid-columns);
            }
        }
    }

    @include responsiveClass("normal");

    @each $name,$size in $responsiveSizes {
        @if $name == "xs" {

                @include responsiveClass($name)

        } @else {
            @media (min-width: $size) {
                @include responsiveClass($name)
            }
        }

    }


</style>
