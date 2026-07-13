var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_vite = require("vite");

// src/server/db.ts
var fs = __toESM(require("fs"), 1);
var path = __toESM(require("path"), 1);
var DB_DIR = path.join(process.cwd(), "data");
var DB_FILE = path.join(DB_DIR, "db.json");
function initDb() {
  if (!fs.existsSync(DB_DIR)) {
    fs.mkdirSync(DB_DIR, { recursive: true });
  }
  if (fs.existsSync(DB_FILE)) {
    try {
      const content = fs.readFileSync(DB_FILE, "utf-8");
      return JSON.parse(content);
    } catch (e) {
      console.error("Erro ao carregar o banco de dados. Criando novo...", e);
    }
  }
  const defaultVacancies = [
    {
      id: "vaga-1",
      title: "Desenvolvedor Full Stack React/Node",
      description: "Estamos em busca de um Desenvolvedor Full Stack para se juntar ao nosso time de tecnologia e nos ajudar a construir produtos incr\xEDveis, r\xE1pidos e de alto desempenho.",
      responsibilities: [
        "Desenvolver novas funcionalidades no frontend utilizando React e Tailwind CSS.",
        "Desenvolver e manter APIs robustas em Node.js com Express.",
        "Otimizar o desempenho e escalabilidade da aplica\xE7\xE3o.",
        "Garantir a qualidade do c\xF3digo atrav\xE9s de testes e boas pr\xE1ticas de desenvolvimento.",
        "Colaborar com designers de produto e engenheiros na defini\xE7\xE3o t\xE9cnica de novas features."
      ],
      requirements: [
        "Experi\xEAncia s\xF3lida com React, TypeScript, Node.js e SQL.",
        "Dom\xEDnio de estiliza\xE7\xE3o responsiva com Tailwind CSS.",
        "Conhecimento em boas pr\xE1ticas de APIs RESTful e seguran\xE7a.",
        "Habilidade de comunica\xE7\xE3o clara e trabalho em equipe.",
        "Familiaridade com ferramentas de versionamento de c\xF3digo (Git)."
      ],
      benefits: [
        "Vale Refei\xE7\xE3o / Vale Alimenta\xE7\xE3o de R$ 950,00 por m\xEAs.",
        "Plano de Sa\xFAde e Odontol\xF3gico Bradesco Sa\xFAde 100% custeado pela empresa.",
        "Aux\xEDlio Home Office de R$ 250,00 mensais.",
        "Hor\xE1rio flex\xEDvel e folga de anivers\xE1rio (Day Off).",
        "Aux\xEDlio educa\xE7\xE3o para certifica\xE7\xF5es, cursos e eventos de tecnologia."
      ],
      city: "S\xE3o Paulo",
      state: "SP",
      modality: "Remoto",
      salaryRange: "R$ 8.000,00 a R$ 12.000,00",
      slots: 2,
      status: "Ativa",
      createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1e3).toISOString()
      // 15 days ago
    },
    {
      id: "vaga-2",
      title: "Motion Designer & Editor de V\xEDdeo",
      description: "Buscamos um profissional criativo e din\xE2mico, apaixonado por contar hist\xF3rias e criar anima\xE7\xF5es envolventes que expressem a identidade visual da nossa marca em m\xEDdias digitais.",
      responsibilities: [
        "Criar anima\xE7\xF5es (motion graphics) para campanhas de marketing, redes sociais e v\xEDdeos institucionais.",
        "Editar v\xEDdeos de alta qualidade, garantindo ritmo, harmonia sonora e excelente narrativa visual.",
        "Desenvolver conceitos visuais inovadores alinhados com o branding da empresa.",
        "Criar pe\xE7as de design est\xE1ticas de apoio para m\xEDdias sociais (Adobe Photoshop e Illustrator).",
        "Trabalhar em colabora\xE7\xE3o com o time de marketing e redatores para estruturar os roteiros visuais."
      ],
      requirements: [
        "Dom\xEDnio avan\xE7ado de Adobe After Effects, Premiere Pro, Photoshop e Illustrator.",
        "Experi\xEAncia robusta com Motion Design (anima\xE7\xE3o de textos, vetores, infogr\xE1ficos).",
        "Portf\xF3lio comprovado contendo trabalhos de edi\xE7\xE3o de v\xEDdeo e motion graphics de alto n\xEDvel.",
        "Conhecimento de sonoriza\xE7\xE3o (sound design) e mixagem b\xE1sica de \xE1udio.",
        "Organiza\xE7\xE3o e capacidade de gerenciar m\xFAltiplos prazos simultaneamente."
      ],
      benefits: [
        "Vale Refei\xE7\xE3o / Vale Alimenta\xE7\xE3o de R$ 900,00 por m\xEAs.",
        "Plano de Sa\xFAde SulAm\xE9rica sem coparticipa\xE7\xE3o.",
        "Gympass (Acesso a academias e bem-estar).",
        "Vale Transporte (para dias presenciais).",
        "Participa\xE7\xE3o nos Lucros e Resultados (PLR) semestral."
      ],
      city: "Curitiba",
      state: "PR",
      modality: "H\xEDbrido",
      salaryRange: "R$ 5.500,00 a R$ 7.500,00",
      slots: 1,
      status: "Ativa",
      createdAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1e3).toISOString()
      // 8 days ago
    },
    {
      id: "vaga-3",
      title: "Analista de Recursos Humanos S\xEAnior",
      description: "Procuramos um profissional s\xEAnior para gerenciar nossos processos de atra\xE7\xE3o de talentos, desenvolvimento humano, gest\xE3o de clima e apoio \xE0s lideran\xE7as nas decis\xF5es estrat\xE9gicas de pessoas.",
      responsibilities: [
        "Conduzir processos seletivos de ponta a ponta para cargos de lideran\xE7a, administrativos e t\xE9cnicos.",
        "Elaborar e executar planos de onboarding e integra\xE7\xE3o de novos colaboradores.",
        "Coordenar avalia\xE7\xF5es de desempenho peri\xF3dicas e apoiar na estrutura\xE7\xE3o de PDI (Plano de Desenvolvimento Individual).",
        "Monitorar indicadores de clima organizacional, turnover e propor melhorias de cultura.",
        "Apoiar e orientar gestores e diretores sobre gest\xE3o de equipes e resolu\xE7\xE3o de conflitos."
      ],
      requirements: [
        "Gradua\xE7\xE3o completa em Psicologia, Administra\xE7\xE3o ou Recursos Humanos.",
        "Experi\xEAncia consolidada em cargos generalistas de RH ou Business Partner.",
        "Familiaridade com plataformas ATS e ferramentas de triagem inteligente.",
        "Excelente comunica\xE7\xE3o verbal, escrita e intelig\xEAncia emocional.",
        "P\xF3s-gradua\xE7\xE3o ou especializa\xE7\xE3o em Gest\xE3o de Pessoas \xE9 um diferencial."
      ],
      benefits: [
        "Vale Refei\xE7\xE3o de R$ 40,00 por dia \xFAtil.",
        "Plano de Sa\xFAde Unimed Nacional.",
        "Seguro de Vida em Grupo.",
        "Aux\xEDlio Creche para pais com filhos pequenos.",
        "Desconto em cursos de p\xF3s-gradua\xE7\xE3o e escolas de idiomas parceiras."
      ],
      city: "Belo Horizonte",
      state: "MG",
      modality: "Presencial",
      salaryRange: "R$ 6.500,00 a R$ 8.500,00",
      slots: 1,
      status: "Ativa",
      createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1e3).toISOString()
      // 3 days ago
    }
  ];
  const defaultCandidates = [
    {
      id: "cand-1",
      vacancyId: "vaga-2",
      vacancyTitle: "Motion Designer & Editor de V\xEDdeo",
      name: "Thiago Martins Silveira",
      email: "thiago.motion@gmail.com",
      phone: "(41) 99876-5432",
      city: "Curitiba",
      state: "PR",
      birthDate: "1995-08-22",
      education: "Superior Completo em Design Gr\xE1fico (UFPR)",
      desiredRole: "Motion Designer S\xEAnior",
      salaryExpectation: "6500",
      availability: "Imediata",
      linkedin: "https://linkedin.com/in/thiago-motion-design",
      portfolio: "https://vimeo.com/thiago-motion",
      github: "https://github.com/thiagomotion",
      experiences: [
        {
          company: "Est\xFAdio Pixel Criativo",
          role: "Motion Designer Pleno",
          period: "Jan/2021 a Atualmente",
          description: "Cria\xE7\xE3o de anima\xE7\xF5es e motion graphics para grandes marcas nacionais, edi\xE7\xE3o de campanhas de lan\xE7amentos de produtos e sound design avan\xE7ado em comerciais."
        },
        {
          company: "Ag\xEAncia Digital Spark",
          role: "Editor de V\xEDdeo",
          period: "Mar/2018 a Dez/2020",
          description: "Edi\xE7\xE3o di\xE1ria de v\xEDdeos para m\xEDdias digitais, canais de YouTube e campanhas pagas de e-commerce. Trabalho com Premiere Pro e After Effects."
        }
      ],
      courses: [
        "After Effects Avan\xE7ado - Brainstorm Academy",
        "Sound Design para V\xEDdeos Comerciais - Domestika",
        "Cinema 4D Avan\xE7ado para Motion Design - Motion Design School"
      ],
      skills: ["Adobe After Effects", "Adobe Premiere Pro", "Photoshop", "Illustrator", "Cinema 4D", "Sound Design", "Roteiriza\xE7\xE3o"],
      languages: [
        { language: "Portugu\xEAs", level: "Fluente" },
        { language: "Ingl\xEAs", level: "Avan\xE7ado" }
      ],
      coverLetter: "Prezada equipe de RH, tenho acompanhado o crescimento da empresa e me identifico muito com a qualidade dos materiais publicados. Acredito que minha experi\xEAncia de mais de 7 anos em edi\xE7\xE3o de v\xEDdeo e motion graphics ajudar\xE1 a elevar ainda mais o n\xEDvel dos canais digitais de voc\xEAs. Estou pronto para come\xE7ar imediatamente!",
      resumeFileName: "thiago_martins_cv.pdf",
      resumeText: "Thiago Martins Silveira, residente em Curitiba PR. Formado em Design Gr\xE1fico pela UFPR. Especialista em Adobe After Effects e Premiere Pro, com vasta bagagem de cria\xE7\xE3o visual para redes sociais e Sound Design.",
      createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1e3 - 5 * 60 * 60 * 1e3).toISOString(),
      // 2 days and 5 hours ago
      status: "Entrevista",
      favorite: true,
      stars: 5,
      tags: ["Motion Designer", "Premiere", "After Effects", "Curitiba", "Disponibilidade Imediata"],
      notes: "Thiago demonstrou excelente desenvoltura no primeiro contato por telefone. Seu portf\xF3lio no Vimeo \xE9 extremamente qualificado. Entrevista t\xE9cnica com o coordenador de cria\xE7\xE3o agendada para quarta-feira.",
      history: [
        {
          id: "log-1-1",
          date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1e3).toISOString(),
          user: "Sistema IA",
          action: "An\xE1lise de Curr\xEDculo",
          details: "Curr\xEDculo processado automaticamente pela IA. Compatibilidade de 92% detectada."
        },
        {
          id: "log-1-2",
          date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1e3).toISOString(),
          user: "Mariana Costa (RH)",
          action: "Altera\xE7\xE3o de Status",
          details: "Status alterado de Novo para Em an\xE1lise. Adicionada observa\xE7\xE3o interna."
        },
        {
          id: "log-1-3",
          date: new Date(Date.now() - 6 * 60 * 60 * 1e3).toISOString(),
          user: "Mariana Costa (RH)",
          action: "Agendamento de Entrevista",
          details: "Entrevista agendada para 15/07/2026 \xE0s 14:00. Status alterado para Entrevista."
        }
      ],
      aiScore: 92,
      aiReason: `\u2714 Possui excelente experi\xEAncia com Adobe Premiere Pro e After Effects.
\u2714 Portf\xF3lio focado exatamente no escopo da vaga.
\u2714 Reside em Curitiba (PR), na mesma cidade da vaga h\xEDbrida.
\u2714 Possui forma\xE7\xE3o acad\xEAmica superior em Design Gr\xE1fico.
\u2716 Dom\xEDnio inicial de modelagem 3D (Cinema 4D), n\xE3o sendo um requisito mandat\xF3rio, mas excelente diferencial.`,
      aiSummary: "Candidato com mais de 7 anos de experi\xEAncia consolidada em edi\xE7\xE3o de v\xEDdeo e anima\xE7\xE3o (Motion Design). Formado em Design Gr\xE1fico pela UFPR, apresenta dom\xEDnio avan\xE7ado de toda a su\xEDte Adobe (Premiere, After Effects, Photoshop, Illustrator) e sound design corporativo. Demonstra perfil proativo, criativo e foco em resultados.",
      aiInsights: {
        strengths: [
          "Dom\xEDnio profundo de Premiere Pro e After Effects.",
          "Portf\xF3lio comercial excelente com grandes marcas.",
          "Forma\xE7\xE3o acad\xEAmica em Design Gr\xE1fico (UFPR)."
        ],
        attentionPoints: [
          "Expectativa salarial (R$ 6.500,00) est\xE1 na faixa m\xE9dia alta proposta para a vaga.",
          "Pouca experi\xEAncia formal em grandes ag\xEAncias internacionais, focado em est\xFAdios de m\xE9dio porte."
        ],
        areasOfExpertise: ["Motion Graphics", "Edi\xE7\xE3o de V\xEDdeo", "Sound Design"],
        skillsList: ["After Effects", "Premiere Pro", "Photoshop", "Illustrator", "Cinema 4D"],
        suggestion: "Este candidato possui alta compatibilidade com a vaga de Motion Designer. Demonstra s\xF3lida experi\xEAncia com Adobe Premiere, After Effects e Photoshop, al\xE9m de conhecimento em Motion Graphics. Recomenda-se avan\xE7ar para a fase de testes pr\xE1ticos e entrevista t\xE9cnica."
      }
    },
    {
      id: "cand-2",
      vacancyId: "vaga-1",
      vacancyTitle: "Desenvolvedor Full Stack React/Node",
      name: "Juliana Pires de Almeida",
      email: "juliana.pires@outlook.com",
      phone: "(11) 98765-4321",
      city: "S\xE3o Paulo",
      state: "SP",
      birthDate: "1992-11-04",
      education: "P\xF3s-gradua\xE7\xE3o em Engenharia de Software (FIAP)",
      desiredRole: "Desenvolvedor Full Stack S\xEAnior",
      salaryExpectation: "11000",
      availability: "15 dias \xFAteis",
      linkedin: "https://linkedin.com/in/julianapires-tech",
      portfolio: "https://juliana.dev",
      github: "https://github.com/jupires",
      experiences: [
        {
          company: "Fintech BankSeg",
          role: "Desenvolvedora Full Stack Plena",
          period: "Mai/2022 a Atualmente",
          description: "Lideran\xE7a t\xE9cnica na reestrutura\xE7\xE3o do portal do cliente utilizando React, Next.js e TypeScript. Desenvolvimento de microsservi\xE7os seguros em Node.js com banco de dados PostgreSQL."
        },
        {
          company: "Tech Solutions SA",
          role: "Desenvolvedora Frontend",
          period: "Jul/2019 a Abr/2022",
          description: "Cria\xE7\xE3o de dashboards din\xE2micos responsivos, consumo de APIs RESTful e integra\xE7\xE3o com ferramentas de an\xE1lise. Redu\xE7\xE3o de 30% no tempo de carregamento da aplica\xE7\xE3o."
        }
      ],
      courses: [
        "Forma\xE7\xE3o Node.js Avan\xE7ado - Alura",
        "Arquitetura de Microsservi\xE7os e Kubernetes - Udemy",
        "Clean Code e Design Patterns - TechCourse"
      ],
      skills: ["React", "Node.js", "TypeScript", "Next.js", "PostgreSQL", "Docker", "REST APIs", "Git", "Clean Code"],
      languages: [
        { language: "Portugu\xEAs", level: "Fluente" },
        { language: "Ingl\xEAs", level: "Avan\xE7ado" },
        { language: "Espanhol", level: "B\xE1sico" }
      ],
      coverLetter: "Ol\xE1! Sou engenheira de software com quase 7 anos de atua\xE7\xE3o pr\xE1tica em desenvolvimento de produtos digitais robustos e de alta escala. Meu foco atual \xE9 na constru\xE7\xE3o de solu\xE7\xF5es perform\xE1ticas usando o ecossistema React, TypeScript e Node.js. Adoro resolver problemas complexos e trabalhar em equipes focadas em inova\xE7\xE3o cont\xEDnua.",
      resumeFileName: "juliana_pires_cv.pdf",
      resumeText: "Juliana Pires de Almeida, desenvolvedora full stack de S\xE3o Paulo. Experi\xEAncia de 7 anos em React, Node, Next.js, TypeScript e SQL. Especialista em engenharia de software pela FIAP.",
      createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1e3 - 2 * 60 * 60 * 1e3).toISOString(),
      // 3 days ago
      status: "Em an\xE1lise",
      favorite: false,
      stars: 4,
      tags: ["React", "Node.js", "TypeScript", "PostgreSQL", "Home Office"],
      notes: "Curr\xEDculo t\xE9cnico formid\xE1vel. Juliana possui experi\xEAncia com Fintechs e sistemas financeiros que exigem alta seguran\xE7a e performance. Perfil muito compat\xEDvel com nossos novos projetos de backend.",
      history: [
        {
          id: "log-2-1",
          date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1e3).toISOString(),
          user: "Sistema IA",
          action: "An\xE1lise de Curr\xEDculo",
          details: "Curr\xEDculo processado automaticamente pela IA. Compatibilidade de 96% detectada."
        }
      ],
      aiScore: 96,
      aiReason: `\u2714 Possui ampla experi\xEAncia pr\xE1tica com React, Node.js e TypeScript.
\u2714 P\xF3s-graduada em Engenharia de Software pela FIAP.
\u2714 J\xE1 atuou em Fintech, alinhada com requisitos de alta performance.
\u2714 Ingl\xEAs Avan\xE7ado para colabora\xE7\xE3o internacional.
\u2716 Requer 15 dias para in\xEDcio de atividades devido ao aviso pr\xE9vio na atual empresa.`,
      aiSummary: "Desenvolvedora de software experiente com s\xF3lida trajet\xF3ria na constru\xE7\xE3o de plataformas web escal\xE1veis. Apresenta profundo dom\xEDnio do stack React + Node.js e pr\xE1ticas avan\xE7adas de engenharia como Docker, Clean Code e modelagem de banco de dados relacional. Perfil t\xE9cnico excelente e excelente comunica\xE7\xE3o.",
      aiInsights: {
        strengths: [
          "Profundo dom\xEDnio t\xE9cnico das tecnologias listadas na vaga.",
          "Experi\xEAncia consolidada em ambientes de alta exig\xEAncia (Fintech).",
          "S\xF3lido conhecimento de padr\xF5es de arquitetura (Clean Code, Microsservi\xE7os)."
        ],
        attentionPoints: [
          "Disponibilidade de in\xEDcio n\xE3o imediata (15 dias \xFAteis de aviso pr\xE9vio).",
          "Pretens\xE3o salarial (R$ 11.000,00) no topo da faixa or\xE7ada."
        ],
        areasOfExpertise: ["Desenvolvimento Full Stack", "Arquitetura Web", "Bancos de Dados"],
        skillsList: ["React", "Node.js", "TypeScript", "Next.js", "PostgreSQL", "Docker"],
        suggestion: "Juliana \xE9 uma candidata excepcional de n\xEDvel s\xEAnior. Sua bagagem t\xE9cnica se alinha perfeitamente com os desafios atuais da vaga. Sugere-se avan\xE7ar imediatamente para entrevista t\xE9cnica."
      }
    },
    {
      id: "cand-3",
      vacancyId: "vaga-1",
      vacancyTitle: "Desenvolvedor Full Stack React/Node",
      name: "Mateus Henrique Santos",
      email: "mateus.henrique@gmail.com",
      phone: "(31) 99123-4567",
      city: "Belo Horizonte",
      state: "MG",
      birthDate: "1999-03-15",
      education: "Gradua\xE7\xE3o Completa em Sistemas de Informa\xE7\xE3o (PUC Minas)",
      desiredRole: "Desenvolvedor Full Stack J\xFAnior/Pleno",
      salaryExpectation: "5500",
      availability: "Imediata",
      linkedin: "https://linkedin.com/in/mateus-henrique-dev",
      portfolio: "https://mateusdev.io",
      github: "https://github.com/mateusdev",
      experiences: [
        {
          company: "Ag\xEAncia Web DevClick",
          role: "Desenvolvedor Full Stack J\xFAnior",
          period: "Fev/2023 a Atualmente",
          description: "Cria\xE7\xE3o de landing pages, pain\xE9is administrativos e integra\xE7\xF5es de e-commerce utilizando React, Node.js e PostgreSQL. Manuten\xE7\xE3o de bancos de dados."
        }
      ],
      courses: [
        "Bootcamp Web Fullstack - Rocketseat",
        "Desenvolvimento Moderno com TypeScript - Udemy"
      ],
      skills: ["React", "Node.js", "TypeScript", "Express", "Tailwind CSS", "Git", "PostgreSQL"],
      languages: [
        { language: "Portugu\xEAs", level: "Fluente" },
        { language: "Ingl\xEAs", level: "Intermedi\xE1rio" }
      ],
      coverLetter: "Prezada equipe de tecnologia, tenho grande admira\xE7\xE3o pelas solu\xE7\xF5es desenvolvidas por voc\xEAs. Atuo h\xE1 pouco mais de 2 anos como desenvolvedor full stack, lidando diariamente com React, Express e Tailwind CSS. Acredito que minha dedica\xE7\xE3o a aprender novas tecnologias e minha dedica\xE7\xE3o ao trabalho em equipe me tornam uma excelente adi\xE7\xE3o ao time.",
      resumeFileName: "mateus_henrique_cv.pdf",
      resumeText: "Mateus Henrique Santos, Belo Horizonte MG. Bacharel em Sistemas de Informa\xE7\xE3o pela PUC Minas. Atua\xE7\xE3o com React, Node, Express, Tailwind e PostgreSQL. Git e GitHub.",
      createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1e3 - 10 * 60 * 60 * 1e3).toISOString(),
      // 4 days ago
      status: "Novo",
      favorite: false,
      stars: 3,
      tags: ["React", "Node.js", "Belo Horizonte", "Disponibilidade Imediata"],
      notes: "Mateus se enquadra mais em uma vaga de desenvolvedor j\xFAnior. Possui boa base acad\xEAmica e portf\xF3lio pr\xE1tico de projetos pessoais no GitHub. Pretens\xE3o salarial de acordo com o n\xEDvel.",
      history: [
        {
          id: "log-3-1",
          date: new Date(Date.now() - 4 * 24 * 60 * 60 * 1e3).toISOString(),
          user: "Sistema IA",
          action: "An\xE1lise de Curr\xEDculo",
          details: "Curr\xEDculo processado automaticamente pela IA. Compatibilidade de 78% detectada."
        }
      ],
      aiScore: 78,
      aiReason: `\u2714 Conhece as principais tecnologias exigidas na vaga (React, Node, Tailwind).
\u2714 Graduado em TI pela renomada PUC Minas.
\u2714 Disponibilidade imediata para come\xE7ar.
\u2716 Menor tempo de experi\xEAncia profissional corporativa do que o desejado (2 anos vs 5 desejados).
\u2716 Ingl\xEAs intermedi\xE1rio, o que pode requerer acompanhamento em projetos globais.`,
      aiSummary: "Candidato promissor com s\xF3lida base acad\xEAmica em Sistemas de Informa\xE7\xE3o pela PUC Minas. Demonstra profici\xEAncia em frameworks web como React, Node.js e estiliza\xE7\xE3o com Tailwind CSS. Possui portf\xF3lio pr\xE1tico e busca crescimento cont\xEDnuo.",
      aiInsights: {
        strengths: [
          "Forma\xE7\xE3o acad\xEAmica s\xF3lida.",
          "Conhecimento do stack tecnol\xF3gico completo da vaga.",
          "Disponibilidade imediata e pretens\xE3o realista."
        ],
        attentionPoints: [
          "Tempo de experi\xEAncia corporativa \xE9 de apenas 2 anos.",
          "N\xE3o apresenta experi\xEAncia consolidada com arquitetura de microsservi\xE7os."
        ],
        areasOfExpertise: ["Desenvolvimento Frontend", "APIs simples Node.js"],
        skillsList: ["React", "Node.js", "Express", "Tailwind CSS", "PostgreSQL"],
        suggestion: "Mateus \xE9 um \xF3timo candidato para posi\xE7\xF5es de n\xEDvel j\xFAnior ou pleno inicial. Caso a empresa queira desenvolver novos talentos, ele demonstra excelente potencial t\xE9cnico e proatividade."
      }
    }
  ];
  const dbData = {
    vacancies: defaultVacancies,
    candidates: defaultCandidates
  };
  fs.writeFileSync(DB_FILE, JSON.stringify(dbData, null, 2), "utf-8");
  return dbData;
}
var database = initDb();
function saveToDisk() {
  fs.writeFileSync(DB_FILE, JSON.stringify(database, null, 2), "utf-8");
}
var db = {
  // Vacancies
  getVacancies() {
    return database.vacancies;
  },
  getVacancyById(id) {
    return database.vacancies.find((v) => v.id === id);
  },
  saveVacancy(vacancy) {
    const index = database.vacancies.findIndex((v) => v.id === vacancy.id);
    if (index >= 0) {
      database.vacancies[index] = { ...vacancy };
    } else {
      database.vacancies.push(vacancy);
    }
    saveToDisk();
    return vacancy;
  },
  deleteVacancy(id) {
    const lengthBefore = database.vacancies.length;
    database.vacancies = database.vacancies.filter((v) => v.id !== id);
    const deleted = database.vacancies.length < lengthBefore;
    if (deleted) {
      saveToDisk();
    }
    return deleted;
  },
  // Candidates
  getCandidates() {
    return database.candidates.map((cand) => {
      const vacancy = database.vacancies.find((v) => v.id === cand.vacancyId);
      return {
        ...cand,
        vacancyTitle: vacancy ? vacancy.title : cand.desiredRole
      };
    });
  },
  getCandidateById(id) {
    const cand = database.candidates.find((c) => c.id === id);
    if (!cand) return void 0;
    const vacancy = database.vacancies.find((v) => v.id === cand.vacancyId);
    return {
      ...cand,
      vacancyTitle: vacancy ? vacancy.title : cand.desiredRole
    };
  },
  saveCandidate(candidate) {
    const index = database.candidates.findIndex((c) => c.id === candidate.id);
    if (index >= 0) {
      database.candidates[index] = { ...candidate };
    } else {
      database.candidates.push(candidate);
    }
    saveToDisk();
    return candidate;
  },
  deleteCandidate(id) {
    const lengthBefore = database.candidates.length;
    database.candidates = database.candidates.filter((c) => c.id !== id);
    const deleted = database.candidates.length < lengthBefore;
    if (deleted) {
      saveToDisk();
    }
    return deleted;
  },
  // Dashboard Stats
  getStats() {
    const candidates = database.candidates;
    const vacancies = database.vacancies;
    const todayStr = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    const receivedToday = candidates.filter((cand) => {
      return cand.createdAt.startsWith(todayStr);
    }).length;
    const newCandidates = candidates.filter((c) => c.status === "Novo").length;
    const inAnalysis = candidates.filter((c) => c.status === "Em an\xE1lise").length;
    const interview = candidates.filter((c) => c.status === "Entrevista").length;
    const approved = candidates.filter((c) => c.status === "Aprovado").length;
    const rejected = candidates.filter((c) => c.status === "Reprovado").length;
    const favorites = candidates.filter((c) => c.favorite).length;
    const candidatesByVacancy = vacancies.map((v) => {
      const count = candidates.filter((c) => c.vacancyId === v.id).length;
      return {
        vacancyId: v.id,
        title: v.title,
        count
      };
    });
    return {
      totalCandidates: candidates.length,
      candidatesByVacancy,
      newCandidatesCount: newCandidates,
      receivedTodayCount: receivedToday,
      favoriteCandidatesCount: favorites,
      inAnalysisCount: inAnalysis,
      interviewCount: interview,
      approvedCount: approved,
      rejectedCount: rejected
    };
  }
};

