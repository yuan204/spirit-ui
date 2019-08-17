<template>
    <div>
        <s-select  v-model="value"  style="width:200px;margin-left: 50px;display: inline-block"  multiple filterable>
            <s-option v-for="item in options"  :key="item.value"  :value="item.value" :label="item.label"
            :disabled="item.disabled" ></s-option>
        </s-select>
{{value}}
        <s-select  v-model="value2"  style="width:200px;margin-left: 50px;margin-top: 100px;display: inline-block" filterable>
            <s-option v-for="item in options2"  :key="item.value"  :value="item.value" :label="item.label"></s-option>
        </s-select>
{{value2}}

        <s-select v-model="value3" style="width:200px;margin-left: 50px;margin-top: 100px;display: inline-block">
            <s-option
                    v-for="item in cities"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                <span style="float: left">{{ item.label }}</span>
                <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
            </s-option>
        </s-select>
    </div>
</template>

<script>
    import SSelect from "@/components/select/select";
    import SOption from "@/components/select/option";

    export default {
        name: "SelectDemo",
        components: {
            SSelect,
            SOption
        },
        data () {
            return {
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                options2: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                cities: [{
                    value: 'Beijing',
                    label: '北京'
                }, {
                    value: 'Shanghai',
                    label: '上海'
                }, {
                    value: 'Nanjing',
                    label: '南京'
                }, {
                    value: 'Chengdu',
                    label: '成都'
                }, {
                    value: 'Shenzhen',
                    label: '深圳'
                }, {
                    value: 'Guangzhou',
                    label: '广州'
                }],
                value: ['选项4','选项1','选项2'],
                value2: "",
                value3: "",
            }
        }
    }
</script>

<style scoped>

</style>
