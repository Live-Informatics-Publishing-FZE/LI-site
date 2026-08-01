export const langs = ['en', 'ar'] as const;
export type Lang = (typeof langs)[number];
export const dirOf = (l: Lang) => (l === 'ar' ? 'rtl' : 'ltr');

export const ui = {
  en: {
    about: 'About us', series: 'Series', parents: 'Students & parents',
    schools: 'Schools & learning centres', schoolsShort: 'Schools',
    news: 'News', contact: 'Contacts', archive: 'Archive',
    allSeries: 'All series', strand: 'Strand', strands: 'Strands',
    titles: 'titles', title: 'title', of: 'of', out: 'out',
    openSeries: 'Open a series', openStrand: 'Open a strand',
    goToSeries: 'Go to the series', sequence: 'Sequence',
    whatsInside: 'What is inside', age: 'Age', grade: 'Grade',
    pages: 'Pages', format: 'Format', binding: 'Binding',
    requestSchool: 'Request for a school', samplePages: 'Sample pages',
    available: 'Available', forthcoming: 'Forthcoming',
    inPreparation: 'In preparation', statusTbd: 'status TBD',
    titleTbd: '[title not yet chosen]', inPrep: 'In preparation',
    materials: 'Materials', section: 'Section', allInSection: 'All materials in this section',
    minRead: 'min read', officialInfo: 'Official information',
    publisher: 'The publisher', ourPosition: 'Our position',
    legalName: 'Legal name', legalForm: 'Legal form', founded: 'Founded',
    jurisdiction: 'Jurisdiction', licence: 'Licence no.', regNo: 'Registration no.',
    activities: 'Activities', address: 'Registered address',
    phone: 'Phone', website: 'Website', hours: 'Hours',
    contactUs: 'Contact us', enquiry: 'General enquiry',
    gap: 'The gap we close', eTextbook: 'E-textbook',
    trainers: 'Trainers', aiTutor: 'AI tutor', soon: 'soon',
    noStrands: 'No strands announced yet.',
    tips: 'Tips for parents', extras: 'Extra materials for children',
    teaching: 'Teaching materials', methodology: 'Articles on methodology'
  },
  ar: {
    about: 'من نحن', series: 'السلاسل', parents: 'للطلاب والآباء',
    schools: 'للمدارس ومراكز التعلّم', schoolsShort: 'للمدارس',
    news: 'الأخبار', contact: 'اتصل بنا', archive: 'الأرشيف',
    allSeries: 'كل السلاسل', strand: 'مسار', strands: 'المسارات',
    titles: 'إصدارات', title: 'إصدار', of: 'من', out: 'متوفر',
    openSeries: 'اختر سلسلة', openStrand: 'اختر مسارًا',
    goToSeries: 'إلى صفحة السلسلة', sequence: 'التسلسل',
    whatsInside: 'ما في الكتاب', age: 'العمر', grade: 'الصف',
    pages: 'الصفحات', format: 'القياس', binding: 'التجليد',
    requestSchool: 'طلب لمدرسة', samplePages: 'صفحات للمعاينة',
    available: 'متوفر', forthcoming: 'قريبًا',
    inPreparation: 'قيد الإعداد', statusTbd: 'الحالة غير محدّدة',
    titleTbd: '[العنوان قيد الاختيار]', inPrep: 'قيد الإعداد',
    materials: 'الموادّ', section: 'قسم', allInSection: 'كل الموادّ في القسم',
    minRead: 'دقائق', officialInfo: 'معلومات رسمية',
    publisher: 'عن الدار', ourPosition: 'موقفنا',
    legalName: 'الاسم القانوني', legalForm: 'الشكل القانوني', founded: 'سنة التأسيس',
    jurisdiction: 'الاختصاص', licence: 'رقم الرخصة', regNo: 'رقم السجل',
    activities: 'الأنشطة', address: 'العنوان المسجّل',
    phone: 'الهاتف', website: 'الموقع', hours: 'ساعات العمل',
    contactUs: 'اتصل بنا', enquiry: 'رسالة عامة',
    gap: 'المشكلة', eTextbook: 'كتاب إلكتروني',
    trainers: 'تدريبات', aiTutor: 'مساعد ذكي', soon: 'قريبًا',
    noStrands: 'لا توجد مسارات معلنة بعد.',
    tips: 'نصائح للآباء', extras: 'مواد إضافية للأطفال',
    teaching: 'مواد منهجية', methodology: 'مقالات في طرق التدريس'
  }
} as const;

export const t = (l: Lang, k: keyof typeof ui.en) => ui[l][k];

export const SECTIONS = {
  'tips-for-parents':  { audience: 'parents', key: 'tips'        as const, path: 'parents/tips' },
  'extra-materials':   { audience: 'parents', key: 'extras'      as const, path: 'parents/materials' },
  'teaching-materials':{ audience: 'schools', key: 'teaching'    as const, path: 'schools/teaching' },
  'methodology':       { audience: 'schools', key: 'methodology' as const, path: 'schools/methodology' }
};

export const fdate = (d: Date) =>
  String(d.getUTCDate()).padStart(2,'0') + '.' +
  String(d.getUTCMonth()+1).padStart(2,'0') + '.' +
  String(d.getUTCFullYear()).slice(2);
