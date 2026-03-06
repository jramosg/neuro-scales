import { ui, defaultLang, type Langs } from './ui'

export function getLangFromUrl(url: URL): Langs {
  const [, lang] = url.pathname.split('/')
  if (lang in ui) return lang as Langs
  return defaultLang
}

export function useTranslations(lang: Langs) {
  return function t(key: string): string {
    return ui[lang][key] || key
  }
}

export function getStaticLangPaths(): { params: { lang: Langs } }[] {
  return (Object.keys(ui) as Langs[]).map((lang) => ({ params: { lang } }))
}

export function getLanguageUrls(url: URL): Record<Langs, string> {
  const pathParts = url.pathname.split('/')
  return (Object.keys(ui) as Langs[]).reduce(
    (acc, lang) => {
      const parts = [...pathParts]
      if (parts[1] && parts[1] in ui) {
        parts[1] = lang
      } else {
        parts.splice(1, 0, lang)
      }
      acc[lang] = parts.join('/')
      return acc
    },
    {} as Record<Langs, string>
  )
}
