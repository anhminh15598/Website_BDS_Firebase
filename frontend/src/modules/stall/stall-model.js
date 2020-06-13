import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import { GenericModel } from '@/shared/model/generic-model';
import StringField from '@/shared/fields/string-field';
import EnumeratorField from '@/shared/fields/enumerator-field';
import DecimalRangeField from '@/shared/fields/decimal-range-field';
import DecimalField from '@/shared/fields/decimal-field';
import ImagesField from '@/shared/fields/images-field';

function label(name) {
  return i18n(`entities.stall.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(
    `entities.stall.enumerators.${name}.${value}`,
  );
}

const fields = {
  id: new IdField('id', label('id')),

  zDoanhSoNam: new DecimalField(
    'zDoanhSoNam',
    label('zDoanhSoNam'),
    {},
  ),
  zquy01: new DecimalField('zquy01', label('zquy01'), {}),
  zquy02: new DecimalField('zquy02', label('zquy02'), {}),
  zquy03: new DecimalField('zquy03', label('zquy03'), {}),
  zquy04: new DecimalField('zquy04', label('zquy04'), {}),
  zthang01: new DecimalField(
    'zthang01',
    label('zthang01'),
    {},
  ),
  zthang02: new DecimalField(
    'zthang02',
    label('zthang02'),
    {},
  ),
  zthang03: new DecimalField(
    'zthang03',
    label('zthang03'),
    {},
  ),
  zthang04: new DecimalField(
    'zthang04',
    label('zthang04'),
    {},
  ),
  zthang05: new DecimalField(
    'zthang05',
    label('zthang05'),
    {},
  ),
  zthang06: new DecimalField(
    'zthang06',
    label('zthang06'),
    {},
  ),
  zthang07: new DecimalField(
    'zthang07',
    label('zthang07'),
    {},
  ),
  zthang08: new DecimalField(
    'zthang08',
    label('zthang08'),
    {},
  ),
  zthang09: new DecimalField(
    'zthang09',
    label('zthang09'),
    {},
  ),
  zthang10: new DecimalField(
    'zthang10',
    label('zthang10'),
    {},
  ),
  zthang11: new DecimalField(
    'zthang11',
    label('zthang11'),
    {},
  ),
  zthang12: new DecimalField(
    'zthang12',
    label('zthang12'),
    {},
  ),
  ztuan01: new DecimalField(
    'ztuan01',
    label('ztuan01'),
    {},
  ),
  ztuan02: new DecimalField(
    'ztuan02',
    label('ztuan02'),
    {},
  ),
  ztuan03: new DecimalField(
    'ztuan03',
    label('ztuan03'),
    {},
  ),
  ztuan04: new DecimalField(
    'ztuan04',
    label('ztuan04'),
    {},
  ),
  ztuan05: new DecimalField(
    'ztuan05',
    label('ztuan05'),
    {},
  ),
  ztuan06: new DecimalField(
    'ztuan06',
    label('ztuan06'),
    {},
  ),
  ztuan07: new DecimalField(
    'ztuan07',
    label('ztuan07'),
    {},
  ),
  ztuan08: new DecimalField(
    'ztuan08',
    label('ztuan08'),
    {},
  ),
  ztuan09: new DecimalField(
    'ztuan09',
    label('ztuan09'),
    {},
  ),
  ztuan10: new DecimalField(
    'ztuan10',
    label('ztuan10'),
    {},
  ),
  ztuan11: new DecimalField(
    'ztuan11',
    label('ztuan11'),
    {},
  ),
  ztuan12: new DecimalField(
    'ztuan12',
    label('ztuan12'),
    {},
  ),
  ztuan13: new DecimalField(
    'ztuan13',
    label('ztuan13'),
    {},
  ),
  ztuan14: new DecimalField(
    'ztuan14',
    label('ztuan14'),
    {},
  ),
  ztuan15: new DecimalField(
    'ztuan15',
    label('ztuan15'),
    {},
  ),
  ztuan16: new DecimalField(
    'ztuan16',
    label('ztuan16'),
    {},
  ),
  ztuan17: new DecimalField(
    'ztuan17',
    label('ztuan17'),
    {},
  ),
  ztuan18: new DecimalField(
    'ztuan18',
    label('ztuan18'),
    {},
  ),
  ztuan19: new DecimalField(
    'ztuan19',
    label('ztuan19'),
    {},
  ),
  ztuan20: new DecimalField(
    'ztuan20',
    label('ztuan20'),
    {},
  ),
  ztuan21: new DecimalField(
    'ztuan21',
    label('ztuan21'),
    {},
  ),
  ztuan22: new DecimalField(
    'ztuan22',
    label('ztuan22'),
    {},
  ),
  ztuan23: new DecimalField(
    'ztuan23',
    label('ztuan23'),
    {},
  ),
  ztuan24: new DecimalField(
    'ztuan24',
    label('ztuan24'),
    {},
  ),
  ztuan25: new DecimalField(
    'ztuan25',
    label('ztuan25'),
    {},
  ),
  ztuan26: new DecimalField(
    'ztuan26',
    label('ztuan26'),
    {},
  ),
  ztuan27: new DecimalField(
    'ztuan27',
    label('ztuan27'),
    {},
  ),
  ztuan28: new DecimalField(
    'ztuan28',
    label('ztuan28'),
    {},
  ),
  ztuan29: new DecimalField(
    'ztuan29',
    label('ztuan29'),
    {},
  ),
  ztuan30: new DecimalField(
    'ztuan30',
    label('ztuan30'),
    {},
  ),
  ztuan31: new DecimalField(
    'ztuan31',
    label('ztuan31'),
    {},
  ),
  ztuan32: new DecimalField(
    'ztuan32',
    label('ztuan32'),
    {},
  ),
  ztuan33: new DecimalField(
    'ztuan33',
    label('ztuan33'),
    {},
  ),
  ztuan34: new DecimalField(
    'ztuan34',
    label('ztuan34'),
    {},
  ),
  ztuan35: new DecimalField(
    'ztuan35',
    label('ztuan35'),
    {},
  ),
  ztuan36: new DecimalField(
    'ztuan36',
    label('ztuan36'),
    {},
  ),
  ztuan37: new DecimalField(
    'ztuan37',
    label('ztuan37'),
    {},
  ),
  ztuan38: new DecimalField(
    'ztuan38',
    label('ztuan38'),
    {},
  ),
  ztuan39: new DecimalField(
    'ztuan39',
    label('ztuan39'),
    {},
  ),
  ztuan40: new DecimalField(
    'ztuan40',
    label('ztuan40'),
    {},
  ),
  ztuan41: new DecimalField(
    'ztuan41',
    label('ztuan41'),
    {},
  ),
  ztuan42: new DecimalField(
    'ztuan42',
    label('ztuan42'),
    {},
  ),
  ztuan43: new DecimalField(
    'ztuan43',
    label('ztuan43'),
    {},
  ),
  ztuan44: new DecimalField(
    'ztuan44',
    label('ztuan44'),
    {},
  ),
  ztuan45: new DecimalField(
    'ztuan45',
    label('ztuan45'),
    {},
  ),
  ztuan46: new DecimalField(
    'ztuan46',
    label('ztuan46'),
    {},
  ),
  ztuan47: new DecimalField(
    'ztuan47',
    label('ztuan47'),
    {},
  ),
  ztuan48: new DecimalField(
    'ztuan48',
    label('ztuan48'),
    {},
  ),
  ztuan49: new DecimalField(
    'ztuan49',
    label('ztuan49'),
    {},
  ),
  ztuan50: new DecimalField(
    'ztuan50',
    label('ztuan50'),
    {},
  ),
  ztuan51: new DecimalField(
    'ztuan51',
    label('ztuan51'),
    {},
  ),
  ztuan52: new DecimalField(
    'ztuan52',
    label('ztuan52'),
    {},
  ),
  ztuan53: new DecimalField(
    'ztuan53',
    label('ztuan53'),
    {},
  ),
  ztuan54: new DecimalField(
    'ztuan54',
    label('ztuan54'),
    {},
  ),
  ztuan55: new DecimalField(
    'ztuan55',
    label('ztuan55'),
    {},
  ),
  ztuan56: new DecimalField(
    'ztuan56',
    label('ztuan56'),
    {},
  ),
  ztuan57: new DecimalField(
    'ztuan57',
    label('ztuan57'),
    {},
  ),
  ztuan58: new DecimalField(
    'ztuan58',
    label('ztuan58'),
    {},
  ),
  ztuan59: new DecimalField(
    'ztuan59',
    label('ztuan59'),
    {},
  ),
  ztuan60: new DecimalField(
    'ztuan60',
    label('ztuan60'),
    {},
  ),

  year: new DecimalField('year', label('year'), {}),
  quy01: new DecimalField('quy01', label('quy01'), {}),
  quy02: new DecimalField('quy02', label('quy02'), {}),
  quy03: new DecimalField('quy03', label('quy03'), {}),
  quy04: new DecimalField('quy04', label('quy04'), {}),
  thang01: new DecimalField(
    'thang01',
    label('thang01'),
    {},
  ),
  thang02: new DecimalField(
    'thang02',
    label('thang02'),
    {},
  ),
  thang03: new DecimalField(
    'thang03',
    label('thang03'),
    {},
  ),
  thang04: new DecimalField(
    'thang04',
    label('thang04'),
    {},
  ),
  thang05: new DecimalField(
    'thang05',
    label('thang05'),
    {},
  ),
  thang06: new DecimalField(
    'thang06',
    label('thang06'),
    {},
  ),
  thang07: new DecimalField(
    'thang07',
    label('thang07'),
    {},
  ),
  thang08: new DecimalField(
    'thang08',
    label('thang08'),
    {},
  ),
  thang09: new DecimalField(
    'thang09',
    label('thang09'),
    {},
  ),
  thang10: new DecimalField(
    'thang10',
    label('thang10'),
    {},
  ),
  thang11: new DecimalField(
    'thang11',
    label('thang11'),
    {},
  ),
  thang12: new DecimalField(
    'thang12',
    label('thang12'),
    {},
  ),
  tuan01: new DecimalField('tuan01', label('tuan01'), {}),
  tuan02: new DecimalField('tuan02', label('tuan02'), {}),
  tuan03: new DecimalField('tuan03', label('tuan03'), {}),
  tuan04: new DecimalField('tuan04', label('tuan04'), {}),
  tuan05: new DecimalField('tuan05', label('tuan05'), {}),
  tuan06: new DecimalField('tuan06', label('tuan06'), {}),
  tuan07: new DecimalField('tuan07', label('tuan07'), {}),
  tuan08: new DecimalField('tuan08', label('tuan08'), {}),
  tuan09: new DecimalField('tuan09', label('tuan09'), {}),
  tuan10: new DecimalField('tuan10', label('tuan10'), {}),
  tuan11: new DecimalField('tuan11', label('tuan11'), {}),
  tuan12: new DecimalField('tuan12', label('tuan12'), {}),
  tuan13: new DecimalField('tuan13', label('tuan13'), {}),
  tuan14: new DecimalField('tuan14', label('tuan14'), {}),
  tuan15: new DecimalField('tuan15', label('tuan15'), {}),
  tuan16: new DecimalField('tuan16', label('tuan16'), {}),
  tuan17: new DecimalField('tuan17', label('tuan17'), {}),
  tuan18: new DecimalField('tuan18', label('tuan18'), {}),
  tuan19: new DecimalField('tuan19', label('tuan19'), {}),
  tuan20: new DecimalField('tuan20', label('tuan20'), {}),
  tuan21: new DecimalField('tuan21', label('tuan21'), {}),
  tuan22: new DecimalField('tuan22', label('tuan22'), {}),
  tuan23: new DecimalField('tuan23', label('tuan23'), {}),
  tuan24: new DecimalField('tuan24', label('tuan24'), {}),
  tuan25: new DecimalField('tuan25', label('tuan25'), {}),
  tuan26: new DecimalField('tuan26', label('tuan26'), {}),
  tuan27: new DecimalField('tuan27', label('tuan27'), {}),
  tuan28: new DecimalField('tuan28', label('tuan28'), {}),
  tuan29: new DecimalField('tuan29', label('tuan29'), {}),
  tuan30: new DecimalField('tuan30', label('tuan30'), {}),
  tuan31: new DecimalField('tuan31', label('tuan31'), {}),
  tuan32: new DecimalField('tuan32', label('tuan32'), {}),
  tuan33: new DecimalField('tuan33', label('tuan33'), {}),
  tuan34: new DecimalField('tuan34', label('tuan34'), {}),
  tuan35: new DecimalField('tuan35', label('tuan35'), {}),
  tuan36: new DecimalField('tuan36', label('tuan36'), {}),
  tuan37: new DecimalField('tuan37', label('tuan37'), {}),
  tuan38: new DecimalField('tuan38', label('tuan38'), {}),
  tuan39: new DecimalField('tuan39', label('tuan39'), {}),
  tuan40: new DecimalField('tuan40', label('tuan40'), {}),
  tuan41: new DecimalField('tuan41', label('tuan41'), {}),
  tuan42: new DecimalField('tuan42', label('tuan42'), {}),
  tuan43: new DecimalField('tuan43', label('tuan43'), {}),
  tuan44: new DecimalField('tuan44', label('tuan44'), {}),
  tuan45: new DecimalField('tuan45', label('tuan45'), {}),
  tuan46: new DecimalField('tuan46', label('tuan46'), {}),
  tuan47: new DecimalField('tuan47', label('tuan47'), {}),
  tuan48: new DecimalField('tuan48', label('tuan48'), {}),
  tuan49: new DecimalField('tuan49', label('tuan49'), {}),
  tuan50: new DecimalField('tuan50', label('tuan50'), {}),
  tuan51: new DecimalField('tuan51', label('tuan51'), {}),
  tuan52: new DecimalField('tuan52', label('tuan52'), {}),
  tuan53: new DecimalField('tuan53', label('tuan53'), {}),
  tuan54: new DecimalField('tuan54', label('tuan54'), {}),
  tuan55: new DecimalField('tuan55', label('tuan55'), {}),
  tuan56: new DecimalField('tuan56', label('tuan56'), {}),
  tuan57: new DecimalField('tuan57', label('tuan57'), {}),
  tuan58: new DecimalField('tuan58', label('tuan58'), {}),
  tuan59: new DecimalField('tuan59', label('tuan59'), {}),
  tuan60: new DecimalField('tuan60', label('tuan60'), {}),

  stallCover: new ImagesField(
    'stallCover',
    label('stallCover'),
    'stall/stallCover',
    {
      required: true,
      max: 1,
    },
  ),
  stallName: new StringField(
    'stallName',
    label('stallName'),
    {
      required: true,
    },
  ),
  teamName: new StringField('teamName', label('teamName'), {
    required: true,
  }),
  stallType: new EnumeratorField(
    'stallType',
    label('stallType'),
    [
      {
        id: 'warehouse',
        label: enumeratorLabel('stallType', 'warehouse'),
      },
      {
        id: 'outlet',
        label: enumeratorLabel('stallType', 'outlet'),
      },
      {
        id: 'store',
        label: enumeratorLabel('stallType', 'store'),
      },
      {
        id: 'counter',
        label: enumeratorLabel('stallType', 'counter'),
      },
    ],
    {
      required: true,
    },
  ),
  stallInfo: new StringField(
    'stallInfo',
    label('stallInfo'),
    {
      max: 250,
    },
  ),
  stallLocation: new StringField(
    'stallLocation',
    label('stallLocation'),
    {},
  ),
  stallPhoneNumber: new StringField(
    'stallPhoneNumber',
    label('stallPhoneNumber'),
    {},
  ),
  stallEmail: new StringField(
    'stallEmail',
    label('stallEmail'),
    {},
  ),
  stallIsStatus: new EnumeratorField(
    'stallIsStatus',
    label('stallIsStatus'),
    [
      {
        id: 'public',
        label: enumeratorLabel('stallIsStatus', 'public'),
      },
      {
        id: 'private',
        label: enumeratorLabel('stallIsStatus', 'private'),
      },
    ],
    {
      required: true,
    },
  ),
  stallPos: new EnumeratorField(
    'stallPos',
    label('stallPos'),
    [
      {
        id: 'enabled',
        label: enumeratorLabel('stallPos', 'enabled'),
      },
      {
        id: 'disabled',
        label: enumeratorLabel('stallPos', 'disabled'),
      },
    ],
    {},
  ),
  stallLoyaltyPointValue: new DecimalField(
    'stallLoyaltyPointValue',
    label('stallLoyaltyPointValue'),
    {},
  ),
  stallCustom1: new StringField(
    'stallCustom1',
    label('stallCustom1'),
    {},
  ),
  stallCustom2: new StringField(
    'stallCustom2',
    label('stallCustom2'),
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
  stallLoyaltyPointValueRange: new DecimalRangeField(
    'stallLoyaltyPointValueRange',
    label('stallLoyaltyPointValueRange'),
  ),
};

export class StallModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
