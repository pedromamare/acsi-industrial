import { Service, Project } from './types';

// Configurações Gerais da Empresa
export const COMPANY_INFO = {
  name: 'ACSI',
  subtitle: 'Industrial',
  logoUrl: 'https://i.redd.it/d10iwrs7zpeg1.png'
};

export interface DetailedService extends Service {
  fullDescription: string;
  features: string[];
  subProjects: { title: string; image: string }[];
}

export const SERVICES: DetailedService[] = [
  {
    id: 'laudos',
    title: 'Laudos Técnicos Industriais',
    description: 'Elaboração de laudos estruturais mecânicos, laudos de segurança e conformidade com normas técnicas e regulamentadoras (NR’s).',
    fullDescription: 'A ACSI Industrial é especializada na emissão de laudos técnicos fundamentais para a segurança e conformidade legal da sua operação.',
    icon: 'fa-file-signature',
    features: [
      'Laudos de esforços e capacidade de carga',
      'Laudos de segurança NR-12',
      'Cálculos estruturais por elementos finitos',
      'Laudos emitidos com ART'
    ],
    subProjects: [
      { title: '', image: 'https://i.redd.it/t7xoqcoh4ahg1.png?width=1080&crop=smart&auto=webp&s=912ffb6832a4789ddf9691658c8bcac76b8200cd' },
      { title: '', image: 'https://i.redd.it/base-dados-v0-zeivesica9kg1.jpg?width=1080&crop=smart&auto=webp&s=70162fb960445e4b24332b92bfefd95471be37ec' },
      { title: '', image: 'https://i.redd.it/base-dados-v0-ieidyrica9kg1.jpg?width=1080&crop=smart&auto=webp&s=b469e10037cf28497981f2f5aaef6585a0d208b3' },
    ]
  },
  {
    id: 'dispositivos',
    title: 'Dispositivos e Processos Automatizados',
    description: 'Desenvolvimento de dispositivos de solda, montagem e gabaritos sob medida.',
    fullDescription: 'Projetamos dispositivos de alta precisão com repetibilidade industrial.',
    icon: 'fa-microchip',
    features: [
      'Dispositivos manuais e robotizados',
      'Gabaritos de controle dimencionais (PNP)',
      'Sistemas pneumaticos/hidraulicos',
      'Monitoramento de peças',
      'Projetos normatizados'
    ],
    subProjects: [
      { title: '', image: 'https://i.redd.it/yfrtpykwobeg1.jpg' },
      { title: '', image: 'https://i.redd.it/base-dados-v0-2aa6krica9kg1.jpg?width=886&format=pjpg&auto=webp&s=a6cacf2f8ac244167979735a6e0793baabd09c7e' },
      { title: '', image: 'https://i.redd.it/cpoxb0lwobeg1.jpg' }
    ]
  },
  {
    id: 'projetos',
    title: 'Projetos de Engenharia ',
    description: 'Engenharia mecânica e industrial com modelagem 3D detalhamento técnico e acompanhamento de fabricação',
    fullDescription: 'Serviço completo de engenharia industrial.',
    icon: 'fa-drafting-compass',
    features: [
      'Detalhamento técnico',
      'Projetos industriais',
      'desenvolvimento de soluçoes industriais',
      'Retrofitting',
      'Consultoria'
    ],
   subProjects: [
      { title: '', image: 'https://i.redd.it/acsi-industrieal-v0-nahvj2lwobeg1.jpg?width=751&format=pjpg&auto=webp&s=4fbcc9f546f20103f02a4978f64446a6d2421cfc' },
      { title: '', image: 'https://preview.redd.it/acsi-industrieal-v0-x92aa1lwobeg1.jpg?width=648&format=pjpg&auto=webp&s=aa91d665ea10e144b51f9826d3dacb32f7a6119f' },
      { title: '', image: 'https://i.redd.it/base-dados-v0-fqrxtrica9kg1.jpg?width=777&format=pjpg&auto=webp&s=e054b6979aea497d98d1ac57db536651aa792d00' }
    ]
  },
  {
    id: 'maquinas',
    title: 'Máquinas Especiais',
    description: 'Máquinas sob medida para automação.',
    fullDescription: 'Soluções industriais exclusivas.',
    icon: 'fa-cogs',
    features: [
      'Em um cenário industrial cada vez mais competitivo, a busca por eficiência, precisão e produtividade exige soluções que vão além dos equipamentos convencionais. É nesse contexto que as máquinas especiais se tornam fundamentais. Desenvolvidas de forma totalmente personalizada, elas são projetadas para atender necessidades específicas de cada processo produtivo, garantindo desempenho superior e resultados consistentes. Na ACSI Industrial, unimos engenharia avançada, experiência multidisciplinar e tecnologia de ponta para criar equipamentos exclusivos, desenhados exatamente conforme as demandas da sua operação. Cada projeto nasce a partir de um estudo detalhado do processo, identificando gargalos, oportunidades de automação e melhorias que possam elevar o nível de qualidade e segurança.'
    ],
     subProjects: [
      { title: '', image: 'https://i.redd.it/acsi-industrieal-v0-nahvj2lwobeg1.jpg?width=751&format=pjpg&auto=webp&s=4fbcc9f546f20103f02a4978f64446a6d2421cfc' },
      { title: '', image: 'https://i.redd.it/acsi-industrieal-v0-x92aa1lwobeg1.jpg?width=648&format=pjpg&auto=webp&s=aa91d665ea10e144b51f9826d3dacb32f7a6119f' },
      
    ]
  }
];

