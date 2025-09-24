import React, { useState } from "react";
import {
  Brain,
  BarChart3,
  Bot,
  LineChart,
  Mail,
  Github,
  Linkedin,
  ChevronRight,
  ExternalLink,
  Code2,
  Rocket,
  School,
  Workflow,
} from "lucide-react";
import heroImg from "./assets/oliver.jpeg";

/* -----------------------------
   i18n helper
------------------------------*/
// Return lang-specific string. Accepts "text" or {en, ko}.
const i18n = (v, lang) =>
  typeof v === "string" ? v : v?.[lang] ?? v?.en ?? "";

/* -----------------------------
   Editable content
------------------------------*/
const profile = {
  name: "Oliver Lee",
  tagline: {
    en: "AI Engineer, Financial Data Analyst",
    ko: "AI 엔지니어, 금융 데이터 분석가",
  },
  location: "Seoul ↔ Cambridge",
  email: "oliverlee0902@gmail.com",
  links: {
    github: "https://github.com/OliverLee9292",
    linkedin: "https://www.linkedin.com/in/oliver-lee92",
  },
  now: null,
};

const education = [
  {
    school: "Georgia Institute of Technology — Master of Science in Analytics",
    period: "Aug 2025 – Present",
    details:
      "Computational Data Analytics track; courses planned/underway: Data & Visual Analytics, Machine Learning, Simulation, Statistical Methods",
    logo: "/logos/gatech.png",
  },
  {
    school: "Microsoft - Microsoft AI School",
    period: "Sep 2025 – Present",
    details: {
      en: "Team-based projects on agents, automation, model serving, and observability; building production-style PoCs and documenting outputs.",
      ko: "팀 프로젝트 중심(에이전트/오토메이션/모델 서빙/관측성)으로 실무 PoC 제작 및 산출물 기록",
    },
    // logo: "/logos/microsoft.png",
  },
  {
    school: "Metacode - Data Analytics Bootcamp",
    period: "June - Aug 2025",
    details: {
      en: "Excel (Pivot/PowerQuery), Python (pandas/EDA), SQL (joins/window/CTE), and dashboard labs.",
      ko: "Excel(피벗/PowerQuery), Python(pandas/EDA), SQL(윈도우/조인/CTE), 대시보드 제작 실습",
    },
    // logo: "/logos/metacode.png",
  },
  {
    school: "The Modellers — Financial Modelling 101×201 (Hugel case)",
    period: "July - Sep 2024",
    details: {
      en: "Built 3-statement model in Excel with driver-based scenarios; DCF and relative valuation.",
      ko: "3-Statement model, DCF/상대가치, 드라이버 기반 시나리오 테이블을 Excel로 구축",
    },
    // logo: "/logos/the-modellers.png",
  },
  {
    school: "University of Cambridge — Bachelor of Arts in Economics",
    period: "Oct 2022 – Jul 2025",
    details:
      "Modules: Time Series Methods, Microeconometrics, Corporate Finance, Asset Pricing",
    logo: "/logos/cambridge.png",
  },
];

const experience = [
  {
    org: "Republic of Korea Army, Ground Operations Command",
    title: "Command Centre Operator (Military Duty)",
    period: "Mar 2021 – Sep 2022",
    bullets: [
      "Delivered twice-daily strategic briefings to senior command.",
      "Managed real-time operational data across eight corps; maintained hourly dashboards.",
      "Operated effectively in crisis conditions within rotating shift schedules.",
    ],
    // logo: "/logos/rok-army.png",
  },
  {
    org: "Chonnam National University — Agricultural Big-Data Group",
    title: "Summer Research Intern",
    period: "Jul 2020 – Sep 2020",
    bullets: [
      "Developed an R web crawler for time-dependent data collection.",
      "Labeled 4,000 bell-pepper images; performed preprocessing/augmentation with OpenCV, PIL, and Keras.",
      "Trained GANs in PyTorch and evaluated models using Inception Score and FID.",
    ],
    // logo: "/logos/cnu.png",
  },
  {
    org: "Korea Transport Institute — Centre for Global Transport Cooperation",
    title: "Research Assistant",
    period: "Mar 2020 – Jul 2020",
    bullets: [
      "Maintained ASEAN macroeconomic datasets; researched EU emissions standards.",
      "Coordinated seminar logistics, processed expenses, and documented meeting minutes.",
    ],
    // logo: "/logos/kti.png",
  },
];

const highlights = [
  // In Progress 전용(요청사항)
  {
    title: "Microsoft AI School — In Progress",
    icon: <Bot className="w-4 h-4" />,
    desc: {
      en: "Team-based projects on agents, automation, and model serving. Building production-style PoCs and documenting outputs.",
      ko: "팀 프로젝트 중심(에이전트/오토메이션/모델 서빙)으로 실무형 PoC 제작 및 산출물 기록.",
    },
    link: { label: { en: "Project Log", ko: "진행 로그" }, href: "#" },
  },
  {
    title: "Georgia Tech — MS in Analytics (Computational Data Analytics)",
    icon: <School className="w-4 h-4" />,
    desc: {
      en: "Graduate coursework underway: Data & Visual Analytics, Machine Learning, Simulation, and Statistical Methods.",
      ko: "대학원 과목 수강 중: 데이터 시각화, 머신러닝, 시뮬레이션, 통계적 방법.",
    },
    link: { label: { en: "Course Plan", ko: "수강 계획" }, href: "#" },
  },
];

