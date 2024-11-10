<template>
  <main>
    <nav class="header">
      <nuxt-link to="/" class="logo">chawata's blog</nuxt-link>
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
    <div class="content">
      <slot />
    </div>
  </main>
</template>

<style lang="scss">
.header {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
    list-style: none;

    li {
      margin-left: 1rem;
    }
  }

  .logo {
    font-size: 1.5rem;
    font-weight: 600;
    text-decoration: none;
    color: #007acc;
  }
}

.content {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem 1rem 1rem;
}

a {
  color: #007acc;
  text-decoration: none;
  transition:
    color 0.3s ease,
    text-decoration 0.3s ease;

  &:hover {
    text-decoration: underline;
  }

  &:visited {
    color: #007acc;
  }
}

h1 {
  font-size: 2rem;
  margin-top: 0;
}

h2 > a {
  color: black;

  &:hover {
    text-decoration: none;
  }

  &:visited {
    color: black;
  }
}

table {
  border-spacing: 0;
  border-collapse: collapse;
  display: block;
  width: max-content;
  max-width: 100%;
  overflow: auto;

  th,
  td {
    padding: 6px 13px;
    border: 1px solid #d1d9e0;
  }

  th {
    font-weight: 600;
  }
}

img {
  max-width: 100%;
  height: auto;
}
</style>
