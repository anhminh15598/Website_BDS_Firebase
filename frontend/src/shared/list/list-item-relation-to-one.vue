<template>
  <div v-if="!isBlank">
    <span>{{ display }}</span>
    <span v-if="!hasPermissionToRead">{{ display }}</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import PermissionChecker from '@/modules/iam/permission-checker';

export default {
  name: 'app-list-item-relation-to-one',

  props: ['value', 'url', 'permission'],

  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
    }),

    hasPermissionToRead() {
      return new PermissionChecker(this.currentUser).match(
        this.permission,
      );
    },

    urlWithId() {
      if (!this.value) {
        return null;
      }

      return `${this.url}/${this.value.id}`;
    },

    isBlank() {
      return !this.value || !this.value.id;
    },

    display() {
      if (!this.value) {
        return null;
      }

      return this.value.label;
    },
  },
};
</script>

<style>
</style>
