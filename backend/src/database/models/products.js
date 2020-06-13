const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Products extends AbstractEntityModel {
  constructor() {
    super('products', 'products', {
      variationName: new types.String(null, null),
      variationValues: new types.String(null, 250),
      importHash: new types.String(null, 255),
      // doanhso: new types.RelationToMany(),
      // thang01: new types.String(),
      // thang02: new types.String(),
      // productImage: new types.Files(),
      // productName: new types.String(null, null),
      // productUnit: new types.RelationToOne(),
      // productBrand: new types.RelationToOne(),
      // productCategory: new types.RelationToOne(),
      // productTax: new types.RelationToOne(),
      // productEnableStock: new types.Enumerator([
      //   "enabled",
      //   "disabled"
      // ]),
      // productAlertQuantity: new types.Number(null, null),
      // productSku: new types.Number(null, 100000),
      // productCodeType: new types.Enumerator([
      //   "barcode",
      //   "qr",
      //   "other"
      // ]),
      // productExpiry: new types.Date(),
      // productCustomField: new types.String(null, null),
      // productDesc: new types.String(null, 250),
      // productStatus: new types.Enumerator([
      //   "public",
      //   "private"
      // ]),
      // productVariation: new types.RelationToOne(),
      // productAttribute: new types.String(null, null),
      // productColor: new types.String(null, null),
      // productStall: new types.RelationToMany(),
      // importHash: new types.String(null, 255),
    });
  }
};
