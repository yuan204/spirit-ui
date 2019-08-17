<template>
  <div>
      <div>
          <s-radio v-model="fruit" value="apple" vertical >苹果</s-radio>
          <s-radio v-model="fruit" value="pear" vertical>梨</s-radio>
          <s-radio v-model="fruit" value="banana" vertical>香蕉</s-radio>
      </div>
      {{fruit}}
<!--      <s-radio-group v-model="fruit2" vertical>-->
<!--          <s-radio  value="apple">苹果</s-radio>-->
<!--          <s-radio  value="pear">梨</s-radio>-->
<!--          <s-radio value="banana">香蕉</s-radio>-->
<!--      </s-radio-group>-->
<!--      {{fruit2}}-->
      <s-radio-group v-model="fruit2" type="button">
          <s-radio  value="apple" disabled>苹果</s-radio>
          <s-radio  value="pear">梨</s-radio>
          <s-radio value="banana">香蕉</s-radio>
      </s-radio-group>
      {{fruit2}}
  </div>
</template>

<script>
    import SRadioGroup from "@/components/radio/radio-group";
    import SRadio from "@/components/radio/radio";


    export default {
        name: "SpiritRadioDemo",
        components:{
            SRadio,
            SRadioGroup
        },
        data() {
            return {
                fruit:"apple",
                fruit2: "pear"
            }
        },
    }
</script>

<style scoped>

</style>
