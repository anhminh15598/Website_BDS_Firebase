const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class policy extends AbstractEntityModel {
  constructor() {
    super('policy', 'policy', {
      // categoryCover: new types.Files(),
      // categoryTitle: new types.String(null, null),

      policyImg: new types.Files(),
      policyName: new types.String(null, null),
      // categoryShortCode: new types.String(null, 6),
      // categoryDetails: new types.String(null, 250),
      // importHash: new types.String(null, 255),
    });
  }
};
