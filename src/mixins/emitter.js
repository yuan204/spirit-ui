
export default {
   methods: {
       dispatch(componentName, eventName, ...args) {

           let vm = this;
           while (true) {
               const parent = vm.$parent;
               if (!parent) return;
               if (parent.$options.name === componentName){
                   vm = parent;
                   break;
               }
               vm = parent;
           }

           vm.$emit(eventName,...args)

       }
    }
}
