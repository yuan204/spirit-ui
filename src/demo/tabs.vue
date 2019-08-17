<template>
  <div>
      <s-tabs v-model="activeName" type = "card" closable @tab-remove = "handleClose">
          <s-tab-pane label="标签一" name="name1" v-if="'name1' !== tabName" key="name1">
              标签一的内容
          </s-tab-pane>
          <s-tab-pane label="标签二" name="name2" v-if="'name2' !== tabName" key="name2">标签二的内容</s-tab-pane>
          <s-tab-pane label="标签三" name="name3" v-if="'name3' !== tabName" key="name3">标签三的内容</s-tab-pane>
      </s-tabs>
<!--      {{activeName}}-->
  </div>
</template>

<script>
    import {STabPane, STabs} from "@/components/tabs";
    import SIcon from "@/components/icon/icon";



    export default {
        name: "TabsDemo",
        components:{
            STabs,
            STabPane,
            SIcon
        },
        data() {
            return {
                activeName: "name3",
                tabName: ""
            }
        },
        methods: {
            handleClose(name) {
                this.tabName = name;
            }
        },
    }
</script>

<style scoped>
    .s-tabs {
        margin-top: 100px;
        margin-left: 100px;
        width: 500px;
    }
</style>
