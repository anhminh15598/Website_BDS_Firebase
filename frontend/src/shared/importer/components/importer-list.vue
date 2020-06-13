<template>
  <div>
    <el-table
      :border="true"
      :data="pager.paginate(rows)"
      :default-sort="{
        prop: '_line',
        order: 'ascending',
      }"
      @sort-change="(args) => pager.sortChange(args)"
      ref="table"
      row-key="_line"
      style="width: 100%"
    >
      <el-table-column
        align="center"
        :label="i18n('importer.line')"
        prop="_line"
      >
        <template slot-scope="scope">{{
          scope.row._line - 1
        }}</template>
      </el-table-column>

      <el-table-column
        :key="field.name"
        :label="field.label"
        :prop="field.name"
        v-for="field of fields"
        width="250px"
      >
        <template slot-scope="scope">{{
          scope.row[field.name]
        }}</template>
      </el-table-column>

      <el-table-column
        align="center"
        width="250px"
        :label="i18n('importer.status')"
        prop="_status"
        sortable="custom"
      >
        <!-- :errorMessage="scope.row._errorMessage" -->

        <template slot-scope="scope">
          <app-importer-status-row
            :value="scope.row._status"
          ></app-importer-status-row>
        </template>
      </el-table-column>
    </el-table>

    <div class="el-pagination-wrapper">
      <el-pagination
        :current-page.sync="pager.currentPage"
        :layout="paginationLayout"
        :total="pager.sortedList(rows).length"
        @size-change="(args) => pager.pageSizeChange(args)"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { ImporterPager } from '@/shared/importer/importer-pager';
import { i18n } from '@/i18n';
import ImporterStatusRow from '@/shared/importer/components/importer-status-row.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'app-importer-list',

  props: ['storePath'],

  components: {
    [ImporterStatusRow.name]: ImporterStatusRow,
  },

  data() {
    return {
      pager: new ImporterPager(),
    };
  },

  computed: {
    ...mapGetters({
      paginationLayout: 'layout/paginationLayout',
    }),

    rows() {
      return this.$store.getters[`${this.storePath}/rows`];
    },

    fields() {
      return this.$store.getters[
        `${this.storePath}/fields`
      ];
    },
  },

  methods: {
    i18n(code) {
      return i18n(code);
    },
  },
};
</script>

<style></style>
