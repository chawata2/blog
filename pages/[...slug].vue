<script setup lang="ts">
import dayjs from "dayjs";
const formatDate = (date: string) => dayjs(date).format("YYYY-MM-DD");

useHead({
  titleTemplate: "%s | chawata's blog",
});
</script>

<template>
  <ContentDoc>
    <template v-slot="{ doc }">
      <article>
        <h1>{{ doc.title }}</h1>
        <div class="date">
          <span>公開日: {{ formatDate(doc.created_at) }}</span>
        </div>
        <ContentRenderer :value="doc" />
      </article>
    </template>

    <template #not-found>
      <h1>ページが存在しません。</h1>
    </template>
  </ContentDoc>
</template>

<style lang="scss" scoped>
.date {
  text-align: right;
}
</style>
