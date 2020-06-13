<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/iam' }">
        <app-i18n code="iam.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="iam.edit.title"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="iam.edit.title"></app-i18n>
      </h1>

      <div
        class="app-page-spinner"
        v-if="findLoading"
        v-loading="findLoading"
      ></div>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        :model="model"
        :rules="rules"
        @submit.native.prevent="doSubmit"
        class="form"
        ref="form"
        v-if="model"
      >
        <el-row>
          <el-col :span="8">
            <div class="grid-content">
              <el-form-item
                :label="fields.id.label"
                :prop="fields.id.name"
              >
                <el-col :lg="11" :md="16" :sm="24">
                  <el-input
                    disabled
                    v-model="model[fields.id.name]"
                  />
                </el-col>
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="8">
            <div class="grid-content">
              <el-form-item
                :label="fields.maSo.label"
                :prop="fields.maSo.name"
              >
                <el-col :lg="11" :md="16" :sm="24">
                  <el-input
                    disabled
                    v-model="model[fields.maSo.name]"
                  />
                </el-col>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="grid-content">
              <el-form-item
                :label="fields.email.label"
                :prop="fields.email.name"
              >
                <el-col :lg="11" :md="16" :sm="24">
                  <el-input
                    disabled
                    v-model="model[fields.email.name]"
                  />
                </el-col>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="grid-content">
              <el-form-item
                :label="fields.phoneNumber.label"
                :prop="fields.phoneNumber.name"
                :required="fields.phoneNumber.required"
              >
                <el-col :lg="11" :md="16" :sm="24">
                  <el-input
                    prefix-icon="el-icon-fa-plus"
                    v-model="model[fields.phoneNumber.name]"
                  />
                </el-col>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <div class="grid-content">
              <el-form-item
                :label="fields.productUnit.label"
                :prop="fields.productUnit.name"
                :required="fields.productUnit.required"
              >
                <el-col :lg="11" :md="16" :sm="24">
                  <app-units-autocomplete-input
                    :fetchFn="fields.productUnit.fetchFn"
                    :mapperFn="fields.productUnit.mapperFn"
                    v-model="model[fields.productUnit.name]"
                    mode="single"
                  ></app-units-autocomplete-input>
                </el-col>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content">
              <el-form-item
                :label="fields.iamTeam.label"
                :prop="fields.iamTeam.name"
                :required="fields.iamTeam.required"
              >
                <el-col :lg="11" :md="16" :sm="24">
                  <app-stall-autocomplete-input
                    :fetchFn="fields.iamTeam.fetchFn"
                    :mapperFn="fields.iamTeam.mapperFn"
                    v-model="model[fields.iamTeam.name]"
                    mode="single"
                  ></app-stall-autocomplete-input>
                </el-col>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content">
              <el-form-item
                :label="fields.diaChi.label"
                :prop="fields.diaChi.name"
                :required="fields.diaChi.required"
              >
                <el-col :lg="11" :md="16" :sm="24">
                  <el-input
                    v-model="model[fields.diaChi.name]"
                  />
                </el-col>
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="8">
            <div class="grid-content">
              <el-form-item
                :label="fields.fullName.label"
                :prop="fields.fullName.name"
                :required="fields.fullName.required"
              >
                <el-col :lg="11" :md="16" :sm="24">
                  <el-input
                    v-model="model[fields.fullName.name]"
                  />
                </el-col>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="grid-content">
              <el-form-item
                :label="fields.staffDateOfBirth.label"
                :prop="fields.staffDateOfBirth.name"
                :required="fields.staffDateOfBirth.required"
              >
                <el-col :lg="11" :md="16" :sm="24">
                  <el-date-picker
                    placeholder
                    type="date"
                    v-model="
                      model[fields.staffDateOfBirth.name]
                    "
                  ></el-date-picker>
                </el-col>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="grid-content">
              <el-form-item
                :label="fields.roles.label"
                :prop="fields.roles.name"
                :required="fields.roles.required"
              >
                <el-col :lg="11" :md="16" :sm="24">
                  <el-select
                    multiple
                    placeholder
                    v-model="model[fields.roles.name]"
                  >
                    <el-option
                      :key="option.value"
                      :label="option.label"
                      :value="option.value"
                      v-for="option in fields.roles.options"
                    ></el-option>
                  </el-select>
                </el-col>
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <el-form-item
          :label="fields.avatarsIam.label"
          :prop="fields.avatarsIam.name"
          :required="fields.avatarsIam.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-image-upload
              :max="fields.avatarsIam.max"
              :path="fields.avatarsIam.path"
              :schema="fields.avatarsIam.fileSchema"
              v-model="model[fields.avatarsIam.name]"
            ></app-image-upload>
          </el-col>
        </el-form-item>

        <el-form-item>
          <div class="form-buttons">
            <el-button
              :disabled="saveLoading"
              @click="doSubmit"
              round
              icon="el-icon-fa-floppy-o"
              type="primary"
            >
              <app-i18n code="common.save"></app-i18n>
            </el-button>

            <el-button
              :disabled="saveLoading"
              @click="doReset"
              icon="el-icon-fa-undo"
              round
            >
              <app-i18n code="common.reset"></app-i18n>
            </el-button>

            <router-link :to="{ path: '/iam' }">
              <el-button
                :disabled="saveLoading"
                icon="el-icon-fa-close"
                round
              >
                <app-i18n code="common.cancel"></app-i18n>
              </el-button>
            </router-link>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { FormSchema } from '@/shared/form/form-schema';
import { UserModel } from '@/modules/auth/user-model';
import { i18n } from '@/i18n';

const { fields } = UserModel;
const formSchema = new FormSchema([
  fields.id,
  fields.maSo,
  fields.email,
  fields.fullName,
  fields.staffDateOfBirth,
  fields.diaChi,
  fields.iamTeam,
  fields.productUnit,
  fields.phoneNumber,
  fields.avatarsIam,
  fields.rolesRequired,
]);

export default {
  name: 'app-iam-edit-page',

  props: ['id'],

  data() {
    return {
      rules: formSchema.rules(),
      model: null,
    };
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'iam/form/record',
      findLoading: 'iam/form/findLoading',
      saveLoading: 'iam/form/saveLoading',
    }),

    fields() {
      return fields;
    },
  },

  async created() {
    await this.doFind(this.id);
    this.model = formSchema.initialValues(this.record);
  },

  methods: {
    ...mapActions({
      doFind: 'iam/form/doFind',
      doUpdate: 'iam/form/doUpdate',
    }),

    doReset() {
      this.model = formSchema.initialValues(this.record);
    },

    async doSubmit() {
      try {
        await this.$refs.form.validate();
      } catch (error) {
        return;
      }

      const values = formSchema.cast(this.model);
      delete values.email;
      this.doUpdate(values);
    },

    i18n(code) {
      return i18n(code);
    },
  },
};
</script>

<style>
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
</style>
