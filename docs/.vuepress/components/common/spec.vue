<template>
    <section style="margin-top: 40px">
        <h2><slot name="title"></slot></h2>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">参数</th>
                <th scope="col">说明</th>
                <th scope="col">类型</th>
                <th scope="col">可选值</th>
                <th scope="col">默认值</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="{parameter,spec,type,optionValue,defaultValue} in infos">
                <th scope="row">{{parameter}}</th>
                <td>{{spec}}</td>
                <td>{{type}}</td>
                <td>{{optionValue}}</td>
                <td>{{defaultValue}}</td>
            </tr>
            </tbody>
        </table>
    </section>
</template>

<script>
    export default {
        name: "spec",
        props: {
            infos: {
                type: Array,
            },
        },
    }
</script>

<style scoped>
    td {
        text-align: center;
    }
</style>
