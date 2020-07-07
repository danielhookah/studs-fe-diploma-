const requireModule = require.context('.', false, /\.js$/) // Get js files inside modules folder
const modules = {}

requireModule.keys().forEach((fileName) => {
  if (fileName === './index.js') {
    return
  }

  modules[fileName] = requireModule(fileName).default
})

export default modules

// const requireModule = require.context('.', false,  /\.store\.js$/);
// const modules = {};
//
// requireModule.keys().forEach(filename => {
//
//   // create the module name from fileName
//   // remove the store.js extension and capitalize
//   const moduleName = filename
//     .replace(/(\.\/|\.store\.js)/g, '')
//     .replace(/^\w/, c => c.toUpperCase())
//
//   modules[moduleName] = requireModule(filename).default || requireModule(filename);
// });
//
// export default modules;
