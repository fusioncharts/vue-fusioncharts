import _FC from 'fusioncharts';
import FCComponent from './vue-fusioncharts';

const install = (Vue, FC = _FC, ...options) => {

    options && options.forEach && options.forEach((modules) => {
        modules(FC);
    });

    Vue.component('fusioncharts', FCComponent(FC));
};

export default install;
