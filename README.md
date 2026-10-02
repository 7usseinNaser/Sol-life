# 🩺 Soul Life Team | فريق سول لايف
### المنصة الرقمية الرسمية لمبادرة التدريب الطبي التخصصي في قطاع غزة

[![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-Restrained_3D-black?style=for-the-badge&logo=three.js)](https://threejs.org/)
[![License](https://img.shields.io/badge/License-Proprietary-red?style=for-the-badge)]()

---

## 🌟 نبذة عن المبادرة (About the Initiative)

**فريق سول لايف (Soul Life Team)** هو مبادرة شبابية طلابية رائدة وغير ربحية انطلقت من قلب قطاع غزة، أسسها نخبة من طلبة الطب والعلوم الصحية بهدف سد الفجوة بين التعليم الأكاديمي النظري والممارسة السريرية الميدانية في ظل الظروف الاستثنائية التي يمر بها القطاع الصحي في غزة.

يعمل الفريق عبر ثلاثة مراكز تدريب رئيسية:
- **شمال غزة (North Gaza)**
- **دير البلح - المنطقة الوسطى (Deir Al-Balah - Middle Area)**
- **خانيونس - مركز CBC التدريبي (Khan Younis - CBC Center)**

> ⚠️ **إخلاء مسؤولية طبي وتنظيمي (§3.1 BRD):**  
> فريق "سول لايف" هو مبادرة تدريبية وتثقيفية مجتمعية يقودها طلبة الطب، ولا يقدم خدمات طبية علاجية طارئة مباشرة، كما أن دوراته التدريبية موجهة لتطوير المهارات السريرية والتدريب المحاكي.

---

## ✨ الميزات والتجارب التفاعلية (Key Features)

- **تجربة تفاعلية بمستوى الجوائز الدولية (Awwwards/FWA Aesthetic):** واجهات عصرية تجمع بين الفخامة والبساطة، مع حركات وتفاعلات سينمائية تدعم اتجاه القراءة العربي (RTL) بشكل أصيل وكامل.
- **مشاهد التمرير القصصية (Signature Scroll Scenes):**
  - **مشهد وصول الفريق (Arrival Scene):** محاكاة تفاعلية ثلاثية المراحل لوصول الفريق الطبي بمركبتهم التدريبية وترجل أعضاء مجلس الإدارة.
  - **مشهد الفجوة السريرية (The Gap Scene):** تجسيد بصري يقارن بين الجدار النظري والتطبيق السريري الحي يربطهما نبض قلب تفاعلي.
  - **مشهد المناطق الثلاث (Three Regions Scene):** استعراض حي لمراكز العمليات الثلاثة في قطاع غزة بشعار *"ثلاث مناطق، نبض واحد"*.
- **مجسمات ثلاثية الأبعاد خفيفة ومنضبطة (Restrained 3D):**
  - مجسم **GlassHeart3D** للقلب الزجاجي التفاعلي مع حركة الماوس وألواح مدارية تدور حوله.
  - شريط تخطيط القلب المتموج **EcgRibbon3D**.
- **دليل البرامج والدورات الطبية:**
  - استعراض برامج الفريق التخصصية: الخياطة الجراحية المتقدمة، التغريز الجراحي، تركيب القسطرة والأنابيب، الإسعاف والطوارئ، مع تقارير وإحصائيات تفاعلية (Modal Reports).
- **التوثيق والشفافية:** صفحات تفصيلية لمجلس الإدارة، اللجان التخصصية الست، وراء الكواليس (Behind The Scenes)، المكتبة الرقمية الطبية، ومعرض الصور الميدانية الحية.
- **نماذج تواصل تفاعلية مع حماية وتحقق Zod:** نماذج مخصصة للتعاون المؤسسي ولانضمام المتطربين والمدربين.

---

## 🛠️ البنية التقنية (Technology Stack)

- **Framework:** [Next.js 15 (App Router)](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict Mode - 0 Type Errors)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Smooth Scrolling:** [@studio-freight/lenis](https://github.com/darkroomengineering/lenis)
- **Animations:** [Framer Motion / Motion](https://motion.dev/)
- **3D Engine:** [Three.js](https://threejs.org/) & React Three Fiber (Canvas-based)
- **Internationalization:** [next-intl](https://next-intl-docs.vercel.app/) (Arabic-first RTL)
- **Validation:** [Zod](https://zod.dev/)
- **Icons:** [Lucide React](https://lucide.dev/)

---

## 📁 هيكلية المشروع (Project Architecture)

```bash
sol-life/
├── src/
│   ├── actions/               # Server Actions (Contact, Collaborate)
│   ├── app/                   # Next.js App Router ([locale] nested routes)
│   │   ├── [locale]/
│   │   │   ├── page.tsx       # الصفحة الرئيسية التفاعلية
│   │   │   ├── about/         # من نحن ورؤية الفريق
│   │   │   ├── programs/      # البرامج والدورات التدريبية
│   │   │   ├── team/          # الهيئة الإدارية
│   │   │   ├── committees/    # اللجان الست التخصصية
│   │   │   ├── library/       # المكتبة الطبية الرقمية
│   │   │   ├── gallery/       # المعرض التوثيقي
│   │   │   ├── behind-the-scenes/ # كواليس العمل الميداني
│   │   │   ├── voices/        # شهادات المتدربين والشركاء
│   │   │   ├── collaborate/   # نموذج التعاون المؤسسي
│   │   │   └── contact/       # اتصل بالفريق
│   │   ├── robots.ts          # SEO Crawler Directives
│   │   └── sitemap.ts         # Dynamic XML Sitemap
│   ├── components/
│   │   ├── 3d/                # عناصر Three.js التفاعلية (GlassHeart3D, EcgRibbon3D)
│   │   ├── forms/             # نماذج التحقق (ContactForm, CollaborateForm)
│   │   ├── hero/              # Preloader, Hero Section, Region Carousel
│   │   ├── home/              # أقسام الصفحة الرئيسية (Vision, Courses, Marquee, CTA)
│   │   ├── layout/            # Navbar, MegaMenu, MobileDrawer, Footer
│   │   ├── motion/            # مكتبة الحركة (PulseLine, Lenis, RevealText, MagneticButton)
│   │   └── story/             # المشاهد القصصية المتقدمة (Arrival, TheGap, ThreeRegions)
│   ├── data/                  # هياكل البيانات وقوائم المحتوى الميداني
│   ├── i18n/                  # إعدادات التعريب وتوجيه اللغات
│   └── schemas/               # Zod Schemas للتحقق الصارم
├── messages/                  # ملفات الترجمة (ar.json)
├── public/                    # الوسائط والأصول الرقمية
└── README.md
```

---

## 🚀 التشغيل والتطوير المحلي (Getting Started)

### 1. المتطلبات المسبقة:
- Node.js 18.18+ أو 20+
- npm أو yarn أو pnpm

### 2. تثبيت الحزم:
```bash
npm install --legacy-peer-deps
```

### 3. تشغيل بيئة التطوير (Development):
```bash
npm run dev
```
افتح المتصفح على [http://localhost:3000](http://localhost:3000).

### 4. الفحص البرمجي والتحقق من الأنماط (Typecheck):
```bash
npm run typecheck
```

### 5. البناء والتشغيل بنسخة الإنتاج (Production Build):
```bash
npm run build
npm run start
```

---

## 👨‍💻 المطور الرئيسي للمنصة (Lead Platform Developer)

تمت هندسة وبناء وتطوير هذه المنصة الرقمية بالكامل بواسطة:
- **المطور:** **حسين محمد حسين ناصر (Hussein Mohammad Hussein Naser)**
- **الدور:** Lead Platform Architect & Full-Stack Developer
- **معايير التطوير:** مبني وفق وثيقة المتطلبات البرمجية الرسمية المعتمدة (BRD v5) مع صفر أخطاء برمجية (Zero TypeScript Errors) وبناء إنتاجي مستقر 100%.

---

## 📄 حقوق النشر والملكية (Copyright & Attribution)

جميع الحقوق محفوظة © فريق سول لايف (Soul Life Team) - قطاع غزة.  
تطوير وإشراف هندسي: **حسين محمد حسين ناصر**.
