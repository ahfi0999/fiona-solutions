// Content for the second group of service pages (copied verbatim from the live site,
// typos included). Headings are rendered with `capitalize`, as on the live site.
import { WP } from "@/lib/site";

export type Card = { title: string; text: string };
export type IconCard = Card & { icon: string; /** rendered icon width on the live site */ iconW: number };
export type ImageCard = Card & { image: string };

export type Hero = {
  title: string;
  subtitle: string;
  text: string;
  bg: string;
  video: string;
  overlay: number;
  /** Subtitle above the title (SEO, Training) instead of below it. */
  kickerFirst?: boolean;
  titleSize?: number;
  /** width of the hero text column (px) */
  contentW?: number;
  /** right padding of the hero paragraph (px, default 5) */
  textPr?: number;
  /** Mobile (<768px) overrides; by default mobile keeps the desktop sizes (as on the live site). */
  mobile?: {
    padTop?: number;
    padBottom?: number;
    padX?: number;
    titleSize?: number;
    subtitleSize?: number;
    subtitleCenter?: boolean;
    textSize?: number;
    textLh?: number;
  };
  padY: number;
};

const icon = {
  legacy: `${WP}/2025/02/legacy-system.png`,
  automation: `${WP}/2025/02/Process-Automation.png`,
  risk: `${WP}/2025/02/Risk-Management.png`,
  scalability: `${WP}/2025/02/Scalability-Flexibility.png`,
  tailored: `${WP}/2025/02/Tailored-Solutions.png`,
  team: `${WP}/2025/02/Expert-Team.png`,
  user: `${WP}/2025/02/User-Centric-Approach.png`,
};

/** Intrinsic pixel size of each feature icon (keeps the right aspect ratio before the image loads). */
export const iconSize: Record<string, [number, number]> = {
  [icon.legacy]: [206, 238],
  [icon.automation]: [231, 231],
  [icon.risk]: [200, 231],
  [icon.scalability]: [253, 253],
  [icon.tailored]: [255, 255],
  [icon.team]: [344, 253],
  [icon.user]: [282, 253],
};

export const blobGrad = `${WP}/2020/06/blob-grad.svg`;
export const blobGradient = `${WP}/2020/06/bg-blob-gradient.svg`;

