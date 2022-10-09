# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

# vue3-eword-template

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### 配置.editorconfig

用于为不同 IDE 编辑器上处理同一项目的多个开发人员维护一致的编码风格，配置.editorconfig。vscode 需要安装 <u>EditorConfig for VS Code</u> 插件。

### 配置.prettierrc

1.在.prettierrc 文件中配置格式化规则，同时配置.prettierignore 文件，指定要忽略格式化的文件。vscode 需要安装 <u>Prettier - Code formatter</u> 插件。

2.如果保存发现格式化无效，右键选择格式化文档重新格式化。

3.用命令格式化整个项目

```
npm run prettier
```

### 项目目录

```

    |-- src
        |-- App.vue
        |-- main.js
        |-- assets
        |-- components  公共组件
        |-- global      全局注册的方法和组件
        |-- icons       svg图标
        |-- router      路由
        |-- service     axios的二次封装
        |-- store       vuex
        |-- utils       工具类
        |-- views
            |-- login
            |-- main    项目的主页面
            |-- not-found 缺省页
```
