import { WP } from "@/lib/site";

// Content for /about-us, copied from the live page (typos included).

export const aboutImages = {
  heroBg: `${WP}/2025/02/about-fiona.webp`,
  heroVideo: `${WP}/2025/02/about.mp4`,
  whoWeAre: `${WP}/2025/02/Who_We_Are.webp`,
  mission: `${WP}/2020/07/about-1.jpg`,
  vision: `${WP}/2025/01/Vision-1.webp`,
  blobGrad: `${WP}/2020/06/blob-grad.svg`,
  blobGradient: `${WP}/2020/06/bg-blob-gradient.svg`,
  man: `${WP}/2025/02/about-features-524x1024.webp`,
  team: `${WP}/2025/01/sec2.png`,
  peopleFirst: `${WP}/2025/01/software-industries.webp`,
  projectBg: `${WP}/2025/01/Img_13.png`,
};

export const aboutCards = [
  { title: "Expert Software Development", text: "Delivering tailored mobile and web solutions with a team of 500+ skilled developers.", icon: `${WP}/2025/02/expert-software-development-1.svg`, w: 61, h: 61 },
  { title: "Real-Time Collaboration", text: "Our developers work within your time zone for seamless communication and execution.", icon: `${WP}/2025/02/RealTime-Collaboration.svg`, w: 61, h: 61 },
  { title: "Scalability & Support", text: "Providing scalable solutions and dedicated support to maximize business value and ROI.", icon: `${WP}/2025/02/Scalability.svg`, w: 61, h: 61 },
  { title: "Industry-Specific Expertise", text: "Leveraging deep domain knowledge to create high-performing software solutions.", icon: `${WP}/2025/02/industry-expertise.svg`, w: 61, h: 61 },
];

export const whoWeAre = [
  "Fiona Solutions was founded in 2018 with a clear mission: to redefine consulting by combining strong core values with real, measurable results. From the beginning, we set out to provide strategic, innovative solutions that create meaningful impact, setting us apart from traditional firms. Our expertise spans Engineering, Manufacturing, and Information Technology, where we help businesses and organizations navigate complex challenges with forward-thinking approaches.",
  "Over the years, we’ve partnered with Fortune 500 companies, startups, and non-profits across diverse industries, delivering tailored solutions that drive growth and efficiency. Our ability to adapt to unique business needs has solidified our reputation as a trusted consulting partner. At the heart of our success is our people—top-tier talent aligned with our mission, committed to excellence, collaboration, and continuous innovation.",
  "Headquartered in Texas, Fiona Solutions continues to expand, evolve, and refine our impact. We design intelligent, resource-efficient solutions that optimize time, workforce, and financial investments, empowering businesses for the future. As we grow, we remain dedicated to pushing boundaries, driving innovation, and helping our clients achieve lasting success in an ever-changing digital and engineering landscape.",
];

export const stats = [
  { value: "500 +", label: "Consutants", icon: `${WP}/2025/02/Software-consulting.webp` },
  { value: "100 +", label: "Clients", icon: `${WP}/2025/03/clients.webp` },
  { value: "30 +", label: "Projects", icon: `${WP}/2025/03/projects.webp` },
];

export const mission =
  "We are a team of passionate technologists dedicated to creating innovative solutions that drive meaningful impact for our clients. Our enthusiasm fuels our creativity, enabling us to design effective products and answers tailored to meet unique challenges. With a commitment to excellence, we combine expertise, ingenuity, and a love for technology to deliver results that exceed expectations. Continuous learning and a forward-thinking mindset keep us motivated and excited about the possibilities ahead.";

export const vision = [
  "Our vision is to establish ourselves as a highly respected technology solutions consulting company, recognized for our expertise, innovation, and commitment to excellence. With a strong team of passionate and skilled technologists, we aim to deliver outstanding solutions that drive success for our clients. Through a vast portfolio of successful projects and a global network of satisfied customers, we strive to set new industry standards and build lasting relationships based on trust and performance.",
  "We are dedicated to creating an organization that thrives on talent, collaboration, and self-motivation. By bringing together exceptional individuals from around the world, we foster a culture of continuous learning and innovation. Our goal is to empower our team members to push the boundaries of technology, solve complex challenges, and contribute to a shared vision of progress and excellence in the technology consulting space.",
];

const icon = (name: string) => `${WP}/2025/02/${name}.png`;

