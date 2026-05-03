/* DK Hunters — main app */
const { useState, useEffect, useRef, useMemo } = React;

/* ─────────── i18n ─────────── */
const COPY = {
  pt: {
    nav: ["Como Funciona", "Benefícios", "Planos", "FAQ"],
    navCta: "Começar Agora",
    heroEyebrow: "AUTO FARM PREMIUM • V4.2",
    heroH1a: "Automatize",
    heroH1b: "seus ganhos",
    heroH1c: "com o DK Hunters",
    heroSub:
      "O bot premium de auto farm que opera 24h por dia com performance extrema. Multi-conta, indetectável, escalável.",
    ctaPrimary: "Começar Agora",
    ctaSecondary: "Ver Planos",
    chips: [
      "24/7 Online",
      "Auto Farm",
      "Alta Performance",
      "Seguro",
      "Suporte Premium",
    ],
    statBoxes: [
      { lbl: "Farm hoje", val: "R$ 18.420" },
      { lbl: "Bots ativos", val: "247", live: true },
      { lbl: "Uptime", val: "99.9%" },
    ],

    techStrip: [
      "Chromium Indetectável",
      "Proxy Rotativa",
      "Captcha Auto Solver",
      "Multi Account",
      "Auto Farm AI",
      "24/7 Uptime",
      "Anti-Ban Engine",
      "VIP Support",
    ],
    howEyebrow: "FLUXO COMPLETO",
    howH2: "Como Funciona",
    howSub:
      "Em três passos você está farmando. Sem fricção, sem setup técnico complexo.",
    steps: [
      {
        n: "01",
        title: "Comprar",
        desc: "Escolha seu plano e receba acesso instantâneo ao painel premium DK Hunters via Discord.",
      },
      {
        n: "02",
        title: "Configurar",
        desc: "Importe suas contas, ajuste o farm AI e ative as proxies rotativas em menos de 2 minutos.",
      },
      {
        n: "03",
        title: "Lucrar",
        desc: "Deixe o bot operar 24/7. Acompanhe métricas em tempo real direto do dashboard.",
      },
    ],

    benEyebrow: "TUDO QUE VOCÊ PRECISA",
    benH2: "Benefícios do Bot",
    benSub:
      "Engineered para escala. Cada feature foi calibrada para máxima performance e zero detecção.",
    benefits: [
      {
        title: "Auto Farm Inteligente",
        desc: "IA proprietária que aprende padrões de farm e otimiza por conta automaticamente.",
      },
      {
        title: "Multi Contas",
        desc: "Rode até 100 contas simultâneas em paralelo, sem perda de performance.",
      },
      {
        title: "Proxy Rotativa",
        desc: "Pool de IPs residenciais premium rotacionando a cada sessão.",
      },
      {
        title: "Captcha Auto Solver",
        desc: "Resolução automática 24/7 com taxa de acerto acima de 98.7%.",
      },
      {
        title: "Chromium Indetectável",
        desc: "Engine custom anti-fingerprint, anti-detect e anti-ban de última geração.",
      },
      {
        title: "Alta Performance",
        desc: "Otimizado para baixo consumo de RAM e CPU, mesmo com dezenas de instâncias.",
      },
      {
        title: "Suporte VIP",
        desc: "Atendimento dedicado via Discord privado, com SLA de resposta em até 15 min.",
      },
      {
        title: "Atualizações Constantes",
        desc: "Patches semanais e novas features liberadas sem custo adicional.",
      },
    ],

    panelEyebrow: "DENTRO DO PAINEL",
    panelH2: "Dashboard Premium",
    panelSub:
      "Controle total das suas contas, métricas e farm em uma interface dark + dourada cinematográfica.",
    plansEyebrow: "ESCOLHA SEU ACESSO",
    plansH2: "Planos Premium",
    plansSub:
      "Comece pequeno ou trave o vitalício e nunca mais pague. Acesso instantâneo após o pagamento.",
    plans: [
      {
        tag: "Diário",
        desc: "Para testar o poder do DK Hunters por 24h.",
        price: "20",
        per: "/dia",
        features: [
          "Auto Farm 24h",
          "1 conta ativa",
          "Suporte standard",
          "Captcha Solver",
          "Acesso ao painel",
        ],
        cta: "Começar Agora",
      },
      {
        tag: "Mensal",
        desc: "O mais escolhido por farmers profissionais.",
        price: "150",
        per: "/mês",
        features: [
          "Auto Farm 30 dias",
          "10 contas ativas",
          "Proxy rotativa premium",
          "Suporte prioritário",
          "Multi-instância",
          "Updates inclusos",
        ],
        cta: "Assinar Mensal",
      },
      {
        tag: "Vitalício",
        desc: "Pague uma vez. Lucre para sempre.",
        price: "350",
        per: "/único",
        features: [
          "Auto Farm ilimitado",
          "Contas ilimitadas",
          "Proxy premium VIP",
          "Suporte VIP 24/7",
          "Todas as features futuras",
          "Acesso ao Discord VIP",
          "Sem mensalidades",
        ],
        cta: "Garantir Vitalício",
        featured: true,
        badge: "MAIS VENDIDO",
      },
    ],

    statsEyebrow: "NÚMEROS QUE FALAM",
    statsH2: "Confiado por milhares",
    stats: [
      { num: "5.000+", lbl: "Usuários ativos" },
      { num: "R$ 2M+", lbl: "Processados" },
      { num: "99.9%", lbl: "Uptime garantido" },
      { num: "24h", lbl: "Suporte premium" },
    ],

    testEyebrow: "RESULTADOS REAIS",
    testH2: "O que dizem nossos clientes",
    testSub:
      "Mais de 5.000 farmers profissionais já estão escalando com o DK Hunters.",
    testimonials: [
      {
        quote:
          "Em 3 dias o bot pagou o plano mensal. Configurei e esqueci, simplesmente roda. Melhor compra do ano.",
        name: "Lucas M.",
        handle: "@lucasdrift",
      },
      {
        quote:
          "Suporte VIP responde em minutos. Tive um problema às 2h da manhã e resolveram na hora. Surreal.",
        name: "Rafael K.",
        handle: "@rafa_k",
      },
      {
        quote:
          "Já testei vários bots. O DK Hunters é o único que não me deu ban em multi conta. Indetectável de verdade.",
        name: "Bianca T.",
        handle: "@bia_farm",
      },
      {
        quote:
          "Comprei o vitalício e em 2 meses já tinha pago. Hoje rodo 50 contas paralelas sem dor de cabeça.",
        name: "Diego R.",
        handle: "@diego_auto",
      },
      {
        quote:
          "A interface é absurda. Parece que tô usando um software de empresa séria, não um bot.",
        name: "Camila S.",
        handle: "@cami.s",
      },
      {
        quote:
          "Captcha solver funciona 99% das vezes. Os outros bots me deixavam travado, esse não.",
        name: "André P.",
        handle: "@andre.p",
      },
    ],

    faqEyebrow: "DÚVIDAS",
    faqH2: "Perguntas Frequentes",
    faq: [
      {
        q: "É seguro usar o DK Hunters?",
        a: "Sim, 100% seguro. Utilizamos criptografia de ponta e servidores protegidos. Seus dados e credenciais ficam totalmente seguros.",
      },
      {
        q: "Quanto tempo leva para começar?",
        a: "Acesso é instantâneo após o pagamento. O bot começa a operar imediatamente após a ativação. Os resultados variam, mas a maioria dos usuários vê retorno já nas primeiras horas.",
      },
      {
        q: "Funciona em Mac e Windows?",
        a: "Atualmente o painel roda em Windows 10/11 (64-bit) e Linux. Versão Mac em beta para clientes vitalícios.",
      },
      {
        q: "Como funciona o suporte?",
        a: "Oferecemos suporte humanizado via WhatsApp 24h. Nossa equipe está sempre disponível para tirar dúvidas e ajudar na configuração.",
      },
      {
        q: "Tem garantia ou reembolso?",
        a: "Garantia de 7 dias para o plano mensal e vitalício. Se o bot não funcionar como prometido, devolvemos 100%.",
      },
      {
        q: "Posso testar antes de comprar?",
        a: "Sim! Temos o plano Diária para você testar todas as funcionalidades por 24h antes de fazer um compromisso maior.",
      },
      {
        q: "Recebo atualizações?",
        a: "Sim. Updates semanais inclusos em todos os planos. Vitalício recebe acesso antecipado às novas features.",
      },
    ],

    ctaFinalEyebrow: "ÚLTIMA CHANCE",
    ctaFinalH2a: "Comece agora",
    ctaFinalH2b: "e automatize seus resultados",
    ctaFinalSub:
      "5.000+ farmers já estão escalando com o DK Hunters. Não fique de fora.",
    ctaFinalBtn: "Garantir Acesso Vitalício",
    ctaFinalNote: "Pagamento seguro • Acesso instantâneo • Garantia 7 dias",
    footTag: "Auto Farm Premium • V4.2",
    footColTitles: ["Produto", "Suporte", "Legal"],
    footProduct: ["Recursos", "Planos", "Painel", "Updates"],
    footSupport: ["Discord", "FAQ", "Tutoriais", "Status"],
    footLegal: ["Termos", "Privacidade", "Reembolso"],
    footCopyright: "© 2026 DK HUNTERS — TODOS OS DIREITOS RESERVADOS",
  },
  en: {
    nav: ["How it works", "Benefits", "Plans", "FAQ"],
    navCta: "Start Now",
    heroEyebrow: "AUTO FARM PREMIUM • V4.2",
    heroH1a: "Automate",
    heroH1b: "your earnings",
    heroH1c: "with DK Hunters",
    heroSub:
      "The premium auto-farm bot running 24/7 with extreme performance. Multi-account, undetectable, scalable.",
    ctaPrimary: "Start Now",
    ctaSecondary: "View Plans",
    chips: [
      "24/7 Online",
      "Auto Farm",
      "High Performance",
      "Secure",
      "Premium Support",
    ],
    statBoxes: [
      { lbl: "Today's farm", val: "R$ 18,420" },
      { lbl: "Active bots", val: "247", live: true },
      { lbl: "Uptime", val: "99.9%" },
    ],

    techStrip: [
      "Undetectable Chromium",
      "Rotating Proxy",
      "Captcha Auto Solver",
      "Multi Account",
      "Auto Farm AI",
      "24/7 Uptime",
      "Anti-Ban Engine",
      "VIP Support",
    ],
    howEyebrow: "FULL FLOW",
    howH2: "How it works",
    howSub:
      "Three steps and you're farming. No friction, no complex technical setup.",
    steps: [
      {
        n: "01",
        title: "Buy",
        desc: "Pick your plan and get instant access to the DK Hunters premium panel via Discord.",
      },
      {
        n: "02",
        title: "Configure",
        desc: "Import your accounts, tune the farm AI and switch on rotating proxies in under 2 minutes.",
      },
      {
        n: "03",
        title: "Profit",
        desc: "Let the bot run 24/7. Track real-time metrics directly from your dashboard.",
      },
    ],

    benEyebrow: "EVERYTHING YOU NEED",
    benH2: "Bot Benefits",
    benSub:
      "Engineered to scale. Every feature calibrated for maximum performance and zero detection.",
    benefits: [
      {
        title: "Smart Auto Farm",
        desc: "Proprietary AI that learns farm patterns and optimizes per account automatically.",
      },
      {
        title: "Multi Account",
        desc: "Run up to 100 accounts in parallel with no performance drop.",
      },
      {
        title: "Rotating Proxy",
        desc: "Premium residential IP pool rotating every session.",
      },
      {
        title: "Captcha Auto Solver",
        desc: "Automatic 24/7 solving with 98.7%+ accuracy rate.",
      },
      {
        title: "Undetectable Chromium",
        desc: "Custom anti-fingerprint, anti-detect, last-gen anti-ban engine.",
      },
      {
        title: "High Performance",
        desc: "Optimized for low RAM/CPU usage, even with dozens of instances.",
      },
      {
        title: "VIP Support",
        desc: "Dedicated private Discord with 15-minute response SLA.",
      },
      {
        title: "Constant Updates",
        desc: "Weekly patches and new features released at no extra cost.",
      },
    ],

    panelEyebrow: "INSIDE THE PANEL",
    panelH2: "Premium Dashboard",
    panelSub:
      "Total control of your accounts, metrics and farm in a cinematic dark + gold interface.",
    plansEyebrow: "PICK YOUR ACCESS",
    plansH2: "Premium Plans",
    plansSub:
      "Start small or lock in lifetime and never pay again. Instant access after payment.",
    plans: [
      {
        tag: "Daily",
        desc: "Test the power of DK Hunters for 24h.",
        price: "20",
        per: "/day",
        features: [
          "24h Auto Farm",
          "1 active account",
          "Standard support",
          "Captcha Solver",
          "Panel access",
        ],
        cta: "Start Now",
      },
      {
        tag: "Monthly",
        desc: "Most chosen by professional farmers.",
        price: "150",
        per: "/mo",
        features: [
          "30 days Auto Farm",
          "10 active accounts",
          "Premium rotating proxy",
          "Priority support",
          "Multi-instance",
          "Updates included",
        ],
        cta: "Subscribe Monthly",
      },
      {
        tag: "Lifetime",
        desc: "Pay once. Profit forever.",
        price: "350",
        per: "/once",
        features: [
          "Unlimited Auto Farm",
          "Unlimited accounts",
          "VIP premium proxy",
          "VIP 24/7 support",
          "All future features",
          "VIP Discord access",
          "No subscriptions",
        ],
        cta: "Get Lifetime",
        featured: true,
        badge: "BEST SELLER",
      },
    ],

    statsEyebrow: "NUMBERS THAT TALK",
    statsH2: "Trusted by thousands",
    stats: [
      { num: "5,000+", lbl: "Active users" },
      { num: "R$ 2M+", lbl: "Processed" },
      { num: "99.9%", lbl: "Uptime" },
      { num: "24h", lbl: "Premium support" },
    ],

    testEyebrow: "REAL RESULTS",
    testH2: "What our clients say",
    testSub: "5,000+ pro farmers already scaling with DK Hunters.",
    testimonials: [
      {
        quote:
          "In 3 days the bot paid for the monthly plan. Set it and forget it, just runs. Best buy of the year.",
        name: "Lucas M.",
        handle: "@lucasdrift",
      },
      {
        quote:
          "VIP support replies in minutes. Had an issue at 2am and they fixed it on the spot. Surreal.",
        name: "Rafael K.",
        handle: "@rafa_k",
      },
      {
        quote:
          "I've tried many bots. DK Hunters is the only one that never got me banned on multi-account.",
        name: "Bianca T.",
        handle: "@bia_farm",
      },
      {
        quote:
          "Bought lifetime and paid for itself in 2 months. Now I run 50 parallel accounts headache-free.",
        name: "Diego R.",
        handle: "@diego_auto",
      },
      {
        quote:
          "The interface is insane. Feels like enterprise software, not just a bot.",
        name: "Camila S.",
        handle: "@cami.s",
      },
      {
        quote:
          "Captcha solver works 99% of the time. Other bots got me stuck — this one doesn't.",
        name: "André P.",
        handle: "@andre.p",
      },
    ],

    faqEyebrow: "QUESTIONS",
    faqH2: "Frequently Asked",
    faq: [
      {
        q: "Is DK Hunters safe to use?",
        a: "Yes. Custom anti-detect Chromium engine, randomized fingerprints, residential proxies. Zero ban records across 5,000+ active users.",
      },
      {
        q: "How long to start?",
        a: "Instant access after payment. Full setup in under 2 minutes following the video tutorial.",
      },
      {
        q: "Mac and Windows?",
        a: "Currently Windows 10/11 (64-bit) and Linux. Mac version in beta for lifetime users.",
      },
      {
        q: "Can I run multiple accounts?",
        a: "Yes. Monthly plan supports 10 accounts, lifetime is unlimited. Multi-instance optimized for low usage.",
      },
      {
        q: "Refund policy?",
        a: "7-day guarantee on monthly and lifetime. If it doesn't work as promised, full refund.",
      },
      {
        q: "How does support work?",
        a: "Private Discord with channels per plan. Lifetime gets 1-on-1 VIP support with 15-min SLA.",
      },
      {
        q: "Do I get updates?",
        a: "Yes. Weekly updates included in all plans. Lifetime gets early access to new features.",
      },
    ],

    ctaFinalEyebrow: "LAST CHANCE",
    ctaFinalH2a: "Start now",
    ctaFinalH2b: "and automate your results",
    ctaFinalSub:
      "5,000+ farmers already scaling with DK Hunters. Don't be left out.",
    ctaFinalBtn: "Lock In Lifetime",
    ctaFinalNote: "Secure payment • Instant access • 7-day guarantee",
    footTag: "Auto Farm Premium • V4.2",
    footColTitles: ["Product", "Support", "Legal"],
    footProduct: ["Features", "Plans", "Dashboard", "Updates"],
    footSupport: ["Discord", "FAQ", "Tutorials", "Status"],
    footLegal: ["Terms", "Privacy", "Refund"],
    footCopyright: "© 2026 DK HUNTERS — ALL RIGHTS RESERVED",
  },
};

