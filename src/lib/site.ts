// All site content lives here so pages stay simple.
// Images and videos are served locally from public/uploads (same folder layout as the old WordPress uploads).

export const WP = "/uploads";

export type NavItem = { label: string; href: string; children?: NavItem[] };

export const services: (NavItem & { image: string; blurb: string })[] = [
  { label: "Software Development", href: "/services/software-development", image: `${WP}/2025/02/Custom-Software-Development-2-396x360.webp`, blurb: "We turn visions into solutions, delivering fast with security and a proven framework." },
  { label: "Frontent UI/UX Development", href: "/services/frontend-ui-ux-development", image: `${WP}/2025/02/ui-ux-development-396x360.webp`, blurb: "We turn visions into solutions, delivering fast with security and a proven framework." },
  { label: "Web & Mobile App Development", href: "/services/web-and-mobile-develpment", image: `${WP}/2025/02/Mobile-App-Development-396x360.webp`, blurb: "We turn visions into solutions, delivering fast with security and a proven framework." },
  { label: "Digital Transformation", href: "/services/digital-transformation", image: `${WP}/2025/02/Digital-product-engineering-396x355.webp`, blurb: "Your go-to for eCommerce success! Custom or platform solutions to boost sales." },
  { label: "Cloud Transformation", href: "/services/cloud-transformation", image: `${WP}/2025/02/Cloud-Transformation-396x360.webp`, blurb: "Optimize with ERP, CRM, HRM, SCM—custom or platform solutions for your needs." },
  { label: "AI/ML Transformation", href: "/services/ai-ml-transformation", image: `${WP}/2025/02/AI-Machine-Learning-396x360.webp`, blurb: "We craft user-centric websites and scalable solutions to boost performance, engagement, growth." },
  { label: "Data Analytics", href: "/services/data-analytics", image: `${WP}/2025/02/Ongoing-Monitoring-396x360.webp`, blurb: "We build custom B2B, B2C, B2E mobile apps—native, cross-platform, and future-ready." },
  { label: "Cyber Security", href: "/services/cyber-security", image: `${WP}/2025/02/cybersecurity-396x360.webp`, blurb: "Modernize systems with advanced technology to boost efficiency, innovation, and business growth." },
  { label: "Data Backup & Recovery", href: "/services/data-backup-recovery-services", image: `${WP}/2025/03/data-backup-and-recovery-396x360.webp`, blurb: "Optimize with ERP, CRM, HRM, SCM—custom or platform solutions for your needs." },
  { label: "IT Consulting", href: "/services/it-consulting", image: `${WP}/2025/02/IT-Consulation-bg-396x360.webp`, blurb: "We craft user-centric websites and scalable solutions to boost performance, engagement, growth." },
  { label: "SEO", href: "/services/seo", image: `${WP}/2025/03/seo-396x360.webp`, blurb: "We build custom B2B, B2C, B2E mobile apps—native, cross-platform, and future-ready." },
  { label: "Training", href: "/services/training", image: `${WP}/2025/02/training-396x360.webp`, blurb: "Modernize systems with advanced technology to boost efficiency, innovation, and business growth." },
];

export const products = [
  { label: "Cloud Connect", href: "/cloud-connect", image: `${WP}/2025/02/cloud-connect-1-675x400.webp`, blurb: "Fiona CloudConnect simplifies management, enhances security, optimizes resources, and ensures seamless cloud operations." },
  { label: "Cloud Sphere", href: "/cloud-sphere", image: `${WP}/2025/02/CloudSphere-675x400.webp`, blurb: "Fiona CloudSphere delivers control, visibility, and optimization for seamless cloud management and integration." },
  { label: "SECAPI", href: "/secapi", image: `${WP}/2025/02/SECAPI-675x400.webp`, blurb: "FIONA SECAPI accelerates web performance, enhances security, and ensures seamless cloud integration." },
  { label: "Verifi AI", href: "/verifi-ai", image: `${WP}/2025/02/VerifiAI-1-675x400.webp`, blurb: "FIONA VerifiAI harnesses AI to streamline verification, improving accuracy, efficiency, and productivity in software and hardware testing." },
  { label: "Vox AI", href: "/vox-ai", image: `${WP}/2025/02/voxAI-675x400.webp`, blurb: "FIONA VoxAI converts text into lifelike speech, improving accessibility, engagement, and user experience across global industries." },
];

