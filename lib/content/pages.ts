import type { Locale } from '@/lib/i18n'

/**
 * Service pages and the "How I work" page, in both languages. Each page owns one search intent
 * (see the keyword map): the home page owns "interior designer in Nablus"; these pages own
 * residential, commercial and 3D-visualization intents and the process/FAQ questions.
 * Facts are limited to what the owner confirmed: design and 3D only, no execution or supervision.
 */
export type Section = { heading: string; paragraphs: string[]; bullets: string[] }
export type QA = { q: string; a: string }

export type ServicePageContent = {
  metaTitle: string
  metaDescription: string
  h1: string
  intro: string[]
  sections: Section[]
  projectsHeading: string
  faqHeading: string
  faq: QA[]
  ctaTitle: string
  ctaText: string
  ctaButton: string
}

export type ProcessPageContent = {
  metaTitle: string
  metaDescription: string
  h1: string
  intro: string[]
  stepsHeading: string
  steps: { title: string; text: string }[]
  faqHeading: string
  faq: QA[]
  ctaTitle: string
  ctaText: string
  ctaButton: string
}

export const serviceSlugs = ['residential-interior-design', 'commercial-interior-design', '3d-visualization'] as const
export type ServiceSlug = (typeof serviceSlugs)[number]

/** Which real projects support each service page. */
export const serviceProjects: Record<ServiceSlug, string[]> = {
  'residential-interior-design': ['apartment-interior', 'kitchen-and-dining-nook', 'master-bedroom', 'bedroom-design', 'bathroom-design', 'kids-bedroom', 'boys-bedroom', 'lounge-seating-area', 'private-room'],
  'commercial-interior-design': ['restaurant-interior', 'cafe-interior', 'bakery-interior', 'clothing-store', 'bank-branch', 'art-supply-showroom', 'camera-store', 'work-office', 'parametric-reception'],
  '3d-visualization': ['restaurant-interior', 'kitchen-and-dining-nook', 'bank-branch', 'master-bedroom', 'parametric-reception', 'clothing-store'],
}

/** Service page that a project belongs to (for contextual links from project pages). */
export const serviceForCategory = (category: string): ServiceSlug =>
  category === 'Residential' ? 'residential-interior-design' : 'commercial-interior-design'

