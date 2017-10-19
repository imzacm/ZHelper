'use strict'
const moduleEntry = require('../main'),
  ga = moduleEntry.googleAnalytics,
  chai = require('chai'),
  expect = chai.expect

describe('Google Analytics', () => {
  describe('has a global instance', () => {
    let gaGlobalInst = ga()

    it('that has the setOption property', () => {
      expect(gaGlobalInst).to.have.property('setOption')
    })

    it('that has the setAction property', () => {
      expect(gaGlobalInst).to.have.property('setAction')
    })

    it('that has the getOptions property', () => {
      expect(gaGlobalInst).to.have.property('getOptions')
    })

    it('that has the getActions property', () => {
      expect(gaGlobalInst).to.have.property('getActions')
    })

    describe('and add a new', () => {
      it('option', () => {
        gaGlobalInst.setOption('test', 'hi')

        expect(gaGlobalInst.getOptions().test).to.equal('hi')
      })

      it('action', () => {
        gaGlobalInst.setAction('test', 'hi')

        expect(gaGlobalInst.getActions().test).to.equal('hi')
      })
    })
  })

  describe('can create a local instance', () => {
    let gaLocalInst = new ga()

    it('that has the setOption property', () => {
      expect(gaLocalInst).to.have.property('setOption')
    })

    it('that has the setAction property', () => {
      expect(gaLocalInst).to.have.property('setAction')
    })

    it('that has the getOptions property', () => {
      expect(gaLocalInst).to.have.property('getOptions')
    })

    it('that has the getActions property', () => {
      expect(gaLocalInst).to.have.property('getActions')
    })

    describe('and add a new', () => {
      let genericNew = {
        test: 'hi'
      }

      it('option', () => {
        let newGaLocalInst = new ga({
          options: genericNew
        })

        expect(newGaLocalInst.getOptions().test).to.equal(genericNew.test)
      })

      it('action', () => {
        let newGaLocalInst = new ga({
          actions: genericNew
        })

        expect(newGaLocalInst.getActions().test).to.equal(genericNew.test)
      })
    })
  })
})