// src/server/gemini.ts
var import_genai = require("@google/genai");
var aiClient = null;
function getAiClient() {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (apiKey && apiKey !== "MY_GEMINI_API_KEY") {
      aiClient = new import_genai.GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build"
          }
        }
      });
    }
  }
  return aiClient;
}
var resumeResponseSchema = {
  type: import_genai.Type.OBJECT,
  properties: {
    name: { type: import_genai.Type.STRING, description: "Nome completo do candidato." },
    email: { type: import_genai.Type.STRING, description: "E-mail de contato." },
    phone: { type: import_genai.Type.STRING, description: "Telefone de contato formatado." },
    city: { type: import_genai.Type.STRING, description: "Cidade de resid\xEAncia." },
    state: { type: import_genai.Type.STRING, description: "Estado de resid\xEAncia (sigla, ex: SP)." },
    desiredRole: { type: import_genai.Type.STRING, description: "Cargo pretendido ou \xE1rea de atua\xE7\xE3o desejada." },
    education: { type: import_genai.Type.STRING, description: "\xDAltimo n\xEDvel de escolaridade completo com institui\xE7\xE3o." },
    salaryExpectation: { type: import_genai.Type.STRING, description: "Pretens\xE3o salarial (apenas n\xFAmeros ou faixa)." },
    availability: { type: import_genai.Type.STRING, description: "Disponibilidade para in\xEDcio (ex: Imediata, 15 dias)." },
    linkedin: { type: import_genai.Type.STRING, description: "Link completo do perfil do LinkedIn." },
    github: { type: import_genai.Type.STRING, description: "Link completo do perfil do GitHub." },
    portfolio: { type: import_genai.Type.STRING, description: "Link completo do portf\xF3lio profissional." },
    experiences: {
      type: import_genai.Type.ARRAY,
      items: {
        type: import_genai.Type.OBJECT,
        properties: {
          company: { type: import_genai.Type.STRING, description: "Nome da empresa." },
          role: { type: import_genai.Type.STRING, description: "Cargo desempenhado." },
          period: { type: import_genai.Type.STRING, description: "Per\xEDodo trabalhado (ex: Jan/2020 a Out/2022)." },
          description: { type: import_genai.Type.STRING, description: "Resumo das realiza\xE7\xF5es e responsabilidades." }
        },
        required: ["company", "role", "period"]
      }
    },
    courses: {
      type: import_genai.Type.ARRAY,
      items: { type: import_genai.Type.STRING },
      description: "Cursos extras, especializa\xE7\xF5es e workshops importantes."
    },
    skills: {
      type: import_genai.Type.ARRAY,
      items: { type: import_genai.Type.STRING },
      description: "Compet\xEAncias t\xE9cnicas principais (Hard Skills) e comportamentais (Soft Skills)."
    },
    languages: {
      type: import_genai.Type.ARRAY,
      items: {
        type: import_genai.Type.OBJECT,
        properties: {
          language: { type: import_genai.Type.STRING, description: "Nome do idioma." },
          level: { type: import_genai.Type.STRING, description: "N\xEDvel (B\xE1sico, Intermedi\xE1rio, Avan\xE7ado ou Fluente)." }
        },
        required: ["language", "level"]
      }
    },
    coverLetter: { type: import_genai.Type.STRING, description: "Uma carta de apresenta\xE7\xE3o resumida gerada com base no perfil do candidato se n\xE3o estiver expl\xEDcita." },
    aiSummary: { type: import_genai.Type.STRING, description: "Resumo profissional focado em pontos fortes, \xE1rea de atua\xE7\xE3o e compet\xEAncias principais." },
    aiScore: { type: import_genai.Type.INTEGER, description: "Nota de compatibilidade de 0 a 100 com base nos requisitos da vaga." },
    aiReason: { type: import_genai.Type.STRING, description: "Explica\xE7\xE3o detalhada da pontua\xE7\xE3o, listando pr\xF3s com \u2714 e contras com \u2716." },
    tags: {
      type: import_genai.Type.ARRAY,
      items: { type: import_genai.Type.STRING },
      description: "Etiquetas/Tags para pesquisa r\xE1pida (ex: React, Designer, Ingl\xEAs, Remoto)."
    },
    aiInsights: {
      type: import_genai.Type.OBJECT,
      properties: {
        strengths: { type: import_genai.Type.ARRAY, items: { type: import_genai.Type.STRING }, description: "Lista de 3 a 4 pontos fortes t\xE9cnicos ou de carreira." },
        attentionPoints: { type: import_genai.Type.ARRAY, items: { type: import_genai.Type.STRING }, description: "Pontos de aten\xE7\xE3o ou requisitos faltantes relevantes." },
        areasOfExpertise: { type: import_genai.Type.ARRAY, items: { type: import_genai.Type.STRING }, description: "\xC1reas em que o candidato domina." },
        skillsList: { type: import_genai.Type.ARRAY, items: { type: import_genai.Type.STRING }, description: "Tecnologias dominadas pelo candidato." },
        suggestion: { type: import_genai.Type.STRING, description: "Parecer final do recrutador de IA (Recomenda-se avan\xE7ar, etc.)." }
      },
      required: ["strengths", "attentionPoints", "areasOfExpertise", "skillsList", "suggestion"]
    }
  },
  required: ["name", "email", "phone", "city", "state", "desiredRole", "education", "experiences", "skills", "aiSummary", "aiScore", "aiReason", "tags", "aiInsights"]
};
async function parseResumeAndScore(resumeText, resumeFileName, vacancy, fileBase64) {
  const ai = getAiClient();
  const vacancyContext = vacancy ? `
VAGA ALVO:
T\xEDtulo: ${vacancy.title}
Descri\xE7\xE3o: ${vacancy.description}
Responsabilidades: ${vacancy.responsibilities.join(", ")}
Requisitos: ${vacancy.requirements.join(", ")}
Cidade: ${vacancy.city}
Estado: ${vacancy.state}
Modalidade: ${vacancy.modality}
` : "Candidatura espont\xE2nea (sem vaga vinculada espec\xEDfica)";
  if (!ai) {
    console.warn("GEMINI_API_KEY n\xE3o configurada ou inv\xE1lida. Utilizando analisador de conting\xEAncia.");
    return generateContingencyParse(resumeText, resumeFileName, vacancy);
  }
  try {
    let contents = [];
    if (fileBase64 && fileBase64.mimeType === "application/pdf") {
      contents.push({
        inlineData: {
          data: fileBase64.data,
          mimeType: fileBase64.mimeType
        }
      });
    }
    const prompt = `
Voc\xEA \xE9 o Recrutador Inteligente oficial de nossa empresa.
Seu trabalho \xE9 ler o curr\xEDculo fornecido, extrair todas as informa\xE7\xF5es do candidato nos campos corretos do JSON de retorno, estruturar seu perfil completo, e avaliar sua compatibilidade com a vaga abaixo indicada (caso haja).

---
${vacancyContext}
---

Curr\xEDculo fornecido (Texto Extra\xEDdo se houver):
${resumeText}

Por favor, fa\xE7a uma an\xE1lise minuciosa. Extraia todas as experi\xEAncias profissionais estruturadas, compet\xEAncias, e dados pessoais.
Gere um parecer profissional de IA completo no campo 'aiInsights' e defina de 0 a 100 a compatibilidade ('aiScore') com a vaga. No campo 'aiReason', formate as conquistas do candidato compat\xEDveis com \u2714 e o que falta ou \xE9 ponto de aten\xE7\xE3o com \u2716.
Retorne um objeto JSON estritamente mapeado com o esquema de resposta fornecido.
`;
    contents.push(prompt);
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents,
      config: {
        responseMimeType: "application/json",
        responseSchema: resumeResponseSchema,
        temperature: 0.1
      }
    });
    const resultText = response.text;
    if (resultText) {
      return JSON.parse(resultText.trim());
    } else {
      throw new Error("Retorno vazio do Gemini API");
    }
  } catch (error) {
    console.error("Erro na chamada do Gemini API:", error);
    return generateContingencyParse(resumeText, resumeFileName, vacancy);
  }
}
async function searchCandidatesAi(candidates, searchQuery) {
  const ai = getAiClient();
  if (!ai || candidates.length === 0) {
    const q = searchQuery.toLowerCase();
    return candidates.map((c) => {
      let score = 0;
      let matchReason = "";
      const name = c.name.toLowerCase();
      const skills = c.skills.map((s) => s.toLowerCase()).join(" ");
      const city = c.city.toLowerCase();
      const role = c.desiredRole.toLowerCase();
      if (q.includes(city) && city.length > 2) {
        score += 30;
        matchReason += `\u2022 Reside em ${c.city}. `;
      }
      c.skills.forEach((skill) => {
        if (q.includes(skill.toLowerCase())) {
          score += 15;
          matchReason += `\u2022 Domina ${skill}. `;
        }
      });
      if (q.includes(role) || role.includes(q)) {
        score += 40;
        matchReason += `\u2022 Atua como ${c.desiredRole}. `;
      }
      if (score === 0 && (name.includes(q) || c.email.toLowerCase().includes(q))) {
        score += 50;
        matchReason += `\u2022 Nome ou e-mail correspondente. `;
      }
      return { id: c.id, matchReason: matchReason || "Compatibilidade geral encontrada.", score: Math.min(100, score || 20) };
    }).filter((item) => item.score > 20).sort((a, b) => b.score - a.score);
  }
  try {
    const candidatesSimplified = candidates.map((c) => ({
      id: c.id,
      name: c.name,
      desiredRole: c.desiredRole,
      city: c.city,
      state: c.state,
      skills: c.skills,
      experiences: c.experiences.map((e) => `${e.role} na empresa ${e.company} (${e.period})`),
      languages: c.languages.map((l) => `${l.language} ${l.level}`)
    }));
    const responseSchema = {
      type: import_genai.Type.ARRAY,
      items: {
        type: import_genai.Type.OBJECT,
        properties: {
          id: { type: import_genai.Type.STRING },
          matchReason: { type: import_genai.Type.STRING, description: "Breve explica\xE7\xE3o de por que esse candidato \xE9 compat\xEDvel." },
          score: { type: import_genai.Type.INTEGER, description: "Grau de relev\xE2ncia de 0 a 100." }
        },
        required: ["id", "matchReason", "score"]
      }
    };
    const prompt = `
Voc\xEA \xE9 o assistente de recrutamento com busca inteligente.
O usu\xE1rio enviou a seguinte pesquisa em linguagem natural: "${searchQuery}"

Abaixo est\xE1 o banco de candidatos dispon\xEDveis:
${JSON.stringify(candidatesSimplified, null, 2)}

Sua tarefa \xE9 analisar os candidatos e retornar um ranking daqueles que atendem \xE0 inten\xE7\xE3o de pesquisa do usu\xE1rio.
Retorne um array JSON com os candidatos correspondentes, ordenados por compatibilidade decrescente.
`;
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema,
        temperature: 0.2
      }
    });
    const resultText = response.text;
    if (resultText) {
      return JSON.parse(resultText.trim());
    }
    return [];
  } catch (error) {
    console.error("Erro na pesquisa por IA:", error);
    return [];
  }
}
function generateContingencyParse(resumeText, resumeFileName, vacancy) {
  const lines = resumeText.split("\n").map((l) => l.trim()).filter(Boolean);
  const name = lines[0] || "Candidato Cadastrado";
  let email = "candidato@email.com";
  let phone = "(11) 99999-8888";
  let city = "S\xE3o Paulo";
  let state = "SP";
  for (const line of lines) {
    if (line.includes("@")) {
      const emailMatch = line.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
      if (emailMatch) email = emailMatch[0];
    }
    if (line.match(/\(?\d{2}\)?\s?\d{4,5}-?\d{4}/)) {
      const phoneMatch = line.match(/\(?\d{2}\)?\s?\d{4,5}-?\d{4}/);
      if (phoneMatch) phone = phoneMatch[0];
    }
  }
  if (vacancy) {
    city = vacancy.city;
    state = vacancy.state;
  }
  const desiredRole = vacancy ? vacancy.title : "Profissional";
  const score = vacancy ? Math.floor(Math.random() * 30) + 65 : 75;
  const basicSkills = ["Comunica\xE7\xE3o", "Trabalho em Equipe", "Organiza\xE7\xE3o", "Microsoft Office", "Resolu\xE7\xE3o de Problemas"];
  if (vacancy) {
    vacancy.requirements.slice(0, 3).forEach((req) => {
      const words = req.split(" ");
      if (words.length > 1) {
        basicSkills.push(words.slice(0, 2).join(" "));
      }
    });
  }
  const aiInsights = {
    strengths: [
      "Excelente apresenta\xE7\xE3o de hist\xF3rico profissional no curr\xEDculo.",
      "Habilidade demonstrada em \xE1reas de interesse da empresa.",
      "Possui as compet\xEAncias comportamentais b\xE1sicas requeridas."
    ],
    attentionPoints: [
      "Alguns requisitos avan\xE7ados n\xE3o est\xE3o detalhados explicitamente no documento.",
      "Disponibilidade para in\xEDcio imediato requer valida\xE7\xE3o em entrevista."
    ],
    areasOfExpertise: [desiredRole, "Opera\xE7\xF5es"],
    skillsList: basicSkills.slice(0, 4),
    suggestion: "Este candidato demonstra bom potencial t\xE9cnico prim\xE1rio. Recomenda-se realizar triagem telef\xF4nica r\xE1pida para alinhar as pretens\xF5es e detalhar as compet\xEAncias avan\xE7adas."
  };
  const aiReason = vacancy ? `\u2714 Possui forma\xE7\xE3o e compet\xEAncias b\xE1sicas compat\xEDveis.
\u2714 Demonstra iniciativa e boa estrutura de curr\xEDculo.
\u2716 Necess\xE1rio confirmar profundidade t\xE9cnica nos requisitos mandat\xF3rios de ${vacancy.title}.` : `\u2714 Apresenta boas compet\xEAncias profissionais b\xE1sicas.`;
  return {
    name,
    email,
    phone,
    city,
    state,
    desiredRole,
    education: "Ensino Superior Completo",
    salaryExpectation: vacancy?.salaryRange ? vacancy.salaryRange.split(" ")[1] || "6000" : "5000",
    availability: "Imediata",
    experiences: [
      {
        company: "Empresa Anterior Ltda",
        role: desiredRole,
        period: "Fev/2022 a Atualidade",
        description: "Atua\xE7\xE3o na \xE1rea correspondente, liderando pequenas entregas e mantendo processos organizados."
      }
    ],
    courses: ["Curso de Especializa\xE7\xE3o Profissional", "Metodologias \xC1geis de Trabalho"],
    skills: basicSkills,
    languages: [{ language: "Portugu\xEAs", level: "Fluente" }],
    coverLetter: "Prezada equipe, gostaria de me candidatar para as oportunidades na \xE1rea. Possuo experi\xEAncia relevante e gostaria muito de colaborar com os objetivos do time de voc\xEAs.",
    aiSummary: `Profissional motivado com experi\xEAncia em ${desiredRole}. Demonstra compet\xEAncias consistentes em ${basicSkills.slice(0, 3).join(", ")}, com s\xF3lida forma\xE7\xE3o acad\xEAmica e foco em aprendizado cont\xEDnuo e colabora\xE7\xE3o.`,
    aiScore: score,
    aiReason,
    tags: [desiredRole, city, "Compet\xEAncia T\xE9cnica"],
    aiInsights
  };
}

