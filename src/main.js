import Vue from 'vue'
// import IconDemo from "./demo/iconDemo";
// import ButtonDemo from "./demo/button";
// import ButtonGroupDemo from "./demo/button-group";
// import SwitchDemo from "./demo/switch";
// import InputDemo from "./demo/input";
// import RadioDemo from "./demo/radio";
// import DatePickerDemo from "./demo/date-picker";
// import CascaderDemo from "./demo/cascader";
// import TimePickerDemo from "./demo/time-picker";
// import GridDemo from "./demo/grid";
// import ContainerDemo from "./demo/container";
// import CollapseDemo from "./demo/collapse";
// import StickyDemo from "./demo/sticky";
// import TabsDemo from "./demo/tabs";
// import PageDemo from "./demo/page";
import MessagePlugin from "@/components/message";
// import MessgeDemo from "./demo/message";
// import CarouselDemo from "./demo/carousel";
// import UploadDemo from "./demo/upload";
// import FormDemo from "./demo/form"
// import SelectDemo from "./demo/select"
// import TagDemo from "./demo/tag"

import App from './App.vue'
Vue.use(MessagePlugin)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
