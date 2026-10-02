import { Committee, CommitteeSchema } from '@/schemas/committee';

export const committeesData: Committee[] = [
  {
    id: 'public-relations',
    nameAr: 'لجنة العلاقات العامة والشراكات',
    nameEn: 'Public Relations & Partnerships Committee',
    description: 'التواصل مع الجامعات والمؤسسات الطبية والبلديات وبناء جسور التعاون لتوفير بيئات تدريبية نوعية.',
    confirmed: false, // Draft pending formal approval
    coordinators: ['أفنان الخوالدة', 'خضر السالمي'],
    keyTasks: [
      'المخاطبات الرسمية مع البلديات والمستشفيات',
      'بناء شبكة تعاون مستمرة مع كليات الطب والتمريض',
      'تنسيق استضافة ورش العمل وتوفير القاعات'
    ],
  },
  {
    id: 'projects-courses',
    nameAr: 'لجنة إدارة المشاريع والدورات',
    nameEn: 'Projects & Training Programs Committee',
    description: 'التخطيط اللوجستي والجدولة الزمنية للدورات ومتابعة شؤون المدربين والمستلزمات التدريبية.',
    confirmed: false,
    coordinators: ['كرم مبارك', 'يزن مصلح'],
    keyTasks: [
      'فرز طلبات الالتحاق وضبط الطاقة الاستيعابية للقاعات',
      'تجهيز أدوات التغريز والمانيكان ومستلزمات التدريب السريري',
      'متابعة الحضور والتقييم السريري للمشاركين'
    ],
  },
  {
    id: 'media-documentation',
    nameAr: 'لجنة الإعلام والتوثيق',
    nameEn: 'Media & Documentation Committee',
    description: 'توثيق الدورات واللقاءات التدريبية بصرياً وإعداد المحتوى ونشر تقارير الإنجاز على المنصات.',
    confirmed: false,
    coordinators: ['طارق عبد القادر', 'كامل الجندي'],
    keyTasks: [
      'التصوير الميداني للتدريب العملي في القاعات والمستشفيات',
      'إعداد التقارير المرئية والإنفوجرافيك التعليمي',
      'إدارة حسابات الفريق والتواصل مع المتابعين'
    ],
  },
  {
    id: 'regional-branches',
    nameAr: 'لجنة الشعب الإقليمية الميدانية',
    nameEn: 'Regional Field Branches Committee',
    description: 'الإشراف على التنسيق الميداني المباشر في محافظات الشمال والوسطى والجنوب لضمان عدالة الوصول.',
    confirmed: false,
    coordinators: ['21 متطوعاً ومتطوعة في الشعب الميدانية الثلاث'],
    keyTasks: [
      'إدارة وتنظيم القاعات قبل بدء التدريب بساعات',
      'استقبال الطلبة وتوزيع الزي الطبي والمستلزمات',
      'تأمين احتياجات المتدربين الميدانية أثناء الجلسات'
    ],
  },
].map((c) => CommitteeSchema.parse(c));
