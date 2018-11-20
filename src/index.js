// This code is used if we use vue-fusioncharts as a Plugin.
import _FC from 'fusioncharts';
import _FCComponent from './vue-fusioncharts';

const addDep = (FC, _FC, modules) => {
  if (FC) {
    if (
      (modules.getName && modules.getType) ||
      (modules.name && modules.type)
    ) {
      FC.addDep(modules);
    } else {
      modules(FC);
    }
  } else {
    modules(_FC);
  }
};
const install = (Vue, FC, ...options) => {
  options &&
    options.forEach &&
    options.forEach(modules => {
      addDep(FC, _FC, modules);
    });
  let component = _FCComponent(FC);

  Vue.component(component.name, component);
};

export default install;

// This code is used if we use vue-fusioncharts as a Component
// import _FCComponent from "./vue-fusioncharts-component";

// export default _FCComponent;
