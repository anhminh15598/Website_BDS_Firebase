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
        :label="fields.fullName.label"
        :prop="fields.fullName.name"
        :required="fields.fullName.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input v-model="model[fields.fullName.name]" />
        </el-col>
      </el-form-item>

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
          <el-select
            multiple
            placeholder
            v-model="model[fields.rolesRequired.name]"
          >
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
          <el-date-picker
            placeholder
            type="date"
            v-model="model[fields.staffDateOfBirth.name]"
          ></el-date-picker>
        </el-col>
      </el-form-item>

      <!-- <el-form-item
        :label="fields.diaChi.label"
        :prop="fields.diaChi.name"
        :required="fields.diaChi.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input v-model="model[fields.diaChi.name]" />
        </el-col>
      </el-form-item>-->

      <el-form-item
        :label="fields.diaChi.label"
        :prop="fields.diaChi.name"
        :required="fields.diaChi.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <input
            v-model="model[fields.diaChi.name]"
            class="el-input__inner"
            v-gmaps-searchbox:myProperty.name.formatted_address.geometry="
              vm
            "
            placeholder
          />
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
            v-model="model[fields.productUnit.name]"
            mode="single"
          ></app-units-autocomplete-input>
        </el-col>
      </el-form-item>

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

      <!---->
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

      <!-- <select
        name="LeaveType"
        @change="onChange($event)"
        class="form-control"
      >
        <option value="1">Annual Leave/ Off-Day</option>
        <option value="2">On Demand Leave</option>
      </select> -->

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

import VueGmaps from 'vue-gmaps';
Vue.use(VueGmaps, {
  key: 'AIzaSyCB_p9Sx8SklsSYWf0rMYGfZAQsElYUMGY',
  libraries: 'places',
  v: 3.38,
});
import { mapGetters, mapActions } from 'vuex';
import { FormSchema } from '@/shared/form/form-schema';
import { UserModel } from '@/modules/auth/user-model';
import { i18n } from '@/i18n';

import * as firebase from 'firebase/app';
// import * as admin from 'firebase-admin';

//---------------

//--------------

const { fields } = UserModel;
const singleFormSchema = new FormSchema([
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
  fields.authenticationUid,
]);

const multipleFormSchema = new FormSchema([
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
  fields.authenticationUid,
]);

export default {
  name: 'app-iam-new-form',

  props: [
    'saveLoading',
    'single',
    'value',
    'fetchFn',
    'mode',
  ],

  data() {
    return {
      documents: [],

      long: null,
      lat: null,
      vm: {
        myProperty: {
          name: '',
          formatted_address: {},
          geometry: {},
        },
      },
      key: '',

      rules: this.single
        ? singleFormSchema.rules()
        : multipleFormSchema.rules(),
      email: fields.email.forFormRules(),
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
    onChange(event) {
      console.log(event.target.mapperFn);
    },

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
      // const originalUser = firebase.auth().currentUser;
      // console.log(originalUser);

      await firebase
        .auth()
        .createUserWithEmailAndPassword(
          this.model.email,
          '123123',
        );
      // await firebase.auth().signOut();
      // await firebase
      //   .auth()
      //   .signInWithEmailAndPassword(
      //     'duanbatdongsanteam3@gmail.com',
      //     '123123',
      //   );
      await setTimeout(function() {
        window.location.reload(1);
      }, 2000);

      // await this.createUser({
      //   email: 'duanbatdongsanteam3@gmail.com',
      //   password: '123123',
      // });
      // firebase.auth().signOut();
      // await firebase
      //   .auth()
      //   .signInWithEmailAndPassword(
      //     'duanbatdongsanteam3@gmail.com',
      //     '123123',
      //   );
    },

    // async signup() {
    //   var config = {
    //     apiKey: 'AIzaSyATQGMNM9nAKbo7q8mlNWw85DqnSLCrNto',
    //     authDomain: 'duanbdsteam03.firebaseapp.com',
    //     databaseURL: 'https://duanbdsteam03.firebaseio.com',
    //     projectId: 'duanbdsteam03',
    //     storageBucket: 'duanbdsteam03.appspot.com',
    //     messagingSenderId: '377181074786',
    //     appId: '1:377181074786:web:c2e355c873f83b8a04a83b',
    //     measurementId: 'G-5BSRKHDFV8',
    //   };
    //   var secondaryApp = firebase.initializeApp(
    //     config,
    //     'Secondary',
    //   );

    //   secondaryApp
    //     .auth()
    //     .createUserWithEmailAndPassword(
    //       this.model.email,
    //       '123123',
    //     )
    //     .then(function(firebaseUser) {
    //       console.log(
    //         'User ' +
    //           firebaseUser.uid +
    //           ' created successfully!',
    //       );
    //       secondaryApp.auth().signOut();
    //     });
    // },

    async doSubmit() {
      try {
        await this.$refs.form.validate();
      } catch {
        return;
      }

      this.model.diaChi = this.vm.myProperty.formatted_address;
      // this.model.supplierLong = this.vm.myProperty.geometry.location.lng();
      // this.model.supplierLat = this.vm.myProperty.geometry.location.lat();

      // const originalUser = firebase.auth().currentUser;
      // console.log(originalUser);

      // await (firebase
      //   .auth()
      //   .createUserWithEmailAndPassword(
      //     this.model.email,
      //     '123123',
      //   ),
      // firebase
      //   .auth()
      //   .updateCurrentUser((user: originalUser | null)));

      // await admin
      //   .auth()
      //   .createUser({
      //     email: this.model.email,
      //     password: '123123',
      //   })
      //   .then(function(userRecord) {
      //     // See the UserRecord reference doc for the contents of userRecord.
      //     console.log(
      //       'Successfully created new user:',
      //       userRecord.uid,
      //     );
      //   })
      //   .catch(function(error) {
      //     console.log('Error creating new user:', error);
      //   });

      // var config = {
      //   apiKey: 'AIzaSyATQGMNM9nAKbo7q8mlNWw85DqnSLCrNto',
      //   authDomain: 'duanbdsteam03.firebaseapp.com',
      //   databaseURL: 'https://duanbdsteam03.firebaseio.com',
      //   projectId: 'duanbdsteam03',
      //   storageBucket: 'duanbdsteam03.appspot.com',
      //   messagingSenderId: '377181074786',
      //   appId: '1:377181074786:web:c2e355c873f83b8a04a83b',
      //   measurementId: 'G-5BSRKHDFV8',
      // };
      // var secondaryApp = firebase.initializeApp(config);

      // await secondaryApp
      //   .auth()
      //   .createUserWithEmailAndPassword(
      //     this.model.email,
      //     '123123',
      //   )
      //   .then(function(firebaseUser) {
      //     console.log(
      //       'User ' +
      //         firebaseUser() +
      //         ' created successfully!',
      //     );
      //     secondaryApp.auth().signOut();
      //   });

      // await this.doSendEmailConfirmation(this.model.email);

      // await this.createUser({
      //   email: this.model.email,
      //   password: '123123',
      // });

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
