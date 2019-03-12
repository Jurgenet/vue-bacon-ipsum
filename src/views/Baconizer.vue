<template lang="pug">
  - var rootClass = 'beconizer'

  div(class=rootClass)
    div(class=`${rootClass}__spiner` v-if="isPending")
      spinner(size="medium")
    div(class=`${rootClass}__paras` v-else)
      p(class=`${rootClass}__paragraph` v-for="paragraph in paragraphs") {{ paragraph }}
      button(class=`${rootClass}__button` @click="update") Update
</template>

<script>
import { getBaconParagraphs } from '@/helpers/baconApi';

import Spinner from 'vue-simple-spinner';

export default {
  name: 'Baconizer',

  components: {
    Spinner,
  },

  props: {
    onUpdate: {
      type: Function,
      requred: false,
      default: () => {},
    },
  },

  data: () => ({
    isPending: true,
    paragraphs: [],
  }),

  async created() {
    this.update();
  },

  methods: {
    async update() {
      let startTime = Date.now();

      this.startPending();
      this.paragraphs = await getBaconParagraphs();
      this.stopPending();

      this.onUpdate({ pendingTime: Math.abs(startTime - Date.now()) });
    },

    startPending() {
      this.isPending = true;
    },
    stopPending() {
      this.isPending = false;
    },
  },
};
</script>

<style lang="scss">
.beconizer {
  &__paragraph {
    text-align: left;

    &::first-letter {
      font-size: 120%;
      color: $magenta;
    }
  }

  &__button {
    border: none;

    background: transparent;
    text-decoration: underline;
    font-size: 1rem;
    font-weight: 600;
    color: $magenta;
    cursor: pointer;
  }
}
</style>