/* ------------------------------------------------------------------ */
/* Data & Analytics                                                    */
/* ------------------------------------------------------------------ */
export const dataAnalytics = {
  meta: "Data & Analytics - Fiona Solutions",
  hero: {
    title: "Data & Analytics",
    subtitle: "Empowering Your Business with Advanced Technology and Sustainable Innovation",
    text: "With 15 years of experience in IT, ScienceSoft helps businesses across 20+ industries modernize legacy systems, implement process automation, and achieve new growth through cutting-edge technology. We understand the importance of risk management in digital transformation, ensuring targeted, sustainable innovations in business-critical areas while maintaining strict budget control for successful, on-time delivery.",
    bg: `${WP}/2025/02/Project-Management-Excellence.webp`,
    video: `${WP}/2025/03/data-analytics.mp4`,
    overlay: 0.7,
    padY: 210,
  } satisfies Hero,
  features: [
    { title: "Data Platform Modernization", text: "Build cost-effective, scalable data platforms that meet evolving business needs.", icon: icon.legacy, iconW: 51 },
    { title: "AIOps", text: "Use AI to speed up issue resolution and predict outages before they impact operations.", icon: icon.automation, iconW: 56 },
    { title: "Fraud Detection", text: "Leverage AI/ML to detect and respond to fraudulent activities proactively.", icon: icon.risk, iconW: 51 },
    { title: "Digital Customer", text: "Deliver personalized, omnichannel experiences using AI/ML to anticipate needs.", icon: icon.scalability, iconW: 51 },
  ] satisfies IconCard[],
  services: {
    kicker: "Fiona Cloud Transformation",
    title: "We Offering Our Services",
    text: "Cloud transformation enables businesses to modernize IT infrastructure, improve agility, and drive innovation. By migrating to the cloud, companies can optimize costs, enhance security, and ensure seamless scalability.",
    tabs: [
      {
        label: "Data Modernization",
        cards: [
          { title: "Data Governance", text: "Empowering teams with tools and resources to access actionable data." },
          { title: "Data Migration", text: "Transferring data from one system to another with minimal disruption." },
          { title: "Data Operations", text: "Managing, processing, and optimizing data flow for operational efficiency" },
          { title: "Data Enablement", text: "Empowering teams with tools and resources to access actionable data." },
        ],
      },
      {
        label: "Data Engineering",
        cards: [
          { title: "Data Architecture & Design", text: "Structuring and optimizing data systems for efficient storage, access, and scalability." },
          { title: "Master Data Management", text: "Ensuring consistency, accuracy, and governance of critical business data assets." },
          { title: "Data Integration & Security", text: "Seamless data connectivity with robust security for protection and compliance." },
        ],
      },
      {
        label: "Data Visualization",
        cards: [
          { title: "BI Consolidation", text: "Streamlining Business Intelligence systems for unified data insights and efficiency." },
          { title: "Self-service Analytics", text: "Empowering users with easy, on-demand data analysis and visualization tools." },
          { title: "Industry-specific Analytics", text: "Tailored data insights designed for specific industry needs and decision-making." },
          { title: "Standard Dashboarding", text: "Predefined dashboards providing consistent data visualization for quick insights." },
        ],
      },
      {
        label: "Data Science",
        cards: [
          { title: "Supervised Learning", text: "Training models with labeled data for accurate predictions & classifications." },
          { title: "Unsupervised Learning", text: "Discovering hidden patterns in data without predefined labels or guidance." },
          { title: "AI/ML Engineering Ops", text: "Deploying, monitoring, and optimizing machine learning models at scale efficiently." },
          { title: "Predictive Intelligence", text: "Leveraging historical data patterns to forecast future business trends and behaviors." },
          { title: "iDSP", text: "Intelligent Digital Signal Processing for enhanced data analysis and automation." },
        ],
      },
      {
        label: "DataOps",
        cards: [
          { title: "Virtualized Datasets", text: "Accessing and managing data across different systems without physical storage." },
          { title: "Custom Workspaces", text: "Tailored environments designed for specific workflows and team collaboration needs." },
          { title: "Integrated Data Pipelines", text: "Streamlining data flow from source to analysis through automated processes." },
          { title: "CI/CD, DevOps", text: "Automating code deployment, integration, and continuous delivery in operations." },
        ],
      },
    ],
  },
  benefits: {
    title: "How You Benefit with Fiona",
    items: [
      "Unlock high-value business opportunities.",
      "Make smarter decisions with a single source of truth.",
      "Empower teams with democratized data access.",
      "Enhance existing capabilities while adopting new innovations.",
      "Gain near-instant insights to shape future strategies.",
      "Strengthen security and compliance with better data governance.",
    ],
  },
  partners: {
    title: "Our Partners",
    text: "With diverse cloud provider options, choosing the right one can be challenging. As a vendor-neutral expert, ScienceSoft evaluates all major clouds to find the best fit for your needs, ensuring scalability, security, efficiency, and long-term success.",
    logos: [
      { src: `${WP}/2025/02/snow.webp`, alt: "Snowflake", w: 400, h: 250 },
      { src: `${WP}/2025/02/Google-Cloud.webp`, alt: "Google Cloud", w: 400, h: 250 },
      { src: `${WP}/2025/02/databricks.webp`, alt: "Databricks", w: 400, h: 250 },
      { src: `${WP}/2025/02/microsoft.jpg`, alt: "Microsoft Solutions Partner", w: 280, h: 150 },
    ],
  },
};