export const TEAM = [
  {
    name: 'Henri Udo Bostelmann Filho',
    role: 'Engenheiro Mecânico',
    image: 'https://i.redd.it/ie7wz5tn3ahg1.png',
    bio: 'Sou engenheiro mecânico com pós-graduação em Engenharia de Segurança do Trabalho e mais de 15 anos de experiência na gestão e execução de projetos voltados à melhoria de processos de fabricação. Atuei em diferentes segmentos industriais, liderando iniciativas que geraram avanços significativos em eficiência operacional e qualidade. Trabalho desde a concepção até a entrega final de projetos, incluindo definição técnica, fabricação, montagem, instalação e startup. Desenvolvi máquinas especiais, gabaritos, dispositivos de solda, sistemas de manipulação e outros meios de produção, sempre com foco em inovação, segurança e melhoria contínua. Tenho perfil analítico, visão sistêmica e forte atuação prática no chão de fábrica, integrando tecnologia, produtividade e sustentabilidade aos processos.',
    experience: []
  }
];

export const CLIENTS: string[] = [];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Dispositivo de Solda',
    category: 'Industrial',
    imageUrl: 'https://i.redd.it/x92aa1lwobeg1.jpg'
  },
  {
    id: 'p2',
    title: 'Máquinas especiais',
    category: 'Engenharia',
    imageUrl: 'https://i.redd.it/nahvj2lwobeg1.jpg'
  },
  {
    id: 'p3',
    title: 'Manipuladores industriais',
    category: 'Automação',
    imageUrl: 'https://i.redd.it/e7t7b1lwobeg1.jpg'
  },
  {
    id: 'p4',
    title: 'Dispositivos de controle',
    category: 'Mecânica',
    imageUrl: 'https://i.redd.it/e7l980lwobeg1.jpg'
  },
  {
    id: 'p5',
    title: 'Esteira de rolete',
    category: 'Logística',
    imageUrl: 'https://i.redd.it/base-dados-v0-fqrxtrica9kg1.jpg?width=777&format=pjpg&auto=webp&s=e054b6979aea497d98d1ac57db536651aa792d00'
  },
  {
    id: 'p6',
    title: 'gabarito de controle',
    category: 'Qualidade',
    imageUrl: 'https://i.redd.it/acsi-industrieal-v0-cpoxb0lwobeg1.jpg?width=578&format=pjpg&auto=webp&s=b0adf7649ac23660f8689f5fd090a5b5b65a7073'
  }
];
