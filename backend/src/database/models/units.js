const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Units extends AbstractEntityModel {
  constructor() {
    super('units', 'units', {
      unitsTitle: new types.String(null, null),
      year: new types.Number(null, null),
      quy01: new types.Number(null, null),
      quy02: new types.Number(null, null),
      quy03: new types.Number(null, null),
      quy04: new types.Number(null, null),
      thang01: new types.Number(null, null),
      thang02: new types.Number(null, null),
      thang03: new types.Number(null, null),
      thang04: new types.Number(null, null),
      thang05: new types.Number(null, null),
      thang06: new types.Number(null, null),
      thang07: new types.Number(null, null),
      thang08: new types.Number(null, null),
      thang09: new types.Number(null, null),
      thang10: new types.Number(null, null),
      thang11: new types.Number(null, null),
      thang12: new types.Number(null, null),
      tuan01: new types.Number(null, null),
      tuan02: new types.Number(null, null),
      tuan03: new types.Number(null, null),
      tuan04: new types.Number(null, null),
      tuan05: new types.Number(null, null),
      tuan06: new types.Number(null, null),
      tuan07: new types.Number(null, null),
      tuan08: new types.Number(null, null),
      tuan09: new types.Number(null, null),
      tuan10: new types.Number(null, null),
      tuan11: new types.Number(null, null),
      tuan12: new types.Number(null, null),
      tuan13: new types.Number(null, null),
      tuan14: new types.Number(null, null),
      tuan15: new types.Number(null, null),
      tuan16: new types.Number(null, null),
      tuan17: new types.Number(null, null),
      tuan18: new types.Number(null, null),
      tuan19: new types.Number(null, null),
      tuan20: new types.Number(null, null),
      tuan21: new types.Number(null, null),
      tuan22: new types.Number(null, null),
      tuan23: new types.Number(null, null),
      tuan24: new types.Number(null, null),
      tuan25: new types.Number(null, null),
      tuan26: new types.Number(null, null),
      tuan27: new types.Number(null, null),
      tuan28: new types.Number(null, null),
      tuan29: new types.Number(null, null),
      tuan30: new types.Number(null, null),
      tuan31: new types.Number(null, null),
      tuan32: new types.Number(null, null),
      tuan33: new types.Number(null, null),
      tuan34: new types.Number(null, null),
      tuan35: new types.Number(null, null),
      tuan36: new types.Number(null, null),
      tuan37: new types.Number(null, null),
      tuan38: new types.Number(null, null),
      tuan39: new types.Number(null, null),
      tuan40: new types.Number(null, null),
      tuan41: new types.Number(null, null),
      tuan42: new types.Number(null, null),
      tuan43: new types.Number(null, null),
      tuan44: new types.Number(null, null),
      tuan45: new types.Number(null, null),
      tuan46: new types.Number(null, null),
      tuan47: new types.Number(null, null),
      tuan48: new types.Number(null, null),
      tuan49: new types.Number(null, null),
      tuan50: new types.Number(null, null),
      tuan51: new types.Number(null, null),
      tuan52: new types.Number(null, null),
      tuan53: new types.Number(null, null),
      tuan54: new types.Number(null, null),
      tuan55: new types.Number(null, null),
      tuan56: new types.Number(null, null),
      tuan57: new types.Number(null, null),
      tuan58: new types.Number(null, null),
      tuan59: new types.Number(null, null),
      tuan60: new types.Number(null, null),
      productStall: new types.RelationToMany(),
    });
  }
};
