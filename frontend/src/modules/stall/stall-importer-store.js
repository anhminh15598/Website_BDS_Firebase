import importerStore from '@/shared/importer/importer-store';
import { StallService } from '@/modules/stall/stall-service';
import stallImporterFields from '@/modules/stall/stall-importer-fields';
// import { i18n } from '@/i18n';

export default importerStore(
  StallService.update,
  stallImporterFields,
  'Mẫu_doanh_số_nhóm',
  // i18n('entities.stall.importer.hint'),
);
