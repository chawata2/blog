<script setup lang="ts">
import dayjs from 'dayjs'
const formatDate = (date: string) => dayjs(date).format('YYYY/MM/DD')
</script>

<template>
  <ContentDoc>
      <template v-slot="{ doc }">
        <article>
          <p>作成日: {{ formatDate(doc.created_at) }}</p>
          <p>更新日: {{ formatDate(doc.updated_at) }}</p>
          <ContentRenderer :value="doc" />
        </article>
      </template>

      <template #not-found>
        <h1>ページが存在しません。</h1>
      </template>
    </ContentDoc>
</template>
