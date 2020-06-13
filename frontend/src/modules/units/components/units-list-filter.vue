<template>
  <el-form
    style="border-bottom: 2px solid #ebeef5;"
    :label-position="labelPosition"
    :label-width="labelWidthFilter"
    :model="model"
    :inline="true"
    :rules="rules"
    @submit.native.prevent="doFilter"
    class="filter"
    ref="form"
  ></el-form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { FilterSchema } from '@/shared/form/filter-schema';
import { UnitsModel } from '@/modules/units/units-model';

const { fields } = UnitsModel;

const filterSchema = new FilterSchema([
  fields.unitsTitle,
  fields.unitsCode,
  fields.unitsType,
]);

export default {
  name: 'app-units-list-filter',

  data() {
    return {
      rules: filterSchema.rules(),
      model: {},
    };
  },

  computed: {
    ...mapGetters({
      // labelPosition: 'layout/labelPosition',
      // labelWidthFilter: 'layout/labelWidthFilter',
      // loading: 'units/list/loading',
      // filter: 'units/list/filter',
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
      doReset: 'units/list/doReset',
      doFetch: 'units/list/doFetch',
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
  },
};
</script>

<style></style>
