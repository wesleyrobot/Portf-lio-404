export const projects = [
  {
    id: 1,
    image: 'project1.jpg',
    number: '01',
    title: 'Talents-MultiOne',
    category: 'Sistema de Recrutamento',
    description: 'Plataforma completa de recrutamento com sistema de matching de candidatos e vagas usando IA. Interface moderna com Next.js 14 e backend robusto com NestJS.',
    technologies: ['NestJS', 'Next.js 14', 'PostgreSQL', 'Prisma', 'TypeScript', 'Tailwind CSS']
  },
  {
    id: 2,
    image: 'project2.jpg',
    number: '02',
    title: 'Sistema de Validação de E-mails',
    category: 'Automação',
    description: 'Sistema automatizado para validação de e-mails corporativos com verificação de DNS, MX records e API para integração com outras aplicações.',
    technologies: ['Python', 'FastAPI', 'DNS Validation', 'Async/Await', 'API REST']
  },
  {
    id: 3,
    image: 'project3.jpg',
    number: '03',
    title: 'Sistema de Gestão de Contatos (CRM)',
    category: 'CRM',
    description: 'Sistema completo de CRM com dashboard analítico, gestão de leads, funil de vendas e relatórios customizáveis em tempo real.',
    technologies: ['Node.js', 'MySQL', 'Express', 'Dashboard', 'Chart.js', 'API REST']
  },
  {
    id: 4,
    image: 'project4.jpg',
    number: '04',
    title: 'Sistemas de IA Conversacional',
    category: 'Chatbots Inteligentes',
    description: 'Desenvolvimento de chatbots com processamento de linguagem natural, integração com múltiplos canais e análise de sentimentos.',
    technologies: ['AI/ML', 'NLP', 'Prompt Engineering', 'Python', 'LangChain', 'OpenAI']
  },
  {
    id: 5,
    image: 'project5.jpg',
    number: '05',
    title: 'Formatador Avançado de Planilhas',
    category: 'Automação',
    description: 'Ferramenta de automação para processamento e formatação de grandes volumes de dados em planilhas Excel com validação e transformação de dados.',
    technologies: ['Python', 'Pandas', 'OpenPyXL', 'Data Processing', 'Excel Automation']
  },
  {
    id: 6,
    image: 'project6.jpg',
    number: '06',
    title: 'Migração de Database Produção',
    category: 'DevOps',
    description: 'Migração de banco de dados de produção com zero downtime, incluindo containerização, backup estratégico e rollback automático.',
    technologies: ['Docker', 'PostgreSQL', 'Migration Scripts', 'Backup Strategy', 'CI/CD']
  }
];

export const websites = [
  {
    id: 1,
    title: 'Creative Envelopamento',
    company: 'Creative Envelopamento Automotivo',
    description: 'Landing page moderna e responsiva para empresa de envelopamento automotivo, com galeria de projetos e formulário de contato integrado.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    features: [
      'Design moderno e atrativo',
      'Galeria de projetos',
      'Formulário de contato',
      'Otimizado para SEO',
      'Totalmente responsivo'
    ],
    link: '#',
    badge: 'Landing Page'
  },
  {
    id: 2,
    title: 'WhatsApp Business API',
    company: 'Calculadora de Custos',
    description: 'Calculadora interativa para estimar custos de implementação da WhatsApp Business API, com análise de ROI e comparativo de planos.',
    technologies: ['React', 'JavaScript', 'API Integration', 'UI/UX'],
    features: [
      'Cálculo automático de custos',
      'Análise de ROI',
      'Comparativo de planos',
      'Interface intuitiva',
      'Exportação de relatórios'
    ],
    link: '#',
    badge: 'Calculadora'
  }
];
