import SCollapse from "./collapse";
import SCollapseItem from "./collapse-item";

// export {
//     SCollapse,
//     SCollapseItem
// }

const Collapse = {}
Collapse.install = Vue => {
    Vue.component(SCollapse.name,SCollapse)
    Vue.component(SCollapseItem.name,SCollapseItem)

}

export default Collapse
