import SContainer from "./container";
import SFooter from "./footer";
import SAside from "./aside";
import SHeader from "./header";
import SMain from "./main";

// export {
//     SAside,
//     SContainer,
//     SFooter,
//     SHeader,
//     SMain
// }

const Container = {}
Container.install = Vue => {
    Vue.component(SContainer.name,SContainer)
    Vue.component(SFooter.name,SFooter)
    Vue.component(SAside.name,SAside)
    Vue.component(SHeader.name,SHeader)
    Vue.component(SMain.name,SMain)

}

export default Container
