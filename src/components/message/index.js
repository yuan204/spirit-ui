import Message from "./message";

export default {
    install(Vue, options) {
        const MessageConstructor = Vue.extend(Message);
        MessageConstructor.top = 0;
        Vue.prototype.$message = function (options) {

            const vm = new MessageConstructor({
                propsData: options
            }).$mount()
            document.body.appendChild(vm.$el)
            vm.show()

        }

        Vue.prototype.$message.info = function (options) {
            Vue.prototype.$message(options)
        }
        Vue.prototype.$message.success = function (options) {
            Vue.prototype.$message({...options,type:'success'})
        }
        Vue.prototype.$message.warning = function (options) {
            Vue.prototype.$message({...options,type:'warning'})
        }
        Vue.prototype.$message.error = function (options) {
            Vue.prototype.$message({...options,type:'error'})
        }
    }
}
