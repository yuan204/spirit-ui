<template>
   <div>
       <s-time-picker :options="options2" v-model="selectValue"></s-time-picker>
       {{selectValue}}
   </div>
</template>

<script>
    import STimePicker from "@/components/time-picker/time-picker";


    export default {
        name: "TimePickerDemo",
        components: {
            STimePicker
        },
        data() {
            return {
                selectValue:"",
                options: {
                    start: '08:30',
                    step: '00:15',
                    end: '18:30'
                },
                options2: {
                    selectRange: '18:30:00 - 20:30:00'
                }
            }
        },
    }
</script>

<style scoped>

</style>
