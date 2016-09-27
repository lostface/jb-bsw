const webpack = require('webpack');
const path = require('path');
const outdir = './dist';

module.exports = {
  entry: {
    app: './app/main.ts',
    libs: [
      // '@angular/common',
      // '@angular/compiler',
      '@angular/core',
      '@angular/forms',
      '@angular/http',
      '@angular/platform-browser',
      '@angular/platform-browser-dynamic',
      'reflect-metadata',
      // 'rxjs',
      'zone.js',
      'ramda'
    ],
  },

  output: {
    filename: path.join(outdir, 'app.bundle.js'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'libs',
      filename: path.join(outdir, 'libs.bundle.js'),
      // with more entries, this ensures that no other module goes into the
      //  vendor chunk
      minChunks: Infinity,
    }),
  ],

  devtool: 'source-map',

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },

  module: {
    loaders: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
      { test: /\.tsx?$/, loader: 'ts-loader' },
      { test: /\.html$/, loader: 'raw' },
    ],

    preLoaders: [
      { test: /\.js$/, loader: 'source-map-loader' }
    ]
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  // externals: {
  // },
};
