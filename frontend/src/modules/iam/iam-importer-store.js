import importerStore from '@/shared/importer/importer-store';
import { IamService } from '@/modules/iam/iam-service';
import iamImporterFields from '@/modules/iam/iam-importer-fields';
// import { i18n } from '@/i18n';

export default importerStore(
  IamService.edit,
  iamImporterFields,
  'Mẫu_doanh_số_nhân_viên',
  // i18n('iam.importer.hint'),
);