export const servicePages: Record<ServiceSlug, Record<Locale, ServicePageContent>> = {
  "residential-interior-design": {
    "en": {
      "metaTitle": "Residential Interior Design in Nablus",
      "metaDescription": "Hidaya Thaher designs apartments and homes in Nablus: space planning, kitchens, bedrooms, living areas and realistic 3D renders.",
      "h1": "Residential Interior Design in Nablus",
      "intro": [
        "I design apartments and family homes for clients in Nablus and, working remotely, for clients elsewhere. I start from how you actually live: who uses each room, what needs to be stored, where the family gathers and how you want the home to feel when you walk in.",
        "My work is design and 3D visualization. You receive a clear plan, a concept for each room, realistic renders, and the drawings and specifications your contractor needs, so the decisions are made on the page and on screen before anything is built."
      ],
      "sections": [
        {
          "heading": "What residential interior design includes",
          "paragraphs": [
            "Every home starts with a measured plan and a layout that suits the way your household moves. From there I develop the look of each room and show it in 3D, so you can judge proportions, materials and light before you commit to anything."
          ],
          "bullets": [
            "Space planning and furniture layouts for apartments and houses",
            "A concept for each room: colour, materials and lighting direction",
            "Realistic 3D renders from several viewpoints",
            "AutoCAD plans and drawings for the contractor of your choice",
            "Material, furniture and lighting selection with written specifications",
            "A styling plan for the details and accessories of the finished rooms"
          ]
        },
        {
          "heading": "Kitchens, living areas and bedrooms",
          "paragraphs": [
            "The kitchen often decides how a family apartment works, so I plan it as part of the whole layout: an open kitchen that connects to the dining and sitting areas, storage that matches how you cook, and a dining corner that belongs to the living space. My open kitchen with a dining nook and sofa seating, in charcoal, marble-look stone and warm wood, shows this approach.",
            "For living areas I think about how the family sits, how you receive guests and how the room changes between day and evening. My lounge seating area in warm wood, taupe and soft gold is shown in both daylight and evening light.",
            "Bedrooms get the same attention. My portfolio includes a master suite with a sitting area, vanity and walk-in closet, a calm boy's bedroom with a built-in study wall, and a shared kids' bedroom with a gaming zone. Each is a 3D concept designed around the person who will use the room."
          ],
          "bullets": []
        },
        {
          "heading": "Designing a bare-shell apartment before finishing",
          "paragraphs": [
            "If you have bought an apartment at the bare-shell (concrete) stage, or you are about to start finishing, it is a very good moment to design. Decisions about layout, ceilings, lighting and the kitchen are far easier to make on a drawing than after finishing work has begun.",
            "My part is the design package: a measured plan and space layout, a 3D concept for each room, lighting and ceiling direction, material and furniture specifications, and a renovation planning brief for your contractor. The contractor you choose builds from those documents, and technical engineering decisions stay with the engineers and the contractor working on your project."
          ],
          "bullets": []
        },
        {
          "heading": "Working from Nablus or remotely",
          "paragraphs": [
            "I meet clients in person within my Nablus service area and work remotely with clients elsewhere. Send me your plan or measurements, photos of the space and a few references you like, and we can begin."
          ],
          "bullets": []
        }
      ],
      "projectsHeading": "Residential projects in 3D",
      "faqHeading": "Residential design questions",
      "faq": [
        {
          "q": "Can you design just one room, such as the kitchen or the master bedroom?",
          "a": "Yes, I can design a single room or the whole apartment. A kitchen or a master bedroom is a good place to start, and I keep the design consistent with the rest of the home if you want to continue later."
        },
        {
          "q": "Can you design an apartment that is still bare-shell?",
          "a": "Yes, a bare-shell apartment is one of the easiest places to start because no finishing has begun yet. I prepare the plan, the 3D concept and the specifications first, so your contractor has clear documents to work from."
        },
        {
          "q": "Do you design children's and teenagers' bedrooms?",
          "a": "Yes, my portfolio includes a shared kids' bedroom with a gaming zone and a boy's bedroom with a built-in study wall, both as 3D concepts. I plan sleeping, study, storage and play together so the room works for the person who uses it."
        },
        {
          "q": "Can you help me choose furniture, materials and lighting?",
          "a": "Yes, I select and specify materials, furniture and lighting to match the design, so you know exactly what the design calls for when you shop. I do not purchase or deliver items on your behalf."
        },
        {
          "q": "Can you design an apartment I am renovating rather than a new one?",
          "a": "Yes, I can plan the renovation of an existing apartment. I work from your measurements and photos of the current space, propose a new layout and look, and prepare a renovation planning brief with drawings and specifications for your contractor."
        }
      ],
      "ctaTitle": "Planning a home or apartment in Nablus?",
      "ctaText": "Tell me about your space and send a plan or photos if you have them. I will reply with the next step.",
      "ctaButton": "Contact me"
    },
    "ar": {
      "metaTitle": "تصميم داخلي للمنازل والشقق في نابلس",
      "metaDescription": "تصميم داخلي وديكور شقق ومنازل في نابلس: توزيع المساحة والمطابخ وغرف النوم والصالون مع رندر ثلاثي الأبعاد واقعي من هداية ظاهر.",
      "h1": "تصميم داخلي للمنازل والشقق في نابلس",
      "intro": [
        "أنا هداية ظاهر، مصممة داخلية، وأصمّم الشقق والبيوت لعملاء في نابلس، وعن بُعد لعملاء في أماكن أخرى. أبدأ من تفاصيل حياتكم اليومية: من يستخدم كل غرفة، وما الذي يحتاج إلى تخزين، وأين تجتمع العائلة، وبماذا تريدون أن تشعروا عند دخول البيت.",
        "عملي تصميم وإظهار ثلاثي الأبعاد: مخطط واضح، وتصور تصميمي لكل غرفة، ورندر واقعي، ومخططات ومواصفات يتسلّمها المقاول الذي تختارونه. هكذا تُحسم القرارات على الورق وعلى الشاشة قبل أن يبدأ أي عمل في الموقع."
      ],
      "sections": [
        {
          "heading": "ماذا يشمل التصميم الداخلي للمنازل",
          "paragraphs": [
            "يبدأ كل بيت بمخطط دقيق بالقياسات الفعلية وتوزيع يناسب حركة العائلة اليومية. بعدها أطوّر شكل كل غرفة وأعرضه بتقنية 3D، لتقيّموا النِّسب والخامات والإضاءة بأنفسكم قبل أن تلتزموا بأي قرار."
          ],
          "bullets": [
            "تخطيط المساحة وتوزيع الأثاث في الشقق والبيوت",
            "تصور تصميمي لكل غرفة: الألوان والخامات واتجاه الإضاءة",
            "رندر ثلاثي الأبعاد واقعي من عدة زوايا",
            "مخططات AutoCAD للمقاول الذي تختارونه",
            "اختيار الخامات والأثاث والإضاءة مع مواصفات مكتوبة",
            "خطة تنسيق للتفاصيل والإكسسوارات"
          ]
        },
        {
          "heading": "تصميم المطبخ والصالون وغرف النوم",
          "paragraphs": [
            "المطبخ غالبًا هو ما يحدد كيف تعمل الشقة، لذلك أخطّطه كجزء من توزيعها كاملًا: مطبخ مفتوح على الصالة (أو ما يُعرف بالمطبخ الأمريكي) يتصل بزاوية الطعام وجلسة الصالون، وتخزين يناسب طريقتكم في الطبخ. وفي أعمالي رندر لمطبخ مفتوح مع سفرة وجلسة بدرجات الرمادي الفحمي والحجر الشبيه بالرخام والخشب الدافئ يوضح هذا الأسلوب.",
            "وفي غرفة الجلوس أنظر إلى طريقة جلوس العائلة واستقبالها للضيوف وكيف يتغير المكان بين النهار والمساء. ومنطقة القعدة في أعمالي بدرجات الخشب الدافئ والبيج الرمادي والذهبي الهادئ معروضة بإضاءة نهارية وأخرى مسائية.",
            "وغرف النوم تنال الاهتمام نفسه: غرفة نوم ماستر بزاوية جلوس وتسريحة وغرفة ملابس، وغرفة نوم ولد هادئة بجدار دراسة مدمج، وغرفة نوم أولاد مشتركة بركن ألعاب. كلها تصاميم ثلاثية الأبعاد مبنية على احتياجات من سيستخدم الغرفة."
          ],
          "bullets": []
        },
        {
          "heading": "تصميم شقة عظم قبل التشطيب",
          "paragraphs": [
            "إن اشتريتم شقة على العظم أو تستعدون لتشطيبها، فهذا وقت مناسب جدًا للتصميم؛ فقرارات التوزيع والأسقف والإضاءة والمطبخ أسهل بكثير على المخطط منها بعد بدء أعمال التشطيب.",
            "دوري هنا حزمة تصميم: مخطط دقيق وتوزيع للمساحة، وتصور ثلاثي الأبعاد لكل غرفة، واتجاه عام للإضاءة والأسقف، ومواصفات للخامات والأثاث، وملف تخطيط للتجديد تسلّمونه للمقاول. ويعمل المقاول الذي تختارونه اعتمادًا على هذه الوثائق، وتبقى القرارات الهندسية التقنية لدى المهندسين والمقاول في مشروعكم."
          ],
          "bullets": []
        },
        {
          "heading": "العمل من نابلس أو عن بُعد",
          "paragraphs": [
            "ألتقي بعملائي حضوريًا ضمن منطقة خدمتي في نابلس، وأعمل عن بُعد مع من هم في أماكن أخرى. أرسلوا لي المخطط أو القياسات وصور المكان وبعض المراجع التي تعجبكم، ونبدأ."
          ],
          "bullets": []
        }
      ],
      "projectsHeading": "مشاريع سكنية بتصميم ثلاثي الأبعاد",
      "faqHeading": "أسئلة عن التصميم الداخلي للمنازل",
      "faq": [
        {
          "q": "هل يمكن تصميم غرفة واحدة فقط، مثل المطبخ أو غرفة النوم؟",
          "a": "نعم، أصمّم غرفة واحدة أو الشقة كاملة. يمكنكم البدء بالمطبخ أو بغرفة النوم الرئيسية، وأُبقي التصميم منسجمًا مع بقية البيت إن رغبتم بإكماله لاحقًا."
        },
        {
          "q": "هل تصممين شقة على العظم قبل التشطيب؟",
          "a": "نعم، وشقة العظم من أسهل الحالات للبدء لأن التشطيب لم يبدأ فيها بعد. أجهّز المخطط والتصور ثلاثي الأبعاد والمواصفات أولًا، فيحصل المقاول على وثائق واضحة يعمل بها."
        },
        {
          "q": "هل تصممين غرف نوم الأولاد والشباب؟",
          "a": "نعم، في أعمالي غرفة نوم أولاد مشتركة بركن ألعاب وغرفة نوم ولد بجدار دراسة مدمج، وكلتاهما بتصميم ثلاثي الأبعاد. أخطّط النوم والدراسة والتخزين واللعب معًا ليناسب المكان من يستخدمه."
        },
        {
          "q": "هل تساعدين في اختيار الأثاث والخامات والإضاءة؟",
          "a": "نعم، أختار الخامات والأثاث والإضاءة بما يناسب التصميم وأكتب مواصفاتها، لتعرفوا بالضبط ما يتطلبه التصميم عند الشراء. لكنني لا أشتري القطع ولا أوصلها نيابة عنكم."
        },
        {
          "q": "هل تصممين شقة قائمة أريد تجديدها؟",
          "a": "نعم، أخطّط لتجديد شقة قائمة اعتمادًا على قياساتكم وصور وضعها الحالي، وأقترح توزيعًا وشكلًا جديدين. ثم أجهّز ملف تخطيط للتجديد بالمخططات والمواصفات ليعمل به المقاول الذي تختارونه."
        }
      ],
      "ctaTitle": "هل تخططون لتصميم بيتكم أو شقتكم في نابلس؟",
      "ctaText": "أخبروني عن مساحتكم، وأرسلوا المخطط أو الصور إن وُجدت، وسأردّ عليكم بالخطوة التالية.",
      "ctaButton": "تواصلوا معي"
    }
  },
  "commercial-interior-design": {
    "en": {
      "metaTitle": "Commercial Interior Design in Nablus",
      "metaDescription": "Hidaya Thaher designs shops, restaurants, offices, bank branches and reception areas in Nablus: layouts, drawings and realistic 3D renders.",
      "h1": "Commercial Interior Design for Shops, Restaurants and Offices",
      "intro": [
        "A commercial space has two jobs: it has to work every day for staff and customers, and it has to say something about the business the moment someone walks in. I design shops, restaurants and lounges, offices, bank branches and reception areas in Nablus and, remotely, for clients elsewhere.",
        "I work on design and 3D visualization: the layout, the concept, the materials and lighting, and realistic renders that let you and your team see the space before you commit to a contractor."
      ],
      "sections": [
        {
          "heading": "Retail: boutiques, camera stores and showrooms",
          "paragraphs": [
            "In retail, the layout is part of the selling. I plan the customer route, the display walls and plinths, the lighting that makes products read well, and the cash desk and storage behind them.",
            "My portfolio includes a curved white clothing boutique with gold-finish rails and arched niches, a dark camera store with rough-stone display plinths and a domed rotunda, and an art-supply showroom organised into category bays with a children's area and a workshop zone. All of them are 3D design concepts."
          ],
          "bullets": [
            "Customer route, display and cash-desk planning",
            "Display lighting and material studies",
            "Layout drawings showing display walls, shelving and counters"
          ]
        },
        {
          "heading": "Hospitality: restaurants, cafés and lounges",
          "paragraphs": [
            "A restaurant is judged on atmosphere before the first dish arrives. I plan seating, circulation, bar and service zones so the room works, then build the mood through colour, material and light.",
            "My classical restaurant and lounge concept brings together a dining hall, a bar and a glass-roofed lounge in cream, gold and burgundy. My café and coffee-retail interior and my bakery with seating apply the same approach to smaller food and beverage spaces."
          ],
          "bullets": []
        },
        {
          "heading": "Workplace and banking: offices, bank branches and reception areas",
          "paragraphs": [
            "Offices and bank branches need order: clear circulation, privacy where it matters and a welcoming first impression. My bank branch concept combines a banking hall with a teller line, glass offices and an ATM lobby in red, white and charcoal.",
            "My contemporary office concept moves from a reception lounge to an open workspace, a private office and a studio corner. A separate parametric reception design features a red stacked-fin desk, a ribbed white wall and a suspended ceiling sculpture."
          ],
          "bullets": []
        },
        {
          "heading": "What you receive",
          "paragraphs": [
            "I start by understanding your business, the number of staff or customers and how the space has to work. Then I prepare layout options, a concept with materials and lighting, renders of the key areas, AutoCAD drawings and written specifications.",
            "Because my service is design and visualization, the drawings and specifications are written so that the contractor or fit-out company of your choice can price and build from them."
          ],
          "bullets": [
            "Layout and space planning for the business",
            "Concept, materials and lighting direction",
            "3D renders of the key areas",
            "AutoCAD drawings and specifications for your contractor"
          ]
        }
      ],
      "projectsHeading": "Commercial projects in 3D",
      "faqHeading": "Commercial design questions",
      "faq": [
        {
          "q": "Can you design a shop, restaurant or office in Nablus?",
          "a": "Yes, I design retail, hospitality, workplace and banking interiors. My portfolio includes a 3D concept for each: a boutique, a camera store, an art-supply showroom, a classical restaurant, an office and a bank branch."
        },
        {
          "q": "Do you design reception areas?",
          "a": "Yes, I design reception areas and front desks, either as part of an office or branch or as a standalone space. That includes the desk, the wall treatment and ceiling features, shown in 3D."
        },
        {
          "q": "Who builds the space once the design is approved?",
          "a": "The contractor or fit-out company you choose. I provide the layout, renders, AutoCAD drawings and specifications they price and build from, but I do not carry out the building work myself."
        },
        {
          "q": "Can the design follow my brand colours?",
          "a": "Yes. If you have brand colours, a logo or references, I use them as the starting point for materials, colour and lighting. I design the interior, not the brand identity itself."
        },
        {
          "q": "Do you design cafés?",
          "a": "Yes. My portfolio includes a café and coffee-retail interior and a bakery with seating, both shown as 3D renders. A café follows the same logic as a restaurant: seating, circulation, a service counter and a mood built through material and light."
        }
      ],
      "ctaTitle": "Planning a shop, restaurant or office?",
      "ctaText": "Tell me about the space and the kind of business it will house. I will reply with the next step.",
      "ctaButton": "Contact me"
    },
    "ar": {
      "metaTitle": "تصميم داخلي لمحلات ومطاعم ومكاتب في نابلس",
      "metaDescription": "تصميم داخلي لمحلات ومطاعم ومقاهٍ ومكاتب شركات وفروع بنوك وريسبشن في نابلس: توزيع المساحة ومخططات AutoCAD ورندر ثلاثي الأبعاد.",
      "h1": "تصميم داخلي للمحلات التجارية والمطاعم والمكاتب في نابلس",
      "intro": [
        "للمساحة التجارية مهمتان: أن تخدم الموظفين والزبائن كل يوم، وأن تعبّر عن نشاطكم منذ لحظة الدخول. أصمّم محلات تجارية ومطاعم ومقاهي ومكاتب شركات وفروع بنوك ومناطق استقبال (ريسبشن) في نابلس، وعن بُعد لأصحاب الأعمال في أماكن أخرى.",
        "عملي تصميم وإظهار ثلاثي الأبعاد: التوزيع والتصور العام والخامات والإضاءة، مع رندر واقعي يتيح لكم ولفريقكم رؤية المكان قبل الاتفاق مع المقاول."
      ],
      "sections": [
        {
          "heading": "تصميم المحلات التجارية: بوتيك ومحل كاميرات تصوير ومعرض أدوات فنية",
          "paragraphs": [
            "في المحلات يكون التوزيع جزءًا من البيع نفسه. أخطّط مسار الزبون وجدران العرض وقواعد العرض، والإضاءة التي تُبرز المنتجات، ومنطقة الكاشير والتخزين خلفها.",
            "في أعمالي محل ملابس (بوتيك) أبيض بخطوط منحنية وقضبان عرض بتشطيب ذهبي وكوّات مقوّسة، ومحل كاميرات تصوير داكن بقواعد عرض من الحجر الخشن وقاعة دائرية بقبة، ومعرض أدوات فنية مقسّم إلى أقسام حسب الأصناف مع ركن للأطفال ومنطقة ورشة. وكلها تصاميم ثلاثية الأبعاد."
          ],
          "bullets": [
            "تخطيط مسار الزبون ومناطق العرض والكاشير",
            "دراسات الإضاءة والخامات لعرض المنتجات",
            "مخططات توزيع لجدران العرض والرفوف والكاونترات"
          ]
        },
        {
          "heading": "تصميم المطاعم والمقاهي",
          "paragraphs": [
            "أجواء المطعم هي أول ما يحكم عليه الزبون، قبل أن يصل الطبق الأول. أخطّط الجلسات والحركة ومنطقة البار والخدمة ليعمل المكان بسلاسة، ثم أبني الأجواء بالألوان والخامات والإضاءة.",
            "تصميمي لمطعم كلاسيكي مع جلسة بسقف زجاجي يجمع صالة طعام وبارًا وجلسة بسقف زجاجي بدرجات الكريمي والذهبي والعنابي. وأعتمد الأسلوب نفسه في تصميم المقهى وركن بيع القهوة، وفي تصميم المخبز بمنطقة الجلوس ضمن أعمالي."
          ],
          "bullets": []
        },
        {
          "heading": "تصميم المكاتب وفروع البنوك والريسبشن",
          "paragraphs": [
            "تحتاج المكاتب والبنوك إلى نظام: حركة واضحة، وخصوصية حيث يلزم، وانطباع أول مرحّب. ففرع البنك في أعمالي يضم صالة خدمة عملاء بصف من كاونترات الصندوق ومكاتب زجاجية ومنطقة للصراف الآلي بدرجات الأحمر والأبيض والفحمي.",
            "أما المكتب العصري فينتقل من جلسة استقبال إلى مساحة عمل مفتوحة ومكتب خاص وركن استوديو. وتصميم الريسبشن الباراميتريك يضم كاونتر استقبال أحمر من شرائح عمودية متراصة، وجدارًا أبيض مخدّدًا، ومنحوتة معلّقة في السقف."
          ],
          "bullets": []
        },
        {
          "heading": "ماذا تتسلمون",
          "paragraphs": [
            "أبدأ بفهم نشاطكم وعدد الموظفين أو الزبائن وطريقة عمل المكان، ثم أقدّم خيارات للتوزيع وتصورًا بالخامات والإضاءة، ورندر للمناطق الرئيسية، ومخططات AutoCAD ومواصفات مكتوبة.",
            "وبما أن خدمتي هي التصميم والإظهار، أكتب المخططات والمواصفات بحيث يستطيع المقاول أو شركة التشطيب والتجهيز التي تختارونها تسعير العمل وتنفيذه بناءً عليها."
          ],
          "bullets": [
            "توزيع وتخطيط للمساحة بحسب نشاطكم",
            "تصور تصميمي وخامات واتجاه للإضاءة",
            "رندر ثلاثي الأبعاد للمناطق الرئيسية",
            "مخططات AutoCAD ومواصفات للمقاول"
          ]
        }
      ],
      "projectsHeading": "مشاريع تجارية بتصميم ثلاثي الأبعاد",
      "faqHeading": "أسئلة عن التصميم الداخلي التجاري",
      "faq": [
        {
          "q": "هل تصممين محلًا أو مطعمًا أو مكتبًا في نابلس؟",
          "a": "نعم، أصمّم مساحات تجارية ومطاعم ومكاتب وفروع بنوك. وفي أعمالي تصميم ثلاثي الأبعاد لكل نوع منها: بوتيك، ومحل كاميرات تصوير، ومعرض أدوات فنية، ومطعم كلاسيكي، ومكتب، وفرع بنك."
        },
        {
          "q": "هل تصممين الريسبشن ومناطق الاستقبال؟",
          "a": "نعم، أصمّم الريسبشن وكاونتر الاستقبال ضمن مكتب أو فرع، أو كمساحة مستقلة. يشمل ذلك الكاونتر وتكسية الجدار وعناصر السقف، مع إظهارها بتقنية 3D."
        },
        {
          "q": "من يبني المكان بعد اعتماد التصميم؟",
          "a": "المقاول أو شركة التشطيب والتجهيز التي تختارونها. أقدّم التوزيع والرندر ومخططات AutoCAD والمواصفات التي يعتمدون عليها في التسعير والعمل، ولا أتولى أعمال البناء نفسها."
        },
        {
          "q": "هل يمكن أن يتبع التصميم ألوان علامتنا التجارية؟",
          "a": "نعم، أبدأ من ألوان علامتكم وشعاركم والمراجع التي لديكم عند اختيار الخامات والألوان والإضاءة. لكنني أصمّم المساحة الداخلية ولا أصمّم الهوية البصرية نفسها."
        },
        {
          "q": "هل تصممين المقاهي؟",
          "a": "نعم، في أعمالي تصميم لمقهى وركن لبيع القهوة وتصميم لمخبز بمنطقة جلوس، وكلاهما بتصوّر ثلاثي الأبعاد. ويتبع المقهى منطق المطعم نفسه: الجلسات والحركة وكاونتر الخدمة وأجواء تُبنى بالخامات والإضاءة."
        }
      ],
      "ctaTitle": "هل لديكم محل أو مطعم أو مكتب تريدون تصميمه؟",
      "ctaText": "أخبروني عن المكان ونوع النشاط الذي سيحتضنه، وسأردّ عليكم بالخطوة التالية.",
      "ctaButton": "تواصلوا معي"
    }
  },
  "3d-visualization": {
    "en": {
      "metaTitle": "3D Interior Visualization and Renders",
      "metaDescription": "Realistic 3D interior renders from an interior designer in Nablus, built from AutoCAD plans, 3ds Max models, V-Ray rendering and Photoshop finishing.",
      "h1": "3D Interior Visualization and Renders",
      "intro": [
        "A 3D render lets you see an interior before it exists, with the layout, materials and lighting of your own space. I create my renders myself, as the interior designer who made the design decisions, so what you see is a considered design and not a generic picture.",
        "I produce renders for homes, shops, restaurants, offices and bank branches, working in person within my Nablus service area and remotely with clients elsewhere."
      ],
      "sections": [
        {
          "heading": "How a render is made: from plan to image",
          "paragraphs": [
            "Every render begins as a plan, not as a picture. I draw the space in AutoCAD, model it in 3ds Max, light and render it in V-Ray, and finish the images in Photoshop. This is the same pipeline behind the projects in my portfolio, from bedrooms to a bank branch."
          ],
          "bullets": [
            "AutoCAD: the measured plan that fixes dimensions and layout",
            "3ds Max: the 3D model of the room, furniture, joinery and fittings, built to those dimensions",
            "V-Ray: lighting, materials and camera views, rendered into realistic images",
            "Photoshop: post-production, from tone and colour balance to final touches"
          ]
        },
        {
          "heading": "What you receive",
          "paragraphs": [
            "You receive several views of each key space, so you understand it from different positions and not from one flattering angle. Where it helps a decision, I also show lighting or material studies, such as the same room in daylight and in evening light."
          ],
          "bullets": [
            "Several views of the main spaces",
            "Lighting studies, such as daylight and evening versions of a room, where they help",
            "Material and colour studies",
            "Plans and drawings that match the renders",
            "Adjustments to the design based on your feedback"
          ]
        },
        {
          "heading": "Why decide with a render before you buy or build",
          "paragraphs": [
            "Plans are accurate but hard to read for anyone who does not work with them every day. A render shows scale, colour, light and atmosphere, so you, your family or your business partners can react to something concrete.",
            "Changing a material or a layout in 3D is far easier than changing it once building has started."
          ],
          "bullets": [
            "Compare layout and material options before buying",
            "Spot problems with proportions or circulation early",
            "Give your contractor a clear visual reference next to the drawings",
            "Bring family members or partners to agreement on one design"
          ]
        },
        {
          "heading": "Design and visualization together",
          "paragraphs": [
            "Because I design the space and then visualize it, the room is planned for use and light first and pictured second. What you see in a render is a set of real design decisions: layout, materials, furniture and lighting."
          ],
          "bullets": []
        }
      ],
      "projectsHeading": "Projects shown in 3D",
      "faqHeading": "3D visualization questions",
      "faq": [
        {
          "q": "What is a render in interior design?",
          "a": "A render is a realistic, computer-generated image of an interior that has been designed but not yet built. It is produced from a 3D model in which materials, lights and cameras are set up, so it shows how the space will look and feel. It lets you judge a design before anything is bought or built."
        },
        {
          "q": "What is the difference between a plan and a render?",
          "a": "A plan is a flat drawing of the space, to scale and seen from above, while a render is a realistic image of the space from a chosen viewpoint, usually at eye level. The plan tells the contractor what goes where and at what size; the render shows you the colours, materials, light and atmosphere. I provide both because each answers a different question."
        },
        {
          "q": "Which software do you use to create renders?",
          "a": "I model in 3ds Max, render in V-Ray and finish the images in Photoshop, working from AutoCAD plans. These are the same tools behind the projects in my portfolio."
        },
        {
          "q": "Can I see my space from more than one angle?",
          "a": "Yes, I prepare several views of the key spaces. Where it helps, I add lighting or material studies, such as daylight and evening versions of the same room."
        },
        {
          "q": "Will the finished space look exactly like the render?",
          "a": "Close, but not identical. A render is a visualization of the design, not a guarantee of the built result. Real materials, on-site lighting and the way the space is built can look slightly different from the screen, so I recommend checking physical samples of the key finishes before you buy."
        },
        {
          "q": "What do you need from me to start a 3D visualization?",
          "a": "I need plans or measurements of the space, photos of it, and any furniture or finishes you have already chosen, so I can model them accurately. References you like help me set the style. With those I can set up the plan in AutoCAD and begin modelling."
        }
      ],
      "ctaTitle": "Want to see your space in 3D?",
      "ctaText": "Send me your plan or a few photos and tell me what you are planning. I will reply with the next step.",
      "ctaButton": "Contact me"
    },
    "ar": {
      "metaTitle": "تصميم داخلي ثلاثي الأبعاد ورندر",
      "metaDescription": "رندر داخلي واقعي وتصميم ثلاثي الأبعاد من مصممة داخلية في نابلس: مخطط AutoCAD ونموذج 3ds Max وإخراج V-Ray ولمسات Photoshop.",
      "h1": "تصميم داخلي ثلاثي الأبعاد ورندر واقعي",
      "intro": [
        "الرندر صورة واقعية تُظهر لكم المكان قبل أن يُبنى، بتوزيعه وخاماته وإضاءته الفعلية. أُعدّ الرندر بنفسي، بصفتي المصممة التي اتخذت قرارات التصميم، فما ترونه تصميم مدروس وليس صورة عامة جاهزة.",
        "أقدّم رندرًا داخليًا واقعيًا وتصميمًا ثلاثي الأبعاد للبيوت والمحلات والمطاعم والمكاتب وفروع البنوك، بلقاءات حضورية في نابلس وعن بُعد مع عملاء في أماكن أخرى."
      ],
      "sections": [
        {
          "heading": "كيف يُصنع الرندر: من المخطط إلى الصورة",
          "paragraphs": [
            "كل رندر يبدأ بمخطط وليس بصورة. أرسم المساحة في AutoCAD، وأبني نموذجها ثلاثي الأبعاد في 3ds Max، وأضبط الإضاءة والخامات وزوايا الكاميرا وأُنتج الصور في V-Ray، ثم أعالجها وأضع لمساتها الأخيرة في Photoshop. وهذه المراحل نفسها خلف مشاريع معرض أعمالي، من غرف النوم إلى فرع البنك."
          ],
          "bullets": [
            "AutoCAD: المخطط الدقيق الذي يثبّت الأبعاد والتوزيع",
            "3ds Max: النموذج ثلاثي الأبعاد للغرفة والأثاث والنجارة والتجهيزات بحسب تلك الأبعاد",
            "V-Ray: الإضاءة والخامات وزوايا الكاميرا، ثم إنتاج صور واقعية",
            "Photoshop: معالجة الصور بعد الرندر، من توازن الألوان إلى اللمسات النهائية"
          ]
        },
        {
          "heading": "ماذا تتسلمون",
          "paragraphs": [
            "تتسلمون صورًا من عدة زوايا لكل مساحة رئيسية لتفهموا المكان من أكثر من موضع، وليس من زاوية واحدة جميلة. وحين يفيد ذلك في اتخاذ القرار أعرض دراسات للإضاءة أو الخامات، مثل الغرفة نفسها في ضوء النهار وفي إضاءة المساء."
          ],
          "bullets": [
            "عدة زوايا للمساحات الرئيسية",
            "دراسات إضاءة، مثل نسخة نهارية وأخرى مسائية للغرفة، حيث تفيد",
            "دراسات للخامات والألوان",
            "مخططات متوافقة مع الرندر",
            "تعديلات على التصميم بحسب ملاحظاتكم"
          ]
        },
        {
          "heading": "لماذا تقررون بالرندر قبل الشراء أو البناء",
          "paragraphs": [
            "المخطط دقيق لكنه صعب القراءة لمن لا يتعامل معه يوميًا. أما الرندر فيُظهر الحجم واللون والضوء والأجواء، فتتفاعلون أنتم وعائلتكم أو شركاؤكم مع شيء ملموس.",
            "وتغيير خامة أو توزيع على الشاشة أسهل بكثير من تغييره بعد بدء العمل في الموقع."
          ],
          "bullets": [
            "مقارنة خيارات التوزيع والخامات قبل الشراء",
            "اكتشاف مشكلات النِّسب والحركة مبكرًا",
            "مرجع بصري واضح للمقاول بجانب المخططات",
            "اتفاق أفراد العائلة أو الشركاء على تصميم واحد"
          ]
        },
        {
          "heading": "تصميم وإظهار معًا",
          "paragraphs": [
            "لأنني أصمّم المساحة ثم أُظهرها، يُخطَّط المكان أولًا للاستخدام والإضاءة ثم يُصوَّر. وما ترونه في الرندر هو قرارات تصميمية فعلية: توزيع وخامات وأثاث وإضاءة، وليس مجرد صورة جميلة."
          ],
          "bullets": []
        }
      ],
      "projectsHeading": "مشاريع معروضة بتقنية 3D",
      "faqHeading": "أسئلة عن التصميم ثلاثي الأبعاد",
      "faq": [
        {
          "q": "ما هو الرندر في التصميم الداخلي؟",
          "a": "الرندر صورة واقعية يولّدها الكمبيوتر لمساحة داخلية صُمّمت ولم تُبنَ بعد. تُنتَج من نموذج ثلاثي الأبعاد تُضبط فيه الخامات والإضاءة وزوايا الكاميرا، فتُظهر شكل المكان وأجواءه. وهي تتيح لكم تقييم التصميم قبل شراء أي شيء أو بدء أي عمل."
        },
        {
          "q": "ما الفرق بين المخطط والرندر؟",
          "a": "المخطط رسم فني مسطّح بمقياس رسم يُظهر المكان من الأعلى، أما الرندر فصورة واقعية للمكان من زاوية رؤية محددة، غالبًا بمستوى نظر الإنسان. يخبر المخطط المقاول أين يوضع كل عنصر وبأي قياس، ويُريكم الرندر الألوان والخامات والإضاءة والأجواء. أقدّم الاثنين لأن كلًّا منهما يجيب عن سؤال مختلف."
        },
        {
          "q": "ما البرامج التي تستخدمينها في إعداد الرندر؟",
          "a": "أبني النموذج ثلاثي الأبعاد في 3ds Max وأُنتج الصور في V-Ray وأعالجها في Photoshop، وأعمل من مخططات AutoCAD. وهي الأدوات نفسها خلف مشاريع معرض أعمالي."
        },
        {
          "q": "هل أستطيع رؤية المكان من أكثر من زاوية؟",
          "a": "نعم، أجهّز عدة زوايا للمساحات الرئيسية. وحين يلزم أضيف دراسات للإضاءة أو الخامات، مثل نسخة نهارية وأخرى مسائية للغرفة نفسها."
        },
        {
          "q": "هل سيكون المكان بعد البناء مطابقًا للرندر تمامًا؟",
          "a": "قريبًا منه، لكن ليس مطابقًا تمامًا. الرندر تصور مرئي للتصميم وليس ضمانًا للنتيجة النهائية، فقد تختلف الخامات الحقيقية والإضاءة في الموقع وطريقة بناء المقاول قليلًا عمّا تراه على الشاشة، لذلك أنصح بمعاينة عيّنات فعلية للتشطيبات الأساسية قبل الشراء."
        },
        {
          "q": "ماذا تحتاجين مني لبدء التصميم ثلاثي الأبعاد؟",
          "a": "أحتاج مخططات المكان أو قياساته، وصورًا له، وأي أثاث أو تشطيبات اخترتموها مسبقًا لأضعها في النموذج ثلاثي الأبعاد بدقة. والمراجع التي تعجبكم تساعدني على تحديد الأسلوب. بهذه المعلومات أُعدّ المخطط في AutoCAD وأبدأ بناء النموذج."
        }
      ],
      "ctaTitle": "هل تريدون رؤية مساحتكم بتقنية 3D؟",
      "ctaText": "أرسلوا لي المخطط أو بعض الصور وأخبروني بما تخططون له، وسأردّ عليكم بالخطوة التالية.",
      "ctaButton": "تواصلوا معي"
    }
  }
}

