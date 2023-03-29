import { Project } from '@/types/project';

export const PROJECTS: Project[] = [
  {
    id: '1',
    name: 'Conversor de moedas',
    description:
      'Aplicação desenvolvida com objetivo de tratar da conversão de valores entre diversas moedas pelo mundo',
    repoLink:
      'https://github.com/IgoCarvalho/bora-codar/tree/main/09-conversor-de-moeda',
    siteLink: 'https://bora-codar-conversor-de-moedas.vercel.app/',
    imageUrl: '/images/conversor-de-moedas-preview.jpg',
    technologies: [
      'React',
      'Next',
      'TypeScript',
      'Recharts',
      'Sass',
      'Free currency API',
    ],
  },
  {
    id: '2',
    name: 'Painel de clima',
    description:
      'Aplicação desenvolvida com objetivo de exibir informações sobre o clima atual e previsão para os próximos dias',
    repoLink:
      'https://github.com/IgoCarvalho/bora-codar/tree/main/10-pagina-de-clima',
    siteLink: 'https://10-boracodar-weather-pane.vercel.app/',
    imageUrl: '/images/painel-de-clima-preview.jpg',
    technologies: ['React', 'TypeScript', 'Weather API', 'Sass', 'Vite'],
  },
  {
    id: '3',
    name: 'Dashgo',
    description:
      'Dashboard responsivo desenvolvido utilizando Chakra Ui, framework que utiliza o paradigma de interface declarativa',
    repoLink: 'https://github.com/IgoCarvalho/dashgo',
    siteLink: 'https://bora-codar-conversor-de-moedas.vercel.app/',
    imageUrl: '/images/painel-de-clima-preview.jpg',
    technologies: ['React', 'Next', 'Chakra Ui', 'TypeScript', 'Recharts'],
  },
  {
    id: '4',
    name: 'Formulário com paginação',
    description:
      'Formulário responsivo com objetivo treinar o funcionamento de formulários com paginação e validação de campos',
    repoLink:
      'https://github.com/IgoCarvalho/frontend-mentor-challenges/tree/main/multi-step-form',
    siteLink: 'https://igo-multi-step-form.netlify.app/',
    imageUrl: '/images/formulario-com-paginacao-preview.jpg',
    technologies: ['Vue', 'TypeScript', 'VeeValidate', 'Yup'],
  },
  {
    id: '5',
    name: 'Purr',
    description:
      'Uma rede social feita para amantes de gatos, onde voce pode ver e postar suas fotos de gatinhos',
    repoLink: 'https://github.com/IgoCarvalho/purr',
    siteLink: 'https://purr-test.netlify.app/',
    imageUrl: '/images/purr-preview.jpg',
    technologies: [
      'Vue',
      'Node.js',
      'TypeScript',
      'fastify',
      'zod',
      'prisma',
      'cloudinary',
    ],
  },
  {
    id: '6',
    name: 'Kanban',
    description:
      'Aplicação de quadro Kanban, ferramenta muito utilizada em projetos ou até mesmo para organização pessoal.',
    repoLink: 'https://github.com/IgoCarvalho/bora-codar/tree/main/12-kanban',
    siteLink: 'https://12-boracodar-kanban.netlify.app/',
    imageUrl: '/images/kanban-preview.jpg',
    technologies: [
      'React',
      'TypeScript',
      'Tailwindcss',
      'React Dnd kit',
      'Vite',
    ],
  },
];
