// Content for the five product pages (copied verbatim from the live WordPress site, typos included).
// Rendered by src/components/product/ProductPage.tsx.
import { WP } from "@/lib/site";

export type Icon = { icon: string; w: number; h: number };
export type Highlight = Icon & { title: string; text: string; /** CSS padding of the content box, overrides highlightPad */ pad?: string };
export type Feature = Icon & { title: string; text: string; minH?: number; /** alpha of the hover shadow, default 0.1 */ hoverAlpha?: number; /** CSS padding override of the card */ pad?: string; /** description font size (px), default 15 */ textSize?: number };

export type Features = {
  variant: "cards" | "list" | "pills";
  kicker: string;
  title: string;
  text: string;
  /** lg grid-template-columns for [left cards, image, right cards] */
  cols: string;
  /** CSS padding-inline of the card grid inside the 1280px container (lg+) */
  inset?: string;
  gap?: number;
  padTop?: number;
  /** space under the icon in "cards" variant (px) */
  iconGap?: number;
  bg?: string;
  /** spread of the cards' hover shadow (px), default 10 */
  hoverSpread?: number;
  /** lg: margin above the right / left column (px; the columns are centred, so it moves them by half) */
  rightOffset?: number;
  leftOffset?: number;
  /** lg: align the illustration to the start of its column */
  imageStart?: boolean;
  image: string;
  imageW: number;
  imageH: number;
  left: Feature[];
  right: Feature[];
};

/** Mobile (< 768px) layout values measured on the live site at 390px; [font-size, line-height] pairs in px. */
export type Mobile = {
  /** side padding of the hero content (px), default 10 */
  heroPx?: number;
  heroText: [number, number];
  /** gap hero bottom -> first highlight card, last card -> intro kicker (px) */
  hlTop: number;
  hlBottom: number;
  /** side padding of the highlight cards (px), default 20 */
  hlPx?: number;
  /** side padding of the intro section (px), default 20 */
  introPx?: number;
  introKicker?: [number, number];
  /** [font-size, line-height, paragraph gap] */
  introText: [number, number, number];
  /** gap last paragraph -> "Get Started" (px), default paragraph gap + 20 */
  introBtnMt?: number;
  /** max width of the intro illustration (px) */
  introImgW?: number;
  /** features section: top / bottom padding, kicker, gap text -> first card, card inset (from the 10px section padding) */
  featPt?: number;
  featPb?: number;
  featKicker?: [number, number];
  /** gap feature title -> text (px), default 5 */
  featTitleMb?: number;
  featCardsMt: number;
  featCardPx?: number;
  /** extra right inset of the right-hand cards (px) */
  featRightPr?: number;
  /** illustration bleeds to the screen edges */
  featImgFull?: boolean;
  advKicker?: [number, number];
  advTitleLh?: number;
  /** [font-size, line-height, paragraph margin-bottom] */
  advText?: [number, number, number];
  advCardText?: [number, number];
  /** per-card line-height overrides of the advantage card text, by index (px) */
  advCardLh?: Record<number, number>;
  /** gap illustration -> first advantage card (px) */
  advImgGap: number;
};

export type Product = {
  slug: string;
  metaTitle: string;
  hero: {
    title: string;
    subtitle: string;
    text: string;
    /** right padding of the description (px, md+) */
    textPr: number;
    button: boolean;
    video: string;
    poster: string;
    padY: number;
  };
  highlightsBg: string;
  /** padding of the highlight card itself (px), default 18 */
  highlightCardPad?: number;
  /** padding of the inner hover-ring box (px), default 2 */
  highlightRingPad?: number;
  /** extra inner padding of the highlight cards' content (px) */
  highlightPad?: number;
  highlights: Highlight[];
  intro: {
    kicker: string;
    title: string;
    titleLineHeight: number;
    lineHeight?: string;
    /** space between paragraphs (px), default 15 */
    paraGap?: number;
    paragraphs: string[];
    /** lg grid-template-columns for [text, image] */
    cols: string;
    textPadRight?: number;
    /** lg: space right of the (right-aligned) illustration (px) */
    imageMr?: number;
    image: string;
    imageW: number;
    imageH: number;
  };
  features: Features;
  mobile: Mobile;
};

