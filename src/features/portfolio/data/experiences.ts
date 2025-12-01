import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "freelance",
    companyName: "Freelance",
    positions: [
      {
        id: "freelance-2025",
        title: "Full-stack Developer",
        employmentPeriod: {
          start: "2025",
        },
        employmentType: "Part-time",
        description: `- Built a truck management website with real-time delivery tracking.
- Developed landing page with CMS system using Strapi.
- Designed a customizable WordPress landing page.`,
        icon: "code",
        skills: [
          "React",
          "Next.js",
          "Google Maps API",
          "Better Auth",
          "Strapi",
          "WordPress",
        ],
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "logixtek",
    companyName: "Logix Technology",
    companyLogo:
      "https://www.logixtek.com/wp-content/uploads/2024/03/cropped-flaticon-32x32.png",
    positions: [
      {
        id: "logix-middle-2025",
        title: "Middle Frontend Engineer",
        employmentPeriod: {
          start: "05.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Lead frontend engineer for FMCG project.
- Architecting frontend structure using Next.js, Shadcn, TailwindCSS, and Turborepo.
- Leading frontend architecture and component standardization.`,
        skills: [
          "React.js",
          "Next.js",
          "Typescript",
          "Zustand",
          "Vite",
          "TailwindCSS",
          "Shadcn",
          "Agile",
        ],
        isExpanded: true,
      },
      {
        id: "logix-junior-2022",
        title: "Junior Frontend Engineer",
        employmentPeriod: {
          start: "09.2022",
          end: "05.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Maintained and improved multiple production systems including Car Bidding App and FMCG project.
- Upgraded MUI version, standardized components, and migrated project from JS to TS.
- Researched and built AI-powered Retailer Assistant using LangChain, Python, and vector database.
- Migrated UI from MUI to veeamUI for [Veeam](https://www.veeam.com/) data portability project.
- Led and mentored 2 fresher frontend developers.`,
        skills: [
          "React.js",
          "React Native",
          "Next.js",
          "Typescript",
          "Python",
          "Redux Toolkit",
          "Vite",
          "Agile",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "uni-customs-consulting",
    companyName: "UNI Customs Consulting",
    companyLogo:
      "https://unicustomsconsulting.com/wp-content/uploads/2024/05/cropped-logo-uni-1-32x32.png",
    positions: [
      {
        id: "uni-fresher-2021",
        title: "Fresher Software Engineer",
        employmentPeriod: {
          start: "10.2021",
          end: "08.2022",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Developed [Eximhow Web App](https://www.eximhow.com/) and [UNI Customs Consulting Landing Page](https://unicustomsconsulting.com/en/home/) using React, Antd, and MUI.
- Built data extraction and processing pipelines using Python, BeautifulSoup, NumPy, and Pandas.
- Designed and implemented [HS Search System](https://uni-solr.eximhow.com/solr) using Solr.
- Worked on multi-language support, SEO and content writing.`,
        skills: [
          "React.js",
          "Antd",
          "MUI",
          "Solr",
          "Python",
          "Auth0",
          "nginx",
          "UI/UX Design",
          "UX Writing",
          "Design System",
          "Figma",
          "Redux",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: false,
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "c47f5903-88ae-4512-8a50-0b91b0cf99b6",
        title: "University of Science — VNUHCM",
        employmentPeriod: {
          start: "08.2017",
          end: "2021",
        },
        icon: "education",
        //         description: `- Currently studying for a Bachelor's degree in Information Systems.
        // - Language Proficiency: B1 English Level.
        // - Achieved several awards, including:
        //   - Bronze Medal — 10th Design, Manufacturing, and Application Award 2022
        //   - 2nd Prize — Business Startup Competition 2019`,
        skills: [
          "C++",
          "Python",
          "SQL",
          "NLP",
          "Data Structures",
          "Algorithms",
          "Advanced Databases",
          "Systems Design",
          "Distributed Systems",
          "Software Engineering",
          "Self-learning",
          "Teamwork",
          "Presentation",
        ],
      },
      {
        id: "70131ed8-36d9-4e54-8c78-eaed18240eca",
        title: "Trung Phu High School",
        employmentPeriod: {
          start: "08.2014",
          end: "06.2017",
        },
        icon: "education",
        //         description: `- Student of the Specialized Computer Science Program.
        // - Granted direct admission to university due to achieving 3rd Prize at the national level.
        // - [Achieved numerous awards](https://baocantho.com.vn/nguyen-chanh-dai-17-tuoi-va-19-giai-thuong-a97348.html) at city and national levels, including:
        //   - [3rd Prize](https://muctim.tuoitre.vn/cong-cu-ho-tro-viec-day-va-hoc-55107.htm) — National Science and Engineering Fair 2018 (ViSEF)
        //   - 1st Prize — Can Tho City Science and Engineering Fair 2018
        //   - Creativity Award — Binh Duong Hackathon 2017
        //   - Consolation Prize — National Youth and Children's Creativity Contest 2016
        //   - [1st Prize](https://www.youtube.com/watch?v=OYgugvjqU4A) — Can Tho City Youth and Children's Creativity Contest 2016
        //   - 3rd Prize — National Young Informatics Contest 2016
        // - Achieved the title of Outstanding Student from Grade 10-12.
        // - Selected for the National Excellent Student Contest in Informatics for two consecutive years during high school.
        // - Honored on the school's "Hall of Fame" for academic achievements.
        // - Developed a feature using Node.js and Pandoc to recognize multiple-choice questions from .docx files and upload them to an [online quiz platform](https://youtu.be/QjR99wdmTyo) I created.
        // - Developed websites based on Laravel framework.
        // - Built websites with PHP and MySQL, following the MVC architecture.`,
        skills: [
          "Algorithms",
          "Pascal",
          "Self-learning",
          "Mathematics",
          "World, Excel, PowerPoint",
        ],
      },
      {
        id: "36c4c6fb-02d0-48c0-8947-fda6e9a24af7",
        title: "Hoa Phu Secondary School",
        employmentPeriod: {
          start: "08.2010",
          end: "06.2014",
        },
        icon: "education",
        //         description: `- Recognized as the most outstanding student of the district.
        // - Achieved numerous awards at city and national levels:
        //   - Consolation Prize — National Young Informatics Contest 2015
        //   - Consolation Prize — National Young Informatics Contest 2014
        //   - 1st Prize — Can Tho City Young Informatics Contest 2014
        // - Achieved the title of Outstanding Student from Grade 6-9.
        // - Developed websites using the open-source NukeViet CMS.`,
        skills: ["Self-learning", "Mathematics"],
      },
    ],
  },
];
