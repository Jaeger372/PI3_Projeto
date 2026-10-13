export default [
  {
    id: 'seguranca',
    title: 'Segurança na Web e Cibersegurança',
    keys: ['seguranca', 'segurança', 'ciberseguranca', 'cibersegurança', 'cybersecurity', 'hacking', 'pentest', 'seguranca informatica', 'segurança informática', 'criptografia'],
    summary: 'Compreender como proteger aplicações e dados, desde os fundamentos de segurança até à deteção e resposta a ataques.',
    topics: [
      { name: 'Porque a segurança importa', explanation: 'Qualquer aplicação ligada à internet está exposta a ataques. Uma falha pode expor dados pessoais, derrubar serviços e destruir a confiança dos utilizadores. A segurança não é um extra: é parte do trabalho de quem desenvolve.' },
      { name: 'O princípio da menor privilégio', explanation: 'Cada utilizador e cada serviço deve ter apenas as permissões necessárias para a sua função. Isto limita o impacto de um comprometimento. É um dos princípios mais importantes da segurança.' },
      { name: 'Autenticação e palavras-passe', explanation: 'A autenticação confirma quem é o utilizador. As palavras-passe nunca devem ser guardadas em texto simples, mas sim com funções de derivação como o bcrypt. A autenticação em dois passos aumenta muito a segurança.' },
      { name: 'Sessões, tokens e autorização', explanation: 'Depois de autenticado, o utilizador recebe uma sessão ou um token que o identifica. A autorização decide o que cada utilizador pode fazer. Nunca se deve confiar apenas no que o cliente envia.' },
      { name: 'Ameaças comuns na web', explanation: 'Entre as ameaças mais comuns estão a injeção de SQL, o cross-site scripting e o cross-site request forgery. Cada uma tem causas e mitigações conhecidas. Conhecer o ataque é o primeiro passo para o evitar.' },
      { name: 'Validação de dados de entrada', explanation: 'Todo o dado vindo do utilizador deve ser validado e sanitizado. Isto evita injeção, corrupção de dados e comportamentos inesperados. É uma defesa simples e muito eficaz.' },
      { name: 'HTTPS e proteção de comunicações', explanation: 'O HTTPS cifra a comunicação entre o browser e o servidor. Sem ele, os dados podem ser lidos ou alterados em trânsito. Hoje é obrigatório em qualquer site que recolha informação.' },
      { name: 'Criptografia essencial', explanation: 'A criptografia protege dados em repouso e em trânsito. Existem algoritmos simétricos, com uma só chave, e assimétricos, com par de chaves. Compreender o básico evita erros graves de implementação.' },
      { name: 'Segurança de dependências', explanation: 'A maioria dos projetos usa bibliotecas de terceiros, que podem ter vulnerabilidades. É importante manter as dependências atualizadas e auditar as conhecidas. Ferramentas automáticas ajudam nesta tarefa.' },
      { name: 'Deteção e resposta a incidentes', explanation: 'Os registos e a monitorização permitem detetar comportamentos estranhos. Quando ocorre um incidente, é preciso conter, investigar e corrigir. Ter um plano de resposta reduz o impacto.' },
      { name: 'Boas práticas e ética', explanation: 'A segurança deve ser usada para proteger e nunca para atacar sem autorização. Testar a segurança do próprio sistema é legítimo e recomendado. A ética profissional é parte inseparável da área.' }
    ],
    quiz: [
      { question: 'O que defende o princípio da menor privilégio?', options: ['Dar apenas as permissões necessárias', 'Dar todas as permissões', 'Remover a autenticação', 'Não usar palavras-passe'], answer: 0, explanation: 'Cada utilizador deve ter só as permissões de que precisa.' },
      { question: 'Como devem ser guardadas as palavras-passe?', options: ['Com uma função de derivação segura', 'Em texto simples', 'Num ficheiro público', 'Em papel'], answer: 0, explanation: 'Usa-se uma função de derivação como o bcrypt, nunca texto simples.' },
      { question: 'O que é injeção de SQL?', options: ['Inserir comandos maliciosos em consultas', 'Apagar o CSS', 'Criar imagens', 'Mudar a cor do site'], answer: 0, explanation: 'O atacante insere comandos na consulta para manipular a base de dados.' },
      { question: 'Porque o HTTPS é importante?', options: ['Cifra a comunicação entre cliente e servidor', 'Deixa o site mais rápido', 'Cria bases de dados', 'Substitui o CSS'], answer: 0, explanation: 'O HTTPS protege os dados em trânsito contra leitura e alteração.' },
      { question: 'Porque validar os dados de entrada?', options: ['Evita ataques e comportamentos inesperados', 'Deixa a página bonita', 'Aumenta a memória', 'Não tem utilidade'], answer: 0, explanation: 'A validação é uma defesa simples e eficaz contra várias ameaças.' },
      { question: 'O que fazer com dependências desatualizadas?', options: ['Atualizá-las e auditar vulnerabilidades', 'Ignorá-las', 'Apagá-las todas', 'Nunca atualizar'], answer: 0, explanation: 'Dependências atualizadas reduzem o risco de vulnerabilidades conhecidas.' },
      { question: 'O que deve fazer um profissional de segurança?', options: ['Proteger sistemas, com autorização', 'Atacar sistemas sem permissão', 'Ignorar a ética', 'Divulgar dados pessoais'], answer: 0, explanation: 'A ética e a autorização são fundamentais na área de segurança.' }
    ]
  },
  {
    id: 'marketing',
    title: 'Marketing Digital',
    keys: ['marketing', 'marketing digital', 'redes sociais', 'seo', 'publicidade', 'ads', 'email marketing', 'analytics', 'growth', 'social media'],
    summary: 'Aprender a atrair, envolver e converter público online, do conteúdo e das redes sociais à análise de resultados.',
    topics: [
      { name: 'O que é o marketing digital', explanation: 'O marketing digital usa canais online para chegar ao público certo e alcançar objetivos de negócio. Vai muito além da publicidade: inclui conteúdo, redes sociais, email e análise. Tudo começa por compreender o público e a proposta de valor.' },
      { name: 'Definir público e objetivos', explanation: 'Antes de agir é preciso saber a quem nos dirigimos e o que queremos alcançar. Objetivos claros, como aumentar subscrições ou vendas, orientam as decisões. Personas ajudam a manter a comunicação focada.' },
      { name: 'Marketing de conteúdos', explanation: 'Conteúdo útil e relevante atrai e retém público ao longo do tempo. Artigos, vídeos e guias respondem às dúvidas reais das pessoas. Conteúdo consistente constrói autoridade e confiança.' },
      { name: 'Redes sociais e comunidade', explanation: 'Cada rede social tem um público e um formato próprios. O importante é publicar de forma consistente e conversar, não apenas anunciar. Uma comunidade envolvida é um ativo valioso.' },
      { name: 'SEO e tráfego orgânico', explanation: 'O SEO trabalha para aparecer nas pesquisas sem pagar por cliques. Títulos, estrutura e conteúdo de qualidade são a base. O tráfego orgânico é mais sustentável a longo prazo.' },
      { name: 'Publicidade paga', explanation: 'A publicidade paga permite alcançar rapidamente o público certo, com segmentação detalhada. É essencial medir o custo por resultado e ajustar. Sem medição, o investimento transforma-se em desperdício.' },
      { name: 'Email marketing', explanation: 'O email continua a ser um dos canais com melhor retorno. Uma lista de contactos próprios é um ativo que ninguém nos pode tirar. Mensagens segmentadas e relevantes geram mais abertura e cliques.' },
      { name: 'Página de destino e conversão', explanation: 'A página de destino é onde o visitante decide agir. Uma proposta clara, prova social e um apelo à ação evidente aumentam a conversão. Pequenas melhorias fazem grande diferença.' },
      { name: 'Métricas e análise', explanation: 'As métricas mostram o que funciona e o que não funciona. Alcance, envolvimento, taxa de conversão e retorno são exemplos comuns. Decidir com dados evita gastar recursos no que não dá resultado.' },
      { name: 'Testes e otimização', explanation: 'Testar duas versões de uma mensagem ou página revela qual funciona melhor. Pequenos testes contínuos produzem melhorias acumuladas. Otimizar é um processo, não um evento único.' },
      { name: 'Plano de marketing e execução', explanation: 'Um plano reúne canais, mensagens, calendário e orçamento. Executar com consistência e medir os resultados fecha o ciclo. O plano deve ser revisto e ajustado com regularidade.' }
    ],
    quiz: [
      { question: 'O que é essencial antes de criar uma campanha?', options: ['Definir público e objetivos', 'Escolher cores', 'Comprar anúncios', 'Criar um site'], answer: 0, explanation: 'Sem público e objetivos claros, qualquer campanha é um tiro no escuro.' },
      { question: 'Para que serve o SEO?', options: ['Aparecer nas pesquisas sem pagar por cliques', 'Enviar emails', 'Criar imagens', 'Alterar a base de dados'], answer: 0, explanation: 'O SEO melhora a visibilidade orgânica nos motores de busca.' },
      { question: 'Qual é a vantagem de uma lista de email própria?', options: ['É um ativo que nos pertence', 'Não precisa de conteúdo', 'Não tem custos', 'Não precisa de permissão'], answer: 0, explanation: 'A lista de contactos é um ativo direto e próprio do negócio.' },
      { question: 'O que aumenta a conversão de uma página?', options: ['Proposta clara e apelo à ação evidente', 'Texto confuso', 'Sem botões', 'Muitas distrações'], answer: 0, explanation: 'Clareza e apelo à ação ajudam o visitante a decidir.' },
      { question: 'Porque medir métricas?', options: ['Para decidir com base em dados', 'Para gastar tempo', 'Para escolher cores', 'Não é necessário'], answer: 0, explanation: 'As métricas mostram o que funciona e onde melhorar.' },
      { question: 'O que caracteriza uma boa otimização?', options: ['Testar e melhorar continuamente', 'Mudar tudo de uma vez', 'Nunca medir', 'Ignorar resultados'], answer: 0, explanation: 'A otimização é um processo contínuo de testes e ajustes.' }
    ]
  },
  {
    id: 'fullstack',
    title: 'Desenvolvimento Full-Stack',
    keys: ['full-stack', 'fullstack', 'full stack', 'programacao web', 'programação web', 'desenvolvimento web', 'web developer', 'aplicacao web', 'aplicação web'],
    summary: 'Percorrer todo o desenvolvimento de uma aplicação web, ligando interface, servidor e base de dados num projeto completo.',
    topics: [
      { name: 'Como funciona a web', explanation: 'Quando abres um site, o browser envia um pedido a um servidor, que devolve uma resposta. Compreender este ciclo, com cliente, servidor e protocolo HTTP, é a base de tudo. Todo o desenvolvimento web assenta aqui.' },
      { name: 'Frontend: a interface', explanation: 'O frontend é o que o utilizador vê e com que interage. Constrói-se com HTML, CSS e JavaScript, muitas vezes com uma biblioteca como o React. Uma boa interface é clara, rápida e acessível.' },
      { name: 'Backend: a lógica', explanation: 'O backend trata das regras de negócio, da autenticação e do acesso aos dados. Corre num servidor, frequentemente com Node.js. É aqui que a aplicação decide o que fazer com cada pedido.' },
      { name: 'APIs: a ponte', explanation: 'Uma API liga o frontend ao backend, expondo recursos por HTTP. O frontend pede dados e o backend responde em JSON. Uma API bem desenhada permite evoluir cada parte de forma independente.' },
      { name: 'Base de dados', explanation: 'A base de dados guarda a informação da aplicação de forma organizada. As bases relacionais usam tabelas e SQL. Escolher e modelar bem a base é decisivo para o desempenho.' },
      { name: 'Autenticação e utilizadores', explanation: 'A maioria das aplicações tem contas de utilizador. É preciso registar, autenticar e proteger as rotas privadas. Guardar palavras-passe de forma segura é obrigatório.' },
      { name: 'Estado no frontend e chamadas à API', explanation: 'O frontend guarda estado, como a lista de dados e o utilizador atual, e sincroniza-o com a API. É importante tratar estados de carregamento e erro. Uma boa gestão de estado evita bugs difíceis.' },
      { name: 'Integração e tratamento de erros', explanation: 'Integrar frontend, backend e base de dados é onde surgem muitos problemas. Validar dados em ambos os lados e devolver mensagens claras ajuda. Testar os fluxos completos é essencial.' },
      { name: 'Autenticação, segurança e boas práticas', explanation: 'Uma aplicação completa precisa de HTTPS, validação, permissões e proteção contra ataques comuns. Seguir boas práticas desde o início poupa reescritas. Segurança é responsabilidade de toda a equipa.' },
      { name: 'Construção, publicação e manutenção', explanation: 'No fim, a aplicação é compilada e publicada, com o frontend e o backend alojados. Monitorizar erros e desempenho mantém a aplicação saudável. Publicar cedo e iterar é a melhor forma de aprender.' }
    ],
    quiz: [
      { question: 'O que faz o backend de uma aplicação?', options: ['Trata regras de negócio e acesso aos dados', 'Apenas as cores', 'Só as imagens', 'Nada de importante'], answer: 0, explanation: 'O backend executa a lógica e acede à base de dados.' },
      { question: 'Para que serve uma API?', options: ['Ligar o frontend ao backend', 'Estilizar páginas', 'Guardar imagens', 'Compilar CSS'], answer: 0, explanation: 'A API expõe recursos que o frontend consome.' },
      { question: 'Onde ficam guardados os dados da aplicação?', options: ['Na base de dados', 'No CSS', 'Nas imagens', 'No HTML'], answer: 0, explanation: 'A base de dados guarda a informação de forma persistente.' },
      { question: 'O que é importante ao autenticar utilizadores?', options: ['Guardar palavras-passe de forma segura', 'Guardá-las em texto simples', 'Não usar autenticação', 'Mostrá-las no ecrã'], answer: 0, explanation: 'As palavras-passe devem ser protegidas com funções de derivação.' },
      { question: 'Porque tratar estados de carregamento no frontend?', options: ['Melhora a experiência e evita confusão', 'Deixa o código maior', 'Não é necessário', 'Aumenta a memória'], answer: 0, explanation: 'Mostrar que está a carregar torna a aplicação previsível.' },
      { question: 'O que fazer depois de publicar?', options: ['Monitorizar e iterar', 'Nunca mais mexer', 'Apagar tudo', 'Ignorar erros'], answer: 0, explanation: 'Monitorizar erros e desempenho mantém a aplicação saudável.' }
    ]
  }
]
