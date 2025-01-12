import { defineConfig } from 'father';

// 文档：https://github.com/umijs/father/blob/master/docs/config.md
export default defineConfig({
  extraBabelPlugins: [ // 指定要额外挂载的 babel 插件
    ['babel-plugin-import', { libraryName: 'antd', style: true }, 'antd'],
    [
      'babel-plugin-import',
      { libraryName: '@ant-design/icons', style: true },
      '@ant-design/icons',
    ],
    [
      'babel-plugin-import',
      { libraryName: '@ant-design/pro-components', style: true },
      '@ant-design/pro-components',
    ],
  ],
  esm: { // 将源码转换为 ESModule  产物
    output: 'esm', // 输出目录
  },
  cjs: { // 将源码转换为 CommonJS 产物
    output: 'cjs', // 输出目录
  },
  umd: { // 将源码打包为 UMD 产物
    output: 'lib', // 输出目录
    sourcemap: true, // 为 JavaScript 构建产物生成 sourcemap 文件
    externals: { // 源码打包过程中需要处理的外部依赖
      react: 'React',
      'react-dom': 'ReactDOM',
    },
  },
});
