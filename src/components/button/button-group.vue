<template>
    <div class="s-button-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "sButtonGroup"
    }
</script>

<style scoped lang="scss">
    @import "../../styles/color";
    @import "../../styles/common";
    .s-button-group {
        font-size: 0;//空格和换行也占了空间，所以设置为0去除所占据的大小
        display: flex;
        & > * {
            /*border-left-color: transparent;*/
            /*border-right-color: transparent;*/
            border: $borderbase;
            border-right: none;
            border-radius: 0;
            /*display: inline;*/
            flex-shrink: 0;

        }
        & > *:first-child {
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;

        }
        & > *:last-child {
            border-right: $borderbase;
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;

        }

        & > *:hover {
            border: 1px solid $primary;
            color: $primary;
           & + button {
                border-left: none;
            }
        }


    }

</style>