/* ─────────── Icons ─────────── */
const Icon = ({ name, size = 20 }) => {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  switch (name) {
    case "cart":
      return (
        <svg {...props}>
          <circle cx="9" cy="20" r="1.5" />
          <circle cx="17" cy="20" r="1.5" />
          <path d="M3 4h2l2.5 12h12l2-9H6" />
        </svg>
      );
    case "settings":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
        </svg>
      );
    case "trending":
      return (
        <svg {...props}>
          <path d="M3 17l6-6 4 4 8-8" />
          <path d="M14 7h7v7" />
        </svg>
      );
    case "brain":
      return (
        <svg {...props}>
          <path d="M9 4a3 3 0 0 0-3 3v0a3 3 0 0 0-1 5.8V14a3 3 0 0 0 4 2.8V18a3 3 0 0 0 6 0v-1.2a3 3 0 0 0 4-2.8v-1.2a3 3 0 0 0-1-5.8 3 3 0 0 0-3-3 3 3 0 0 0-3 1.5A3 3 0 0 0 9 4z" />
        </svg>
      );
    case "users":
      return (
        <svg {...props}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "globe":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z" />
        </svg>
      );
    case "shield":
      return (
        <svg {...props}>
          <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "zap":
      return (
        <svg {...props}>
          <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
        </svg>
      );
    case "lock":
      return (
        <svg {...props}>
          <rect x="4" y="11" width="16" height="10" rx="2" />
          <path d="M8 11V7a4 4 0 0 1 8 0v4" />
        </svg>
      );
    case "headphones":
      return (
        <svg {...props}>
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
          <path d="M21 19a2 2 0 0 1-2 2h-1v-6h3z" />
          <path d="M3 19a2 2 0 0 0 2 2h1v-6H3z" />
        </svg>
      );
    case "refresh":
      return (
        <svg {...props}>
          <path d="M3 12a9 9 0 0 1 14.85-6.85L21 8" />
          <path d="M21 3v5h-5" />
          <path d="M21 12a9 9 0 0 1-14.85 6.85L3 16" />
          <path d="M3 21v-5h5" />
        </svg>
      );
    case "check":
      return (
        <svg {...props} strokeWidth="2.4">
          <path d="M5 13l4 4L19 7" />
        </svg>
      );
    case "plus":
      return (
        <svg {...props}>
          <path d="M12 5v14M5 12h14" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...props}>
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      );
    case "play":
      return (
        <svg {...props}>
          <path d="M8 5l12 7-12 7V5z" fill="currentColor" />
        </svg>
      );
    case "star":
      return (
        <svg {...props} fill="currentColor" stroke="none">
          <path d="M12 2l3 7 7 .6-5.3 4.6L18 22l-6-3.5L6 22l1.3-7.8L2 9.6 9 9z" />
        </svg>
      );
    case "dollar":
      return (
        <svg {...props}>
          <path d="M12 2v20M17 6H9a3 3 0 0 0 0 6h6a3 3 0 0 1 0 6H6" />
        </svg>
      );
    case "dashboard":
      return (
        <svg {...props}>
          <rect x="3" y="3" width="7" height="9" />
          <rect x="14" y="3" width="7" height="5" />
          <rect x="14" y="12" width="7" height="9" />
          <rect x="3" y="16" width="7" height="5" />
        </svg>
      );
    case "wallet":
      return (
        <svg {...props}>
          <path d="M21 8H5a2 2 0 0 1 0-4h13v4" />
          <path d="M21 8v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6" />
          <circle cx="17" cy="14" r="1" />
        </svg>
      );
    case "robot":
      return (
        <svg {...props}>
          <rect x="4" y="8" width="16" height="12" rx="2" />
          <path d="M12 4v4" />
          <circle cx="9" cy="14" r="1.2" />
          <circle cx="15" cy="14" r="1.2" />
          <path d="M9 18h6" />
        </svg>
      );
    case "chart":
      return (
        <svg {...props}>
          <path d="M3 3v18h18" />
          <path d="M7 14l4-4 4 4 5-7" />
        </svg>
      );
    case "key":
      return (
        <svg {...props}>
          <circle cx="8" cy="15" r="4" />
          <path d="M11 12l9-9M16 7l3 3" />
        </svg>
      );
    default:
      return null;
  }
};

