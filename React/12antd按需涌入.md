**按需引入css**
安装customize-cra、babel-plugin-import和[react](https://so.csdn.net/so/search?q=react&spm=1001.2101.3001.7020)-app-rewired

```js
yarn add  react-app-rewired  customize-cra babel-plugin-import
```

在package.json文件中的scripts配置项修改为

```js
 "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject"
  },

```

在项目应用的根目录下创建config-overrides.js文件，代码如下：

```js
const { override, fixBabelImports } = require('customize-cra');
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
);

```

不需要在App.css中全局引入

```js
@import '~antd/dist/antd.css';

```

**自定义主题**

安装less less-loader

```js
yarn add less less-loader

```

在项目应用的根目录下创建config-overrides.js文件，代码如下：

```js
const { override, fixBabelImports, addLessLoader } = require('customize-cra');
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
            modifyVars: { '@primary-color': '#1DA57A' }
        }
    })
);

```

