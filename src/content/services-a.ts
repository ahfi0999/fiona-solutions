// Content for six service pages, copied from the live site (typos included).
// Images and icons are loaded from the live WordPress uploads folder.
import { WP } from "@/lib/site";

export type Card = { title: string; text: string; icon?: string };

const u = (path: string) => `${WP}/${path}`;

/* ----------------------------- Shared blocks ----------------------------- */

export const trustedPartner = {
  kicker: "Fiona Solutions",
  title: "Your Trusted Software Development Partner",
  text: "Fiona Solutions is a reliable software development partner, delivering innovative and scalable solutions tailored to your business needs. We specialize in building high-quality applications to drive growth and efficiency.",
  image: u("2025/02/Software-Development-Partner.webp"),
  stats: [
    { value: "400+", label: "IT Pros", text: "Expert IT solutions for seamless business growth and innovation.", icon: u("2025/02/IT-Pros.webp") },
    { value: "200+", label: "Developers", text: "Building innovative, scalable, and efficient software solutions for businesses.", icon: u("2025/02/developers.webp") },
    { value: "60+", label: "Project Managers", text: "Leading teams, ensuring efficiency, and delivering successful projects.", icon: u("2025/02/Project-Managers.webp") },
    { value: "Certified", label: "Platform Experts", text: "Expert IT solutions for seamless business growth and innovation.", icon: u("2025/02/Platform-Experts.webp") },
  ],
};

export const blobGrad = u("2020/06/blob-grad.svg");
export const digitalBg = u("2025/02/Digital-Transformation-bg.webp");

/* -------------------------- Software Development -------------------------- */

export const softwareDevelopment = {
  hero: {
    kicker: "Fiona Services",
    title: "Software Development",
    text: "Get precisely what you need, exactly when you need it, with our custom software development services. Our team of 350+ expert developers creates solutions tailored to your business and workforce—going beyond generic software to deliver technology that truly works for you.",
    image: u("2025/02/Custom-Software-Development-2.webp"),
    video: u("2025/02/software-development2.mp4"),
    overlay: 0.6,
    pad: 250,
  },
  highlights: [
    { title: "Tailored Solutions", text: "We build software designed specifically for your business needs, ensuring a perfect fit for your workflows and objectives.", icon: u("2025/02/Tailored-Solutions.png"), w: 51, h: 51 },
    { title: "User-Centric Approach", text: "Our solutions are designed with your employees and business processes in mind, not just generic software users.", icon: u("2025/02/User-Centric-Approach.png"), w: 56, h: 50 },
    { title: "Scalability & Flexibility", text: "We create future-ready software that grows with your business, adapting to evolving needs and industry changes.", icon: u("2025/02/Scalability-Flexibility.png"), w: 51, h: 51 },
    { title: "Expert Team", text: "With 400+ skilled developers, we bring deep industry expertise and technical excellence to every project.", icon: u("2025/02/Expert-Team.png"), w: 66, h: 49 },
  ],
  why: {
    kicker: "Strategic Planning & Business Analysis",
    title: "Why Choose Custom Development?",
    text: "With a market flooded with off-the-shelf solutions, investing in custom software might seem like an extra step. However, businesses often find that tailored solutions provide unmatched flexibility, efficiency, and scalability.",
    panels: [
      { title: "Built for Your Unique Business", text: "Off-the-shelf software often falls short for large, complex, or innovative businesses. Custom solutions ensure a perfect fit without excessive costs in the long run.", image: u("2025/02/Built-for-Your-Unique-Business.webp") },
      { title: "Uncompromising Security", text: "Generic software may leave gaps in security. Our custom solutions provide ironclad protection, meeting strict compliance and safety standards.", image: u("2025/02/Uncompromising-Security.webp") },
      { title: "Technology That Adapts to You", text: "Off-the-shelf software often falls short for large, complex, or innovative businesses. Custom solutions ensure a perfect fit without excessive costs in the long run.", image: u("2025/02/Technology-That-Adapts-to-You.webp") },
      { title: "Integration with Legacy Systems", text: "Already invested in custom software? We ensure smooth integration, protecting your investment and maintaining system compatibility.", image: u("2025/02/Integration-with-Legacy-Systems.webp") },
    ],
  },
  help: {
    kicker: "Fiona Solutions",
    title: "How We Help",
    image: u("2025/02/how-we-help1.webp"),
    left: [
      { title: "Software consulting", text: "We blend expertise, client focus, and innovation to design user-centric solutions.", icon: u("2025/02/Software-consulting.webp") },
      { title: "Custom software development", text: "We create tailored software that delivers long-term business value and adaptability.", icon: u("2025/02/custom-software-development-1.webp") },
      { title: "Enterprise software development", text: "We build scalable enterprise solutions that accommodate growth and future extensions.", icon: u("2025/02/Enterprise-software-development.webp") },
      { title: "Software product development", text: "We develop resilient software products with great UX, delivering rapid releases.", icon: u("2025/02/Software-product-development.webp") },
    ],
    right: [
      { title: "Cloud application development", text: "We design secure cloud applications and facilitate seamless app migrations.", icon: u("2025/02/Cloud-application-development.webp") },
      { title: "Support and maintenance", text: "We ensure software relevancy through monitoring, optimization, issue resolution.", icon: u("2025/02/Support-and-maintenance-1.webp") },
      { title: "Legacy software modernization", text: "We upgrade your existing software for modern solutions with minimal business disruption.", icon: u("2025/02/Legacy-software-modernization-1.webp") },
    ],
  },
  advanced: {
    kicker: "Fiona Software Development",
    title: "Advanced Software Solutions for Business Efficiency",
    items: [
      { title: "Artificial intelligence", text: "Intelligent software that analyzes data to generate insights and automate action.", icon: u("2025/02/Artificial-intelligence.webp") },
      { title: "Data Science", text: "Software that detects complex patterns in data, learning to improve accuracy and predictions..", icon: u("2025/02/Data-Science.webp") },
      { title: "Big Data", text: "Scalable solutions designed to aggregate, process, and analyze vast amounts of high-velocity data.", icon: u("2025/02/Big-Data.webp") },
      { title: "Computer Vision", text: "Software that identifies patterns and classifies objects in digital images and video content.", icon: u("2025/02/Computer-Vision.webp") },
      { title: "Blockchain", text: "Decentralized software enabling peer-to-peer transactions & transparent data storage.", icon: u("2025/02/Blockchain.webp") },
      { title: "Internet of Things (IoT)", text: "Software that processes and extracts insights from data collected by devices.", icon: u("2025/02/Internet-of-Things.webp") },
      { title: "Augmented Reality (AR)", text: "Technology that overlays virtual objects onto real-world environments for enhanced experiences.", icon: u("2025/02/augmented-reality.webp") },
      { title: "Virtual Reality (VR)", text: "Immersive software that creates life like 3D environments with realistic visuals and acoustics.", icon: u("2025/02/Virtual-Reality.webp") },
    ],
  },
};

