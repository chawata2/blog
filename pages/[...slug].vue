<template>
  <ContentDoc>
      <template v-slot="{ doc }">
        <article>
          <p>作成日: {{ doc.created_at }}</p>
          <p>更新日: {{ doc.updated_at }}</p>
          <ContentRenderer :value="doc" />
        </article>
      </template>

      <template #not-found>
        <h1>ページが存在しません。</h1>
      </template>
    </ContentDoc>
</template>
