<template>
    <section style="margin-top: 40px">
        <h2><slot name="title"></slot></h2>
        <table class="table" >
            <thead>
            <tr>
                <th scope="col">名称</th>
                <th scope="col">说明</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="{name,spec} in infos">
                <td>{{name}}</td>
                <td>{{spec}}</td>
            </tr>
            </tbody>
        </table>
    </section>
</template>

<script>
    export default {
        name: "DocSlot",
        props: {
            infos: {
                type: Array,
            },
        },

    }
</script>

<style scoped>
</style>
