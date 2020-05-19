const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Suppliers extends AbstractEntityModel {
  constructor() {
    super('Project', 'Project', {
      supplierProfile: new types.Files(),
      supplierProfile1: new types.Files(),
      supplierProfile2: new types.Files(),
      supplierProfile3: new types.Files(),
      supplierProfile4: new types.Files(),
      supplierProfile5: new types.Files(),
      supplierProfile6: new types.Files(),
      supplierProfile7: new types.Files(),
      supplierNames: new types.String(null, null),
      // supplierBusinessName: new types.String(null, null),
      // supplierEmail: new types.String(null, null),
      supplierLocation: new types.String(null, null),
      supplierPhoneNumber: new types.String(null, null),
      soTien: new types.String(null, null),

      // supplierPayTerm: new types.Enumerator([
      //   "daily",
      //   "monthly",
      //   "yearly"
      // ]),
      // supplierPayType: new types.Enumerator([
      //   "offline",
      //   "online"
      // ]),
      supplierStatus: new types.Enumerator([
        "active",
        "blocked",
        "pending",
        "suspended"
      ]),
      // supplierCreditBalance: new types.Number(null, null),
      // supplierDocs: new types.Files(),
      // userId: new types.RelationToOne(),
      // importHash: new types.String(null, 255),
    });
  }
};
