var useDefaultConfig = require('@ionic/app-scripts/config/webpack.config.js');

var optimizedProdLoaders = [{
    test: /\.json$/,
    loader: 'json-loader'
  },
  {
    test: /\.js$/,
    loader: [{
        loader: process.env.IONIC_CACHE_LOADER
      },
      {
        loader: '@angular-devkit/build-optimizer/webpack-loader',
        options: {
          sourceMap: true
        }
      },
    ]
  },
  {
    test: /\.ts$/,
    loader: [{
        loader: process.env.IONIC_CACHE_LOADER
      },
      {
        loader: '@angular-devkit/build-optimizer/webpack-loader',
        options: {
          sourceMap: true
        }
      },
      {
        loader: process.env.IONIC_WEBPACK_LOADER
      }
    ]
  },
  {
    test: /\.tsx?$/,
    loader: "ts-loader"
  }
];

var devLoaders = [{
    test: /\.json$/,
    loader: 'json-loader'
  },
  {
    test: /\.ts$/,
    loader: process.env.IONIC_WEBPACK_LOADER
  },
  {
    test: /\.tsx?$/,
    loader: "ts-loader"
  }
];

function getProdLoaders() {
  if (process.env.IONIC_OPTIMIZE_JS === 'true') {
    return optimizedProdLoaders;
  }
  return devLoaders;
}

useDefaultConfig.prod.resolve = {
  extensions: ['.ts', '.js', '.tsx', '.json']
}

useDefaultConfig.prod.module.loaders = getProdLoaders();

useDefaultConfig.dev.resolve = {
  extensions: ['.ts', '.js', '.tsx', '.json']
}

useDefaultConfig.dev.module.loaders = devLoaders;

module.exports = function () {
  return useDefaultConfig;
};