/* ------------------------------------------------------------------ */
/* Cyber Security                                                      */
/* ------------------------------------------------------------------ */
export const cyberSecurity = {
  meta: "Cyber Security - Fiona Solutions",
  hero: {
    title: "Cyber Security",
    subtitle: "Maximize the Value of Your Cloud Investments!",
    text: "With over 12 years of expertise in cloud development and migration, ScienceSoft provides end-to-end cloud solutions. From crafting cloud adoption strategies and optimizing costs to building high-performance cloud-native applications, data warehouses, and seamlessly migrating legacy systems, we ensure a smooth and efficient cloud transformation.",
    bg: `${WP}/2025/02/cybersecurity.webp`,
    video: `${WP}/2025/02/cyber-security.mp4`,
    overlay: 0.55,
    padY: 235,
  } satisfies Hero,
  features: [
    { title: "Security consulting", text: "Expert guidance to assess, design, and implement cybersecurity strategies.", icon: icon.tailored, iconW: 51 },
    { title: "Security testing", text: "Identifying and mitigating vulnerabilities through penetration testing.", icon: icon.team, iconW: 66 },
    { title: "IT security operations", text: "Continuous monitoring, threat detection, and incident response for IT security.", icon: icon.user, iconW: 56 },
    { title: "Compliance services", text: "Ensuring regulatory compliance with GDPR, ISO 27001, HIPAA, and more.", icon: icon.scalability, iconW: 51 },
  ] satisfies IconCard[],
  help: {
    kicker: "How We Help",
    title: "Secure Your Data, Secure Your Business",
    text: "GlobalLogic delivers intelligent cybersecurity solutions powered by AI and industry best practices to protect your data, applications, and digital assets. Our expertise in engineering secure systems ensures proactive threat detection, risk mitigation, and compliance with industry standards, helping businesses stay resilient against evolving cyber threats.",
    list: [
      "AI-driven security solutions for real-time threat detection",
      "End-to-end protection across applications, cloud, and enterprise networks",
      "Compliance with global security standards (ISO 27001, GDPR, HIPAA, etc.)",
      "Scalable security frameworks tailored to your business needs",
      "Proactive risk assessment and mitigation strategies",
    ],
    image: { src: `${WP}/2025/02/Secure-Your-Business.webp`, w: 602, h: 570 },
  },
  components: {
    title: "IT Components We Secure",
    text: "We safeguard a wide range of IT assets with advanced security solutions, ensuring protection across infrastructures, applications, and digital ecosystems.",
    // Live site lays these out as three columns of three.
    columns: [
      [
        { title: "On-Premises & Cloud", text: "Secure physical and cloud-based infrastructures" },
        { title: "Applications", text: "Defend web, mobile, and desktop applications" },
        { title: "Devices & Systems", text: "Protect desktops, laptops, mobile devices, and system software" },
      ],
      [
        { title: "Networks", text: "Protect internal, external, and hybrid networks" },
        { title: "Web & APIs", text: "Safeguard websites, portals, APIs, and microservices" },
        { title: "Communication & IoT", text: "Secure email services, IoT devices, and infrastructures" },
      ],
      [
        { title: "Data Systems", text: "Secure databases, data warehouses, and data lakes" },
        { title: "Development Environments", text: "Secure CI/CD pipelines, DevOps tools, and code repositories" },
        { title: "Cybersecurity & Compliance", text: "Strengthen security tools, policies, and best practices" },
      ],
    ] satisfies Card[][],
  },
  threats: {
    kicker: "Fiona Solutions",
    title: "Cyber Threats We Help Prevent",
    items: [
      { title: "Malware-Based Attacks", text: "Viruses, worms, trojans, ransomware, spyware, keyloggers, and advanced persistent threats (APTs).", image: `${WP}/2025/02/Malware-Based-Attacks-675x400.webp` },
      { title: "Identity & Access Attacks", text: "Identity theft, brute-force attacks, unauthorized access, and insider threats.", image: `${WP}/2025/02/Identity-Access-Attacks-675x400.webp` },
      { title: "Injection & Code Exploits", text: "SQL injection, Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF), Server-Side Request Forgery (SSRF), and remote code execution (RCE).", image: `${WP}/2025/02/Injection-Code-Exploits-675x400.webp` },
      { title: "Social Engineering Attacks", text: "Phishing, spear phishing, whaling, vishing, smishing, and business email compromise (BEC).", image: `${WP}/2025/02/Social-Engineering-Attacks-675x400.webp` },
      { title: "Network & Infrastructure Attacks", text: "DoS/DDoS attacks, man-in-the-middle (MitM), packet sniffing, session hijacking, replay attacks, and protocol exploitation (DNS spoofing, IP spoofing).", image: `${WP}/2025/02/Network-Infrastructure-Attacks-675x400.webp` },
      { title: "Cloud & API Security Threats", text: "Misconfigured cloud storage, API abuse, unauthorized access, and container security risks.", image: `${WP}/2025/02/Cloud-API-Security-Threats-675x400.webp` },
    ] satisfies ImageCard[],
  },
  why: {
    kicker: "Fiona Scalable Solutions",
    title: "Why Choose Our Cybersecurity Services?",
    text: "Our cybersecurity services offer expert-led protection, 24/7 monitoring, and advanced threat prevention. Tailored, scalable solutions ensure compliance, cost-effectiveness, and rapid deployment to safeguard your business.",
    items: [
      { title: "Expert Cybersecurity Team", text: "Industry specialists ensuring robust protection across all cybersecurity domains." },
      { title: "24/7 Monitoring & Rapid Response", text: "Real-time threat detection with swift incident containment." },
      { title: "Advanced Threat Prevention", text: "Cutting-edge tools and analytics to combat sophisticated cyber threats." },
      { title: "Cost-Effective Security Model", text: "Subscription-based services that outperform in-house security solutions." },
      { title: "Scalable Security Solutions", text: "Flexible services that adapt to your organization's evolving needs." },
      { title: "Regulatory Compliance Support", text: "Expertise in navigating and meeting industry security regulations." },
      { title: "Access to Latest Technologies", text: "Providing top-tier security tech without upfront investment." },
      { title: "Focus on Business Growth", text: "Allowing teams to concentrate on core functions while we handle security." },
      { title: "Rapid Security Deployment", text: "Minimizing downtime with quick implementation of security measures." },
    ] satisfies Card[],
  },
};

