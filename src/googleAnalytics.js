'use strict'

//const querystring = require('querystring')

const options = {
  protocol: 'https',
  httpsOpts: {
    host: 'www.google-analytics.com',
    port: '443',
    path: '/collect',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  },
  httpOpts: {
    host: 'www.google-analytics.com',
    port: '80',
    path: '/collect',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }
},

actions = {
  screenview: (screenName) => {
    return {
      t: 'screenview',
      cd: screenName
    }
  },
  event: (category, action, label) => {
    const ret = {
      t: 'event',
      ec: category,
      ea: action
    }
    if (label !== undefined) {
      ret.el = label
    }
    return ret
  }
}

function Instance(opts) {
  const optionsObj = {},
    actionObj = {}

    if (opts === undefined) {
      opts = {}
    }
    if (opts.options === undefined) {
     opts.options = {}
    }
    if (opts.actions === undefined) {
      opts.actions = {}
    }

  Object.assign(optionsObj, options, opts.options)
  Object.assign(actionObj, actions, opts.actions)

  this.setOption = function (op, value) {
    optionsObj[op] = value
    return this
  }

  this.setAction = function (act, value) {
    actionObj[act] = value
    return this
  }

  this.getActions = () => {
    return actionObj
  }

  this.getOptions = () => {
    return optionsObj
  }

  // this.send = function (action, ...args) {
  //
  // }

  // function sendReq (data, args) {
  //   return new Promise((resolve, /*reject*/) => {
  //     let sender = require('https'),
  //       reqOpts = options.httpsOpts
  //     if (optionsObj.protocol === 'http') {
  //       sender = require('http')
  //       reqOpts = options.httpOpts
  //     }
  //
  //     if(args.option !== undefined && optionsObj.hasOwnProperty(args.option)) {
  //       reqOpts = args.options
  //     }
  //
  //     let req = sender.request(reqOpts, (res) => {
  //       let response = ''
  //
  //       res.on('data', (chunk) => {
  //         response += chunk
  //       })
  //
  //       res.on('end', () => {
  //         resolve(response)
  //       })
  //     })
  //
  //     req.write(querystring.stringify(data))
  //     req.end()
  //   })
  // }
}

const globalInstance = new Instance()

module.exports = function (...args) {
  if (!this) {
    return globalInstance
  }
  return new Instance(...args)
}
