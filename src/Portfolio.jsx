import React, { useState } from "react";
import {
  Brain,
  BarChart3,
  Bot,
  LineChart,
  Mail,
  Github,
  Linkedin,
  Calendar,
  Trophy,
  School,
  Workflow,
  ChevronRight,
  ExternalLink,
  Code2,
  Rocket,
} from "lucide-react";
import heroImg from "./assets/oliver.jpeg";

// ---------------------------------------------
// Editable content (keep these and tweak freely)
// ---------------------------------------------
const profile = {
  name: "Oliver Lee",
  tagline: "AI Engineer, Investor",
  location: "Seoul ↔ Cambridge",
  email: "oliverlee0902@gmail.com",
  links: {
    github: "https://github.com/OliverLee9292",
    linkedin: "https://www.linkedin.com/in/oliver-lee92",
  },
  now:
    <>Microsoft AI School 활동을 기록하기 위해 웹사이트를 만들었습니다.<br /> 사무 자동화, 시스템 트레이딩, 데이터 과학 프로젝트를 공유합니다.</>,
};

const education = [
  {
    school: "Georgia Institute of Technology — Master of Analytics",
    period: "Aug 2025 – Present",
    details:
      "Computational Data Analytics track; courses planned/underway: Data & Visual Analytics, Machine Learning, Simulation, Statistical Methods",
  },
  {
    school: "Microsoft AI School",
    period: "2025 – Present",
    details:
      "팀 프로젝트 중심(에이전트/오토메이션/모델 서빙/관측성)으로 실무 PoC 제작 및 산출물 기록",
  },
  {
    school: "Metacode Data Analytics Bootcamp — Certificate",
    period: "Completed 2025",
    details:
      "Excel(피벗/PowerQuery), Python(pandas/EDA), SQL(윈도우/조인/CTE), 대시보드 제작 실습",
  },
  {
    school: "The Modellers — Financial Modelling 101×201 (Hugel case)",
    period: "2024",
    details:
      "3-Statement model, DCF/상대가치, 드라이버 기반 시나리오 테이블을 Excel로 구축",
  },
  {
    school: "University of Cambridge — BA Economics",
    period: "Oct 2022 – Jul 2025",
    details:
      "Modules: Time Series Methods, Microeconometrics, Corporate Finance, Asset Pricing",
  },
  {
    school:
      "Korea National Institute for Lifelong Education — AA Business Mgmt",
    period: "Certified Aug 2023",
    details: "Accounting (Principles, Intermediate, Cost), Auditing",
  },
];

const experience = [
  {
    org: "Republic of Korea Army, Ground Operations Command",
    title: "Command Centre Operator (Sergeant)",
    period: "Mar 2021 – Sep 2022",
    bullets: [
      "Twice-daily strategic briefings to senior command",
      "Real-time ops data governance across 8 corps; hourly dashboard updates",
      "Crisis ops with composure and rotating shifts",
    ],
  },
  {
    org: "Chonnam National University — Agricultural Big-Data Group",
    title: "Summer Research Intern",
    period: "Jul 2020 – Sep 2020",
    bullets: [
      "Built R web crawler for time-dependent data collection",
      "Labeled 4,000 bell pepper images; preprocessing/augmentation with OpenCV/PIL/Keras",
      "Trained GANs in PyTorch; evaluated with IS/FID",
    ],
  },
  {
    org: "Korea Transport Institute — Centre for Global Transport Cooperation",
    title: "Research Assistant",
    period: "Mar 2020 – Jul 2020",
    bullets: [
      "Updated ASEAN macro data; researched EU emission standards",
      "Seminar logistics, expense filing, meeting notes",
    ],
  },
];

const highlights = [
  {
    title: "ALGOTRADE Hackathon — Top 10",
    icon: <Trophy className="w-4 h-4" />,
    desc: "Raspberry Pi 기반 자동주문 시스템으로 경쟁 우위 확보 (속도 최적화)",
    link: { label: "발표 스니펫", href: "#" },
  },
  {
    title: "QRT Trading & Risk Management Academy",
    icon: <LineChart className="w-4 h-4" />,
    desc: "Refinitiv API 데이터 연동, 백테스팅 및 포트폴리오 최적화",
    link: { label: "노트 보기", href: "#" },
  },
  {
    title: "Metacode Data Analytics Bootcamp — Completed",
    icon: <School className="w-4 h-4" />,
    desc: "Excel(피벗/PowerQuery) · Python(pandas/EDA) · SQL(윈도우/CTE) 실습 집중 수료",
    link: { label: "실습 정리", href: "#" },
  },
  {
    title: "Microsoft AI School — Projects in Progress",
    icon: <Bot className="w-4 h-4" />,
    desc: "에이전트/자동화/모델 서빙 중심 팀 과제 진행 중",
    link: { label: "진행 로그", href: "#" },
  },
];