/* ------------------------------------------------------------------ */
/* Data Backup & Recovery                                              */
/* ------------------------------------------------------------------ */
export const dataBackup = {
  meta: "Data Backup & Recovery Services - Fiona Solutions",
  hero: {
    title: "Data Backup & Recovery Services",
    subtitle: "Empowering Your Business with Advanced Technology and Sustainable Innovation",
    text: "With 15 years of experience in IT, ScienceSoft helps businesses across 20+ industries modernize legacy systems, implement process automation, and achieve new growth through cutting-edge technology. We understand the importance of risk management in digital transformation, ensuring targeted, sustainable innovations in business-critical areas while maintaining strict budget control for successful, on-time delivery.",
    bg: `${WP}/2025/02/IT-Infrastructure.webp`,
    video: `${WP}/2025/02/Data-Backup-Recovery.mp4`,
    overlay: 0.7,
    contentW: 895,
    padY: 200,
    mobile: { padTop: 109, padBottom: 40, padX: 10, titleSize: 28, subtitleSize: 18, subtitleCenter: true, textSize: 14, textLh: 22 },
  } satisfies Hero,
  features: [
    { title: "Cloud & Hybrid Backup Services", text: "Secure cloud-based backup solutions in off-site data centers or hybrid environments.", icon: icon.legacy, iconW: 51 },
    { title: "Backup-as-a-Service (BaaS)", text: "Automated full, incremental, and continuous backups with disaster recovery for large datasets.", icon: icon.automation, iconW: 66 },
    { title: "Cybersecurity System Development", text: "Advanced encryption, vulnerability scans, and security protocols to protect your systems.", icon: icon.risk, iconW: 56 },
    { title: "Data Backup & Recovery Integrations", text: "Seamless integration with top enterprise backup solutions like AWS, Azure, Acronis, and more.", icon: icon.scalability, iconW: 61 },
  ] satisfies IconCard[],
  managed: {
    title: "Managed IT Services",
    text: "Cloud transformation enables businesses to modernize IT infrastructure, improve agility, and drive innovation. By migrating to the cloud, companies can optimize costs, enhance security, and ensure seamless scalability.",
    tabs: [
      {
        label: "IT support/ Help Desk",
        title: "Comprehensive IT Support Tailored to Your Business",
        paragraphs: [
          "At CBIZ CompuData, we understand the critical role IT plays in your success. Our support services provide 24/7 help desk assistance, advanced monitoring, and proactive maintenance to keep your operations running smoothly.",
          "With a dedicated team ready to handle any IT challenge, we ensure minimal downtime and optimal performance, giving you the confidence to focus on growing your business.",
        ],
        image: `${WP}/2025/02/IT-support-Help-Desk.webp`,
      },
      {
        label: "vCIO",
        title: "Maximize Your IT Investments with Strategic Planning",
        paragraphs: [
          "Our dedicated vCIO partners with your leadership team to align technology with your business objectives. By understanding your unique challenges and goals, we develop tailored IT strategies that enhance efficiency, scalability, and innovation.",
          "With a proactive approach, we ensure your IT investments deliver maximum value while supporting long-term growth. From optimizing infrastructure to implementing emerging technologies, our strategic planning helps future-proof your business in an evolving digital landscape.",
        ],
        image: `${WP}/2025/02/IT-Investments-with-Strategic-Planning.webp`,
      },
      {
        label: "Backup and Recovery",
        title: "Reliable Backup & Recovery for Complete Peace of Mind",
        paragraphs: [
          "Our backup and recovery solutions ensure secure data storage and rapid restoration, tailored to your needs. With proactive security alerts and AI-driven technology, we quickly detect and resolve disruptions, keeping your business running smoothly and protected against data loss.",
        ],
        image: `${WP}/2025/02/Backup-Recovery.webp`,
      },
      {
        label: "End User Support & Onboarding / Offboarding",
        title: "Effortless IT Management for Your Workforce",
        paragraphs: [
          "CBIZ CompuData simplifies employee onboarding and offboarding with automated, secure processes, reducing IT workload. Our efficient solutions enhance productivity while maintaining a secure and seamless IT environment.",
        ],
        image: `${WP}/2025/02/Effortless-IT-Management-for-Your-Workforce.webp`,
      },
    ],
  },
  tailored: {
    kicker: "Seamless Backup, Rapid Recovery, Ultimate Protection.",
    title: "Tailored Data Center Backup & Recovery Solutions",
    text: "Our expert developers provide secure, high-speed data backup and recovery across physical, cloud, and virtual environments, ensuring seamless protection for your critical data.",
    listTitle: "Comprehensive Data Backup & Recovery Solutions",
    first: [
      { title: "Data Protection", text: "Innovative multi-cloud solutions safeguard your data across a diverse and expansive workload ecosystem." },
      { title: "VMware Integration", text: "Seamless VMware integrations ensure flexible, consistent data protection across VMs, containers, and application environments." },
      { title: "Cyber Recovery", text: "Advanced backup and recovery solutions protect critical data from ransomware, cyber threats, and unexpected failures." },
    ] satisfies Card[],
    second: [
      { title: "Cloud & Hybrid Backup Services", text: "Secure cloud-based backup solutions using off-site data centers, colocation facilities, or hybrid server setups." },
      { title: "Backup-as-a-Service (BaaS)", text: "Automated backup solutions offering full, incremental, differential, mirror, and continuous data protection." },
      { title: "Cybersecurity System Development", text: "Advanced security measures, including encryption, vulnerability scans, and change detection, ensure robust protection." },
      { title: "Data Backup & Recovery Integrations", text: "Data Backup & Recovery Integrations" },
    ] satisfies Card[],
    image1: { src: `${WP}/2025/02/Data-Backup.webp`, w: 590, h: 558 },
    image2: { src: `${WP}/2025/02/Data-Backup-recovery-1.webp`, w: 600, h: 627 },
  },
  advanced: {
    title: "Advanced Data Backup & Recovery for Uninterrupted Business Operations",
    text: "At CBIZ CompuData, we provide more than just backup and recovery—we deliver comprehensive data protection to ensure seamless business continuity. Our solutions include secure cloud replication, customized continuity planning, and 24/7 support. With proactive monitoring, compliance assurance, and rapid recovery, we keep your business secure and resilient against disruptions.",
    items: [
      { title: "Cloud Data Replication", text: "Securely replicate data across multiple locations for redundancy and protection against failures and disasters." },
      { title: "24/7 Data Recovery", text: "Round-the-clock expert support to swiftly recover data and minimize downtime from cyber threats or hardware failures." },
      { title: "Automated Backups & Retention", text: "Streamlined backup automation with customizable retention schedules to meet business and compliance needs." },
      { title: "Global Data Replication", text: "High-availability solutions with secure, redundant infrastructure to protect data across regions." },
      { title: "Business Continuity Planning", text: "Tailored strategies to minimize disruptions and ensure seamless operational recovery." },
      { title: "Data Security & Compliance", text: "Advanced encryption and regulatory-compliant backup solutions to safeguard sensitive information." },
    ] satisfies Card[],
  },
};

