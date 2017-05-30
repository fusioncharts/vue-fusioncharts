import _FC from 'fusioncharts';
import _FCComponent from './vue-fusioncharts';

let FCComponent = _FCComponent(_FC);

const install = (Vue, FC = _FC, ...options) => {

    options && options.forEach && options.forEach((modules) => {
        modules(FC);
    });
    
    let component = _FCComponent(FC);

    Vue.component(component.name, component);
};

export {FCComponent, install};
export default install;
