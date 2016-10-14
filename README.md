# <%= appName %>

<%= description %>

## Server 

### generate dll file

At first, generate dll file. You need to exec the following command.

```
gulp dll
```

Note: If it appear an error when you exec `gulp dll`. 
You need to delete the following codes in file 'webpack.config.dev.babel.js' at first.

```
new webpack.DllReferencePlugin({
  context: __dirname,
  /**
   * 在这里引入 manifest 文件
   */
  manifest: require('./client/dist/vendor-manifest.json')
}),
```

When you exec `gulp dll`, you need to add the above code to the file 'webpack.config.dev.babel.js';


### start server

```
gulp server
```

## Build

```
gulp build
```

## Start server after building

```
gulp connect
```

## Issue

https://github.com/xxx/<%= appName %>/issues

## Change Log

Please view [here](./CHANGELOG.md)

