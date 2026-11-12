import { WP } from "@/lib/site";

export const eventsHero = {
  title: "Fiona Events",
  subtitle: "Stay Updated On Our Latest Events!",
  text: "Discover upcoming, ongoing, and past events at Fiona Solutions. Stay informed, register with ease, and never miss an opportunity to connect and learn!",
  video: `${WP}/2025/02/events.mp4`,
};

export const eventPerks = [
  { title: "Exclusive Access To Events", text: "Get early notifications and priority access to exciting events, workshops, and gatherings.", icon: `${WP}/2025/02/Exclusive-Access-to-Events.png`, w: 61, h: 51 },
  { title: "Personalized Recommendations", text: "Discover events tailored to your interests, ensuring a memorable experience every time.", icon: `${WP}/2025/02/Personalized-Recommendations.png`, w: 51, h: 51 },
  { title: "Seamless Booking & Updates", text: "Enjoy hassle-free ticketing and real-time updates on schedules, changes, and special offers.", icon: `${WP}/2025/02/Booking-Updates.png`, w: 61, h: 61 },
  { title: "Community & Networking", text: "Connect with like-minded individuals and expand your social and professional network.", icon: `${WP}/2025/02/Personalized-Recommendations.png`, w: 61, h: 61 },
];

export type FionaEvent = { name: string; location: string; industry: string; booth: string; date: string };

export const events: FionaEvent[] = [
  { name: "Lend 360", location: "Dallas, TX", industry: "Fintech", booth: "TBD", date: "Oct 06-08, 2025" },
  { name: "HR Tech - 2025", location: "Las Vegas, NV", industry: "Human Resources", booth: "TBD", date: "Sep 16-18, 2025" },
  { name: "Fintech Meetup 2025", location: "Las Vegas, NV", industry: "Fintech", booth: "TBD", date: "Mar 10-13, 2025" },
  { name: "SHRM 2025", location: "San Diego, CA", industry: "Human Resources", booth: "TBD", date: "Jun 29 – Jul 02, 2025" },
  { name: "Manifest 2025", location: "New York, NY", industry: "Supply Chain", booth: "TBD", date: "Feb 10-12, 2025" },
  { name: "WSAA - 2025", location: "Scottsdale, AZ", industry: "Payments", booth: "TBD", date: "Sep 08-10, 2025" },
];

const img = (name: string) => `${WP}/2025/02/${name}-600x500`;
const range = (n: number, f: (i: number) => string) => Array.from({ length: n }, (_, i) => f(i + 1));

export type Album = { title: string; images: string[] };

export const clubs: { category: string; albums: Album[] }[] = [
  {
    category: "Heckathon",
    albums: [
      {
        title: "2023 - July 2024 Heckathon",
        images: [
          `${img("IMG-20240723-WA0001-1")}.jpg`,
          `${img("IMG-20240723-WA0002-1")}.jpg`,
          ...range(10, (i) => `${img(`IMG-20240723-WA00${String(i + 2).padStart(2, "0")}`)}.jpg`),
        ],
      },
    ],
  },
  {
    category: "Anniversaries",
    albums: [
      { title: "Anniversary 1", images: range(6, (i) => `${img(`Anniversary1_${i}-1`)}.jpeg`) },
      { title: "Anniversary 2", images: range(20, (i) => `${img(`Anniversary2_${i}`)}.jpeg`) },
    ],
  },
  {
    category: "Festivals",
    albums: [
      { title: "Diwali", images: range(4, (i) => `${img(`diwali_${i}`)}.jpg`) },
      { title: "Independence Day", images: range(10, (i) => `${img(`IndpendenceDay_${i}`)}.jpeg`) },
      { title: "Christmas", images: range(10, (i) => `${img(`Christmas_${i}`)}.jpg`) },
    ],
  },
];