/* ------------------------------------------------------------------ */
/* IT Consulting                                                       */
/* ------------------------------------------------------------------ */
const fionaConsultText =
  "Fiona Consult accelerates digital transformation by aligning cutting-edge technology with business objectives. With decades of mission-critical expertise, we help organizations modernize, innovate, and stay competitive in an evolving digital landscape. Leveraging data-driven insights and hands-on problem-solving, we deliver end-to-end solutions that drive measurable results.";

const benefitList = [
  "Align IT strategies with business goals for sustainable growth.",
  "Optimize technology infrastructure for seamless operations.",
  "Foster a culture of innovation and adaptability.",
  "Leverage advanced analytics to enhance decision-making.",
  "From strategy to execution, ensuring smooth digital adoption.",
];

export const itConsulting = {
  meta: "IT Consulting - Fiona Solutions",
  hero: {
    title: "IT Consulting",
    subtitle: "Strategic IT Solutions for Business Growth",
    text: "Enhance efficiency and innovation with expert IT consulting services. We align technology with your business goals, optimize infrastructure, and implement cutting-edge solutions to drive growth and scalability.",
    bg: `${WP}/2025/02/IT-Consulation-bg.webp`,
    video: `${WP}/2025/02/IT-Consulting.mp4`,
    overlay: 0.6,
    padY: 240,
  } satisfies Hero,
  features: [
    { title: "Digital business strategy and transformation", text: "Align IT capabilities with business goals to drive performance, streamline operations, and enhance customer experiences.", icon: icon.tailored, iconW: 51 },
    { title: "Enterprise architecture and digital integration", text: "Modernize workloads, optimize costs, and simplify operations for seamless business process integration.", icon: icon.team, iconW: 66 },
    { title: "Organizational change management (OCM)", text: "Foster a culture of innovation with human-centered strategies that drive engagement and digital maturity.", icon: icon.user, iconW: 56 },
    { title: "Sustainable IT advisory services", text: "Develop strategic roadmaps to achieve sustainability goals, reduce carbon footprint, and enable Green IT transformation.", icon: icon.scalability, iconW: 51 },
  ] satisfies IconCard[],
  what: {
    kicker: "Fiona Consultation",
    title: "What is Fiona Consulation?",
    text: fionaConsultText,
    list: benefitList,
    image: { src: `${WP}/2025/02/IT-Consulation-1024x995.webp`, w: 590, h: 573, alt: "IT Consulation" },
  },
  portfolio: {
    kicker: "Fiona Consultation",
    title: "Our IT Consulting Services Portfolio",
    text: "At ScienceSoft, our IT consulting services empower businesses to embrace digital transformation, optimize software systems, and manage IT resources for maximum returns. We offer a comprehensive suite of services that range from strategic advisory to implementation, covering all components of your IT ecosystem.",
    items: [
      { title: "Digital Transformation Consulting", text: "We assess your challenges and create a tailored IT strategy, whether for transforming one process or your entire business.", image: `${WP}/2025/02/Digital-Transformation-Consulting-675x400.webp` },
      { title: "Software Modernization", text: "We evaluate legacy software and implement modernization strategies to boost efficiency and reduce maintenance costs.", image: `${WP}/2025/02/Software-Modernization-675x400.webp` },
      { title: "Software Consulting", text: "We resolve software-related challenges, ensuring you avoid costly errors and derive the full value from new or existing systems.", image: `${WP}/2025/02/Software-Consulting-1-675x400.webp` },
      { title: "Custom Software Development", text: "We build custom software with user-friendly workflows, maintainable code, and clear documentation for long-term success.", image: `${WP}/2025/02/Custom-Software-Development-2-675x400.webp` },
      { title: "Cloud Enablement", text: "We enable businesses to leverage cloud technologies for better scalability, security & savings across infrastructure and applications.", image: `${WP}/2025/02/Cloud-Enablement-675x400.webp` },
      { title: "IT Infrastructure Optimization", text: "We optimize your IT infrastructure to improve reliability, performance, and cost-efficiency, ensuring readiness for future demands.", image: `${WP}/2025/02/IT-Infrastructure-675x400.webp` },
    ] satisfies ImageCard[],
  },
  how: {
    kicker: "Fiona Consultation",
    title: "How We Work",
    text: fionaConsultText,
    listTitle: "Our Agile Co-Innovation Framework:",
    steps: [
      { title: "Envision", text: "Assess, strategize, and develop a roadmap to achieve key business outcomes." },
      { title: "Design", text: "Co-create industry-specific solutions tailored to your hybrid technology environment." },
      { title: "Adopt", text: "Migrate, modernize, and integrate workloads to optimize efficiency and performance." },
      { title: "Evolve", text: "Continuously assess progress, refine strategies, and drive ongoing modernization." },
    ] satisfies Card[],
    image: { src: `${WP}/2025/02/digital-Transformation-1.webp`, w: 462, h: 463 },
  },
  why: {
    title: "Why Choose Fiona Solutions?",
    text: "Fiona combines technical excellence, deep industry expertise, and an Agile-driven approach to deliver high-quality, customized software solutions. We build long-term partnerships with global clients, ensuring seamless collaboration and continuous innovation. With a team of 160+ experts, we provide the perfect balance of flexibility, scalability, and reliability.",
    items: [
      { title: "Technical Excellence & Quality Delivery", text: "With decades of experience, we provide high-quality, reliable solutions while ensuring flexibility and ease of collaboration." },
      { title: "Deep Industry Expertise", text: "Our team’s domain knowledge in regulated industries enables us to craft tailored software solutions for unique business needs." },
      { title: "Agile at Our Core", text: "As pioneers of Agile in Croatia, we prioritize early value delivery and continuous user feedback to ensure quick, adaptable solutions." },
      { title: "Long-Term Client Partnerships", text: "80% of our revenue comes from international clients, reflecting our commitment to long-term software development partnerships." },
      { title: "The Perfect Team Size", text: "With over 160 in-house experts, we provide a diverse tech ecosystem while maintaining a personalized, tailored approach." },
      { title: "Seamless Cultural Fit", text: "Based in Europe, we ensure smooth collaboration &compatibility with international clients through on-site availability." },
    ] satisfies Card[],
  },
};

