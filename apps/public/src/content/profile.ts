/*
 * Public profile — the only content source for the public pages. English: `/`, `/research/`, `/publications/`;
 * Korean: `/ko/`, `/ko/research/`, `/ko/publications/`.
 *
 * Source (owner-approved, 2026-10-18): the owner's public ORCID record https://orcid.org/0000-0002-9447-9969,
 * retrieved 2026-10-18, plus the owner's own wording for the role line. To re-sync, compare the ORCID biography,
 * keywords and works with the fields below and edit them here by hand. Nothing is fetched or generated at build time.
 *
 * Fill in only facts you have approved for publication. A block whose data is empty is not rendered at all:
 * no heading, no placeholder (see `visibleBlocks`). The Research and Publications tabs follow the same rule: with
 * no data the tab is not shown and its address redirects to Home (see `visiblePages`).
 *
 *   name               Your name per language. No Korean form is approved yet, so `ko` repeats the English name.
 *   role               One line under the name, written as it should read in each language. Empty string = hidden.
 *   affiliation        Optional; appended to the role line after a comma. Left empty because `role` already carries it.
 *   bio                First-person paragraphs per language. Each language shows only its own paragraphs.
 *   photoAlt           Alt text for the portrait on Home (`src/assets/profile.jpg`, an illustrated portrait supplied by the owner).
 *                      Empty string = no photo. Replacing the photo also means updating its pinned hash in
 *                      `scripts/export-public.mjs`, which refuses any other image bytes.
 *   education          Dated list under the bio on Home, newest first: { period, text }.
 *   experience         Dated list after Education, newest first: { period, text }. Empty `period` is fine.
 *   places             Dots on the world map after Experience: { name, note, lat, lon }. Empty = no map.
 *   links              Icons at the bottom right of every page (footer), in this order. `icon` picks the mark;
 *                      `label` is its accessible name (a link without an icon shows its label as text).
 *   contact.email      Adds an "Email" / "이메일" text link before the footer icons. Empty = no email anywhere.
 *   researchInterests  Short list items per language (Research page).
 *   projects           Photo cards on the Research page, newest first. Only projects you have approved for publication:
 *                      { title, summary, period, kind, funder, image, imageAlt }. `period` is years only
 *                      ("2019–present"); `kind` picks the group: research, contract or personal; `funder` is the full line to show
 *                      (empty = not named); `image` is a file name in `src/assets/research/` (a schematic SVG;
 *                      empty = a card without a picture), described by `imageAlt`.
 *   publications       Papers on the Publications page, newest first, as published in English. A paper written in Korean also
 *                      carries `ko` (title, authors and venue as published in Korean), shown on the Korean page instead, with
 *                      the authors in the same order. Each paper links its DOI; `preprint: true` adds a "Preprint" /
 *                      "프리프린트" mark; `links` adds extra links (e.g. { label: "PDF", href: "https://..." }).
 *   books              Books under the papers, newest first: { title, authors, publisher, year, isbn }, as published in
 *                      Korean, for the Korean page. `en` (translated title, authors in English) puts a book on the English
 *                      page too, without the publisher, which has no English name.
 *   authorNames        Your name as printed in author lists, in any language; it is shown in bold.
 *
 * Use https: links only. After editing, run `npm run build:public` and check both pages.
 */

export type Locale = "en" | "ko";
export type Localized<T> = Record<Locale, T>;

export interface ProfileLink {
  label: string;
  href: string;
  /** Shown as this icon in the footer, with `label` as its accessible name. */
  icon?: "orcid" | "github";
}

export interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  doi: string;
  preprint?: boolean;
  /** The record as published in Korean, for a paper written in Korean. Authors in the same order as `authors`. */
  ko?: { title: string; authors: string[]; venue: string };
  links: ProfileLink[];
}

/** A book, recorded as published in Korean; `en` is its translated title and the authors' names in English. */
export interface Book {
  title: string;
  authors: string[];
  publisher: string;
  year: number;
  isbn: string;
  en?: { title: string; authors: string[] };
}

/** One dated line of the Education or Experience list on Home: `period` may be empty when no dates are known. */
export interface TimelineItem {
  period: string;
  text: string;
}