const U = `${WP}/2025/02`;

// The "Top Features" cards on SECAPI and Verifi AI reuse the Cloud Connect copy on the live site.
const ccFeatureText = {
  seamless: "Fiona CloudConnect ensures seamless integration, adaptability, & unified management across clouds.",
  performance: "Fiona CloudConnect enhances performance with intelligent load balancing and real-time monitoring.",
  dashboards: "Fiona CloudConnect’s customizable dashboard enhances efficiency by prioritizing relevant tools and information.",
  security: "Fiona CloudConnect ensures security with advanced threat detection and encryption, protecting data.",
  friendly: "Fiona CloudConnect’s intuitive design simplifies navigation, enhancing productivity for all users.",
  intuitive: "Fiona CloudConnect offers an intuitive user experience, simplifying navigation and productivity.",
};
const topFeatures = {
  kicker: "Fiona Features",
  title: "Top Features Highlighted",
  text: "Unified cloud orchestration across diverse environments. Manage VMs, containers, and more from a single, centralized dashboard for streamlined efficiency.",
};

export const productPages: Record<string, Product> = {
  "cloud-connect": {
    slug: "cloud-connect",
    metaTitle: "Cloud Connect - Fiona Solutions",
    hero: {
      title: "Cloud Connect",
      subtitle: "Seamless Cloud Integration With Fiona Solutions",
      text: "Fiona Solutions provides seamless cloud integration services, ensuring secure and efficient data connectivity. Empower your business with scalable and reliable cloud solutions.",
      textPr: 130,
      button: true,
      video: `${U}/cloud-connect.mp4`,
      poster: `${U}/cloud-connect-1.webp`,
      padY: 250,
    },
    highlightsBg: `${WP}/2020/06/bg-blob-gradient.svg`,
    highlights: [
      { title: "Enhanced Cloud Performance", text: "Fiona CloudConnect boosts web performance with smart load balancing for reliability.", icon: `${U}/Cloud-Performance.png`, w: 64, h: 67 },
      { title: "Robust Security Solutions", text: "The platform ensures cloud security with robust threat detection and data encryption.", icon: `${U}/Security-Solutions.png`, w: 64, h: 63 },
      { title: "Scalability And Flexibility", text: "Fiona CloudConnect scales effortlessly to meet growing business demands and traffic.", icon: `${U}/Scalability-and-Flexibility.png`, w: 77, h: 61 },
      { title: "Reliability And Trust", text: "Fiona CloudConnect, trusted by organizations, offers advanced technology and reliability.", icon: `${U}/Reliability-and-Trust.png`, w: 64, h: 63 },
    ],
    intro: {
      kicker: "Fiona Cloud Connect",
      title: "Simplify Your Cloud Strategy",
      titleLineHeight: 60,
      paragraphs: [
        "Fiona CloudConnect simplifies cloud management, giving you complete control and visibility. This powerful platform integrates seamlessly with your cloud infrastructure, providing a comprehensive suite of tools to manage, monitor, and optimize resources. Its intuitive interface makes complex cloud operations easy for everyone, from beginners to experts. With advanced technology like proactive threat detection and intelligent load balancing, Fiona CloudConnect ensures your cloud environment is resilient, responsive, and helps you achieve your business goals.",
      ],
      cols: "614px 1fr",
      image: `${U}/Cloud-Strategy.webp`,
      imageW: 639,
      imageH: 542,
    },
    features: {
      variant: "cards",
      ...topFeatures,
      cols: "280px 1fr 280px",
      inset: "20px",
      image: `${U}/Technology-Features-918x1024.webp`,
      imageW: 600,
      imageH: 670,
      left: [
        { title: "Seamless Integration", text: ccFeatureText.seamless, icon: `${U}/Seamless-Integration.png`, w: 52, h: 52 },
        { title: "Performance Optimization", text: ccFeatureText.performance, icon: `${U}/Performance-Optimization.png`, w: 52, h: 52 },
        { title: "Personalized Dashboards", text: ccFeatureText.dashboards, icon: `${U}/Personalized-Dashboards.png`, w: 52, h: 43 },
      ],
      right: [
        { title: "Advanced Security", text: ccFeatureText.security, icon: `${U}/Advanced-Security.png`, w: 51, h: 56, pad: "20px 15px 20px 10px" },
        { title: "User-Friendly Interface", text: ccFeatureText.friendly, icon: `${U}/User-Friendly-Interface.png`, w: 52, h: 68 },
        { title: "Intuitive User Experience", text: ccFeatureText.intuitive, icon: `${U}/Intuitive-User-Experience.png`, w: 52, h: 55 },
      ],
    },
    mobile: {
      heroText: [14, 22],
      hlTop: 25,
      hlBottom: 74,
      introKicker: [22, 28.6],
      introText: [14, 26, 14],
      featKicker: [22, 28.6],
      featCardsMt: 13,
      featCardPx: 10,
      featImgFull: true,
      advKicker: [18, 23.4],
      advText: [14, 26, 14],
      advImgGap: 15,
    },
  },

  "cloud-sphere": {
    slug: "cloud-sphere",
    metaTitle: "Cloud Sphere - Fiona Solutions",
    hero: {
      title: "Fiona CloudSphere",
      subtitle: "Reflecting The Comprehensive Control Over Cloud Environments",
      text: "Ensuring complete control over cloud environments with robust security and management features. Fiona CloudSphere empowers businesses with encryption, access controls, and compliance support.",
      textPr: 0,
      button: false,
      video: `${WP}/2025/03/cloudShpere.mp4`,
      poster: `${U}/Cloud-Enablement.webp`,
      padY: 240,
    },
    highlightsBg: `${WP}/2020/06/blob-grad.svg`,
    highlightPad: 5,
    highlights: [
      { title: "User-Friendly Interface", text: "Fiona CloudSphere offers a simple, user-friendly, and efficient cloud management platform.<br><br>", icon: `${U}/User-Friendly-Interface-1.png`, w: 51, h: 75 },
      { title: "Enhanced Operational Efficiency", text: "Fiona CloudSphere simplifies cloud management with automation, control, & monitoring.", icon: `${U}/Enhanced-Operational-Efficiency.png`, w: 70, h: 75, pad: "5px 3px" },
      { title: "Robust Security Measures", text: "Security, cloud, encryption, protection, permissions, controls, trusted, breaches, standards, reputation.", icon: `${U}/Robust-Security-Measures.png`, w: 71, h: 71 },
      { title: "Cost-Effective Management", text: "Costs, budgeting, analytics, tracking, savings, scaling, resources, spending, efficiency, optimization.", icon: `${U}/Cost-Effective-Management.png`, w: 64, h: 72 },
    ],
    intro: {
      kicker: "Fiona Cloud Environment",
      title: "Ultimate Solution For Cloud Management",
      titleLineHeight: 40,
      paragraphs: [
        "<strong>Fiona CloudSphere</strong> is a premier solution in the realm of cloud management, engineered to provide unmatched control and comprehensive oversight over your cloud environments. This state-of-the-art platform seamlessly integrates with many cloud infrastructures, delivering a holistic suite of tools designed to precisely manage, monitor, and optimize your cloud resources.",
        "Fiona CloudSphere is built to demystify complex cloud operations, offering a user-centric interface that harmonizes advanced functionalities with ease of use. Whether you are a novice or a seasoned IT professional, Fiona CloudSphere caters to all, ensuring seamless navigation and efficient management of cloud environments.",
        "With its proactive threat detection and intelligent load balancing, <strong>Fiona CloudSphere</strong> ensures that your cloud infrastructure remains resilient and responsive to real-time demands. By incorporating cutting-edge technology and",
      ],
      cols: "614px 1fr",
      image: `${U}/Cloud-Management.webp`,
      imageW: 639,
      imageH: 541,
    },
    features: {
      variant: "list",
      kicker: "Fiona CloudSphere Features",
      title: "Unified Orchestration Interface",
      text: "Fiona CloudSphere offers a sophisticated orchestration platform that integrates seamlessly with various cloud environments. The centralized dashboard provides a cohesive view, allowing for efficient management of diverse cloud resources, from virtual machines to containers, all within a single pane of glass.",
      cols: "422.59px 1fr 442.11px",
      inset: "0 24.3px",
      gap: 30,
      imageStart: true,
      rightOffset: 15,
      image: `${U}/cloudspherefeatures-807x1024.webp`,
      imageW: 321,
      imageH: 407,
      left: [
        { title: "Rapid Provisioning And Deployment", text: "Advanced automation enables fast cloud resource provisioning, ensuring efficient deployment and minimizing downtime.", icon: `${U}/Rapid-Provisioning-and-Deployment.png`, w: 53.05, h: 41, textSize: 14 },
        { title: "Elastic Resource Scaling", text: "Elastic scaling adapts to real-time demand, optimizing performance and costs by automatically adjusting resources.", icon: `${U}/Elastic-Resource-Scaling.png`, w: 53.05, h: 53 },
        { title: "Granular Performance Analytics", text: "Real-time analytics track CPU, memory, and network usage, enabling proactive cloud optimization and peak performance.", icon: `${U}/Performance-Analytics.png`, w: 53.05, h: 59 },
        { title: "Robust Security Framework", text: "Security is ensured with MFA, AES encryption, and access controls, safeguarding data from cyber threats and breaches.", icon: `${U}/Security-Framework.png`, w: 53.05, h: 53 },
      ],
      right: [
        { title: "Cost Optimization Tools", text: "State-of-the-art cost management and optimization tools allow users to track expenditure, find savings, and maximize ROI.", icon: `${U}/Cost-Optimization-Tools.png`, w: 55.74, h: 58 },
        { title: "Integrated Backup & Disaster Recovery", text: "The platform ensures data security with automated backups and rapid recovery, safeguarding business continuity against disruptions.", icon: `${U}/Integrated-Backup.png`, w: 55.74, h: 58 },
        { title: "Expert Software Development", text: "Advanced role-based access control defines and manages user roles, ensuring secure collaboration and cloud environment integrity.", icon: `${U}/Software-Development.png`, w: 55.74, h: 56 },
      ],
    },
    mobile: {
      heroText: [14.592, 25],
      hlTop: 40,
      hlBottom: 74,
      introPx: 10,
      introText: [14, 26, 14],
      featPt: 100,
      featCardsMt: 30,
      advCardText: [14, 22],
      advCardLh: { 3: 24 },
      advImgGap: 14,
    },
  },

  secapi: {
    slug: "secapi",
    metaTitle: "SECAPI - Fiona Solutions",
    hero: {
      title: "FIONA SECAPI",
      subtitle: "Seamless Cloud Integration With Fiona Solutions",
      text: "Fiona Solutions provides seamless cloud integration services, ensuring secure and efficient data connectivity. Empower your business with scalable and reliable cloud solutions.",
      textPr: 130,
      button: true,
      video: `${U}/secapi.mp4`,
      poster: `${U}/Cloud-API-Security-Threats.webp`,
      padY: 240,
    },
    highlightsBg: `${WP}/2020/06/blob-grad.svg`,
    highlightPad: 5,
    highlights: [
      { title: "Enhanced Performance", text: "Optimizes API responses, reduces latency, and improves load times efficiently.", icon: `${U}/Enhanced-Performance.png`, w: 74, h: 74 },
      { title: "Robust Security", text: "Protects applications with encryption, multi-factor authentication, & access controls.", icon: `${U}/Robust-Security.png`, w: 66, h: 76 },
      { title: "Operational Agility", text: "Automates scaling, streamlines management, minimizes errors, & boosts productivity effectively.", icon: `${U}/Operational-Agility.png`, w: 87, h: 74 },
      { title: "Cost-Efficiency", text: "Offers cloud spending insights, optimizes budgets, and maximizes return on investment.", icon: `${U}/Cost-Efficiency.png`, w: 74, h: 74 },
    ],
    intro: {
      kicker: "Fion SECAPI",
      title: "Advanced Web Acceleration & Security",
      titleLineHeight: 40,
      paragraphs: [
        "FIONA SECAPI is a powerful web acceleration platform designed for modern cloud environments. It enhances web performance, strengthens security, and seamlessly integrates with major cloud platforms. With proactive threat detection and intelligent load balancing, it ensures optimal speed, reliability, and protection against cyber threats.",
        "Beyond performance and security, FIONA SECAPI offers unmatched flexibility and scalability, making it ideal for businesses aiming to grow and innovate. Its user-friendly interface and in-depth analytics empower IT teams with actionable insights, enabling efficient operations and confident decision-making.",
      ],
      cols: "730px 1fr",
      textPadRight: 20,
      imageMr: 16,
      image: `${U}/Advanced-Web-Acceleration-Security.webp`,
      imageW: 512,
      imageH: 452,
    },
    features: {
      variant: "cards",
      ...topFeatures,
      cols: "382px 1fr 394px",
      iconGap: 10,
      inset: "20px",
      image: `${U}/secapi-features.webp`,
      imageW: 382,
      imageH: 574,
      left: [
        { title: "Seamless Integration", text: ccFeatureText.seamless, icon: `${U}/Seamless-Integration-1.webp`, w: 58, h: 58, pad: "15px 10px 20px" },
        { title: "Performance Optimization", text: ccFeatureText.performance, icon: `${U}/Performance-Optimization-1.webp`, w: 58, h: 58 },
        { title: "Personalized Dashboards", text: ccFeatureText.dashboards, icon: `${U}/Personalized-Dashboards-1.webp`, w: 58, h: 58 },
      ],
      right: [
        { title: "User-Friendly Interface", text: ccFeatureText.friendly, icon: `${U}/User-Friendly-Interface-1.webp`, w: 60, h: 60 },
        { title: "Intuitive User Experience", text: ccFeatureText.intuitive, icon: `${U}/Intuitive-User-Experience.webp`, w: 60, h: 60 },
      ],
    },
    mobile: {
      heroText: [14.592, 25],
      hlTop: 30,
      hlBottom: 139,
      hlPx: 24,
      introText: [14, 26, 14],
      introImgW: 340,
      featCardsMt: 31,
      featRightPr: 20,
      advImgGap: 26,
    },
  },

  "verifi-ai": {
    slug: "verifi-ai",
    metaTitle: "Verifi AI - Fiona Solutions",
    hero: {
      title: "FIONA VerifiAI",
      subtitle: "Testing With FIONA VerifiAI’s Advanced AI Solutions",
      text: "<strong>FIONA VerifiAI</strong> leverages advanced AI to streamline verification, enhancing accuracy, efficiency, and productivity in software and hardware testing.",
      textPr: 46,
      button: true,
      video: `${U}/Verifi-AI.mp4`,
      poster: `${U}/VerifiAI-Fiona.webp`,
      padY: 240,
    },
    highlightsBg: `${WP}/2020/06/blob-grad.svg`,
    highlights: [
      { title: "Innovation & Efficiency", text: "Automates verification tasks, enhancing quality and accelerating project timelines.", icon: `${U}/Innovation-Efficiency.webp`, w: 80, h: 80 },
      { title: "Faster Testing & Debugging", text: "Reduces testing cycles, speeding up product development and market release.", icon: `${U}/Faster-Testing.webp`, w: 80, h: 80 },
      { title: "Scalability & Usability", text: "Adapts to growing needs while ensuring a user-friendly experience.", icon: `${U}/Scalability-Usability.webp`, w: 80, h: 80 },
      { title: "Cost-Effective & Secure", text: "Cuts manual testing costs while protecting data with advanced security measures.", icon: `${U}/cost-effective-secure.webp`, w: 80, h: 80 },
    ],
    intro: {
      kicker: "Fiona VerifiAI",
      title: "Transforming Testing With VerifiAI",
      titleLineHeight: 46,
      lineHeight: "24px",
      paraGap: 24,
      paragraphs: [
        "<span style=\"font-size:16px\">FIONA VerifiAI redefines testing by integrating advanced artificial intelligence to streamline verification tasks for both software and hardware. This powerful platform accelerates the testing process by identifying and resolving issues with high precision, significantly enhancing efficiency and productivity. Businesses can rely on its AI-driven automation to optimize workflows, reduce errors, and ensure superior quality in their final products.</span>",
        "Built with user experience in mind, FIONA VerifiAI offers an intuitive interface and customizable features, making it accessible to both beginners and experts. Its seamless adaptability allows organizations to tailor verification processes to their specific needs, reducing the learning curve while maximizing operational efficiency. With smart automation, proactive issue detection, and smooth integration, FIONA VerifiAI empowers businesses to improve reliability and optimize their testing procedures.",
      ],
      cols: "676px 1fr",
      textPadRight: 52,
      imageMr: 6,
      image: `${U}/Verifi-Ai.webp`,
      imageW: 573,
      imageH: 591,
    },
    features: {
      variant: "cards",
      ...topFeatures,
      cols: "344px 1fr 344px",
      inset: "20px",
      padTop: 50,
      image: `${U}/Verifi-Ai-features.webp`,
      imageW: 472,
      imageH: 590,
      left: [
        { title: "Seamless Integration", text: ccFeatureText.seamless, icon: `${U}/Seamless-Integration.webp`, w: 65, h: 65 },
        { title: "Performance Optimization", text: ccFeatureText.performance, icon: `${U}/Performance-Optimization.webp`, w: 65, h: 65 },
        { title: "Personalized Dashboards", text: ccFeatureText.dashboards, icon: `${U}/Personalized-Dashboards.webp`, w: 65, h: 65 },
      ],
      right: [
        { title: "Advanced Security", text: ccFeatureText.security, icon: `${U}/Advanced-Security.webp`, w: 64, h: 70, pad: "20px 15px 20px 10px" },
        { title: "User-Friendly Interface", text: ccFeatureText.friendly, icon: `${U}/User-Friendly-Interface.webp`, w: 65, h: 69 },
        { title: "Intuitive User Experience", text: ccFeatureText.intuitive, icon: `${U}/User-Experience.webp`, w: 58, h: 82 },
      ],
    },
    mobile: {
      heroPx: 0,
      heroText: [14, 25],
      hlTop: 40,
      hlBottom: 69,
      introKicker: [22, 28.6],
      introText: [14, 24, 24],
      introBtnMt: 34,
      introImgW: 347,
      featKicker: [22, 28.6],
      featCardsMt: 29,
      featCardPx: 20,
      featPb: 30,
      advText: [14, 26, 14],
      advImgGap: 30,
    },
  },

  "vox-ai": {
    slug: "vox-ai",
    metaTitle: "Vox AI - Fiona Solutions",
    hero: {
      title: "FIONA VoxAI",
      subtitle: "Communication With AI-Driven Voice Technology",
      text: "FIONA VoxAI transforms written content into natural, engaging speech, enhancing accessibility and user experience across industries globally.",
      textPr: 69,
      button: true,
      video: `${U}/Vox-AI.mp4`,
      poster: `${U}/voxAI.webp`,
      padY: 240,
    },
    highlightsBg: `${WP}/2020/06/blob-grad.svg`,
    highlightCardPad: 20,
    highlightRingPad: 0,
    highlightPad: 5,
    highlights: [
      { title: "Digital Accessibility", text: "Converts text to speech, enhancing inclusivity for users with diverse needs.", icon: `${U}/Digital-accessibility.png`, w: 77, h: 74 },
      { title: "Scalability And Integration", text: "Easily integrates and expands with growing business requirements and infrastructures.", icon: `${U}/Scalability-and-Integration.png`, w: 77, h: 77 },
      { title: "User-Centric Flexibility", text: "Customizable features ensure seamless adaptation to various user preferences and needs.", icon: `${U}/User-Centric-Flexibility.png`, w: 89, h: 76 },
      { title: "Robust Security Measures", text: "Advanced encryption ensures data protection and privacy.<br><br>", icon: `${U}/Robust-security-measures-1.png`, w: 89, h: 73 },
    ],
    intro: {
      kicker: "About FIONA VoxAI",
      title: "A New Era Of Communication",
      titleLineHeight: 60,
      paragraphs: [
        "FIONA VoxAI is a cutting-edge platform that merges voice technology with artificial intelligence to create an interactive and immersive digital experience. By converting text into natural, conversational speech, it enhances accessibility and engagement across various industries, from education to customer service. Its advanced AI-driven capabilities redefine communication, making digital interactions more dynamic and efficient.",
        "Powered by sophisticated AI algorithms, VoxAI generates highly realistic voice outputs that mimic human tone, rhythm, and emotion. This makes it an ideal solution for audiobooks, virtual learning, voice-assisted services, and more. With multilingual support, it bridges communication gaps, ensuring a seamless experience for users worldwide. Designed with user convenience in mind, VoxAI features an intuitive interface that allows effortless navigation, customization, and integration with existing systems, catering to both tech-savvy users and everyday individuals.",
      ],
      cols: "614px 1fr",
      image: `${U}/smart-ai-voice.webp`,
      imageW: 566,
      imageH: 574,
    },
    features: {
      variant: "pills",
      ...topFeatures,
      cols: "428px 1fr 428px",
      bg: `${WP}/2020/06/blob-grad.svg`,
      image: `${U}/vox-ai-features.webp`,
      imageW: 344,
      imageH: 352,
      left: [
        { title: "Advanced Security", text: "FIONA VoxAI converts text to lifelike speech, capturing nuances and supporting multiple languages globally.", icon: `${U}/Advanced-Security-1.png`, w: 48, h: 48 },
        { title: "Smart Voice Recognition", text: "The platform offers accurate transcription for notes, lectures, and meetings, ensuring meaningful contextual interactions.", icon: `${U}/Smart-Voice-Recognition.png`, w: 46, h: 44 },
        { title: "Customizable Interface", text: "FIONA VoxAI offers voice customization (pitch, speed, language) for a personalized experience, with intuitive navigation for all users.", icon: `${U}/Customizable-Interface.png`, w: 48, h: 49 },
      ],
      right: [
        { title: "Multilingual Capabilities", text: "FIONA VoxAI converts text to speech in multiple languages, ensuring global accessibility and inclusivity.", icon: `${U}/Multilingual-Capabilities.png`, w: 51, h: 40 },
        { title: "Context Awareness", text: "FIONA VoxAI understands context, enabling meaningful interactions, accurate responses, and enhanced user experience.", icon: `${U}/Context-Awareness.png`, w: 46, h: 51 },
        { title: "User-Friendly Navigation", text: "FIONA VoxAI features an intuitive interface with easy navigation, controls, and customization for a seamless user experience.", icon: `${U}/User-Friendly-Navigation.png`, w: 48, h: 40 },
      ],
    },
    mobile: {
      heroText: [14.592, 25],
      hlTop: 30,
      hlBottom: 60,
      introText: [15, 27.86, 15],
      featTitleMb: 20,
      featCardsMt: 31,
      featPb: 30,
      advTitleLh: 35,
      advText: [14, 26, 14],
      advImgGap: 0,
    },
  },
};