const benefitIcons = [
  "brain",
  "users",
  "globe",
  "shield",
  "lock",
  "zap",
  "headphones",
  "refresh",
];

/* ─────────── Particles + Coins ─────────── */
function Particles({ density = 30 }) {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      canvas.width = r.width * dpr;
      canvas.height = r.height * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const flakes = Array.from({ length: density }, () => ({
      x: (Math.random() * canvas.width) / dpr,
      y: (Math.random() * canvas.height) / dpr,
      r: Math.random() * 1.6 + 0.3,
      vx: (Math.random() - 0.5) * 0.12,
      vy: -Math.random() * 0.25 - 0.05,
      life: Math.random() * 1,
      maxLife: 1,
    }));

    const tick = () => {
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      ctx.clearRect(0, 0, w, h);
      flakes.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.0025;
        if (p.life <= 0 || p.y < -10) {
          p.x = Math.random() * w;
          p.y = h + 10;
          p.life = p.maxLife;
        }
        const alpha = Math.sin(p.life * Math.PI) * 0.9;
        ctx.beginPath();
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4);
        grad.addColorStop(0, `rgba(255, 230, 120, ${alpha})`);
        grad.addColorStop(0.5, `rgba(231, 185, 74, ${alpha * 0.5})`);
        grad.addColorStop(1, `rgba(231, 185, 74, 0)`);
        ctx.fillStyle = grad;
        ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 230, 130, ${alpha})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [density]);
  return <canvas ref={canvasRef} id="particles" />;
}

