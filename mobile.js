export default [
  {
    id: 'mobile',
    title: 'Programação Mobile',
    keys: ['mobile', 'telemovel', 'telemóvel', 'android', 'ios', 'app mobile', 'aplicação móvel', 'react native', 'flutter', 'app para telemovel'],
    summary: 'Criar aplicações para telemóveis, desde os fundamentos de interfaces móveis até à publicação nas lojas de aplicações.',
    topics: [
      { name: 'O que distingue uma aplicação móvel', explanation: 'Uma aplicação móvel corre num telemóvel e tira partido de funcionalidades como câmara, GPS, notificações e armazenamento local. As restrições de ecrã, bateria e rede obrigam a decisões de design diferentes das de um site. Compreender estas diferenças é o primeiro passo.' },
      { name: 'Aplicações nativas, híbridas e web', explanation: 'As aplicações nativas são escritas para um sistema específico e têm o melhor desempenho. As híbridas e multiplataforma permitem partilhar código entre Android e iOS. A escolha depende do orçamento, do prazo e das necessidades do projeto.' },
      { name: 'Ambiente e ferramentas de desenvolvimento', explanation: 'Para desenvolver é preciso um ambiente com emuladores, dispositivos de teste e ferramentas de depuração. As plataformas modernas oferecem pré-visualização em tempo real. Montar bem o ambiente poupa horas de frustração.' },
      { name: 'Componentes e navegação entre ecrãs', explanation: 'As aplicações organizam-se em ecrãs ligados por uma navegação. A navegação pode ser em pilha, por separadores ou por gaveta lateral. Uma navegação clara é decisiva para a usabilidade.' },
      { name: 'Estado e ciclo de vida', explanation: 'Cada ecrã tem um ciclo de vida com momentos de criação, foco e destruição. É nesses momentos que se carregam e libertam recursos. Gerir bem o estado evita ecrãs presos ou dados desatualizados.' },
      { name: 'Layouts adaptáveis a vários ecrãs', explanation: 'Existem telemóveis com tamanhos e densidades muito diferentes. Usam-se unidades relativas e layouts flexíveis para que a interface se adapte. Testar em vários tamanhos evita surpresas na loja de aplicações.' },
      { name: 'Consumo de APIs e dados', explanation: 'As aplicações móveis comunicam com servidores através de APIs, normalmente em JSON. É preciso tratar estados de carregamento, erro e falta de rede. Guardar dados em cache melhora a experiência quando a ligação é fraca.' },
      { name: 'Armazenamento local e offline', explanation: 'Guardar dados no dispositivo permite usar a aplicação sem internet. Existem soluções para pares chave-valor e para bases de dados locais. Sincronizar depois com o servidor é um desafio comum.' },
      { name: 'Notificações, câmara e sensores', explanation: 'As notificações trazem o utilizador de volta à aplicação e devem ser usadas com moderação. A câmara, o GPS e os sensores abrem funcionalidades únicas. Pedir permissões de forma clara é obrigatório.' },
      { name: 'Desempenho e experiência de utilizador', explanation: 'A fluidez da interface é percebida como qualidade. Imagens otimizadas, listas eficientes e animações suaves fazem a diferença. Medir o desempenho ajuda a encontrar os pontos lentos.' },
      { name: 'Testes em dispositivos reais', explanation: 'O emulador não substitui um telemóvel real. Testar em dispositivos diferentes revela problemas de toque, desempenho e compatibilidade. É uma etapa obrigatória antes de publicar.' },
      { name: 'Publicação nas lojas', explanation: 'Publicar implica criar contas de programador, preparar ícones, imagens e descrições. Cada loja tem regras próprias de revisão. Um bom processo de publicação garante atualizações tranquilas.' }
    ],
    quiz: [
      { question: 'O que distingue uma aplicação móvel de um site?', options: ['Acesso a câmara, GPS e notificações', 'Não precisa de código', 'Só funciona offline', 'Não tem interface'], answer: 0, explanation: 'As aplicações móveis usam funcionalidades específicas do dispositivo.' },
      { question: 'Qual é a vantagem das aplicações multiplataforma?', options: ['Partilhar código entre Android e iOS', 'Ter sempre mais desempenho', 'Não precisam de testes', 'Não usam internet'], answer: 0, explanation: 'Permitem escrever uma vez e correr em várias plataformas.' },
      { question: 'O que é o ciclo de vida de um ecrã?', options: ['Os momentos de criação, foco e destruição', 'O tempo de bateria', 'A cor do fundo', 'O nome do ficheiro'], answer: 0, explanation: 'O ciclo de vida define quando carregar e libertar recursos.' },
      { question: 'Porque se testam aplicações em dispositivos reais?', options: ['O emulador não revela todos os problemas', 'É mais bonito', 'Não há alternativa', 'Para gastar bateria'], answer: 0, explanation: 'Testes reais revelam problemas de toque, desempenho e compatibilidade.' },
      { question: 'Para que servem as notificações?', options: ['Trazer o utilizador de volta à aplicação', 'Substituir o ecrã', 'Guardar ficheiros', 'Compilar o código'], answer: 0, explanation: 'As notificações ajudam a reter e a informar o utilizador.' },
      { question: 'O que deve ser feito antes de publicar numa loja?', options: ['Preparar ícones, imagens e descrições', 'Nada em especial', 'Apagar os testes', 'Remover a interface'], answer: 0, explanation: 'As lojas exigem materiais e descrições próprias.' }
    ]
  },
  {
    id: 'webdesign',
    title: 'Web Design e Experiência de Utilizador',
    keys: ['web design', 'webdesign', 'ux', 'ui', 'experiencia de utilizador', 'experiência de utilizador', 'design de interfaces', 'figma', 'prototipagem', 'usabilidade'],
    summary: 'Desenhar interfaces bonitas e fáceis de usar, desde os princípios de design até à prototipagem e aos testes com utilizadores.',
    topics: [
      { name: 'O que é o design de experiência', explanation: 'A experiência de utilizador trata de como uma pessoa se sente ao usar um produto, e não apenas do seu aspeto. Um bom design resolve problemas e reduz o esforço do utilizador. O objetivo é tornar as tarefas simples e agradáveis.' },
      { name: 'Princípios de design visual', explanation: 'Contraste, alinhamento, proximidade e repetição organizam a informação visual. Estes princípios guiam o olhar e criam ordem. Aplicá-los torna qualquer interface mais clara.' },
      { name: 'Cor, tipografia e espaçamento', explanation: 'Uma paleta coerente e uma tipografia legível transmitem profissionalismo. O espaçamento dá respiro e melhora a leitura. As variáveis de design mantêm a consistência em todo o projeto.' },
      { name: 'Pesquisa e compreensão do utilizador', explanation: 'Antes de desenhar é preciso perceber quem vai usar o produto e com que objetivo. Entrevistas, questionários e análise de concorrentes recolhem esta informação. Desenhar sem compreender o utilizador é adivinhar.' },
      { name: 'Personas, cenários e fluxos', explanation: 'As personas representam tipos de utilizador e os cenários descrevem tarefas reais. A partir deles desenham-se fluxos que mostram os passos até ao objetivo. Estes artefactos alinham a equipa.' },
      { name: 'Arquitetura de informação', explanation: 'A arquitetura de informação organiza conteúdos e funcionalidades numa estrutura compreensível. Um bom menu e uma boa hierarquia reduzem a procura. Se o utilizador se perde, o design falhou.' },
      { name: 'Wireframes e protótipos', explanation: 'Os wireframes são esboços que definem a estrutura sem detalhe visual. Os protótipos acrescentam interatividade e permitem testar o fluxo. Ferramentas como o Figma tornam este processo rápido.' },
      { name: 'Design de interfaces e componentes', explanation: 'As interfaces constroem-se com componentes como botões, campos e cartões. Um sistema de design mantém estes componentes consistentes. A consistência reduz o esforço de aprendizagem.' },
      { name: 'Acessibilidade e inclusão', explanation: 'Um bom design funciona para todos, incluindo pessoas com limitações. Contraste, tamanhos de toque adequados e navegação por teclado são exemplos. A acessibilidade melhora a experiência de todos.' },
      { name: 'Testes de usabilidade', explanation: 'Observar pessoas reais a usar o protótipo revela problemas inesperados. Bastam poucos participantes para encontrar a maioria dos problemas graves. Testar cedo é mais barato do que corrigir depois.' },
      { name: 'Iteração com base em dados', explanation: 'Depois de publicar, mede-se o comportamento com análise de dados. Os números mostram onde os utilizadores hesitam ou desistem. O design melhora por ciclos sucessivos de medição e ajuste.' }
    ],
    quiz: [
      { question: 'O que estuda a experiência de utilizador?', options: ['Como a pessoa se sente ao usar o produto', 'Apenas as cores', 'O código do servidor', 'A base de dados'], answer: 0, explanation: 'A experiência de utilizador foca-se na vivência de quem usa o produto.' },
      { question: 'Para que serve um wireframe?', options: ['Definir a estrutura antes do detalhe visual', 'Guardar dados', 'Compilar o site', 'Fazer pedidos HTTP'], answer: 0, explanation: 'O wireframe é um esboço da estrutura da interface.' },
      { question: 'O que é uma persona?', options: ['Uma representação de um tipo de utilizador', 'Um tipo de letra', 'Uma cor', 'Um servidor'], answer: 0, explanation: 'A persona descreve um utilizador típico e os seus objetivos.' },
      { question: 'Para que serve a arquitetura de informação?', options: ['Organizar conteúdos de forma compreensível', 'Escolher imagens', 'Acelerar a internet', 'Guardar ficheiros'], answer: 0, explanation: 'Ajuda o utilizador a encontrar o que procura sem se perder.' },
      { question: 'Porque testar com utilizadores reais?', options: ['Revela problemas que não se veem sozinho', 'É obrigatório por lei', 'Para gastar tempo', 'Não tem utilidade'], answer: 0, explanation: 'Testar com pessoas reais revela problemas inesperados de usabilidade.' },
      { question: 'O que caracteriza um bom design de acessibilidade?', options: ['Funcionar para todos, incluindo quem tem limitações', 'Usar letras pequenas', 'Remover contrastes', 'Bloquear o teclado'], answer: 0, explanation: 'A acessibilidade garante que todos conseguem usar o produto.' }
    ]
  },
  {
    id: 'conteudos',
    title: 'Gestão de Conteúdos',
    keys: ['gestao de conteudos', 'gestão de conteúdos', 'conteudos', 'conteúdos', 'cms', 'wordpress', 'gestao de sites', 'content management', 'redacao web'],
    summary: 'Gerir conteúdos digitais de forma organizada, desde a criação e o CMS até à publicação e à otimização para motores de busca.',
    topics: [
      { name: 'O que é a gestão de conteúdos', explanation: 'Gerir conteúdos é planear, criar, organizar, publicar e manter informação num site ou plataforma. Um bom trabalho de conteúdos mantém o site atual, útil e coerente. É a ponte entre a estratégia e o utilizador.' },
      { name: 'Sistemas de gestão de conteúdos', explanation: 'Um CMS permite criar e editar páginas sem escrever código. Plataformas como o WordPress são usadas por milhões de sites. Conhecer um CMS permite publicar de forma autónoma.' },
      { name: 'Estrutura de páginas e menus', explanation: 'Uma estrutura clara organiza as páginas por temas e níveis. Os menus devem refletir essa estrutura e ser fáceis de percorrer. Uma boa organização reduz a taxa de saída do site.' },
      { name: 'Escrita para a web', explanation: 'Na web, escreve-se de forma clara e direta, com títulos informativos e parágrafos curtos. As pessoas leem em diagonal, à procura da informação essencial. Destacar o mais importante melhora a leitura.' },
      { name: 'Imagens, vídeo e multimédia', explanation: 'As imagens e os vídeos tornam o conteúdo mais apelativo. Devem ser otimizados para não tornar o site lento. Textos alternativos e legendas melhoram a acessibilidade.' },
      { name: 'Publicação e agendamento', explanation: 'Publicar implica escolher o momento certo e revisar antes de tornar visível. O agendamento permite planear publicações futuras. Um calendário editorial organiza o trabalho.' },
      { name: 'SEO: ser encontrado', explanation: 'O SEO ajuda o site a aparecer nas pesquisas. Títulos, descrições e palavras-chave relevantes são a base. Conteúdo útil e bem estruturado é o fator mais importante.' },
      { name: 'Acessibilidade dos conteúdos', explanation: 'Textos claros, contraste e texto alternativo tornam os conteúdos acessíveis a todos. Legendas em vídeos e títulos hierárquicos ajudam também. Conteúdo acessível chega a mais pessoas.' },
      { name: 'Manutenção e atualização', explanation: 'Conteúdo desatualizado prejudica a confiança do utilizador. Uma rotina de revisão mantém links, dados e páginas em condições. A manutenção é tão importante como a publicação.' },
      { name: 'Análise de resultados', explanation: 'Ferramentas de análise mostram o que as pessoas visitam, leem e abandonam. Estes dados orientam decisões sobre o que melhorar ou remover. Gerir conteúdos é um processo contínuo guiado por dados.' }
    ],
    quiz: [
      { question: 'O que permite um CMS?', options: ['Criar e editar conteúdos sem escrever código', 'Substituir o servidor', 'Aumentar a velocidade da internet', 'Criar bases de dados'], answer: 0, explanation: 'Um CMS permite gerir conteúdos de forma simples e autónoma.' },
      { question: 'Como se escreve bem para a web?', options: ['Claro e direto, com parágrafos curtos', 'Com frases muito longas', 'Sem títulos', 'Sem estrutura'], answer: 0, explanation: 'Na web privilegia-se a clareza e a leitura rápida.' },
      { question: 'Para que serve o SEO?', options: ['Ajudar o site a ser encontrado nas pesquisas', 'Alterar cores', 'Guardar dados', 'Compilar o código'], answer: 0, explanation: 'O SEO melhora a visibilidade do site nos motores de busca.' },
      { question: 'Porque otimizar as imagens?', options: ['Para o site não ficar lento', 'Para as tornar maiores', 'Para mudar de cor', 'Não é necessário'], answer: 0, explanation: 'Imagens pesadas tornam o carregamento lento.' },
      { question: 'O que melhora a acessibilidade dos conteúdos?', options: ['Texto alternativo e contraste suficiente', 'Letras pequenas', 'Sem títulos', 'Vídeos sem legendas'], answer: 0, explanation: 'Texto alternativo e contraste ajudam todos os utilizadores.' },
      { question: 'Para que serve a análise de resultados?', options: ['Orientar melhorias com base em dados', 'Escolher cores', 'Criar imagens', 'Aumentar a memória'], answer: 0, explanation: 'Os dados mostram o que funciona e o que deve ser melhorado.' }
    ]
  }
]