const programs = [
  {
    school: "Cambridge QRT Trading & Risk Management Academy",
    period: "2024",
    organizer: "Cambridge University QRT (Quantitative Research Team)",
    details: {
      en: "Workshops on systematic trading: portfolio theory, factor models, backtesting, and risk controls. Built a small factor pipeline in Python and evaluated transaction cost models.",
      ko: "시스템 트레이딩 워크숍: 포트폴리오 이론, 팩터 모델, 백테스팅, 리스크 관리. Python으로 팩터 파이프라인을 구축하고 거래비용 모델을 평가.",
    },
    apply: { href: "#", email: profile.email },
    // logo: "/logos/qrt.png",
  },
  {
    school: "ALGOTRADE Hackathon (Top 10)",
    period: "2024",
    organizer: "ALGOTRADE",
    details: {
      en: "Designed a Raspberry Pi–based auto-execution bot with low-latency order routing and failover. Implemented basic risk limits and logging; measured end-to-end latency.",
      ko: "라즈베리파이 기반 자동주문 봇 설계(저지연 라우팅, 페일오버). 기본 리스크 한도와 로깅 구현, E2E 지연 측정.",
    },
    apply: { href: "#", email: profile.email },
    // logo: "/logos/algotrade.png",
  },
  {
    school: "기상 AI 부스트캠프 (Weather AI Bootcamp)",
    period: "2025",
    organizer: "NIMS (National Institute of Meteorological Sciences, 한국기상과학원)",
    details: {
      en: "Hands-on with weather datasets: preprocessing, feature engineering, and time-series/nowcasting models (Prophet, LSTM). Built evaluation with MASE/SMAPE and baseline comparison.",
      ko: "기상 데이터 전처리·특징공학, 시계열/나우캐스팅 모델(Prophet, LSTM) 실습. MASE/SMAPE 평가체계와 베이스라인 비교 구축.",
    },
    apply: { href: "#", email: profile.email },
    // logo: "/logos/weather-ai.png",
  },
  {
    school: "Microsoft AI School",
    period: "2025",
    organizer: "Microsoft",
    details: {
      en: "Team-based projects on agents, automation, model serving, and observability; building production-style PoCs and documenting outputs.",
      ko: "팀 프로젝트 중심(에이전트/오토메이션/모델 서빙/관측성)으로 실무형 PoC 제작 및 산출물 기록.",
    },
    apply: { href: "#", email: profile.email },
    // logo: "/logos/microsoft.png",
  },
  {
    school: "Metacode Data Analytics Bootcamp",
    period: "2025",
    organizer: "Metacode",
    details: {
      en: "Excel (Pivot/PowerQuery), Python (pandas/EDA), SQL (joins/window/CTE), and dashboard labs.",
      ko: "Excel(피벗/PowerQuery), Python(pandas/EDA), SQL(윈도우/조인/CTE), 대시보드 제작 실습.",
    },
    apply: { href: "#", email: profile.email },
    // logo: "/logos/metacode.png",
  },
];

const projects = [
  {
    title: "Auto-Research Agent for Quant Ideas",
    tags: ["AI", "Agents", "Finance"],
    status: "Planned",
    summary: {
      en: "Agent ingests news, papers, and filings, generates hypotheses, and queues backtests automatically.",
      ko: "리서치 에이전트가 뉴스·논문·공시를 요약하고 가설을 생성하여 백테스트 큐에 올리는 시스템.",
    },
    links: [{ label: "Spec", href: "#" }],
  },
  {
    title: "Execution Latency Profiler",
    tags: ["Automation", "Infra", "Trading"],
    status: "WIP",
    summary: {
      en: "Measures and visualizes routing latency across the execution pipeline (incl. Raspberry Pi experiments).",
      ko: "주문 라우팅 파이프라인의 레이턴시 계측/시각화 (Raspberry Pi 실험 포함).",
    },
    links: [{ label: "Repo", href: "#" }],
  },
  {
    title: "Timeseries Forecast Hub",
    tags: ["Data Analytics", "Time Series", "ML"],
    status: "Shipped",
    summary: {
      en: "Dashboard comparing ETS/Holt-Winters/Prophet/AutoARIMA with proper splits and MASE/SMAPE.",
      ko: "ETS/Holt-Winters/Prophet/AutoARIMA 비교 대시보드 (학습/검증 분리 & MASE/SMAPE).",
    },
    links: [{ label: "Demo", href: "#" }],
  },
  {
    title: "LLM-Powered Ops Co-Pilot",
    tags: ["AI", "Automation"],
    status: "WIP",
    summary: {
      en: "Automation assistant for operational reporting inspired by military situation boards.",
      ko: "군 경계/상황판 워크플로우에서 영감을 받은 실무용 보고 자동화 어시스턴트.",
    },
    links: [{ label: "Design Doc", href: "#" }],
  },
];

const skills = [
  "Python",
  "Pandas",
  "SQL",
  "PyTorch",
  "QuantConnect",
  "Refinitiv API",
  "Excel",
  "OpenCV",
  "Time Series (ETS/ARIMA/Prophet)",
  "Backtesting",
  "Portfolio Optimization",
  "Data Viz",
];