/* ------------------------------------------------------------------ */
/* SEO                                                                 */
/* ------------------------------------------------------------------ */
export const seo = {
  meta: "SEO - Fiona Solutions",
  hero: {
    title: "Search Engine Optimization(SEO)",
    subtitle: "Boost Your Rankings & Drive Organic Growth",
    text: "Search Engine Optimization (SEO) enhances your website’s visibility on search engines, driving organic traffic. By optimizing on-page elements and improving site structure, we help increase rankings and attract relevant visitors. Our strategies ensure long-term success by boosting your site’s authority and aligning it with search engine algorithms.",
    bg: `${WP}/2025/02/search-engine-optimisation.webp`,
    video: `${WP}/2025/03/seo1.mp4`,
    overlay: 0.65,
    kickerFirst: true,
    titleSize: 48,
    textPr: 18,
    padY: 235,
  } satisfies Hero,
  features: [
    { title: "Analysis", text: "Create a customized roadmap to align SEO goals with business objectives for success.", icon: icon.tailored, iconW: 51 },
    { title: "Strategy", text: "Follow structured steps to optimize websites, drive organic traffic, and improve rankings.", icon: icon.user, iconW: 56 },
    { title: "Implementation", text: "Execute on-page and off-page techniques, including content optimization and backlinks.", icon: icon.scalability, iconW: 51 },
    { title: "Success", text: "Monitor and analyze results to ensure growth, visibility, and higher conversion rates.", icon: icon.team, iconW: 66 },
  ] satisfies IconCard[],
  why: {
    kicker: "Get Found. Get Clicks. Get Customers.",
    title: "Why SEO Matters?",
    text: "SEO is essential for expanding your online presence. By optimizing your website with strategic keywords, technical improvements, and high-quality content, we help you rank higher on search engines, attract organic traffic, and increase conversions. Our data-driven approach ensures long-term visibility and sustainable business growth.",
    listTitle: "Key Benefits",
    list: benefitList,
    image: { src: `${WP}/2025/02/Why-SEO-Matters.webp`, w: 590, h: 567 },
  },
  services: {
    kicker: "Customized SEO Strategies for Maximum Impact",
    title: "Our SEO Services",
    text: "Our tailored SEO strategies enhance search visibility, drive organic traffic, and boost conversions. We optimize on-page elements, build high-quality backlinks, and implement data-driven techniques for sustained growth. With a focus on your business goals, we ensure measurable results and long-term success.",
    items: [
      { title: "Technical SEO", text: "Enhance website speed, security, and mobile responsiveness to improve rankings and user experience across all devices." },
      { title: "On-Page Optimization", text: "Optimize keywords, meta tags, headings, and content to ensure better search visibility and engagement with your audience." },
      { title: "Off-Page SEO", text: "Build authoritative backlinks, improve domain authority, and establish credibility to boost search engine rankings effectively." },
      { title: "Local & National SEO", text: "Optimize business listings, Google My Business, and local citations to improve visibility in location-based searches." },
      { title: "E-commerce SEO", text: "Optimize product descriptions, images, and category structures to attract more shoppers and increase conversions." },
      { title: "SEO Analytics & Reporting", text: "Track key metrics, analyze performance, and refine SEO strategies based on real-time data insights." },
    ] satisfies Card[],
  },
  process: {
    kicker: "A Data-Driven Approach to SEO Success",
    title: "How Our SEO Process Works",
    text: "Our SEO process begins with in-depth research and analysis to identify opportunities for growth. We implement strategic optimizations, including technical, on-page, and off-page SEO, to enhance search rankings. Continuous monitoring and adjustments ensure sustained performance and long-term success.",
    items: [
      { title: "SEO Audit", text: "Evaluate website performance, identify technical issues, and uncover optimization opportunities for improved search rankings.", image: `${WP}/2025/02/SEO-Audit-675x400.webp` },
      { title: "Keyword Research", text: "Discover high-impact, relevant keywords to attract targeted traffic and enhance search engine visibility.", image: `${WP}/2025/02/Keyword-Research-675x400.webp` },
      { title: "On Page & Off-Page Optimization", text: "Optimize content, meta tags, and site structure to improve user experience and search engine rankings.", image: `${WP}/2025/02/On-Page-Optimization-675x400.webp` },
      { title: "Content Strategy", text: "Develop engaging, high-quality content tailored to audience needs, boosting visibility and organic traffic.", image: `${WP}/2025/02/Content-Strategy-675x400.webp` },
      { title: "Link Building", text: "Strengthen website authority with high-quality backlinks from reputable sources to improve search rankings.", image: `${WP}/2025/02/Link-Building-675x400.webp` },
      { title: "Ongoing Monitoring", text: "Continuously track SEO performance, analyze data, and refine strategies for long-term success.", image: `${WP}/2025/02/Ongoing-Monitoring-675x400.webp` },
    ] satisfies ImageCard[],
  },
  leads: {
    kicker: "Customized SEO Strategy",
    title: "Drive Organic Traffic and Generate Leads with SEO",
    paragraphs: [
      "We design tailored SEO strategies that align with each stage of the buyer’s journey, ensuring your business appears when your ideal customers are searching. By focusing on targeted keywords, content optimization, and user experience, we help drive organic traffic to your website and convert visitors into leads.",
      "Ready to take your business to the next level? Let’s discuss how we can craft a powerful organic SEO strategy that will increase your online visibility and bring you closer to your target audience.",
    ],
    image: { src: `${WP}/2025/02/Lead-Generation.webp`, w: 533, h: 460 },
  },
  trust: {
    kicker: "Build Trust with Strategic SEO",
    title: "Boost Your Brand’s Visibility and Authority",
    paragraphs: [
      "Our tailored SEO strategies are designed to enhance your search engine rankings, making it easier for your target audience to discover your brand. By positioning your website at the top of search results, we help build trust and credibility with potential clients who associate top-ranking websites with reliability and value.",
      "With a focus on optimizing every aspect of your online presence, we ensure that your business not only attracts visitors but also fosters long-term relationships and brand recognition. Through continuous refinement and data-driven insights, we work towards establishing your brand as a leader in your industry.",
    ],
    image: { src: `${WP}/2025/02/Boost-Your-Brands-Visibility-and-Authority.webp`, w: 533, h: 495 },
  },
};

