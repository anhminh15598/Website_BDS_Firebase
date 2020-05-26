<template>
  <div>
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
      <el-form-item
        :label="fields.id.label"
        :prop="fields.id.name"
        v-if="isEditing"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input
            :disabled="true"
            v-model="model[fields.id.name]"
          />
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.supplierNames.label"
        :prop="fields.supplierNames.name"
        :required="fields.supplierNames.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input
            v-model="model[fields.supplierNames.name]"
          />
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.supplierLocation.label"
        :prop="fields.supplierLocation.name"
        :required="fields.supplierLocation.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <!--  <el-input v-model="model[field]" /> -->

          <vue-google-autocomplete
            ref="address"
            id="map"
            classname="el-input__inner"
            placeholder="Please type your address"
            v-on:placechanged="getAddressData"
            v-on:error="handleError"
            country="vn"
          >
          </vue-google-autocomplete>
        </el-col>
      </el-form-item>

      <!--
        <el-form-item
          :label="fields.supplierPhoneNumber.label"
          :prop="fields.supplierPhoneNumber.name"
          :required="fields.supplierPhoneNumber.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.supplierPhoneNumber.name]" />
          </el-col>
        </el-form-item>
-->
      <el-form-item
        :label="fields.soTien.label"
        :prop="fields.soTien.name"
        :required="fields.soTien.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input v-model="model[fields.soTien.name]" />
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.supplierProfile.label"
        :prop="fields.supplierProfile.name"
        :required="fields.supplierProfile.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <app-file-upload
            :max="fields.supplierProfile.max"
            :path="fields.supplierProfile.path"
            :schema="fields.supplierProfile.fileSchema"
            v-model="model[fields.supplierProfile.name]"
          ></app-file-upload>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.supplierProfile1.label"
        :prop="fields.supplierProfile1.name"
        :required="fields.supplierProfile1.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <app-file-upload
            :max="fields.supplierProfile1.max"
            :path="fields.supplierProfile1.path"
            :schema="fields.supplierProfile1.fileSchema"
            v-model="model[fields.supplierProfile1.name]"
          ></app-file-upload>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.supplierProfile2.label"
        :prop="fields.supplierProfile2.name"
        :required="fields.supplierProfile2.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <app-file-upload
            :max="fields.supplierProfile2.max"
            :path="fields.supplierProfile2.path"
            :schema="fields.supplierProfile2.fileSchema"
            v-model="model[fields.supplierProfile2.name]"
          ></app-file-upload>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.supplierProfile3.label"
        :prop="fields.supplierProfile3.name"
        :required="fields.supplierProfile3.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <app-file-upload
            :max="fields.supplierProfile3.max"
            :path="fields.supplierProfile3.path"
            :schema="fields.supplierProfile3.fileSchema"
            v-model="model[fields.supplierProfile3.name]"
          ></app-file-upload>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.supplierProfile4.label"
        :prop="fields.supplierProfile4.name"
        :required="fields.supplierProfile4.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <app-file-upload
            :max="fields.supplierProfile4.max"
            :path="fields.supplierProfile4.path"
            :schema="fields.supplierProfile4.fileSchema"
            v-model="model[fields.supplierProfile4.name]"
          ></app-file-upload>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.supplierProfile5.label"
        :prop="fields.supplierProfile5.name"
        :required="fields.supplierProfile5.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <app-file-upload
            :max="fields.supplierProfile5.max"
            :path="fields.supplierProfile5.path"
            :schema="fields.supplierProfile5.fileSchema"
            v-model="model[fields.supplierProfile5.name]"
          ></app-file-upload>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.supplierProfile6.label"
        :prop="fields.supplierProfile6.name"
        :required="fields.supplierProfile6.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <app-file-upload
            :max="fields.supplierProfile6.max"
            :path="fields.supplierProfile6.path"
            :schema="fields.supplierProfile6.fileSchema"
            v-model="model[fields.supplierProfile6.name]"
          ></app-file-upload>
        </el-col>
      </el-form-item>
      <!--
        <el-form-item
          :label="fields.supplierProfile7.label"
          :prop="fields.supplierProfile7.name"
          :required="fields.supplierProfile7.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-file-upload
              :max="fields.supplierProfile7.max"
              :path="fields.supplierProfile7.path"
              :schema="fields.supplierProfile7.fileSchema"
              v-model="model[fields.supplierProfile7.name]"
            ></app-file-upload>
          </el-col>
        </el-form-item>
        -->

      <el-form-item
        :label="fields.supplierStatus.label"
        :prop="fields.supplierStatus.name"
        :required="fields.supplierStatus.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-select
            placeholder
            v-model="model[fields.supplierStatus.name]"
          >
            <el-option :value="undefined">--</el-option>
            <el-option
              :key="option.id"
              :label="option.label"
              :value="option.id"
              v-for="option in fields.supplierStatus
                .options"
            ></el-option>
          </el-select>
        </el-col>
      </el-form-item>

      <el-form-item>
        <div class="form-buttons">
          <el-button
            :disabled="saveLoading"
            @click="doSubmit"
            icon="el-icon-fa-floppy-o"
            type="primary"
          >
            <app-i18n code="common.save"></app-i18n>
          </el-button>

          <el-button
            :disabled="saveLoading"
            @click="doReset"
            icon="el-icon-fa-undo"
          >
            <app-i18n code="common.reset"></app-i18n>
          </el-button>

          <el-button
            :disabled="saveLoading"
            @click="doCancel"
            icon="el-icon-fa-close"
          >
            <app-i18n code="common.cancel"></app-i18n>
          </el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Vue from 'vue';