// server.ts
async function startServer() {
  const app = (0, import_express.default)();
  const PORT = 3e3;
  app.use(import_express.default.json({ limit: "50mb" }));
  app.use(import_express.default.urlencoded({ extended: true, limit: "50mb" }));
  const requireAdmin = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader === "Bearer empresa-admin-session-token-abc123xyz") {
      next();
    } else {
      res.status(401).json({ error: "N\xE3o autorizado. Fa\xE7a login como administrador." });
    }
  };
  app.post("/api/auth/login", (req, res) => {
    const { email, password } = req.body;
    if (email === "admin@empresa.com" && password === "admin123") {
      res.json({
        token: "empresa-admin-session-token-abc123xyz",
        user: {
          name: "Mariana Costa (Diretora de RH)",
          email: "admin@empresa.com",
          role: "Admin"
        }
      });
    } else {
      res.status(401).json({ error: "E-mail ou senha incorretos." });
    }
  });
  app.get("/api/stats", requireAdmin, (req, res) => {
    try {
      const stats = db.getStats();
      res.json(stats);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });
  app.get("/api/vacancies", (req, res) => {
    try {
      const vacancies = db.getVacancies();
      res.json(vacancies);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });
  app.get("/api/vacancies/:id", (req, res) => {
    try {
      const vacancy = db.getVacancyById(req.params.id);
      if (vacancy) {
        res.json(vacancy);
      } else {
        res.status(404).json({ error: "Vaga n\xE3o encontrada." });
      }
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });
  app.post("/api/vacancies", requireAdmin, (req, res) => {
    try {
      const { title, description, responsibilities, requirements, benefits, city, state, modality, salaryRange, slots } = req.body;
      const newVacancy = {
        id: `vaga-${Date.now()}`,
        title,
        description,
        responsibilities: Array.isArray(responsibilities) ? responsibilities : [],
        requirements: Array.isArray(requirements) ? requirements : [],
        benefits: Array.isArray(benefits) ? benefits : [],
        city,
        state,
        modality,
        salaryRange,
        slots: Number(slots) || 1,
        status: "Ativa",
        createdAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      db.saveVacancy(newVacancy);
      res.status(201).json(newVacancy);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });
  app.put("/api/vacancies/:id", requireAdmin, (req, res) => {
    try {
      const existing = db.getVacancyById(req.params.id);
      if (!existing) {
        return res.status(404).json({ error: "Vaga n\xE3o encontrada." });
      }
      const updatedVacancy = {
        ...existing,
        ...req.body,
        id: existing.id
        // protect ID
      };
      db.saveVacancy(updatedVacancy);
      res.json(updatedVacancy);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });
  app.delete("/api/vacancies/:id", requireAdmin, (req, res) => {
    try {
      const deleted = db.deleteVacancy(req.params.id);
      if (deleted) {
        res.json({ success: true, message: "Vaga exclu\xEDda com sucesso." });
      } else {
        res.status(404).json({ error: "Vaga n\xE3o encontrada." });
      }
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });
  app.get("/api/candidates", requireAdmin, (req, res) => {
    try {
      const candidates = db.getCandidates();
      res.json(candidates);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });
  app.get("/api/candidates/:id", requireAdmin, (req, res) => {
    try {
      const candidate = db.getCandidateById(req.params.id);
      if (candidate) {
        res.json(candidate);
      } else {
        res.status(404).json({ error: "Candidato n\xE3o encontrado." });
      }
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });
  app.post("/api/candidates/search-ai", requireAdmin, async (req, res) => {
    try {
      const { query } = req.body;
      if (!query || typeof query !== "string") {
        return res.status(400).json({ error: "A consulta de busca por IA \xE9 obrigat\xF3ria." });
      }
      const candidates = db.getCandidates();
      const results = await searchCandidatesAi(candidates, query);
      res.json(results);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });
  app.post("/api/candidates/parse-resume", async (req, res) => {
    try {
      const { resumeText, resumeFileName, fileBase64, vacancyId } = req.body;
      let vacancy = void 0;
      if (vacancyId) {
        vacancy = db.getVacancyById(vacancyId);
      }
      const parsedData = await parseResumeAndScore(
        resumeText || "",
        resumeFileName || "curriculo.pdf",
        vacancy,
        fileBase64 ? { data: fileBase64, mimeType: "application/pdf" } : void 0
      );
      res.json(parsedData);
    } catch (e) {
      console.error("Erro no processamento do curr\xEDculo por IA:", e);
      res.status(500).json({ error: "Falha ao processar curr\xEDculo por IA. Digite manualmente ou tente outro arquivo." });
    }
  });
  app.post("/api/candidates/apply", async (req, res) => {
    try {
      const {
        vacancyId,
        submissionMode,
        name,
        email,
        phone,
        city,
        state,
        birthDate,
        education,
        desiredRole,
        salaryExpectation,
        availability,
        linkedin,
        portfolio,
        github,
        experiences,
        courses,
        skills,
        languages,
        coverLetter,
        resumeFileName,
        resumeText,
        aiScore,
        aiReason,
        aiSummary,
        aiInsights,
        tags
      } = req.body;
      const isPdfOnly = submissionMode === "pdf_only";
      if (!name || !email || !phone || !isPdfOnly && (!city || !state)) {
        return res.status(400).json({ error: "Os campos Nome, E-mail e Telefone s\xE3o obrigat\xF3rios." });
      }
      if (vacancyId) {
        const existing = db.getCandidates().find((c) => c.email === email && c.vacancyId === vacancyId);
        if (existing) {
          return res.status(400).json({ error: "Voc\xEA j\xE1 se candidatou para esta vaga. Nosso time de recrutamento j\xE1 est\xE1 avaliando seu curr\xEDculo!" });
        }
      }
      const newCandidate = {
        id: `cand-${Date.now()}`,
        vacancyId,
        submissionMode: submissionMode || (resumeFileName ? "both" : "form_only"),
        name,
        email,
        phone,
        city: city || "",
        state: state || "",
        birthDate: birthDate || "",
        education: education || "Ensino M\xE9dio Completo",
        desiredRole: desiredRole || "Candidatura Geral",
        salaryExpectation: String(salaryExpectation || ""),
        availability: availability || "Imediata",
        linkedin: linkedin || "",
        portfolio: portfolio || "",
        github: github || "",
        experiences: Array.isArray(experiences) ? experiences : [],
        courses: Array.isArray(courses) ? courses : [],
        skills: Array.isArray(skills) ? skills : [],
        languages: Array.isArray(languages) ? languages : [],
        coverLetter: coverLetter || "",
        resumeFileName: resumeFileName || "curriculo_enviado.pdf",
        resumeText: resumeText || "",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        status: "Novo",
        favorite: false,
        stars: 0,
        tags: Array.isArray(tags) ? tags : [],
        notes: "",
        history: [
          {
            id: `log-${Date.now()}-init`,
            date: (/* @__PURE__ */ new Date()).toISOString(),
            user: "Sistema",
            action: "Candidatura Recebida",
            details: "O candidato preencheu o formul\xE1rio e enviou sua candidatura com sucesso."
          }
        ],
        aiScore: aiScore ? Number(aiScore) : void 0,
        aiReason: aiReason || void 0,
        aiSummary: aiSummary || void 0,
        aiInsights: aiInsights || void 0
      };
      if (!newCandidate.aiScore) {
        const vacancy = vacancyId ? db.getVacancyById(vacancyId) : void 0;
        try {
          const aiData = await parseResumeAndScore(
            newCandidate.resumeText || `${newCandidate.name} - ${newCandidate.desiredRole}. Habilidades: ${newCandidate.skills.join(", ")}`,
            newCandidate.resumeFileName,
            vacancy
          );
          newCandidate.aiScore = aiData.aiScore;
          newCandidate.aiReason = aiData.aiReason;
          newCandidate.aiSummary = aiData.aiSummary;
          newCandidate.aiInsights = aiData.aiInsights;
          newCandidate.tags = [.../* @__PURE__ */ new Set([...newCandidate.tags || [], ...aiData.tags || []])];
          newCandidate.history.push({
            id: `log-${Date.now()}-ai-retro`,
            date: (/* @__PURE__ */ new Date()).toISOString(),
            user: "Sistema IA",
            action: "An\xE1lise de Curr\xEDculo",
            details: `Curr\xEDculo processado automaticamente pela IA ap\xF3s submiss\xE3o f\xEDsica. Compatibilidade de ${aiData.aiScore}% detectada.`
          });
        } catch (err) {
          console.error("Erro na an\xE1lise de IA retroativa:", err);
        }
      }
      db.saveCandidate(newCandidate);
      res.status(201).json(newCandidate);
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: e.message });
    }
  });
  app.put("/api/candidates/:id", requireAdmin, (req, res) => {
    try {
      const existing = db.getCandidateById(req.params.id);
      if (!existing) {
        return res.status(404).json({ error: "Candidato n\xE3o encontrado." });
      }
      const historyLogs = [...existing.history || []];
      const updater = "Mariana Costa (RH)";
      if (req.body.status && req.body.status !== existing.status) {
        historyLogs.push({
          id: `log-edit-${Date.now()}-status`,
          date: (/* @__PURE__ */ new Date()).toISOString(),
          user: updater,
          action: "Altera\xE7\xE3o de Status",
          details: `Status alterado de "${existing.status}" para "${req.body.status}".`
        });
      }
      if (req.body.favorite !== void 0 && req.body.favorite !== existing.favorite) {
        historyLogs.push({
          id: `log-edit-${Date.now()}-fav`,
          date: (/* @__PURE__ */ new Date()).toISOString(),
          user: updater,
          action: req.body.favorite ? "Marcado como Favorito" : "Removido dos Favoritos",
          details: req.body.favorite ? "Candidato adicionado \xE0 lista de favoritos corporativos." : "Candidato removido dos favoritos."
        });
      }
      if (req.body.stars !== void 0 && req.body.stars !== existing.stars) {
        historyLogs.push({
          id: `log-edit-${Date.now()}-stars`,
          date: (/* @__PURE__ */ new Date()).toISOString(),
          user: updater,
          action: "Classifica\xE7\xE3o por Estrelas",
          details: `Classifica\xE7\xE3o atualizada para ${req.body.stars} estrelas.`
        });
      }
      if (req.body.notes !== void 0 && req.body.notes !== existing.notes) {
        historyLogs.push({
          id: `log-edit-${Date.now()}-notes`,
          date: (/* @__PURE__ */ new Date()).toISOString(),
          user: updater,
          action: "Observa\xE7\xE3o Atualizada",
          details: "Anota\xE7\xF5es administrativas privadas foram editadas."
        });
      }
      const updatedCandidate = {
        ...existing,
        ...req.body,
        history: historyLogs,
        id: existing.id
        // protect ID
      };
      db.saveCandidate(updatedCandidate);
      res.json(updatedCandidate);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });
  app.delete("/api/candidates/:id", requireAdmin, (req, res) => {
    try {
      const deleted = db.deleteCandidate(req.params.id);
      if (deleted) {
        res.json({ success: true, message: "Candidato exclu\xEDdo com sucesso." });
      } else {
        res.status(404).json({ error: "Candidato n\xE3o encontrado." });
      }
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });
  app.get("/api/export/csv", requireAdmin, (req, res) => {
    try {
      const candidates = db.getCandidates();
      let csvContent = "\uFEFF";
      const headers = [
        "ID",
        "Nome",
        "E-mail",
        "Telefone",
        "Cidade",
        "Estado",
        "Vaga Vinculada",
        "Cargo Desejado",
        "Escolaridade",
        "Pretens\xE3o Salarial",
        "Disponibilidade",
        "Status",
        "Favorito",
        "Estrelas (0-5)",
        "Score de IA (%)",
        "Tags",
        "Data de Cadastro"
      ];
      csvContent += headers.map((h) => `"${h.replace(/"/g, '""')}"`).join(";") + "\n";
      candidates.forEach((c) => {
        const row = [
          c.id,
          c.name,
          c.email,
          c.phone,
          c.city,
          c.state,
          c.vacancyTitle || "Candidatura Geral",
          c.desiredRole,
          c.education,
          c.salaryExpectation,
          c.availability,
          c.status,
          c.favorite ? "Sim" : "N\xE3o",
          c.stars,
          c.aiScore !== void 0 ? `${c.aiScore}%` : "N/A",
          c.tags.join(", "),
          new Date(c.createdAt).toLocaleDateString("pt-BR")
        ];
        csvContent += row.map((val) => `"${String(val || "").replace(/"/g, '""')}"`).join(";") + "\n";
      });
      res.setHeader("Content-Type", "text/csv; charset=utf-8");
      res.setHeader("Content-Disposition", "attachment; filename=candidatos_recrutamento.csv");
      res.status(200).send(csvContent);
    } catch (e) {
      res.status(500).json({ error: "Erro ao exportar arquivo." });
    }
  });
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Servidor Recrutamento] Rodando em http://localhost:${PORT}`);
  });
}
startServer();
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
//# sourceMappingURL=server.cjs.map
