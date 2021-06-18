import _FCComponent from './vue-fusioncharts-component';

const install = (app, FC, ...options) => {
  let component = _FCComponent(FC, ...options);
  app.component(component.name, component);
};

export default install;
