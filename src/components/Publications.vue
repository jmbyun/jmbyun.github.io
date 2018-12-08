<template>
  <div class="publications">
    <h2>Publications</h2>
    <ul>
      <li
        class="publication"
        v-for="publication in publications.slice().reverse()"
        :key="publication.title"
      >
        <strong>
          {{ publication.title }}
        </strong>
        <br />
        <vue-markdown 
          class="is-size-7"
          :source="emphasizeMe(publication.authors)"
        ></vue-markdown>
        <span 
          class="is-size-7"
        >
          <em>{{ publication.booktitle }} ({{ publication.shortBooktitle }})</em>
        </span>
        <br />
        <vue-markdown 
          class="is-size-7"
          :source="publication.links"
        ></vue-markdown>
      </li>
    </ul>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
export default {
  name: 'publications',
  props: [
    'contents',
    'publications',
  ],
  components: {
    VueMarkdown,
  },
  data() {
    return {};
  },
  methods: {
    emphasizeMe(text) {
      return text.replace(this.contents.name, `**${this.contents.name}**`);
    }
  },
}
</script>