import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import { GenericModel } from '@/shared/model/generic-model';
import StringField from '@/shared/fields/string-field';
import DecimalField from '@/shared/fields/decimal-field';


function label(name) {
  return i18n(`entities.variation.fields.${name}`);
}

const fields = {




  id: new IdField('id', label('id')),


  year: new DecimalField('year', label('year'), {
  }),
  quy01: new DecimalField('quy01', label('quy01'), {}),
  quy02: new DecimalField('quy02', label('quy02'), {}),
  quy03: new DecimalField('quy03', label('quy03'), {}),
  quy04: new DecimalField('quy04', label('quy04'), {}),
  thang01: new DecimalField('thang01', label('thang01'), {}),
  thang02: new DecimalField('thang02', label('thang02'), {}),
  thang03: new DecimalField('thang03', label('thang03'), {}),
  thang04: new DecimalField('thang04', label('thang04'), {}),
  thang05: new DecimalField('thang05', label('thang05'), {}),
  thang06: new DecimalField('thang06', label('thang06'), {}),
  thang07: new DecimalField('thang07', label('thang07'), {}),
  thang08: new DecimalField('thang08', label('thang08'), {}),
  thang09: new DecimalField('thang09', label('thang09'), {}),
  thang10: new DecimalField('thang10', label('thang10'), {}),
  thang11: new DecimalField('thang11', label('thang11'), {}),
  thang12: new DecimalField('thang12', label('thang12'), {}),
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









  variationName: new StringField('variationName', label('variationName'), {
    "required": true
  }),
  variationValues: new StringField('variationValues', label('variationValues'), {
    "max": 250,
    "required": true
  }),
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

};

export class VariationModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
