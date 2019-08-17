import SForm from "./form";
import SFormItem from "./form-item";

//
// export {
//     SForm,
//     SFormItem
// }

const Form = {}
Form.install = Vue => {
    Vue.component(SForm.name,SForm)
    Vue.component(SFormItem.name,SFormItem)

}

export default Form