/* ------------------------ Web & Mobile Development ------------------------ */

export const webMobile = {
  hero: {
    title: "Web & Mobile Development",
    subtitle: "Custom, Scalable & High-Performance Web Solutions",
    image: u("2025/02/web-development-bg.webp"),
    video: u("2025/02/web-development.mp4"),
    overlay: 0.65,
    pad: 235,
  },
  highlights: [
    { title: "Website Design & Development", text: "Custom web applications designed for your business, ensuring performance & usability.", icon: u("2025/03/Website-Design-Development.png"), w: 51, h: 51 },
    { title: "Enterprise Web Portals", text: "Robust, secure enterprise web portals for seamless collaboration and workflow efficiency.", icon: u("2025/03/Enterprise-Web-Portals.png"), w: 66, h: 66 },
    { title: "Web App Development", text: "Innovative web app development for seamless functionality, scalability, and user experience.", icon: u("2025/03/Web-App-Development.png"), w: 56, h: 56 },
    { title: "Maintenance & Support", text: "Comprehensive maintenance and support services ensuring optimal performance and reliability.", icon: u("2025/03/Maintenance-Support.png"), w: 51, h: 51 },
  ],
  approach: {
    kicker: "Web Design Process",
    title: "Our Web Design & Development Approach",
    text: "Creating a website is a collaborative journey that starts with your vision and expertise. As the driving force behind your business, you bring invaluable insights that shape the foundation of your digital presence.",
    image: u("2025/03/web-development-approach.webp"),
    left: [
      { title: "Your Goals", text: "We understand your brand, goals, and needs to create a customized strategy that drives your website’s online success", icon: u("2025/03/Your-Goals.svg") },
      { title: "Creating a Plan", text: "Seamless VMware integrations ensure flexible, consistent data protection across VMs, containers, and application environments.", icon: u("2025/03/Create-a-Plan.svg") },
      { title: "Wireframes & Mockups", text: "Advanced backup and recovery solutions protect critical data from ransomware, cyber threats, and unexpected failures.", icon: u("2025/03/wireframes-and-mockups.svg") },
    ],
    right: [
      { title: "Web Development", text: "Innovative multi-cloud solutions safeguard your data across a diverse and expansive workload ecosystem.", icon: u("2025/03/Web-Development.svg") },
      { title: "Quality Assurance", text: "Seamless VMware integrations ensure flexible, consistent data protection across VMs, containers, and application environments.", icon: u("2025/03/Quality-Assurance.svg") },
      { title: "Website Launch", text: "Advanced backup and recovery solutions protect critical data from ransomware, cyber threats, and unexpected failures.", icon: u("2025/03/Website-Launching.svg") },
    ],
  },
  advantages: {
    title: "Advantages of Custom-Built Websites, Applications, and Software",
    text: "Custom-built websites, applications, and software provide tailored solutions that align with your business needs and goals. They offer greater flexibility, scalability, and seamless integration with existing systems. Enhance user experience, improve efficiency, and gain a competitive edge with personalized digital solutions.",
    items: [
      { title: "Tailored Functionality", text: "Designed to meet specific business needs, custom solutions address unique challenges, improving efficiency and overall effectiveness.", icon: u("2025/03/Tailored-Functionality.svg") },
      { title: "Brand Identity & Design", text: "Custom websites and apps showcase a brand’s unique identity, ensuring a professional, cohesive, and memorable digital presence.", icon: u("2025/03/Competitive-Advantage.svg") },
      { title: "Competitive Advantage", text: "Custom-built solutions differentiate businesses from competitors by offering unique, optimized functionality unavailable in standard software.", icon: u("2025/03/Cost-Efficiency.svg") },
      { title: "Cost Efficiency", text: "Though the initial investment may be higher, custom software reduces long-term costs by eliminating inefficiencies and unnecessary subscriptions.", icon: u("2025/03/Enhanced-User-Experience.svg") },
      { title: "Advanced Data Security", text: "Custom solutions implement tailored security measures, ensuring robust protection for businesses handling sensitive data.", icon: u("2025/03/Brand-Identity-Design.svg") },
      { title: "Scalable Growth", text: "Custom software evolves with business needs, allowing seamless feature expansion without the limitations of pre-packaged solutions.", icon: u("2025/03/Scalable-Growth.svg") },
      { title: "Enhanced User Experience", text: "Designed with users in mind, custom solutions provide an intuitive, engaging experience that boosts satisfaction and productivity.", icon: u("2025/03/Ongoing-Maintenance-Support.svg") },
      { title: "Ongoing Maintenance & Support", text: "Gain full control over updates and maintenance, keeping your software or website secure, functional, and up-to-date.", icon: u("2025/03/Advanced-Data-Security.svg") },
      { title: "Seamless Integrations & Analytics", text: "Integrate with CRM, ATS, Shopify, and analytics tools to streamline operations, improve insights, and drive continuous optimization.", icon: u("2025/03/Seamless-Integrations-Analytics.svg") },
    ],
  },
  expert: {
    kicker: "Web development",
    title: "Expert Web Design & Development Services",
    items: [
      { title: "Web App Integration Services", text: "We leverage the latest advancements in deployment, customization, and integration to ensure seamless software utilization tailored to your needs.", icon: u("2025/03/Web-App-Integration-Services.svg") },
      { title: "Mobile App Development Services", text: "Our experienced mobile app developers create smooth, responsive applications optimized for various devices, delivering a seamless user experience.", icon: u("2025/03/Mobile-App-Development-Services.svg") },
      { title: "Enterprise Web Design & Development", text: "We develop enterprise web applications using custom APIs and web services for CRM, digital marketing, inventory management, and streamlined workflows.", icon: u("2025/03/Enterprise-Web-Design-Development.svg") },
      { title: "Full-Stack Web Development Solutions", text: "Our full-stack developers specialize in Java, SQL, and cloud platforms, building scalable, high-performance applications with 12-factor methodology.", icon: u("2025/03/Full-Stack-Web-Development-Solutions.svg") },
      { title: "Web Portal Development", text: "With deep technical expertise & business insight, we create reliable, scalable web portals that optimize workflows and enhance business operations.", icon: u("2025/03/Animation-Graphics-Web-Design.svg") },
      { title: "Animation & Graphics Web Design", text: "Our award-winning designers craft visually stunning logos, branding materials, motion graphics, and infographics to bring your brand to life.", icon: u("2025/02/Customer-Experience.svg") },
      { title: "Ecommerce Development Solutions", text: "We build revenue-driven online stores using platforms like Magento, Shopify, and BigCommerce, helping businesses maximize sales and growth.", icon: u("2025/03/Ecommerce-Development-Solutions.svg") },
      { title: "Web Integration Services", text: "Our expert developers ensure smooth software integration across all platforms and devices for enhanced functionality and user experience.", icon: u("2025/03/Web-Integration-Services.svg") },
      { title: "CMS Integration", text: "We seamlessly integrate CMS solutions, allowing you to manage and update website content effortlessly without coding expertise.", icon: u("2025/03/CMS-Integration.svg") },
    ],
  },
};

