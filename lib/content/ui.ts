import type { Locale } from '@/lib/i18n'

/** Every interface string on the site, per language. Page content (bio, projects...) lives in lib/content/*. */
const en = {
  name: 'Hidaya Thaher',
  role: 'Interior Designer',
  roleLocation: 'Interior Designer · Nablus, Palestine',
  nav: {
    about: 'About', projects: 'Projects', services: 'Services', experience: 'Experience', contact: 'Contact',
    main: 'Main navigation', mobile: 'Mobile navigation', footer: 'Footer navigation',
    toLight: 'Switch to light theme', toDark: 'Switch to dark theme',
    openMenu: 'Open menu', closeMenu: 'Close menu', downloadCv: 'Download CV',
    switchLanguage: 'العربية', switchLanguageLabel: 'اقرأ الموقع بالعربية',
  },
  hero: {
    line1: 'Crafting Spaces', line2: 'That Breathe',
    intro: 'I design interiors that tell stories — spaces where architecture, material, and light work together to create experiences worth remembering.',
    ctaPortfolio: 'View Portfolio', ctaTalk: "Let's Talk",
    currently: 'Currently', available: 'Available for Projects', open: 'Open for collaboration',
    scroll: 'Scroll', scrollLabel: 'Scroll to projects',
  },
  about: {
    label: 'About', title: 'The Designer Behind the Work',
    languages: 'Languages', native: 'Native', professional: 'Professional',
    expertise: 'Areas of Expertise', interests: 'Interests',
    downloadCv: 'Download CV', contact: 'Get in Touch', viewProjects: 'View Projects',
  },
  projects: {
    label: 'Portfolio', title: 'Selected Works',
    subtitle: 'Interior design projects across residential, commercial, retail and hospitality spaces, presented as 3D visualizations.',
    all: 'All', filterLabel: 'Filter projects by category', viewProject: 'View Project', viewAll: 'View All Interior Design Projects',
    featured: 'Featured',
  },
  services: {
    label: 'Services', title: 'What I Offer',
    subtitle: 'Interior design and 3D visualization services for clients who believe their environment shapes their life.',
    ready: 'Ready to transform your space?', start: 'Start a Project',
  },
  skills: {
    label: 'Skills', title: 'Craft Meets Technology',
    subtitle: 'A comprehensive skill set built across design thinking, digital tools, and project leadership.',
    design: 'Interior Design', designSub: 'Core Competencies',
    software: 'Software', softwareSub: 'Digital Toolset',
    business: 'Business', businessSub: 'Professional Skills',
    designSoftware: 'Design Software',
  },
  education: {
    label: 'Education', title: 'Academic Foundation',
    subtitle: 'A Bachelor of Interior Design from An-Najah National University, completed in three years.',
  },
  experience: {
    label: 'Experience', title: 'Professional Journey',
    subtitle: 'From a design studio and a custom doors company in Nablus to independent practice.',
    achievements: 'Key Achievements', skillsApplied: 'Skills Applied',
  },
  contact: {
    label: 'Contact', title: "Let's Create Together",
    subtitle: "Whether you have a project in mind or simply want to explore possibilities, I'd love to hear from you.",
    email: 'Email', phone: 'Phone', location: 'Location', remote: 'Available for remote projects',
    behance: 'Behance Portfolio', behanceCta: 'View Design Work', behanceLabel: 'Visit Behance profile',
    available: 'Available', availability: 'Currently accepting new residential and commercial projects.',
    nameLabel: 'Full Name *', namePh: 'Your name', emailLabel: 'Email *', emailPh: 'name@example.com',
    subjectLabel: 'Subject', subjectPh: 'Project inquiry, collaboration...',
    messageLabel: 'Message *', messagePh: 'Tell me about your project, space, and vision...',
    send: 'Send Message', sent: 'Email app opened', status: 'Your email app has been opened with your message.',
    mailSubject: 'Portfolio Inquiry', mailName: 'Name', mailEmail: 'Email',
  },
  footer: {
    tagline: 'Designing spaces that become timeless experiences, through thoughtful, human-centered design.',
    contact: 'Contact', navigation: 'Navigation', allProjects: 'All Projects',
    rights: 'All rights reserved.', madeWith: 'Made with', love: 'love', inPalestine: 'in Palestine',
  },
  crumbs: { home: 'Home', projects: 'Projects', label: 'Breadcrumb' },
  projectsPage: {
    metaTitle: 'Interior Design Projects',
    metaDescription:
      'Interior design projects by Hidaya Thaher — homes, bedrooms, kitchens, offices, retail stores, a bank and a restaurant — presented as 3D visualizations.',
    label: 'Portfolio', h1: 'Interior Design Projects',
    intro: '{n} interior design projects across residential, commercial, retail and hospitality spaces, each presented through 3D visualization.',
    cta: 'Discuss your project with Hidaya',
  },
  projectPage: {
    titleSuffix: 'Interior Design',
    metaDescription: '{subtitle}. 3D-rendered interior design concept by Hidaya Thaher.',
    category: 'Category', type: 'Project Type', presentation: 'Presentation', views: 'Views',
    renderings: '{n} renderings',
    overview: 'Overview', design: 'Design', highlights: 'Design Highlights',
    materialSelection: 'Material Selection', palette: 'Palette & Materials', colorPalette: 'Color palette: ',
    gallery: 'Gallery', galleryTitle: '{title} Renderings',
    ctaTitle: 'Planning a similar space?',
    ctaText: 'Hidaya designs residential and commercial interiors in Nablus and remotely, from space planning to photorealistic 3D visualization.',
    ctaButton: 'Contact Hidaya',
    more: 'More Work', related: 'Related Projects', allProjects: 'All interior design projects',
  },
  notFound: {
    title: 'Page Not Found', description: 'This page does not exist. Browse the interior design portfolio of Hidaya Thaher.',
    text: "The page you're looking for doesn't exist. Let's get you back to the portfolio.", back: 'Back to Home',
  },
  categories: { Residential: 'Residential', Commercial: 'Commercial', Hospitality: 'Hospitality', Retail: 'Retail' } as Record<string, string>,
  medium: '3D Visualization',
  servicePages: {
    label: 'Services',
    names: {
      'residential-interior-design': 'Residential Interior Design',
      'commercial-interior-design': 'Commercial Interior Design',
      '3d-visualization': '3D Interior Visualization',
    } as Record<string, string>,
    process: 'How I Work',
    otherServices: 'Other services',
    exploreService: 'See more {service}',
    relatedProjects: 'Projects in this service',
    allServicesHint: 'Service pages',
  },
}