/** A dot on the Home map. `lat`/`lon` in degrees (south and west negative); keep places city-level, not addresses. */
export interface Place {
  name: Localized<string>;
  note: Localized<string>;
  lat: number;
  lon: number;
}

/** A photo card on the Research page. See the field notes at the top of this file. */
export interface Project {
  title: Localized<string>;
  summary: Localized<string>;
  period: Localized<string>;
  kind: "research" | "contract" | "personal";
  funder: Localized<string>;
  image: string;
  imageAlt: Localized<string>;
}

export interface Profile {
  name: Localized<string>;
  role: Localized<string>;
  affiliation: Localized<string>;
  bio: Localized<string[]>;
  photoAlt: Localized<string>;
  education: Localized<TimelineItem[]>;
  experience: Localized<TimelineItem[]>;
  places: Place[];
  links: ProfileLink[];
  contact: { email: string };
  researchInterests: Localized<string[]>;
  projects: Project[];
  authorNames: string[];
  publications: Publication[];
  books: Book[];
}

export const profile: Profile = {
  name: { en: "Hyeong-Gyu Kim", ko: "Hyeong-Gyu Kim" },
  role: {
    en: "Ph.D. student, Department of Atmospheric Science, Kongju National University",
    ko: "공주대학교 대기과학과 박사과정"
  },
  affiliation: { en: "", ko: "" },
  bio: {
    en: [
      "My research focuses on ozonesonde observations and stratosphere–troposphere exchange (STE) of ozone, including the vertical ozone structure over East Asia and its link to large-scale dynamics. I also study heavy snowfall and winter precipitation over Korea and their synoptic conditions."
    ],
    // Translation of the English biography, approved by the owner (2026-10-19).
    ko: [
      "오존존데 관측과 오존의 성층권–대류권 교환(STE)을 연구합니다. 동아시아 상공의 오존 연직 구조와 대규모 대기 역학의 관련성을 살펴봅니다. 겨울철 한반도의 폭설·강수와 그 종관 조건도 연구합니다."
    ]
  },
  photoAlt: { en: "Illustrated portrait of Hyeong-Gyu Kim", ko: "Hyeong-Gyu Kim 일러스트 프로필" },
  // Education: the owner's own dates and affiliations (2026-10-18), years only — the owner asked not to publish months.
  // The PhD entry matches the ORCID record.
  education: {
    en: [
      { period: "2021–present", text: "Ph.D. student, Department of Atmospheric Science, Kongju National University" },
      { period: "2018–2020", text: "M.S., Department of Atmospheric Science, Kongju National University" },
      { period: "2012–2018", text: "B.S., Department of Atmospheric Science, Kongju National University" }
    ],
    ko: [
      { period: "2021–현재", text: "공주대학교 대기과학과 박사과정" },
      { period: "2018–2020", text: "공주대학교 대기과학과 석사" },
      { period: "2012–2018", text: "공주대학교 대기과학과 학사" }
    ]
  },
  // Experience: the ORCID employment entry, the 2021 Araon Arctic expedition (ARA12B; joined as a Kongju National
  // University member), the post-master's year and the field campaigns with their years, newest first — all as supplied
  // by the owner (2026-10-18).
  experience: {
    en: [
      { period: "2024", text: "ASIA-AQ international field campaign — ozonesonde team" },
      { period: "2022–2023", text: "Overwintering researcher (atmospheric observation), 10th Overwintering Team, Jang Bogo Antarctic Research Station, Korea Polar Research Institute (KOPRI)" },
      { period: "2022", text: "ACCLIP international field campaign — ozonesonde team" },
      { period: "2021", text: "Icebreaker Araon Arctic expedition (ARA12B), with Kongju National University" },
      { period: "2020–2021", text: "Post-master's researcher, Department of Atmospheric Science, Kongju National University" }
    ],
    ko: [
      { period: "2024", text: "ASIA-AQ 국제 공동 관측 — 오존존데 팀" },
      { period: "2022–2023", text: "극지연구소(KOPRI) 장보고과학기지 제10차 월동연구대, 대기관측 연구원" },
      { period: "2022", text: "ACCLIP 국제 공동 관측 — 오존존데 팀" },
      { period: "2021", text: "쇄빙연구선 아라온호 북극 탐사(ARA12B), 공주대학교 소속 참여" },
      { period: "2020–2021", text: "공주대학교 대기과학과 석사후 연구원" }
    ]
  },
  // Map dots (owner request, 2026-10-18), city-level launch sites supplied by the owner (Anmyeondo for ASIA-AQ, Osan for
  // ACCLIP). Jang Bogo Station is its published position.
  places: [
    { name: { en: "Gongju, Korea", ko: "공주" }, note: { en: "Kongju National University", ko: "공주대학교" }, lat: 36.47, lon: 127.14 },
    { name: { en: "Osan, Korea", ko: "오산" }, note: { en: "ACCLIP", ko: "ACCLIP" }, lat: 37.09, lon: 127.03 },
    { name: { en: "Anmyeondo, Korea", ko: "안면도" }, note: { en: "ASIA-AQ", ko: "ASIA-AQ" }, lat: 36.54, lon: 126.33 },
    // Area-level marker for the 2021 cruise (Bering, Chukchi, East Siberian and Beaufort seas), not a ship position.
    { name: { en: "Arctic Ocean", ko: "북극해" }, note: { en: "Icebreaker Araon (ARA12B), 2021", ko: "쇄빙연구선 아라온호(ARA12B), 2021" }, lat: 74, lon: -170 },
    { name: { en: "Jang Bogo Station, Antarctica", ko: "남극 장보고과학기지" }, note: { en: "Overwintering, 2022–2023", ko: "월동, 2022–2023" }, lat: -74.62, lon: 164.23 }
  ],
  links: [
    { label: "ORCID", href: "https://orcid.org/0000-0002-9447-9969", icon: "orcid" },
    { label: "GitHub", href: "https://github.com/Kim-HyeongGyu", icon: "github" }
  ],
  contact: { email: "" },
  // Left empty at the owner's request (2026-10-18): the Research page shows the project cards only.
  researchInterests: { en: [], ko: [] },
  // Wording supplied by the owner (2026-10-18); pictures are schematics drawn for this page.
  projects: [
    {
      title: { en: "Vertical mixing of surface ozone", ko: "지표 오존의 연직 혼합" },
      summary: {
        en: "Reproducing the daily cycle of surface ozone in Yongin, Korea, with a one-dimensional multilayer column model, and quantifying how much the ozone stored overnight in the residual layer adds as it is mixed down in the morning.",
        ko: "용인 지표 오존의 일변화를 1차원 다층 컬럼 모델로 재현하고, 밤사이 잔류층에 남아 있던 오존이 아침에 지표로 섞여 내려오는 과정의 기여를 정량화합니다."
      },
      period: { en: "2025–present", ko: "2025–현재" },
      kind: "research",
      funder: { en: "", ko: "" },
      image: "o3vmix.svg",
      imageAlt: {
        en: "Schematic: at night ozone stays aloft in the residual layer; in the morning the growing mixed layer carries it down to the ground; a one-dimensional column model resolves the layers",
        ko: "모식도: 밤에는 오존이 잔류층에 남아 있다가 아침에 경계층이 자라면서 지표로 섞여 내려오고, 1차원 컬럼 모델이 이 층들을 나누어 계산한다"
      }
    },
    {
      title: { en: "Regional contributions to particulate matter in central Korea", ko: "중부권 미세먼지의 지역별 기여도 산정" },
      summary: {
        en: "Calculating how much each region of central Korea contributes to particulate matter with the CAMx air-quality model, which tags pollution by the region it came from (PSAT).",
        ko: "대기질 모델 CAMx와 발생원 추적 기법(PSAT)으로 중부권 미세먼지에 대한 지역별 기여도를 계산합니다."
      },
      period: { en: "2025–present", ko: "2025–현재" },
      kind: "contract",
      funder: { en: "", ko: "" },
      image: "dust.svg",
      imageAlt: {
        en: "Schematic: the CAMx model grid over the source regions of central Korea, and a bar splitting particulate matter into each region's share",
        ko: "모식도: 중부권 발생원 구역 위에 CAMx 모델 격자가 놓이고, 미세먼지를 구역별 몫으로 나눈 막대가 그려져 있다"
      }
    },
    {
      title: { en: "Southern Hemisphere westerlies in the Last Glacial Maximum", ko: "마지막 최대 빙하기의 남반구 편서풍" },
      summary: {
        en: "Showing with CESM experiments how expanded Antarctic sea ice strengthened the Southern Hemisphere westerlies and shifted them poleward during the Last Glacial Maximum.",
        ko: "CESM 실험으로 마지막 최대 빙하기에 넓어진 남극 해빙이 남반구 편서풍을 강화하고 극 쪽으로 옮긴 기제를 밝힙니다."
      },
      period: { en: "2019–present", ko: "2019–현재" },
      kind: "research",
      funder: { en: "", ko: "" },
      image: "lgm.svg",
      imageAlt: {
        en: "Schematic seen from above the South Pole: glacial sea ice spreads beyond the pre-industrial ice edge, and the westerlies around it grow stronger and move closer to the pole",
        ko: "남극 위에서 본 모식도: 빙하기 해빙이 산업화 이전의 해빙 경계보다 넓게 퍼지고, 그 둘레의 편서풍이 강해지며 극 쪽으로 옮겨 간다"
      }
    },
    {
      title: { en: "AI-based icing risk on Jeonbuk expressways", ko: "AI 기반 전북 고속도로 결빙 위험도 분석" },
      summary: {
        en: "Estimating road-surface temperature and icing every ten minutes where three Jeonbuk expressways have no road-weather station, and mapping icing risk for every 500 m section — an entry to the 2026 DATA·AI Analysis Competition (KISTI).",
        ko: "전북 고속도로 3개 노선의 도로기상 미관측 지점에서 노면온도와 결빙을 10분 단위로 추정하고, 500 m 구간별 결빙 위험도 지도를 만듭니다. 2026 DATA·AI 분석 경진대회(KISTI) 참가 과제입니다."
      },
      period: { en: "2026", ko: "2026" },
      kind: "personal",
      funder: { en: "", ko: "" },
      image: "ai-weather.svg",
      imageAlt: {
        en: "Schematic: road-weather stations stand along an expressway, the road between them is estimated, and each 500 m section is coloured by icing risk from low to high",
        ko: "모식도: 고속도로를 따라 도로기상 관측소가 있고, 그 사이 미관측 지점을 추정하며, 500 m 구간마다 결빙 위험도를 낮음·보통·높음 색으로 나타낸다"
      }
    }
  ],
  authorNames: ["Hyeong-Gyu Kim", "김형규"],
  publications: [
    {
      title: "Dynamical Mechanism behind the Southern Hemisphere Westerly Intensification during the Last Glacial Maximum: A Linkage between Sea-ice and Polar Front Jet",
      authors: ["Hyeong-Gyu Kim", "Joowan Kim", "Sang-Yoon Jun", "Seong-Joong Kim", "Damwon So"],
      venue: "EGUsphere",
      year: 2026,
      doi: "10.5194/egusphere-2026-3834",
      preprint: true,
      links: []
    },
    {
      title: "Characteristics of Record-Breaking Precipitation in 2023/24 Winter over the Korean Peninsula and Relevant Atmospheric Patterns",
      authors: ["Hyeong-Gyu Kim", "Kanghyun Song", "Junseok Lee", "Joowan Kim", "Baek-Min Kim", "Eun-Chul Chang"],
      venue: "Atmosphere",
      year: 2025,
      doi: "10.14191/ATMOS.2025.35.2.181",
      // Korean record from the journal's article page (KoreaScience).
      ko: {
        title: "기록적인 2023/24년 한반도 겨울 강수 특성 및 대기패턴의 영향",
        authors: ["김형규", "송강현", "이준석", "김주완", "김백민", "장은철"],
        venue: "대기"
      },
      links: []
    },
    {
      title: "Atmospheric and Ozone Profiling Data Measured with Ozonesonde from 2021 to 2024",
      authors: ["Hyungyu Kang", "Hyeong-Gyu Kim", "Joowan Kim", "Taehyoung Lee", "Ja-Ho Koo", "Sang-Seo Park", "Yongjoo Choi", "Won-Jin Lee", "Sun A Shin", "Jinsoo Park"],
      venue: "GEO DATA",
      year: 2024,
      doi: "10.22761/GD.2024.0041",
      // Korean record from the journal's article page.
      ko: {
        title: "오존존데를 이용한 2021-2024년 기간 연직 기상 및 오존 측정 자료",
        authors: ["강현규", "김형규", "김주완", "이태형", "구자호", "박상서", "최용주", "이원진", "신선아", "박진수"],
        venue: "GEO DATA"
      },
      links: []
    },
    {
      title: "The Role of the Pacific-Japan Pattern in Extreme Heatwaves Over Korea and Japan",
      authors: ["El Noh", "Joowan Kim", "Sang-Yoon Jun", "Dong-Hyun Cha", "Myung-Sook Park", "Joo-Hong Kim", "Hyeong-Gyu Kim"],
      venue: "Geophysical Research Letters",
      year: 2021,
      doi: "10.1029/2021GL093990",
      links: []
    }
  ],
  // Korean records from each book (copyright page; cover). The ozonesonde manual names no publisher: its ISBN publisher
  // number (979-11-968332) is 아리에뜨's in the National Library of Korea catalogue. English titles are translations;
  // co-authors' English names are the spellings they use themselves.
  books: [
    {
      title: "오존존데 비양 매뉴얼",
      authors: ["류호선", "김형규", "노엘", "김주완", "구자호", "박진수"],
      publisher: "아리에뜨",
      year: 2022,
      isbn: "979-11-968332-7-5",
      en: { title: "Ozonesonde Launch Manual", authors: ["Hosun Ryu", "Hyeong-Gyu Kim", "El Noh", "Joowan Kim", "Ja-Ho Koo", "Jinsoo Park"] }
    },
    {
      title: "대기과학을 위한 NCL",
      authors: ["김형규", "노엘", "박혜진", "황인용"],
      publisher: "도서출판 좋은땅",
      year: 2019,
      isbn: "979-11-6435-758-1",
      en: { title: "NCL for Atmospheric Science", authors: ["Hyeong-Gyu Kim", "El Noh", "Hye-Jin Park", "In-yong Hwang"] }
    }
  ]
};

