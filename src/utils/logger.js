
export default {
  log(...args) {
    // eslint-disable-next-line no-console 
    console.log.call(console, ...args);
  },
};
