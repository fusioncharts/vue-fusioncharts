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