/* ------------------------ Frontend UI/UX Development ---------------------- */

export const frontendUiUx = {
  hero: {
    title: "Frontend UI/UX Development",
    subtitle: "Crafting Intuitive and Engaging User Experiences",
    text: "Our UI/UX development services focus on creating visually appealing, user-centered designs that ensure seamless interactions and enhanced usability. We prioritize both form and function, delivering interfaces that are not only aesthetically pleasing but also intuitive, improving user satisfaction and engagement across all platforms.",
    image: u("2025/02/ui-ux-development.webp"),
    video: u("2025/02/ui-ux.mp4"),
    overlay: 0.6,
    pad: 235,
  },
  highlights: [
    { title: "Improved User Satisfaction", text: "Well-designed UI/UX enhances navigation, ensuring comfort and satisfaction for users.", icon: u("2025/03/Improved-User-Satisfaction.png"), w: 64, h: 64 },
    { title: "Increased Conversion Rates", text: "A user-friendly interface boosts engagement, increasing conversions and improving business outcomes.", icon: u("2025/03/Increased-Conversion-Rates.png"), w: 61, h: 61 },
    { title: "Enhanced Brand Perception", text: "High-quality UI/UX design enhances brand credibility, leaving a lasting positive impression.", icon: u("2025/03/Enhanced-Brand-Perception.png"), w: 61, h: 61 },
    { title: "Reduced Development Costs", text: "Investing in UI/UX early reduces revisions, saving time and resources.", icon: u("2025/03/Reduced-Development-Costs.png"), w: 61, h: 61 },
  ],
  dynamic: {
    kicker: "UI/UX Design Services",
    title: "Dynamic User Design Services for Smarter User Navigation",
    paragraphs: [
      "Creating a successful app requires a seamless blend of functionality and intuitive design, ensuring ease of use for every user. At Chetu, our UI/UX experts focus on designing web, desktop, and mobile apps that not only meet your specific business needs but also align with your product development goals. By understanding your industry and target audience, we deliver custom-tailored solutions that drive engagement and satisfaction.",
      "Our team is dedicated to crafting innovative digital experiences that address complex business challenges. Whether you’re building a new app or redesigning an existing one, we combine cutting-edge design techniques with a user-centric approach to create interfaces that are both visually appealing and highly functional. From intuitive navigation to seamless interactions, our goal is to help you create a product that stands out in the market while enhancing user experience.",
    ],
    image: u("2025/02/ui-ux-design.webp"),
    items: [
      { title: "Information Architecture Design", text: "Our developers design efficient content management systems, content models, and DITA, optimizing conversion rates and usability.", icon: u("2025/02/Information-Architecture-Design.svg") },
      { title: "User Experience (UX) Development", text: "We craft responsive GUIs with 2D/3D animations and media, ensuring seamless, engaging user interactions.", icon: u("2025/02/User-Experience.svg") },
      { title: "User Interface (UI) Development", text: "Our designers use OpenGL and WebGL to create visually cohesive, brand-aligned UI elements and layouts.", icon: u("2025/02/User-Interface.svg") },
      { title: "Web & Mobile App UI/UX Development", text: "Utilizing Xamarin, Ionic, and Cordova, we design responsive, mobile-first user interfaces for progressive web apps.", icon: u("2025/02/Web-Mobile-App.svg") },
      { title: "Front-End Programming", text: "Our specialists leverage HTML5, CSS, JavaScript, and frameworks like AngularJS to ensure cross-device compatibility.", icon: u("2025/02/Front-End-Programming.svg") },
      { title: "Intuitive & Interactive Solutions", text: "Using HIG and Material Design, we create goal-driven, intuitive interfaces that enhance user interactions.", icon: u("2025/02/Interactive-Solutions.svg") },
    ],
  },
  approach: {
    kicker: "Fiona Solutions",
    title: "Custom UX/UI Design & Development Approach",
    text: "Fiona Solutions is a reliable software development partner, delivering innovative and scalable solutions tailored to your business needs. We specialize in building high-quality applications to drive growth and efficiency.",
    items: [
      { title: "Discovery Process", text: "We analyze user needs, technical constraints, and business goals through interviews, audits, and task analysis.", icon: u("2025/02/Discovery-Process-675x400.webp") },
      { title: "User Research", text: "We create user profiles and journeys to understand behavior, ensuring an intuitive and engaging experience.", icon: u("2025/02/User-Research-675x400.webp") },
      { title: "UX Audit Process", text: "We optimize navigation and enhance conversions by making key actions and menu items easily accessible.", icon: u("2025/02/UX-Audit-Process-675x400.webp") },
      { title: "Gathering Requirements", text: "A detailed project requirement document keeps development aligned with business goals and user expectations.", icon: u("2025/02/Gathering-Requirements-675x400.webp") },
      { title: "Information Architecture/Wireframes", text: "We structure content & navigation for seamless interactions through clear wireframes & logical flows.", icon: u("2025/02/Information-Architecture-Wireframes-675x400.webp") },
      { title: "Visual Design Process", text: "Balancing aesthetics with usability, we design experiences that resonate with users and enhance engagement.", icon: u("2025/02/Visual-Design-Process-675x400.webp") },
      { title: "Prototype Creation", text: "Interactive prototypes help visualize and refine the product before final development, ensuring optimal functionality.", icon: u("2025/02/Prototype-Creation-675x400.webp") },
      { title: "UI/UX Testing", text: "Through A/B testing, analytics, and user feedback, we validate usability and refine the experience for success.", icon: u("2025/02/UI-UX-Testing-675x400.webp") },
    ],
  },
  services: {
    kicker: "Fiona Solutions",
    title: "UI/UX Design Services From Concept to Seamless Interfaces",
    text: "Our UI/UX design and development services ensure a visually appealing, intuitive experience that meets user needs while effectively conveying your brand’s message.",
    items: [
      { title: "Design innovation consulting", text: "We identify unmet user needs, analyze market trends, and transform low-converting designs into intuitive experiences.", icon: u("2025/03/Design-innovation-consulting.svg") },
      { title: "Wireframing", text: "We create conceptual wireframes that establish a strong visual foundation, ensuring seamless navigation and engagement.", icon: u("2025/03/wireframing.svg") },
      { title: "Prototyping", text: "Our interactive prototypes help visualize design concepts early, allowing for quick iterations and optimized usability.", icon: u("2025/03/prototyping.svg") },
      { title: "Usability testing", text: "We conduct in-depth usability testing to refine user interactions, identify pain points, and optimize UI/UX for seamless navigation.", icon: u("2025/03/Usability-testing.svg") },
      { title: "Frontend development", text: "We bridge business goals with user interactions by building seamless, user-friendly interfaces optimized for performance.", icon: u("2025/03/redesign-services.svg") },
      { title: "Redesign & modernization services", text: "Revamp outdated designs with cutting-edge technologies to enhance engagement and user experience.", icon: u("2025/02/Customer-Experience.svg") },
    ],
  },
};

