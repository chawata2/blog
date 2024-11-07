<template>
  <main>
    <nav>
      <nuxt-link to="/">ちゃわた</nuxt-link>
      <ul>
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/posts">Posts</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about">About</nuxt-link>
        </li>
      </ul>
    </nav>
    <slot />
  </main>
</template>
