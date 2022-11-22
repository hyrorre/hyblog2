---
title: JavaScriptで電卓つくってみた
date: 2018-05-25
categories:
  - Develop
tags:
  - HTML
  - JavaScript
---

生のHTML, JavaScriptを使って電卓を作ってみました。

<div style="width: 100%; overflow: scroll">
  <iframe src="/content/javascriptcalc.html" style="width: 350px; height: 350px;"></iframe>
</div>

<!--more-->

## ソースコード
```html
<div id="calc">
  <p id="value">0</p>
  <button onclick="del()">&lt;</button>
  <button onclick="c()">C</button>
  <button onclick="ac()">AC</button>
  <button onclick="push('/')">/</button>
  <br />
  <button onclick="push('7')">7</button>
  <button onclick="push('8')">8</button>
  <button onclick="push('9')">9</button>
  <button onclick="push('*')">*</button>
  <br />
  <button onclick="push('4')">4</button>
  <button onclick="push('5')">5</button>
  <button onclick="push('6')">6</button>
  <button onclick="push('-')">-</button>
  <br />
  <button onclick="push('1')">1</button>
  <button onclick="push('2')">2</button>
  <button onclick="push('3')">3</button>
  <button onclick="push('+')">+</button>
  <br />
  <button onclick="push('0')">0</button>
  <button onclick="push('00')">00</button>
  <button onclick="push('.')">.</button>
  <button onclick="eq()">=</button>
</div>
<script>
  var value = 0
  var symbol = ''
  var buf = ''
  var do_clear = false

  function push(str) {
    if (do_clear) {
      symbol = buf = ''
      do_clear = false
    }
    if (str === '+' || str === '-' || str === '*' || str === '/') {
      if (buf) eq(true)
      symbol = str
    } else {
      buf += str
      document.getElementById('value').innerText = buf
    }
  }

  function eq(do_clear_immediately = false) {
    if (symbol === '') {
      value = Number(buf)
    } else if (symbol === '+') {
      value += Number(buf)
    } else if (symbol === '-') {
      value -= Number(buf)
    } else if (symbol === '*') {
      value *= Number(buf)
    } else if (symbol === '/') {
      value /= Number(buf)
    }
    if (do_clear_immediately) symbol = buf = ''
    else do_clear = true
    document.getElementById('value').innerText = String(value)
  }

  function del() {
    if (do_clear) {
      symbol = ''
      buf = String(value)
      do_clear = false
    }
    buf = buf.substr(0, buf.length - 1)
    document.getElementById('value').innerText = buf ? buf : 0
  }

  function c() {
    buf = ''
    document.getElementById('value').innerText = '0'
  }

  function ac() {
    value = 0
    symbol = buf = ''
    document.getElementById('value').innerText = '0'
  }
</script>
<style>
  #value {
    font-size: 32px;
  }
  #calc button {
    width: 64px;
    height: 32px;
    margin: 2px;
  }
  #calc {
    border: 1px solid black;
    width: 320px;
    padding: 10px;
  }
</style>
```
