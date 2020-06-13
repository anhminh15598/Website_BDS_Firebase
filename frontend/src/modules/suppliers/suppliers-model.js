import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import { GenericModel } from '@/shared/model/generic-model';
import StringField from '@/shared/fields/string-field';
import EnumeratorField from '@/shared/fields/enumerator-field';
import DecimalRangeField from '@/shared/fields/decimal-range-field';
import DecimalField from '@/shared/fields/decimal-field';
import { UserField } from '@/modules/auth/user-field';
import FilesField from '@/shared/fields/files-field';
import ImagesField from '@/shared/fields/images-field';

function label(name) {
  return i18n(`entities.suppliers.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(
    `entities.suppliers.enumerators.${name}.${value}`,
  );
}

const fields = {
  id: new IdField('id', label('id')),

  supplierProfile: new ImagesField(
    'supplierProfile',
    label('supplierProfile'),
    'suppliers/supplierProfile',
    {
      required: true,
      max: 10,
    },
  ),
  supplierProfile1: new ImagesField(
    'supplierProfile1',
    label('supplierProfile1'),
    'suppliers/supplierProfile',
    {
      required: true,
      max: 10,
    },
  ),
  supplierProfile2: new ImagesField(
    'supplierProfile2',
    label('supplierProfile2'),
    'suppliers/supplierProfile',
    {
      required: true,
      max: 10,
    },
  ),
  supplierProfile3: new ImagesField(
    'supplierProfile3',
    label('supplierProfile3'),
    'suppliers/supplierProfile',
    {
      required: true,
      max: 10,
    },
  ),
  supplierProfile4: new ImagesField(
    'supplierProfile4',
    label('supplierProfile4'),
    'suppliers/supplierProfile',
    {
      required: true,
      max: 10,
    },
  ),
  supplierProfile5: new ImagesField(
    'supplierProfile5',
    label('supplierProfile5'),
    'suppliers/supplierProfile',
    {
      required: true,
      max: 10,
    },
  ),
  supplierProfile6: new ImagesField(
    'supplierProfile6',
    label('supplierProfile6'),
    'suppliers/supplierProfile',
    {
      required: true,
      max: 10,
    },
  ),
  supplierProfile7: new ImagesField(
    'supplierProfile7',
    label('supplierProfile7'),
    'suppliers/supplierProfile',
    {
      required: true,
      max: 10,
    },
  ),
  supplierNames: new StringField(
    'supplierNames',
    label('supplierNames'),
    {
      required: true,
      matches: /^[a-zA-Z_0-9]/,
    },
  ),
  supplierBusinessName: new StringField(
    'supplierBusinessName',
    label('supplierBusinessName'),
    {
      required: true,
    },
  ),
  supplierLong: new StringField('supplierLong', {
    required: true,
  }),
  supplierLat: new StringField('supplierLat', {
    required: true,
  }),
  supplierEmail: new StringField(
    'supplierEmail',
    label('supplierEmail'),
    {
      required: true,
    },
  ),
  supplierLocation: new StringField(
    'supplierLocation',
    label('supplierLocation'),
    {
      required: true,
    },
  ),
  supplierPhoneNumber: new StringField(
    'supplierPhoneNumber',
    label('supplierPhoneNumber'),
    {},
  ),
  soTien: new StringField('soTien', label('soTien'), {
    required: true,
    matches: /^[0-9]+$/,
  }),

  supplierPayTerm: new EnumeratorField(
    'supplierPayTerm',
    label('supplierPayTerm'),
    [
      {
        id: 'daily',
        label: enumeratorLabel('supplierPayTerm', 'daily'),
      },
      {
        id: 'monthly',
        label: enumeratorLabel(
          'supplierPayTerm',
          'monthly',
        ),
      },
      {
        id: 'yearly',
        label: enumeratorLabel('supplierPayTerm', 'yearly'),
      },
    ],
    {
      required: true,
    },
  ),
  supplierPayType: new EnumeratorField(
    'supplierPayType',
    label('supplierPayType'),
    [
      {
        id: 'offline',
        label: enumeratorLabel(
          'supplierPayType',
          'offline',
        ),
      },
      {
        id: 'online',
        label: enumeratorLabel('supplierPayType', 'online'),
      },
    ],
    {},
  ),
  supplierStatus: new EnumeratorField(
    'supplierStatus',
    label('supplierStatus'),
    [
      {
        id: 'active',
        label: enumeratorLabel('supplierStatus', 'active'),
      },
      {
        id: 'blocked',
        label: enumeratorLabel('supplierStatus', 'blocked'),
      },
      {
        id: 'pending',
        label: enumeratorLabel('supplierStatus', 'pending'),
      },
    ],
    {
      required: true,
    },
  ),
  supplierCreditBalance: new DecimalField(
    'supplierCreditBalance',
    label('supplierCreditBalance'),
    {},
  ),
  supplierDocs: new FilesField(
    'supplierDocs',
    label('supplierDocs'),
    'suppliers/supplierDocs',
    {},
  ),
  userId: UserField.relationToOne(
    'userId',
    label('userId'),
    {},
  ),
  createdAt: new DateTimeField(
    'createdAt',
    label('createdAt'),
  ),
  updatedAt: new DateTimeField(
    'updatedAt',
    label('updatedAt'),
  ),
  createdAtRange: new DateTimeRangeField(
    'createdAtRange',
    label('createdAtRange'),
  ),
  supplierCreditBalanceRange: new DecimalRangeField(
    'supplierCreditBalanceRange',
    label('supplierCreditBalanceRange'),
  ),
};

export class SuppliersModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
