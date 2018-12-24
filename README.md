# Boilerplate Todo -  React + TypeScript

Boilerplate básico de um Todo feito com React e TypeScript.

## Instalação

Usando a linha comando do OS - Windows - Mac - Linux

Clone este repositório:
```js
git clone https://github.com/eduardokeneth/todo-typescript-react-webpack
```

Execute um npm/yarn install para instalar as dependências do package.json
```js
yarn install
```

Rode npm/yarn run start:dev para rodar
```js
yarn run start:dev
```

### Configuração Webpack

```js
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: "css-loader"
                        },
                        "sass-loader"
                    ]
                })
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
        new ExtractTextPlugin("style.css")
    ],
    devtool: "source-map",
    resolve: {
        extensions: [".js", ".ts", ".tsx"]
    }
}

```

## Compatibilidade
Versões iguais ou superiores

Nodejs : v10.13.0 &nbsp;&nbsp;/&nbsp;&nbsp; NPM : 6.5.0
Webpack : ^4.28.2 &nbsp;&nbsp;/&nbsp;&nbsp; Webpack-dev-server : ^3.1.14
Typescript : ^3.2.2 &nbsp;&nbsp;/&nbsp;&nbsp;

License
--------

[MIT License](https://github.com/eduardokeneth/todo-typescript-react-webpack/blob/master/LICENSE.md) © Eduardo Keneth
