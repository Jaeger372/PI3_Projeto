export default [
  {
    id: 'nodejs',
    title: 'Node.js',
    keys: ['node', 'nodejs', 'node.js', 'backend', 'back-end', 'back end', 'servidor', 'servidor web', 'npm', 'express'],
    summary: 'Aprender Node.js para construir aplicações de servidor, criar APIs e ligar o frontend a bases de dados, tudo com JavaScript.',
    topics: [
      { name: 'O que é o Node.js', explanation: 'O Node.js permite correr JavaScript fora do browser, do lado do servidor. Usa um modelo de execução assíncrono e orientado a eventos, o que o torna eficiente para aplicações com muitos pedidos simultâneos. É a base de ferramentas modernas como o Vite, o Next.js e milhares de serviços web.' },
      { name: 'Módulos e o sistema de pacotes', explanation: 'Em Node.js o código organiza-se em módulos, importados com import e export. O npm é o gestor de pacotes que instala bibliotecas de terceiros descritas no package.json. Existem milhares de pacotes prontos a usar, o que acelera muito o desenvolvimento.' },
      { name: 'Ficheiros, caminhos e processos', explanation: 'O Node.js dá acesso ao sistema de ficheiros, permitindo ler e escrever ficheiros. Os caminhos são tratados com o módulo path, de forma portável entre sistemas. Estas capacidades são úteis para scripts, registos e tarefas de linha de comandos.' },
      { name: 'Assincronia e o event loop', explanation: 'O Node.js executa operações demoradas sem bloquear o resto do programa. O event loop trata os callbacks quando as operações terminam. Compreender este modelo é essencial para escrever código eficiente e sem bloqueios.' },
      { name: 'Um servidor HTTP simples', explanation: 'Com poucas linhas crias um servidor que responde a pedidos HTTP. Cada pedido tem um método, um caminho e cabeçalhos, e a resposta tem um estado e um corpo. Este é o alicerce de qualquer aplicação web de servidor.' },
      { name: 'O framework Express', explanation: 'O Express simplifica a criação de servidores em Node.js, com rotas e middleware. Uma rota liga um método e um caminho a uma função que trata o pedido. O middleware permite tratar autenticação, registos e erros de forma organizada.' },
      { name: 'Rotas e parâmetros', explanation: 'As rotas podem ter parâmetros dinâmicos, como /produtos/:id, e receber dados por query string. Separares a lógica por recurso torna a API previsível. Uma boa organização de rotas é a base de uma API bem desenhada.' },
      { name: 'Construir uma API REST', explanation: 'Uma API REST expõe recursos através de métodos HTTP: GET lê, POST cria, PUT atualiza e DELETE remove. As respostas usam códigos de estado, como 200, 201 e 404. Seguir estas convenções torna a API fácil de consumir por qualquer cliente.' },
      { name: 'Ler o corpo dos pedidos e validar', explanation: 'Para receber dados em JSON é preciso ler e interpretar o corpo do pedido. Validar esses dados antes de os usar evita erros e problemas de segurança. Nunca confies em dados vindos do cliente sem verificação.' },
      { name: 'Bases de dados e SQL', explanation: 'As aplicações guardam dados em bases de dados relacionais, consultadas com SQL. As tabelas têm colunas e chaves primárias, e as chaves estrangeiras ligam tabelas. Comandos como SELECT, INSERT, UPDATE e DELETE cobrem a maioria das operações.' },
      { name: 'Ligar a aplicação à base de dados', explanation: 'O servidor liga-se à base de dados e executa consultas a partir das rotas. Devem usar-se consultas parametrizadas para evitar ataques de injeção de SQL. Separar o acesso aos dados da lógica das rotas mantém o código limpo.' },
      { name: 'Autenticação, segurança e publicação', explanation: 'A autenticação confirma a identidade do utilizador, muitas vezes com palavras-passe guardadas de forma segura e tokens de sessão. É importante proteger rotas e validar tudo. No fim, a aplicação é publicada num serviço que corre Node.js.' }
    ],
    quiz: [
      { question: 'O que permite o Node.js?', options: ['Correr JavaScript no servidor', 'Substituir o HTML', 'Criar apenas imagens', 'Editar CSS'], answer: 0, explanation: 'O Node.js executa JavaScript fora do browser, do lado do servidor.' },
      { question: 'O que é o npm?', options: ['O gestor de pacotes do Node.js', 'Uma base de dados', 'Um browser', 'Uma linguagem'], answer: 0, explanation: 'O npm instala e gere as bibliotecas de um projeto Node.js.' },
      { question: 'Qual método HTTP cria um novo recurso numa API REST?', options: ['POST', 'GET', 'DELETE', 'HEAD'], answer: 0, explanation: 'O POST é usado para criar recursos; o GET apenas lê.' },
      { question: 'Para que serve o Express?', options: ['Simplificar a criação de servidores e rotas', 'Estilizar páginas', 'Compilar imagens', 'Guardar ficheiros'], answer: 0, explanation: 'O Express facilita a criação de servidores, rotas e middleware.' },
      { question: 'Porque se usam consultas parametrizadas?', options: ['Para evitar injeção de SQL', 'Para escrever menos', 'Para acelerar o CSS', 'Para criar imagens'], answer: 0, explanation: 'As consultas parametrizadas protegem contra ataques de injeção de SQL.' },
      { question: 'O que faz o event loop do Node.js?', options: ['Trata operações assíncronas sem bloquear o programa', 'Cria ficheiros', 'Compila CSS', 'Apaga a base de dados'], answer: 0, explanation: 'O event loop gere callbacks de operações assíncronas de forma não bloqueante.' },
      { question: 'Qual código de estado indica que um recurso não foi encontrado?', options: ['404', '200', '201', '500'], answer: 0, explanation: 'O 404 significa que o recurso pedido não existe.' },
      { question: 'Porque é importante validar os dados recebidos?', options: ['Evita erros e problemas de segurança', 'Torna a página bonita', 'Aumenta a memória', 'Não tem importância'], answer: 0, explanation: 'Nunca se deve confiar em dados do cliente sem validação.' }
    ]
  },
  {
    id: 'sql',
    title: 'SQL e Bases de Dados',
    keys: ['sql', 'base de dados', 'bases de dados', 'database', 'mysql', 'postgres', 'sqlite', 'consultas', 'modelação de dados'],
    summary: 'Aprender a modelar e consultar bases de dados relacionais com SQL, desde as primeiras consultas até ao desenho de esquemas eficientes.',
    topics: [
      { name: 'O que é uma base de dados relacional', explanation: 'Uma base de dados relacional organiza os dados em tabelas com linhas e colunas, ligadas entre si por chaves. Esta estrutura reduz a repetição e mantém a consistência. É a base da maioria das aplicações web e empresariais.' },
      { name: 'Tabelas, colunas e tipos', explanation: 'Cada tabela representa uma entidade, como utilizadores ou encomendas. Cada coluna tem um tipo, como texto, número ou data. Escolher bem os tipos evita erros e poupa espaço.' },
      { name: 'Chaves primárias e estrangeiras', explanation: 'A chave primária identifica de forma única cada linha da tabela. A chave estrangeira liga uma linha de uma tabela a outra, criando relações. Estas chaves garantem a integridade dos dados.' },
      { name: 'Consultas com SELECT', explanation: 'O comando SELECT lê dados de uma ou mais tabelas. Com WHERE filtras linhas, com ORDER BY ordenas e com LIMIT limitas o número de resultados. Estas cláusulas cobrem grande parte das consultas do dia a dia.' },
      { name: 'Inserir, atualizar e apagar', explanation: 'O INSERT adiciona linhas, o UPDATE altera valores existentes e o DELETE remove linhas. Devem usar-se sempre com condições bem definidas para não afetar dados indevidos. Estas operações formam o conjunto conhecido por CRUD.' },
      { name: 'Funções de agregação', explanation: 'Funções como COUNT, SUM, AVG, MIN e MAX resumem conjuntos de dados. São frequentemente usadas com GROUP BY para agrupar resultados por categoria. Servem para responder a perguntas como quantos utilizadores se registaram por mês.' },
      { name: 'Junções entre tabelas', explanation: 'As junções combinam dados de várias tabelas através das chaves. O INNER JOIN devolve apenas correspondências e o LEFT JOIN mantém todas as linhas da tabela da esquerda. As junções são essenciais em bases de dados normalizadas.' },
      { name: 'Normalização e desenho de esquemas', explanation: 'A normalização organiza os dados para reduzir a repetição e as inconsistências. O objetivo é que cada dado exista num só lugar. Um bom esquema poupa muitos problemas à medida que a aplicação cresce.' },
      { name: 'Índices e desempenho', explanation: 'Os índices aceleram a procura de linhas em colunas consultadas com frequência. Em contrapartida, tornam as escritas um pouco mais lentas e ocupam espaço. Devem criar-se apenas onde trazem benefício real.' },
      { name: 'Transações e integridade', explanation: 'Uma transação agrupa várias operações que devem ser executadas todas ou nenhumas. Isto evita estados inconsistentes em caso de falha. É essencial em operações como transferências e encomendas.' },
      { name: 'Boas práticas e segurança', explanation: 'Usar consultas parametrizadas evita injeção de SQL. Limitar permissões e fazer cópias de segurança são práticas indispensáveis. Segurança de dados é responsabilidade de quem desenvolve.' }
    ],
    quiz: [
      { question: 'O que identifica de forma única cada linha de uma tabela?', options: ['A chave primária', 'Uma coluna de texto', 'O nome da tabela', 'Um índice'], answer: 0, explanation: 'A chave primária identifica de forma única cada linha.' },
      { question: 'Qual comando lê dados de uma tabela?', options: ['SELECT', 'DELETE', 'INSERT', 'UPDATE'], answer: 0, explanation: 'O SELECT devolve dados de uma ou mais tabelas.' },
      { question: 'Para que serve uma junção entre tabelas?', options: ['Combinar dados relacionados de várias tabelas', 'Apagar tabelas', 'Criar imagens', 'Estilizar páginas'], answer: 0, explanation: 'As junções combinam dados de tabelas ligadas por chaves.' },
      { question: 'Qual função conta o número de linhas?', options: ['COUNT', 'SUM', 'AVG', 'MAX'], answer: 0, explanation: 'A COUNT devolve o número de linhas de um conjunto.' },
      { question: 'Porque é importante a normalização?', options: ['Reduz repetição e inconsistências', 'Deixa a base maior', 'Impede consultas', 'Aumenta os erros'], answer: 0, explanation: 'A normalização evita duplicação e mantém os dados consistentes.' },
      { question: 'Para que serve um índice?', options: ['Acelerar a procura de dados', 'Guardar imagens', 'Criar utilizadores', 'Alterar o CSS'], answer: 0, explanation: 'Os índices tornam as consultas de leitura mais rápidas.' },
      { question: 'O que garante uma transação?', options: ['Que as operações correm todas ou nenhumas', 'Que a página fica bonita', 'Que não há erros', 'Que o servidor reinicia'], answer: 0, explanation: 'Uma transação garante consistência agrupando operações.' }
    ]
  }
]
