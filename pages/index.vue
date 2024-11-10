<script setup lang="ts">
const { data: navigation } = await useAsyncData("navigation", () =>
  queryContent("/posts")
    .only(["_path", "title", "created_at"])
    .sort({ created_at: -1 })
    .find()
);
</script>

<template>
  <ContentDoc />
  <h2><a href="#posts">Posts</a></h2>
  <div v-for="post in navigation" :key="post._path">
    <PostLink :post="post" class="post-link" />
  </div>
</template>

<style lang="scss" scoped>
.post-link {
  margin-bottom: 2rem;
}
</style>