const certificates = [
  {
    name: "CFA Level I",
    issuer: "CFA Institute",
    period: "Aug 2022",
    details: "Passed Level I of the CFA Program.",
  },
  {
    name: "Associate degree in Business Management",
    issuer: "Korea National Institute for Lifelong Education",
    period: "Aug 2023",
    details: "Accounting (Principles, Intermediate, Cost), Auditing",
  },
];

/* -----------------------------
   Lightweight UI primitives
------------------------------*/
const Card = ({ children, className = "" }) => (
  <div
    className={`rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 ${className}`}
  >
    {children}
  </div>
);
const CardHeader = ({ children, className = "" }) => (
  <div
    className={`p-4 border-b border-neutral-200 dark:border-neutral-800 ${className}`}
  >
    {children}
  </div>
);
const CardContent = ({ children, className = "" }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);
const CardFooter = ({ children, className = "" }) => (
  <div
    className={`p-4 border-t border-neutral-200 dark:border-neutral-800 ${className}`}
  >
    {children}
  </div>
);
const CardTitle = ({ children, className = "" }) => (
  <h3 className={`font-semibold ${className}`}>{children}</h3>
);
const CardDescription = ({ children, className = "" }) => (
  <p
    className={`text-sm text-neutral-600 dark:text-neutral-400 ${className}`}
  >
    {children}
  </p>
);

const Badge = ({ children, variant = "secondary", className = "" }) => {
  const base = "inline-flex items-center px-2 py-0.5 rounded-full text-xs";
  const styles =
    variant === "secondary"
      ? "bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
      : "border border-neutral-300 dark:border-neutral-700";
  return <span className={`${base} ${styles} ${className}`}>{children}</span>;
};

const Button = ({
  children,
  href,
  variant = "solid",
  size = "md",
  className = "",
  ...props
}) => {
  const sizes = { sm: "px-2.5 py-1.5 text-sm", md: "px-3 py-2 text-sm" };
  const variants = {
    solid:
      "bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white",
    outline:
      "border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-900",
    ghost: "hover:bg-neutral-100 dark:hover:bg-neutral-900",
  };
  const cls = `inline-flex items-center gap-1 rounded-md ${sizes[size]} ${variants[variant]} ${className}`;
  if (href)
    return (
      <a href={href} className={cls} {...props}>
        {children}
      </a>
    );
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
};

const Input = (props) => (
  <input
    {...props}
    className={`w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-400 ${
      props.className || ""
    }`}
  />
);
const Textarea = (props) => (
  <textarea
    {...props}
    className={`w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-400 ${
      props.className || ""
    }`}
  />
);

/* -----------------------------
   UI Helpers & Layout
------------------------------*/
const Section = ({ id, title, icon, children }) => (
  <section id={id} className="scroll-mt-24">
    <Card>
      <CardHeader className="flex items-center gap-2">
        {icon}
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  </section>
);

const Pill = ({ children }) => (
  <span className="px-2 py-1 rounded-full text-xs border border-neutral-300 dark:border-neutral-700">
    {children}
  </span>
);

const StatusDot = ({ status }) => {
  const map = {
    Planned: "bg-neutral-400",
    WIP: "bg-blue-500",
    Shipped: "bg-green-500",
  };
  return (
    <span
      className={`inline-block w-2 h-2 rounded-full ${
        map[status] || "bg-neutral-400"
      }`}
    />
  );
};

/* ---- Avatar/Logo with initials fallback ---- */
function initialsFrom(text = "") {
  const words = text.replace(/[()]/g, "").split(/\s+/).filter(Boolean);
  if (!words.length) return "??";
  const first = words[0][0] || "";
  const last = words.length > 1 ? words[words.length - 1][0] || "" : "";
  return (first + last).toUpperCase();
}