export const processPage: Record<Locale, ProcessPageContent> = {
  "en": {
    "metaTitle": "How I Work: Design Process and FAQ",
    "metaDescription": "How an interior design project with Hidaya Thaher works, from brief and plan to 3D renders and contractor drawings, with answers to common questions.",
    "h1": "How I Work",
    "intro": [
      "Every project follows a clear path, from the first brief to the drawings your contractor works from. My service is design and 3D visualization, so the steps below show exactly what I do and what stays with you and your contractor."
    ],
    "stepsHeading": "The steps of a design project",
    "steps": [
      {
        "title": "Brief and site information",
        "text": "We talk about the space, who uses it, how it should feel and what you need from it. You send me what you have: measurements or plans, photos of the space, references you like, a budget range and your timeline wishes."
      },
      {
        "title": "Measured plan and space planning",
        "text": "I build an accurate plan in AutoCAD from your measurements and test layout options, looking at circulation, furniture, storage and light until the layout works."
      },
      {
        "title": "Concept and mood",
        "text": "I develop the design direction: colour palette, materials, furniture and lighting mood, presented visually so we agree on the character of the space before modelling begins."
      },
      {
        "title": "3D renders and revisions",
        "text": "I model the space in 3ds Max, render it in V-Ray and finish the images in Photoshop. You review the views, tell me what to adjust, and I refine the design with you."
      },
      {
        "title": "Drawings and specifications",
        "text": "I prepare the AutoCAD drawings, the material and furniture specifications and a renovation planning brief. These go to the contractor of your choice, who builds from them. That is where my part of the project ends."
      }
    ],
    "faqHeading": "Frequently asked questions",
    "faq": [
      {
        "q": "What does an interior designer do?",
        "a": "An interior designer plans how a space works and how it looks, from layout and circulation to materials, furniture and lighting. I turn your needs into a plan, a concept, 3D renders and drawings, so the space is resolved on paper before it is built. My service is design and visualization; I do not do the building work."
      },
      {
        "q": "What is the difference between interior design and decor?",
        "a": "Interior design plans the whole space, including layout, function, materials, lighting and furniture, while decor is the finishing layer of colour, accessories and styling. In everyday speech people often use the two words interchangeably, but the difference matters in practice: good decor depends on the layout and lighting underneath it, which is why I start with the design and finish with the styling."
      },
      {
        "q": "Do you supervise or carry out the work on site?",
        "a": "No, I provide design and 3D visualization only: concepts, layouts, renders, AutoCAD drawings and specifications. The contractor you choose builds from those documents, and I do not supervise sites, purchase materials or deliver turnkey projects."
      },
      {
        "q": "How is a quote determined?",
        "a": "A quote depends on the size of the space, the number of rooms and the deliverables you need, such as renders, drawings and specifications. I do not list fixed prices because every project is different. Send me your plan or a description of the space and I will prepare a quote for your project."
      },
      {
        "q": "Do you work remotely or outside Nablus?",
        "a": "Yes, I can work remotely with clients anywhere, using your measurements, photos and references, and we communicate online. In-person meetings are available within the Nablus service area."
      },
      {
        "q": "What should I prepare before the first meeting?",
        "a": "Have ready measurements or a plan of the space if you have them, photos, a few references you like, a budget range and your timeline wishes. You do not need everything before we talk, and I will tell you what is still missing."
      },
      {
        "q": "People often say 'مهندسة ديكور'. Is that the same as an interior designer?",
        "a": "In everyday speech many people use it to mean an interior designer, but I am an interior designer, not an engineer. My degree is a Bachelor of Interior Design from An-Najah National University, so I describe myself as an interior designer (مصممة داخلية). Structural and technical engineering remain the work of engineers."
      }
    ],
    "ctaTitle": "Ready to talk about your space?",
    "ctaText": "Send me a message with a short description of your project, and a plan or photos if you have them. I will reply with the next step.",
    "ctaButton": "Contact me"
  },
  "ar": {
    "metaTitle": "مراحل العمل والأسئلة الشائعة",
    "metaDescription": "كيف يسير مشروع التصميم الداخلي مع هداية ظاهر: من المعلومات والمخطط إلى الرندر والمواصفات للمقاول، مع إجابات عن الأسئلة الشائعة.",
    "h1": "مراحل العمل والأسئلة الشائعة",
    "intro": [
      "يمرّ كل مشروع بمراحل واضحة، من الاستماع إلى احتياجاتكم حتى المخططات التي يعمل بها مقاولكم. خدمتي هي التصميم والإظهار ثلاثي الأبعاد، وتبيّن الخطوات التالية بالضبط ما أقوم به وما يبقى على عاتقكم وعاتق المقاول."
    ],
    "stepsHeading": "مراحل مشروع التصميم",
    "steps": [
      {
        "title": "المعلومات الأولية والاحتياجات",
        "text": "نتحدث عن المساحة ومن يستخدمها وكيف تريدونها أن تبدو وما تحتاجون إليه منها. وترسلون لي ما لديكم: قياسات أو مخططات، وصورًا للمكان، ومراجع تعجبكم، ونطاقًا تقريبيًا للميزانية، والموعد الذي تفضّلون إنجاز المشروع فيه."
      },
      {
        "title": "المخطط الدقيق وتوزيع المساحة",
        "text": "أرسم مخططًا دقيقًا في AutoCAD بناءً على قياساتكم، وأجرّب خيارات للتوزيع، فأدرس الحركة والأثاث والتخزين والإضاءة حتى يستقيم التوزيع."
      },
      {
        "title": "فكرة التصميم والأجواء",
        "text": "أحدّد اتجاه التصميم: لوحة الألوان والخامات والأثاث وأجواء الإضاءة، وأعرضها بصريًا لنتفق على طابع المكان قبل البدء ببناء النموذج ثلاثي الأبعاد."
      },
      {
        "title": "الرندر ثلاثي الأبعاد والتعديلات",
        "text": "أبني نموذج المكان في 3ds Max وأُنتج الصور في V-Ray وأعالجها في Photoshop. تراجعون الزوايا وتخبرونني بما تريدون تعديله، وأطوّر التصميم معكم."
      },
      {
        "title": "المخططات والمواصفات للمقاول",
        "text": "أُعدّ مخططات AutoCAD ومواصفات الخامات والأثاث وملف تخطيط للتجديد، وتسلّمونها للمقاول الذي تختارونه ليعمل بها. وهنا ينتهي دوري في المشروع."
      }
    ],
    "faqHeading": "الأسئلة الشائعة",
    "faq": [
      {
        "q": "ماذا تفعل المصممة الداخلية؟",
        "a": "تخطّط المصممة الداخلية لكيفية عمل المكان وشكله، من التوزيع والحركة إلى الخامات والأثاث والإضاءة. أحوّل احتياجاتكم إلى مخطط وتصور ورندر ثلاثي الأبعاد ومخططات، ليكون المكان محسومًا على الورق قبل البناء. وخدمتي هي التصميم والإظهار، ولا أقوم بأعمال البناء."
      },
      {
        "q": "ما الفرق بين التصميم الداخلي والديكور؟",
        "a": "التصميم الداخلي يخطّط المكان كله: التوزيع والوظيفة والخامات والإضاءة والأثاث، أما الديكور فهو الطبقة الأخيرة من الألوان والإكسسوارات والتنسيق. وفي الكلام اليومي كثيرًا ما يُستعمل اللفظان بمعنى واحد، لكن الفرق مهم عند التخطيط: ينجح الديكور حين يقوم على توزيع وإضاءة سليمين، لذلك أبدأ بالتصميم وأنتهي بالتنسيق."
      },
      {
        "q": "هل تشرفين على العمل في الموقع أو تنفّذينه؟",
        "a": "لا، أقدّم التصميم والإظهار ثلاثي الأبعاد فقط: التصور والتوزيع والرندر ومخططات AutoCAD والمواصفات. يعمل المقاول الذي تختارونه بهذه الوثائق، ولا أتولى الإشراف على الموقع ولا شراء المواد ولا تسليم المشاريع جاهزة (تسليم مفتاح)."
      },
      {
        "q": "كيف يُحدَّد عرض السعر؟",
        "a": "يعتمد عرض السعر على مساحة المكان وعدد الغرف والمخرجات المطلوبة، مثل الرندر والمخططات والمواصفات. لا أعرض أسعارًا ثابتة هنا لأن كل مشروع مختلف؛ أرسلوا لي المخطط أو وصفًا للمكان وسأجهّز لكم عرض سعر لمشروعكم."
      },
      {
        "q": "هل تعملين عن بُعد أو خارج نابلس؟",
        "a": "نعم، يمكنني العمل عن بُعد مع عملاء في أي مكان اعتمادًا على قياساتكم وصوركم ومراجعكم، ونتواصل عبر الإنترنت. أما اللقاءات الحضورية فتكون ضمن منطقة نابلس."
      },
      {
        "q": "ماذا أجهّز قبل اللقاء الأول؟",
        "a": "جهّزوا القياسات أو المخطط إن وُجد، وصور المكان، ومراجع تعجبكم، ونطاقًا تقريبيًا للميزانية، والموعد الذي تفضّلون إنجاز المشروع فيه. ليس لازمًا أن يكتمل كل شيء؛ سأخبركم بما ينقص."
      },
      {
        "q": "يقول كثيرون «مهندسة ديكور»، فهل هذا مثل مصممة داخلية؟",
        "a": "في الكلام اليومي يقصد كثيرون بـ«مهندسة ديكور» المصممة الداخلية، لكنني مصممة داخلية ولست مهندسة. شهادتي بكالوريوس في التصميم الداخلي من جامعة النجاح الوطنية، لذلك أعرّف نفسي بأنني مصممة داخلية. أما الأعمال الإنشائية والهندسية التقنية فيتولاها المهندسون."
      }
    ],
    "ctaTitle": "هل تريدون الحديث عن مساحتكم؟",
    "ctaText": "أرسلوا لي رسالة بوصف قصير لمشروعكم، ومعها المخطط أو الصور إن وُجدت، وسأردّ عليكم بالخطوة التالية.",
    "ctaButton": "تواصلوا معي"
  }
}
