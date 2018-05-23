/**
 *  Get object value from string path.
 * 
 * @param {*} object 
 * @param {*} path 
 * @param {*} defaultValue 
 */
export function object_get (object, path, defaultValue) {
    if (typeof object === undefined) {
      return defaultValue || undefined
    }
  
    const pathIndex = path.indexOf('.')
  
    if (pathIndex > -1) {
      return objectGet(object[path.substring(0, pathIndex)], path.substr(pathIndex + 1), defaultValue);
    }
  
    return object[path] || defaultValue;
  }