function AvatarLogo({ src, name, size = 44 }) {
  // Resolve public URL for both Vite (import.meta.env.BASE_URL) and CRA (process.env.PUBLIC_URL)
  const base =
    (typeof import.meta !== "undefined" && import.meta.env && import.meta.env.BASE_URL) ||
    (typeof process !== "undefined" && process.env && process.env.PUBLIC_URL) ||
    "/";
  const joinBase = (u) => {
    if (!u) return "";
    // If absolute http(s), return as-is
    if (/^https?:\/\//i.test(u)) return u;
    // If starts with '/', join carefully with base (which may be '/repo/')
    const b = base.endsWith("/") ? base.slice(0, -1) : base;
    const s = u.startsWith("/") ? u : `/${u}`;
    return `${b}${s}`;
  };

  const resolved = joinBase(src);
  const box =
    "shrink-0 rounded-full ring-1 ring-neutral-200 dark:ring-neutral-800 bg-white dark:bg-white overflow-hidden";
  const style = { width: size, height: size };

  return (
    <span className={box} style={style}>
      {resolved ? (
        <>
          <img
            src={resolved}
            alt={`${name || "logo"} logo`}
            className="w-full h-full object-contain p-1"
            onError={(e) => {
              // Hide broken image and show initials fallback
              e.currentTarget.style.display = "none";
              const sib = e.currentTarget.nextSibling;
              if (sib) sib.style.display = "flex";
            }}
          />
          <span className="hidden w-full h-full items-center justify-center text-xs font-semibold" aria-hidden>
            {initialsFrom(name)}
          </span>
        </>
      ) : (
        <span className="flex w-full h-full items-center justify-center text-xs font-semibold" aria-hidden>
          {initialsFrom(name)}
        </span>
      )}
    </span>
  );
}

/* -----------------------------
   Apply helper (web ↔ mailto 자동 분기)
------------------------------*/
function buildApplyHref(p, lang = "en") {
  const isHttp = (u) => typeof u === "string" && /^https?:\/\//i.test(u);
  const enc = (s) => encodeURIComponent(s || "");
  const title = p?.school || "Program";
  const subject = lang === "en" ? `Application – ${title}` : `신청 – ${title}`;
  const body =
    lang === "en"
      ? `Hello,\n\nI would like to apply to ${title}.\n\nName: ${profile.name}\nLinkedIn: ${profile.links.linkedin}\nGitHub: ${profile.links.github}\n\nBrief background: AI • Automation • Quant.\n\nThank you.\n`
      : `안녕하세요,\n\n${title} 참가 신청 문의드립니다.\n\n이름: ${profile.name}\nLinkedIn: ${profile.links.linkedin}\nGitHub: ${profile.links.github}\n\n간단 소개: AI • Automation • Quant.\n\n감사합니다.\n`;
  if (isHttp(p?.apply?.href)) return p.apply.href;
  const email = p?.apply?.email || profile.email;
  return `mailto:${email}?subject=${enc(subject)}&body=${enc(body)}`;
}

// Helper: Parse education entry to extract institution, degree, and bullets
function parseEducation(ed, lang) {
  const [institutionRaw, degreeRaw] = (ed.school || "").split("—");
  const institution = (institutionRaw || "").trim();
  const degree = (degreeRaw || "").trim();
  const text = i18n(ed.details, lang);
  let bullets = [];
  if (typeof text === "string" && text) {
    bullets = text
      .split(/;\s*|•\s*/)
      .map((s) => s.trim())
      .filter(Boolean);
  }
  return { institution, degree, bullets };
}

function SectionBreak({ kicker, title, desc }) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {kicker && (
        <p className="uppercase tracking-widest text-xs text-neutral-500">
          {kicker}
        </p>
      )}
      <h2 className="mt-2 text-3xl md:text-5xl font-bold">{title}</h2>
      {desc && (
        <p className="mt-3 text-neutral-600 dark:text-neutral-400 text-base md:text-lg">
          {desc}
        </p>
      )}
    </div>
  );
}

function BigHero({ profile, lang }) {
  const t = copy[lang];
  return (
    <section className="relative overflow-hidden border-b border-neutral-200 dark:border-neutral-800">
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-neutral-100 dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-900" />
      <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-300/70 dark:border-neutral-700/70 px-3 py-1 text-xs text-neutral-600 dark:text-neutral-300">
            <Brain className="w-3.5 h-3.5" /> {t.hero.tags}
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-[1.1]">
            {profile.name}
          </h1>
          <p className="mt-3 text-xl md:text-2xl text-neutral-600 dark:text-neutral-300">
            {lang === "ko" ? profile.tagline.ko : profile.tagline.en}
          </p>
          <p className="mt-6 text-neutral-700 dark:text-neutral-300 max-w-xl">
            {t.now}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#projects" className="text-base px-4 py-2">
              {t.hero.btnProject} <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
            <Button href="#resume" variant="outline" className="text-base px-4 py-2">
              {t.hero.btnResume}
            </Button>
            <Button href="#investments" variant="outline" className="text-base px-4 py-2">
              {t.hero.btnInvest}
            </Button>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            <div>
              <div className="text-2xl font-bold">AI</div>
              <div className="text-xs text-neutral-500">
                {lang === "en" ? "Agents · Serving" : "에이전트 · 서빙"}
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold">Automation</div>
              <div className="text-xs text-neutral-500">
                {lang === "en" ? "Ops · Tooling" : "업스 · 툴링"}
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold">Quant</div>
              <div className="text-xs text-neutral-500">
                {lang === "en" ? "Backtests" : "백테스트"}
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex justify-center md:justify-end">
          <img
            src={heroImg}
            alt="Oliver Lee portrait"
            className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover ring-2 ring-neutral-300/60 dark:ring-neutral-700/60 shadow-md"
          />
        </div>
      </div>
    </section>
  );
}

