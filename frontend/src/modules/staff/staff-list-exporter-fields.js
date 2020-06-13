import { StaffModel } from '@/modules/staff/staff-model';

const { fields } = StaffModel;

export default [
  fields.id,
  // fields.staffProfile,
  fields.staffNames,
  fields.staffUserId,
];
