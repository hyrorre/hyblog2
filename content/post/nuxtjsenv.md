---
title: 【Nuxt.js】環境変数(.envファイル)を切り替える方法
date: 2021-10-17
categories:
  - Develop
tags:
  - JavaScript
  - NodeJS
  - NuxtJS
  - Windows
  - Linux
---

開発環境と本番環境でAPIのURLを切り替えたいと思ったので調べました。  
他の記事で紹介されている方法よりもシンプルに実現できたと思います。  
<img src="https://old.hyrorre.com/wp-content/uploads/2021/10/1_GzDBs0lKGg35RRK50dTNtQ_crop.jpg" class="shadow">

<!--more-->

## 環境
- OS : Windows
- ターミナル : PowerShell
- Node.js : 6.14.15
- Nuxt.js : 2.15.8
- SPAモード
- @nuxtjs/axios : 5.13.6

OSがWindowsになっていますが、Linuxでも動くように組めているはずです。

## パッケージのインストール
最近のNuxt.jsはdotenvが標準で入っていますが、  
dotenv-cliが入っていないのでインストールします。

```shell
npm install --save-dev dotenv-cli
 
# 省略形
npm i -D dotenv-cli
```

バージョンは4.0.0でした。

## .envファイルの作成
以下のようなフォルダ構成で作成してみました。

- ProjectRoot
  - env
    - dev.env
    - prod.env
  - package.json
  - etc…

```shell
# dev.env
API_URL='http://localhost:7071/api'
 
# prod.env
API_URL='https://example.com/api'
```

余談ですが.envファイルは#を使えば1行コメントできるみたいですね。

## package.jsonファイルの編集
「npm run dev」や「npm run build」などを打った時に実行されるスクリプトを編集します。

dotenv -e で参照される.envファイルが切り替わるようにします。

```json
"scripts": {
  "dev": "dotenv -e env/dev.env nuxt",
  "dev:prod": "dotenv -e env/prod.env nuxt",
  "build": "dotenv -e env/prod.env nuxt build",
  "start": "nuxt start",
  "generate": "dotenv -e env/prod.env nuxt generate",
  "lint:js": "eslint --ext \".js,.vue\" --ignore-path .gitignore .",
  "lint": "npm run lint:js",
  "test": "jest"
},
```

## Nuxt.config.jsファイルでaxiosのconfig編集
デフォルトで設定したURLがaxiosで使われるようにするため、Nuxt.config.jsファイルを編集しようとしたのですが、  
特に設定をしなかった場合はaxiosが環境変数API_URLを読み込んでくれるようですので、今回ファイルの編集は不要でした。
