<template>
  <div class="auth">
    <div class="wrapper email-unverified">
      <div class="content">
        <div class="logo">
          <h1>
            <app-i18n code="app.title"></app-i18n>
          </h1>
        </div>

        <h3 style="font-weight: normal; text-align: center">
          <app-i18n :args="[email]" code="auth.emailUnverified.message"></app-i18n>
        </h3>

        <el-button :loading="loading" @click="doSubmit" class="w-100" type="primary">
          <app-i18n code="auth.emailUnverified.submit"></app-i18n>
        </el-button>s
        <div class="other-actions">
          <el-button @click="doSignout" type="text">
            <app-i18n code="auth.signout"></app-i18n>
          </el-button>
          <el-button :disabled="saveLoading" @click="doCancel" icon="el-icon-fa-close">
            <app-i18n code="common.cancel"></app-i18n>
          </el-button>
        </div>
        <div class="other-actions">
          <router-link :to="{ path: '/auth/signin' }">
            <el-button type="text">
              <app-i18n code="common.cancel"></app-i18n>
            </el-button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { UserModel } from '@/modules/auth/user-model';

const { fields } = UserModel;

export default {
  name: 'app-email-unverified-page',

  props: ['isEditing', 'record', 'saveLoading', 'modal'],

  data() {
    return {
      rules: {
        email: fields.email.forFormRules(),
      },
      model: {},
    };
  },

  computed: {
    ...mapGetters({
      loading: 'auth/loadingEmailConfirmation',
      email: 'auth/currentUserEmail',
    }),

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doSendEmailConfirmation:
        'auth/doSendEmailConfirmation',
      doSignout: 'auth/doSignout',
    }),

    async doSubmit() {
      await this.doSendEmailConfirmation(this.model.email);
    },
    doCancel() {
      this.$emit('cancel');
    },
  },
};
</script>

<style>
</style>
