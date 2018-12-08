<template>
  <div class="app">
    <div 
      v-if="loading"
      class="spinner container"
    >
      <div class="has-text-centered is-padding-8">
        <i class="fa fa-circle-o-notch fa-spin"></i> Loading...
      </div>
    </div>
    <index
      v-else
      :loading="loading"
      :contents="contents.index"
      :publications="contents.publications"
    ></index>
  </div>
</template>

<script>
import Index from './Index';
import { getData } from '../lib/data';
export default {
  name: 'app',
  components: {
    Index,
  },
  data() {
    return {
      loading: false,
      contents: {},
    };
  },
  created() {
    this.loadContents();
  },
  methods: {
    async loadContents() {
      this.loading = true;
      this.contents = await getData();
      document.title = this.contents.index.name;
      this.loading = false;
    }
  },
};
</script>

<!-- CSS libraries -->
<style src="normalize.css/normalize.css"></style>
<style src="bulma/css/bulma.css"></style>
<style src="font-awesome/css/font-awesome.css"></style>

<!-- Global style -->
<style lang="scss">
  @for $i from 0 through 8 {
    .is-padding-top-#{$i} {
      padding-top: #{$i * 0.5}rem;
    }

    .is-padding-bottom-#{$i} {
      padding-bottom: #{$i * 0.5}rem;
    }

    .is-padding-vertical-#{$i} {
      padding-top: #{$i * 0.5}rem;
      padding-bottom: #{$i * 0.5}rem;
    }

    .is-padding-horizontal-#{$i} {
      padding-left: #{$i * 0.5}rem;
      padding-right: #{$i * 0.5}rem;
    }

    .is-padding-#{$i} {
      padding: #{$i * 0.5}rem;
    }
  }

  .is-fixed {
    position: fixed;
  }

  .is-full-width {
    width: 100%;
  }

  .is-viewport-height {
    height: 100vh;
    overflow: auto;
  }
</style>
