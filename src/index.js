import _FC from 'fusioncharts';
import _FCComponent from './vue-fusioncharts';

let FCComponent = _FCComponent(_FC);

const install = (Vue, FC = _FC, ...options) => {

    options && options.forEach && options.forEach((modules) => {
        modules(FC);
    });

    Vue.component('fusioncharts', _FCComponent(FC));
};

export {FCComponent, install};
export default install;
