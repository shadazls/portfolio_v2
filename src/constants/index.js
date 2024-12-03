import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  designagencywebsite,
  vandiemens,
  natixis,
  iselection,
  aubureau,
  cysolab,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "CYSOLAB",
    icon: cysolab,
    iconBg: "#383E56",
    date: "April 2024 - June 2024",
    points: [
      "Developing and maintaining web applications using Next.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Waiter",
    company_name: "Van Diemen's",
    icon: vandiemens,
    iconBg: "#383E56",
    date: "May 2024 - May 2024",
    points: [
      "Greet and seat customers with courtesy and professionalism.",
      "Take customer orders accurately and efficiently, recommending dishes and drinks based on their preferences.",
      "Provide attentive and prompt service, ensuring that customer needs are met throughout their meal.",
      "Work collaboratively with the team to ensure smooth operations and an optimal customer experience.",
      "Address customer questions about the menu, ingredients, and customization options for dishes.",
      "Maintain a clean and organized environment in the service area, adhering to food safety and hygiene standards.",
      "Communicate effectively with the kitchen to ensure coordination of customer orders and special requests.",
      "Respond professionally to customer feedback and concerns, ensuring that issues are resolved satisfactorily.",
    ],
  },
  {
    title: "Waiter",
    company_name: "Au Bureau",
    icon: aubureau,
    iconBg: "#383E56",
    date: "July 2023 - August 2023",
    points: [
      "Greet and seat customers with courtesy and professionalism.",
      "Take customer orders accurately and efficiently, recommending dishes and drinks based on their preferences.",
      "Provide attentive and prompt service, ensuring that customer needs are met throughout their meal.",
      "Work collaboratively with the team to ensure smooth operations and an optimal customer experience.",
      "Address customer questions about the menu, ingredients, and customization options for dishes.",
      "Maintain a clean and organized environment in the service area, adhering to food safety and hygiene standards.",
      "Communicate effectively with the kitchen to ensure coordination of customer orders and special requests.",
      "Respond professionally to customer feedback and concerns, ensuring that issues are resolved satisfactorily.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "iSelection",
    icon: iselection,
    iconBg: "#E6DEDD",
    date: "May 2022 - July 2023",
    points: [
      "Revamping historical tests coded in Java into Python to standardize the database.",
      "Enriching the test database.",
      "Modifying current QA processes to integrate them into delivery processes and shift to 'continuous integration' mode.",
      "Participating in defining User Stories (US) during the creation of new developments.",
      "Documenting all test campaigns.",
      "Developing integration, non-regression, and end-to-end tests, interacting with databases.",
      "Using tools such as GitLab CI/CD, Squash TM, Allure.",
      "Participating in the development of front-end commercial websites (Angular/Nuxt) with the development team.",
      "Contributing to the systems team in developing Python scripts related to system security.",
      "Managing a project from A to Z with the goal of increasing test coverage for one of the company's websites to 100%.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Natixis",
    icon: natixis,
    iconBg: "#E6DEDD",
    date: "September 2021 - May 2022",
    points: [
      "Discovering Angular by resolving bugs and implementing graphical updates for the company's website.",
      "Maintaining the company's services.",
    ],
  },
  {
    title: "Data Scientist (Intern)",
    company_name: "Natixis",
    icon: natixis,
    iconBg: "#E6DEDD",
    date: "October 2018 - November 2018",
    points: [
      "Learning SQL language.",
      "Exploring Big Data.",
      "Working with Agile methodology (SCRUM).",
    ],
  },
  {
    title: "Web Developer (Intern)",
    company_name: "Natixis",
    icon: natixis,
    iconBg: "#E6DEDD",
    date: "October 2017 - October 2017",
    points: [
      "Getting acquainted with the working environment within the Natixis Transverse Web team.",
      "Learning the basics of HTML, CSS, and JavaScript development.",
      "Migrating servers from Sybase to SQL Server.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Design Agency Website",
    description:
      "Website for a design agency that showcases their portfolio, services, and more.",
    tags: [
      {
        name: "html/css",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: designagencywebsite,
    source_code_link: "https://github.com/",
  },
  {
    name: "Tweetere",
    description:
      "Web application that allows users to post tweets, follow other users, like tweets and more.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
