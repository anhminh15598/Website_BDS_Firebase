<template>
  <div>
    <el-table
      stripe
      :data="rows"
      @sort-change="doChangeSort"
      ref="table"
      row-key="id"
      v-loading="loading"
    >
      <el-table-column type="selection" width="55"></el-table-column>

      <el-table-column
        :label="fields.avatarsIam.label"
        :prop="fields.avatarsIam.name"
        align="center"
        width="100px"
      >
        <template slot-scope="scope">
          <app-list-item-app-avatar :value="presenter(scope.row, 'avatarsIam')"></app-list-item-app-avatar>
        </template>
      </el-table-column>
      <!--


      <el-table-column :label="fields.email.label" :prop="fields.email.name" sortable="custom">
        <template slot-scope="scope">{{ presenter(scope.row, 'email') }}</template>
      </el-table-column>
      -->
      <el-table-column
        sortable="custom"
        :label="fields.maSo.label"
        :prop="fields.maSo.name"
        width="100px"
      >
        <template slot-scope="scope">
          {{
          presenter(scope.row, 'maSo')
          }}
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.disabledAsStatus.label"
        :prop="fields.disabledAsStatus.name"
        width="120px"
        sortable="custom"
      >
        <template slot-scope="scope">
          <el-tag
            :type="
              scope.row[fields.disabledAsStatus.name]
                ? 'danger'
                : ''
            "
          >
            {{
            presenter(scope.row, 'disabledAsStatus')
            }}
          </el-tag>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.roles.label"
        :prop="fields.roles.name"
        width="120px"
        sortable="custom"
      >
        <template slot-scope="scope">
          <div :key="roleId" v-for="roleId in scope.row.roles">
            <el-tooltip :content="roleDescriptionOf(roleId)">
              <span>{{ roleLabelOf(roleId) }}</span>
            </el-tooltip>
          </div>
        </template>
      </el-table-column>

      <el-table-column
        sortable="custom"
        :label="fields.fullName.label"
        :prop="fields.fullName.name"
        width="200px"
      >
        <template slot-scope="scope">
          {{
          presenter(scope.row, 'fullName')
          }}
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.phoneNumber.label"
        :prop="fields.phoneNumber.name"
        width="150px"
      >
        <template slot-scope="scope">
          {{
          presenter(scope.row, 'phoneNumber')
          }}
        </template>
      </el-table-column>

      <el-table-column :label="fields.email.label" :prop="fields.email.name" width="280px">
        <template slot-scope="scope">
          {{
          presenter(scope.row, 'email')
          }}
        </template>
      </el-table-column>

      <el-table-column
        width="200px"
        sortable="custom"
        :label="fields.productUnit.label"
        :prop="fields.productUnit.name"
      >
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.productUnit.label"
            :permission="fields.productUnit.readPermission"
            :url="fields.productUnit.viewUrl"
            :value="presenter(scope.row, 'productUnit')"
          ></app-list-item-relation-to-one>
        </template>
      </el-table-column>

      <el-table-column
        width="200px"
        sortable="custom"
        :label="fields.iamTeam.label"
        :prop="fields.iamTeam.name"
      >
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.iamTeam.label"
            :permission="fields.iamTeam.readPermission"
            :url="fields.iamTeam.viewUrl"
            :value="presenter(scope.row, 'iamTeam')"
          ></app-list-item-relation-to-one>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.staffDateOfBirth.label"
        :prop="fields.staffDateOfBirth.name"
        width="105px"
      >
        <template slot-scope="scope">
          {{
          presenter(scope.row, 'staffDateOfBirth')
          }}
        </template>
      </el-table-column>

      <el-table-column :label="fields.diaChi.label" :prop="fields.diaChi.name" width="500px">
        <template slot-scope="scope">
          {{
          presenter(scope.row, 'diaChi')
          }}
        </template>
      </el-table-column>

      <el-table-column :fixed="isMobile ? undefined : 'right'" align="center" width="60">
        <template slot-scope="scope">
          <div class="table-actions">
            <!--
            <router-link :to="`/iam/${scope.row.id}`">
              <el-button type="primary" icon="el-icon-view" circle>
              </el-button>
            </router-link>
            -->
            <router-link :to="`/iam/${scope.row.id}/edit`" v-if="hasPermissionToEdit">
              <el-button type="info" icon="el-icon-edit" circle></el-button>
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
import { UserModel } from '@/modules/auth/user-model';
import { mapGetters, mapActions } from 'vuex';
import { IamPermissions } from '@/modules/iam/iam-permissions';
import Roles from '@/security/roles';
import AppListItemAppAvatar from '../../../shared/list/list-item-avatar';

const { fields } = UserModel;

export default {
  name: 'app-iam-list-table',
  components: { AppListItemAppAvatar },
  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'iam/list/rows',
      count: 'iam/list/count',
      loading: 'iam/list/loading',
      pagination: 'iam/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new IamPermissions(this.currentUser).edit;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'iam/list/doChangeSort',
      doChangePaginationCurrentPage:
        'iam/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'iam/list/doChangePaginationPageSize',
      doMountTable: 'iam/list/doMountTable',
    }),

    roleDescriptionOf(roleId) {
      return Roles.descriptionOf(roleId);
    },

    roleLabelOf(roleId) {
      return Roles.labelOf(roleId);
    },

    presenter(row, fieldName) {
      return UserModel.presenter(row, fieldName);
    },
  },
};
</script>

<style></style>
