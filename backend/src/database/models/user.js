const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class User extends AbstractEntityModel {
  constructor() {
    super('user', 'user', {
      email: new types.String(null, 255),
      firstName: new types.String(null, 80),
      diaChi: new types.String(null, 80),
      phongBan: new types.String(null, 80),
      nhom: new types.String(null, 80),
      maSo: new types.String(null, 80),
      // productVariation: new types.RelationToOne(),
      // lastName: new types.String(null, 175),
      // fullName: new types.String(null, 255),
      staffDateOfBirth: new types.Date(),
      disabled: new types.Boolean(),
      phoneNumber: new types.String(null, 24),
      avatars: new types.Files(),
      authenticationUid: new types.String(null, 255),
      roles: new types.StringArray(),
      // importHash: new types.String(null, 255),
    });
  }
};
