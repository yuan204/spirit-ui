<template>
    <section style="margin-top: 40px">
        <h2><slot name="title"></slot></h2>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">事件名</th>
                <th scope="col">说明</th>
                <th scope="col">返回值</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="{name,spec,returnValue} in infos">
                <td>{{name}}</td>
                <td>{{spec}}</td>
                <td>{{returnValue}}</td>
            </tr>
            </tbody>
        </table>
    </section>
</template>

<script>
    export default {
        name: "event",
        props: {
            infos: {
                type: Array,
            },
        },
    }
</script>

<style scoped>
</style>
