import SButton from "./button";
import SButtonGroup from "./button-group";

const Button = {}
Button.install = Vue => {
    Vue.component(SButton.name,SButton)
    Vue.component(SButtonGroup.name,SButtonGroup)

}

export default Button
