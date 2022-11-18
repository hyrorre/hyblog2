<template>
  <div class="py-4">
    <h1>Contact</h1>
    <p class="mt-3">お問い合わせ等があれば、こちらのフォームへ必要事項を記入し、送信してください。</p>
    <form @submit="submit">
      <div class="mb-3">
        <label for="name" class="form-label">名前またはニックネーム</label>
        <input class="form-control" id="name" />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">メールアドレス</label>
        <input type="email" class="form-control" id="email" />
      </div>
      <div class="mb-3">
        <label for="subject" class="form-label">件名</label>
        <input class="form-control" id="subject" />
      </div>
      <div class="mb-3">
        <label for="body" class="form-label">メッセージ本文</label>
        <textarea class="form-control" id="body" style="height: 120px"></textarea>
      </div>
      <button class="btn btn-primary" type="submit">送信</button>
    </form>
  </div>
</template>

<script setup lang="ts">
const submit = () => {
  alert('この機能はテスト中です。')
}
</script>
