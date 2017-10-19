'use strict'
const moduleEntry = require('../main'),
  dataStore = moduleEntry.dataStore,
  chai = require('chai'),
  expect = chai.expect

describe('Data Store', () => {
  describe('has property', () => {
    it('Instance', () => {
      expect(dataStore).to.have.property('Instance')
    })

    it('get', () => {
      expect(dataStore).to.have.property('get')
    })

    it('set', () => {
      expect(dataStore).to.have.property('set')
    })
  })

  describe('Instance', () => {
    let dataStoreInstance
    beforeEach(() => {
      dataStoreInstance = new dataStore.Instance()
    })

    describe('has property', () => {
      it('get', () => {
        expect(dataStoreInstance).to.have.property('get')
      })

      it('set', () => {
        expect(dataStoreInstance).to.have.property('set')
      })
    })

    describe('stores', () => {
      it('an object', () => {
        dataStoreInstance.set('testKey', {'test': 'value'})
        expect(dataStoreInstance.get('testKey')).to.eql({'test': 'value'})
      })

      it('an arrow function', () => {
        dataStoreInstance.set('testKey', (x) => {
          return x
        })
        expect(dataStoreInstance.get('testKey')('hi')).to.equal('hi')
      })

      it('a function', () => {
        dataStoreInstance.set('testKey', function (x) {
          return x
        })
        expect(dataStoreInstance.get('testKey')('hi')).to.equal('hi')
      })

      it('a string', () => {
        dataStoreInstance.set('testKey', 'hi')
        expect(dataStoreInstance.get('testKey')).to.equal('hi')
      })

      it('an integer', () => {
        dataStoreInstance.set('testKey', 1)
        expect(dataStoreInstance.get('testKey')).to.equal(1)
      })

      it('a boolean', () => {
        dataStoreInstance.set('testKey', true)
        expect(dataStoreInstance.get('testKey')).to.equal(true)
      })
    })
  })

  describe('global store', () => {
    describe('has property', () => {
      it('get', () => {
        expect(dataStore).to.have.property('get')
      })

      it('set', () => {
        expect(dataStore).to.have.property('set')
      })
    })

    describe('stores', () => {
      it('an object', () => {
        dataStore.set('testKey', {'test': 'value'})
        expect(dataStore.get('testKey')).to.eql({'test': 'value'})
      })

      it('an arrow function', () => {
        dataStore.set('testKey', (x) => {
          return x
        })
        expect(dataStore.get('testKey')('hi')).to.equal('hi')
      })

      it('a function', () => {
        dataStore.set('testKey', function (x) {
          return x
        })
        expect(dataStore.get('testKey')('hi')).to.equal('hi')
      })

      it('a string', () => {
        dataStore.set('testKey', 'hi')
        expect(dataStore.get('testKey')).to.equal('hi')
      })

      it('an integer', () => {
        dataStore.set('testKey', 1)
        expect(dataStore.get('testKey')).to.equal(1)
      })

      it('a boolean', () => {
        dataStore.set('testKey', true)
        expect(dataStore.get('testKey')).to.equal(true)
      })
    })
  })
})