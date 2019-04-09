const path = require("path");
const webpack = require("webpack");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const bundleOutputDir = "./wwwroot/dist";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = env => {
  const isDevBuild = !(env && env.prod);

  return [
    {
      mode: "production",
      stats: { modules: false },
      context: __dirname,
      resolve: {
        extensions: [".js", ".ts"],
        alias: {
          vue$: "vue/dist/vue.esm.js"
        }
      },
      entry: { main: "./ClientApp/boot.ts" },
      module: {
        rules: [
          {
            test: /\.vue\.html$/,
            include: /ClientApp/,
            loader: "vue-loader",
            options: {
              loaders: { js: "ts-loader?silent=true" }
            }
          },
          {
            test: /\.ts$/,
            include: /ClientApp/,
            use: "ts-loader?silent=true"
          },
          {
            test: /\.css$/,
            use: isDevBuild
              ? ["style-loader", "css-loader"]
              : [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    // you can specify a publicPath here
                    // by default it uses publicPath in webpackOptions.output
                    publicPath: "../",
                    hmr: process.env.NODE_ENV === "development"
                  }
                },
                "css-loader"
              ]
          },
          { test: /\.(png|jpg|jpeg|gif|svg)$/, use: "url-loader?limit=25000" }
        ]
      },
      output: {
        path: path.join(__dirname, bundleOutputDir),
        filename: "[name].js",
        publicPath: "dist/"
      },
      plugins: [
        new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
          filename: "[name].css",
          chunkFilename: "[id].css"
        }),
        new VueLoaderPlugin(),
        new ForkTsCheckerWebpackPlugin(),
        new webpack.DefinePlugin({
          "process.env": {
            NODE_ENV: JSON.stringify(isDevBuild ? "development" : "production")
          }
        }),
        new webpack.DllReferencePlugin({
          context: __dirname,
          manifest: require("./wwwroot/dist/vendor-manifest.json")
        })
      ].concat(
        isDevBuild
          ? [
              // Plugins that apply in development builds only
              new webpack.SourceMapDevToolPlugin({
                filename: "[file].map", // Remove this line if you prefer inline source maps
                moduleFilenameTemplate: path.relative(
                  bundleOutputDir,
                  "[resourcePath]"
                ) // Point sourcemap entries to the original file locations on disk
              })
            ]
          : [
              // Plugins that apply in production builds only
              new webpack.optimize.UglifyJsPlugin(),
              new ExtractTextPlugin("site.css")
            ]
      )
    }
  ];
};
