import SCol from "./col";
import SCow from "./row";
const Grid = {}
Grid.install = Vue => {
    Vue.component(SCol.name,SCol)
    Vue.component(SCow.name,SCow)

}

export default Grid
