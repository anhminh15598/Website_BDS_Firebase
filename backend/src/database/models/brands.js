const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Brands extends AbstractEntityModel {
  constructor() {
    super('ogChart', 'ogChart', {
      brandCover: new types.Files(),
      ogChartImg: new types.Files(),
      // brandTitle: new types.String(null, null),
      // brandDetails: new types.String(null, 250),
      // importHash: new types.String(null, 255),
    });
  }
};