/* -------------------------- Digital Transformation ------------------------ */

export const digitalTransformation = {
  hero: {
    title: "Digital Transformation",
    subtitle: "Empowering Your Business with Advanced Technology and Sustainable Innovation",
    text: "With 15 years of experience in IT, ScienceSoft helps businesses across 20+ industries modernize legacy systems, implement process automation, and achieve new growth through cutting-edge technology. We understand the importance of risk management in digital transformation, ensuring targeted, sustainable innovations in business-critical areas while maintaining strict budget control for successful, on-time delivery.",
    image: u("2025/02/Digital-Transformation.webp"),
    video: u("2025/02/digital-transformation.mp4"),
    overlay: 0.7,
    pad: 220,
  },
  highlights: [
    { title: "Legacy System Modernization", text: "Streamline operations by upgrading outdated systems with modern solutions.", icon: u("2025/02/legacy-system.png"), w: 51, h: 59 },
    { title: "Process Automation", text: "Improve efficiency and reduce errors through seamless automation integration.", icon: u("2025/02/Process-Automation.png"), w: 66, h: 66 },
    { title: "Risk Management", text: "Minimize risks with targeted innovations and strict budget control.", icon: u("2025/02/Risk-Management.png"), w: 56, h: 65 },
    { title: "Scalable Growth", text: "Achieve business growth by leveraging advanced, adaptable technologies for expansion.", icon: u("2025/02/Scalability-Flexibility.png"), w: 64, h: 64 },
  ],
  consulting: {
    kicker: "Fiona Digital Transformation",
    title: "Driving IT Success with Expert Transformation Consulting",
    text: "As an IT organization, you must innovate for the future while managing legacy systems and limited resources. Balancing progress with efficiency is more challenging than ever. AXIA offers a suite of consulting services to help you seamlessly transition from outdated technology to modern solutions. With practical, results-driven strategies, we meet you where you are in your IT transformation journey, ensuring a smooth and efficient evolution.",
    image: u("2025/02/Transformation-Consulting.webp"),
    items: [
      { title: "Software Selection", text: "Tailored recommendations based on your business needs, culture, and adaptability." },
      { title: "Agile Methodology", text: "Unlock Agile’s full potential with training, methods, and change management." },
      { title: "IT Program Office", text: "Build efficient structures that enhance progress without unnecessary overhead." },
      { title: "IT Governance", text: "Align IT investments with strategic goals, balancing innovation and cost." },
      { title: "IT Service Management", text: "Optimize operations with ServiceNow and reduce service management costs." },
      { title: "IT Strategic Sourcing", text: "Strengthen vendor relationships and reduce IT spending for long-term value." },
    ],
  },
  areas: {
    kicker: "Digital Transformation",
    title: "Driving Digital Transformation Across Key Business Areas",
    items: [
      { title: "Customer Experience", text: "We enhance digital engagement, creating seamless customer journeys to help businesses stand out and thrive.", icon: u("2025/02/Customer-Experience.svg") },
      { title: "Customer Service", text: "We provide fast, proactive digital customer support to build strong, lasting customer relationships and loyalty.", icon: u("2025/02/Customer-Service.svg") },
      { title: "Supply Chain", text: "We enhance and optimize supply chains for efficiency, agility, and risk control across all business operations.", icon: u("2025/02/Supply-Chain.svg") },
      { title: "Corporate Finance", text: "We digitalize up to 90% of finance-related tasks, improving efficiency, accuracy, and cost savings.", icon: u("2025/02/Corporate-Finance.svg") },
      { title: "Workforce Digitalization", text: "We equip employees with digital tools to enhance productivity and streamline workflows.", icon: u("2025/02/Workforce-Digitalization.svg") },
      { title: "Enterprise-Wide Transformation", text: "We take a strategic approach to optimize inefficiencies and maximize ROI across all business areas.", icon: u("2025/02/Enterprise-Wide-Transformation.svg") },
      { title: "Data Analytics & Business Intelligence", text: "Empowering tech businesses to innovate, scale, and thrive with cutting-edge solutions, strategic insights.", icon: u("2025/02/Data-Analytics-Business-Intelligence.svg") },
      { title: "IT Infrastructure Management", text: "Enhancing project efficiency, safety, and compliance across construction and engineering industries through innovative solutions and strategic implementation.", icon: u("2025/02/IT-Infrastructure-Management.svg") },
      { title: "Cybersecurity Management", text: "As IT ecosystems grow, we fortify security, mitigate cyber threats, and ensure comprehensive robust compliance with industry standards.", icon: u("2025/02/cyber-security.svg") },
    ],
  },
  innovative: {
    kicker: "Fiona Experts",
    title: "Innovative Solutions for Your Business",
    items: [
      { title: "Systems Integration", text: "We help integrate systems, applications, and data to streamline operations and improve data management.", icon: u("2025/02/Systems-Integration-675x400.webp") },
      { title: "Intelligent Automation", text: "We use AI, machine learning, and automation to optimize processes, increasing efficiency and productivity.", icon: u("2025/02/Intelligent-Automation-675x400.webp") },
      { title: "AI & Machine Learning", text: "Our AI solutions reduce costs & enhance data analysis, enabling smarter decision-making and streamlined processes.", icon: u("2025/02/AI-Machine-Learning-675x400.webp") },
      { title: "Cloud Migration Services", text: "We facilitate smooth cloud migrations, improving scalability, agility, security, and performance while reducing costs.", icon: u("2025/02/Cloud-Migration-Services-675x400.webp") },
      { title: "Mobile App Development", text: "We design custom mobile apps to boost productivity, enhance customer experience, and drive revenue growth.", icon: u("2025/02/Mobile-App-Development-675x400.webp") },
      { title: "Staff Augmentation", text: "We provide digital transformation experts to fill skill gaps, helping scale teams and accelerate project completion.", icon: u("2025/02/Staff-Augmentation--675x400.webp") },
    ],
  },
  teams: {
    kicker: "Fiona Digital Transformation",
    title: "Driving IT Success with Expert Transformation Consulting",
    text: "Fiona solutions specialized industry teams deliver the skills, intelligence, and efficiency needed to drive growth and value. With our innovative resources, we help you enhance operational flexibility.",
    items: [
      { title: "Industry-Specific Fiona Teams", text: "Our expert teams leverage decades of experience, staying ahead of trends and regulations to deliver tailored industry solutions.", icon: u("2025/02/Industry-Specific-Fiona-Teams.svg") },
      { title: "Comprehensive Support", text: "We provide technical and non-technical expertise, delivering customized solutions in customer service, HR, IT, and managed services.", icon: u("2025/02/Comprehensive-Support.svg") },
      { title: "Fiona Expert Consulting", text: "Our advisors offer expertise and strategy, guiding your digital transformation with technology, data, and industry knowledge for success.", icon: u("2025/02/Fiona-Expert-Consulting.svg") },
    ],
  },
};

