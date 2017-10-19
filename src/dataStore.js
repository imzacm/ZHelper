'use strict'
const globalDataStore = {}

module.exports.set = function(key, value) {
  globalDataStore[key] = value
}

module.exports.get = function(key) {
  if (globalDataStore.hasOwnProperty(key)) {
    return globalDataStore[key]
  }
  return null
}

module.exports.Instance = function() {
  const dataStore = {}
  this.get = function(key) {
    return dataStore[key] === undefined ? null : dataStore[key]
  }

  this.set = function(key, value) {
    dataStore[key] = value
    return this
  }
}
