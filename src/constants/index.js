import {
    aubureau,
    backend,
    creator,
    css,
    cysolab,
    designagencywebsite,
    docker,
    figma,
    git,
    html,
    iselection,
    javascript,
    jobit,
    kurosaw,
    mobile,
    mongodb,
    natixis,
    nodejs,
    reactjs,
    tailwind,
    threejs,
    typescript,
    vandiemens,
    web,
} from '../assets';

export const navLinks = [
    {
        id: 'about',
        title: 'About',
    },
    {
        id: 'work',
        title: 'Work',
    },
    {
        id: 'contact',
        title: 'Contact',
    },
];

const services = [
    {
        title: 'Web Developer',
        icon: web,
    },
    {
        title: 'React Native Developer',
        icon: mobile,
    },
    {
        title: 'Back-End Developer',
        icon: backend,
    },
    {
        title: 'Front-End Developer',
        icon: creator,
    },
];

const technologies = [
    {
        name: 'HTML 5',
        icon: html,
    },
    {
        name: 'CSS 3',
        icon: css,
    },
    {
        name: 'JavaScript',
        icon: javascript,
    },
    {
        name: 'TypeScript',
        icon: typescript,
    },
    {
        name: 'React JS',
        icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
        name: 'Tailwind CSS',
        icon: tailwind,
    },
    {
        name: 'Node JS',
        icon: nodejs,
    },
    {
        name: 'MongoDB',
        icon: mongodb,
    },
    {
        name: 'Three JS',
        icon: threejs,
    },
    {
        name: 'git',
        icon: git,
    },
    {
        name: 'figma',
        icon: figma,
    },
    {
        name: 'docker',
        icon: docker,
    },
];

const experiences = [
    {
        title: 'Full Stack Developer',
        company_name: 'CYSOLAB',
        icon: cysolab,
        iconBg: '#383E56',
        date: 'April 2024 - June 2024',
        points: [
            'Developing and maintaining web applications using Next.js and other related technologies.',
            'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
            'Implementing responsive design and ensuring cross-browser compatibility.',
            'Participating in code reviews and providing constructive feedback to other developers.',
        ],
    },
    {
        title: 'Waiter',
        company_name: "Van Diemen's",
        icon: vandiemens,
        iconBg: '#383E56',
        date: 'May 2024 - May 2024',
        points: [
            'Greet and seat customers with courtesy and professionalism.',
            'Take customer orders accurately and efficiently, recommending dishes and drinks based on their preferences.',
            'Provide attentive and prompt service, ensuring that customer needs are met throughout their meal.',
            'Work collaboratively with the team to ensure smooth operations and an optimal customer experience.',
            'Address customer questions about the menu, ingredients, and customization options for dishes.',
            'Maintain a clean and organized environment in the service area, adhering to food safety and hygiene standards.',
            'Communicate effectively with the kitchen to ensure coordination of customer orders and special requests.',
            'Respond professionally to customer feedback and concerns, ensuring that issues are resolved satisfactorily.',
        ],
    },
    {
        title: 'Waiter',
        company_name: 'Au Bureau',
        icon: aubureau,
        iconBg: '#383E56',
        date: 'July 2023 - August 2023',
        points: [
            'Greet and seat customers with courtesy and professionalism.',
            'Take customer orders accurately and efficiently, recommending dishes and drinks based on their preferences.',
            'Provide attentive and prompt service, ensuring that customer needs are met throughout their meal.',
            'Work collaboratively with the team to ensure smooth operations and an optimal customer experience.',
            'Address customer questions about the menu, ingredients, and customization options for dishes.',
            'Maintain a clean and organized environment in the service area, adhering to food safety and hygiene standards.',
            'Communicate effectively with the kitchen to ensure coordination of customer orders and special requests.',
            'Respond professionally to customer feedback and concerns, ensuring that issues are resolved satisfactorily.',
        ],
    },
    {
        title: 'Web Developer',
        company_name: 'iSelection',
        icon: iselection,
        iconBg: '#E6DEDD',
        date: 'May 2022 - July 2023',
        points: [
            'Revamping historical tests coded in Java into Python to standardize the database.',
            'Enriching the test database.',
            "Modifying current QA processes to integrate them into delivery processes and shift to 'continuous integration' mode.",
            'Participating in defining User Stories (US) during the creation of new developments.',
            'Documenting all test campaigns.',
            'Developing integration, non-regression, and end-to-end tests, interacting with databases.',
            'Using tools such as GitLab CI/CD, Squash TM, Allure.',
            'Participating in the development of front-end commercial websites (Angular/Nuxt) with the development team.',
            'Contributing to the systems team in developing Python scripts related to system security.',
            "Managing a project from A to Z with the goal of increasing test coverage for one of the company's websites to 100%.",
        ],
    },
    {
        title: 'Web Developer',
        company_name: 'Natixis',
        icon: natixis,
        iconBg: '#E6DEDD',
        date: 'September 2021 - May 2022',
        points: [
            "Discovering Angular by resolving bugs and implementing graphical updates for the company's website.",
            "Maintaining the company's services.",
        ],
    },
    {
        title: 'Data Scientist (Intern)',
        company_name: 'Natixis',
        icon: natixis,
        iconBg: '#E6DEDD',
        date: 'October 2018 - November 2018',
        points: [
            'Learning SQL language.',
            'Exploring Big Data.',
            'Working with Agile methodology (SCRUM).',
        ],
    },
    {
        title: 'Web Developer (Intern)',
        company_name: 'Natixis',
        icon: natixis,
        iconBg: '#E6DEDD',
        date: 'October 2017 - October 2017',
        points: [
            'Getting acquainted with the working environment within the Natixis Transverse Web team.',
            'Learning the basics of HTML, CSS, and JavaScript development.',
            'Migrating servers from Sybase to SQL Server.',
        ],
    },
];

