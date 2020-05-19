<template>
    <el-card class="box-card" style="margin-bottom: 30px">
  <el-form
    :label-position="labelPosition"
    :label-width="labelWidthFilter"
    :model="model"
    :rules="rules"
    :inline="true"
    @submit.native.prevent="doFilter"
    ref="form"
  >
    <el-row>
<!--      <el-col :lg="12" :md="16" :sm="24">-->
<!--        <el-form-item :label="fields.id.label" :prop="fields.id.name">-->
<!--          <el-input v-model="model[fields.id.name]"/>-->
<!--        </el-form-item>-->
<!--      -->
<!--      <el-col style="margin-bottom: -0.41px;" :lg="12" :md="16" :sm="24">-->
<!--        <el-form-item  :label="fields.createdAtRange.label" :prop="fields.createdAtRange.name">-->
<!--          <el-date-picker type="datetimerange" v-model="model[fields.createdAtRange.name]"></el-date-picker>-->
<!--        </el-form-item>-->
<!--      -->



    </el-row>

  </el-form>
    </el-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { FilterSchema } from '@/shared/form/filter-schema';
import { i18n } from '@/i18n';
import { UserModel } from '@/modules/auth/user-model';

const { fields } = UserModel;

const filterSchema = new FilterSchema([
  fields.id,
  fields.createdAtRange,
  fields.email,
  fields.fullName,
]);

export default {
  name: 'app-iam-list-filter',

  data() {
    return {
      rules: filterSchema.rules(),
      model: {},
    };
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthFilter: 'layout/labelWidthFilter',
      loading: 'iam/list/loading',
      filter: 'iam/list/filter',
    }),

    fields() {
      return fields;
    },
  },

  async mounted() {
    this.model = filterSchema.initialValues(
      this.filter,
      this.$route.query,
    );

    return this.doFilter();
  },

  methods: {
    ...mapActions({
      doReset: 'iam/list/doReset',
      doFetch: 'iam/list/doFetch',
    }),

    async doResetFilter() {
      this.model = filterSchema.initialValues();
      this.$refs.form.clearValidate();
      return this.doReset();
    },

    async doFilter() {
      try {
        await this.$refs.form.validate();
        this.$refs.form.clearValidate();
      } catch (error) {
        return;
      }

      const filter = filterSchema.cast(this.model);
      return this.doFetch({
        filter,
      });
    },

    i18n(code) {
      return i18n(code);
    },
  },
};
</script>

<style>
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
