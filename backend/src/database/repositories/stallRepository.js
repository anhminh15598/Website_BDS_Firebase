const AbstractEntityRepository = require('./abstractEntityRepository');
const admin = require('firebase-admin');
const FirebaseQuery = require('../utils/firebaseQuery');
const Stall = require('../models/stall');
// const Variation = require('../models/variation');
const AuditLogRepository = require('./auditLogRepository');
const moment = require('moment');

class StallRepository extends AbstractEntityRepository {
  async create(data, options) {
    data = new Stall().cast(data);
    const namHienTai = moment().year();

    const record = {
      id: this.newId(),
      teamName: data.teamName,
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
    };

    await AbstractEntityRepository.executeOrAddToBatch(
      'set',
      admin
        .firestore()
        .doc(`${new Stall().collectionName}/${record.id}`),
      record,
      options,
    );
    // await AbstractEntityRepository.executeOrAddToBatch(
    //   'set',
    //   admin
    //     .firestore()
    //     .doc(`variation/${record.id}`),
    //   record2,
    //   options,
    // );

    await this._auditLogs(
      AuditLogRepository.CREATE,
      record.id,
      data,
      options,
    );

    await this.refreshTwoWayRelations(record, options);

    return record;
  }

  async update(id, data, options) {
    data = new Stall().cast(data);
    const namHienTai = moment().year();

    const record = {
      id,
      [data.year]:
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

    const record3 = {
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
      data.teamName !== 'Nhóm Giám Đốc' &&
      data.year > 999 &&
      data.year < 10000
    ) {
      await AbstractEntityRepository.executeOrAddToBatch(
        'update',
        admin
          .firestore()
          .doc(
            `${new Stall().collectionName}/${record.id}`,
          ),
        record,
        options,
      );

      await this._auditLogs(
        AuditLogRepository.UPDATE,
        id,
        data,
        options,
      );

      await this.refreshTwoWayRelations(record, options);
      if (data.year === moment().year()) {
        await AbstractEntityRepository.executeOrAddToBatch(
          'update',
          admin
            .firestore()
            .doc(
              `${new Stall().collectionName}/${record3.id}`,
            ),
          record3,
          options,
        );
      }
      return record, record3;
    }
  }

  async destroy(id, options) {
    await AbstractEntityRepository.executeOrAddToBatch(
      'delete',
      admin
        .firestore()
        .doc(`${new Stall().collectionName}/${id}`),
      null,
      options,
    );

    await this._auditLogs(
      AuditLogRepository.DELETE,
      id,
      null,
      options,
    );

    await this.destroyFromRelations(id, options);
  }

  async count(filter) {
    let chain = admin
      .firestore()
      .collection(new Stall().collectionName);

    if (filter) {
      Object.keys(filter).forEach((key) => {
        chain = chain.where(key, '==', filter[key]);
      });
    }

    return (await chain.get()).size;
  }

  async refreshTwoWayRelations(record, options) {}

  async destroyFromRelations(id, options) {
    await this.destroyRelationToMany(
      id,
      'products',
      'productStall',
      options,
    );

    await this.destroyRelationToMany(
      id,
      'expenses',
      'expenseStall',
      options,
    );

    await this.destroyRelationToMany(
      id,
      'assets',
      'assetsStall',
      options,
    );

    await this.destroyRelationToOne(
      id,
      'devices',
      'deviceStall',
      options,
    );

    await this.destroyRelationToMany(
      id,
      'notice',
      'noticeStall',
      options,
    );

    await this.destroyRelationToOne(
      id,
      'sales',
      'salesStall',
      options,
    );

    await this.destroyRelationToOne(
      id,
      'purchases',
      'purchaseStall',
      options,
    );

    await this.destroyRelationToOne(
      id,
      'returns',
      'returnStall',
      options,
    );

    await this.destroyRelationToOne(
      id,
      'stockAdjustments',
      'adjustmentStall',
      options,
    );

    await this.destroyRelationToOne(
      id,
      'giftCard',
      'giftCardStall',
      options,
    );

    await this.destroyRelationToOne(
      id,
      'coupon',
      'couponStall',
      options,
    );

    await this.destroyRelationToMany(
      id,
      'damages',
      'damageStall',
      options,
    );

    await this.destroyRelationToOne(
      id,
      'allowanceAndDeduction',
      'adStall',
      options,
    );

    await this.destroyRelationToMany(
      id,
      'attendance',
      'expenseStall',
      options,
    );

    await this.destroyRelationToMany(
      id,
      'todo',
      'todoStall',
      options,
    );

    await this.destroyRelationToMany(
      id,
      'documents',
      'docStall',
      options,
    );

    await this.destroyRelationToMany(
      id,
      'memos',
      'memoStall',
      options,
    );

    await this.destroyRelationToMany(
      id,
      'holiday',
      'holidayStall',
      options,
    );

    await this.destroyRelationToOne(
      id,
      'productLogs',
      'productLogStall',
      options,
    );

    await this.destroyRelationToOne(
      id,
      'stockTransfer',
      'transferStallFrom',
      options,
    );

    await this.destroyRelationToOne(
      id,
      'stockTransfer',
      'transferStallTo',
      options,
    );

    await this.destroyRelationToOne(
      id,
      'register',
      'registerStall',
      options,
    );

    await this.destroyRelationToOne(
      id,
      'commissions',
      'commStall',
      options,
    );

    await this.destroyRelationToOne(
      id,
      'priceChange',
      'priceChangeStall',
      options,
    );
  }

  async findById(id) {
    const record = await this.findDocument('stall', id);
    return this.populate(record);
  }

  async findAndCountAll(
    {
      requestedAttributes,
      filter,
      limit,
      offset,
      orderBy,
    } = {
      requestedAttributes: null,
      filter: null,
      limit: 0,
      offset: 0,
      orderBy: null,
    },
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

      if (filter.teamName) {
        query.appendIlike('teamName', filter.teamName);
      }

      if (filter.stallType) {
        query.appendEqual('stallType', filter.stallType);
      }

      if (filter.stallLocation) {
        query.appendIlike(
          'stallLocation',
          filter.stallLocation,
        );
      }

      if (filter.stallPhoneNumber) {
        query.appendIlike(
          'stallPhoneNumber',
          filter.stallPhoneNumber,
        );
      }

      if (filter.stallIsStatus) {
        query.appendEqual(
          'stallIsStatus',
          filter.stallIsStatus,
        );
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
      .collection(`stall`)
      .get();

    const all = this.mapCollection(collection);
    const rows = await this.populateAll(query.rows(all));
    const count = query.count(all);

    return { rows, count };
  }

  async findAllAutocomplete(search, limit) {
    const query = FirebaseQuery.forAutocomplete({
      limit,
      orderBy: 'teamName_ASC',
    });

    if (search) {
      query.appendId('id', search);
      query.appendIlike('teamName', search);
    }

    const collection = await admin
      .firestore()
      .collection(`stall`)
      .get();

    const all = this.mapCollection(collection);
    const rows = query.rows(all);

    return rows.map((record) => ({
      id: record.id,
      label: record['teamName'],
    }));
  }

  async populateAll(records) {
    return await Promise.all(
      records.map((record) => this.populate(record)),
    );
  }

  async populate(record) {
    if (!record) {
      return record;
    }
    return record;
  }

  async _auditLogs(action, id, data, options) {
    await AuditLogRepository.log(
      {
        entityName: new Stall().modelName,
        entityId: id,
        action,
        values: data,
      },
      options,
    );
  }
}

module.exports = StallRepository;
