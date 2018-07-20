
export function isObject(value) {
  return value !== null && (typeof value === 'object' || typeof value === 'function');
}

export function isCallable(fn) {
  return typeof fn === 'function';
}

export function merge(target, ...sources) {
  sources.forEach((source) => {
    Object.keys(source).forEach((prop) => {
      if (isObject(target[prop]) && isObject(source[prop])) {
        merge(target[prop], source[prop]);
      } else {
        // eslint-disable-next-line no-param-reassign
        target[prop] = source[prop];
      }
    });
  });
  return target;
}

export function setAppTitle(title) {
  document.querySelector('title').textContent = title;
}

export function loadScript(scriptURL) {
  const scriptElem = document.createElement('script');
  scriptElem.setAttribute('type', 'text/javascript');
  scriptElem.setAttribute('src', scriptURL);
  document.body.appendChild(scriptElem);
}

export function handleHTTPResponseError(response) {
  if (response.ok) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * @param {string} url 
 * @param {object} options 
 */
export function request(url, options = {}) {
  return window.fetch(url, merge({ credentials: 'same-origin' }, options))
    .then(handleHTTPResponseError);
}

/**
 * It just adds a parameter to the end of the url.
 * It only works for urls like: 'samples/config.json' or 'http://localhost:8080/public/wrapper/config.json',
 * @param {string} url a simple url
 * @param {string} key key
 * @param {string} value value
 */
export function addParamToUrl(url, key, value) {
  return `${url}?${key}=${value}`;
}

export function preventAjaxCache(url) {
  return addParamToUrl(url, '_', Date.now());
}

export function spread(fn) {
  return (argsArray) => { fn(...argsArray); };
}
