'use strict'
const globalDataStore = new Instance()

function Instance() {
  const dataStore = {}
  this.get = function(key) {
    return dataStore[key] === undefined ? null : dataStore[key]
  }

  this.set = function(key, value) {
    dataStore[key] = value
    return this
  }
}

module.exports.set = globalDataStore.set

module.exports.get = globalDataStore.get

module.exports.Instance = Instance