/* ------------------------------------------------------------------ */
/* Training                                                            */
/* ------------------------------------------------------------------ */
export const training = {
  meta: "Training - Fiona Solutions",
  hero: {
    title: "Training",
    subtitle: "Private Data Analytics Training",
    text: "Our Private Data Analytics Training equips your team with essential skills to analyze and interpret data effectively. Learn how to derive actionable insights, make data-driven decisions, and drive business growth through customized, hands-on training tailored to your needs.",
    bg: `${WP}/2025/02/training.webp`,
    video: `${WP}/2025/03/training.mp4`,
    overlay: 0.7,
    kickerFirst: true,
    textPr: 18,
    padY: 240,
  } satisfies Hero,
  features: [
    { title: "Customized Curriculum", text: "Tailored training programs designed specifically based on your team’s specific needs and business goals.", icon: icon.tailored, iconW: 51 },
    { title: "Hands-on Learning", text: "Practical exercises and real-world data scenarios to ensure immediate application of concepts.", icon: icon.user, iconW: 56 },
    { title: "Expert Instructors", text: "Learn from experienced professionals with extensive industry knowledge in data analytics.", icon: icon.scalability, iconW: 51 },
    { title: "Actionable Insights", text: "Focused on equipping your team with the tools to extract meaningful, data-driven insights for smarter decision-making.", icon: icon.team, iconW: 66 },
  ] satisfies IconCard[],
  transform: {
    title: "Transform Into a Data-Driven Organization with Our Private Data & Analytics Training",
    subtitle: "Create a path to more informed, data-driven decision-making.",
    text: "Fiona private training provides the tools and expertise to help you harness your data, turning it into actionable insights that drive smarter decisions, enhance strategies, and foster a data-driven organization.",
    image: { src: `${WP}/2025/02/training-1.webp`, w: 560, h: 481 },
  },
  courses: {
    title: "Our Training Courses",
    text: "Join our private training for a team learning experience, or improve your skills in a public course.",
    items: [
      { title: "Power BI Data Modeling", text: "Master designing dimensional Power BI models for various real-world scenarios." },
      { title: "Power BI Data Storytelling", text: "Learn to craft compelling data narratives using Power BI’s storytelling capabilities." },
      { title: "Data Visualization Best Practices", text: "Discover how to design visually engaging reports that effectively communicate insights." },
      // Live text ends with <br><br> (an extra blank line).
      { title: "Dimensional Modeling Foundations", text: "Get a strong foundation in best practices for Dimensional Modeling.", extraLine: true },
      { title: "Power BI Dashboard in a Day", text: "Learn to prepare data, build a Power BI dashboard & publish it within a day!" },
      { title: "Power BI Data Visualization", text: "Build advanced Power BI visualizations and enhance interactivity in reports." },
      { title: "Power BI Group Coaching", text: "Support your team in applying new Power BI skills to real-world scenarios." },
      { title: "Power BI Data Wrangling", text: "Learn data preparation & how to build best-practice Power BI data models." },
      { title: "Power BI DAX Foundations", text: "Understand foundational DAX concepts to enhance Power BI data models and reports." },
    ] satisfies (Card & { extraLine?: boolean })[],
  },
  cta: {
    title: "Unsure where to begin with your organization's training?",
    subtitle: "Start with our free maturity assessment today.",
    button: "Start Now",
  },
};
