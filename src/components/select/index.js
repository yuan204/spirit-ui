import SSelect from "./select";
import SOption from "./option";
const Select = {}
Select.install = Vue => {
    Vue.component(SSelect.name,SSelect)
    Vue.component(SOption.name,SOption)

}

export default Select
