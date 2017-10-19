'use strict'
const fs = require('fs'),
  path = require('path')

let data = ''

process.stdin.resume()
process.stdin.setEncoding('utf8')

process.stdin.on('data', function(chunk) {
  data += chunk + '\n'
})

process.stdin.on('end', function() {
  const template = fs.readFileSync(path.resolve('.', 'README_TEMPLATE.md'), 'utf-8')
  fs.writeFileSync(path.resolve('.', 'README.md'), template.replace('{TEST_COVERAGE}', data), 'utf-8')
  process.exit()
})
