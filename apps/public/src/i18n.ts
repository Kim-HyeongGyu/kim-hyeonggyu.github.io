export const locales = ["ko", "en"] as const;
export type Locale = (typeof locales)[number];

export const routeKeys = ["home", "research", "publications", "about"] as const;
export type RouteKey = (typeof routeKeys)[number];

const routeSegments: Record<RouteKey, string> = {
  home: "",
  research: "research/",
  publications: "publications/",
  about: "about/"
};

export function localePath(base: string, locale: Locale, route: RouteKey): string {
  const localeSegment = locale === "en" ? "en/" : "";
  return `${base}${localeSegment}${routeSegments[route]}`;
}

export const copy = {
  ko: {
    skipLink: "본문으로 건너뛰기",
    homeLabel: "Hyeong-Gyu Kim 홈",
    primaryNavLabel: "주요 메뉴",
    languageNavLabel: "언어 선택",
    languages: { ko: "한국어", en: "English" },
    nav: { home: "홈", research: "연구", publications: "출판·발표", about: "소개" },
    footerBoundary: "공개 콘텐츠와 본인 전용 연구 기록은 별도의 경계에서 운영합니다.",
    pendingLabel: "공개 콘텐츠 준비 중",
    home: {
      title: "Hyeong-Gyu Kim — Research notebook",
      description: "Hyeong-Gyu Kim의 공개 연구 홈페이지 준비 화면입니다.",
      heroEyebrow: "Research notebook · Public preview",
      heroTitle: "질문에서 기록으로.",
      heroLede: "Hyeong-Gyu Kim의 연구 홈페이지입니다. 검토된 연구 소개와 출판 자료를 차분히 정리해 공개할 예정입니다.",
      statusLabel: "현재 공개 상태",
      statusTitle: "현재는 공개 구조를 준비하고 있습니다.",
      statusBody: "소속·연구 성과·연락처는 확인된 자료만 게시합니다.",
      recordEyebrow: "Public record",
      recordTitle: "검증된 내용이 놓일 자리",
      recordBody: "연구 질문, 출판·발표, 소개를 서로 구분해 방문자가 필요한 근거에 곧바로 접근하도록 구성했습니다.",
      cards: [
        { eyebrow: "01 · Research", title: "연구", body: "승인된 연구 주제와 대표 프로젝트를 문제·방법·근거 중심으로 소개합니다." },
        { eyebrow: "02 · Publications", title: "출판·발표", body: "확인된 논문, 발표, 데이터셋과 외부 식별자만 연결합니다." },
        { eyebrow: "03 · About", title: "소개", body: "약력, 소속, CV와 연락 방법은 공개 범위를 확인한 뒤 추가합니다." }
      ],
      privateEyebrow: "Separate private workspace",
      privateTitle: "연구 기록은 보호된 대시보드에서.",
      privateBody: "진행 중인 프로젝트와 노트는 공개 페이지에 포함하지 않습니다. 본인 전용 화면은 별도 인증 경계에서 원본을 읽기 전용으로 보여줍니다.",
      boundaries: [
        "공개 페이지와 비공개 데이터는 별도 빌드",
        "수정은 Obsidian·Google Drive·GitHub 원본에서",
        "연결되지 않은 자료는 진행 상황으로 표시하지 않음"
      ]
    },
    research: {
      title: "연구 — Hyeong-Gyu Kim",
      description: "승인된 연구 주제를 소개할 공개 페이지입니다.",
      eyebrow: "Research",
      heading: "연구",
      intro: "연구 질문과 방법, 결과의 근거가 확인되면 이곳에 공개합니다.",
      emptyTitle: "공개 콘텐츠 준비 중",
      emptyBody: "현재는 구체적인 연구 주제나 진행 상황을 공개 자료로 승인하지 않았습니다. 비공개 대시보드의 기록은 이 페이지로 자동 전송되지 않습니다."
    },
    publications: {
      title: "출판·발표 — Hyeong-Gyu Kim",
      description: "승인된 논문과 발표를 소개할 공개 페이지입니다.",
      eyebrow: "Publications & talks",
      heading: "출판·발표",
      intro: "서지 정보와 원문 링크를 확인한 뒤 논문, 발표, 데이터셋을 구분해 제공합니다.",
      emptyTitle: "목록 준비 중",
      emptyBody: "확인되지 않은 제목·저자·소속은 표시하지 않습니다. 승인된 목록이 준비되면 원문이나 공식 식별자와 함께 게시합니다."
    },
    about: {
      title: "소개 — Hyeong-Gyu Kim",
      description: "Hyeong-Gyu Kim의 공개 소개를 준비하는 페이지입니다.",
      eyebrow: "About",
      heading: "Hyeong-Gyu Kim",
      intro: "연구자 소개, 소속, CV와 연락 방법의 공개 범위를 확인하고 있습니다.",
      emptyTitle: "소개 준비 중",
      emptyBody: "현재 확인된 공개 정보는 이름뿐입니다. 약력이나 소속을 추정하지 않고, 직접 승인된 내용만 이 페이지에 추가합니다."
    }
  },
  en: {
    skipLink: "Skip to main content",
    homeLabel: "Hyeong-Gyu Kim home",
    primaryNavLabel: "Primary navigation",
    languageNavLabel: "Language selection",
    languages: { ko: "한국어", en: "English" },
    nav: { home: "Home", research: "Research", publications: "Publications", about: "About" },
    footerBoundary: "Public content and the owner's research records are maintained across separate boundaries.",
    pendingLabel: "Public content in preparation",
    home: {
      title: "Hyeong-Gyu Kim — Research notebook",
      description: "A preview of Hyeong-Gyu Kim's public research website.",
      heroEyebrow: "Research notebook · Public preview",
      heroTitle: "From questions to records.",
      heroLede: "This is Hyeong-Gyu Kim's research website. Reviewed research profiles and publication materials will be carefully organized here for public access.",
      statusLabel: "Current publication status",
      statusTitle: "The public structure is currently in preparation.",
      statusBody: "Affiliation, research outputs, and contact details will be published only after they have been verified.",
      recordEyebrow: "Public record",
      recordTitle: "A place for verified work",
      recordBody: "Research questions, publications and talks, and profile information are kept distinct so visitors can reach the evidence they need directly.",
      cards: [
        { eyebrow: "01 · Research", title: "Research", body: "Approved research themes and selected projects will be presented through their questions, methods, and evidence." },
        { eyebrow: "02 · Publications", title: "Publications", body: "Only verified papers, talks, datasets, and external identifiers will be linked." },
        { eyebrow: "03 · About", title: "About", body: "A biography, affiliation, CV, and contact details will be added after their public scope is confirmed." }
      ],
      privateEyebrow: "Separate private workspace",
      privateTitle: "Research records stay in the protected dashboard.",
      privateBody: "Active projects and notes are not included on the public site. The owner-only dashboard shows the originals as read-only material behind a separate authentication boundary.",
      boundaries: [
        "Public pages and private data use separate builds",
        "Edits happen in the Obsidian, Google Drive, and GitHub originals",
        "Unconnected sources are never presented as progress"
      ]
    },
    research: {
      title: "Research — Hyeong-Gyu Kim",
      description: "A public page for approved research themes.",
      eyebrow: "Research",
      heading: "Research",
      intro: "Research questions, methods, and supporting evidence will be published here after verification.",
      emptyTitle: "Public content in preparation",
      emptyBody: "No specific research themes or progress have yet been approved for public release. Records from the private dashboard are not transferred to this page automatically."
    },
    publications: {
      title: "Publications — Hyeong-Gyu Kim",
      description: "A public page for approved publications and talks.",
      eyebrow: "Publications & talks",
      heading: "Publications & talks",
      intro: "Papers, talks, and datasets will be listed separately after their bibliographic details and source links are verified.",
      emptyTitle: "List in preparation",
      emptyBody: "Unverified titles, authors, and affiliations are not displayed. Approved items will be published with their original sources or official identifiers."
    },
    about: {
      title: "About — Hyeong-Gyu Kim",
      description: "A page preparing the public profile of Hyeong-Gyu Kim.",
      eyebrow: "About",
      heading: "Hyeong-Gyu Kim",
      intro: "The public scope of the researcher profile, affiliation, CV, and contact details is being reviewed.",
      emptyTitle: "Profile in preparation",
      emptyBody: "The name is currently the only verified public information. No biography or affiliation is inferred; only directly approved content will be added here."
    }
  }
} as const;
