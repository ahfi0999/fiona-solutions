import { WP } from "@/lib/site";

export const careersHero = {
  title: "Careers",
  text: "Kick-start your career with our dynamic IT consulting and innovation company, where creativity meets cutting-edge technology. Join a team of passionate experts driving digital transformation, solving complex challenges, and shaping the future of businesses. Grow your skills, innovate, and make an impact—your future starts here!",
  video: `${WP}/2025/02/career.mp4`,
  poster: `${WP}/2025/02/careers.webp`,
};

export const careerPerks = [
  { title: "Innovative Work Culture", text: "Fostering creativity, collaboration, and growth in an innovative work culture.", icon: `${WP}/2025/02/Innovative-Work-Culture.png`, w: 61, h: 59 },
  { title: "Growth & Learning", text: "Access training, mentorship, and career advancement opportunities.", icon: `${WP}/2025/02/Flexible-Work-Environment.png`, w: 61, h: 64 },
  { title: "Flexible Work Environment", text: "Empowering productivity and work-life balance with a flexible work environment.", icon: `${WP}/2025/02/Growth-Learning.png`, w: 61, h: 58 },
  { title: "Competitive Benefits", text: "Offering attractive compensation, perks, and growth opportunities with competitive benefits.", icon: `${WP}/2025/02/Competitive-Benefits.png`, w: 61, h: 59 },
];

export const careersIntro = {
  kicker: "@Fiona Careers",
  title: "Shape The Future Of The Digital Era With Us!",
  paragraphs: [
    "Are you ready to work on groundbreaking projects, collaborate with top talent, and accelerate your career in an ever-evolving digital landscape? At our company, we foster a culture of innovation, teamwork, and continuous learning, empowering both seasoned professionals and aspiring talents to thrive. Our diverse projects span multiple industries, offering you the opportunity to apply your expertise, embrace new challenges, and drive meaningful change through technology.",
    "Join a team that values knowledge, collaboration, and growth, providing hands-on experience with emerging technologies, a structured career path, and an inclusive environment where your ideas make an impact. Whether you’re looking to shape the future of IT consulting or redefine digital innovation, we’re here to support your journey. Explore our career opportunities today and take the next step toward a rewarding future with us!",
  ],
  image: `${WP}/2025/02/careers-fiona.webp`,
};

export const jobIcon = `${WP}/2025/02/job-id-150x150.webp`;

/** One line inside a paragraph: an optional bold label followed by text. Lines are separated by <br>. */
export type JobLine = { label?: string; text: string };
export type Job = { title: string; postedOn: string; paragraphs: JobLine[][] };

// Shared tail of every listing on the live site.
const applyBlock = (requirements: string, salary: string): JobLine[][] => [
  [
    { label: "Requirements:", text: requirements },
    { label: "To Apply:", text: "Send resume to Fiona Solutions Inc., 12425 West Airport Blvd., Suite 203, Sugar Land, TX 77478." },
    { label: "Salary:", text: salary },
  ],
  [{ label: "Hours:", text: "40 hours/week, 9:00am -5:00pm" }],
  [{ label: "Job location:", text: "12425 West Airport Blvd., Suite 203, Sugarland, TX 77478." }],
  [{ label: "Contact:", text: "Jyothi Surapaneni, President – Ph: (346) 521-8355" }],
];

// Text is copied verbatim from the live page (including its hard line breaks and the literal "&amp;").
export const jobs: Job[] = [
  {
    title: "Senior Quality Assurance Automation Specialist",
    postedOn: "07/27/2026",
    paragraphs: [
      [
        {
          label: "POSITION DUTIES:",
          text: "Develop & maintain automation Scripts using Selenium WebDriver based on test cases identified for automation. Execute manual and functional testing including Security, System, Smoke, Back-end, and testing. Prepare and execute Test Plans, Test Cases, Test Scripts, Test Scenarios, and Test Summary Reports based on business and technical requirements. Utilize TestNG framework for Automation testing Reports using Page Object Model. Conduct regression testing for pre-and post- patching release using Jenkins. Validate database data using SQL queries to ensure data integrity. Reports, tracks, and verifies defects using JIRA. Must be willing to travel 25% of time to work in various locations throughout the USA.",
        },
      ],
      ...applyBlock(
        "Bachelor’s degree in Engineering or Technology & 5 years of experience in the same or a related occupation.",
        "$121,098.00/ per year.",
      ),
    ],
  },
  {
    title: "Sr. Software Developer",
    postedOn: "07/29/2026",
    paragraphs: [
      [
        { label: "JOB DUTIES:", text: "Develop real-time network performance dashboards to monitor latency, bandwidth, and call" },
        { text: "drops; lead Teradata and MicroStrategy migration to Azure Cloud; build and tune 500GB+ data" },
        { text: "cubes using advanced VLDB settings; design interactive Dossiers using jQuery, URL APIs," },
        { text: "prompts, and selectors; create ad hoc reports, custom templates, metrics, filters, consolidations," },
        { text: "and custom groups; develop schema objects including attributes, facts, hierarchies, and" },
        { text: "transformations; integrate dashboards with PowerPoint and develop HyperCard solutions; build" },
        { text: "centralized Home Page Dossiers for improved navigation and user experience; manage object" },
        { text: "migrations across environments using Object Manager; deliver UAT sessions and end-user" },
        { text: "training (Web, Library Services, HyperCard); and implement Python-based machine learning" },
        { text: "models for forecasting and predictive analytics dashboards." },
      ],
      [
        { label: "Required Skills:", text: "Teradata, Azure Cloud, VLDB, jQuery, URL APIs, UAT, Object Manager, Web, Library Services" },
        { text: "&amp; HyperCard." },
      ],
      [
        { label: "Travel Requirements:", text: "Must be willing to travel and/or relocate to work in various locations throughout the USA. No" },
        { text: "telecommuting. The employee will be required to travel and work on-site at the following" },
        { text: "worksites throughout the United States:" },
        { text: "1. Cincinnati, OH – 45249" },
        { text: "2. Wilmington, DE – 19803" },
        { text: "3. Phoenix, AZ – 85054" },
      ],
      [
        { label: "Frequency of Travel:", text: "Travel will be occasional, based on specific project needs, estimated at up to 10% of working" },
        { text: "time." },
        { text: "• Frequency: Approximately twice per month" },
        { text: "• Duration per trip: A few days up to a maximum of one week." },
      ],
      ...applyBlock(
        "Bachelor’s degree in Computer Science or Information Technology with 24 months of experience in a job title with similar duties and skills.",
        "$102,294.00 / year.",
      ),
    ],
  },
];
