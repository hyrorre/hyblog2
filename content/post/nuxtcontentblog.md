---
title: Nuxt Content (Nuxt3版)を使ってブログを作ってみた
cover: https://old.hyrorre.com/wp-content/uploads/2018/07/IMG_0038-e1531991675301.jpg
date: 2022-12-05
categories:
  - Develop
tags:
  - JavaScript
  - NuxtJS
  - NodeJS
---

Nuxt ContentのNuxt3対応版がリリースされたので、WordPressで作っていたブログをNuxtで書き直してみました。

<img src="/img/nuxtcontent.svg" alt="Nuxt Content" style="height: 40px" class="my-4" />

<!--more-->

## Nuxt Contentとは

[Nuxt Content](https://content.nuxtjs.org/)とは、NuxtにCMS関係の機能を追加するモジュールです。  
以下のような機能があり、これらを使って爆速で爆速のブログシステムを作ることができます。

- Nuxt Contentの機能・特徴
  - Markdown等のコンテンツをGitで管理
  - MarkdownをHTMLに変換
  - シンタックスハイライト
  - Markdown内でVueコンポーネント利用可能
  - コンテンツ(Markdown/json/csv等)内のデータをQueryBuilderAPIを使って取得可能
  - 目次の生成
- Nuxtの機能
  - 開発中の爆速ホットリロード
  - SSGによる爆速レスポンス
  - ファイルベースのルーティング機能 (Markdown等のパスもルーティングに利用できる)

## プロジェクト作成

通常通りNuxtのプロジェクトを作り、そこにNuxt Contentをインストールしていきます。

```shell
npx nuxi init <project-name>
cd <project-name>
npm install --save-dev @nuxt/content
```

nuxt.config.ts
```typescript
export default defineNuxtConfig({
  modules: [
    '@nuxt/content'
  ],
  content: {
    // https://content.nuxtjs.org/api/configuration
  }
})
```

ファイルベースルーティングを有効化するため、app.vueも修正します。
```html
<template>
  <NuxtPage></NuxtPage>
</template>
```

開発サーバー起動 (http://localhost:3000)
```shell
npm run dev
```

(僕は試してませんが、プロジェクト作成時に一気にNuxt Contentをインストールすることもできるみたいです)
```shell
npx nuxi init <project-name> -t content
```

## Markdownファイルの追加

プロジェクト直下にcontentフォルダを追加し、そこにMarkdownファイルを作成します。

このブログでは、https://hyrorre.com/post/(記事ID) が記事のURLになるので、  
それに合わせて、content/post/(記事ID).md というファイル名で作成します。

```markdown
---
title: Nuxt(v3)とNuxt Content(v2)を使ってブログを作ってみた
date: 2022-12-05
categories:
  - Develop
tags:
  - JavaScript
  - NuxtJS
---

Nuxt ContentのNuxt3対応版がリリースされたので、WordPressで作っていたブログをNuxtで書き直してみました。

## Nuxt Contentとは

・・・・・・

```

## 記事画面の作成

pages/post/[id].vue

↓簡単バージョン
```html
<template>
  <div>
    <ContentDoc />
  </div>
</template>
```

↓カスタマイズしやすい形
```html
<template>
  <div>
    <ContentDoc v-slot="{ doc: page }">
      <h1>{{ page.title }}</h1>
      <ContentRenderer :key="page._id" :value="page"></ContentRenderer>
    </ContentDoc>
  </div>
</template>
```

## 記事一覧画面の作成

pages/index.vue
```html
<template>
  <div>
    <ContentList v-slot="{ list }" :query="{ path: '/post', sort: { date: -1 } }">
      <article v-for="page in list" :key="page._path">
        <nuxt-link :to="page._path">
          <h2>{{ page.title }}</h2>
        </nuxt-link>
        <ContentDoc :path="page._path" excerpt :head="false"></ContentDoc>
      </article>
    </ContentList>
  </div>
</template>
```

## その他実装作業

ここまでのコピペで記事の表示と画面遷移が実装できたと思います。

後は記事以外の部分を普通にNuxtで作っていったり、CSSでレイアウトを整える作業に入っていきます。

このブログではBootStrapを使ってレイアウトを作っています。

[https://getbootstrap.jp/]

このブログのソースコードはGitHubで公開しているので、参考にしたい部分があれば覗いてみてください。

[https://github.com/hyrorre/hyblog2]

## SSG (Static Site Generation) とデプロイ

サイトとして公開するためには、SSGでピュアなHTML/JS/CSSを出力し、サーバーやホスティングサービスにデプロイする必要があります。

SSG
```shell
npm run generate
```

デプロイの方法はデプロイ先によって違うので、ここでは解説しません。

僕はWordPressを動かしていたロリポップのレンタルサーバーにデプロイしていますが、
Nuxtのデプロイ先としてはVercelがおすすめです。

このブログくらいの規模なら無料で利用でき、機能的にも優れていると思います。

[https://vercel.com/]

## 残っている課題

ブログとして公開し始めたものの、解決できていない問題も残っています。

解決できたらまた記事にしようと思います。

### 解決/実装済み
- 目次作成
- カテゴリとタグの検索機能

### 未解決
- Amazon等のアフィリエイトリンクが貼れない
  - インラインscriptタグ(アフィリエイトリンクでよく使われる)とVueの相性が悪い
  - [postscribe](https://www.npmjs.com/package/postscribe)を使えばいけるらしい？
- 画像の配信を最適化
  - 画像を圧縮せずに配信しているので、読み込みが遅い
  - Nuxt Imageを使ってみる
- コメントフォームを追加したい
- 記事一覧のページング (見た目だけで機能していない)
  - まだ記事の数が少ないので優先度低
