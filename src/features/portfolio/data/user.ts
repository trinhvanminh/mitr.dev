import type { User } from "@/features/portfolio/types/user";

export const USER: User = {
  firstName: "Minh",
  lastName: "Trịnh",
  displayName: "Minh Trịnh",
  username: "tvminh26",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code. Small details matter.",
  flipSentences: [
    "Creating with code. Small details matter.",
    "Design Engineer (goal)",
    "Open Source Contributor",
  ],
  address: "Ho Chi Minh City, Viet Nam",
  phoneNumber: "Kzg0OTQzNDM5MTYw", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "dHZtaW5oMjYxMUBnbWFpbC5jb20=", // base64 encoded
  website: "https://mitr.dev",
  jobTitle: "Design Engineer",
  jobs: [
    {
      title: "Middle Frontend Developer",
      company: "Logixtek",
      website: "https://www.logixtek.com",
    },
    {
      title: "Frontend Developer",
      company: "Senla",
      website: "https://www.shipsenla.com",
    },
  ],
  about: `
- **Frontend Engineer** with **4+ years of experience**, known for pixel-perfect execution and strong attention to small details.
- Skilled in **Next.js**, **React**, **TypeScript**, and modern front-end technologies; building high-quality, user-centric web and mobile applications.
- Passionate about exploring new technologies and turning ideas into reality through polished, thoughtfully crafted personal projects.
`,
  avatar: "/assets/images/avatar-rick_and_morty-style.png",
  ogImage:
    "https://assets.chanhdai.com/images/screenshot-og-image-light.png?t=1763205174",
  namePronunciationUrl: "/audio/chanhdai.mp3",
  timeZone: "Asia/Ho_Chi_Minh",
  keywords: [
    "mitr",
    "trinhvanminh",
    "trinh van minh",
    "vanminh",
    "van minh",
    "minh trinh",
    "minhtrinh",
    "tvminh",
    "tvminh26",
    "tvminh2611",
    "trịnh văn minh",
    "minh trịnh",
  ],
  dateCreated: "2023-11-26", // YYYY-MM-DD
};
