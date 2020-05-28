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
        :label="fields.maSo.label"
        :prop="fields.maSo.name"
        :required="fields.maSo.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input v-model="model[fields.maSo.name]" />
        </el-col>
      </el-form-item>
      <el-form-item
        :label="fields.firstName.label"
        :prop="fields.firstName.name"
        :required="fields.firstName.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input v-model="model[fields.firstName.name]" />
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.phoneNumber.label"
        :prop="fields.phoneNumber.name"
        :required="fields.phoneNumber.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input prefix-icon="el-icon-fa-plus" v-model="model[fields.phoneNumber.name]" />
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.email.label"
        :prop="fields.email.name"
        :required="fields.email.required"
        v-if="!single"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input
            :placeholder="fields.email.label"
            auto-complete="off"
            ref="focus"
            type="text"
            v-model="model[fields.email.name]"
          ></el-input>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.rolesRequired.label"
        :prop="fields.rolesRequired.name"
        :required="fields.rolesRequired.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-select multiple placeholder v-model="model[fields.rolesRequired.name]">
            <el-option
              :key="option.value"
              :label="option.label"
              :value="option.value"
              v-for="option in fields.rolesRequired.options"
            ></el-option>
          </el-select>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.staffDateOfBirth.label"
        :prop="fields.staffDateOfBirth.name"
        :required="fields.staffDateOfBirth.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-date-picker placeholder type="date" v-model="model[fields.staffDateOfBirth.name]"></el-date-picker>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.diaChi.label"
        :prop="fields.diaChi.name"
        :required="fields.diaChi.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input v-model="model[fields.diaChi.name]" />
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.productUnit.label"
        :prop="fields.productUnit.name"
        :required="fields.productUnit.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <app-units-autocomplete-input
            :fetchFn="fields.productUnit.fetchFn"
            :mapperFn="fields.productUnit.mapperFn"
            :showCreate="!modal"
            v-model="model[fields.productUnit.name]"
            mode="single"
          ></app-units-autocomplete-input>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.productVariation.label"
        :prop="fields.productVariation.name"
        :required="fields.productVariation.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <app-variation-autocomplete-input
            :fetchFn="fields.productVariation.fetchFn"
            :mapperFn="fields.productVariation.mapperFn"
            :showCreate="!modal"
            v-model="model[fields.productVariation.name]"
            mode="single"
          ></app-variation-autocomplete-input>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.avatarsIam.label"
        :prop="fields.avatarsIam.name"
        :required="fields.avatarsIam.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <app-file-upload
            :max="fields.avatarsIam.max"
            :path="fields.avatarsIam.path"
            :schema="fields.avatarsIam.fileSchema"
            v-model="model[fields.avatarsIam.name]"
          ></app-file-upload>
        </el-col>
      </el-form-item>

      <el-form-item>
        <div class="form-buttons">
          <el-button
            :disabled="saveLoading"
            @click="doSubmit"
            v-on:click="signUp"
            icon="el-icon-fa-floppy-o"
            type="primary"
          >
            <app-i18n code="common.save"></app-i18n>
          </el-button>

          <el-button :disabled="saveLoading" @click="doReset" icon="el-icon-fa-undo">
            <app-i18n code="common.reset"></app-i18n>
          </el-button>

          <el-button :disabled="saveLoading" @click="doCancel" icon="el-icon-fa-close">
            <app-i18n code="common.cancel"></app-i18n>
          </el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { FormSchema } from '@/shared/form/form-schema';
import { UserModel } from '@/modules/auth/user-model';
import { i18n } from '@/i18n';
import * as firebase from 'firebase/app';

const { fields } = UserModel;
const singleFormSchema = new FormSchema([
  fields.id,
  fields.maSo,
  fields.email,
  fields.firstName,
  fields.staffDateOfBirth,
  fields.diaChi,
  fields.productVariation,
  fields.productUnit,
  fields.phoneNumber,
  fields.avatarsIam,
  fields.rolesRequired,
]);

const multipleFormSchema = new FormSchema([
  fields.id,
  fields.maSo,
  fields.email,
  fields.firstName,
  fields.staffDateOfBirth,
  fields.diaChi,
  fields.productVariation,
  fields.productUnit,
  fields.phoneNumber,
  fields.avatarsIam,
  fields.rolesRequired,
]);

export default {
  name: 'app-iam-new-form',

  props: ['saveLoading', 'single'],

  data() {
    return {
      rules: this.single
        ? singleFormSchema.rules()
        : multipleFormSchema.rules(),
      email: fields.email.forFormRules(),
      password: fields.password.forFormRules(),
      model: {},
    };
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
    }),

    formSchema() {
      return this.single
        ? singleFormSchema
        : multipleFormSchema;
    },

    isSingleEmail() {
      return (
        !this.model ||
        !this.model.emails ||
        this.model.emails.length <= 1
      );
    },

    fields() {
      return fields;
    },
  },

  async created() {
    this.model = this.formSchema.initialValues();
  },

  methods: {
    // randomNumber : function(){
    //   return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    // },

    ...mapActions({
      // doSendEmailConfirmation:
      //   'auth/doSendEmailConfirmation',
      // createUser: 'auth/createUser',
    }),
    doReset() {
      this.model = this.formSchema.initialValues();
      this.$refs.form.resetFields();
    },

    async signUp() {
      return firebase
        .auth()
        .createUserWithEmailAndPassword(
          this.model.email,
          '123123',
        );
      // this.$refs.form.validate();
    },

    async doSubmit() {
      try {
        await this.$refs.form.validate();
      } catch {
        return;
      }
      // await this.doSendEmailConfirmation(this.model.email);

      // await this.createUser({
      //     email: this.model.email,
      //     password: '123123',
      //   },
      // );

      const { id, ...values } = this.formSchema.cast(
        this.model,
      );

      if (values.email) {
        values.emails = [values.email];
        delete values.email;
      }

      return this.$emit('submit', {
        id,
        values,
      });
    },

    doCancel() {
      this.$emit('cancel');
    },

    i18n(code) {
      return i18n(code);
    },
  },
};
</script>