/* -----------------------------
   i18n copy blocks
------------------------------*/
const copy = {
  en: {
    nav: {
      projects: "Projects",
      resume: "Resume",
      investments: "Investments",
      contact: "Contact",
    },
    hero: {
      tags: "AI · Automation · Quant",
      btnProject: "Project",
      btnResume: "Resume",
      btnInvest: "Investment",
    },
    now: (
      <>
        I built this site to log activities through Microsoft AI School.
        <br />
        I share ML and automation projects and records investments.
      </>
    ),
    sections: {
      nowKicker: "Now",
      inProgressTitle: "In Progress",
      inProgressDesc: "A snapshot of ongoing education, projects, and programs.",
      workKicker: "Work",
      projectsTitle: "Projects",
      projectsDesc: "Recent work and learning outputs.",
      resumeKicker: "Background",
      resumeTitle: "Resume",
      resumeDesc: "Experience · Education · Programs · Certifications.",
      portfolioKicker: "Portfolio",
      investmentsTitle: "Investments",
      investmentsDesc:
        "Drill-down by region → positions with weight · cost · price · return.",
      contactKicker: "Get in touch",
      contactTitle: "Contact",
    },
    investmentsTabs: { current: "Current", history: "History", ideas: "Ideas" },
    contact: { name: "Name", email: "Email", subject: "Subject", message: "Message", send: "Send" },
  },
  ko: {
    nav: { projects: "프로젝트", resume: "약력", investments: "투자", contact: "연락" },
    hero: { tags: "AI · Automation · Quant", btnProject: "프로젝트", btnResume: "약력", btnInvest: "투자" },
    now: (
      <>
        Microsoft AI School 활동을 기록하기 위해 웹사이트를 만들었습니다.
        <br />
        사무 자동화, 시스템 트레이딩, 데이터 과학 프로젝트를 공유합니다.
      </>
    ),
    sections: {
      nowKicker: "Now",
      inProgressTitle: "진행 중",
      inProgressDesc: "현재 진행 중인 교육·프로젝트·프로그램 요약",
      workKicker: "Work",
      projectsTitle: "프로젝트",
      projectsDesc: "최근 작업 및 학습 산출물",
      resumeKicker: "Background",
      resumeTitle: "약력",
      resumeDesc: "경력 · 학위 · 프로그램 · 자격증",
      portfolioKicker: "Portfolio",
      investmentsTitle: "투자",
      investmentsDesc: "지역 → 종목 드릴다운, 비중·매수가·현재가·수익률 표시",
      contactKicker: "Get in touch",
      contactTitle: "연락",
    },
    investmentsTabs: { current: "보유", history: "이력", ideas: "아이디어" },
    contact: { name: "이름", email: "이메일", subject: "제목", message: "메시지", send: "보내기" },
  },
};

/* -----------------------------
   Investments
------------------------------*/
const regions = [
  {
    name: "North America",
    key: "NA",
    weight: 0.45,
    positions: [
      { name: "QQQ (NASDAQ 100)", weight: 0.18, buy: 410, current: 455 },
      { name: "MSFT", weight: 0.12, buy: 380, current: 420 },
      { name: "XLV (Healthcare)", weight: 0.15, buy: 130, current: 137 },
    ],
  },
  {
    name: "APAC",
    key: "APAC",
    weight: 0.3,
    positions: [
      { name: "EWY (Korea)", weight: 0.12, buy: 59, current: 63 },
      { name: "TWT (Taiwan Tech ETF)", weight: 0.1, buy: 41, current: 43 },
      { name: "A2M (Aus)", weight: 0.08, buy: 5.5, current: 5.2 },
    ],
  },
  {
    name: "Europe",
    key: "EU",
    weight: 0.18,
    positions: [
      { name: "SXR8 (EU S&P500 UCITS)", weight: 0.1, buy: 85, current: 92 },
      { name: "ASML", weight: 0.08, buy: 890, current: 910 },
    ],
  },
  {
    name: "Emerging",
    key: "EM",
    weight: 0.07,
    positions: [{ name: "EEM (EM ETF)", weight: 0.07, buy: 38, current: 36.5 }],
  },
];
const pct = (x) => `${(x * 100).toFixed(1)}%`;
const ret = (b, c) => ((c - b) / b) * 100;

function Donut({ slices }) {
  const total = slices.reduce((a, b) => a + b.value, 0);
  let acc = 0;
  const grads = slices
    .map((s, i) => {
      const start = (acc / total) * 360;
      acc += s.value;
      const end = (acc / total) * 360;
      const hue = 210 + i * 40;
      return `hsl(${hue},60%,50%) ${start}deg ${end}deg`;
    })
    .join(", ");
  return (
    <div
      className="relative w-40 h-40 rounded-full"
      style={{ background: `conic-gradient(${grads})` }}
    >
      <div className="absolute inset-4 rounded-full bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800" />
    </div>
  );
}