// "Projects" are meant to be filled as Microsoft AI School progresses.
// Use status to surface what’s in-flight vs shipped.
const projects = [
  {
    title: "Auto-Research Agent for Quant Ideas",
    tags: ["AI", "Agents", "Finance"],
    status: "Planned",
    summary:
      "리서치 에이전트가 뉴스·논문·공시를 요약하고 가설을 생성하여 백테스트 큐에 올리는 시스템.",
    links: [{ label: "Spec", href: "#" }],
  },
  {
    title: "Execution Latency Profiler",
    tags: ["Automation", "Infra", "Trading"],
    status: "WIP",
    summary:
      "주문 라우팅 파이프라인의 레이턴시 계측/시각화 (Raspberry Pi 실험 포함).",
    links: [{ label: "Repo", href: "#" }],
  },
  {
    title: "Timeseries Forecast Hub",
    tags: ["Data Analytics", "Time Series", "ML"],
    status: "Shipped",
    summary:
      "ETS/Holt-Winters/Prophet/AutoARIMA 비교 대시보드 (학습/검증 분리 & MASE/SMAPE).",
    links: [{ label: "Demo", href: "#" }],
  },
  {
    title: "LLM-Powered Ops Co-Pilot",
    tags: ["AI", "Automation"],
    status: "WIP",
    summary:
      "군 경계/상황판 워크플로우에서 영감을 받은 실무용 보고 자동화 어시스턴트.",
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

const certificates = [{ name: "CFA Level I (2022)", issuer: "CFA Institute" }];

// ---------------------------------------------
// Lightweight UI primitives (Tailwind only)
// ---------------------------------------------
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
  const sizes = {
    sm: "px-2.5 py-1.5 text-sm",
    md: "px-3 py-2 text-sm",
  };
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

// ---------------------------------------------
// UI Helpers
// ---------------------------------------------
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

// ---------------------------------------------
// Big hero & section break (Zach-style)
// ---------------------------------------------
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

function BigHero({ profile }) {
  return (
    <section className="relative overflow-hidden border-b border-neutral-200 dark:border-neutral-800">
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-neutral-100 dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-900" />
      <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-300/70 dark:border-neutral-700/70 px-3 py-1 text-xs text-neutral-600 dark:text-neutral-300">
            <Brain className="w-3.5 h-3.5" /> AI · Automation · Quant
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-[1.1]">
            {profile.name}
          </h1>
          <p className="mt-3 text-xl md:text-2xl text-neutral-600 dark:text-neutral-300">
            {profile.tagline}
          </p>
          <p className="mt-6 text-neutral-700 dark:text-neutral-300 max-w-xl">
            {profile.now}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#projects" className="text-base px-4 py-2">
              최근 프로젝트 보기 <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
            <Button href="#investments" variant="outline" className="text-base px-4 py-2">
              Investment 대시보드
            </Button>
            <Button href="#" variant="outline" className="text-base px-4 py-2">
              Blog
            </Button>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            <div>
              <div className="text-2xl font-bold">AI</div>
              <div className="text-xs text-neutral-500">Agents · Serving</div>
            </div>
            <div>
              <div className="text-2xl font-bold">Automation</div>
              <div className="text-xs text-neutral-500">Ops · Tooling</div>
            </div>
            <div>
              <div className="text-2xl font-bold">Quant</div>
              <div className="text-xs text-neutral-500">Backtests</div>
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

// ---------------------------------------------
// Investments data & components
// ---------------------------------------------
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

function pct(x) {
  return `${(x * 100).toFixed(1)}%`;
}
function ret(buy, cur) {
  return ((cur - buy) / buy) * 100;
}

function Donut({ slices }) {
  // slices: [{ label, value }]
  const total = slices.reduce((a, b) => a + b.value, 0);
  let acc = 0;
  const grads = slices
    .map((s, i) => {
      const start = (acc / total) * 360;
      acc += s.value;
      const end = (acc / total) * 360;
      const hue = 210 + i * 40; // simple distinct hues
      return `hsl(${hue},60%,50%) ${start}deg ${end}deg`;
    })
    .join(", ");
  const style = {
    background: `conic-gradient(${grads})`,
  };
  return (
    <div className="relative w-40 h-40 rounded-full" style={style}>
      <div className="absolute inset-4 rounded-full bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800" />
    </div>
  );
}

function Investments() {
  const [tab, setTab] = useState("current");
  const [open, setOpen] = useState({}); // region accordion

  const totalW = regions.reduce((a, r) => a + r.weight, 0);
  const slices = regions.map((r) => ({ label: r.name, value: r.weight }));

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Button
          variant={tab === "current" ? "solid" : "outline"}
          size="sm"
          onClick={() => setTab("current")}
        >
          Current
        </Button>
        <Button
          variant={tab === "history" ? "solid" : "outline"}
          size="sm"
          onClick={() => setTab("history")}
        >
          History
        </Button>
        <Button
          variant={tab === "ideas" ? "solid" : "outline"}
          size="sm"
          onClick={() => setTab("ideas")}
        >
          Ideas
        </Button>
      </div>

      {tab === "current" && (
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="md:col-span-1 flex items-center justify-center">
            <CardContent className="flex flex-col items-center gap-3">
              <Donut slices={slices} />
              <div className="text-xs text-neutral-500">
                Region weights (total {pct(totalW)})
              </div>
              <div className="space-y-1 w-full">
                {regions.map((r) => (
                  <div
                    key={r.key}
                    className="flex items-center justify-between text-sm"
                  >
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
                    onClick={() =>
                      setOpen({ ...open, [r.key]: !open[r.key] })
                    }
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
                            <tr
                              key={idx}
                              className="border-t border-neutral-200 dark:border-neutral-800"
                            >
                              <td className="py-1">{p.name}</td>
                              <td className="py-1">{pct(p.weight)}</td>
                              <td className="py-1">{p.buy}</td>
                              <td className="py-1">{p.current}</td>
                              <td
                                className={`py-1 ${
                                  ret(p.buy, p.current) >= 0
                                    ? "text-green-600"
                                    : "text-red-500"
                                }`}
                              >
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
                    <td className="py-1">KOSPI 반등 시나리오</td>
                  </tr>
                  <tr className="border-t border-neutral-200 dark:border-neutral-800">
                    <td className="py-1">2025-08-28</td>
                    <td className="py-1">Trim</td>
                    <td className="py-1">QQQ</td>
                    <td className="py-1">-10</td>
                    <td className="py-1">450.0</td>
                    <td className="py-1">리밸런스: NA 비중 축소</td>
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
              <CardDescription>
                Defensive growth, FX tailwind 가능
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div>
                <strong>Thesis</strong>: 규제 리스크 완화, 고령화 수요
              </div>
              <div>
                <strong>Risks</strong>: 약가 압박, 환율 변동
              </div>
              <div>
                <strong>Catalysts</strong>: 신약 승인, 배당 증액
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">APAC Semi Supply Chain</CardTitle>
              <CardDescription>Capex cycle 업사이드 탐색</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div>
                <strong>Thesis</strong>: AI 인프라 수요, 미·중 분절화로 리쇼어링
              </div>
              <div>
                <strong>Risks</strong>: 사이클 둔화, 지정학
              </div>
              <div>
                <strong>Catalysts</strong>: Capex 가이던스, ASP 추세
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------
// Main Component
// ---------------------------------------------
export default function OliverPortfolio() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects = projects.filter((p) => {
    if (activeTab === "all") return true;
    if (["AI", "Automation", "Trading", "Analytics"].includes(activeTab)) {
      return p.tags.some((t) =>
        t.toLowerCase().includes(activeTab.toLowerCase())
      );
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
              — {profile.tagline}
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-3 text-sm">
            <a href="#projects" className="hover:underline">
              Projects
            </a>
            <a href="#experience" className="hover:underline">
              Experience
            </a>
            <a href="#education" className="hover:underline">
              Education
            </a>
            <a href="#investments" className="hover:underline">
              Investments
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <Button href="#" variant="outline" size="sm">
              Blog
            </Button>
            <Button
              href={profile.links.github}
              variant="outline"
              size="sm"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="w-4 h-4" /> GitHub
            </Button>
            <Button
              href={profile.links.linkedin}
              variant="outline"
              size="sm"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </Button>
          </div>
        </div>
      </header>

      {/* Big Hero */}
      <BigHero profile={profile} />

      {/* Highlights */}
      <section className="max-w-6xl mx-auto px-4 pb-4">
        <div className="grid md:grid-cols-3 gap-4">
          {highlights.map((h, i) => (
            <div key={i}>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-base flex items-center gap-2">
                    {h.icon}
                    {h.title}
                  </CardTitle>
                  <Button href={h.link.href} size="sm" variant="ghost">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </CardHeader>
                <CardContent className="text-sm text-neutral-600 dark:text-neutral-400">
                  {h.desc}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <main
        id="projects"
        className="max-w-6xl mx-auto px-4 py-8 space-y-6"
      >
        <SectionBreak kicker="Work" title="Projects" desc="최근 작업과 학습 산출물 모음" />
        <Section
          id="projects"
          title="Projects"
          icon={<Rocket className="w-4 h-4" />}
        >
          <div className="w-full flex flex-wrap gap-2">
            {["all", "AI", "Automation", "Trading", "Analytics", "Shipped"].map(
              (tab) => (
                <Button
                  key={tab}
                  variant={activeTab === tab ? "solid" : "outline"}
                  size="sm"
                  onClick={() => setActiveTab(tab)}
                >
                  {tab === "all" ? "All" : tab}
                </Button>
              )
            )}
          </div>

          <div className="mt-4 grid md:grid-cols-2 gap-4">
            {filteredProjects.map((p, i) => (
              <Card key={i} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <StatusDot status={p.status} />
                      {p.title}
                    </span>
                    <div className="flex gap-1">
                      {p.tags.map((t, idx) => (
                        <Pill key={idx}>{t}</Pill>
                      ))}
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-neutral-700 dark:text-neutral-300">
                  {p.summary}
                </CardContent>
                {p.links?.length ? (
                  <CardFooter className="pt-0">
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

        {/* Experience & Education */}
        <div className="grid md:grid-cols-2 gap-6">
          <Section
            id="experience"
            title="Experience"
            icon={<Workflow className="w-4 h-4" />}
          >
            <div className="space-y-4">
              {experience.map((e, i) => (
                <div
                  key={i}
                  className="border-l-2 pl-4 border-neutral-200 dark:border-neutral-800"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">{e.title}</h4>
                    <span className="text-xs text-neutral-500">{e.period}</span>
                  </div>
                  <div className="text-sm text-neutral-500">{e.org}</div>
                  <ul className="mt-2 text-sm list-disc ml-5 space-y-1">
                    {e.bullets.map((b, idx) => (
                      <li key={idx}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          <Section
            id="education"
            title="Education"
            icon={<School className="w-4 h-4" />}
          >
            <div className="space-y-4">
              {education.map((ed, i) => (
                <div
                  key={i}
                  className="border rounded-xl p-4 border-neutral-200 dark:border-neutral-800"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">{ed.school}</h4>
                    <span className="text-xs text-neutral-500">
                      {ed.period}
                    </span>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                    {ed.details}
                  </p>
                </div>
              ))}
              <div className="pt-2">
                {certificates.map((c, i) => (
                  <Badge key={i} variant="outline" className="mr-2 mb-2">
                    {c.name}
                  </Badge>
                ))}
              </div>
            </div>
          </Section>
        </div>

        {/* Investments */}
        <Section
          id="investments"
          title="Investments"
          icon={<BarChart3 className="w-4 h-4" />}
        >
          <Investments />
        </Section>

        {/* Contact */}
        <Section id="contact" title="Contact" icon={<Mail className="w-4 h-4" />}>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2 text-sm">
              <div>
                <strong>Email:</strong>{" "}
                <a className="underline" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <Button
                  href={profile.links.github}
                  variant="outline"
                  size="sm"
                  target="_blank"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </Button>
                <Button
                  href={profile.links.linkedin}
                  variant="outline"
                  size="sm"
                  target="_blank"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </Button>
              </div>
            </div>
            <ContactForm />
          </div>
        </Section>

        <footer className="py-10 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} {profile.name}. Built with ❤️ for learning
          and shipping fast.
        </footer>
      </main>
    </div>
  );
}

// ---------------------------------------------
// Contact form (static demo)
// ---------------------------------------------
function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="space-y-3"
    >
      <div className="grid grid-cols-2 gap-2">
        <Input placeholder="Name" required />
        <Input placeholder="Email" type="email" required />
      </div>
      <Input placeholder="Subject" required />
      <Textarea placeholder="Message" rows={4} required />
      <Button type="submit">Send</Button>
      {sent && (
        <p className="text-xs text-green-600">
          Demo only — Email sending will be enabled after backend connection.
        </p>
      )}
    </form>
  );
}