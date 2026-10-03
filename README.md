# 木及简历

一款用 `Markdown`就能写出好看简历的在线工具，告别使用 word 繁杂的编写方式。

我们希望帮助你 **「以最简单的方式来写好简历，只需专注于自身的内容而无需关注排版」**

立即体验 👉  https://www.mujicv.com

# 功能特点

- 📝 Markdown书写方式，简单易上手

- 🚀 实时预览简历，并通过浏览器打印另存为 PDF

- ✨  **智能一页**，自动识别，完美排版

- 🌟 一份内容，轻松应用任意简历模板

- 🎏 海量「极简」主题与模板

- 💾 简历内容保存在当前浏览器的本地存储中

- 🎯 可视化定位，「内容 - 视图」双向可寻迹

- 📎 证件照位置及大小可修改，打破传统模板约束

- 🥁 支持导入导出Markdown，随时随地可编写

# 模板展示

![image](https://user-images.githubusercontent.com/12070073/134211577-ce58db6c-bfde-4af9-b73a-a5948e98481a.png)

![image](https://user-images.githubusercontent.com/12070073/134211433-72dfbd88-ebc2-4fb1-bb35-675a624dbfce.png)

![image](https://user-images.githubusercontent.com/12070073/134211967-9457fbb0-67b2-4f5d-b3b1-41cbc9b74532.png)


## 开始使用

### Docker 使用

从当前源码构建并运行镜像（不要改用仓库外的旧镜像）：

```sh
docker build -t muji-resume-local .
docker run --rm -p 3000:80 muji-resume-local
```

打开 [`http://localhost:3000/`](http://localhost:3000/)

### 源码使用

项目使用旧版 React 与 Webpack 4，建议使用 **Node.js 14** 和 **Yarn Classic 1.22**：

```sh
corepack enable
corepack prepare yarn@1.22.22 --activate
yarn install --frozen-lockfile
yarn start
```

打开 [`http://localhost:3000/`](http://localhost:3000/)

生产构建：

```sh
yarn build
```

### 导出 PDF 与隐私

点击“导出 PDF”后会打开浏览器的打印对话框，请选择“另存为 PDF”。简历内容在本地排版，不会发送到 PDF 生成服务。浏览器打印设置（纸张、边距、背景图形）会影响最终效果。

简历草稿保存在当前浏览器的 `localStorage` 中；清理浏览器站点数据会删除草稿。模板缩略图、字体等原项目资源仍可能从 README 中引用的外部站点加载。

## 贡献

从本仓库切出新的分支，直接提交 PR 即可，Commit 规范遵从 [Angular 规范](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#heading=h.greljkmo14y0)

## 交流

微信群（ 作者微信: qiufengblue ）

<img src="https://user-images.githubusercontent.com/12070073/134554185-e650e9bd-cde1-4182-9fbe-1ad3f60ef6e1.png" width="300" />


qq群

<img src="https://s3.qiufeng.blue/muji/qq-group.png" width="300" />


