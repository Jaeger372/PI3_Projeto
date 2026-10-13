export default [
  {
    id: 'react',
    title: 'React',
    keys: ['react', 'reactjs', 'react.js', 'jsx', 'hooks', 'front-end', 'frontend', 'front end', 'spa'],
    summary: 'Percurso para dominar o React, desde os fundamentos de componentes e estado até à construção de aplicações completas com rotas, dados e publicação.',
    topics: [
      { name: 'O que é o React e porque é usado', explanation: 'React é uma biblioteca JavaScript para construir interfaces de utilizador com componentes reutilizáveis. Em vez de manipular o HTML diretamente, descreves como a interface deve ficar para um determinado estado e o React trata de a atualizar. É usado por empresas como Facebook, Instagram, Netflix e Airbnb, e é uma das tecnologias mais procuradas no mercado de trabalho.' },
      { name: 'JSX e a estrutura de um componente', explanation: 'JSX é a sintaxe que permite escrever algo parecido com HTML dentro do JavaScript. Cada componente é uma função que devolve JSX e que pode ser usada como se fosse uma etiqueta HTML, por exemplo <MeuBotao />. As chaves {} permitem inserir expressões JavaScript dentro do JSX.' },
      { name: 'Componentes e props', explanation: 'Componentes são os blocos de construção da interface. As props são os dados que passam de um componente pai para um filho, como se fossem argumentos de uma função. As props são apenas de leitura: um componente nunca deve alterar as props que recebe.' },
      { name: 'Estado com useState', explanation: 'O estado representa dados que mudam ao longo do tempo, como o valor de um formulário ou um contador. O hook useState permite declarar uma variável de estado e uma função para a atualizar. Sempre que o estado muda, o React volta a renderizar o componente com os novos valores.' },
      { name: 'Eventos e formulários', explanation: 'Os eventos em React, como onClick ou onChange, são escritos em camelCase e recebem uma função em vez de uma string. Em formulários controlados, o valor de cada campo vem do estado e é atualizado a cada alteração, o que dá controlo total sobre a validação.' },
      { name: 'Renderização de listas e condicional', explanation: 'Para mostrar listas usamos o método map, que transforma um array de dados num array de elementos JSX. Cada elemento precisa de uma prop key única para o React saber o que mudou. Para mostrar ou esconder elementos usamos expressões condicionais com o operador ternário ou o operador lógico &&.' },
      { name: 'Efeitos com useEffect', explanation: 'O useEffect permite executar código depois da renderização, sendo usado para pedir dados a uma API, subscrever eventos ou alterar o título do documento. O array de dependências no fim controla quando o efeito volta a correr. Se estiver vazio, o efeito só corre uma vez, à entrada do componente.' },
      { name: 'Contexto e partilha de estado', explanation: 'Quando muitos componentes precisam do mesmo dado, passar props por vários níveis torna-se confuso. O Context permite partilhar valores, como o tema ou o utilizador autenticado, sem os passar manualmente. É uma alternativa simples a bibliotecas de gestão de estado em aplicações pequenas e médias.' },
      { name: 'Consumo de APIs e estados de carregamento', explanation: 'A maioria das aplicações reais obtém dados de uma API. É boa prática representar três estados: a carregar, com erro e com dados. Tratar estes casos torna a interface mais previsível e melhora muito a experiência do utilizador.' },
      { name: 'Rotas com React Router', explanation: 'Uma aplicação de página única precisa de gerir a navegação sem recarregar a página. O React Router liga um caminho de URL a um componente e oferece links e parâmetros dinâmicos. Assim consegues páginas como /produtos/:id sem sair da aplicação.' },
      { name: 'Composição, reutilização e boas práticas', explanation: 'Componentes bem desenhados recebem dados e devolvem interface, sem efeitos escondidos. Extrair componentes pequenos e reutilizáveis facilita a manutenção e os testes. Manter a lógica de dados separada da apresentação é uma das regras mais valiosas em React.' },
      { name: 'Construção e publicação de uma aplicação', explanation: 'No fim do percurso, a aplicação é compilada para ficheiros estáticos com uma ferramenta como o Vite. Esses ficheiros podem ser publicados em serviços como o Vercel ou o Netlify. Publicar cedo e partilhar o link é a melhor forma de mostrar o trabalho feito.' }
    ],
    quiz: [
      { question: 'Qual é a principal característica do React?', options: ['Construir interfaces com componentes reutilizáveis', 'Substituir o CSS por JavaScript', 'Gerir apenas bases de dados', 'Criar servidores web'], answer: 0, explanation: 'O React organiza a interface em componentes reutilizáveis e declarativos.' },
      { question: 'Como se passam dados de um componente pai para um filho?', options: ['Através de props', 'Através de variáveis globais', 'Através do CSS', 'Não é possível'], answer: 0, explanation: 'As props são os dados que o componente pai entrega ao filho.' },
      { question: 'Qual hook serve para guardar estado num componente?', options: ['useState', 'useStyle', 'useDatabase', 'useRouter'], answer: 0, explanation: 'O useState declara e atualiza estado em componentes funcionais.' },
      { question: 'Para que serve o useEffect?', options: ['Executar código após a renderização, como pedir dados', 'Alterar o HTML do servidor', 'Criar tabelas na base de dados', 'Compilar o CSS'], answer: 0, explanation: 'O useEffect permite correr efeitos secundários como pedidos a APIs.' },
      { question: 'Porque é importante a prop key numa lista?', options: ['Ajuda o React a identificar cada elemento', 'Define a cor do elemento', 'Ordena o CSS', 'Não tem importância'], answer: 0, explanation: 'A key ajuda o React a saber que itens mudaram, foram adicionados ou removidos.' },
      { question: 'O que é um formulário controlado em React?', options: ['O valor dos campos vem do estado do componente', 'O browser controla tudo sozinho', 'Não tem validação', 'Só funciona sem JavaScript'], answer: 0, explanation: 'Num formulário controlado, o estado é a única fonte de verdade dos campos.' },
      { question: 'Qual é a vantagem de dividir a aplicação em componentes pequenos?', options: ['Facilita a manutenção e a reutilização', 'Deixa o código mais longo', 'Impede a reutilização', 'Aumenta os erros'], answer: 0, explanation: 'Componentes pequenos e focados são mais fáceis de manter, testar e reutilizar.' },
      { question: 'Como se publica uma aplicação React?', options: ['Compilando para ficheiros estáticos e alojando-os', 'Não é possível publicar', 'Só com uma base de dados paga', 'Apenas em ambiente local'], answer: 0, explanation: 'A aplicação é compilada para ficheiros estáticos e publicada num serviço de alojamento.' }
    ]
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    keys: ['javascript', 'js', 'ecmascript', 'es6', 'vanilla', 'linguagem web'],
    summary: 'Fundamentos sólidos de JavaScript, a linguagem que dá vida às páginas web, desde variáveis e funções até assincronia e manipulação do DOM.',
    topics: [
      { name: 'O papel do JavaScript na web', explanation: 'O HTML dá estrutura, o CSS dá estilo e o JavaScript dá comportamento. É a linguagem que corre no browser e permite reagir a cliques, validar formulários e comunicar com servidores. Hoje também corre fora do browser, com o Node.js, o que a torna uma linguagem completa.' },
      { name: 'Variáveis, tipos e operadores', explanation: 'Existem três formas de declarar variáveis: var, let e const. Na prática, usa-se let para valores que mudam e const para valores fixos. Os tipos principais são números, strings, booleanos, objetos e arrays, e existem operadores aritméticos, de comparação e lógicos.' },
      { name: 'Funções e âmbito', explanation: 'As funções agrupam código que pode ser reutilizado e recebem parâmetros. As arrow functions são uma forma mais curta de escrever funções e comportam-se de maneira diferente quanto ao valor de this. O âmbito determina onde cada variável é acessível dentro do código.' },
      { name: 'Arrays e os seus métodos', explanation: 'Os arrays guardam listas ordenadas de valores. Métodos como push, filter, map e reduce permitem transformar e resumir dados sem escrever ciclos manuais. Dominar estes métodos é essencial para trabalhar com listas de dados reais.' },
      { name: 'Objetos e desestruturação', explanation: 'Os objetos guardam pares de chave e valor e representam entidades como um utilizador ou um produto. A desestruturação permite extrair valores de objetos e arrays para variáveis de forma direta. O spread operator ajuda a copiar e a combinar objetos e arrays.' },
      { name: 'O DOM e a manipulação da página', explanation: 'O DOM é a representação da página em forma de árvore de objetos. Com JavaScript podes selecionar elementos, alterar texto, classes e atributos, e ouvir eventos. É esta ligação que permite que a página reaja às ações do utilizador.' },
      { name: 'Eventos e interação', explanation: 'Os eventos são ações como cliques, teclas premidas ou submissão de formulários. Registas uma função que é chamada quando o evento acontece. É importante compreender o bubbling dos eventos e o objeto do evento para controlar o comportamento.' },
      { name: 'Assincronia: callbacks, promessas e async/await', explanation: 'Muitas tarefas, como pedir dados a um servidor, demoram tempo e não devem bloquear a página. As promessas representam um valor futuro e o async/await torna o código assíncrono mais legível. Este tema é fundamental para consumir APIs.' },
      { name: 'Pedidos a APIs com fetch', explanation: 'A função fetch permite fazer pedidos HTTP e obter dados, normalmente em formato JSON. É preciso verificar se o pedido correu bem e tratar os erros. Com estes conhecimentos consegues ligar a tua aplicação a serviços reais.' },
      { name: 'Módulos e organização do código', explanation: 'Os módulos permitem dividir o código em ficheiros com import e export. Isto evita variáveis globais e torna o projeto mais fácil de manter. É a base de qualquer projeto moderno em JavaScript.' },
      { name: 'Tratamento de erros e depuração', explanation: 'O try/catch permite lidar com erros sem quebrar a aplicação. As ferramentas de desenvolvimento do browser, como a consola e os breakpoints, ajudam a encontrar problemas. Depurar bem é uma competência tão importante como programar.' },
      { name: 'Boas práticas e estilo de código', explanation: 'Usar nomes claros, funções pequenas e um estilo consistente torna o código mais legível. Ferramentas como o ESLint e o Prettier ajudam a manter a qualidade automaticamente. Código legível é código que se mantém durante anos.' }
    ],
    quiz: [
      { question: 'Qual palavra-chave cria uma variável que não pode ser reatribuída?', options: ['const', 'let', 'var', 'static'], answer: 0, explanation: 'A const cria uma ligação que não pode ser reatribuída.' },
      { question: 'Qual método cria um novo array transformando cada elemento?', options: ['map', 'push', 'pop', 'length'], answer: 0, explanation: 'O map devolve um novo array com cada elemento transformado.' },
      { question: 'O que é o DOM?', options: ['A representação da página em objetos', 'Uma base de dados', 'Um servidor web', 'Uma linguagem de estilo'], answer: 0, explanation: 'O DOM é a árvore de objetos que representa a página no browser.' },
      { question: 'O que representa uma promessa em JavaScript?', options: ['Um valor que estará disponível no futuro', 'Uma variável global', 'Um tipo de loop', 'Um ficheiro CSS'], answer: 0, explanation: 'Uma promessa representa o resultado futuro de uma operação assíncrona.' },
      { question: 'Para que serve o async/await?', options: ['Escrever código assíncrono de forma legível', 'Criar tabelas', 'Compilar JavaScript', 'Alterar o HTML'], answer: 0, explanation: 'O async/await simplifica o trabalho com promessas.' },
      { question: 'Qual função faz pedidos HTTP a uma API?', options: ['fetch', 'print', 'alert', 'confirm'], answer: 0, explanation: 'A fetch faz pedidos HTTP e devolve uma promessa com a resposta.' },
      { question: 'Para que servem os módulos?', options: ['Dividir o código em ficheiros reutilizáveis', 'Aumentar a velocidade do browser', 'Substituir o CSS', 'Criar imagens'], answer: 0, explanation: 'Os módulos organizam o código em unidades com import e export.' },
      { question: 'Qual estrutura trata erros em JavaScript?', options: ['try/catch', 'if/else', 'for/while', 'map/reduce'], answer: 0, explanation: 'O try/catch captura e trata erros sem quebrar a aplicação.' }
    ]
  },
  {
    id: 'typescript',
    title: 'TypeScript',
    keys: ['typescript', 'ts', 'tipagem', 'tipos estáticos'],
    summary: 'Aprender TypeScript para escrever JavaScript mais seguro, com tipos que detetam erros antes de o código correr.',
    topics: [
      { name: 'Porque usar TypeScript', explanation: 'TypeScript é JavaScript com tipos. Os tipos permitem detetar erros durante o desenvolvimento, antes de o código correr no browser. Em projetos grandes, isto reduz imenso os erros e melhora o autocompletar do editor.' },
      { name: 'Tipos básicos e inferência', explanation: 'Os tipos básicos incluem string, number, boolean, null e undefined. O TypeScript consegue inferir o tipo a partir do valor atribuído, o que reduz a necessidade de escrever tipos manualmente. As anotações explícitas são úteis em funções e interfaces.' },
      { name: 'Interfaces e tipos de objetos', explanation: 'As interfaces descrevem a forma de um objeto, indicando que propriedades tem e de que tipo. São muito usadas para modelar dados de APIs e props de componentes. Uma vez definida, a interface ajuda a garantir que o objeto está sempre correto.' },
      { name: 'Funções tipadas', explanation: 'Em TypeScript indicas o tipo dos parâmetros e do valor devolvido. Isto evita passar o argumento errado ou esquecer o retorno. Parâmetros opcionais e valores por defeito tornam as funções mais flexíveis.' },
      { name: 'Uniões, literais e enums', explanation: 'Uma união permite que um valor seja de mais de um tipo, por exemplo string ou number. Os tipos literais restringem a valores exatos, como "pequeno" ou "grande". Os enums dão nomes a conjuntos de constantes relacionadas.' },
      { name: 'Genéricos', explanation: 'Os genéricos permitem escrever código que funciona com vários tipos mantendo a segurança. Em vez de fixares um tipo, usas um parâmetro de tipo. São muito usados em funções utilitárias e em estruturas de dados reutilizáveis.' },
      { name: 'Tipagem no React', explanation: 'No React, o TypeScript tipa as props e o estado dos componentes. Isto evita passar a prop errada ou com o tipo errado. A integração com o editor dá sugestões automáticas muito úteis.' },
      { name: 'Configuração e ferramentas', explanation: 'O ficheiro tsconfig.json define como o TypeScript compila o projeto. Ferramentas de verificação de tipos podem correr em conjunto com o build. Configurar bem o projeto desde o início poupa muitos problemas.' },
      { name: 'Tipos avançados e utilitários', explanation: 'O TypeScript oferece tipos utilitários como Partial, Pick e Record que transformam outros tipos. Compreender estes utilitários evita duplicar definições. São especialmente úteis ao trabalhar com dados parciais de formulários.' },
      { name: 'Boas práticas de tipagem', explanation: 'Evita o tipo any, pois desliga a verificação. Prefere tipos precisos e nomes claros para as interfaces. Tipos bem pensados funcionam como documentação viva do projeto.' }
    ],
    quiz: [
      { question: 'O que acrescenta o TypeScript ao JavaScript?', options: ['Tipos estáticos', 'Um novo motor de base de dados', 'Um servidor web', 'Estilos CSS'], answer: 0, explanation: 'O TypeScript acrescenta um sistema de tipos ao JavaScript.' },
      { question: 'Para que serve uma interface?', options: ['Descrever a forma de um objeto', 'Criar loops', 'Fazer pedidos HTTP', 'Guardar ficheiros'], answer: 0, explanation: 'A interface define que propriedades e tipos um objeto deve ter.' },
      { question: 'Qual é a vantagem dos tipos?', options: ['Detetar erros antes de o código correr', 'Tornar a página mais bonita', 'Aumentar o tamanho das imagens', 'Substituir o Node.js'], answer: 0, explanation: 'Os tipos apanham erros em tempo de desenvolvimento.' },
      { question: 'O que é um tipo genérico?', options: ['Código que funciona com vários tipos mantendo segurança', 'Um tipo que não existe', 'Um erro de compilação', 'Uma variável global'], answer: 0, explanation: 'Os genéricos permitem reutilizar código mantendo a verificação de tipos.' },
      { question: 'Porque se deve evitar o tipo any?', options: ['Desliga a verificação de tipos', 'É mais rápido', 'Ocupa menos memória', 'Melhora a segurança'], answer: 0, explanation: 'O any desativa a verificação e perde-se a principal vantagem do TypeScript.' },
      { question: 'O que define o ficheiro tsconfig.json?', options: ['Como o TypeScript compila o projeto', 'As cores do site', 'Os dados da base de dados', 'Os utilizadores'], answer: 0, explanation: 'O tsconfig.json contém as opções de compilação do TypeScript.' }
    ]
  },
  {
    id: 'htmlcss',
    title: 'HTML e CSS',
    keys: ['html', 'css', 'html5', 'css3', 'web design', 'webdesign', 'layout', 'responsivo', 'flexbox', 'grid', 'front-end', 'interfaces'],
    summary: 'Construir páginas web modernas e responsivas, dominando a estrutura do HTML, o estilo do CSS e o design adaptado a todos os ecrãs.',
    topics: [
      { name: 'Estrutura de um documento HTML', explanation: 'Um documento HTML tem cabeça, com metadados, e corpo, com o conteúdo visível. As etiquetas semânticas, como header, nav, main, section e footer, dão significado à estrutura. Uma boa estrutura melhora a acessibilidade e o posicionamento nos motores de busca.' },
      { name: 'Texto, imagens e links', explanation: 'As etiquetas de texto vão dos títulos às listas e parágrafos. As imagens devem ter sempre texto alternativo para acessibilidade. Os links ligam páginas e recursos e são a base da navegação na web.' },
      { name: 'Formulários e validação', explanation: 'Os formulários permitem recolher dados do utilizador através de campos e botões. O HTML moderno tem validação nativa, como campos obrigatórios e tipos específicos. Associar cada campo à sua etiqueta é essencial para a acessibilidade.' },
      { name: 'Seletores e especificidade', explanation: 'Os seletores CSS escolhem os elementos a estilizar, por classe, id ou etiqueta. A especificidade determina qual regra ganha quando há conflitos. Compreender isto evita lutar contra o CSS sem saber porquê.' },
      { name: 'Modelo de caixa', explanation: 'Cada elemento é uma caixa com conteúdo, preenchimento, borda e margem. O box-sizing controla se a largura inclui o preenchimento e a borda. Este modelo é a base de todo o layout em CSS.' },
      { name: 'Flexbox', explanation: 'O Flexbox alinha e distribui elementos numa direção, em linha ou em coluna. Propriedades como justify-content e align-items controlam o espaçamento. É ideal para barras de navegação, cartões e componentes simples.' },
      { name: 'CSS Grid', explanation: 'O Grid permite criar layouts em duas dimensões, com linhas e colunas. É perfeito para estruturas de página completas e galerias. Combinado com o Flexbox, cobre quase todas as necessidades de layout.' },
      { name: 'Design responsivo', explanation: 'O design responsivo adapta a página ao tamanho do ecrã. As media queries aplicam estilos diferentes consoante a largura, e as unidades relativas ajudam a escalar. Hoje a maioria do tráfego vem de telemóveis, por isso é indispensável.' },
      { name: 'Cores, tipografia e espaçamento', explanation: 'Uma boa paleta, tipografia legível e espaçamento consistente são o que distingue um site amador de um profissional. Variáveis CSS permitem manter cores e medidas consistentes. Menos é mais: a simplicidade melhora a leitura.' },
      { name: 'Transições e animações', explanation: 'As transições suavizam mudanças de estilo e as animações dão vida à interface. Devem ser subtis e rápidas para não distrair. Respeitar a preferência de movimento reduzido é uma boa prática de acessibilidade.' },
      { name: 'Acessibilidade e boas práticas', explanation: 'Acessibilidade significa que todos conseguem usar o site, incluindo pessoas com limitações. Contraste suficiente, navegação por teclado e texto alternativo são exemplos. Além de ser correto, melhora a experiência de todos.' },
      { name: 'Publicação de um site', explanation: 'Depois de construído, o site é publicado num serviço de alojamento estático. Podes ligar um domínio próprio e ativar HTTPS. Publicar cedo permite receber feedback e iterar rapidamente.' }
    ],
    quiz: [
      { question: 'Qual etiqueta representa o conteúdo principal da página?', options: ['main', 'div', 'span', 'br'], answer: 0, explanation: 'A etiqueta main marca o conteúdo principal do documento.' },
      { question: 'O que é o modelo de caixa em CSS?', options: ['Conteúdo, preenchimento, borda e margem', 'Um tipo de letra', 'Uma cor de fundo', 'Um servidor'], answer: 0, explanation: 'Todo o elemento é uma caixa com conteúdo, preenchimento, borda e margem.' },
      { question: 'Para que serve o Flexbox?', options: ['Alinhar e distribuir elementos numa direção', 'Criar bases de dados', 'Compilar JavaScript', 'Guardar ficheiros'], answer: 0, explanation: 'O Flexbox organiza elementos numa linha ou coluna com alinhamento fácil.' },
      { question: 'O que são media queries?', options: ['Regras CSS que se aplicam consoante o tamanho do ecrã', 'Pedidos a servidores', 'Tipos de imagens', 'Etiquetas HTML'], answer: 0, explanation: 'As media queries adaptam o estilo a diferentes tamanhos de ecrã.' },
      { question: 'Porque é importante o texto alternativo nas imagens?', options: ['Melhora a acessibilidade', 'Deixa a imagem maior', 'Acelera a internet', 'Muda a cor'], answer: 0, explanation: 'O texto alternativo descreve a imagem para quem não a consegue ver.' },
      { question: 'Para que servem as variáveis CSS?', options: ['Guardar valores reutilizáveis como cores', 'Criar loops', 'Fazer pedidos HTTP', 'Guardar dados do utilizador'], answer: 0, explanation: 'As variáveis CSS mantêm cores e medidas consistentes em todo o site.' },
      { question: 'O que caracteriza um design responsivo?', options: ['Adapta-se a todos os tamanhos de ecrã', 'Só funciona em computadores', 'Usa apenas imagens grandes', 'Não usa CSS'], answer: 0, explanation: 'O design responsivo ajusta-se a telemóveis, tablets e computadores.' },
      { question: 'Qual é uma boa prática de acessibilidade?', options: ['Garantir contraste suficiente', 'Usar texto muito pequeno', 'Desativar o teclado', 'Remover etiquetas'], answer: 0, explanation: 'Contraste suficiente ajuda todos a ler, incluindo pessoas com baixa visão.' }
    ]
  }
]