/* --------------------------- Cloud Transformation ------------------------- */

export const cloudTransformation = {
  hero: {
    title: "Cloud Transformation",
    subtitle: "Maximize the Value of Your Cloud Investments!",
    text: "With over 12 years of expertise in cloud development and migration, ScienceSoft provides end-to-end cloud solutions. From crafting cloud adoption strategies and optimizing costs to building high-performance cloud-native applications, data warehouses, and seamlessly migrating legacy systems, we ensure a smooth and efficient cloud transformation.",
    image: u("2025/02/Cloud-Transformation.webp"),
    video: u("2025/02/cloud-transformation.mp4"),
    overlay: 0.6,
    pad: 240,
  },
  highlights: [
    { title: "Cloud Migration", text: "Evaluate your cloud readiness and seamlessly transition with our Cloudwave® digital accelerator.", icon: u("2025/03/Cloud-Migration.png"), w: 61, h: 61 },
    { title: "Cloud Native Development", text: "Build scalable solutions on public, private, or hybrid cloud platforms, or leverage Platform-as-a-Service.", icon: u("2025/03/Cloud-Native-Development.png"), w: 61, h: 61 },
    { title: "Cloud Architecture", text: "Optimize cloud performance with our AWS Well-Architected Review service.", icon: u("2025/03/Cloud-Architecture.png"), w: 61, h: 61 },
    { title: "Cloud Security", text: "Protect your cloud environment with robust security, compliance, and data integrity solutions.", icon: u("2025/03/Cloud-Security.png"), w: 61, h: 61 },
  ],
  power: {
    kicker: "Solutions",
    title: "Unlock the Power of Your Cloud Environment",
    text: "Optimize your cloud environment to drive automation, AI, and data-driven decision-making with scalable, secure, and efficient solutions, enhancing performance, innovation, and business growth.",
    image: u("2025/02/Power-of-Your-Cloud-Environment.webp"),
    items: [
      { title: "Automate, AI, and ML Integration with Cloud", text: "AI and ML are essential for achieving business success. Engage experts who specialize in applying these technologies to enhance your processes and meet your goals." },
      { title: "Enhanced Decision-Making through Data Visualization", text: "We accelerate your progress by offering tailored dashboards that present key data insights clearly and effectively, empowering your team to make informed, data-driven decisions." },
      { title: "Actionable Cloud Transformation Roadmaps", text: "Our team will guide you through your cloud transformation, offering practical blueprints and expert advice to help you transition smoothly from your current state to your ideal future." },
      { title: "Compliant and Flexible Cloud Frameworks", text: "Our proven frameworks ensure compliance with regulatory requirements, enabling successful cloud migrations and operations across all industries." },
      { title: "Tailored Cloud Accelerators and Tools", text: "Pythian’s cloud accelerators boost performance and scalability, offering customized workflows by combining our tools with cloud provider solutions." },
    ],
  },
  options: {
    kicker: "Cloud Transformation",
    title: "Fiona Cloud Service Options",
    items: [
      { title: "Cloud consulting", text: "We assess your IT infrastructure, analyze cloud adoption needs, and recommend the best cloud strategy, provider, and services.", icon: u("2025/03/Cloud-consulting.svg") },
      { title: "Cloud migration", text: "Seamlessly modernize and migrate applications or data storage with minimal disruptions, ensuring security and integration.", icon: u("2025/03/Cloud-migration.svg") },
      { title: "Cloud development", text: "Build and deploy cloud-native apps, data warehouses, and integrations while ensuring compliance with industry regulations.", icon: u("2025/03/Cloud-optimization.svg") },
      { title: "Cloud optimization", text: "Enhance cloud efficiency by eliminating redundancies, rightsizing resources, and optimizing costs.", icon: u("2025/03/Cloud-security-consulting.svg") },
      { title: "Cloud infrastructure management", text: "Maintain and improve cloud environments with monitoring, maintenance, and continuous support.", icon: u("2025/03/Cloud-infrastructure-management.svg") },
      { title: "Cloud integration", text: "Develop seamless integrations using cloud services, middleware, or solutions with minimal disruption.", icon: u("2025/03/Cloud-integration.svg") },
      { title: "Cloud analytics", text: "Deliver scalable analytics solutions with secure data processing, reporting, and regulatory compliance.", icon: u("2025/03/cloud-Analytics.svg") },
      { title: "Cloud security consulting", text: "Ensure robust security with risk assessment, encryption, firewalls, threat detection, and continuous monitoring.", icon: u("2025/03/Cloud-consulting.svg") },
    ],
  },
  clouds: {
    title: "We Work With Clouds",
    text: "With diverse cloud provider options, choosing the right one can be challenging. As a vendor-neutral expert, ScienceSoft evaluates all major clouds to find the best fit for your needs, ensuring scalability, security, efficiency, and long-term success.",
    logos: [
      { name: "AWS", image: u("2025/02/AWS-1.webp") },
      { name: "Google Cloud", image: u("2025/02/Google-Cloud.webp") },
      { name: "Digital Ocean", image: u("2025/02/Digital-Ocean.webp") },
      { name: "Azure", image: u("2025/02/Azure.webp") },
    ],
  },
  benefits: {
    kicker: "Fiona Benefits",
    title: "Key Benefits of Fiona's Cloud Consulting Services",
    items: [
      { title: "Lower Migration Costs", text: "Tailored strategies minimize redevelopment efforts and reduce migration expenses." },
      { title: "Optimized Cloud Spending", text: "Smart resource orchestration and service selection lower monthly costs." },
      { title: "Faster Development", text: "Streamlined DevOps and ready-to-use cloud services accelerate development." },
      { title: "Reliable Performance", text: "Fault-tolerant architectures ensure stability, high availability, scalability, and quick recovery." },
      { title: "Enhanced Security", text: "Strong encryption, access control, and security policies protect your data." },
      { title: "Assured Quality", text: "Transparent processes & expert-driven solutions guarantee high service standards." },
    ],
  },
};

