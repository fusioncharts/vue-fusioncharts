export const addDep = (FC, modules) => {
  if (FC) {
    if (
      (modules.getName && modules.getType) ||
      (modules.name && modules.type)
    ) {
      FC.addDep(modules);
    } else {
      modules(FC);
    }
  }
};

export function checkIfDataTableExists(dataSource) {
  // eslint-disable-next-line no-underscore-dangle
  if (dataSource && dataSource.data && dataSource.data._dataStore) {
    return true;
  }
  return false;
}

export function cloneDataSource(obj, purpose = 'clone') {
  const type = typeof obj;
  if (
    type === 'string' ||
    type === 'number' ||
    type === 'function' ||
    type === 'boolean'
  ) {
    return obj;
  }
  if (obj === null || obj === undefined) {
    return obj;
  }
  if (Array.isArray(obj)) {
    const arr = [];
    for (let i = 0; i < obj.length; i++) {
      arr.push(cloneDataSource(obj[i]));
    }
    return arr;
  }
  if (typeof obj === 'object') {
    const clonedObj = {};
    // eslint-disable-next-line guard-for-in
    // eslint-disable-next-line no-restricted-syntax
    for (const prop in obj) {
      // Edge case handling for DataTable
      if (prop === 'data') {
        // eslint-disable-next-line no-underscore-dangle
        if (obj[prop] && obj[prop]._dataStore && purpose === 'clone') {
          clonedObj[prop] = obj[prop];
          // eslint-disable-next-line no-underscore-dangle
        } else if (obj[prop] && obj[prop]._dataStore && purpose === 'diff') {
          clonedObj[prop] = '-';
        } else {
          clonedObj[prop] = cloneDataSource(obj[prop]);
        }
        continue;
      }
      clonedObj[prop] = cloneDataSource(obj[prop]);
    }
    return clonedObj;
  }
  return undefined;
}

export function attachListeners(THIS) {
  if (THIS.$listeners && typeof THIS.$listeners === 'object') {
    Object.keys(THIS.$listeners).forEach(event => {
      THIS.chartObj.addEventListener(event, e => {
        THIS.$emit(event, e);
      });
    });
  }
}

export function createEvents(THIS) {
  const ret = {
    events: {}
  };
  if (THIS.$listeners && typeof THIS.$listeners === 'object') {
    Object.keys(THIS.$listeners).forEach(event => {
      ret.events[event] = e => {
        THIS.$emit(event, e);
      };
    });
  }
  return ret;
}

export function setLastOptions(config, THIS) {
  THIS._oldOptions = Object.assign({}, config);
}

export function getLastOptions(THIS) {
  return THIS._oldOptions;
}

export function getOptions(This, optionsMap) {
  let config = {},
    THIS = This;
  for (let i in optionsMap) {
    if (THIS[i] !== undefined && THIS[i] !== null) {
      config[optionsMap[i]] = THIS[i];
    }
  }
  let options = Object.assign(Object.assign({}, THIS.options), config);
  return options;
}

export function renderChart(This, FC) {
  let THIS = This,
    config = THIS.getOptions(),
    chartObj = THIS.chartObj;

  config.renderAt = this.containerID;
  THIS.setLastOptions(config);

  if (chartObj && chartObj.dispose) {
    chartObj.dispose();
  }
  const events = this.createEvents();
  config.events = Object.assign({}, config.events, events.events);

  THIS.chartObj = chartObj = new FC(config);
  chartObj.render();
}

export function updateChart(This) {
  let THIS = This,
    config = THIS.getOptions(),
    prevConfig = THIS.getLastOptions(),
    chartObj = THIS.chartObj;

  if (
    config.width !== prevConfig.width ||
    config.height !== prevConfig.height
  ) {
    chartObj && chartObj.resizeTo(config.width, config.height);
  } else if (config.type !== prevConfig.type) {
    chartObj.chartType(config.type);
  } else {
    if (!checkIfDataTableExists(config.dataSource))
      chartObj.setChartData(config.dataSource, config.dataFormat);
  }

  THIS.setLastOptions(config);
}
