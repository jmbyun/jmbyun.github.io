<template>
  <index
    :loading="loading"
    :contents="contents"
  ></index>
</template>

<script>
import Index from './Index';
import { getIndexSheet } from '../lib/data';
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
      this.contents = await getIndexSheet();
      this.loading = false;
    }
  },
};
</script>

<!-- CSS libraries -->
<style src="normalize.css/normalize.css"></style>
<style src="bulma/css/bulma.css"></style>

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
  }
</style>
