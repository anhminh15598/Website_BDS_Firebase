const AbstractEntityRepository = require('./abstractEntityRepository');
const admin = require('firebase-admin');
const FirebaseQuery = require('../utils/firebaseQuery');
const Variation = require('../models/variation');
const AuditLogRepository = require('./auditLogRepository');

class VariationRepository extends AbstractEntityRepository {
  async create(data, options) {
    const record = {
      id: this.newId(),
      ...new Variation().cast(data),
    };

    await AbstractEntityRepository.executeOrAddToBatch(
      'set',
      admin
        .firestore()
        .doc(`${new Variation().collectionName}/${record.id}`),
      record,
      options,
    );

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
    data = new Variation().cast(data);
    const year = data.year;

    const record = {
      id,
      [year]: {
        quy01: data.quy01 || 0,
        quy02: data.quy02 || 0,
        quy03: data.quy03 || 0,
        quy04: data.quy04 || 0,
        thang01: data.thang01 || 0,
        thang02: data.thang02 || 0,
        thang03: data.thang03 || 0,
        thang04: data.thang04 || 0,
        thang05: data.thang05 || 0,
        thang06: data.thang06 || 0,
        thang07: data.thang07 || 0,
        thang08: data.thang08 || 0,
        thang09: data.thang09 || 0,
        thang10: data.thang10 || 0,
        thang11: data.thang11 || 0,
        thang12: data.thang12 || 0,
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

    await AbstractEntityRepository.executeOrAddToBatch(
      'update',
      admin
        .firestore()
        .doc(`${new Variation().collectionName}/${record.id}`),
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
    return record;
  }

  async destroy(id, options) {
    await AbstractEntityRepository.executeOrAddToBatch(
      'delete',
      admin
        .firestore()
        .doc(`${new Variation().collectionName}/${id}`),
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
      .collection(new Variation().collectionName);

    if (filter) {
      Object.keys(filter).forEach((key) => {
        chain = chain.where(key, '==', filter[key]);
      });
    }

    return (await chain.get()).size;
  }

  async refreshTwoWayRelations(record, options) {

  }

  async destroyFromRelations(id, options) {
    await this.destroyRelationToOne(
      id,
      'products',
      'productVariation',
      options,
    );
  }

  async findById(id) {
    const record = await this.findDocument('variation', id);
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

      if (filter.variationName) {
        query.appendIlike('variationName', filter.variationName);
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
      .collection(`variation`)
      .get();

    const all = this.mapCollection(collection);
    const rows = await this.populateAll(query.rows(all));
    const count = query.count(all);

    return { rows, count };
  }

  async findAllAutocomplete(search, limit) {
    const query = FirebaseQuery.forAutocomplete({
      limit,
      orderBy: 'variationName_ASC',
    });

    if (search) {
      query.appendId('id', search);
      query.appendIlike('variationName', search);
    }

    const collection = await admin
      .firestore()
      .collection(`variation`)
      .get();

    const all = this.mapCollection(collection);
    const rows = query.rows(all);

    return rows.map((record) => ({
      id: record.id,
      label: record['variationName'],
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
        entityName: new Variation().modelName,
        entityId: id,
        action,
        values: data,
      },
      options,
    );
  }
}

module.exports = VariationRepository;