const testimonials = [
    {
        testimonial:
            'Shad demonstrated impressive professionalism and rigor during his apprenticeship. He quickly integrated into the team and provided innovative solutions to complex problems. His contributions were pivotal to the success of several projects.',
        name: 'Renaud HUJSA',
        designation: 'Technical Lead',
        company: 'Natixis',
        image: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
    {
        testimonial:
            "Mentoring Shad during his apprenticeship was an enriching experience. His eagerness to learn and his ability to adapt quickly to the team's needs were remarkable. He consistently exceeded expectations, making him a valuable asset to any team.",
        name: 'François FORTIN',
        designation: 'Application Manager',
        company: 'Natixis',
        image: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
        testimonial:
            'During his time with us, Shad demonstrated a deep understanding of the technical challenges we faced. His rigor and efficiency helped optimize several key processes, yielding measurable results. He has a great ability to work in a team while remaining autonomous.',
        name: 'Jean-Marc BAGARRE',
        designation: 'Head of IT',
        company: 'iSelection',
        image: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
];

const projects = [
    {
        name: 'Design Agency Website',
        description:
            'Website for a design agency that showcases their portfolio, services, and more.',
        tags: [
            {
                name: 'HTML/CSS',
                color: 'blue-text-gradient',
            },
            {
                name: 'Javascript',
                color: 'green-text-gradient',
            },
            {
                name: 'Tailwind',
                color: 'pink-text-gradient',
            },
        ],
        image: designagencywebsite,
        source_code_link: 'https://github.com/shadazls/Design-agency-website',
        demo_link: 'https://shadazls.github.io/Design-agency-website/',
    },
    {
        name: 'Tweetere',
        description:
            'Web application that allows users to post tweets, follow other users, like tweets and more.',
        tags: [
            {
                name: 'PHP',
                color: 'blue-text-gradient',
            },
            {
                name: 'MySQL',
                color: 'green-text-gradient',
            },
            {
                name: 'SCSS',
                color: 'pink-text-gradient',
            },
        ],
        image: jobit,
        demo_link: 'https://tweetere.fr/home',
        source_code_link: 'https://github.com/',
    },
    {
        name: 'Kurosaw',
        description:
            'Web application that allows users to watch animes, read mangas and track your progress.',
        tags: [
            {
                name: 'Next.js',
                color: 'blue-text-gradient',
            },
            {
                name: 'MongoDB',
                color: 'green-text-gradient',
            },
            {
                name: 'Tailwind',
                color: 'pink-text-gradient',
            },
        ],
        image: kurosaw,
        demo_link: 'http://localhost:3000',
        source_code_link: 'https://github.com/shadazls/anime-library',
    },
];

export { experiences, projects, services, technologies, testimonials };
