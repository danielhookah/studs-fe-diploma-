const requireModule = require.context('.', false, /\.js$/) // Get js files inside modules folder
const modules = {}

requireModule.keys().forEach((fileName) => {
  if (fileName === './index.js') {
    // return
  }

  // modules[fileName] = requireModule(fileName).default
})

export default modules
