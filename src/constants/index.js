import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  python,
  graphapi,
  springboot,
  vuejs,
  jhipster,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  nextjs,
  mongodb,
  mariadb,
  naty,
  fineto,
  uog,
  frappe,
  frappeframework,
  erpnext,
  startupagile,
  boingo
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
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
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Next JS',
    icon: nextjs,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'erpnext',
    icon: erpnext,
  },
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'python',
    icon: python,
  },
  {
    name: 'graphapi',
    icon: graphapi,
  },
  {
    name: 'springboot',
    icon: springboot,
  },
  {
    name: 'frappe',
    icon: frappe,
  },
  {
    name: 'jhipster',
    icon: jhipster,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'MariaDB',
    icon: mariadb,
  },
];

const experiences = [
  {
    title: 'Front-End Developer',
    company_name: 'University of Gonder',
    icon: uog,
    iconBg: '#333333',
    date: 'Sep 2021 - Feb 2022',
  },
  {
    title: 'Desktop App Developer',
    company_name: 'Self hire',
    icon: naty,
    iconBg: '#333333',
    date: 'Sep 2022 - Feb 2023',
  },
  {
    title: 'Mentor (Volunteer)',
    company_name: 'SCHA',
    icon: microverse,
    iconBg: '#333333',
    date: 'Mar 2020 - May 2022',
  },
  {
    title: 'Junior Software Engineer',
    company_name: 'Fineto',
    icon: fineto,
    iconBg: '#333333',
    date: 'Apr 2022 - Dec 2024',
  },
  {
    title: 'Full-Stack Developer',
    company_name: 'Fineto',
    icon: fineto,
    iconBg: '#333333',
    date: 'Sep 2022 - Dec 2024',
  },
  {
    title: 'Full-Stack Developer',
    company_name: 'StartupAgile Dev',
    icon: startupagile,
    iconBg: '#333333',
    date: 'Dec 2024 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'VB visualization platform',
    description: 'VB visualization platform lightweight to view data on map reported from runners in that area using react-leaflet',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'private',
    demo: 'https://vb-visualization-platform-lightweight.vercel.app/',
  },
  {
    id: 'project-2',
    name: 'Leaderboard',
    description:
      'A leaderboard list app that displays scores submitted by different players.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/NatnaeAssefa/LeaderBoard.git',
    demo: 'https://leader-board-blue.vercel.app/',
  },
  {
    id: 'project-3',
    name: 'Boingo',
    description: 'Boingo, your one-stop property shop!\n All the properties of the world at your fingertips',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: boingo,
    repo: 'https://github.com/NatnaeAssefa/realestate_management_backend_node_app.git',
    demo: 'https://boingo.ai',
  },
  {
    id: 'project-4',
    name: 'Movie Metro',
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/NatnaeAssefa/Movie-Metro.git',
    demo: 'https://movie-metro.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'Nyeusi Fest Site',
    description:
      'This is a demo concert website for a music festival called Nyeusi.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/NatnaeAssefa/Nyeusi-Fest-Site',
    demo: 'https://nyeusi-fest-site.vercel.app/',
  },
];

export { services, technologies, experiences, projects };
