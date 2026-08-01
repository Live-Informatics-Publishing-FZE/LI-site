export const SECTION_MAP: Record<string, Record<string, { sec: string; key: any }>> = {
  parents: {
    tips:      { sec: 'tips-for-parents', key: 'tips' },
    materials: { sec: 'extra-materials',  key: 'extras' }
  },
  schools: {
    teaching:    { sec: 'teaching-materials', key: 'teaching' },
    methodology: { sec: 'methodology',        key: 'methodology' }
  }
};
