import STabs from "./tabs";
import STabPane from "./tab-pane";
const Tabs = {}
// export {
//     STabPane,
//     STabs
// }

Tabs.install = Vue => {
    Vue.component(STabs.name,STabs)
    Vue.component(STabPane.name,STabPane)

}

export default Tabs
