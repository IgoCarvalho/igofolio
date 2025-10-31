import { Project } from '@/types/project';

export const PROJECTS: Project[] = [
  {
    id: '1',
    name: 'Criador de formulários',
    description:
      'Aplicação desenvolvida com objetivo de criar formulários dinamicamente com base nos dados fornecidos pelo usuário',
    repoLink: 'https://github.com/IgoCarvalho/form-builder',
    siteLink: 'https://form-builder-igo.vercel.app/',
    imageUrl: '/images/form-builder-preview.jpg',
    technologies: [
      'React',
      'Nextjs',
      'TypeScript',
      'Tailwindcss',
      'Shadcn UI',
      'Prisma',
    ],
  },
  {
    id: '2',
    name: 'Painel de administração',
    description: 'Painel de administração desenvolvido usando Tailwindcss',
    repoLink: 'https://github.com/IgoCarvalho/admin-ui-tailwind',
    siteLink: 'https://admin-ui-tailwind.vercel.app/',
    imageUrl: '/images/admin-tailwind-preview.jpg',
    technologies: ['React', 'Nextjs', 'TypeScript', 'Tailwindcss'],
  },
  {
    id: '3',
    name: 'Dashgo',
    description:
      'Dashboard responsivo desenvolvido utilizando Chakra Ui, framework que utiliza o paradigma de interface declarativa',
    repoLink: 'https://github.com/IgoCarvalho/dashgo',
    siteLink: 'https://dashgo-sable-xi.vercel.app/',
    imageUrl: '/images/dashgo-preview.jpg',
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
