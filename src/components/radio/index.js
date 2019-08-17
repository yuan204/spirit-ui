import SRadio from "./radio";
import SRadioGroup from "./radio-group";
const Radio = {}
Radio.install = Vue => {
    Vue.component(SRadio.name,SRadio)
    Vue.component(SRadioGroup.name,SRadioGroup)

}

export default Radio
