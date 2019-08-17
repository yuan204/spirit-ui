import Button from "./components/button";
import Cascader from "./components/cascader";
import Collapse from "./components/collapse";
import Container from "./components/container";
import Form from "./components/form";
import Grid from "./components/grid";
import Icon from "./components/icon";
import Input from "./components/input";
import Message from "./components/message";
import Page from "./components/page";
import Radio from "./components/radio";
import Select from "./components/select";
import Switch from "./components/switch";
import Tabs from "./components/tabs";
import Tag from "./components/tag";
import Upload from "./components/upload";

const components = [
    Button,
    Cascader,
    Collapse,
    Container,
    Form,
    Grid,
    Icon,
    Input,
    Page,
    Radio,
    Select,
    Switch,
    Tabs,
    Tag,
    Upload

]



export default {
    install(Vue) {
        components.forEach(component => {
            component.install(Vue)
        })
        Vue.use(Message)
    }
}
