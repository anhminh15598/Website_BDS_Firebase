<template>
  <div>
    <el-table
      :data="rows"
      stripe
      @sort-change="doChangeSort"
      ref="table"
      row-key="id"
      v-loading="loading"
    >
      <!--
      <el-table-column type="selection" width="55"></el-table-column>
      -->
      <el-table-column
        :label="fields.supplierProfile.label"
        :prop="fields.supplierProfile.name"
        width="130"
        align="center"
      >
        <template slot-scope="scope">
          <app-list-item-app-avatar
            :value="presenter(scope.row, 'supplierProfile')"
          ></app-list-item-app-avatar>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.supplierStatus.label"
        :prop="fields.supplierStatus.name"
        width="150"
        sortable="custom"
        align="center"
      >
        <template slot-scope="scope">
          <el-tag type="info">{{
            presenter(scope.row, 'supplierStatus')
          }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column
        align="center"
        width="230"
        :label="fields.supplierLocation.label"
        :prop="fields.supplierLocation.name"
      ></el-table-column>

      <el-table-column
        align="center"
        width="180"
        :label="fields.supplierNames.label"
        :prop="fields.supplierNames.name"
      ></el-table-column>

      <el-table-column
        align="center"
        width="180"
        label="Số tiền (VNĐ)"
        :prop="fields.soTien.name"
      ></el-table-column>

      <el-table-column
        :label="fields.supplierProfile1.label"
        :prop="fields.supplierProfile1.name"
        width="100"
        align="center"
      >
        <template slot-scope="scope">
          <app-list-item-app-avatar
            :value="
              presenter(scope.row, 'supplierProfile1')
            "
          ></app-list-item-app-avatar>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.supplierProfile2.label"
        :prop="fields.supplierProfile2.name"
        width="100"
        align="center"
      >
        <template slot-scope="scope">
          <app-list-item-app-avatar
            :value="
              presenter(scope.row, 'supplierProfile2')
            "
          ></app-list-item-app-avatar>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.supplierProfile3.label"
        :prop="fields.supplierProfile3.name"
        width="100"
        align="center"
      >
        <template slot-scope="scope">
          <app-list-item-app-avatar
            :value="
              presenter(scope.row, 'supplierProfile3')
            "
          ></app-list-item-app-avatar>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.supplierProfile4.label"
        :prop="fields.supplierProfile4.name"
        width="100"
        align="center"
      >
        <template slot-scope="scope">
          <app-list-item-app-avatar
            :value="
              presenter(scope.row, 'supplierProfile4')
            "
          ></app-list-item-app-avatar>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.supplierProfile5.label"
        :prop="fields.supplierProfile5.name"
        width="100"
        align="center"
      >
        <template slot-scope="scope">
          <app-list-item-app-avatar
            :value="
              presenter(scope.row, 'supplierProfile5')
            "
          ></app-list-item-app-avatar>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.supplierProfile6.label"
        :prop="fields.supplierProfile6.name"
        width="100"
        align="center"
      >
        <template slot-scope="scope">
          <app-list-item-app-avatar
            :value="
              presenter(scope.row, 'supplierProfile6')
            "
          ></app-list-item-app-avatar>
        </template>
      </el-table-column>

      <el-table-column
        :fixed="isMobile ? undefined : 'right'"
        align="right"
        width="80"
      >
        <template slot-scope="scope">
          <div class="table-actions">
            <router-link
              :to="`/suppliers/${scope.row.id}/edit`"
              v-if="hasPermissionToEdit"
            >
              <el-button
                type="info"
                icon="el-icon-edit"
                circle
              ></el-button>
            </router-link>
          </div>
        </template>
      </el-table-column>
    </el-table>

    <div class="el-pagination-wrapper">
      <el-pagination
        :current-page="pagination.currentPage || 1"
        :disabled="loading"
        :layout="paginationLayout"
        :total="count"
        @current-change="doChangePaginationCurrentPage"
        @size-change="doChangePaginationPageSize"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { SuppliersModel } from '@/modules/suppliers/suppliers-model';
import { mapGetters, mapActions } from 'vuex';
import { SuppliersPermissions } from '@/modules/suppliers/suppliers-permissions';
import { i18n } from '@/i18n';
import AppListItemAppAvatar from '../../../shared/list/list-item-avatar';

const { fields } = SuppliersModel;

export default {
  name: 'app-suppliers-list-table',
  components: { AppListItemAppAvatar },
  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'suppliers/list/rows',
      count: 'suppliers/list/count',
      loading: 'suppliers/list/loading',
      pagination: 'suppliers/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      destroyLoading: 'suppliers/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new SuppliersPermissions(this.currentUser)
        .edit;
    },

    hasPermissionToDestroy() {
      return new SuppliersPermissions(this.currentUser)
        .destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'suppliers/list/doChangeSort',
      doChangePaginationCurrentPage:
        'suppliers/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'suppliers/list/doChangePaginationPageSize',
      doMountTable: 'suppliers/list/doMountTable',
      doDestroy: 'suppliers/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return SuppliersModel.presenter(row, fieldName);
    },

    async doDestroyWithConfirm(id) {
      try {
        await this.$confirm(
          i18n('common.areYouSure'),
          i18n('common.confirm'),
          {
            confirmButtonText: i18n('common.yes'),
            cancelButtonText: i18n('common.no'),
            type: 'warning',
          },
        );

        return this.doDestroy(id);
      } catch (error) {
        // no
      }
    },
  },
};
</script>

<style></style>
