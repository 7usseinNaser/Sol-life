import { Program, ProgramSchema } from '@/schemas/program';

export const programsData: Program[] = [
  {
    slug: 'medical-terminology',
    titleAr: 'المصطلحات الطبية',
    titleEn: 'Medical Terminology',
    status: 'completed',
    category: 'العلوم الطبية التأسيسية',
    shortDescription: 'برنامج تأسيسي مكثف في المصطلحات الطبية والسريرية لتسهيل استيعاب المقررات والممارسة في المستشفيات.',
    fullDescription: 'يهدف البرنامج إلى تمكين طلبة الكليات الطبية في سنتهم الأولى والثانية من فك شفرات المصطلحات اللاتينية واليونانية الطبية، والمصطلحات الشائعة في الملفات الطبية وأقسام التنويم.',
    objectives: [
      'فهم الجذور واللواحق والبوادئ الطبية اللاتينية واليونانية',
      'قراءة وفهم التقارير السريرية واختصارات التمريض والطب',
      'بناء الثقة في التواصل مع الكادر الطبي والمحاضرين'
    ],
    defaultLocationLevel: 'قطاع غزة',
    collaboratorName: 'بلدية النصيرات',
    featured: true,
    editions: [
      {
        id: 'med-term-central-1',
        editionName: 'المصطلحات الطبية — الوسطى',
        regionKey: 'central',
        displayLocation: 'قطاع غزة',
        hostOrganization: 'بلدية النصيرات',
        dateRange: '25/8–12/9',
        dateConfirmed: true,
        sessionsCount: 6,
        timeSlot: '10:00ص–12:00ظ',
        trainerName: 'د. ديما مهنا',
        registrantsCount: 343,
        acceptedCount: 160,
        notes: 'تم تنفيذ 6 لقاءات تدريبية متكاملة لـ 160 طالباً وطالبة من أصل 343 متقدماً.'
      }
    ]
  },
  {
    slug: 'al-taghreez',
    titleAr: 'التغريز',
    titleEn: 'Al-Taghreez Practical Suturing',
    status: 'completed',
    category: 'المهارات الجراحية اليدوية',
    shortDescription: 'تدريب عملي على تقنيات التغريز الأساسية باستخدام أدوات جراحية ونماذج تدريبية تحاكي الأنسجة البشرية.',
    fullDescription: 'برنامج ميداني وُجه لتدريب الطلبة على التعامل مع الجروح السطحية وإجراء الغرز الطبية السليمة مع مراعاة التعقيم التام وضوابط السلامة.',
    objectives: [
      'التعرف على أنواع الخيوط والإبر الجراحية ومقاساتها',
      'إتقان الغرز البسيطة والغرز المتواصلة والمتقاطعة',
      'التعامل الآمن مع أدوات الجراحة ومبادئ التعقيم'
    ],
    defaultLocationLevel: 'قطاع غزة',
    featured: true,
    editions: [
      {
        id: 'taghreez-central-1',
        editionName: 'التغريز — الوسطى',
        regionKey: 'central',
        displayLocation: 'قطاع غزة',
        hostOrganization: 'مكتب اللجنة الشعبية لمنظمة التحرير',
        dateRange: '22/7 و26/7',
        dateConfirmed: true,
        sessionsCount: 2,
        timeSlot: '2:00م–4:00م',
        trainerName: 'CONTENT_REQUIRED',
        registrantsCount: 287,
        acceptedCount: 30,
        notes: 'نسخة المحافظة الوسطى، 30 مقبولاً من أصل 287 مسجلاً.'
      },
      {
        id: 'taghreez-gaza-1',
        editionName: 'التغريز — غزة',
        regionKey: 'gaza',
        displayLocation: 'قطاع غزة',
        hostOrganization: 'مستشفى المعمداني',
        dateRange: '4/8 (تقريبي)',
        dateConfirmed: true,
        sessionsCount: 1,
        timeSlot: '10:00ص–12:00ظ',
        trainerName: 'CONTENT_REQUIRED',
        registrantsCount: 234,
        acceptedCount: 25,
        notes: 'نسخة مدينة غزة في مستشفى المعمداني، 25 مقبولاً من أصل 234 مسجلاً.'
      },
      {
        id: 'taghreez-khan-younis-1',
        editionName: 'التغريز — خانيونس',
        regionKey: 'khan_younis',
        displayLocation: 'قطاع غزة', // Rule: "قطاع غزة"
        hostOrganization: 'مستشفى ناصر',
        dateRange: '8/8',
        dateConfirmed: true,
        sessionsCount: 1,
        timeSlot: '9:00ص–12:00ظ',
        trainerName: 'CONTENT_REQUIRED',
        registrantsCount: 311,
        acceptedCount: 40,
        notes: 'نسخة خانيونس بمجمع ناصر، 40 مقبولاً من أصل 311 مسجلاً.'
      }
    ]
  },
  {
    slug: 'surgical-suturing',
    titleAr: 'الخياطة الجراحية',
    titleEn: 'Surgical Suturing',
    status: 'completed',
    category: 'الجراحة السريرية',
    shortDescription: 'برنامج متخصص في تقنيات الخياطة الجراحية والتعامل مع الأنسجة وإغلاق الجروح المعقدة.',
    fullDescription: 'برنامج جراحي مستقل نُفذ عبر 3 دورات في قطاع غزة بواقع لقاءين و6 ساعات لكل دورة، استفاد منه قرابة 100 طالب.',
    objectives: [
      'فهم الفروق التشريحية للأنسجة وسماكتها',
      'إتقان خياطة الجروح التجميلية والغرز العميقة والسطحية',
      'العناية بالجروح بعد الخياطة والوقاية من العدوى'
    ],
    defaultLocationLevel: 'قطاع غزة',
    featured: true,
    editions: [
      {
        id: 'surg-suturing-aggregate',
        editionName: 'الخياطة الجراحية — قطاع غزة (3 مناطق)',
        regionKey: 'all_gaza',
        displayLocation: 'قطاع غزة',
        dateRange: 'تم التنفيذ (3 دورات في خانيونس والوسطى وغزة)',
        dateConfirmed: true,
        sessionsCount: 2,
        hoursTotal: 6,
        trainerName: 'CONTENT_REQUIRED',
        trainedEstimate: 100,
        notes: 'تم تدريب قرابة 100 طالب وطالبة عبر 3 دورات بمعدل 6 ساعات تدريبية لكل دورة.'
      }
    ]
  },
  {
    slug: 'cbc-khan-younis',
    titleAr: 'تحليل الدم الكامل (CBC)',
    titleEn: 'Complete Blood Count (CBC) Analysis',
    status: 'completed',
    category: 'التحاليل الطبية والمخبرية',
    shortDescription: 'قراءة وتحليل ومحاكاة فحوصات تعداد الدم الكامل وربط النتائج المخبرية بالحالات السريرية التشخيصية.',
    fullDescription: 'ورشة عمل طبية تطبيقية أشرف عليها د. مجدي قاسم بمشاركة ضيف الشرف م. علاء الدين البطة، وشهدت حضوراً نوعياً لطلبة الطب والتحاليل.',
    objectives: [
      'قراءة مؤشرات RBC و WBC والصفائح الدموية بدقة',
      'تشخيص أنواع فقر الدم المختلفة والأمراض الالتهابية من تقرير CBC',
      'الربط السريري بين الفحص المخبري والأعراض السريرية للمريض'
    ],
    defaultLocationLevel: 'خانيونس', // Special rule: CBC shows "خانيونس"
    collaboratorName: 'المكتبة العامة لبلدية خانيونس',
    featured: true,
    editions: [
      {
        id: 'cbc-khan-younis-1',
        editionName: 'CBC — خانيونس',
        regionKey: 'khan_younis',
        displayLocation: 'خانيونس', // Exception from BRD §5
        hostOrganization: 'المكتبة العامة لبلدية خانيونس',
        dateRange: '18/8',
        dateConfirmed: true,
        sessionsCount: 1,
        timeSlot: '9:00ص–12:00ظ',
        trainerName: 'د. مجدي قاسم',
        registrantsCount: 198,
        acceptedCount: 46,
        notes: 'تقرير إنجاز موقع. منسقو الفريق: أفنان الخوالدة وكامل الجندي.'
      }
    ]
  },
  {
    slug: 'nursing-first-aid-central',
    titleAr: 'مهارات التمريض والإسعافات الأولية',
    titleEn: 'Nursing Skills & First Aid',
    status: 'completed',
    category: 'المهارات التمريضية والإسعافية',
    shortDescription: 'تدريب مكثف على مهارات التمريض الأساسية والتعامل مع الحالات الطارئة وتضميد الجروح وإنعاش المصابين.',
    fullDescription: 'نُفذت الدورة في المحافظة الوسطى بالتعاون مع المركز الطبي الفلسطيني، وشملت تطبيقات عملية مباشرة على النبض وقياس العلامات الحيوية والإسعاف الأولي.',
    objectives: [
      'قياس العلامات الحيوية: الضغط، النبض، الحرارة، والتنفس',
      'إدارة حالات الصدمة والنزيف والحروق',
      'أساسيات الحقن العضلي والوريدي والسلامة المهنية'
    ],
    defaultLocationLevel: 'قطاع غزة',
    collaboratorName: 'المركز الطبي الفلسطيني',
    featured: false,
    editions: [
      {
        id: 'nursing-aid-central-1',
        editionName: 'مهارات التمريض والإسعافات الأولية — الوسطى',
        regionKey: 'central',
        displayLocation: 'قطاع غزة',
        hostOrganization: 'المركز الطبي الفلسطيني',
        dateRange: '15/8 و16/8',
        dateConfirmed: true,
        sessionsCount: 2,
        timeSlot: '9:00ص–12:30م',
        trainerName: 'CONTENT_REQUIRED',
        registrantsCount: 201,
        acceptedCount: 35,
        notes: '201 مسجل، 35 مقبولاً تم تدريبهم خلال لقاءين مكثفين.'
      }
    ]
  },
  {
    slug: 'first-aid-gaza',
    titleAr: 'الإسعافات الأولية الميدانية',
    titleEn: 'Field First Aid',
    status: 'completed',
    category: 'طب الطوارئ الميداني',
    shortDescription: 'تدريب تفاعلي للتعامل مع الإصابات الميدانية وإنقاذ الحياة في البيئات الصعبة والمحدودة الإمكانيات.',
    fullDescription: 'عُقدت الدورة في مدينة غزة بالشراكة مع جمعية فرسان الغد الشبابية وركزت على الاستجابة السريعة وتثبيت الكسور وحالات فقدان الوعي.',
    objectives: [
      'تقييم الموقع وفحص المصاب بحسب بروتوكولات الإنقاذ',
      'تثبيت الكسور والتعامل مع إصابات العمود الفقري',
      'الإنعاش القلبي الرئوي (CPR) والتعامل مع الاختناق'
    ],
    defaultLocationLevel: 'قطاع غزة',
    collaboratorName: 'جمعية فرسان الغد الشبابية',
    featured: false,
    editions: [
      {
        id: 'first-aid-gaza-1',
        editionName: 'الإسعافات الأولية — غزة',
        regionKey: 'gaza',
        displayLocation: 'قطاع غزة',
        hostOrganization: 'جمعية فرسان الغد الشبابية',
        dateRange: '27/9 و28/9',
        dateConfirmed: true,
        sessionsCount: 2,
        timeSlot: '10:00ص–12:00ظ',
        trainerName: 'CONTENT_REQUIRED',
        registrantsCount: 160,
        acceptedCount: 25,
        notes: '160 مسجلاً، 25 مقبولاً.'
      }
    ]
  },
  {
    slug: 'ai-doctor',
    titleAr: 'الطبيب الذكي: AI Doctor',
    titleEn: 'AI Doctor: Artificial Intelligence in Medical Education',
    status: 'upcoming',
    category: 'الذكاء الاصطناعي الطبي',
    shortDescription: 'ورشة تدريبية ريادية لتمكين طلبة التخصصات الطبية من تسخير أدوات الذكاء الاصطناعي في الدراسة والبحث السريري.',
    fullDescription: 'ورشة متخصصة مدتها 3 ساعات مع المهندسة ريمان الشهري، تركز على محاكاة التشريح ثلاثي الأبعاد والتحليل والتشخيص ومساعدات المذاكرة المتقدمة.',
    objectives: [
      'استخدام NotebookLM و Perplexity في تلخيص واستخراج الأبحاث الطبية',
      'استخدام برامج محاكاة التشريح ثلاثية الأبعاد (Complete Anatomy / Visible Body)',
      'الاستفادة من منصات التحليل والتشخيص الطبي المرجعية وأدوات الحفظ الذكي (Anki AI)'
    ],
    defaultLocationLevel: 'قطاع غزة',
    featured: true,
    editions: [
      {
        id: 'ai-doctor-upcoming-1',
        editionName: 'ورشة الطبيب الذكي (النسخة الأولى)',
        regionKey: 'all_gaza',
        displayLocation: 'قطاع غزة',
        dateRange: 'قريباً (قيد الإعلان)',
        dateConfirmed: false,
        sessionsCount: 1,
        hoursTotal: 3,
        trainerName: 'م. ريمان الشهري',
        notes: 'ورشة مميزة مدتها 3 ساعات لطلبة التخصصات الطبية.'
      }
    ]
  }
].map((p) => ProgramSchema.parse(p));
