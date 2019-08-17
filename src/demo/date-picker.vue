<template>
   <div>
       <s-date-picker v-model="date"></s-date-picker>
       {{date}}
   </div>
</template>

<script>
    import SDatePicker from "@/components/date-picker/date-picker";
    export default {
        name: "DatePickerDemo",
        components: {
            SDatePicker
        },
        data() {
            return {
                date: ""
            }
        },
    }
</script>

<style scoped>

</style>
