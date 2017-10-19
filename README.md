# ZHelper
A collection of libraries that I use in a lot of projects, feel free to modify them for your use.

I realised that in a lot of projects I do, there are a few things that I almost always write from scratch, that's why I decided to create this.

This module is under the MIT license - see the LICENSE file.

To test the module, run
```js
npm test
```

# Installation
To install run
```sh
npm i --save-dev z-helper
```

# Usage
To require everything, use
```js
const zHelper = require('z-helper')
```

## Data Store
There are two ways to use my data store, you can use it as a local store that will only be persistent in the file it is initialised in.
```js
const dataStore = require('z-helper').dataStore
```

Or you can use it as a global data store across your whole application.
```js
const dataStore = new require('z-helper').dataStore.Instance()
```

You can also use both throughout the app if you would like.

The following functions are exposed and work the same for local and global data store.

### set
```js
dataStore.set('nameOfValueToStore', {'object': 'containing data'})
```

The set function can store anyhting you can think of from promises to functions to objects.

The set function returns the dataStore instance so you can chain functions.
```js
dataStore.set('nameOfValueToStore', {'object': 'containing data'})
  .get('nameOfValueOfValueToStore')
```

### get
```js
console.dir(dataStore.get('nameOfValueToGet'))
```

The get function returns whatever was stored under the key given to it, if that key does not exist, it simply returns null.

## Google Analytics
Google analytics is a work in progress

# Test coverage and eslint


  Data Store
    has property
      ✓ Instance
      ✓ get
      ✓ set
    Instance
      has property
        ✓ get
        ✓ set
      stores
        ✓ an object
        ✓ an arrow function
        ✓ a function
        ✓ a string
        ✓ an integer
        ✓ a boolean
    global store
      has property
        ✓ get
        ✓ set
      stores
        ✓ an object
        ✓ an arrow function
        ✓ a function
        ✓ a string
        ✓ an integer
        ✓ a boolean

  Google Analytics
    has a global instance
      ✓ that has the setOption property
      ✓ that has the setAction property
      ✓ that has the getOptions property
      ✓ that has the getActions property
      and add a new
        ✓ option
        ✓ action
    can create a local instance
      ✓ that has the setOption property
      ✓ that has the setAction property
      ✓ that has the getOptions property
      ✓ that has the getActions property
      and add a new
        ✓ option
        ✓ action


  31 passing (11ms)

---------------------|----------|----------|----------|----------|----------------|
File                 |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
---------------------|----------|----------|----------|----------|----------------|
All files            |    88.37 |       75 |    81.82 |    88.37 |                |
 ZHelper             |      100 |      100 |      100 |      100 |                |
  main.js            |      100 |      100 |      100 |      100 |                |
 ZHelper/src         |     88.1 |       75 |    81.82 |     88.1 |                |
  dataStore.js       |      100 |       50 |      100 |      100 |              7 |
  googleAnalytics.js |    84.38 |       80 |       75 |    84.38 | 29,35,40,41,43 |
---------------------|----------|----------|----------|----------|----------------|