/** Author names display with an ASCII hyphen (ORCID exports sometimes carry U+2010). */
export function displayAuthor(author: string): string {
  return author.replace(/‐/g, "-");
}

/** The owner's own name in an author list, compared after hyphen normalization. */
export function isOwner(p: Profile, author: string): boolean {
  return p.authorNames.some((name) => displayAuthor(author) === displayAuthor(name));
}

/** The empty-section rule: which blocks of the home page render for a language. Empty data = not rendered. */
export function visibleBlocks(p: Profile, locale: Locale) {
  return {
    roleLine: [p.role[locale], p.affiliation[locale]].filter(Boolean).join(", "),
    bio: p.bio[locale].filter(Boolean),
    email: p.contact.email.trim(),
    links: p.links,
    education: p.education[locale].filter((item) => item.text.trim()),
    experience: p.experience[locale].filter((item) => item.text.trim()),
    places: p.places.filter((place) => place.name[locale].trim()),
    research: p.researchInterests[locale].filter(Boolean),
    projects: p.projects.filter((project) => project.title[locale].trim()),
    publications: p.publications,
    books: locale === "ko" ? p.books : p.books.filter((book) => book.en)
  };
}

export type PageKey = "home" | "research" | "publications";

/** Header tabs and real pages for a language: Home always; Research and Publications only when they have data. */
export function visiblePages(p: Profile, locale: Locale): PageKey[] {
  const blocks = visibleBlocks(p, locale);
  const pages: PageKey[] = ["home"];
  if (blocks.research.length > 0 || blocks.projects.length > 0) pages.push("research");
  if (blocks.publications.length > 0 || blocks.books.length > 0) pages.push("publications");
  return pages;
}
