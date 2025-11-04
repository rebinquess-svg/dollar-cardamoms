
export type Language = 'en' | 'ar';

export interface Translations {
  [key: string]: {
    en: string;
    ar: string;
  };
}

export interface Recipe {
  id: number;
  image: string;
  title: { en: string; ar: string };
  description: { en: string; ar: string };
  ingredients: { en: string[]; ar: string[] };
  preparation: { en: string[]; ar: string[] };
  servingTip?: { en: string; ar: string };
  note?: { en: string; ar: string };
}