import VueGoogleAutocomplete from 'vue-google-autocomplete';

import { mapGetters } from 'vuex';
import { FormSchema } from '@/shared/form/form-schema';
import { SuppliersModel } from '@/modules/suppliers/suppliers-model';

Vue.use(VueGoogleAutocomplete);
const { fields } = SuppliersModel;
const formSchema = new FormSchema([
  fields.id,
  fields.supplierProfile,
  fields.supplierProfile1,
  fields.supplierProfile2,
  fields.supplierProfile3,
  fields.supplierProfile4,
  fields.supplierProfile5,
  fields.supplierProfile6,
  fields.supplierProfile7,

  fields.supplierNames,
  //   fields.supplierBusinessName,
  //   fields.supplierEmail,
  fields.supplierLocation,
  fields.supplierLong,
  fields.supplierLat,

  //   fields.supplierPhoneNumber,
  //   fields.supplierPayTerm,
  //   fields.supplierPayType,
  //   fields.supplierStatus,
  //   fields.supplierCreditBalance,
  //   fields.supplierDocs,
  //   fields.userId,
]);

export default {
  name: 'app-suppliers-form',

  props: ['isEditing', 'record', 'saveLoading', 'modal'],

  components: { VueGoogleAutocomplete },

  data() {
    return {
      rules: formSchema.rules(),
      model: null,
      address: null,
      long: null,
      lat: null,
    };
  },

  created() {
    this.model = formSchema.initialValues(
      this.record || {},
    );
  },

  mounted() {
    this.$refs.address.focus();
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
    }),

    fields() {
      return fields;
    },
  },

  methods: {
    getAddressData(addressData) {
      console.log(addressData);
      this.model.supplierLocation =
        addressData.street_number +
        ' ' +
        addressData.route +
        ', ' +
        addressData.administrative_area_level_1;
      this.model.supplierLong = addressData.longitude;
      this.model.supplierLat = addressData.latitude;
      console.log(this.model.supplierLocation);
    },
    handleError(error) {
      console.log(error);
    },
    doReset() {
      this.model = formSchema.initialValues(this.record);
    },

    doCancel() {
      this.$emit('cancel');
    },

    async doSubmit() {
      try {
        await this.$refs.form.validate();
      } catch (error) {
        return;
      }

      const { id, ...values } = formSchema.cast(this.model);
      console.log(id, values);

      return this.$emit('submit', {
        id,
        values,
      });
    },
  },
};
</script>

<style></style>
