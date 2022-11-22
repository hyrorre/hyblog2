<template>
  <table class="table">
    <thead>
      <tr>
        <th>画面サイズ</th>
        <th>16 : 9</th>
        <th>16 : 10</th>
        <th>4 : 3</th>
        <th>3 : 2</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="inch of [...Array(96)].map((_, i) => i + 5)">
        <td>{{ inch }}インチ</td>
        <td>{{ inchToWidth(inch, 16, 9) + ' x ' + inchToHeight(inch, 16, 9) }}</td>
        <td>{{ inchToWidth(inch, 16, 10) + ' x ' + inchToHeight(inch, 16, 10) }}</td>
        <td>{{ inchToWidth(inch, 4, 3) + ' x ' + inchToHeight(inch, 4, 3) }}</td>
        <td>{{ inchToWidth(inch, 3, 2) + ' x ' + inchToHeight(inch, 3, 2) }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
const INCH = 25.4 // (mm)
const inchToWidth = (inch: number, w: number, h: number) => Math.round((inch * INCH * w) / Math.sqrt(w ** 2 + h ** 2))
const inchToHeight = (inch: number, w: number, h: number) => Math.round((inch * INCH * h) / Math.sqrt(w ** 2 + h ** 2))
</script>