function Investments({ lang }) {
  const [tab, setTab] = useState("current");
  const ti = copy[lang].investmentsTabs;
  const [open, setOpen] = useState({});
  const totalW = regions.reduce((a, r) => a + r.weight, 0);
  const slices = regions.map((r) => ({ label: r.name, value: r.weight }));

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Button variant={tab === "current" ? "solid" : "outline"} size="sm" onClick={() => setTab("current")}>
          {ti.current}
        </Button>
        <Button variant={tab === "history" ? "solid" : "outline"} size="sm" onClick={() => setTab("history")}>
          {ti.history}
        </Button>
        <Button variant={tab === "ideas" ? "solid" : "outline"} size="sm" onClick={() => setTab("ideas")}>
          {ti.ideas}
        </Button>
      </div>

      {tab === "current" && (
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="md:col-span-1 flex items-center justify-center">
            <CardContent className="flex flex-col items-center gap-3">
              <Donut slices={slices} />
              <div className="text-xs text-neutral-500">Region weights (total {pct(totalW)})</div>
              <div className="space-y-1 w-full">
                {regions.map((r) => (
                  <div key={r.key} className="flex items-center justify-between text-sm">
                    <span>{r.name}</span>
                    <span className="font-medium">{pct(r.weight)}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="md:col-span-2 space-y-3">
            {regions.map((r) => (
              <Card key={r.key}>
                <CardHeader className="flex items-center justify-between">
                  <CardTitle className="text-base">{r.name}</CardTitle>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setOpen({ ...open, [r.key]: !open[r.key] })}
                  >
                    {open[r.key] ? "Hide" : "Show"}
                  </Button>
                </CardHeader>
                {open[r.key] && (
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead className="text-left text-neutral-500">
                          <tr>
                            <th className="py-1">Ticker / Fund</th>
                            <th className="py-1">Weight</th>
                            <th className="py-1">Buy</th>
                            <th className="py-1">Current</th>
                            <th className="py-1">Return</th>
                          </tr>
                        </thead>
                        <tbody>
                          {r.positions.map((p, idx) => (
                            <tr key={idx} className="border-t border-neutral-200 dark:border-neutral-800">
                              <td className="py-1">{p.name}</td>
                              <td className="py-1">{pct(p.weight)}</td>
                              <td className="py-1">{p.buy}</td>
                              <td className="py-1">{p.current}</td>
                              <td className={`py-1 ${ret(p.buy, p.current) >= 0 ? "text-green-600" : "text-red-500"}`}>
                                {ret(p.buy, p.current).toFixed(1)}%
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      )}

      {tab === "history" && (
        <Card>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="text-left text-neutral-500">
                  <tr>
                    <th className="py-1">Date</th>
                    <th className="py-1">Action</th>
                    <th className="py-1">Asset</th>
                    <th className="py-1">Qty</th>
                    <th className="py-1">Price</th>
                    <th className="py-1">Note</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-neutral-200 dark:border-neutral-800">
                    <td className="py-1">2025-09-10</td>
                    <td className="py-1">Buy</td>
                    <td className="py-1">EWY</td>
                    <td className="py-1">+30</td>
                    <td className="py-1">60.2</td>
                    <td className="py-1">KOSPI rebound scenario</td>
                  </tr>
                  <tr className="border-t border-neutral-200 dark:border-neutral-800">
                    <td className="py-1">2025-08-28</td>
                    <td className="py-1">Trim</td>
                    <td className="py-1">QQQ</td>
                    <td className="py-1">-10</td>
                    <td className="py-1">450.0</td>
                    <td className="py-1">Rebalance: reduce NA exposure</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}

      {tab === "ideas" && (
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">EU Healthcare Basket</CardTitle>
              <CardDescription>Defensive growth, FX tailwind</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div>
                <strong>Thesis</strong>:{" "}
                {lang === "en" ? "Easing regulatory risk; aging-driven demand." : "규제 리스크 완화, 고령화 수요"}
              </div>
              <div>
                <strong>Risks</strong>:{" "}
                {lang === "en" ? "Drug pricing pressure; FX volatility." : "약가 압박, 환율 변동"}
              </div>
              <div>
                <strong>Catalysts</strong>:{" "}
                {lang === "en" ? "New approvals; dividend increases." : "신약 승인, 배당 증액"}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">APAC Semi Supply Chain</CardTitle>
              <CardDescription>Exploring capex-cycle upside</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div>
                <strong>Thesis</strong>:{" "}
                {lang === "en" ? "AI infra demand; reshoring amid geo-fragmentation." : "AI 인프라 수요, 미·중 분절화로 리쇼어링"}
              </div>
              <div>
                <strong>Risks</strong>: {lang === "en" ? "Cycle slowdown; geopolitics." : "사이클 둔화, 지정학"}
              </div>
              <div>
                <strong>Catalysts</strong>: {lang === "en" ? "Capex guidance; ASP trends." : "Capex 가이던스, ASP 추세"}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}

/* -----------------------------
   Main Component
------------------------------*/
export default function OliverPortfolio() {
  const [activeTab, setActiveTab] = useState("all");
  const [lang, setLang] = useState("en"); // "en" | "ko"
  const t = copy[lang];

  const filteredProjects = projects.filter((p) => {
    if (activeTab === "all") return true;
    if (["AI", "Automation", "Trading", "Analytics"].includes(activeTab)) {
      return p.tags.some((t) => t.toLowerCase().includes(activeTab.toLowerCase()));
    }
    if (activeTab === "Shipped") return p.status === "Shipped";
    return true;
  });

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-950/60 border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="w-5 h-5" />
            <span className="font-semibold">{profile.name}</span>
            <span className="hidden sm:inline text-neutral-500">
              — {lang === "ko" ? profile.tagline.ko : profile.tagline.en}
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-3 text-sm">
            <a href="#projects" className="hover:underline">{t.nav.projects}</a>
            <a href="#resume" className="hover:underline">{t.nav.resume}</a>
            <a href="#investments" className="hover:underline">{t.nav.investments}</a>
            <a href="#contact" className="hover:underline">{t.nav.contact}</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button href={profile.links.github} variant="outline" size="sm" target="_blank" rel="noreferrer">
              <Github className="w-4 h-4" /> GitHub
            </Button>
            <Button href={profile.links.linkedin} variant="outline" size="sm" target="_blank" rel="noreferrer">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </Button>

            {/* Language segmented control (flags only) */}
            <div className="inline-flex rounded-md overflow-hidden border border-neutral-300 dark:border-neutral-700 ml-2">
              <button
                onClick={() => setLang("en")}
                className={`px-2.5 py-1.5 text-sm ${lang === "en" ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900" : "bg-transparent text-neutral-700 dark:text-neutral-300"}`}
                aria-label="English"
                title="English (UK)"
              >
                🇬🇧
              </button>
              <button
                onClick={() => setLang("ko")}
                className={`px-2.5 py-1.5 text-sm border-l border-neutral-300 dark:border-neutral-700 ${lang === "ko" ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900" : "bg-transparent text-neutral-700 dark:text-neutral-300"}`}
                aria-label="Korean"
                title="Korean (KR)"
              >
                🇰🇷
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Section 1: Hero */}
      <BigHero profile={profile} lang={lang} />

      {/* Section 2: In Progress */}
      <div className="bg-neutral-50 dark:bg-neutral-950">
        <section className="max-w-6xl mx-auto px-4 py-12">
          <SectionBreak
            kicker={t.sections.nowKicker}
            title={t.sections.inProgressTitle}
            desc={t.sections.inProgressDesc}
          />
          <div className="grid md:grid-cols-3 gap-4">
            {highlights.map((h, i) => (
              <div key={i}>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-base flex items-center gap-2">
                      {h.icon}
                      {h.title}
                    </CardTitle>
                    <Button href={h.link.href} size="sm" variant="ghost" aria-label={i18n(h.link.label, lang)}>
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </CardHeader>
                  <CardContent className="text-sm text-neutral-600 dark:text-neutral-400">
                    {i18n(h.desc, lang)}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Section 3: Projects */}
      <div className="bg-white dark:bg-neutral-950">
        <section id="projects" className="max-w-6xl mx-auto px-4 py-12 space-y-6">
          <SectionBreak
            kicker={t.sections.workKicker}
            title={t.sections.projectsTitle}
            desc={t.sections.projectsDesc}
          />
          <Section id="projects-list" title="Projects" icon={<Rocket className="w-4 h-4" />}>
            <div className="w-full flex flex-wrap gap-2">
              {["all", "AI", "Automation", "Trading", "Analytics", "Shipped"].map((tab) => (
                <Button
                  key={tab}
                  variant={activeTab === tab ? "solid" : "outline"}
                  size="sm"
                  onClick={() => setActiveTab(tab)}
                >
                  {tab === "all" ? "All" : tab}
                </Button>
              ))}
            </div>
              <div className="mt-4 grid md:grid-cols-2 gap-4 items-stretch">
                {filteredProjects.map((p, i) => (
                  <Card key={i} className="flex flex-col h-full">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span className="flex items-center gap-2">
                          <StatusDot status={p.status} /> {p.title}
                        </span>
                        <div className="flex gap-1">
                          {p.tags.map((t, idx) => (
                            <Pill key={idx}>{t}</Pill>
                          ))}
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-neutral-700 dark:text-neutral-300 flex-grow">
                      {i18n(p.summary, lang)}
                    </CardContent>
                    {p.links?.length ? (
                      <CardFooter className="pt-0 mt-auto">
                        {p.links.map((l, idx) => (
                          <Button
                            key={idx}
                            href={l.href}
                            size="sm"
                            variant="outline"
                            className="mr-2"
                          >
                            {l.label}
                            <ExternalLink className="w-3 h-3" />
                          </Button>
                        ))}
                      </CardFooter>
                    ) : null}
                  </Card>
                ))}
              </div>
          </Section>
        </section>
      </div>

      {/* Section 4: Resume */}
      <div className="bg-neutral-50 dark:bg-neutral-950">
        <section id="resume" className="max-w-6xl mx-auto px-4 py-12 space-y-8">
          <SectionBreak
            kicker={t.sections.resumeKicker}
            title={t.sections.resumeTitle}
            desc={t.sections.resumeDesc}
          />

          {/* Education first */}
          <Section id="education" title="Education" icon={<School className="w-4 h-4" />}>
            <div className="space-y-4">
              {education
                .filter(
                  (ed) =>
                    ed.school.includes("Georgia Institute") ||
                    ed.school.includes("University of Cambridge")
                )
                .map((ed, i) => {
                  const { institution, degree, bullets } = parseEducation(ed, lang);
                  return (
                    <div
                      key={i}
                      className="border rounded-xl p-4 border-neutral-200 dark:border-neutral-800"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <AvatarLogo src={ed.logo} name={institution || ed.school} size={56} />
                          <div>
                            <div className="font-semibold text-lg md:text-xl">{institution || ed.school}</div>
                            {Boolean(degree) && (
                              <div className="text-sm text-neutral-200">{degree}</div>
                            )}
                          </div>
                        </div>
                        <span className="text-xs text-neutral-500">{ed.period}</span>
                      </div>

                      {bullets.length > 0 ? (
                        <ul className="mt-2 text-sm list-disc ml-6 space-y-1">
                          {bullets.map((b, idx) => (
                            <li key={idx}>{b}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
                          {i18n(ed.details, lang)}
                        </p>
                      )}
                    </div>
                  );
                })}
            </div>
          </Section>

          {/* Work Experience */}
          <Section id="experience" title="Work Experience" icon={<Workflow className="w-4 h-4" />}>
            <div className="space-y-4">
              {experience.map((e, i) => (
                <div key={i} className="border rounded-xl p-4 border-neutral-200 dark:border-neutral-800">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <AvatarLogo src={e.logo} name={e.org} size={56} />
                      <div>
                        <div className="font-semibold text-lg md:text-xl">{e.org}</div>
                        <div className="text-sm text-neutral-200">{e.title}</div>
                      </div>
                    </div>
                    <span className="text-xs text-neutral-500">{e.period}</span>
                  </div>
                  <ul className="mt-2 text-sm list-disc ml-6 space-y-1">
                    {e.bullets.map((b, idx) => (
                      <li key={idx}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          {/* Programs (Bootcamp/Hackathon/Program 통합) */}
          <Section id="programs" title="Training & Competition" icon={<Code2 className="w-4 h-4" />}>
            <div className="space-y-4">
              {programs.map((p, i) => {
                const href = buildApplyHref(p, lang);
                const isWeb = /^https?:\/\//i.test(href);
                return (
                  <div key={i} className="border rounded-xl p-4 border-neutral-200 dark:border-neutral-800">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <AvatarLogo src={p.logo} name={p.school} />
                        <div className="flex flex-col">
                          <h4 className="font-semibold">{p.school}</h4>
                          {p.organizer && (
                            <span className="mt-1 text-xs px-2 py-0.5 w-fit rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300">
                              {(lang === "en" ? "Organizer: " : "주최: ")}{p.organizer}
                            </span>
                          )}
                        </div>
                      </div>
                      <span className="text-xs text-neutral-500">{p.period}</span>
                    </div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
                      {i18n(p.details, lang)}
                    </p>
                    {p.apply && (
                      <div className="mt-3">
                        <Button
                          href={href}
                          size="sm"
                          variant="outline"
                          target={isWeb ? "_blank" : undefined}
                          rel={isWeb ? "noreferrer" : undefined}
                        >
                          {lang === "en" ? "Apply" : "신청"}
                          <ExternalLink className="w-3 h-3" />
                        </Button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </Section>

          {/* Certifications */}
          <Section id="certs" title="Certifications" icon={<Code2 className="w-4 h-4" />}>
            <div className="space-y-4">
              {certificates.map((c, i) => (
                <div key={i} className="border rounded-xl p-4 border-neutral-200 dark:border-neutral-800">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <AvatarLogo src={c.logo} name={c.issuer || c.name} />
                      <h4 className="font-semibold">
                        {c.name}
                        {c.issuer ? ` — ${c.issuer}` : ""}
                      </h4>
                    </div>
                    {c.period && <span className="text-xs text-neutral-500">{c.period}</span>}
                  </div>
                  {c.details && (
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">{c.details}</p>
                  )}
                </div>
              ))}
            </div>
          </Section>

          {/* Skills */}
          <Section id="skills" title="Skills" icon={<Code2 className="w-4 h-4" />}>
            <div className="flex flex-wrap gap-2">
              {skills.map((s, i) => (
                <Badge key={i} variant="secondary">
                  {s}
                </Badge>
              ))}
            </div>
          </Section>
        </section>
      </div>

      {/* Section 5: Investments */}
      <div className="bg-white dark:bg-neutral-950">
        <section id="investments" className="max-w-6xl mx-auto px-4 py-12 space-y-6">
          <SectionBreak
            kicker={t.sections.portfolioKicker}
            title={t.sections.investmentsTitle}
            desc={t.sections.investmentsDesc}
          />
        </section>
        <section className="max-w-6xl mx-auto px-4 pb-12">
          <Section id="investments-body" title="Dashboard" icon={<BarChart3 className="w-4 h-4" />}>
            <Investments lang={lang} />
          </Section>
        </section>
      </div>

      {/* Section 6: Contact (소제목 박스 제거, 큰 타이틀만 유지) */}
      <div className="bg-neutral-50 dark:bg-neutral-950">
        <section id="contact" className="max-w-6xl mx-auto px-4 py-12">
          <SectionBreak title={t.sections.contactTitle} />
          <Card id="contact-card">
            <CardContent>
              <div className="space-y-4">
                {/* 주소(링크) 표기 */}
                <div className="text-sm space-y-2">
                  <div>
                    <strong>Email:</strong>{" "}
                    <a className="underline" href={`mailto:${profile.email}`}>
                      {profile.email}
                    </a>
                  </div>
                  <div>
                    <strong>LinkedIn:</strong>{" "}
                    <a
                      className="underline"
                      href={profile.links.linkedin}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {profile.links.linkedin}
                    </a>
                  </div>
                  <div>
                    <strong>GitHub:</strong>{" "}
                    <a
                      className="underline"
                      href={profile.links.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {profile.links.github}
                    </a>
                  </div>
                </div>

                {/* 액션 버튼 */}
                <div className="flex flex-wrap gap-2">
                  <Button href={`mailto:${profile.email}`}>
                    <Mail className="w-4 h-4" />
                    Email
                  </Button>
                  <Button href={profile.links.linkedin} variant="outline" target="_blank" rel="noreferrer">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </Button>
                  <Button href={profile.links.github} variant="outline" target="_blank" rel="noreferrer">
                    <Github className="w-4 h-4" />
                    GitHub
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <footer className="py-10 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </footer>
    </div>
  );
}