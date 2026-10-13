import frontend from './subjects/frontend.js'
import backend from './subjects/backend.js'
import mobile from './subjects/mobile.js'
import security from './subjects/security.js'
import games from './subjects/games.js'
import langs from './subjects/langs.js'
import infra from './subjects/infra.js'
import more from './subjects/more.js'
import { getBank } from './banco/index.js'

const SUBJECTS = [
  ...frontend,
  ...backend,
  ...mobile,
  ...security,
  ...games,
  ...langs,
  ...infra,
  ...more
]

export function listSubjects() {
  return SUBJECTS.map((s) => ({ id: s.id, title: s.title, summary: s.summary }))
}

function normalize(text) {
  return String(text || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s.+-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function scoreSubject(query, subject) {
  const q = ' ' + normalize(query) + ' '
  let score = 0
  const titleNorm = normalize(subject.title)
  if (q.includes(' ' + titleNorm + ' ')) score += 6
  for (const key of subject.keys) {
    const k = normalize(key)
    if (!k) continue
    if (q.includes(' ' + k + ' ')) score += k.includes(' ') ? 5 : 3
    else if (k.length > 3 && q.includes(k)) score += 1
  }
  return score
}

function pickSubject(query) {
  let best = null
  let bestScore = 0
  for (const subject of SUBJECTS) {
    const score = scoreSubject(query, subject)
    if (score > bestScore) {
      bestScore = score
      best = subject
    }
  }
  return bestScore >= 3 ? best : null
}

const LEVELS = {
  iniciante: {
    label: 'iniciante',
    intro: 'sem pré-requisitos, com explicações passo a passo',
    rhythm: 'um ritmo tranquilo, com tempo para consolidar cada conceito',
    extra: 'consolidação e prática guiada'
  },
  intermedio: {
    label: 'intermédio',
    intro: 'com bases já adquiridas, focando as boas práticas',
    rhythm: 'um ritmo equilibrado entre teoria e prática',
    extra: 'aprofundamento e resolução de exercícios'
  },
  avancado: {
    label: 'avançado',
    intro: 'com conhecimentos sólidos, focando padrões e otimização',
    rhythm: 'um ritmo acelerado e orientado a projetos',
    extra: 'otimização, arquitetura e casos avançados'
  }
}

function normalizeLevel(level) {
  const l = normalize(level)
  if (l.includes('avan')) return 'avancado'
  if (l.includes('inter')) return 'intermedio'
  return 'iniciante'
}

function chunkTopics(topics, days) {
  const buckets = Array.from({ length: days }, () => [])
  const perDay = Math.floor(topics.length / days)
  const remainder = topics.length % days
  let index = 0
  for (let d = 0; d < days; d++) {
    const size = perDay + (d < remainder ? 1 : 0)
    for (let i = 0; i < size && index < topics.length; i++) {
      buckets[d].push(topics[index++])
    }
  }
  return buckets
}

const PRACTICE_DAYS = [
  { title: 'Prática guiada', goal: 'Aplicar em exercícios os conceitos dos dias anteriores.', name: 'Exercícios de consolidação', explanation: 'Dedica este dia a resolver exercícios sobre os temas já estudados. Começa pelos mais simples e sobe a dificuldade. Sempre que errares, volta à explicação do conceito e tenta de novo — é assim que a aprendizagem se fixa.' },
  { title: 'Mini-projeto', goal: 'Construir um pequeno projeto que junte os conceitos aprendidos.', name: 'Projeto prático', explanation: 'Escolhe um problema real e resolve-o com o que aprendeste até aqui. Não precisa de ser perfeito: o objetivo é integrar os conhecimentos e identificar as lacunas. No fim, escreve o que te deu mais dificuldade.' },
  { title: 'Revisão e consolidação', goal: 'Rever os pontos principais e reforçar os que ficaram menos claros.', name: 'Revisão ativa', explanation: 'Volta aos tópicos dos dias anteriores e resume cada um em poucas linhas, pelas tuas palavras. Explica-os em voz alta como se os ensinasses a alguém. Este esforço de recordar é a técnica de estudo com melhores resultados.' },
  { title: 'Aprofundamento', goal: 'Ir mais fundo nos temas centrais e conhecer boas práticas.', name: 'Boas práticas e detalhes', explanation: 'Explora a documentação oficial dos temas estudados e procura as boas práticas recomendadas. Compara o que fizeste com o que os profissionais fazem. Este dia transforma conhecimento básico em competência sólida.' }
]

const QUESTIONS_PER_DAY = 6

function hashSeed(text) {
  let h = 2166136261
  const s = String(text || '')
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

function mulberry32(seed) {
  let a = seed >>> 0
  return function () {
    a = (a + 0x6d2b79f5) >>> 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function orderByDifficulty(pool, seed) {
  const rnd = mulberry32(seed)
  const groups = [[], [], []]
  pool.forEach((q, i) => {
    const d = Math.min(Math.max(Number(q.d) || 1, 1), 3)
    groups[d - 1].push(i)
  })
  const ordered = []
  for (const group of groups) {
    for (let i = group.length - 1; i > 0; i--) {
      const j = Math.floor(rnd() * (i + 1))
      const tmp = group[i]
      group[i] = group[j]
      group[j] = tmp
    }
    ordered.push(...group)
  }
  return ordered
}

function convertLegacy(quiz) {
  return (quiz || []).map((item) => ({
    t: 'single',
    d: 2,
    q: item.question,
    opts: item.options,
    ans: item.answer,
    why: item.explanation
  }))
}

function getPool(subject) {
  if (!subject) return []
  const bank = getBank(subject.id)
  if (bank && bank.length > 0) return bank
  if (subject.quiz && subject.quiz.length > 0) return convertLegacy(subject.quiz)
  return []
}

function buildBankQuiz(pool, ctx, count) {
  if (!pool || pool.length === 0) return []
  if (!ctx.order) {
    ctx.order = orderByDifficulty(pool, ctx.seed)
    ctx.cursor = 0
    ctx.round = 0
  }
  const target = Math.min(count, pool.length)
  const chosen = []
  let guard = 0
  while (chosen.length < target && guard < pool.length * 3) {
    if (ctx.cursor >= ctx.order.length) {
      ctx.round += 1
      ctx.order = orderByDifficulty(pool, ctx.seed + ctx.round * 7919)
      ctx.cursor = 0
    }
    const idx = ctx.order[ctx.cursor]
    ctx.cursor += 1
    guard += 1
    if (!chosen.includes(idx)) chosen.push(idx)
  }
  chosen.sort((a, b) => (Number(pool[a].d) || 1) - (Number(pool[b].d) || 1))
  return chosen.map((i) => pool[i])
}

function buildQuiz(subject, dayIndex, days, ctx) {
  const pool = getPool(subject)
  if (pool.length === 0) return []
  const ratio = days > 1 ? dayIndex / (days - 1) : 1
  const target = ratio < 0.34 ? 4 : ratio < 0.75 ? 5 : 6
  return buildBankQuiz(pool, ctx, target)
}

const GENERIC_QUIZ = [
  {
    t: 'single',
    d: 1,
    q: 'Ao estudar uma área técnica nova, qual é a ordem mais correta de abordagem?',
    opts: [
      'Compreender o vocabulário e os conceitos-base antes de avançar para ferramentas específicas',
      'Começar pelas ferramentas mais avançadas e ignorar os fundamentos',
      'Decorar comandos sem perceber o que fazem',
      'Assistir a vídeos sem nunca escrever nada'
    ],
    ans: 0,
    why: 'Os conceitos-base dão o quadro mental onde as ferramentas encaixam. Sem eles, decoram-se comandos sem compreender quando e porquê os usar, o que trava a autonomia.'
  },
  {
    t: 'bool',
    d: 1,
    q: 'Num contexto técnico, documentar as decisões e os passos seguidos facilita a reprodução e a deteção de erros.',
    ansBool: true,
    why: 'Verdadeiro. Registar o que se fez, os pressupostos e os resultados torna o trabalho auditável e repetível. Sem registo, um resultado inesperado torna-se impossível de investigar.'
  },
  {
    t: 'single',
    d: 1,
    q: 'O que descreve a notação Big O quando aplicada a um algoritmo?',
    opts: [
      'Como o custo cresce com o tamanho da entrada, ignorando constantes',
      'O tempo exato em segundos de execução',
      'O número de linhas de código',
      'A linguagem de programação usada'
    ],
    ans: 0,
    hint: 'Preocupa-se com a tendência de crescimento, não com valores exatos.',
    why: 'O Big O descreve o crescimento assintótico do custo com o tamanho da entrada. Permite comparar algoritmos independentemente do hardware e orienta a escolha da estrutura de dados certa.'
  },
  {
    t: 'single',
    d: 2,
    q: 'Qual estrutura de dados oferece acesso por índice em tempo constante e inserção no fim amortizada?',
    opts: ['Array dinâmico (vetor)', 'Lista ligada simples', 'Árvore binária', 'Tabela de hash'],
    ans: 0,
    hint: 'Pensa numa região contígua de memória que cresce.',
    why: 'O array dinâmico guarda elementos contíguos, dando acesso O(1) por índice e crescimento amortizado. As listas ligadas perdem o acesso direto e as tabelas de hash não garantem ordem.'
  },
  {
    t: 'multi',
    d: 2,
    q: 'Quais destas são propriedades desejáveis num sistema de controlo de versões?',
    opts: [
      'Permitir voltar a qualquer estado anterior',
      'Registar quem alterou o quê e quando',
      'Possibilitar trabalho em paralelo sem conflitos permanentes',
      'Apagar o histórico antigo a cada gravação'
    ],
    ansMulti: [0, 1, 2],
    why: 'Voltar atrás, registar autoria e permitir paralelismo são objetivos centrais do controlo de versões. Apagar o histórico destrói precisamente o que o torna útil.'
  },
  {
    t: 'single',
    d: 2,
    q: 'Para que serve um teste automatizado numa base de código em evolução?',
    opts: [
      'Detetar regressões a cada alteração, dando confiança para modificar o código',
      'Aumentar o tamanho do executável',
      'Substituir a revisão de código',
      'Tornar a compilação mais lenta de propósito'
    ],
    ans: 0,
    why: 'Os testes automatizados detetam regressões logo que surgem, permitindo alterar o código com segurança. São a rede de proteção que torna a mudança contínua sustentável.'
  },
  {
    t: 'fill',
    d: 2,
    q: 'A propriedade de um algoritmo que garante encontrar sempre a melhor solução, se existir, chama-se ______.',
    accept: ['otimalidade', 'optimalidade', 'correcao', 'correção'],
    why: 'A otimalidade garante a melhor solução possível; a correção garante que a solução devolvida é válida. Distinguir as duas ajuda a avaliar algoritmos com o rigor adequado.'
  },
  {
    t: 'multi',
    d: 2,
    q: 'Quais destes fatores afetam o desempenho de um programa?',
    opts: [
      'A complexidade algorítmica escolhida',
      'A localidade de acesso à memória',
      'O número de operações de entrada e saída',
      'A cor do tema do editor de código'
    ],
    ansMulti: [0, 1, 2],
    why: 'A complexidade, a localidade de memória e as operações de E/S dominam o desempenho. A cor do editor é uma preferência pessoal sem qualquer efeito na execução.'
  },
  {
    t: 'single',
    d: 2,
    q: 'O que distingue a memória de uma cache da memória principal?',
    opts: [
      'A cache é menor e mais rápida, guardando os dados mais usados',
      'A cache é maior e mais lenta',
      'São exatamente iguais',
      'A cache guarda apenas dados em disco'
    ],
    ans: 0,
    why: 'A cache é pequena e rápida, guardando os dados acedidos com mais frequência para evitar ir à memória principal, mais lenta. A hierarquia de memória explora a localidade dos acessos.'
  },
  {
    t: 'bool',
    d: 3,
    q: 'Correlação entre duas variáveis implica necessariamente causalidade.',
    ansBool: false,
    why: 'Falso. A correlação indica associação, não causalidade. Pode existir um confundidor a influenciar ambas as variáveis, ou a relação pode ser coincidente. Estabelecer causalidade exige mais do que observar dados.'
  },
  {
    t: 'single',
    d: 3,
    q: 'Qual é o principal risco de copiar uma solução sem a compreender?',
    opts: [
      'Introduzir erros subtis que não consegues diagnosticar quando o contexto muda',
      'O código fica mais rápido',
      'Aumenta a legibilidade',
      'Não há qualquer risco'
    ],
    ans: 0,
    why: 'Sem compreender o porquê, não se sabe quando a solução deixa de ser válida nem como depurá-la. Copiar cega acumula dívida técnica e vulnerabilidades difíceis de detetar.'
  },
  {
    t: 'multi',
    d: 3,
    q: 'Quais destas práticas reduzem o risco ao introduzir alterações num sistema em produção?',
    opts: [
      'Fazer alterações pequenas e verificáveis',
      'Ter capacidade de reverter rapidamente',
      'Observar métricas e registos após a alteração',
      'Alterar tudo de uma vez sem forma de voltar atrás'
    ],
    ansMulti: [0, 1, 2],
    why: 'Alterações pequenas, reversibilidade e observação reduzem o impacto de falhas. Alterar tudo sem plano de reversão transforma qualquer erro numa falha difícil de conter.'
  },
  {
    t: 'order',
    d: 3,
    q: 'Ordena um ciclo de resolução de um problema técnico complexo.',
    items: [
      'Reproduzir o problema de forma fiável',
      'Formular uma hipótese sobre a causa',
      'Testar a hipótese com um experimento controlado',
      'Corrigir a causa e verificar que o problema não regressa'
    ],
    why: 'Reproduzir, formular hipótese, testar e corrigir é o método que evita correções ao acaso. Sem reprodução fiável, qualquer correção é uma aposta.'
  },
  {
    t: 'code',
    d: 3,
    q: 'Que propriedade este código explora para procurar um valor num array ordenado?',
    code: 'function procura(arr, alvo) {\n  let lo = 0, hi = arr.length - 1\n  while (lo <= hi) {\n    const mid = (lo + hi) >> 1\n    if (arr[mid] === alvo) return mid\n    if (arr[mid] < alvo) lo = mid + 1\n    else hi = mid - 1\n  }\n  return -1\n}',
    opts: [
      'A ordenação permite descartar metade do espaço em cada passo (pesquisa binária)',
      'O array é pequeno, por isso percorre-o todo',
      'O código usa a rede para procurar',
      'O código ordena o array antes de procurar'
    ],
    ans: 0,
    hint: 'Repara que em cada iteração o intervalo é reduzido a metade.',
    why: 'Como o array está ordenado, comparar com o elemento central permite descartar metade do espaço de procura em cada passo, obtendo complexidade O(log n). É a essência da pesquisa binária.'
  },
  {
    t: 'fill',
    d: 3,
    q: 'O princípio que recomenda dar a cada componente apenas as permissões de que realmente precisa chama-se princípio do menor ______.',
    accept: ['privilegio', 'privilégio', 'privilegios', 'privilégios'],
    why: 'O princípio do menor privilégio limita o dano possível quando algo é comprometido. Aplica-se a contas, serviços e pipelines, reduzindo a superfície de ataque.'
  },
  {
    t: 'bool',
    d: 3,
    q: 'Um sistema com elevada coesão e baixo acoplamento é, em geral, mais fácil de alterar e testar.',
    ansBool: true,
    why: 'Verdadeiro. Alta coesão agrupa responsabilidades relacionadas e baixo acoplamento reduz dependências, o que facilita alterar, substituir e testar componentes isoladamente.'
  },
  {
    t: 'single',
    d: 3,
    q: 'Porque é que medir antes de otimizar é uma regra fundamental?',
    opts: [
      'Porque a intuição sobre o gargalo costuma estar errada e a otimização prematura complica o código sem ganhos reais',
      'Porque otimizar é sempre inútil',
      'Porque as medições nunca erram',
      'Porque o código otimizado é sempre ilegível'
    ],
    ans: 0,
    why: 'O verdadeiro gargalo raramente é onde se pensa. Otimizar sem medir gasta esforço, complica o código e pode degradar o desempenho. A regra é medir, localizar e só então otimizar.'
  },
  {
    t: 'multi',
    d: 2,
    q: 'Quais destas afirmações sobre estruturas de dados são corretas?',
    opts: [
      'Uma pilha segue a ordem LIFO (último a entrar, primeiro a sair)',
      'Uma fila segue a ordem FIFO (primeiro a entrar, primeiro a sair)',
      'Uma tabela de hash dá acesso médio em tempo constante',
      'Um array ordenado permite inserção no meio em tempo constante'
    ],
    ansMulti: [0, 1, 2],
    why: 'Pilhas são LIFO, filas são FIFO e as tabelas de hash dão acesso médio constante. Inserir no meio de um array ordenado exige deslocar elementos, sendo O(n).'
  },
  {
    t: 'single',
    d: 2,
    q: 'O que garante a integridade de um ficheiro transferido através de uma rede?',
    opts: [
      'Comparar um resumo criptográfico (hash) antes e depois da transferência',
      'Confiar apenas na velocidade da ligação',
      'Abrir o ficheiro com um editor de texto',
      'Renomear o ficheiro depois de o receber'
    ],
    ans: 0,
    why: 'O hash funciona como impressão digital do conteúdo: se o resumo calculado após a transferência coincidir com o original, o ficheiro não foi alterado. É uma verificação simples e eficaz.'
  },
  {
    t: 'single',
    d: 1,
    q: 'Qual é a vantagem de dividir um problema grande em partes mais pequenas?',
    opts: [
      'Cada parte fica mais fácil de compreender, testar e depurar isoladamente',
      'O problema deixa de existir',
      'O código fica sempre mais rápido',
      'Elimina a necessidade de planeamento'
    ],
    ans: 0,
    why: 'Dividir para conquistar torna cada parte mais simples de raciocinar, testar e corrigir. É uma das estratégias mais universais, tanto no estudo como no desenvolvimento e na resolução de problemas.'
  },
  {
    t: 'multi',
    d: 3,
    q: 'Quais destas são responsabilidades de quem trabalha com dados sensíveis?',
    opts: [
      'Minimizar a quantidade de dados recolhidos',
      'Proteger os dados em trânsito e em repouso',
      'Definir quem tem acesso e porquê',
      'Partilhar os dados livremente sem controlo'
    ],
    ansMulti: [0, 1, 2],
    why: 'Minimizar dados, protegê-los e controlar acessos são práticas essenciais de proteção. Partilhar sem controlo expõe os utilizadores e viola a confiança depositada.'
  },
  {
    t: 'order',
    d: 3,
    q: 'Ordena as fases de um projeto técnico bem conduzido.',
    items: [
      'Definir o objetivo e os critérios de sucesso',
      'Investigar o estado da arte e escolher a abordagem',
      'Construir um protótipo pequeno e funcional',
      'Refinar, testar e documentar o resultado final'
    ],
    why: 'Definir o objetivo orienta tudo o resto; investigar evita repetir erros; prototipar cedo reduz risco; refinar, testar e documentar consolida o resultado. Queimar etapas custa caro mais tarde.'
  },
  {
    t: 'code',
    d: 3,
    q: 'O que demonstra este código sobre o custo de crescer uma estrutura?',
    code: 'const lista = []\nfor (let i = 0; i < 1000000; i++) {\n  lista.unshift(i)\n}',
    opts: [
      'Inserir no início de um array é O(n), pelo que este ciclo é quadraticamente caro',
      'Inserir no início é O(1) e o ciclo é rápido',
      'O código não executa',
      'O ciclo é constante no tempo'
    ],
    ans: 0,
    hint: 'Cada unshift obriga a deslocar todos os elementos existentes.',
    why: 'Inserir no início obriga a deslocar todos os elementos já presentes, o que é O(n) por inserção. Num ciclo de um milhão de iterações, o custo total é O(n²), tornando-o impraticável. Usar push seria O(1) amortizado.'
  },
  {
    t: 'single',
    d: 2,
    q: 'Qual é a principal diferença entre um erro detetado em compilação e um erro detetado em execução?',
    opts: [
      'O de compilação é detetado antes de o programa correr; o de execução só aparece quando o código é executado',
      'São o mesmo tipo de erro',
      'O de execução é sempre menos grave',
      'O de compilação só existe em Python'
    ],
    ans: 0,
    why: 'Os erros de compilação são apanhados cedo, pelo compilador, antes de o programa correr. Os erros de execução só se manifestam em condições específicas, sendo mais difíceis de detetar e testar.'
  },
  {
    t: 'bool',
    d: 2,
    q: 'Guardar segredos como chaves de API diretamente no código-fonte é uma boa prática.',
    ansBool: false,
    why: 'Falso. Segredos no código acabam no histórico de versões e podem ser expostos. Devem guardar-se em variáveis de ambiente ou cofres de segredos, nunca no código.'
  },
  {
    t: 'multi',
    d: 3,
    q: 'Quais destas competências são transversais a praticamente qualquer área técnica?',
    opts: [
      'Ler e interpretar documentação oficial',
      'Formular hipóteses e testá-las de forma controlada',
      'Registar e comunicar resultados com clareza',
      'Memorizar todos os comandos sem compreender'
    ],
    ansMulti: [0, 1, 2],
    why: 'Ler documentação, testar hipóteses e comunicar resultados são competências que se transferem entre áreas. Memorizar sem compreender não se transfere nem resiste à mudança.'
  }
]

function buildGenericTopic(topic, phase) {
  return {
    name: `${topic}: ${phase.name}`,
    explanation: `${phase.explanation} Aplica isto ao tema "${topic}": pesquisa fontes fiáveis, define um pequeno objetivo mensurável para a sessão, produz um exemplo concreto que possas mostrar e regista as dúvidas que ficaram em aberto.`
  }
}

function generateFromSubject(subject, topic, days, levelKey) {
  const level = LEVELS[levelKey]
  const buckets = chunkTopics(subject.topics, days)
  const planDays = []
  const ctx = { seed: hashSeed(`${subject.id}:${levelKey}:${topic}`), order: null, cursor: 0, round: 0 }

  for (let d = 0; d < days; d++) {
    const bucket = buckets[d]
    let title
    let goal
    let topics

    if (bucket.length === 0) {
      const practice = PRACTICE_DAYS[d % PRACTICE_DAYS.length]
      title = practice.title
      goal = practice.goal
      topics = [
        { name: practice.name, explanation: `${practice.explanation} Aplica isto a ${subject.title}, mantendo o foco no tema "${topic}".` }
      ]
    } else {
      title = bucket[0].name.length > 58 ? `${subject.title}: fundamentos e prática` : bucket[0].name
      if (bucket.length > 1) title = `${bucket[0].name} e mais`
      goal = `Compreender e aplicar ${bucket.map((t) => `"${t.name}"`).join(', ')}.`
      topics = bucket.map((t) => ({ name: t.name, explanation: t.explanation }))
    }

    planDays.push({
      day: d + 1,
      title,
      goal,
      topics,
      quiz: buildQuiz(subject, d, days, ctx)
    })
  }

  const last = planDays[planDays.length - 1]
  if (last) {
    last.title = 'Projeto final e revisão'
    last.goal = `Integrar tudo o que aprendeste em ${subject.title} num projeto final e rever os pontos essenciais.`
    last.topics = [
      ...last.topics,
      {
        name: 'Projeto final',
        explanation: `Constrói um projeto que junte os principais conceitos de ${subject.title} que estudaste ao longo deste plano. Documenta o que fizeste e publica-o. Um projeto terminado vale mais do que dez começados — e é a melhor prova do que aprendeste.`
      }
    ]
  }

  return {
    title: `${subject.title} em ${days} dias`,
    summary: `Plano de ${days} dias para aprender ${subject.title} ao nível ${level.label}, ${level.intro}. Segue ${level.rhythm}, com tópicos explicativos e mini-quizzes para consolidar cada etapa.`,
    days: planDays
  }
}

function generateGeneric(topic, days, levelKey) {
  const level = LEVELS[levelKey]
  const planDays = []
  const ctx = { seed: hashSeed(`generico:${levelKey}:${topic}`), order: null, cursor: 0, round: 0 }
  for (let d = 0; d < days; d++) {
    const phase = PRACTICE_DAYS[d % PRACTICE_DAYS.length]
    const isLast = d === days - 1
    const ratio = days > 1 ? d / (days - 1) : 1
    const target = ratio < 0.34 ? 4 : ratio < 0.75 ? 5 : 6
    planDays.push({
      day: d + 1,
      title: isLast ? 'Projeto final e revisão' : `Dia ${d + 1}: ${phase.title}`,
      goal: isLast
        ? `Integrar tudo o que aprendeste sobre "${topic}" num projeto final.`
        : `Trabalhar "${topic}" através de ${phase.title.toLowerCase()}.`,
      topics: [buildGenericTopic(topic, phase)],
      quiz: buildBankQuiz(GENERIC_QUIZ, ctx, target)
    })
  }
  return {
    title: `Plano de estudo: ${topic}`,
    summary: `Plano de ${days} dias, ao nível ${level.label}, para aprender "${topic}" de forma progressiva, com tópicos explicativos e quizzes de consolidação.`,
    days: planDays
  }
}

export function generatePlan({ topic, days, level }) {
  const cleanTopic = String(topic || '').trim().slice(0, 160)
  const totalDays = Math.min(Math.max(Math.round(Number(days) || 7), 3), 30)
  const levelKey = normalizeLevel(level)
  const subject = pickSubject(cleanTopic)

  const built = subject
    ? generateFromSubject(subject, cleanTopic, totalDays, levelKey)
    : generateGeneric(cleanTopic, totalDays, levelKey)

  return {
    topic: cleanTopic,
    level: levelKey,
    totalDays,
    title: built.title,
    summary: built.summary,
    days: built.days,
    matched: subject ? subject.id : null
  }
}