// "The Fiona Solutions Advantage" — the same on every product page.
export const advantage = {
  kicker: "The Fiona Solutions Advantage",
  title: "Why Choose Fiona For Your UI/UX Design Needs?",
  text: "Success with technology requires expertise, guidance, and a dedicated partner who can navigate the complexities with confidence. That’s where Saritasa excels—helping businesses find the most effective path forward.",
  image: `${U}/UI-UX-Design-1.webp`,
  items: [
    { title: "Mutual Success", text: "We believe in creating value for everyone—our clients, our team, and the users we design for. Our goal is to achieve the perfect balance of success that benefits all." },
    { title: "Problem Solvers At Heart", text: "Our team of skilled developers, designers, and engineers thrives on solving complex business challenges. We apply technology with purpose, ensuring innovative, effective solutions." },
    { title: "Partnerships Over Projects", text: "We don’t just complete projects—we build long-term relationships. Our focus is on delivering lasting value through trust, collaboration, and continuous improvement." },
    { title: "Your Project, Your Ownership", text: "When we build it, you own it. No hidden fees, no strings attached. Once development is complete, the full source code is yours—giving you complete control over your project’s future." },
    { title: "Trust Is Earned", text: "Long-term partnerships are built on trust, and we earn it through transparency, accountability, and unwavering reliability. Your success is our priority." },
  ],
};
