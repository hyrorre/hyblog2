---
title: WSL2 上のコンテナを Windows 上の Docker Desktop で管理する方法
cover: https://hyrorre.com/wp-content/uploads/2021/11/image-4.png
date: 2021-11-05
categories:
  - Development
tags:
  - Windows
  - Linux
  - Docker
---

WSL2にあるdocker-compose.ymlを使用してbuildし、そのコンテナをDocker Desktopで管理するやり方です。
<img src="https://hyrorre.com/wp-content/uploads/2021/11/image-4.png" class="shadow">

<!--more-->

Dockerには全く詳しくないので表現等は間違っているかもしれないことをご了承ください。

## 前提

WSL2上にdocker-compose.ymlを含むプロジェクトが準備できている状態からの説明になります。

特に設定を行っていない状態だと、WSL2内でdocker-compose buildを行うとエラーが表示されます。

(スクショを撮り忘れたのですが、Docker DesktopのSettingsでWSL INTEGRATIONをactivateしろって書いてました)

## Docker Desktopの設定

エラーメッセージに従い、WSL INTEGRATIONを有効にします。

Settings→Resources→WSL INTEGRATIONの画面で表示されるチェックボックスとトグルスイッチをONにします。

![](https://hyrorre.com/wp-content/uploads/2021/11/image.png)

## 再度WSL2でコマンドを叩く

![](https://hyrorre.com/wp-content/uploads/2021/11/image-1.png)

docker-compose build が動きました。

## Docker Desktopで管理できる

![](https://hyrorre.com/wp-content/uploads/2021/11/image-3.png)

あとはよしなに。