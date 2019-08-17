<template>
    <div class="s-row" :style="rowStyle">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "sRow",
        props: {
            gutter: {
                type: Number,
                default: 0
            },
            justify: {
                type: String,
                validator(value) {
                    return ["start", "end", "center", "space-around", "space-between"].includes(value)
                }
            },
            align: {
                type: String,
                validator(value) {
                    return ["top", "middle", "bottom"].includes(value)
                }
            }
        },
        computed: {

            rowStyle() {
                return {
                    marginLeft: `-${this.gutter / 2}px`,
                    marginRight: `-${this.gutter / 2}px`,
                    justifyContent: ["start","end"].includes(this.justify) ? `flex-${this.justify}` : this.justify,
                    alignItems: ({
                        top: "flex-start",
                        middle: "center",
                        bottom: "flex-end"
                    })[this.align]
                }
            }
        },
    }
</script>

<style scoped lang="scss">
    @import "../../styles/common.scss";
    .s-row {
        display: flex;

    }
</style>
