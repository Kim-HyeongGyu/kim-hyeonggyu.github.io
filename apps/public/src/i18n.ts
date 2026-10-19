import { profile, visiblePages, type Locale, type PageKey } from "./content/profile";

export type { Locale, PageKey };

const segments: Record<PageKey, string> = { home: "", research: "research/", publications: "publications/" };

/** English is the default at the base path; Korean lives under `ko/`. */
export function pagePath(base: string, locale: Locale, page: PageKey): string {
  return `${base}${locale === "en" ? "" : "ko/"}${segments[page]}`;
}

/** A page that has no data for this language is not linked; its address goes to Home instead. */
export function isVisible(locale: Locale, page: PageKey): boolean {
  return visiblePages(profile, locale).includes(page);
}

export function tabs(locale: Locale): PageKey[] {
  return visiblePages(profile, locale);
}

export const copy = {
  en: {
    skipLink: "Skip to main content",
    pagesNavLabel: "Pages",
    languageNavLabel: "Language",
    themeToLight: "Switch to light theme",
    themeToDark: "Switch to dark theme",
    nav: { home: "Home", research: "Research", publications: "Publications" },
    email: "Email",
    researchInterests: "Research interests",
    projectGroups: { research: "Research projects", contract: "Contract projects", personal: "Personal projects" },
    papers: "Papers",
    books: "Books",
    education: "Education",
    experience: "Experience",
    places: "Places",
    korea: "Korea",
    preprint: "Preprint",
    movedTitle: "Page moved",
    movedLink: "Continue to the new page"
  },
  ko: {
    skipLink: "본문으로 건너뛰기",
    pagesNavLabel: "페이지",
    languageNavLabel: "언어",
    themeToLight: "밝은 화면으로 전환",
    themeToDark: "어두운 화면으로 전환",
    nav: { home: "홈", research: "연구", publications: "논문" },
    email: "이메일",
    researchInterests: "연구 관심사",
    projectGroups: { research: "연구 과제", contract: "용역 과제", personal: "개인 프로젝트" },
    papers: "학술 논문",
    books: "저서",
    education: "학력",
    experience: "경력",
    places: "활동 지역",
    korea: "한국",
    preprint: "프리프린트",
    movedTitle: "페이지 이동",
    movedLink: "새 페이지로 이동"
  }
} as const;
