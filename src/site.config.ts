import type {
  FooterConfig,
  LinkConfig,
  ProfileConfig,
  PublicationConfig,
  SiteConfig,
} from "@/types"

export const SITE: SiteConfig = {
  title: "Jorge Kamassury",
  description:
    "Pesquisa em aprendizado de máquina robusto, decodificação neural e modelagem computacional.",
  href: "https://kamassury.github.io",
  author: "Jorge Kysnney Santos Kamassury",
  dir: "ltr",
  defaultPageImage: "/img/social-preview.png",
  defaultPostImage: "/img/social-preview.png",

  locale: {
    lang: "pt-BR",
    options: {
      day: "numeric",
      month: "short",
      year: "numeric",
      timeZone: "UTC",
    },
  },

  // Table of contents depth shared by blog posts and project detail pages.
  tocMaxDepth: 3,

  blog: {
    featuredPostCount: 3,
    postsPerPage: 8,
    shareActions: ["x"],
  },

  home: {
    careerHighlightCount: 4,
    updateCount: 3,
    publicationCount: 3,
  },

  favicon: "/favicon.ico",
  prerender: true,
  npmCDN: "https://cdn.jsdelivr.net/npm",

  license: {
    label: "CC-BY-4.0",
    href: "https://creativecommons.org/licenses/by/4.0/",
  },
}

export const PROFILE: ProfileConfig = {
  name: SITE.title,
  tagline: "Pesquisador e Desenvolvedor de IA · CERTI",
  email: "kamassury@gmail.com",
  location: "Florianópolis, Brazil",
  links: {
    github: "https://github.com/Kamassury",
    scholar: "https://scholar.google.com/citations?user=k36ZhmMAAAAJ&hl=en",
    orcid: "https://orcid.org/0000-0001-8335-9796",
    linkedin: "https://www.linkedin.com/in/jorge-kamassury",
    cv: "http://lattes.cnpq.br/1350512148935889",
  },
  highlightLinks: ["github"],
  linksPlacement: {
    header: ["email", "github", "scholar", "orcid", "linkedin"],
    about: false,
    footer: false,
  },
}

export const NAV_LINKS: LinkConfig[] = [
  { href: "/projects", label: "Projetos" },
  { href: "/publications", label: "Publicações" },
  { href: "/teaching", label: "Ensino" },
  { href: "/blog", label: "Blog" },
]

export const NAVIGATION: LinkConfig[] = NAV_LINKS.map(({ href, label }) => ({
  href,
  label,
}))

export const PUB_CONFIG: PublicationConfig = {
  maxFirstAuthors: 6,
  maxLastAuthors: 1,
  highlightAuthor: {
    firstName: "Jorge",
    lastName: "Kamassury",
    aliases: ["J. K. S. Kamassury", "Jorge K. S. Kamassury", "Jorge Kysnney Santos Kamassury", "Kamassury"],
  },
  equalSymbols: {
    first: "*",
    second: "†",
    third: "‡",
    last: "§",
  },
}

export const FOOTER: FooterConfig = {
  credits: true,
  sourceCode: "https://github.com/Kamassury/research-site",
  sourceContent:
    "https://github.com/Kamassury/research-site/tree/main/src/content",
  footerLinks: [],
}

if (import.meta.env.DEV && typeof window === "undefined") {
  const {
    FooterConfigSchema,
    ProfileConfigSchema,
    PublicationConfigSchema,
    SiteConfigSchema,
  } = await import("@/schemas")
  SiteConfigSchema.parse(SITE)
  ProfileConfigSchema.parse(PROFILE)
  FooterConfigSchema.parse(FOOTER)
  PublicationConfigSchema.parse(PUB_CONFIG)
}
