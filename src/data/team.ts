import { TeamMember, FeaturedContributor, TeamMemberSchema, FeaturedContributorSchema } from '@/schemas/team';

export const boardMembers: TeamMember[] = [
  {
    id: 'rushdi-shaat',
    name: 'رشدي شعت',
    roleAr: 'رئيس مجلس الإدارة',
    roleEn: 'Board Chairman',
    category: 'board',
    consentStatus: 'approved',
  },
  {
    id: 'raghad-al-khatib',
    name: 'رغد الخطيب',
    roleAr: 'المنسّق العام',
    roleEn: 'General Coordinator',
    category: 'board',
    consentStatus: 'approved',
  },
  {
    id: 'ahmed-al-ghoul',
    name: 'أحمد الغول',
    roleAr: 'أمين السر',
    roleEn: 'Board Secretary',
    category: 'board',
    consentStatus: 'approved',
  },
  {
    id: 'afnan-al-khawalda',
    name: 'أفنان الخوالدة',
    roleAr: 'مسؤولة العلاقات العامة',
    roleEn: 'Public Relations Officer',
    category: 'board',
    consentStatus: 'approved',
  },
  {
    id: 'khader-al-salmi',
    name: 'خضر السالمي',
    roleAr: 'مسؤول العلاقات العامة',
    roleEn: 'Public Relations Officer',
    category: 'board',
    consentStatus: 'approved',
  },
  {
    id: 'karam-mubarak',
    name: 'كرم مبارك',
    roleAr: 'مسؤول إدارة المشاريع والدورات',
    roleEn: 'Projects & Programs Lead',
    category: 'board',
    consentStatus: 'approved',
  },
  {
    id: 'yazan-musleh',
    name: 'يزن مصلح',
    roleAr: 'مسؤول إدارة المشاريع والدورات',
    roleEn: 'Projects & Programs Lead',
    category: 'board',
    consentStatus: 'approved',
  },
  {
    id: 'tareq-abdelqader',
    name: 'طارق عبد القادر',
    roleAr: 'مسؤول الإعلام والتوثيق',
    roleEn: 'Media & Documentation Lead',
    category: 'board',
    consentStatus: 'approved',
  },
  {
    id: 'kamel-al-jundi',
    name: 'كامل الجندي',
    roleAr: 'مسؤول الإعلام والتوثيق',
    roleEn: 'Media & Documentation Lead',
    category: 'board',
    consentStatus: 'approved',
  },
].map((m) => TeamMemberSchema.parse(m));

export const regionalVolunteersSummary = {
  totalFieldVolunteers: 21,
  branches: [
    { branch: 'north', nameAr: 'شعبة الشمال', label: 'شعبة شمال غزة', role: 'تنسيق الورش في مدينة غزة والشمال وتأمين قاعات المستشفيات والمراكز الشريكة', count: 7 },
    { branch: 'central', nameAr: 'شعبة الوسطى', label: 'شعبة المحافظة الوسطى', role: 'إدارة الورش الميدانية في دير البلح والنصيرات ومتابعة الحضور وتوزيع الأدوات', count: 7 },
    { branch: 'south', nameAr: 'شعبة الجنوب', label: 'شعبة خانيونس والجنوب', role: 'تنظيم قاعات المحاضرات العملية والتنسيق مع مجمع ناصر والمكتبة العامة', count: 7 },
  ],
  north: {
    label: 'شعبة شمال غزة',
    role: 'تنسيق الورش في مدينة غزة والشمال وتأمين قاعات المستشفيات والمراكز الشريكة',
    count: 7,
  },
  central: {
    label: 'شعبة المحافظة الوسطى',
    role: 'إدارة الورش الميدانية في دير البلح والنصيرات ومتابعة الحضور وتوزيع الأدوات',
    count: 7,
  },
  south: {
    label: 'شعبة خانيونس والجنوب',
    role: 'تنظيم قاعات المحاضرات العملية والتنسيق مع مجمع ناصر والمكتبة العامة',
    count: 7,
  },
  note: '21 متطوعاً ومتطوعة موزعين ميدانياً على محافظات قطاع غزة الثلاث لضمان التنفيذ المتوازي للدورات.'
};

export const featuredContributor: FeaturedContributor = FeaturedContributorSchema.parse({
  nameAr: 'م. حسين محمد حسين ناصر',
  nameEn: 'Eng. Hussein Mohammad Hussein Naser',
  title: 'Software Engineer · Digital Systems Architect · Platform Lead',
  titleAr: 'مهندس برمجيات ومتخصص في بناء وتطوير المواقع والأنظمة الرقمية',
  titleEn: 'Software Engineer & Specialist in Web and Digital Systems Architecture',
  roleAr: 'المبرمج والمطور الرئيسي للمنصة والأنظمة الرقمية',
  roleEn: 'Lead Software Architect & Platform Developer',
  avatar: '/images/developer-hussein.jpg',
  approvedByTeam: true,
  affiliation: 'هندسة البرمجيات والأنظمة الذكية — فلسطين',
  affiliationEn: 'Software Engineering & Intelligent Digital Systems — Palestine',
  email: 'hussein7.7naser@gmail.com',
  linkedin: 'https://linkedin.com/in/7ussein-naser/',
  github: 'https://github.com/7usseinNaser/Sol-life',
  instagram: 'https://instagram.com/7ussein.naser/',
  note: 'هندسة وتطوير المنصة الرقمية التفاعلية وفق أحدث المعايير البرمجية والأداء المتكيف (Next.js 15 & Zero Defects)، لدعم رسالة التعليم والتدريب الطبي المجاني في قطاع غزة.',
  noteEn: 'Architected and engineered the Soul Life interactive digital platform with zero-defect quality and adaptive performance to power clinical medical education in Gaza.',
  skills: [
    'Next.js 15 & React 19',
    'TypeScript & Zod Architecture',
    'High Performance Web Systems',
    'Adaptive Scrollytelling Engine',
    'Zero-Defect Code Quality',
    'UI/UX Glassmorphism & Aesthetics'
  ],
  achievements: [
    'بناء نظام لغات ثنائي متكامل 100%',
    'محرك أداء متكيف ذكي للشبكات الضعيفة',
    'صفر أخطاء وتوافق كامل مع المعايير العالمية'
  ]
});

export const featuredTechnicalContributor = {
  ...featuredContributor,
  roleAr: 'هندسة وتطوير المنصة الرقمية التفاعلية',
  roleEn: 'Digital Platform Architect & Lead Developer',
};