/* --------------------------- AI/ML Transformation ------------------------- */

const lorem = "Our developers design efficient content management systems, content models, and DITA, optimizing conversion rates and usability.";

export const aiMlTransformation = {
  hero: {
    title: "AI/ML Transformation",
    subtitle: "Empower Your Business with AI-Driven Intelligence & Automation",
    text: "AI and Machine Learning (ML) revolutionize businesses by automating processes, enhancing decision-making, and driving innovation. From predictive analytics to intelligent automation, AI/ML helps organizations optimize operations and gain a competitive edge.",
    bullets: [
      "Automate repetitive tasks and improve efficiency",
      "Gain valuable insights with data-driven decision-making",
      "Enhance customer experience with AI-powered solutions",
      "Improve accuracy and reduce human errors",
    ],
    image: u("2025/02/AI-Machine-Learning.webp"),
    video: u("2025/02/Artificial-intelligence-AI-machine-learning-and-modern-computer-technologies-concepts.-Business-Technology-Internet-and-network-concept._HD1080p.mp4"),
    overlay: 0.7,
    pad: 180,
  },
  highlights: [
    { title: "AI Strategy Development", text: "Identify AI opportunities, align with strategy, and develop a clear implementation roadmap.", icon: u("2025/02/AI-Strategy1.png"), w: 66, h: 66 },
    { title: "Customized  AI Models", text: "Tailor your AI model using a transparent, accountable, and data-focused approach.", icon: u("2025/02/AI-Models1.png"), w: 66, h: 66 },
    { title: "AI Process Reinvention", text: "Transform workflows with AI efficiencies that deliver instant organizational value.", icon: u("2025/02/AI-Process1.png"), w: 64, h: 64 },
    { title: "UX Personalization", text: "Improve user experience through AI-personalized content and meaningful interactions.", icon: u("2025/02/UX-Personalization1.png"), w: 61, h: 61 },
  ],
  offering: {
    kicker: "Fiona Cloud Transformation",
    title: "We Offering Our Services",
    text: "Cloud transformation enables businesses to modernize IT infrastructure, improve agility, and drive innovation. By migrating to the cloud, companies can optimize costs, enhance security, and ensure seamless scalability.",
    tabs: [
      {
        label: "Generative AI",
        items: [
          { title: "GenAI for IT", text: "Generative AI enhances IT efficiency, automates workflows, optimizes code, and streamlines operations.", icon: u("2025/02/GenAI-for-IT.svg") },
          { title: "GenAI for Business", text: "Generative AI boosts business efficiency, automates tasks, enhances decision-making, and drives growth.", icon: u("2025/02/GenAI-for-Business.svg") },
          { title: "GenAI for Customers", text: "Generative AI enhances customer experiences, personalizes interactions, automates support, and boosts satisfaction.", icon: u("2025/02/GenAI-for-Customers.svg") },
        ],
      },
      {
        label: "AI / Machine Learning",
        items: [
          { title: "Advanced AI/ML/DL", text: "Advanced AI, ML, and DL drive automation, optimize decisions, enhance insights, and innovate.", icon: u("2025/02/Advanced-AI-ML-DL.svg") },
          { title: "Emerging AI", text: "Emerging AI transforms industries, enhances automation, improves decisions, and drives innovation forward.", icon: u("2025/02/Emerging-AI.svg") },
          { title: "Enterprise AI", text: "Enterprise AI enhances efficiency, automates processes, optimizes decisions, and drives business growth.", icon: u("2025/02/enterprise-ai.svg") },
        ],
      },
      {
        label: "Hyper Automation",
        items: [
          { title: "Digital Process management", text: lorem, icon: u("2025/02/Digital-Process-management.svg") },
          { title: "Business Process Management", text: lorem, icon: u("2025/02/Business-Process-Management.svg") },
          { title: "Intelligent Automation", text: lorem, icon: u("2025/02/Intelligent-Automation.svg") },
          { title: "iDSP", text: lorem, icon: u("2025/02/Information-Architecture-Design.svg") },
        ],
      },
    ],
  },
  partners: {
    kicker: "Fiona Partnerships",
    title: "Partnerships & Affiliations",
    text: "Fiona Solutions combines deep industry and technological expertise to design, integrate, and deliver exceptional custom software solutions. To achieve this, we have built a strong network of partnerships with leading industry and technology experts.",
    logos: ["Magento", "microsoft", "Salesforce", "Autodesk", "aws", "bigcommerce", "NetSuite", "Oracle", "SAP", "ibm"].map((n) => ({
      name: n,
      image: u(`2025/02/${n}.webp`),
    })),
  },
  concepts: [
    {
      id: "PredectiveAI",
      button: "Predictive AI",
      title: "Predictive AI",
      paragraphs: [
        "Predictive AI analyzes vast historical data to forecast future outcomes, enabling informed decision-making and strategic optimization. From demand forecasting to customer behavior analysis and market trend predictions, it helps businesses stay ahead.",
        "The process involves designing or leveraging machine learning algorithms. Once trained and tested, these models detect patterns and trends, allowing organizations to anticipate challenges and seize opportunities.",
      ],
      list: ["Regression Algorithms", "Decision Trees", "Neural Networks", "Machine Learning", "Data and AI"],
      image: u("2025/02/Predictive-AI.webp"),
      w: 590,
      h: 555,
    },
    {
      id: "GenerativeConversationalAI",
      button: "Generative & Conversational AI",
      title: "Generative & Conversational AI",
      paragraphs: [
        "Generative and conversational AI revolutionizes business communication and content creation by using advanced language models and media-generation tools. From hybrid customer support to automated multimedia proposals, it enhances engagement and efficiency.",
      ],
      list: ["Large Language Models (LLM)", "Generative Adversarial Networks (GAN)", "Machine Learning (ML)", "Natural Language Processing (NLP)"],
      image: u("2025/02/Generative-Conversational-AI.webp"),
      w: 590,
      h: 466,
    },
    {
      id: "AiStrategyGovernance",
      button: "AI Strategy & Governance",
      title: "AI Strategy & Governance",
      paragraphs: [
        "AI consulting provides a strong foundation for businesses embarking on their AI journey. Experts help create AI blueprints, prioritize high-ROI use cases, and align stakeholders. Effective governance ensures risk mitigation and responsible AI implementation.",
      ],
      list: ["AI Discovery Workshop", "Design Prototyping", "Strategic Roadmapping"],
      image: u("2025/02/AI-Strategy-Governance.webp"),
      w: 590,
      h: 589,
    },
  ],
  benefits: {
    title: "Your Benefits",
    text: "Unlock efficiency, automate tasks, enhance decisions, reduce costs, and drive business growth.",
    items: [
      { title: "AI Expertise & Insights", text: "Gain a clear understanding of AI capabilities and how they can support your business.", icon: u("2025/02/AI-Expertise.svg") },
      { title: "Identified Opportunities", text: "Pinpoint key areas where AI can drive efficiency and innovation within your organization.", icon: u("2025/02/Opportunities.svg") },
      { title: "Minimized Risks", text: "Reduce compliance risks, time, and costs with a well-defined AI implementation strategy.", icon: u("2025/02/Minimized-Risks.svg") },
      { title: "Enhanced Product Development", text: "Enhanced Product Development Turning data into actionable insights to reduce costs, boost efficiency, and minimize risk.", icon: u("2025/02/Product-Development.svg") },
      { title: "Actionable Outcomes", text: "Receive a tailored report on AI use cases, along with a project proposal detailing deliverables, timelines, & costs.", icon: u("2025/02/Actionable-Outcomes.svg") },
      { title: "Expert-Led Workshops", text: "Collaborate with project managers, analysts, UI/UX designers & AI specialists to develop impactful AI strategies.", icon: u("2025/02/Expert-Led-Workshops.svg") },
    ],
  },
};
