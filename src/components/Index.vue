<template>
  <div class="index">
    <div class="is-fixed is-viewport-height is-full-width">
      <div class="container">
        <div class="columns">
          <div class="column is-one-third is-padding-vertical-6 is-hidden-mobile">
            <nav-column
              :contents="contents"
            ></nav-column>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="columns">
        <div class="column is-one-third is-padding-vertical-6 is-hidden-tablet">
          <nav-column
            :contents="contents"
          ></nav-column>
        </div>
        <div class="column is-offset-one-third is-padding-6">
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
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import NavColumn from './NavColumn';
import Publications from './Publications';
export default {
  name: 'index',
  props: [
    'loading',
    'contents',
  ],
  components: {
    VueMarkdown,
    NavColumn,
    Publications,
  },
  data() {
    return {};
  },
  methods: {},
  watch: {}
};
</script>
