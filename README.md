# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

这是我第一个尝试使用Remix开发的应用。所以，README.md可能会包含一些Remix基本的用法和概念等等这些在官方文档上也能找到的可能比较多余的内容，我只是习惯性的记录下自己将要学习的新东西，如果有人不喜欢，那么跳过就好了。

## let's go

```sh
# 创建新项目
npx create-remix@latest
```
选择如下：

![](imgs/2022-01-02-21-58-52.png)

## 目录结构

```sh
.
├── README.md
├── app
│   ├── entry.client.tsx
│   ├── entry.server.tsx
│   ├── root.tsx
│   └── routes
│       └── index.tsx
├── package-lock.json
├── package.json
├── public
│   └── favicon.ico
├── remix.config.js
├── remix.env.d.ts
└── tsconfig.json
```

主要的目录说明：

- `app/` 存放Remix 应用的代码，同等于 `vue-cli / create-react-app` 生成项目里面的 `src/` 目录
- `app/entry.client.tsx` 我们看下里边的代码：
  
  ```tsx
  import { hydrate } from "react-dom";
  import { RemixBrowser } from "remix";

  hydrate(<RemixBrowser />, document);
  ``` 
  - hydrate 是 React 中提供在初次渲染的时候，去复用原本已经存在的 DOM 节点，减少重新生成节点以及删除原本 DOM 节点的开销，来加速初次渲染的功能。简单来说就是服务端渲染的时候，服务端返回字符串，浏览器根据这些字符串进行 React 组件的创建，完成初始化的工作，这个过程叫“混合渲染”
  - 当应用在浏览器加载完成的时候会运行这个文件里面的 JavaScript 代码，Remix 用这份文件来 hydrate React 组件。
  
- app/entry.server.tsx 当一个请求发送到服务器的时候，这个文件里面的 JavaScript 代码会第一时间运行。Remix 会帮你加载所有必要的数据，而我们将会负责将响应的数据发送回浏览器
- app/root.tsx 这份文件是应用的根组件，就像 Vue 的 App.vue ，网页的 html 标签将会在这里渲染
- app/routes/ 这个路径下面将会存放所有和路由相关的模块文件，Remix 会根据这个目录下面的文件名字来创建对应的 URL 路由。
- public/ 这里和平常一样存放你项目里的静态资源，例如图片，字体等等
- remix.config.js Remix 应用对应的配置写在这个文件里面

尝试打包下文件

```sh
npm run build
```

多出几个目录：

- `.cache/` 这个文件夹里面的内容是 Remix 内部使用的东西
- `build/` 是服务端的代码
- `public/build/` 是客户端的代码

这几个目录路劲在创建项目的时候已经被添加进`.gitignore`文件中

运行打包后的应用：

```sh
npm run start
```

![](imgs/2022-01-02-22-21-56.png)

打开页面之后给我们推荐了三个链接，在我们需要的时候可以参考下