export const nav: NavItem[] = [
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services", children: services },
  { label: "Solutions", href: "#", children: products },
  { label: "Events", href: "/events" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact-us" },
];

export const employeeLogin = "https://mail.google.com/";

export const highlights = [
  { title: "Tailored Teams", text: "Expert technical teams that understand your needs and amplify your vision.", icon: `${WP}/2025/01/Tailored-Teams.png` },
  { title: "Adaptable Work Structures", text: "Onshore, nearshore, and offshore models ensure seamless collaboration for global success.", icon: `${WP}/2025/01/structure.png` },
  { title: "Reliable Ally", text: "Trusted US company with 10+ years of experience, 500+ employees & 60+ happy clients.", icon: `${WP}/2025/01/Reliable-Ally.png` },
  { title: "Extremely Affordable", text: "Delivering high-value software solutions at unmatched cost efficiency.", icon: `${WP}/2025/01/affordable.png` },
];

export const industries = [
  ["Ecommerce", "ecommerce"], ["Fintech", "fintech"], ["Technology", "technology"], ["Healthcare", "healthcare"],
  ["Automotive", "automotive"], ["Manufacturing", "manufacturing"], ["Education", "education"], ["Cryptocurrencies", "cryptocurrency"],
  ["Ad-Tech", "ad-Tech"], ["Entertainment & Media", "entertainment"], ["Energy", "energy"], ["Logistics", "logistics"],
].map(([label, file]) => ({ label, image: `${WP}/2025/02/${file}.webp` }));

export const features = [
  { title: "Advisory & Strategy", text: "Vendor-neutral solutions tailored to your data and analytics needs.", icon: `${WP}/2025/01/strategy.png` },
  { title: "DevOps", text: "Streamlined code delivery with lifecycle integrity.", icon: `${WP}/2025/01/devops.png` },
  { title: "Delivery", text: "Customized, scalable solutions from experienced consultants.", icon: `${WP}/2025/01/delivery.png` },
  { title: "Data Migration", text: "Secure transitions to cloud platforms like Azure, AWS, and GCP.", icon: `${WP}/2025/01/Data_Migration.png` },
  { title: "Managed Services", text: "Ongoing monitoring and tailored support for your business.", icon: `${WP}/2025/01/Managed_Services.png` },
  { title: "Data Integration", text: "Seamless, metadata-driven data integration solutions.", icon: `${WP}/2025/01/Data-Integration.png` },
  { title: "AI & Machine Learning", text: "Bespoke AI/ML solutions to maximize data value.", icon: `${WP}/2025/01/AI_Machine_Learning.png` },
  { title: "Data Visualization", text: "Actionable insights with proven techniques and dashboards.", icon: `${WP}/2025/01/data-visualization.png` },
  { title: "Data Platforming", text: "Fast, reliable end-to-end data platform design and build.", icon: `${WP}/2025/01/Data_Platforming.png` },
  { title: "Industry 4.0", text: "Transform processes with automation & Industry 4.0 solutions.", icon: `${WP}/2025/01/industry-40.png` },
];

export const workingModels = [
  { title: "Fixed Price Project", text: "We give time assesses and allot gifted assets to work with you on your undertaking, on a lot fixed-valuable premise.", icon: `${WP}/2025/02/Fixed-Price-Project.webp` },
  { title: "Hosted Team Extension", text: "You can improve the operational effectiveness of your venture by adding our gifted experts to work distantly with your group.", icon: `${WP}/2025/02/Hosted-Team-Extension.webp` },
  { title: "Dedicated Team Model", text: "We give a devoted group of architects, engineers, project chief and QA for an expected time (least 3 months) to finish your venture.", icon: `${WP}/2025/02/Dedicated-Team-Model.webp` },
];

export const strategicTabs = [
  { tab: "Strategic Projects", kicker: "@Fiona Strategic Projects", title: "Need Specialized Expertise For A Critical Initiative", image: `${WP}/2025/01/strategic-projects-1024x841.webp`, text: "We give particular aptitude or low maintenance backing to assist you with executing interior activities and vital activities. From year-end answering, to SOX consistence and frameworks reconciliation, we uphold customers to accomplish their short-and long haul business destinations." },
  { tab: "Business Advisory", kicker: "@Fiona Business Advisory", title: "Experiencing Growing Pains", image: `${WP}/2025/02/Business-Advisory-1024x934.webp`, text: "We work with you to support critical decision-making that supports and accelerates growth. From M&A support and IT cloud strategy, to enterprise risk management and business realignment, our team is dedicated to helping you achieve the best outcomes." },
  { tab: "Interim Professionals", kicker: "@Fiona Interim Professionals", title: "Need To Fill A Resource Gap On Your Team", image: `${WP}/2025/01/Interim-Professionals.webp`, text: "Our on-request account, IT and consistence experts connect asset holes for an assortment of circumstances, for example, a startling acquiescence, clinical leave, review arrangement or framework execution. Our methodology is to enhance each commitment, not simply a warm body." },
  { tab: "Fiona Professional Search", kicker: "@Fiona Professional Search", title: "Need To Build Out Your Team?", image: `${WP}/2025/01/Professional-Search.webp`, text: "We work with you to support critical decision-making that supports and accelerates growth. From M&A support and IT cloud strategy, to enterprise risk management and business realignment, our team is dedicated to helping you achieve the best outcomes." },
];

export const trainings = [
  "Software Development & Agile Methodologies",
  "Cloud Computing & DevOps",
  "AI & Machine Learning For Business",
  "Cybersecurity Awareness Training",
  "Data Privacy & Compliance",
  "Zero Trust & Network Security",
];

export const pillarIcons = [`${WP}/2025/02/the-company.webp`, `${WP}/2025/02/we-offer-solutions.webp`, `${WP}/2025/02/we-offer-services.webp`, `${WP}/2025/02/Why-Choose-Fiona.webp`];

export const pillars = [
  { title: "Who We Are", text: "With over 10+ years of expertise, Fiona has established itself as a leader in IT solutions and consultancy." },
  { title: "What We Do", text: "From web and mobile applications to advanced IoT solutions, we transform your vision into reality with cutting-edge technology." },
  { title: "What We Offer", text: "Industry-specific solutions, including CRM, MIS, E-Commerce, and Workflow Systems, streamline operations and drive growth." },
  { title: "Why Fiona", text: "We combine expertise with affordability, offering innovative, tailor-made solutions that perfectly align with your business needs." },
];

export const contact = {
  address: "12425 WEST AIRPORT BLVD, SUITE 203, SUGARLAND, TEXAS - 77478",
  email: "info@fionasolutions.com",
  phones: ["+1 346 521 8355", "+91 99514 70123"],
  instagram: "https://www.instagram.com/fionasolutions/",
  facebook: "https://www.facebook.com/people/Fiona-Solutions/61556810514228/",
  linkedin: "https://in.linkedin.com/company/fiona-solutions",
};

export const images = {
  logo: `${WP}/2025/01/FionaLogo-white.webp`,
  logoAllWhite: `${WP}/2025/01/Fiona-white-Logo.png`, // used on the blue sticky header
  heroBg: `${WP}/2025/02/services-home.webp`,
  heroVideo: `${WP}/2025/02/technology.mp4`,
  story: `${WP}/2025/01/sec1.png`,
  featuresBg: `${WP}/2025/03/bg2.webp`,
  training: `${WP}/2025/01/upskill.webp`,
  company: `${WP}/2025/02/the-company.webp`,
  footerBg: `${WP}/2025/01/Footerbg.webp`,
  footerLogo: `${WP}/2025/01/Fiona-Logo.png`,
  vision: `${WP}/2025/01/Vision.webp`,
  blobGradient: `${WP}/2020/06/bg-blob-gradient.svg`,
  blobGrad: `${WP}/2020/06/blob-grad.svg`,
  decoCircle: `${WP}/2025/03/Asset-25.png`,
  decoSpring: `${WP}/2025/03/Asset-24.png`,
  decoTriangle: `${WP}/2025/03/Asset-1.png`,
};
