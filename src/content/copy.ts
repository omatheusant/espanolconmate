/**
 * Editorial copy for the homepage, in pt-BR.
 *
 * Positioning / brand-voice copy (hero, value props, section intros) is
 * safe creative writing. Anything that would assert a specific business
 * fact — price, schedule, class format, instructor credentials, student
 * results — is deliberately left out rather than invented. See the
 * TODO(content) notes for where real information should be added.
 */

export const hero = {
  eyebrowWord: "Español con Mate",
  headline: ["Espanhol de verdade.", "Do seu jeito."],
  body: "Nada de decorar regra solta. Aqui você aprende espanhol escutando, falando e errando à vontade, até virar seu jeito natural de se comunicar.",
  primaryCta: "Quero aprender espanhol",
  navCta: "Quero aprender",
  secondaryCta: "Conheça o método",
};

export const brandExpression = {
  words: ["Hola.", "¿Qué tal?", "Vamos.", "Así se habla."],
};

export const valueProps = [
  {
    title: "Espanhol pra usar, não só pra estudar",
    body: "O foco é a comunicação que serve pra vida real: entender, responder e se virar numa conversa — não só acertar exercício de gramática.",
  },
  {
    title: "Clareza em vez de complicação",
    body: "Cada conteúdo novo entra de um jeito que faz sentido pra quem já fala português, sem rodeio nem termo técnico desnecessário.",
  },
  {
    title: "Confiança pra abrir a boca",
    body: "Aprender espanhol também é perder a vergonha de errar. A ideia é te deixar à vontade pra falar antes de falar perfeito.",
  },
] as const;

export const howItWorks = {
  title: "Como funciona",
  intro:
    "Uma jornada pensada pra fazer sentido do primeiro contato até o dia em que o espanhol sai sem esforço.",
  steps: [
    {
      title: "Você começa pelo seu nível",
      body: "Sem repetir o que você já sabe, nem pular o que ainda falta — o ponto de partida é onde você realmente está.",
    },
    {
      title: "A prática vem primeiro",
      body: "Cada ideia nova é logo colocada em uso, porque é falando e ouvindo que o espanhol vai ficando natural.",
    },
    {
      title: "Você usa o espanhol de verdade",
      body: "O objetivo é te preparar pra situações reais — uma conversa, uma viagem, um papo que antes te travava.",
    },
    {
      title: "O ritmo é seu",
      body: "Sem pressa artificial. Você revisita o que precisar e avança quando estiver pronto, não quando o calendário manda.",
    },
  ],
} as const;

/**
 * TODO(content): replace with the real instructor's name, photo, bio,
 * teaching approach and verified qualifications before launch. Nothing
 * here claims a specific credential or professional history.
 */
export const instructor = {
  title: "Quem guia você",
  name: "",
  bio: "Esse espaço é reservado pra apresentar, com nome e rosto, quem está por trás do método Español con Mate.",
  approach:
    "A forma de ensinar — o que guia cada aula e cada escolha do método — entra aqui assim que for confirmada.",
};

export const faq = {
  title: "Dúvidas",
  intro: "Perguntas antes de começar? Aqui vão algumas respostas diretas.",
  items: [
    {
      question: "Preciso falar espanhol pra conversar com vocês?",
      answer:
        "Não. Pra tirar dúvidas antes de começar, pode mandar mensagem em português mesmo — a ideia é descomplicar, não testar você.",
    },
    {
      question: "Como sei se o Español con Mate é pra mim?",
      answer:
        "Se você quer entender e se comunicar em espanhol de verdade — não só decorar regra — esse é o lugar. Manda uma mensagem contando seu objetivo e a gente ajuda a ver se faz sentido.",
    },
    {
      question: "Onde posso saber mais sobre como funciona?",
      answer:
        "O jeito mais direto é chamar no WhatsApp — a gente responde com calma e sem compromisso.",
    },
  ],
} as const;

export const finalCta = {
  headline: "Bora tirar o espanhol do papel?",
  body: "Manda uma mensagem e dá o primeiro passo — sem compromisso, sem complicação.",
  cta: "Quero aprender espanhol",
};

export const footer = {
  blurb: "Tu guía de español.",
};