// iw = icon column width, w/h = icon size (the live icons sit 10px above the text top), mw = mobile text width.
export const differentLeft = [
  { title: "Data Analytics", text: "Turning data into actionable insights to reduce costs, boost efficiency, and minimize risk.", icon: icon("Data-Analytics"), iw: 78, w: 78, h: 70, mw: 185 },
  { title: "Unmatched Expertise", text: "A team of top industry professionals with a proven track record in Data and Analytics.", icon: icon("Unmatched-Expertise"), iw: 76, w: 76, h: 76.4, mw: 181 },
  { title: "Trusted & Secure Services", text: "ISO 27001-certified, ensuring the highest standards of data security and integrity.", icon: icon("Secure-Services"), iw: 76, w: 76, h: 77.5, mw: 184 },
  { title: "Building Meaningful Connections", text: "Creating lasting relationships to drive impactful and successful outcomes.", icon: icon("Building-Meaningful-Connections"), iw: 75, w: 75, h: 75, mw: 181 },
  { title: "A Great Place To Work", text: "An inspiring work culture that attracts top talent and fosters innovation.", icon: icon("A-Great-Place-to-Work"), iw: 79, w: 79, h: 79.4, mw: 181 },
];

export const differentRight = [
  { title: "Industry-Trained Consultants", text: "Experts in data extraction, warehousing, and Dimensional Modeling for seamless execution.", icon: icon("Industry-Trained-Consultants"), iw: 84, w: 77.3, h: 75, mw: 164 },
  { title: "Client-Focused Approach", text: "Independent, unbiased solutions designed to maximize success for your business.", icon: icon("Client-Focused-Approach"), iw: 83, w: 78, h: 75, mw: 178 },
  { title: "World-Class Training", text: "Expert-led workshops and events to enhance skills and industry knowledge.", icon: icon("World-Class-Training"), iw: 83, w: 76.4, h: 76.4, mw: 176 },
  { title: "Transparent & Collaborative", text: "A fully open and honest process, keeping you informed every step of the way.", icon: icon("Transparent-Collaborative"), iw: 92, w: 86.6, h: 89.8, mw: 175 },
];

export const teamGuides = [
  "Our story has been driven by focusing on creating real and lasting relationships with our clients to help them deliver tangible results.",
  "The key to achieving this has been our Ambassadors, who are the force behind our continued growth across three countries. They are the individuals we work with day to day, and we put every effort into creating the collaborative spaces that bring them success.",
];

export const peopleFirst = [
  "When Fions Solutions was founded in 2024 by Ravi, they envisioned building a thriving company capable of adapting to whatever the future might bring. Their goal was to nurture a strong culture, not merely create a business to sell.",
  "As Fions Solutions grew, its core ethos evolved from this family-oriented foundation, with lasting relationships becoming a central pillar. Even as the organization expanded internationally, we remained steadfast in our commitment to our team, our clients, and our community.",
  "This commitment is why we embraced the Service Profit Chain, a management philosophy that emphasizes the importance of a happy, engaged team. It believes that an engaged team leads to satisfied, loyal clients, resulting in success for everyone involved.",
];

// Same order as projectIconPaths in components/about-us/projectIcons.ts
const discovery = "We explore client needs, ask insightful questions, and identify hidden goals, even with minimal specifications.";
const estimates = "Our thorough discovery process ensures precise cost estimates, risk assessment, and cost optimization opportunities.";
export const projectFeatures = [
  { title: "Engaged Requirements Engineering", text: discovery },
  { title: "Accurate And Realistic Cost Estimation", text: discovery },
  { title: "Dynamic, Yet Controllable, Project Scoping", text: discovery },
  { title: "Competency-Based Selection Team", text: estimates },
  { title: "Comprehensive Risk Management", text: estimates },
  { title: "Agile Delivery", text: "We manage changing requirements through sprints, prioritizing, developing, testing, and deploying features efficiently." },
  { title: "Prevention Of Scope Creep", text: "We assess each change request’s feasibility and impact, ensuring controlled flexibility throughout development." },
  { title: "Budget Control", text: "We maintain financial discipline through accurate estimates, risk planning, and continuous budget monitoring." },
  { title: "Responsible Approach To Deadlines", text: "We ensure timely delivery using structured workflows, clear documentation, and regular project reviews." },
  { title: "Coordinated Teamwork", text: "We establish tailored communication flows for seamless collaboration among all project stakeholders." },
  { title: "Routine Reporting", text: "We provide regular KPI reports and progress forecasts, keeping clients informed at every stage." },
  { title: "Centralized Knowledge Management", text: "We document key decisions and processes to prevent knowledge loss and ensure project continuity." },
];

