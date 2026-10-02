import { Region, RegionSchema } from '@/schemas/region';

export const regionsData: Region[] = [
  {
    id: 'khan_younis',
    labelAr: 'خانيونس (الجنوب)',
    labelEn: 'Khan Younis (South)',
    shortLabel: 'خانيونس',
    description: 'تغطية برامج التدريب الطبي في المنطقة الجنوبية بالتعاون مع مجمع ناصر الطبي وبلدية خانيونس.',
    activities: [
      'دورة تحليل الدم الكامل (CBC) في المكتبة العامة',
      'دورة التغريز الجراحي في مجمع ناصر الطبي',
      'برامج الخياطة الجراحية الميدانية'
    ],
    imagePlaceholder: '/images/regions/khan-younis.jpg',
  },
  {
    id: 'central',
    labelAr: 'المحافظة الوسطى',
    labelEn: 'Central Governorate',
    shortLabel: 'الوسطى',
    description: 'تنفيذ برامج التمريض والمصطلحات الطبية بالتنسيق مع بلدية النصيرات والمركز الطبي الفلسطيني.',
    activities: [
      'برنامج المصطلحات الطبية المكثف لـ 160 طالباً',
      'مهارات التمريض والإسعاف الأولي مع المركز الطبي الفلسطيني',
      'دورة التغريز مع اللجنة الشعبية'
    ],
    imagePlaceholder: '/images/regions/central.jpg',
  },
  {
    id: 'gaza',
    labelAr: 'محافظة غزة والشمال',
    labelEn: 'Gaza City & North',
    shortLabel: 'غزة',
    description: 'استمرار التدريب الميداني والإسعافي في مدينة غزة رغم التحديات بالتعاون مع مستشفى المعمداني وفرسان الغد.',
    activities: [
      'دورة الإسعافات الأولية مع جمعية فرسان الغد الشبابية',
      'دورة التغريز الجراحي في مستشفى المعمداني',
      'برامج التدريب السريري المتوازي'
    ],
    imagePlaceholder: '/images/regions/gaza.jpg',
  },
].map((r) => RegionSchema.parse(r));
