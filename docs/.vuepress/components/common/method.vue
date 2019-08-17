<template>
    <section style="margin-top: 40px">
        <h2><slot name="title"></slot></h2>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">方法名</th>
                <th scope="col">说明</th>
                <th scope="col">参数</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="{name,spec,parameters} in infos">
                <th>{{name}}</th>
                <td>{{spec}}</td>
                <td>{{parameters}}</td>
            </tr>
            </tbody>
        </table>
    </section>
</template>

<script>
    export default {
        name: "method",
        props: {
            infos: {
                type: Array,
            },
        },
    }
</script>

<style scoped>
</style>
