<template>
  <div class="index container">
    <div class="columns">
      <div class="column is-one-third is-padding-vertical-6">
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
      <div class="column is-padding-vertical-6">
        <div class="content">
          <div 
            v-for="sectionId in contents.body"
            :key="sectionId"
          >
            <publications 
              v-if="sectionId === 'publications'"
              class="is-padding-bottom-4"
              :contents="contents"
            ></publications>
            <vue-markdown
              v-else
              class="is-padding-bottom-4"
              :source="contents[sectionId]"
            ></vue-markdown>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import Publications from './Publications';
export default {
  name: 'index',
  props: [
    'loading',
    'contents',
  ],
  components: {
    VueMarkdown,
    Publications,
  },
  data() {
    return {};
  },
  methods: {},
  watch: {}
};
</script>

<style lang="scss" scoped>
  .profile {
    display: block;
    border-radius: 50%;
    margin: 3rem auto;
    width: 40%;
    max-width: 250px;
    height: auto;
  }
</style>