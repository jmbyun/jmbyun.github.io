<template>
  <div class="index">
    <div class="header-column is-padding-vertical-4">
      <div class="is-padding-horizontal-2">
        <nav-column
          :contents="contents"
        ></nav-column>
      </div>
    </div>
    <div class="body-column is-padding-vertical-4 content">
      <div class="is-padding-horizontal-2">
        <div 
          v-for="sectionId in contents.body"
          :key="sectionId"
        >
          <publications 
            v-if="sectionId === 'publications'"
            class="is-padding-bottom-4"
            :contents="contents"
            :publications="publications"
          ></publications>
          <vue-markdown
            v-else
            class="is-padding-bottom-4"
            :source="contents[sectionId]"
          ></vue-markdown>
        </div>
        <div class="credit">
          This website is based on 
          <a 
            href="https://github.com/jmbyun/jmbyun.github.io" 
            target="_blank"
          >
            https://github.com/jmbyun/jmbyun.github.io
          </a>
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
    'publications',
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

<style lang="scss" scoped>
  $container-width: 960px; 
  $mobile-breakpoint: 750px;

  .header-column-container {
    position: fixed;
    width: 100vw;
    height: 100vh;
  }

  .header-column {
    position: fixed;
    top: 0;
    left: calc((100vw - #{$container-width}) / 2); 
    height: 100vh;
    width: 960px / 3;
    z-index: 120;
  }

  .body-column {
    position: relative;
    margin-left: calc(((100vw - #{$container-width}) / 2) + (960px / 3));
    height: 100vh;
    width: 960px * 2 / 3;
    z-index: 100;
  }

  .credit {
    $credit-color: #bbb;
    border-top: 1px solid $credit-color;
    padding: 0.5rem 0;
    font-size: 0.6rem;
    color: $credit-color;

    a {
      text-decoration: underline;
    }
  }

  @media screen and (max-width: $container-width) {
    .header-column {
      left: 0;
      width: calc(100vw / 3);
    }

    .body-column {
      position: relative;
      margin-left: calc(100vw / 3);
      height: 100vh;
      width: calc(100vw * 2 / 3);
    }
  }

  @media screen and (max-width: $mobile-breakpoint) {
    .header-column {
      position: relative;
      left: 0;
      height: auto;
      width: 100%;
    }

    .body-column {
      position: relative;
      margin-left: 0;
      height: auto;
      width: 100%;
    }
  }
</style>
