<template>
  <div class="nav-column">
    <div class="title has-text-centered">
      {{ contents.name }}
    </div>
    <img 
      class="profile"
      :src="contents.image"
    />
    <vue-markdown
      class="content has-text-centered"
      :source="contents.shortcontact"
    ></vue-markdown>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
export default {
  name: 'nav-column',
  props: [
    'contents',
  ],
  components: {
    VueMarkdown,
  },
};
</script>

<style lang="scss" scoped>
  .profile {
    display: block;
    border-radius: 50%;
    margin: 3rem auto;
    width: 40%;
    max-width: 180px;
    height: auto;
  }
</style>
