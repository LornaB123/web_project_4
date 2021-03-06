  
const presets = [
  ['@babel/env', { // preset you want to use
    targets: { // browser versions in which we want our code supported
      edge: '17',
      ie: '11',
      firefox: '50',
      chrome: '64',
      safari: '11.1'
    },

    // use polyfills for the browsers specified in the above targets option
        // Babel uses polyfills from the core-js library
    useBuiltIns: "entry"
  }]
];

module.exports = { presets }; 

// module.exports = {
//   presets: [
//     ['@babel/env', { // preset you want to use
//       targets: { // browser versions in which we want our code supported
//         edge: '17',
//         ie: '11',
//         firefox: '50',
//         chrome: '64',
//         safari: '11.1'
//       },
//       // use polyfills for the browsers specified in the above targets option
//       // Babel uses polyfills from the core-js library
//       useBuiltIns: "usage"
//     }]
//   ],
//   plugins: [
//     "@babel/plugin-syntax-class-properties",
//     "@babel/plugin-proposal-class-properties",
//     "@babel/proposal-object-rest-spread",
//   ],
// }

//  module.exports = {
//    plugins: ["@babel/plugin-syntax-class-properties", "@babel/plugin-proposal-class-properties", "@babel/proposal-object-rest-spread"],
//  };

// const presets = [
//   ['@babel/env', { // preset you want to use
//     targets: { // browser versions in which we want our code supported
//       edge: '17',
//       ie: '11',
//       firefox: '50',
//       chrome: '64',
//       safari: '11.1'
//     },
//     // use polyfills for the browsers specified in the above targets option
//         // Babel uses polyfills from the core-js library
//     useBuiltIns: "entry"
//   }]
// ];
// module.exports = { presets }; 