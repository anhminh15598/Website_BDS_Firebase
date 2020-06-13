const AbstractRepository = require('./abstractRepository');
const AuditLogRepository = require('./auditLogRepository');
const admin = require('firebase-admin');
const lodash = require('lodash');
const FirebaseQuery = require('../utils/firebaseQuery');
const User = require('../models/user');
const crypto = require('crypto');
const TaxClass = require('../models/taxClass');
const moment = require('moment');

module.exports = class UserRepository extends AbstractRepository {
  static async create(data, options) {
    data = this._preSave(data);
    data = new User().cast(data);

    const namHienTai = moment().year();

    const user = {
      id: this.generateId(data),
      ...data,
      zDoanhSoNam: namHienTai,
      zquy01: 0,
      zquy02: 0,
      zquy03: 0,
      zquy04: 0,
      zthang01: 0,
      zthang02: 0,
      zthang03: 0,
      zthang04: 0,
      zthang05: 0,
      zthang06: 0,
      zthang07: 0,
      zthang08: 0,
      zthang09: 0,
      zthang10: 0,
      zthang11: 0,
      zthang12: 0,
      ztuan01: 0,
      ztuan02: 0,
      ztuan03: 0,
      ztuan04: 0,
      ztuan05: 0,
      ztuan06: 0,
      ztuan07: 0,
      ztuan08: 0,
      ztuan09: 0,
      ztuan10: 0,
      ztuan11: 0,
      ztuan12: 0,
      ztuan13: 0,
      ztuan14: 0,
      ztuan15: 0,
      ztuan16: 0,
      ztuan17: 0,
      ztuan18: 0,
      ztuan19: 0,
      ztuan20: 0,
      ztuan21: 0,
      ztuan22: 0,
      ztuan23: 0,
      ztuan24: 0,
      ztuan25: 0,
      ztuan26: 0,
      ztuan27: 0,
      ztuan28: 0,
      ztuan29: 0,
      ztuan30: 0,
      ztuan31: 0,
      ztuan32: 0,
      ztuan33: 0,
      ztuan34: 0,
      ztuan35: 0,
      ztuan36: 0,
      ztuan37: 0,
      ztuan38: 0,
      ztuan39: 0,
      ztuan40: 0,
      ztuan41: 0,
      ztuan42: 0,
      ztuan43: 0,
      ztuan44: 0,
      ztuan45: 0,
      ztuan46: 0,
      ztuan47: 0,
      ztuan48: 0,
      ztuan49: 0,
      ztuan50: 0,
      ztuan51: 0,
      ztuan52: 0,
      ztuan53: 0,
      ztuan54: 0,
      ztuan55: 0,
      ztuan56: 0,
      ztuan57: 0,
      ztuan58: 0,
      ztuan59: 0,
      ztuan60: 0,
      createdBy: this.getCurrentUser(options).id,
      createdAt: this.serverTimestamp(),
      updatedBy: this.getCurrentUser(options).id,
      updatedAt: this.serverTimestamp(),
    };
    const user2 = {
      id: user.id,
      2019: {
        quy01: 0,
        quy02: 0,
        quy03: 0,
        quy04: 0,
        thang01: 0,
        thang02: 0,
        thang03: 0,
        thang04: 0,
        thang05: 0,
        thang06: 0,
        thang07: 0,
        thang08: 0,
        thang09: 0,
        thang10: 0,
        thang11: 0,
        thang12: 0,
        tuan01: 0,
        tuan02: 0,
        tuan03: 0,
        tuan04: 0,
        tuan05: 0,
        tuan06: 0,
        tuan07: 0,
        tuan08: 0,
        tuan09: 0,
        tuan10: 0,
        tuan11: 0,
        tuan12: 0,
        tuan13: 0,
        tuan14: 0,
        tuan15: 0,
        tuan16: 0,
        tuan17: 0,
        tuan18: 0,
        tuan19: 0,
        tuan20: 0,
        tuan21: 0,
        tuan22: 0,
        tuan23: 0,
        tuan24: 0,
        tuan25: 0,
        tuan26: 0,
        tuan27: 0,
        tuan28: 0,
        tuan29: 0,
        tuan30: 0,
        tuan31: 0,
        tuan32: 0,
        tuan33: 0,
        tuan34: 0,
        tuan35: 0,
        tuan36: 0,
        tuan37: 0,
        tuan38: 0,
        tuan39: 0,
        tuan40: 0,
        tuan41: 0,
        tuan42: 0,
        tuan43: 0,
        tuan44: 0,
        tuan45: 0,
        tuan46: 0,
        tuan47: 0,
        tuan48: 0,
        tuan49: 0,
        tuan50: 0,
        tuan51: 0,
        tuan52: 0,
        tuan53: 0,
        tuan54: 0,
        tuan55: 0,
        tuan56: 0,
        tuan57: 0,
        tuan58: 0,
        tuan59: 0,
        tuan60: 0,
      },
      2020: {
        quy01: 0,
        quy02: 0,
        quy03: 0,
        quy04: 0,
        thang01: 0,
        thang02: 0,
        thang03: 0,
        thang04: 0,
        thang05: 0,
        thang06: 0,
        thang07: 0,
        thang08: 0,
        thang09: 0,
        thang10: 0,
        thang11: 0,
        thang12: 0,
        tuan01: 0,
        tuan02: 0,
        tuan03: 0,
        tuan04: 0,
        tuan05: 0,
        tuan06: 0,
        tuan07: 0,
        tuan08: 0,
        tuan09: 0,
        tuan10: 0,
        tuan11: 0,
        tuan12: 0,
        tuan13: 0,
        tuan14: 0,
        tuan15: 0,
        tuan16: 0,
        tuan17: 0,
        tuan18: 0,
        tuan19: 0,
        tuan20: 0,
        tuan21: 0,
        tuan22: 0,
        tuan23: 0,
        tuan24: 0,
        tuan25: 0,
        tuan26: 0,
        tuan27: 0,
        tuan28: 0,
        tuan29: 0,
        tuan30: 0,
        tuan31: 0,
        tuan32: 0,
        tuan33: 0,
        tuan34: 0,
        tuan35: 0,
        tuan36: 0,
        tuan37: 0,
        tuan38: 0,
        tuan39: 0,
        tuan40: 0,
        tuan41: 0,
        tuan42: 0,
        tuan43: 0,
        tuan44: 0,
        tuan45: 0,
        tuan46: 0,
        tuan47: 0,
        tuan48: 0,
        tuan49: 0,
        tuan50: 0,
        tuan51: 0,
        tuan52: 0,
        tuan53: 0,
        tuan54: 0,
        tuan55: 0,
        tuan56: 0,
        tuan57: 0,
        tuan58: 0,
        tuan59: 0,
        tuan60: 0,
      },
    };

    await this.executeOrAddToBatch(
      'set',
      admin.firestore().doc(`user/${user.id}`),
      user,
      options,
    ),
      this.executeOrAddToBatch(
        'set',
        admin.firestore().doc(`taxClass/${user.id}`),
        user2,
        options,
      );

    await AuditLogRepository.log(
      {
        entityName: 'user',
        entityId: user.id,
        action: AuditLogRepository.CREATE,
        values: user,
      },
      options,
    );

    return user;
  }

  static async createFromAuth(data, options) {
    data = this._preSave(data);
    data = new User().cast(data);

    const user = {
      id: this.generateId(data),
      email: data.email,
      firstName: data.firstName,
      staffDateOfBirth: data.staffDateOfBirth,
      diaChi: data.diaChi,
      iamTeam: data.iamTeam,
      phoneNumber: data.phoneNumber,
      authenticationUid: data.authenticationUid,
      roles: data.roles || [],
      disabled: false,
      createdAt: this.serverTimestamp(),
      updatedAt: this.serverTimestamp(),
    };

    await this.executeOrAddToBatch(
      'set',
      admin.firestore().doc(`user/${user.id}`),
      user,
      options,
    );

    await AuditLogRepository.log(
      {
        entityName: 'user',
        entityId: user.id,
        action: AuditLogRepository.CREATE,
        values: user,
      },
      options,
    );

    return user;
  }

  static async updateProfile(id, data, options) {
    data = this._preSave(data);
    data = new User().cast(data);
    const user = {
      id,
      maSo: data.maSo || null,
      firstName: data.firstName || null,
      lastName: data.lastName || null,
      fullName: data.fullName || null,
      staffDateOfBirth: data.staffDateOfBirth || null,
      diaChi: data.diaChi || null,
      iamTeam: data.iamTeam || null,
      phoneNumber: data.phoneNumber || null,
      avatars: data.avatars || [],
      updatedBy: this.getCurrentUser(options).id,
      updatedAt: this.serverTimestamp(),
    };

    await this.executeOrAddToBatch(
      'update',
      admin.firestore().doc(`user/${user.id}`),
      user,
      options,
    );

    await AuditLogRepository.log(
      {
        entityName: 'user',
        entityId: id,
        action: AuditLogRepository.UPDATE,
        values: user,
      },
      options,
    );

    return user;
  }
  static async updateAuthenticationUid(
    id,
    authenticationUid,
    options,
  ) {
    const user = {
      id,
      authenticationUid,
      updatedBy: this.getCurrentUser(options).id,
      updatedAt: this.serverTimestamp(),
    };

    await this.executeOrAddToBatch(
      'update',
      admin.firestore().doc(`user/${user.id}`),
      user,
      options,
    );

    await AuditLogRepository.log(
      {
        entityName: 'user',
        entityId: id,
        action: AuditLogRepository.UPDATE,
        values: {
          id,
          authenticationUid,
        },
      },
      options,
    );

    return user;
  }

  static async updateStatus(id, disabled, options) {
    const user = {
      id,
      disabled,
      updatedBy: this.getCurrentUser(options).id,
      updatedAt: this.serverTimestamp(),
    };

    await this.executeOrAddToBatch(
      'update',
      admin.firestore().doc(`user/${user.id}`),
      user,
      options,
    );

    await AuditLogRepository.log(
      {
        entityName: 'user',
        entityId: id,
        action: AuditLogRepository.UPDATE,
        values: {
          id,
          disabled,
        },
      },
      options,
    );

    return user;
  }

  static async updateRoles(id, roles, options) {
    const user = await this.findById(id);

    if (options.addRoles) {
      user.roles = [...user.roles, ...roles];
    } else if (options.removeOnlyInformedRoles) {
      user.roles = lodash.difference(user.roles, roles);
    } else {
      user.roles = roles;
    }

    await this.executeOrAddToBatch(
      'update',
      admin.firestore().doc(`user/${id}`),
      {
        roles: user.roles,
      },
      options,
    );

    await AuditLogRepository.log(
      {
        entityName: 'user',
        entityId: user.id,
        action: AuditLogRepository.UPDATE,
        values: {
          roles: user.roles,
        },
      },
      options,
    );

    return user;
  }

  static async update(id, data, data2, options) {
    data, (data2 = this._preSave(data, data2));
    data = new TaxClass().cast(data);
    data2 = new User().cast(data2);
    const year = data.year;

    const namHienTai = moment().year();

    const user = {
      id,
      [year]:
        {
          quy01:
            data.tuan01 +
              data.tuan02 +
              data.tuan03 +
              data.tuan04 +
              data.tuan05 +
              data.tuan06 +
              data.tuan07 +
              data.tuan08 +
              data.tuan09 +
              data.tuan10 +
              data.tuan11 +
              data.tuan12 +
              data.tuan13 +
              data.tuan14 +
              data.tuan15 || 0,
          quy02:
            data.tuan16 +
              data.tuan17 +
              data.tuan18 +
              data.tuan19 +
              data.tuan20 +
              data.tuan21 +
              data.tuan22 +
              data.tuan23 +
              data.tuan24 +
              data.tuan25 +
              data.tuan26 +
              data.tuan27 +
              data.tuan28 +
              data.tuan29 +
              data.tuan30 || 0,
          quy03:
            data.tuan31 +
              data.tuan32 +
              data.tuan33 +
              data.tuan34 +
              data.tuan35 +
              data.tuan36 +
              data.tuan37 +
              data.tuan38 +
              data.tuan39 +
              data.tuan40 +
              data.tuan41 +
              data.tuan42 +
              data.tuan43 +
              data.tuan44 +
              data.tuan45 || 0,
          quy04:
            data.tuan46 +
              data.tuan47 +
              data.tuan48 +
              data.tuan49 +
              data.tuan50 +
              data.tuan51 +
              data.tuan52 +
              data.tuan53 +
              data.tuan54 +
              data.tuan55 +
              data.tuan56 +
              data.tuan57 +
              data.tuan58 +
              data.tuan59 +
              data.tuan60 || 0,
          thang01:
            data.tuan01 +
              data.tuan02 +
              data.tuan03 +
              data.tuan04 +
              data.tuan05 || 0,

          thang02:
            data.tuan06 +
              data.tuan07 +
              data.tuan08 +
              data.tuan09 +
              data.tuan10 || 0,
          thang03:
            data.tuan11 +
              data.tuan12 +
              data.tuan13 +
              data.tuan14 +
              data.tuan15 || 0,
          thang04:
            data.tuan16 +
              data.tuan17 +
              data.tuan18 +
              data.tuan19 +
              data.tuan20 || 0,
          thang05:
            data.tuan21 +
              data.tuan22 +
              data.tuan23 +
              data.tuan24 +
              data.tuan25 || 0,
          thang06:
            data.tuan26 +
              data.tuan27 +
              data.tuan28 +
              data.tuan29 +
              data.tuan30 || 0,
          thang07:
            data.tuan31 +
              data.tuan32 +
              data.tuan33 +
              data.tuan34 +
              data.tuan35 || 0,
          thang08:
            data.tuan36 +
              data.tuan37 +
              data.tuan38 +
              data.tuan39 +
              data.tuan40 || 0,
          thang09:
            data.tuan41 +
              data.tuan42 +
              data.tuan43 +
              data.tuan44 +
              data.tuan45 || 0,
          thang10:
            data.tuan46 +
              data.tuan47 +
              data.tuan48 +
              data.tuan49 +
              data.tuan50 || 0,
          thang11:
            data.tuan51 +
              data.tuan52 +
              data.tuan53 +
              data.tuan54 +
              data.tuan55 || 0,
          thang12:
            data.tuan56 +
              data.tuan57 +
              data.tuan58 +
              data.tuan59 +
              data.tuan60 || 0,
          tuan01: data.tuan01 || 0,
          tuan02: data.tuan02 || 0,
          tuan03: data.tuan03 || 0,
          tuan04: data.tuan04 || 0,
          tuan05: data.tuan05 || 0,
          tuan06: data.tuan06 || 0,
          tuan07: data.tuan07 || 0,
          tuan08: data.tuan08 || 0,
          tuan09: data.tuan09 || 0,
          tuan10: data.tuan10 || 0,
          tuan11: data.tuan11 || 0,
          tuan12: data.tuan12 || 0,
          tuan13: data.tuan13 || 0,
          tuan14: data.tuan14 || 0,
          tuan15: data.tuan15 || 0,
          tuan16: data.tuan16 || 0,
          tuan17: data.tuan17 || 0,
          tuan18: data.tuan18 || 0,
          tuan19: data.tuan19 || 0,
          tuan20: data.tuan20 || 0,
          tuan21: data.tuan21 || 0,
          tuan22: data.tuan22 || 0,
          tuan23: data.tuan23 || 0,
          tuan24: data.tuan24 || 0,
          tuan25: data.tuan25 || 0,
          tuan26: data.tuan26 || 0,
          tuan27: data.tuan27 || 0,
          tuan28: data.tuan28 || 0,
          tuan29: data.tuan29 || 0,
          tuan30: data.tuan30 || 0,
          tuan31: data.tuan31 || 0,
          tuan32: data.tuan32 || 0,
          tuan33: data.tuan33 || 0,
          tuan34: data.tuan34 || 0,
          tuan35: data.tuan35 || 0,
          tuan36: data.tuan36 || 0,
          tuan37: data.tuan37 || 0,
          tuan38: data.tuan38 || 0,
          tuan39: data.tuan39 || 0,
          tuan40: data.tuan40 || 0,
          tuan41: data.tuan41 || 0,
          tuan42: data.tuan42 || 0,
          tuan43: data.tuan43 || 0,
          tuan44: data.tuan44 || 0,
          tuan45: data.tuan45 || 0,
          tuan46: data.tuan46 || 0,
          tuan47: data.tuan47 || 0,
          tuan48: data.tuan48 || 0,
          tuan49: data.tuan49 || 0,
          tuan50: data.tuan50 || 0,
          tuan51: data.tuan51 || 0,
          tuan52: data.tuan52 || 0,
          tuan53: data.tuan53 || 0,
          tuan54: data.tuan54 || 0,
          tuan55: data.tuan55 || 0,
          tuan56: data.tuan56 || 0,
          tuan57: data.tuan57 || 0,
          tuan58: data.tuan58 || 0,
          tuan59: data.tuan59 || 0,
          tuan60: data.tuan60 || 0,
        } || null,
    };

    const user2 = {
      id,
      maSo: data2.maSo || null,
      lastName: data2.lastName || null,
      fullName: data2.fullName || null,
      iamTeam: data2.iamTeam || null,
      productUnit: data2.productUnit || null,
      staffDateOfBirth: data2.staffDateOfBirth || null,
      diaChi: data2.diaChi || null,
      phoneNumber: data2.phoneNumber || null,
      avatars: data2.avatars || [],
      roles: data2.roles || [],
      updatedBy: this.getCurrentUser(options).id,
      updatedAt: this.serverTimestamp(),
    };

    const user3 = {
      id,
      zDoanhSoNam: namHienTai,
      zquy01:
        data.tuan01 +
          data.tuan02 +
          data.tuan03 +
          data.tuan04 +
          data.tuan05 +
          data.tuan06 +
          data.tuan07 +
          data.tuan08 +
          data.tuan09 +
          data.tuan10 +
          data.tuan11 +
          data.tuan12 +
          data.tuan13 +
          data.tuan14 +
          data.tuan15 || 0,
      zquy02:
        data.tuan16 +
          data.tuan17 +
          data.tuan18 +
          data.tuan19 +
          data.tuan20 +
          data.tuan21 +
          data.tuan22 +
          data.tuan23 +
          data.tuan24 +
          data.tuan25 +
          data.tuan26 +
          data.tuan27 +
          data.tuan28 +
          data.tuan29 +
          data.tuan30 || 0,
      zquy03:
        data.tuan31 +
          data.tuan32 +
          data.tuan33 +
          data.tuan34 +
          data.tuan35 +
          data.tuan36 +
          data.tuan37 +
          data.tuan38 +
          data.tuan39 +
          data.tuan40 +
          data.tuan41 +
          data.tuan42 +
          data.tuan43 +
          data.tuan44 +
          data.tuan45 || 0,
      zquy04:
        data.tuan46 +
          data.tuan47 +
          data.tuan48 +
          data.tuan49 +
          data.tuan50 +
          data.tuan51 +
          data.tuan52 +
          data.tuan53 +
          data.tuan54 +
          data.tuan55 +
          data.tuan56 +
          data.tuan57 +
          data.tuan58 +
          data.tuan59 +
          data.tuan60 || 0,
      zthang01:
        data.tuan01 +
          data.tuan02 +
          data.tuan03 +
          data.tuan04 +
          data.tuan05 || 0,

      zthang02:
        data.tuan06 +
          data.tuan07 +
          data.tuan08 +
          data.tuan09 +
          data.tuan10 || 0,
      zthang03:
        data.tuan11 +
          data.tuan12 +
          data.tuan13 +
          data.tuan14 +
          data.tuan15 || 0,
      zthang04:
        data.tuan16 +
          data.tuan17 +
          data.tuan18 +
          data.tuan19 +
          data.tuan20 || 0,
      zthang05:
        data.tuan21 +
          data.tuan22 +
          data.tuan23 +
          data.tuan24 +
          data.tuan25 || 0,
      zthang06:
        data.tuan26 +
          data.tuan27 +
          data.tuan28 +
          data.tuan29 +
          data.tuan30 || 0,
      zthang07:
        data.tuan31 +
          data.tuan32 +
          data.tuan33 +
          data.tuan34 +
          data.tuan35 || 0,
      zthang08:
        data.tuan36 +
          data.tuan37 +
          data.tuan38 +
          data.tuan39 +
          data.tuan40 || 0,
      zthang09:
        data.tuan41 +
          data.tuan42 +
          data.tuan43 +
          data.tuan44 +
          data.tuan45 || 0,
      zthang10:
        data.tuan46 +
          data.tuan47 +
          data.tuan48 +
          data.tuan49 +
          data.tuan50 || 0,
      zthang11:
        data.tuan51 +
          data.tuan52 +
          data.tuan53 +
          data.tuan54 +
          data.tuan55 || 0,
      zthang12:
        data.tuan56 +
          data.tuan57 +
          data.tuan58 +
          data.tuan59 +
          data.tuan60 || 0,
      ztuan01: data.tuan01 || 0,
      ztuan02: data.tuan02 || 0,
      ztuan03: data.tuan03 || 0,
      ztuan04: data.tuan04 || 0,
      ztuan05: data.tuan05 || 0,
      ztuan06: data.tuan06 || 0,
      ztuan07: data.tuan07 || 0,
      ztuan08: data.tuan08 || 0,
      ztuan09: data.tuan09 || 0,
      ztuan10: data.tuan10 || 0,
      ztuan11: data.tuan11 || 0,
      ztuan12: data.tuan12 || 0,
      ztuan13: data.tuan13 || 0,
      ztuan14: data.tuan14 || 0,
      ztuan15: data.tuan15 || 0,
      ztuan16: data.tuan16 || 0,
      ztuan17: data.tuan17 || 0,
      ztuan18: data.tuan18 || 0,
      ztuan19: data.tuan19 || 0,
      ztuan20: data.tuan20 || 0,
      ztuan21: data.tuan21 || 0,
      ztuan22: data.tuan22 || 0,
      ztuan23: data.tuan23 || 0,
      ztuan24: data.tuan24 || 0,
      ztuan25: data.tuan25 || 0,
      ztuan26: data.tuan26 || 0,
      ztuan27: data.tuan27 || 0,
      ztuan28: data.tuan28 || 0,
      ztuan29: data.tuan29 || 0,
      ztuan30: data.tuan30 || 0,
      ztuan31: data.tuan31 || 0,
      ztuan32: data.tuan32 || 0,
      ztuan33: data.tuan33 || 0,
      ztuan34: data.tuan34 || 0,
      ztuan35: data.tuan35 || 0,
      ztuan36: data.tuan36 || 0,
      ztuan37: data.tuan37 || 0,
      ztuan38: data.tuan38 || 0,
      ztuan39: data.tuan39 || 0,
      ztuan40: data.tuan40 || 0,
      ztuan41: data.tuan41 || 0,
      ztuan42: data.tuan42 || 0,
      ztuan43: data.tuan43 || 0,
      ztuan44: data.tuan44 || 0,
      ztuan45: data.tuan45 || 0,
      ztuan46: data.tuan46 || 0,
      ztuan47: data.tuan47 || 0,
      ztuan48: data.tuan48 || 0,
      ztuan49: data.tuan49 || 0,
      ztuan50: data.tuan50 || 0,
      ztuan51: data.tuan51 || 0,
      ztuan52: data.tuan52 || 0,
      ztuan53: data.tuan53 || 0,
      ztuan54: data.tuan54 || 0,
      ztuan55: data.tuan55 || 0,
      ztuan56: data.tuan56 || 0,
      ztuan57: data.tuan57 || 0,
      ztuan58: data.tuan58 || 0,
      ztuan59: data.tuan59 || 0,
      ztuan60: data.tuan60 || 0,
    };

    if (
      data.year !== null &&
      (data2.roles[0] == ['Nhân'] ||
        data2.roles[1] == ['Phòng']) &&
      data.year > 999 &&
      data.year < 10000
    ) {
      await this.executeOrAddToBatch(
        'update',
        admin.firestore().doc(`taxClass/${user.id}`),
        user,
        options,
      );
      await AuditLogRepository.log(
        {
          entityName: 'user',
          entityId: id,
          action: AuditLogRepository.UPDATE,
          values: user,
        },
        options,
      );
      if (data.year === moment().year()) {
        await this.executeOrAddToBatch(
          'update',
          admin.firestore().doc(`user/${user3.id}`),
          user3,
          options,
        );
      }
      return user, user3;
    } else if (data.year === null) {
      await this.executeOrAddToBatch(
        'update',
        admin.firestore().doc(`user/${user2.id}`),
        user2,
        options,
      );

      await AuditLogRepository.log(
        {
          entityName: 'user',
          entityId: id,
          action: AuditLogRepository.UPDATE,
          values: user2,
        },
        options,
      );
      return user2;
    }
    // else if (data.iamTeam !== null && data.roles === '') {

    // }
  }

  static async findByEmail(email, options) {
    const collection = await admin
      .firestore()
      .collection(`user`)
      .where('email', '==', email)
      .limit(1)
      .get();

    const users = this.mapCollection(collection);

    if (users.length) {
      return users[0];
    }

    return null;
  }

  static async findByEmailWithoutAvatar(email, options) {
    return this.findByEmail(email, options);
  }

  static async findAllWithCount(
    { filter, limit, offset, orderBy, attributes } = {
      attributes: null,
      filter: null,
      limit: 0,
      offset: 0,
      orderBy: null,
    },
    options,
  ) {
    const query = FirebaseQuery.forList({
      limit,
      offset,
      orderBy: orderBy || 'createdAt_DESC',
    });

    if (filter) {
      if (filter.id) {
        query.appendId('id', filter.id);
      }

      if (filter.fullName) {
        query.appendIlike('fullName', filter.fullName);
      }

      if (filter.email) {
        query.appendIlike('email', filter.email);
      }

      if (filter.productUnit) {
        query.appendId('productUnit', filter.productUnit);
      }

      if (filter.iamTeam) {
        query.appendId('iamTeam', filter.iamTeam);
      }

      if (filter.role) {
        query.appendIn('roles', filter.role);
      }

      if (filter.status) {
        const disabled = filter.status === 'disabled';
        query.appendEqual('disabled', disabled);
      }

      if (filter.createdAtRange) {
        query.appendRange(
          'createdAt',
          filter.createdAtRange,
        );
      }
    }

    const collection = await admin
      .firestore()
      .collection(`user`)
      .get();

    const all = this.mapCollection(collection);
    const rows = await this.populateAll(query.rows(all));
    const count = query.count(all);

    return { rows, count };
  }

  static async findAllAutocomplete(search, limit) {
    const query = FirebaseQuery.forAutocomplete({
      limit,
      orderBy: 'fullName_ASC',
    });

    if (search) {
      query.appendId('id', search);
      query.appendIlike('fullName', search);
      query.appendIlike('email', search);
    }

    const collection = await admin
      .firestore()
      .collection(`user`)
      .get();

    const all = this.mapCollection(collection);
    const rows = query.rows(all);

    const buildText = (user) => {
      if (!user.fullName) {
        return user.email;
      }

      return `${user.fullName} <${user.email}>`;
    };

    return rows.map((user) => ({
      id: user.id,
      label: buildText(user),
    }));
  }

  static async populateAll(users) {
    return await Promise.all(
      users.map((user) => this.populate(user)),
    );
  }

  static async populate(user) {
    if (!user) {
      return user;
    }
    user.iamTeam =
      (await this.findRelation('stall', user.iamTeam)) ||
      null;

    user.productUnit =
      (await this.findRelation(
        'units',
        user.productUnit,
      )) || null;

    return user;
  }

  static async findById(id) {
    // return this.findDocument('user', id);
    const user = await this.findDocument('user', id);
    return this.populate(user);
  }

  static async findByIdWithoutAvatar(id) {
    return this.findById(id);
  }

  static async findAllByDisabled(ids, disabled) {
    const users = await this.findDocuments('user', ids);

    return users.filter(
      (user) => !!user.disabled === !!disabled,
    );
  }

  static async count(filter, options) {
    let chain = admin.firestore().collection('user');

    if (filter) {
      Object.keys(filter).forEach((key) => {
        chain = chain.where(key, '==', filter[key]);
      });
    }

    return (await chain.get()).size;
  }

  static _preSave(data) {
    if (data.firstName || data.lastName) {
      data.fullName = `${(data.firstName || '').trim()} ${(
        data.lastName || ''
      ).trim()}`.trim();
    }

    data.email = data.email ? data.email.trim() : null;

    data.firstName = data.firstName
      ? data.firstName.trim()
      : null;

    data.lastName = data.lastName
      ? data.lastName.trim()
      : null;

    return data;
  }

  static generateId(data) {
    if (!data || !data.email) {
      return this.newId();
    }

    return crypto
      .createHash('md5')
      .update(data.email)
      .digest('hex');
  }
};
