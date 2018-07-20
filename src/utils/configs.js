import * as utils from './utils';

const appConfigs = {
  sample: {
    config: null,
  },
  wrapper: {
    config: null,
    quickStartGuide: null,
  },
};

export function setConfigs(configs) {
  utils.merge(appConfigs, configs);
}

export function getConfigs() {
  return appConfigs;
}

export function getEmptySamplesConfig() {
  return {
    sampleRouteMapping: {},
    wrapperSampleMapping: {},
    sampleProps: {},
  };
}