function Streaks() {
  const lines = useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => ({
        top: 8 + i * 11 + Math.random() * 5,
        width: 80 + Math.random() * 200,
        delay: Math.random() * 4,
        duration: 3 + Math.random() * 3,
      })),
    [],
  );
  return (
    <div className="streaks">
      {lines.map((l, i) => (
        <div
          key={i}
          className="streak"
          style={{
            top: `${l.top}%`,
            width: `${l.width}px`,
            animationDelay: `${l.delay}s`,
            animationDuration: `${l.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

function CoinRain({ count = 8 }) {
  const coins = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        left: Math.random() * 100,
        delay: Math.random() * 12,
        duration: 8 + Math.random() * 8,
        size: 8 + Math.random() * 14,
      })),
    [count],
  );
  return (
    <div className="coin-bg">
      {coins.map((c, i) => (
        <div
          key={i}
          className="coin"
          style={{
            left: `${c.left}%`,
            width: `${c.size}px`,
            height: `${c.size}px`,
            animationDelay: `${c.delay}s`,
            animationDuration: `${c.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

function GoldCoinRain({ count = 26 }) {
  const coins = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        left: Math.random() * 100,
        delay: -Math.random() * 18,
        duration: 9 + Math.random() * 11,
        size: 8 + Math.random() * 12,
        drift: (Math.random() - 0.5) * 30,
        op: 0.25 + Math.random() * 0.35,
      })),
    [count],
  );
  return (
    <div className="gold-coin-rain" aria-hidden="true">
      {coins.map((c, i) => (
        <span
          key={i}
          className="gcoin"
          style={{
            left: `${c.left}%`,
            width: `${c.size}px`,
            height: `${c.size}px`,
            opacity: c.op,
            ["--drift"]: `${c.drift}px`,
            animationDelay: `${c.delay}s`,
            animationDuration: `${c.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ─────────── Reveal hook ─────────── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ─────────── Sections ─────────── */
function Nav({ t, lang, setLang }) {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#" className="nav-brand">
          <img
            src="assets/dk-hunter-logo.png"
            alt="DK Hunters"
            style={{ height: 44, width: "auto" }}
          />
          <span
            style={{
              fontFamily: "Bebas Neue, sans-serif",
              fontSize: 22,
              letterSpacing: "0.08em",
              color: "var(--gold)",
              lineHeight: 1,
            }}
          >
            DK Hunter
          </span>
        </a>
        <div className="nav-links">
          {t.nav.map((n, i) => (
            <a key={i} href={`#sec-${i}`}>
              {n}
            </a>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button
            onClick={() => setLang(lang === "pt" ? "en" : "pt")}
            style={{
              background: "transparent",
              border: "1px solid var(--line-strong)",
              color: "var(--ink-dim)",
              padding: "8px 12px",
              borderRadius: 999,
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 11,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            {lang === "pt" ? "EN" : "PT"}
          </button>
          <a href="#sec-2" className="nav-cta">
            {t.navCta} <Icon name="arrow" size={14} />
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero({ t, particleDensity, heroLayout }) {
  const videoRef = useRef(null);
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.loop = false;
    v.play().catch(() => {});
    const handleEnded = () => {
      v.pause();
    };
    v.addEventListener("ended", handleEnded);
    const unlock = () => {
      v.muted = false;
      v.volume = 0.25;
      document.removeEventListener("click", unlock);
      document.removeEventListener("keydown", unlock);
    };
    document.addEventListener("click", unlock);
    document.addEventListener("keydown", unlock);
    return () => {
      v.removeEventListener("ended", handleEnded);
      document.removeEventListener("click", unlock);
      document.removeEventListener("keydown", unlock);
    };
  }, []);
  return (
    <section className="hero">
      <div className="hero-video-wrap">
        <video
          ref={videoRef}
          className="hero-video"
          src="assets/drift-bg.mp4"
          autoPlay
          muted
          playsInline
          preload="auto"
        />
      </div>
      <div className="hero-video-overlay" />
      <CoinRain count={14} />
      <Particles density={particleDensity} />
      <div className="hero-grid">
        <div className="hero-left">
          <div className="eyebrow">{t.heroEyebrow}</div>
          <h1 className="hero-h1">
            <span className="hero-line">{t.heroH1a}</span>
            <span className="hero-line gold-text">{t.heroH1b}</span>
            {t.heroH1c && (
              <span className="hero-line hero-h1-tail">{t.heroH1c}</span>
            )}
          </h1>
          <p className="hero-sub">{t.heroSub}</p>
          <div className="cta-row">
            <a href="#sec-2" className="btn btn-gold btn-xl">
              {t.ctaPrimary} <Icon name="arrow" size={16} />
            </a>
            <a href="#sec-2" className="btn btn-glass btn-xl">
              <Icon name="play" size={14} /> {t.ctaSecondary}
            </a>
          </div>
          <div className="hero-chips">
            {t.chips.map((c, i) => (
              <span key={i} className="chip">
                <span className={`chip-dot ${i === 0 ? "live" : ""}`} />
                {c}
              </span>
            ))}
          </div>
        </div>
        <div className="hero-right" aria-hidden="true" />
      </div>
      <img
        src="assets/dk-hunter-mascot.png"
        alt=""
        className="mascote"
        aria-hidden="true"
      />
    </section>
  );
}

function SoundToggle() {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const v = document.querySelector(".hero-video");
    if (!v) return;
    if (on) {
      v.muted = false;
      v.volume = 0;
      let vol = 0;
      const id = setInterval(() => {
        vol = Math.min(0.25, vol + 0.04);
        v.volume = vol;
        if (vol >= 0.25) clearInterval(id);
      }, 60);
      return () => clearInterval(id);
    } else {
      let vol = v.volume;
      const id = setInterval(() => {
        vol = Math.max(0, vol - 0.06);
        v.volume = vol;
        if (vol <= 0) {
          clearInterval(id);
          v.muted = true;
        }
      }, 50);
      return () => clearInterval(id);
    }
  }, [on]);
  return (
    <button
      className="sound-toggle"
      onClick={() => setOn(!on)}
      title={on ? "Sound off" : "Sound on"}
    >
      {on ? (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M11 5L6 9H2v6h4l5 4V5z" />
          <path d="M15.5 8.5a5 5 0 0 1 0 7" />
          <path d="M19 5a9 9 0 0 1 0 14" />
        </svg>
      ) : (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M11 5L6 9H2v6h4l5 4V5z" />
          <line x1="22" y1="9" x2="16" y2="15" />
          <line x1="16" y1="9" x2="22" y2="15" />
        </svg>
      )}
    </button>
  );
}

function TechStrip({ t }) {
  const items = [...t.techStrip, ...t.techStrip];
  return (
    <div className="tech-strip">
      <div className="tech-track">
        {items.map((item, i) => (
          <span key={i}>
            <span className="dot">◆</span> {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function HowItWorks({ t }) {
  const icons = ["cart", "settings", "trending"];
  return (
    <section id="sec-0" className="how">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow">{t.howEyebrow}</div>
          <h2>{t.howH2}</h2>
          <p>{t.howSub}</p>
        </div>
        <div className="steps">
          {t.steps.map((s, i) => (
            <div
              key={i}
              className="step reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="step-icon">
                <Icon name={icons[i]} size={20} />
              </div>
              <div className="step-num">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Benefits({ t }) {
  return (
    <section id="sec-1" className="benefits">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow">{t.benEyebrow}</div>
          <h2>{t.benH2}</h2>
          <p>{t.benSub}</p>
        </div>
        <div className="bgrid">
          {t.benefits.map((b, i) => (
            <div
              key={i}
              className="bcard reveal"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <div className="bicon">
                <Icon name={benefitIcons[i]} size={20} />
              </div>
              <h4>{b.title}</h4>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PanelPreview({ t }) {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((v) => v + 1), 1800);
    return () => clearInterval(id);
  }, []);
  const accounts = useMemo(
    () => [
      { name: "drift_master_01", farm: "R$ 2.420", time: "12h 04m" },
      { name: "gold_runner_07", farm: "R$ 1.890", time: "08h 32m" },
      { name: "shadow_farm_22", farm: "R$ 3.150", time: "14h 11m" },
      { name: "neon_hunter_x9", farm: "R$ 2.780", time: "10h 47m" },
      { name: "alpha_drift_44", farm: "R$ 4.120", time: "18h 22m" },
    ],
    [],
  );
  return (
    <section id="sec-2" className="panel-section">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow">{t.panelEyebrow}</div>
          <h2>{t.panelH2}</h2>
          <p>{t.panelSub}</p>
        </div>
        <div className="panel-mock reveal">
          <div className="panel-bar">
            <span className="panel-dot r" />
            <span className="panel-dot y" />
            <span className="panel-dot g" />
            <span className="panel-bar-title">
              DK_HUNTERS_PANEL.V4 — /home/farm/dashboard
            </span>
          </div>
          <div className="panel-body">
            <div className="panel-side">
              <h5>FARM</h5>
              <div className="nav-item active">
                <Icon name="dashboard" size={16} />
                Dashboard
              </div>
              <div className="nav-item">
                <Icon name="robot" size={16} />
                Bots
              </div>
              <div className="nav-item">
                <Icon name="users" size={16} />
                Accounts
              </div>
              <div className="nav-item">
                <Icon name="globe" size={16} />
                Proxies
              </div>
              <div className="nav-item">
                <Icon name="key" size={16} />
                Captcha
              </div>
              <h5 style={{ marginTop: 24 }}>FINANCE</h5>
              <div className="nav-item">
                <Icon name="wallet" size={16} />
                Wallet
              </div>
              <div className="nav-item">
                <Icon name="chart" size={16} />
                Reports
              </div>
              <h5 style={{ marginTop: 24 }}>SYSTEM</h5>
              <div className="nav-item">
                <Icon name="settings" size={16} />
                Settings
              </div>
            </div>
            <div className="panel-main">
              <div className="panel-stats">
                <div className="pstat">
                  <div className="lbl">Farm hoje</div>
                  <div className="val">R$ 18.420</div>
                  <div className="delta">▲ 12.4%</div>
                </div>
                <div className="pstat">
                  <div className="lbl">Bots ativos</div>
                  <div className="val">{247 + (tick % 5)}</div>
                  <div className="delta">▲ 8.1%</div>
                </div>
                <div className="pstat">
                  <div className="lbl">Captcha</div>
                  <div className="val">98.7%</div>
                  <div className="delta">▲ 0.3%</div>
                </div>
                <div className="pstat">
                  <div className="lbl">Uptime</div>
                  <div className="val">99.9%</div>
                  <div className="delta">stable</div>
                </div>
              </div>
              <div className="panel-chart">
                <div className="chart-head">
                  <h6>Performance · Live</h6>
                  <span className="live-pill">
                    <span className="chip-dot live" /> Live
                  </span>
                </div>
                <ChartSvg tick={tick} />
              </div>
              <div className="panel-rows">
                {accounts.map((a, i) => (
                  <div key={i} className="prow">
                    <span className="acct-dot" />
                    <span className="acct">{a.name}</span>
                    <span className="farm">{a.farm}</span>
                    <span className="time">{a.time}</span>
                    <span className="stat-pill">Active</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChartSvg({ tick }) {
  const points = useMemo(() => {
    const arr = [];
    let y = 50;
    for (let i = 0; i <= 40; i++) {
      y += Math.sin(i * 0.5 + tick * 0.3) * 6 + (Math.random() - 0.4) * 4;
      y = Math.max(15, Math.min(85, y));
      arr.push([i * (100 / 40), y]);
    }
    return arr;
  }, [tick]);
  const path = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p[0]} ${100 - p[1]}`)
    .join(" ");
  const area = path + ` L 100 100 L 0 100 Z`;
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      style={{ width: "100%", height: 180, display: "block" }}
    >
      <defs>
        <linearGradient id="cg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffd76a" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#ffd76a" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="cl" x1="0" x2="1">
          <stop offset="0%" stopColor="#a87a1f" />
          <stop offset="50%" stopColor="#ffd76a" />
          <stop offset="100%" stopColor="#a87a1f" />
        </linearGradient>
      </defs>
      {[20, 40, 60, 80].map((y) => (
        <line
          key={y}
          x1="0"
          x2="100"
          y1={y}
          y2={y}
          stroke="rgba(231,185,74,0.06)"
          strokeWidth="0.2"
        />
      ))}
      <path d={area} fill="url(#cg)" />
      <path
        d={path}
        fill="none"
        stroke="url(#cl)"
        strokeWidth="0.6"
        vectorEffect="non-scaling-stroke"
        style={{ filter: "drop-shadow(0 0 4px rgba(255,215,106,0.6))" }}
      />
    </svg>
  );
}

function Plans({ t, onSelect, selected }) {
  return (
    <section id="sec-2" className="plans-section">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow">{t.plansEyebrow}</div>
          <h2>{t.plansH2}</h2>
          <p>{t.plansSub}</p>
        </div>
        <div className="plans">
          {t.plans.map((p, i) => {
            const isSelected = selected === i;
            return (
              <div
                key={i}
                className={`plan ${p.featured ? "plan-featured" : ""} reveal`}
                style={{
                  transitionDelay: `${i * 0.08}s`,
                  ...(isSelected
                    ? {
                        borderColor: "var(--gold)",
                        boxShadow:
                          "0 0 0 2px var(--gold), 0 30px 80px -10px rgba(231,185,74,0.5)",
                      }
                    : {}),
                }}
              >
                {p.badge && <div className="plan-badge">{p.badge}</div>}
                <div className="plan-name">{p.tag}</div>
                <h3 className="plan-tag">{p.tag}</h3>
                <p className="plan-desc">{p.desc}</p>
                <div className="plan-price">
                  <span className="currency">R$</span>
                  <span className="amt">{p.price}</span>
                  <span className="per">{p.per}</span>
                </div>
                <ul className="plan-features">
                  {p.features.map((f, j) => (
                    <li key={j}>
                      <Icon name="check" size={16} />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => onSelect(i)}
                  className={`btn ${p.featured || isSelected ? "btn-gold" : "btn-ghost"}`}
                  style={{ width: "100%" }}
                >
                  {isSelected ? "✓ " : ""}
                  {p.cta} {!isSelected && <Icon name="arrow" size={14} />}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Stats({ t }) {
  return (
    <section className="stats-section">
      <div className="wrap">
        <div className="stats">
          {t.stats.map((s, i) => (
            <div
              key={i}
              className="stat reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="num gold-text">{s.num}</div>
              <div className="lbl">{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials({ t }) {
  return (
    <section className="testimonials">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow">{t.testEyebrow}</div>
          <h2>{t.testH2}</h2>
          <p>{t.testSub}</p>
        </div>
        <div className="tgrid">
          {t.testimonials.map((tm, i) => (
            <div
              key={i}
              className="tcard reveal"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <div className="tstars">
                {[...Array(5)].map((_, j) => (
                  <Icon key={j} name="star" size={16} />
                ))}
              </div>
              <p className="tquote">"{tm.quote}"</p>
              <div className="tperson">
                <div className="tavatar">{tm.name[0]}</div>
                <div>
                  <div className="tname">{tm.name}</div>
                  <div className="thandle">{tm.handle}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ({ t }) {
  const [open, setOpen] = useState(0);
  return (
    <section id="sec-3" className="faq-section">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow">{t.faqEyebrow}</div>
          <h2>{t.faqH2}</h2>
        </div>
        <div className="faq">
          {t.faq.map((f, i) => (
            <div key={i} className={`faq-item ${open === i ? "open" : ""}`}>
              <button
                className="faq-q"
                onClick={() => setOpen(open === i ? -1 : i)}
              >
                <span>{f.q}</span>
                <span className="q-icon">
                  <Icon name="plus" size={14} />
                </span>
              </button>
              <div className="faq-a">
                <div style={{ paddingTop: 4 }}>{f.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTAFinal({ t }) {
  return (
    <section className="cta-final">
      <CoinRain count={10} />
      <div className="wrap">
        <div className="reveal">
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            {t.ctaFinalEyebrow}
          </div>
          <h2>
            {t.ctaFinalH2a}
            <br />
            <span className="gold-text">{t.ctaFinalH2b}</span>
          </h2>
          <p>{t.ctaFinalSub}</p>
          <a
            href="#"
            className="btn btn-gold btn-xl cta-final-btn"
          >
            {t.ctaFinalBtn} <Icon name="arrow" size={18} />
          </a>
          <div
            style={{
              marginTop: 22,
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 12,
              color: "var(--ink-mute)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            {t.ctaFinalNote}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ t }) {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-col">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 16,
              }}
            >
              <span
                className="nav-mark"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "var(--grad-gold)",
                  display: "grid",
                  placeItems: "center",
                  color: "#1a1303",
                  fontFamily: "Anton, sans-serif",
                  fontSize: 14,
                  letterSpacing: 0,
                }}
              >
                DK
              </span>
              <span
                style={{
                  fontFamily: "Anton, sans-serif",
                  fontSize: 22,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                DK Hunters
              </span>
            </div>
            <p
              style={{
                color: "var(--ink-mute)",
                fontSize: 13,
                fontFamily: "JetBrains Mono, monospace",
                letterSpacing: "0.1em",
              }}
            >
              {t.footTag}
            </p>
          </div>
          <div className="foot-col">
            <h6>{t.footColTitles[0]}</h6>
            {t.footProduct.map((l, i) => (
              <a key={i} href="#">
                {l}
              </a>
            ))}
          </div>
          <div className="foot-col">
            <h6>{t.footColTitles[1]}</h6>
            {t.footSupport.map((l, i) => (
              <a key={i} href="#">
                {l}
              </a>
            ))}
          </div>
          <div className="foot-col">
            <h6>{t.footColTitles[2]}</h6>
            {t.footLegal.map((l, i) => (
              <a key={i} href="#">
                {l}
              </a>
            ))}
          </div>
        </div>
        <div className="foot-bottom">
          <div>{t.footCopyright}</div>
          <div>BUILD · 2026.04 · STATUS ◆ ONLINE</div>
        </div>
      </div>
    </footer>
  );
}

/* ─────────── Tweaks ─────────── */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/ {
  lang: "pt",
  particleDensity: 30,
  heroLayout: "right",
  goldTone: "classic",
}; /*EDITMODE-END*/

function App() {
  const TweaksPanel = window.TweaksPanel;
  const TweakSection = window.TweakSection;
  const TweakRadio = window.TweakRadio;
  const TweakSlider = window.TweakSlider;
  const useTweaks = window.useTweaks;
  const [tweaks, setTweak] = useTweaks
    ? useTweaks(TWEAK_DEFAULTS)
    : [TWEAK_DEFAULTS, () => {}];
  const [selectedPlan, setSelectedPlan] = useState(2);
  useReveal();

  const t = COPY[tweaks.lang] || COPY.pt;

  // Apply gold tone variation
  useEffect(() => {
    const root = document.documentElement;
    const tones = {
      classic: {
        gold: "#e7b94a",
        bright: "#ffd76a",
        deep: "#a87a1f",
        neon: "#ffe27a",
      },
      bronze: {
        gold: "#c98a3a",
        bright: "#e9a85c",
        deep: "#7d4f1a",
        neon: "#ffb86b",
      },
      yellow: {
        gold: "#f4d03f",
        bright: "#fff064",
        deep: "#b8941a",
        neon: "#fff080",
      },
    };
    const tone = tones[tweaks.goldTone] || tones.classic;
    root.style.setProperty("--gold", tone.gold);
    root.style.setProperty("--gold-bright", tone.bright);
    root.style.setProperty("--gold-deep", tone.deep);
    root.style.setProperty("--neon", tone.neon);
    root.style.setProperty(
      "--grad-gold",
      `linear-gradient(180deg, ${tone.bright} 0%, ${tone.gold} 38%, ${tone.deep} 100%)`,
    );
  }, [tweaks.goldTone]);

  return (
    <>
      <GoldCoinRain count={28} />
      <Nav t={t} lang={tweaks.lang} setLang={(v) => setTweak("lang", v)} />
      <Hero
        t={t}
        particleDensity={tweaks.particleDensity}
        heroLayout={tweaks.heroLayout}
      />
      <SoundToggle />
      <TechStrip t={t} />
      <HowItWorks t={t} />
      <Benefits t={t} />
      <Plans t={t} selected={selectedPlan} onSelect={setSelectedPlan} />
      <Stats t={t} />
      <Testimonials t={t} />
      <FAQ t={t} />
      <CTAFinal t={t} />
      <Footer t={t} />

      {TweaksPanel && (
        <TweaksPanel title="Tweaks">
          <TweakSection label="Idioma">
            <TweakRadio
              label="Idioma do site"
              value={tweaks.lang}
              options={[
                { value: "pt", label: "PT" },
                { value: "en", label: "EN" },
              ]}
              onChange={(v) => setTweak("lang", v)}
            />
          </TweakSection>
          <TweakSection label="Visual">
            <TweakRadio
              label="Tom dourado"
              value={tweaks.goldTone}
              options={[
                { value: "classic", label: "Clássico" },
                { value: "bronze", label: "Bronze" },
                { value: "yellow", label: "Neon" },
              ]}
              onChange={(v) => setTweak("goldTone", v)}
            />

            <TweakRadio
              label="Layout do hero"
              value={tweaks.heroLayout}
              options={[
                { value: "right", label: "Logo à direita" },
                { value: "left", label: "Logo à esquerda" },
              ]}
              onChange={(v) => setTweak("heroLayout", v)}
            />

            <TweakSlider
              label="Densidade de partículas"
              value={tweaks.particleDensity}
              min={0}
              max={100}
              step={5}
              onChange={(v) => setTweak("particleDensity", v)}
            />
          </TweakSection>
        </TweaksPanel>
      )}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
