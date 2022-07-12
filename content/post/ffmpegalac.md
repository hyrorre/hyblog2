---
title: 【ffmpeg】フォルダ内の音楽すべてを ALAC に変換するワンライナー【Mac/Linux】
date: 2021-12-20
categories:
  - PC
tags:
  - Mac
  - Linux
---

```bash:ターミナルで実行
# すべてのファイルを変換する場合
find . -type f -exec ffmpeg -i {} -vn -acodec alac {}.m4a \;

# 拡張子を指定する場合
find . -name "*.wav" -exec ffmpeg -i {} -vn -acodec alac {}.m4a \;
```