export const partners = ["Magento", "microsoft", "Salesforce", "Autodesk", "aws", "bigcommerce", "NetSuite", "Oracle", "SAP", "ibm"].map(
  (n) => ({ name: n, image: `${WP}/2025/02/${n}.webp` }),
);

// Technology logo sliders (ElementsKit client-logo Swipers on the live site).
// spv = slides per view [mobile <768, tablet, desktop >=1024]; gm = slides per group on mobile; ap = autoplay.
// w / ml = desktop width / left gap in px of the 1200px row; wm / mlm = mobile width / left gap in px of the 360px row.
// lw = mobile label width (px); lgap = the extra 40px live leaves above a wrapped mobile label.
// hover = per-logo hover image (the live tiles swap to these on hover, quirks included).
type Group = {
  label?: string; logos: string[]; spv: [number, number, number]; gm?: number; ap: boolean;
  w: number; ml?: number; wm?: number; mlm?: number; lw?: number; lgap?: boolean; hover?: Record<number, string>;
};
// small = 14px group labels on mobile; bigTitle = 18px row title on mobile (16px otherwise), as on live.
export type TechRow = { title?: string; small?: boolean; bigTitle?: boolean; groups: Group[] };

const white = { 3: "client-white-logo-5.svg", 4: "client-white-logo-6.svg" };
const backEnd = ["python", "php", "node", "java", "dotnet"];

export const techRows: TechRow[] = [
  { title: "Back-End Programming Languages", groups: [{ logos: backEnd, spv: [3, 2, 8], gm: 3, ap: true, w: 1200 }] },
  {
    title: "Front-End Programming Languages",
    small: true,
    groups: [
      { label: "Languages", logos: ["html-1", "css-1", "js-1"], spv: [1, 2, 3], ap: true, w: 439, wm: 128, lw: 126 },
      { label: "JavaScript Frameworks", logos: ["reactjs", "Vuejs", "nextjs", "meter", "ember"], spv: [1, 2, 4], ap: true, w: 594, ml: 50, wm: 131, mlm: 20, lw: 163 },
    ],
  },
  { title: "Mobile", bigTitle: true, groups: [{ logos: ["android", "ios", "cordova", "flutter", "ionic", "pwa", "react-native", "xamarin"], spv: [3, 2, 8], gm: 3, ap: true, w: 1200 }] },
  {
    title: "Databases / Data Storages",
    groups: [
      { label: "SQL", logos: ["sql-native", "MySQL", "PostgreSQL", "oracle", "AzureSQL-1"], spv: [3, 2, 5], ap: false, w: 575, lw: 29 },
      { label: "NoSQL", logos: ["Cassandra", "Hive", "hbase", "nifi", "MongoDB"], spv: [3, 2, 5], ap: false, w: 575, ml: 50, lw: 158 },
    ],
  },
  {
    title: "Cloud Databases, Warehouses, And Storage",
    groups: [
      { label: "SQL", logos: backEnd, spv: [3, 2, 5], ap: true, w: 575, lw: 181, hover: white },
      { label: "NoSQL", logos: backEnd, spv: [3, 2, 5], ap: true, w: 590, ml: 35, lw: 187, lgap: true, hover: white },
    ],
  },
  {
    title: "DevOps",
    groups: [
      { label: "Containerization", logos: ["docker", "kubernetes", "openshift", "mesos"], spv: [3, 2, 4], ap: true, w: 445, wm: 324, lw: 132 },
      { label: "Automation", logos: ["ansible", "puppet", "chef", "saltstack", "terraform", "packer"], spv: [3, 2, 6], ap: true, w: 705, ml: 51 },
    ],
  },
  {
    groups: [
      { logos: ["aws-developer-tools", "azure-devops", "g-developer-tools", "jenkins", "tc"], spv: [3, 2, 5], ap: true, w: 533, wm: 322, hover: { 4: "client-white-logo-5.svg" } },
      { logos: ["zabbix", "nagios", "elasticsearch", "prometheus", "grafana", "datadog"], spv: [3, 2, 6], ap: false, w: 617, ml: 51 },
    ],
  },
];

export const techLogo = (name: string) => `${WP}/2025/02/${name.includes(".") ? name : `${name}.png`}`;
