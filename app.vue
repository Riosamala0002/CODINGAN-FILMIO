<template>
  <div class="npage">
    <NuxtPage />
  </div>
</template>

<style scoped>
.npage {
  overflow-x: hidden;
  overflow-y: auto; /* Atur sesuai kebutuhan jika ada konten yang memerlukan scroll */
  background: linear-gradient(to bottom, #D8DBEA, #7A85B8 50%);
  min-height: 100vh; /* Menjamin setidaknya tinggi halaman sesuai dengan viewport */
  margin: 0; /* Menghilangkan margin bawaan dari elemen body */
  padding: 0; /* Menghilangkan padding bawaan dari elemen body */
}
</style>
