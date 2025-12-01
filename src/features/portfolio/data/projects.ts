import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "fmcg-2.0",
    title: "FMCG Project 2.0",
    period: {
      start: "06.2025",
    },
    skills: ["Next.js", "shadcn", "TailwindCSS", "Turborepo", "Agile"],
    description: `Leading frontend architecture and component standardization.`,
  },
  {
    id: "veeam-data-portability",
    title: "Veeam - Data Portability and Resilience",
    period: {
      start: "10.2024",
      end: "06.2025",
    },
    link: "https://www.veeam.com/",
    skills: ["React", "Vite", "RxJS", "Microfrontend", "veeamUI"],
    description: `- Migrated UI from MUI to veeamUI
- Developed complex directory tree for backup services (Teams, Outlook, etc.)
- Led 2 fresher frontend developers, mentoring and guiding them on code quality and best practices`,
  },
  {
    id: "retailer-assistant",
    title: "Retailer Assistant - AI Chat Bot",
    period: {
      start: "05.2024",
      end: "08.2024",
    },
    link: "https://github.com/trinhvanminh/rag-and-sql-agent",
    skills: [
      "Vite",
      "Lit",
      "LangChain",
      "Python",
      "Prompt design",
      "Streamlit",
      "Flask",
      "MongoDB",
    ],
    description: `Supported retailers in obtaining data via SQL Agent and company information via RAG.`,
  },
  {
    id: "fmcg",
    title: "FMCG Project 1.0",
    period: {
      start: "03.2023",
      end: "04.2024",
    },
    skills: ["React", "Redux", "MUI", "PWA", "NX"],
    description: `- Upgraded MUI version for multi-apps
- Standardized components across apps and applied monorepo using NX
- Migrated project from JS to TS`,
  },
  {
    id: "car-bidding-app",
    title: "Jesicar - Car Bidding App",
    period: {
      start: "10.2022",
      end: "01.2023",
    },
    skills: ["React Native", "Expo"],
    description: `Maintaining and improving existing codebase.`,
  },
  {
    id: "eximhow-web-app",
    title: "Eximhow Web App",
    period: {
      start: "10.2021",
      end: "08.2022",
    },
    link: "https://www.eximhow.com/",
    skills: ["React", "MUI", "Solr", "Figma", "Google Login"],
    description: `- Integrated with HS search API and extracted data
- Multi-language support, UI design using Figma, Google login integration`,
  },
  {
    id: "hs-search-system",
    title: "HS Search System",
    period: {
      start: "10.2021",
      end: "08.2022",
    },
    link: "https://uni-solr.eximhow.com/solr",
    skills: ["Solr", "Search Engine"],
    description: `Researched and implemented search engine using Solr.`,
  },
  {
    id: "data-engineer-project",
    title: "Data Engineer Project",
    period: {
      start: "10.2021",
      end: "08.2022",
    },
    skills: ["Python", "BeautifulSoup", "NumPy", "Pandas"],
    description: `- Extracted and structured data from Excel, PDFs, and web sources
- Source: [Thuvienphapluat](https://thuvienphapluat.vn/phap-luat/ho-tro-phap-luat/bieu-thue-xuat-nhap-khau-2025-da-cap-nhat-theo-nghi-dinh-1742025ndcp-file-excel-bieu-thue-xuat-nhap-225003.html)`,
  },
  {
    id: "uni-landing-page",
    title: "UNI Landing Page",
    period: {
      start: "10.2021",
      end: "08.2022",
    },
    link: "https://unicustomsconsulting.com/en/home/",
    skills: ["React", "Antd", "MUI", "SEO"],
    description: `- SEO optimization (JSON-LD, Google Search Console)
- Multi-language support and content writing`,
  },
];
