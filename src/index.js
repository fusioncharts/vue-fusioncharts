import _FC from 'fusioncharts';
import _FCComponent from './vue-fusioncharts';

const addDep = (FC, _FC, modules) => {
    if(FC){
        if(modules.getName || modules.name){
            FC.addDep(modules);
        }else{
            modules(FC);
        }
    }else{
        modules(_FC);
    }
}
const install = (Vue, FC, ...options) => {
    options && options.forEach && options.forEach((modules) => {
        addDep(FC, _FC, modules);
    });
    let component = _FCComponent(FC);

    Vue.component(component.name, component);
};

export default install;
