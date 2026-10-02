import { Institution, InstitutionSchema } from '@/schemas/partner';

export const institutionsData: Institution[] = [
  {
    id: 'prcs',
    nameAr: 'جمعية الهلال الأحمر الفلسطيني',
    nameEn: 'Palestine Red Crescent Society',
    category: 'medical',
    confirmedPartner: false,
    relationshipLabel: 'جهات نتعاون ونتواصل معها',
    notes: 'تواصل وتنسيق ميداني لبرامج التدريب الإسعافي.'
  },
  {
    id: 'pal-medical-center',
    nameAr: 'جمعية الرعاية الصحية والتنمية: المركز الطبي الفلسطيني',
    nameEn: 'Healthcare & Development Association: Palestinian Medical Center',
    category: 'medical',
    confirmedPartner: false,
    relationshipLabel: 'جهات نتعاون ونتواصل معها',
    notes: 'استضافة دورة مهارات التمريض والإسعافات الأولية في الوسطى.'
  },
  {
    id: 'bunyan',
    nameAr: 'جمعية بنيان التنموية',
    nameEn: 'Bunyan Development Association',
    category: 'youth_community',
    confirmedPartner: false,
    relationshipLabel: 'جهات نتعاون ونتواصل معها',
  },
  {
    id: 'codenest',
    nameAr: 'شركة كود نست',
    nameEn: 'CodeNest Tech Solutions',
    category: 'tech_support',
    confirmedPartner: false,
    relationshipLabel: 'جهات نتعاون ونتواصل معها',
  },
  {
    id: 'nasser-hospital',
    nameAr: 'مجمع ناصر الطبي',
    nameEn: 'Nasser Medical Complex',
    category: 'medical',
    confirmedPartner: false,
    relationshipLabel: 'جهات نتعاون ونتواصل معها',
    notes: 'استضافة دورة التغريز الجراحي في خانيونس.'
  },
  {
    id: 'ahli-arab-hospital',
    nameAr: 'مستشفى المعمداني (الأهلي العربي)',
    nameEn: 'Al-Ahli Arab (Al-Mamadani) Hospital',
    category: 'medical',
    confirmedPartner: false,
    relationshipLabel: 'جهات نتعاون ونتواصل معها',
    notes: 'استضافة دورة التغريز الجراحي في مدينة غزة.'
  },
  {
    id: 'khan-younis-municipality',
    nameAr: 'بلدية خان يونس (المكتبة العامة)',
    nameEn: 'Khan Younis Municipality (Public Library)',
    category: 'municipal',
    confirmedPartner: false,
    relationshipLabel: 'جهات نتعاون ونتواصل معها',
    notes: 'استضافة دورة تحليل الدم الكامل (CBC).'
  },
  {
    id: 'popular-committee',
    nameAr: 'مكتب اللجنة الشعبية لمنظمة التحرير',
    nameEn: 'Popular Committee Office (PLO)',
    category: 'youth_community',
    confirmedPartner: false,
    relationshipLabel: 'جهات نتعاون ونتواصل معها',
    notes: 'استضافة دورة التغريز في المحافظة الوسطى.'
  },
  {
    id: 'nuseirat-municipality',
    nameAr: 'بلدية النصيرات',
    nameEn: 'Nuseirat Municipality',
    category: 'municipal',
    confirmedPartner: false,
    relationshipLabel: 'جهات نتعاون ونتواصل معها',
    notes: 'استضافة دورة المصطلحات الطبية لـ 160 طالباً.'
  }
].map((item) => InstitutionSchema.parse(item));
