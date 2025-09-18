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
  BookOpen,
  Rocket,
} from "lucide-react";

// ---------------------------------------------
// Editable content (keep these and tweak freely)
// ---------------------------------------------
const profile = {
  name: "Oliver Lee",
  tagline: "AI • Automation • Quant Trading • Data Analytics",
  location: "Seoul ↔ Cambridge",
  email: "oliverlee0902@gmail.com",
  phone: "+82 79 2386 5883",
  links: {
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
  },
  now:
    "Microsoft AI School 활동을 기록하고, AI/Automation/퀀트/데이터 분석 포트폴리오를 지속적으로 채워갑니다.",
};

const education = [
  {
    school: "Georgia Institute of Technology (OMS Analytics)",
    period: "Incoming Aug 2025",
    details: "Computational Data Analytics track (planned)",
  },
  {
    school: "University of Cambridge — BA Economics",
    period: "Oct 2022 – Jul 2025",
    details: "Modules: Time Series Methods, Microeconometrics, Corporate Finance, Asset Pricing",
  },
  {
    school: "Korea National Institute for Lifelong Education — AA Business Mgmt",
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
    title: "Metacode Data Analytics Bootcamp (ongoing)",
    icon: <School className="w-4 h-4" />,
    desc: "Excel · Python · SQL 핵심 데이터 분석 역량 재정비",
    link: { label: "실습 정리", href: "#" },
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
  "Python", "Pandas", "SQL", "PyTorch", "QuantConnect", "Refinitiv API", "Excel", "OpenCV",
  "Time Series (ETS/ARIMA/Prophet)", "Backtesting", "Portfolio Optimization", "Data Viz",
];

const certificates = [
  { name: "CFA Level I (2022)", issuer: "CFA Institute" },
];

const notes = [
  {
    title: "Exponential Smoothing 정리 + 실무 팁",
    date: "2025-09-17",
    excerpt:
      "α, β, γ 선택 직관과 교차검증 전략, 현업 트레이더들이 쓰는 기법 연결.",
    href: "#",
  },
  {
    title: "GAN vs Diffusion: 트레이딩 시그널 생성 관점",
    date: "2025-09-16",
    excerpt: "데이터 증강과 시뮬레이션 기반 리스크 시나리오.",
    href: "#",
  },
];

// ---------------------------------------------
// Lightweight UI primitives (Tailwind only)
// ---------------------------------------------
const Card = ({ children, className = "" }) => (
  <div className={`rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 ${className}`}>
    {children}
  </div>
);
const CardHeader = ({ children, className = "" }) => (
  <div className={`p-4 border-b border-neutral-200 dark:border-neutral-800 ${className}`}>{children}</div>
);
const CardContent = ({ children, className = "" }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);
const CardFooter = ({ children, className = "" }) => (
  <div className={`p-4 border-t border-neutral-200 dark:border-neutral-800 ${className}`}>{children}</div>
);
const CardTitle = ({ children, className = "" }) => (
  <h3 className={`font-semibold ${className}`}>{children}</h3>
);
const CardDescription = ({ children, className = "" }) => (
  <p className={`text-sm text-neutral-600 dark:text-neutral-400 ${className}`}>{children}</p>
);

const Badge = ({ children, variant = "secondary", className = "" }) => {
  const base = "inline-flex items-center px-2 py-0.5 rounded-full text-xs";
  const styles =
    variant === "secondary"
      ? "bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
      : "border border-neutral-300 dark:border-neutral-700";
  return <span className={`${base} ${styles} ${className}`}>{children}</span>;
};

const Button = ({ children, href, variant = "solid", size = "md", className = "", ...props }) => {
  const sizes = {
    sm: "px-2.5 py-1.5 text-sm",
    md: "px-3 py-2 text-sm",
  };
  const variants = {
    solid: "bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white",
    outline: "border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-900",
    ghost: "hover:bg-neutral-100 dark:hover:bg-neutral-900",
  };
  const cls = `inline-flex items-center gap-1 rounded-md ${sizes[size]} ${variants[variant]} ${className}`;
  if (href) return <a href={href} className={cls} {...props}>{children}</a>;
  return <button className={cls} {...props}>{children}</button>;
};

const Input = (props) => (
  <input
    {...props}
    className={`w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-400 ${props.className || ""}`}
  />
);
const Textarea = (props) => (
  <textarea
    {...props}
    className={`w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-400 ${props.className || ""}`}
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
  return <span className={`inline-block w-2 h-2 rounded-full ${map[status] || "bg-neutral-400"}`} />;
};

// ---------------------------------------------
// Main Component
// ---------------------------------------------
export default function OliverPortfolio() {
  const [activeTab, setActiveTab] = useState("all");

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
            <span className="hidden sm:inline text-neutral-500">— {profile.tagline}</span>
          </div>
          <nav className="hidden md:flex items-center gap-3 text-sm">
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#experience" className="hover:underline">Experience</a>
            <a href="#education" className="hover:underline">Education</a>
            <a href="#notes" className="hover:underline">Notes</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button href={profile.links.github} variant="outline" size="sm" target="_blank" rel="noreferrer">
              <Github className="w-4 h-4" /> GitHub
            </Button>
            <Button href={profile.links.linkedin} variant="outline" size="sm" target="_blank" rel="noreferrer">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          <div className="md:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl">안녕하세요, 올리버입니다 👋</CardTitle>
                <CardDescription>{profile.now}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="flex items-center gap-1"><Bot className="w-3 h-3"/>AI</Badge>
                  <Badge variant="secondary" className="flex items-center gap-1"><Workflow className="w-3 h-3"/>Automation</Badge>
                  <Badge variant="secondary" className="flex items-center gap-1"><LineChart className="w-3 h-3"/>Quant</Badge>
                  <Badge variant="secondary" className="flex items-center gap-1"><BarChart3 className="w-3 h-3"/>Data Analytics</Badge>
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">
                  Microsoft AI School에서 만든 산출물(프로젝트/노트/데모)을 아래에 계속 추가합니다.
                </div>
                <div className="flex gap-2">
                  <Button href="#projects">
                    최근 프로젝트 보기<ChevronRight className="w-4 h-4 ml-1"/>
                  </Button>
                  <Button href="#notes" variant="outline">
                    학습 노트<ChevronRight className="w-4 h-4 ml-1"/>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>지금(Now)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex items-center gap-2"><Calendar className="w-4 h-4"/>2025-09-18, Asia/Seoul</div>
                <ul className="list-disc ml-5 space-y-1">
                  <li>AI School 팀 과제 주제 브레인스토밍</li>
                  <li>트레이딩 실행(Execution) 레이턴시 측정 툴킷 리팩터링</li>
                  <li>ETS/ARIMA 비교 실험을 위한 데이터 파이프라인 정리</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-6xl mx-auto px-4 pb-4">
        <div className="grid md:grid-cols-3 gap-4">
          {highlights.map((h, i) => (
            <div key={i}>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-base flex items-center gap-2">{h.icon}{h.title}</CardTitle>
                  <Button href={h.link.href} size="sm" variant="ghost"><ExternalLink className="w-4 h-4"/></Button>
                </CardHeader>
                <CardContent className="text-sm text-neutral-600 dark:text-neutral-400">{h.desc}</CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <main id="projects" className="max-w-6xl mx-auto px-4 py-8 space-y-6">
        <Section id="projects" title="Projects" icon={<Rocket className="w-4 h-4"/>}>
          <div className="w-full flex flex-wrap gap-2">
            {["all","AI","Automation","Trading","Analytics","Shipped"].map(tab => (
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
                      <Button key={idx} href={l.href} size="sm" variant="outline" className="mr-2">
                        {l.label}<ExternalLink className="w-3 h-3"/>
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
          <Section id="experience" title="Experience" icon={<Workflow className="w-4 h-4"/>}>
            <div className="space-y-4">
              {experience.map((e, i) => (
                <div key={i} className="border-l-2 pl-4 border-neutral-200 dark:border-neutral-800">
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

          <Section id="education" title="Education" icon={<School className="w-4 h-4"/>}>
            <div className="space-y-4">
              {education.map((ed, i) => (
                <div key={i} className="border rounded-xl p-4 border-neutral-200 dark:border-neutral-800">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">{ed.school}</h4>
                    <span className="text-xs text-neutral-500">{ed.period}</span>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">{ed.details}</p>
                </div>
              ))}
              <div className="pt-2">
                {certificates.map((c, i) => (
                  <Badge key={i} variant="outline" className="mr-2 mb-2">{c.name}</Badge>
                ))}
              </div>
            </div>
          </Section>
        </div>

        {/* Skills */}
        <Section id="skills" title="Skills" icon={<Code2 className="w-4 h-4"/>}>
          <div className="flex flex-wrap gap-2">
            {skills.map((s, i) => (
              <Badge key={i} variant="secondary">{s}</Badge>
            ))}
          </div>
        </Section>

        {/* Notes / Blog */}
        <Section id="notes" title="Notes & Logs" icon={<BookOpen className="w-4 h-4"/>}>
          <div className="space-y-3">
            {notes.map((n, i) => (
              <Card key={i}>
                <CardHeader className="flex-row items-center justify-between gap-4">
                  <div>
                    <CardTitle className="text-base">{n.title}</CardTitle>
                    <CardDescription>{n.date}</CardDescription>
                  </div>
                  <Button href={n.href} size="sm" variant="outline">Read</Button>
                </CardHeader>
                <CardContent className="text-sm text-neutral-700 dark:text-neutral-300">{n.excerpt}</CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" title="Contact" icon={<Mail className="w-4 h-4"/>}>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2 text-sm">
              <div><strong>Email:</strong> <a className="underline" href={`mailto:${profile.email}`}>{profile.email}</a></div>
              <div className="flex items-center gap-2 mt-1">
                <Button href={profile.links.github} variant="outline" size="sm" target="_blank">
                  <Github className="w-4 h-4"/>GitHub
                </Button>
                <Button href={profile.links.linkedin} variant="outline" size="sm" target="_blank">
                  <Linkedin className="w-4 h-4"/>LinkedIn
                </Button>
              </div>
            </div>
            <ContactForm />
          </div>
        </Section>

        <footer className="py-10 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} {profile.name}. Built with ❤️ for learning and shipping fast.
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
        <Input placeholder="이름" required />
        <Input placeholder="이메일" type="email" required />
      </div>
      <Input placeholder="제목" required />
      <Textarea placeholder="메시지" rows={4} required />
      <Button type="submit">Send</Button>
      {sent && (
        <p className="text-xs text-green-600">Demo only — 이메일 전송은 백엔드 연결 후 활성화됩니다.</p>
      )}
    </form>
  );
}