export type UI = typeof en

/** Fill {placeholders} in a dictionary string: fmt('{n} renderings', { n: 8 }). Keeps the dictionary serializable. */
export const fmt = (s: string, vars: Record<string, string | number>) =>
  s.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? `{${k}}`))

const ar: UI = {
  name: 'هداية ظاهر',
  role: 'مصممة داخلية',
  roleLocation: 'مصممة داخلية · نابلس، فلسطين',
  nav: {
    about: 'نبذة عني', projects: 'المشاريع', services: 'الخدمات', experience: 'الخبرات', contact: 'تواصل',
    main: 'التنقل الرئيسي', mobile: 'قائمة التنقل', footer: 'روابط التذييل',
    toLight: 'التبديل إلى الوضع الفاتح', toDark: 'التبديل إلى الوضع الداكن',
    openMenu: 'فتح القائمة', closeMenu: 'إغلاق القائمة', downloadCv: 'تحميل السيرة الذاتية',
    switchLanguage: 'English', switchLanguageLabel: 'Read this page in English',
  },
  hero: {
    line1: 'أصمّم مساحاتٍ', line2: 'تتنفّس',
    intro: 'أصمّم مساحات داخلية تحكي قصصًا، تتكامل فيها العمارة والمواد والضوء لتصنع تجربة تبقى في الذاكرة.',
    ctaPortfolio: 'تصفّحوا المشاريع', ctaTalk: 'لنتحدّث',
    currently: 'حاليًا', available: 'متاحة لمشاريع جديدة', open: 'منفتحة على التعاون',
    scroll: 'للأسفل', scrollLabel: 'للأسفل: الانتقال إلى المشاريع',
  },
  about: {
    label: 'نبذة عني', title: 'المصممة وراء الأعمال',
    languages: 'اللغات', native: 'اللغة الأم', professional: 'مستوى مهني',
    expertise: 'مجالات الخبرة', interests: 'الاهتمامات',
    downloadCv: 'تحميل السيرة الذاتية', contact: 'تواصل معي', viewProjects: 'تصفّحوا المشاريع',
  },
  projects: {
    label: 'معرض الأعمال', title: 'أعمال مختارة',
    subtitle: 'مشاريع تصميم داخلي لمساحات سكنية وتجارية ومحلات ومطاعم، معروضة بتصاميم ثلاثية الأبعاد.',
    all: 'الكل', filterLabel: 'تصفية المشاريع حسب الفئة', viewProject: 'عرض المشروع', viewAll: 'عرض جميع مشاريع التصميم الداخلي',
    featured: 'مميّز',
  },
  services: {
    label: 'الخدمات', title: 'ما أقدّمه',
    subtitle: 'خدمات تصميم داخلي وتصوّر ثلاثي الأبعاد، من الفكرة وتخطيط المساحة حتى المخططات والمواصفات.',
    ready: 'هل تخطّطون لتصميم مساحتكم؟', start: 'لنبدأ مشروعكم',
  },
  skills: {
    label: 'المهارات', title: 'حِرفة تلتقي بالتقنية',
    subtitle: 'مهارات تجمع بين التفكير التصميمي والأدوات الرقمية وتنظيم العمل مع العملاء.',
    design: 'التصميم الداخلي', designSub: 'الكفاءات الأساسية',
    software: 'البرامج', softwareSub: 'الأدوات الرقمية',
    business: 'مهارات مهنية', businessSub: 'العمل مع العملاء',
    designSoftware: 'برامج التصميم',
  },
  education: {
    label: 'التعليم', title: 'الأساس الأكاديمي',
    subtitle: 'بكالوريوس التصميم الداخلي من جامعة النجاح الوطنية، أنجزته في ثلاث سنوات.',
  },
  experience: {
    label: 'الخبرات', title: 'المسيرة المهنية',
    subtitle: 'من استوديو تصميم وشركة أبواب حسب الطلب في نابلس إلى العمل المستقل.',
    achievements: 'أبرز الإنجازات', skillsApplied: 'المهارات المستخدمة',
  },
  contact: {
    label: 'تواصل', title: 'لنصمّم معًا',
    subtitle: 'سواء كان لديكم مشروع واضح أو فكرة تودّون استكشافها، يسعدني أن أسمع منكم.',
    email: 'البريد الإلكتروني', phone: 'الهاتف', location: 'الموقع', remote: 'متاحة أيضًا للمشاريع عن بُعد',
    behance: 'ملف Behance', behanceCta: 'شاهد أعمال التصميم', behanceLabel: 'زيارة ملف Behance',
    available: 'متاحة', availability: 'أستقبل حاليًا مشاريع سكنية وتجارية جديدة.',
    nameLabel: 'الاسم الكامل *', namePh: 'اسمكم', emailLabel: 'البريد الإلكتروني *', emailPh: 'name@example.com',
    subjectLabel: 'الموضوع', subjectPh: 'استفسار عن مشروع، تعاون...',
    messageLabel: 'الرسالة *', messagePh: 'حدّثوني عن مشروعكم ومساحتكم وما تتخيّلونه لها...',
    send: 'إرسال الرسالة', sent: 'تم فتح تطبيق البريد', status: 'تم فتح تطبيق البريد الإلكتروني مع رسالتك.',
    mailSubject: 'استفسار عبر الموقع', mailName: 'الاسم', mailEmail: 'البريد',
  },
  footer: {
    tagline: 'أصمّم مساحات تتحوّل إلى تجارب تدوم، بتصميم مدروس يضع الإنسان في المركز.',
    contact: 'تواصل', navigation: 'روابط', allProjects: 'جميع المشاريع',
    rights: 'جميع الحقوق محفوظة.', madeWith: 'صُنع بـ', love: 'حب', inPalestine: 'في فلسطين',
  },
  crumbs: { home: 'الرئيسية', projects: 'المشاريع', label: 'مسار التنقل' },
  projectsPage: {
    metaTitle: 'مشاريع تصميم داخلي',
    metaDescription:
      'مشاريع تصميم داخلي من تصميم هداية ظاهر في نابلس: غرف نوم ومطابخ وصالات ومكاتب ومحلات تجارية وبنك ومطعم، معروضة بتصاميم ثلاثية الأبعاد.',
    label: 'معرض الأعمال', h1: 'مشاريع التصميم الداخلي',
    intro: '{n} مشروعًا للتصميم الداخلي في مساحات سكنية وتجارية ومحلات ومطاعم، يُعرض كلٌّ منها بتصوّر ثلاثي الأبعاد.',
    cta: 'ناقش مشروعك مع هداية',
  },
  projectPage: {
    titleSuffix: 'تصميم داخلي',
    metaDescription: '{subtitle}. تصميم ثلاثي الأبعاد من هداية ظاهر، مصممة داخلية في نابلس.',
    category: 'الفئة', type: 'نوع المشروع', presentation: 'طريقة العرض', views: 'المشاهد',
    renderings: '{n} صور ثلاثية الأبعاد',
    overview: 'نظرة عامة', design: 'التصميم', highlights: 'أبرز عناصر التصميم',
    materialSelection: 'اختيار المواد', palette: 'الألوان والمواد', colorPalette: 'لوحة الألوان: ',
    gallery: 'معرض الصور', galleryTitle: 'صور {title} ثلاثية الأبعاد',
    ctaTitle: 'تخطّط لمساحة مشابهة؟',
    ctaText: 'تصمّم هداية مساحات سكنية وتجارية في نابلس وعن بُعد، من تخطيط المساحة حتى التصوّر ثلاثي الأبعاد الواقعي.',
    ctaButton: 'تواصل مع هداية',
    more: 'أعمال أخرى', related: 'مشاريع ذات صلة', allProjects: 'جميع مشاريع التصميم الداخلي',
  },
  notFound: {
    title: 'الصفحة غير موجودة', description: 'هذه الصفحة غير موجودة. تصفّح معرض أعمال التصميم الداخلي لهداية ظاهر.',
    text: 'الصفحة التي تبحث عنها غير موجودة. لنعد إلى معرض الأعمال.', back: 'العودة إلى الرئيسية',
  },
  categories: { Residential: 'سكني', Commercial: 'تجاري', Hospitality: 'مطاعم وضيافة', Retail: 'محلات تجارية' },
  medium: 'تصوّر ثلاثي الأبعاد',
  servicePages: {
    label: 'الخدمات',
    names: {
      'residential-interior-design': 'التصميم الداخلي للمنازل',
      'commercial-interior-design': 'التصميم الداخلي التجاري',
      '3d-visualization': 'التصميم الداخلي ثلاثي الأبعاد',
    },
    process: 'مراحل العمل',
    otherServices: 'خدمات أخرى',
    exploreService: 'المزيد عن {service}',
    relatedProjects: 'مشاريع ضمن هذه الخدمة',
    allServicesHint: 'صفحات الخدمات',
  },
}

const dictionaries: Record<Locale, UI> = { en, ar }
export const getUI = (locale: Locale): UI => dictionaries[locale]
