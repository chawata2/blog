<script setup lang="ts">
import dayjs from "dayjs";

defineProps<{ post: { _path?: string; title?: string; created_at: string } }>();
</script>
<template>
  <div class="post-content">
    <div class="post-published-date">
      {{ dayjs(post.created_at).format("YYYY-MM-DD") }}
    </div>
    <nuxt-link :to="post._path" class="post-title">{{ post.title }}</nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
.post-content {
  border-bottom: 1px solid #aaa;
}

.post-published-date {
  font-size: 1rem;
  color: #222;
}
.post-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #007acc;
  text-decoration: none;
  transition:
    color 0.3s ease,
    text-decoration 0.3s ease;

  &:hover {
    text-decoration: underline;
  }
}
</style>
