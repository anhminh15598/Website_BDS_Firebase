import importerStore from '@/shared/importer/importer-store';
import { UnitsService } from '@/modules/units/units-service';
import unitsImporterFields from '@/modules/units/units-importer-fields';
// import { i18n } from '@/i18n';

export default importerStore(
  UnitsService.update2,
  unitsImporterFields,
  'Mẫu_doanh_số_phòng',
  // i18n('entities.units.importer.hint'),
);
