<template>
    <div>
        <s-row class="row">
            <s-col span="12" class="col">col-12</s-col>
            <s-col span="12" class="col">col-12</s-col>
        </s-row>
        <s-row class="row">
            <s-col span="8" class="col">col-8</s-col>
            <s-col span="8" class="col">col-8</s-col>
            <s-col span="8" class="col">col-8</s-col>
        </s-row>
        <s-row class="row">
            <s-col span="6" class="col">col-6</s-col>
            <s-col span="6" class="col">col-6</s-col>
            <s-col span="6" class="col">col-6</s-col>
            <s-col span="6" class="col">col-6</s-col>
        </s-row>
        <s-row class="row-gutter" :gutter="10">
                <s-col span="4" class="col"><div class="gutter">col-4</div></s-col>
                <s-col span="8" class="col"><div class="gutter">col-8</div></s-col>
                <s-col span="4" class="col"><div class="gutter">col-4</div></s-col>
                <s-col span="8" class="col"><div class="gutter">col-8</div></s-col>
            </s-row>

        <s-row class="row">
            <s-col span="6" class="col">col-6</s-col>
            <s-col span="6" class="col">col-6</s-col>
            <s-col span="6" class="col">col-6</s-col>
            <s-col span="6" class="col">col-6</s-col>
        </s-row>

        <s-row class="row">
            <s-col span="8" class="col">col-8</s-col>
            <s-col span="8" offset="8" class="col">col-8 | offset-8</s-col>
        </s-row>
        <s-row class="row">
            <s-col span="6" offset="8" class="col">col-6 | offset-8</s-col>
            <s-col span="6" offset="4" class="col">col-6 | offset-4</s-col>
        </s-row>
        <br>
        <s-row class="row">
            <s-col span="12" offset="8" class="col">col-12 | offset-8</s-col>
        </s-row>
        <s-row class="row">
            <s-col :xs="2" :sm="4" :md="6" :lg="8" class="col">Col</s-col>
            <s-col :xs="20" :sm="16" :md="12" :lg="8" class="col">Col</s-col>
            <s-col :xs="2" :sm="4" :md="6" :lg="8" class="col">Col</s-col>
        </s-row>
        <s-row class="row">
            <s-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }" class="col">Col</s-col>
            <s-col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }" class="col">Col</s-col>
            <s-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }" class="col">Col</s-col>
        </s-row>

    </div>
</template>

<script>
    import SCol from "@/components/grid/col";
    import SRow from "@/components/grid/row";


    export default {
        name: "GridDemo",
        components: {
            SCol,
            SRow
        }
    }
</script>

<style scoped lang="scss">
    /*.container {*/
    /*    margin: 20px auto;*/
    /*    border: 1px solid red;*/
    /*    width: 80%;*/
    /*}*/
    .row {
        margin-top: 20px;
        /*border: 1px solid green;*/
        .col {
            padding: 10px;
            color: white;

        }
        .col:nth-child(even) {
            background-color: rgba(0,153,229,.7);
        }
        .col:nth-child(odd) {
            background-color: rgba(0,153,229,.9);
        }
    }

    .row-gutter {
        margin-top: 20px;
        .col {

            color: white;
            .gutter {
                padding: 10px;
                &:nth-of-type(even) {
                    background-color: rgba(0,153,229,.7);
                }
                &:nth-of-type(odd) {
                    background-color: rgba(0,153,229,.9);
                }
            }
        }
    }
</style>
