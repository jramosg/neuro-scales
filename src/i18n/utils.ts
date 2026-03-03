import { ui, defaultLang, type Langs } from './ui';

const newLangMap: Record<Langs, Langs> = { es: 'eu', eu: 'es' };

export function getLangFromUrl(url: URL): Langs {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Langs;
  return defaultLang;
}

export function useTranslations(lang: Langs) {
  return function t(key: string): string {
    return ui[lang][key] || key;
  };
}

export function getStaticLangPaths(): { params: { lang: Langs } }[] {
  return (Object.keys(ui) as Langs[]).map((lang) => ({ params: { lang } }));
}

export function switchLanguage(url: URL): string {
  const pathParts = url.pathname.split('/');
  const [, lang] = pathParts;
  const newLang = newLangMap[lang as Langs];
  if (newLang && newLang in ui) {
    pathParts[1] = newLang;
  } else {
    pathParts.splice(1, 0, newLang ?? defaultLang);
  }
  return pathParts.join('/');
}
