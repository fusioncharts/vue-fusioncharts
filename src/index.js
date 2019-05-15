import _FCComponent from './vue-fusioncharts-component';

const install = (Vue, FC, ...options) => {
  let component = _FCComponent(FC, ...options);
  Vue.component(component.name, component);
};

export default install;
