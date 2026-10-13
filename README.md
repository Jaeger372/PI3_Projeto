# Trilha — Gerador de Planos de Estudo

Aplicação web onde qualquer utilizador (estudante, autodidata ou curioso) escreve o que quer
aprender e recebe, do zero e na hora, um plano de estudos completo e estruturado, dividido por
dias, acompanhado de tópicos explicativos e mini-quizzes para testar os conhecimentos.

Projeto Integrado 3. Desenvolvido com as tecnologias estudadas de forma autónoma:
**React** (frontend) e **Node.js** (backend), com **Supabase** como base de dados.

## Funcionalidades

- Criação de um plano de estudos a partir de um tema escrito pelo utilizador.
- Plano dividido por dias, com objetivos claros em cada etapa.
- Tópicos explicativos por dia, apresentados em painéis que abrem e fecham.
- **Quizzes completos no fim de cada dia**, com correção imediata, dica opcional e explicação da resposta.
- **Seis tipos de pergunta**: escolha única, escolha múltipla, verdadeiro/falso, ordenação, preenchimento e previsão de código.
- **Progressão de dificuldade**: perguntas de base nos primeiros dias e avançadas nos últimos, sem repetição dentro do plano.
- **Perguntas técnicas e exigentes**: mais de 450 perguntas organizadas em 30 áreas, cobrindo programação, bases de dados, jogos, redes, sistemas, dados, arquitetura e muito mais.
- **Pontuação do dia** (certas/total) com orientação de estudo no fim de cada quiz.
- Marcação de dias concluídos e anel de progresso guardado na base de dados.
- Página **Meus Planos** com todos os planos criados, estatísticas, procura e filtro por nível.
- Duração configurável: 3, 7, 14 ou 30 dias.
- Nível configurável: iniciante, intermédio ou avançado.
- Base de conhecimento curricular que cobre as áreas de preferência do projeto.
- Interface editorial escura em vermelho, preto e dourado, com tipografia Fraunces e Inter.
- Ecrã de geração com passos animados, favicon próprio e suporte a movimento reduzido.

## Áreas curriculares incluídas

- Programação Front-End (React, JavaScript, TypeScript, HTML e CSS)
- Programação Back-End (Node.js, SQL e Bases de Dados)
- Programação Full-Stack
- Programação Mobile
- Web Design e Experiência de Utilizador
- Gestão de Conteúdos
- Segurança na Web e Cibersegurança
- Marketing Digital
- Desenvolvimento e Design de Jogos
- Gráficos por Computador
- Linguagens e Fundamentos (Python, Algoritmos e Estruturas de Dados, C e C++, Java, C# e .NET)
- Infraestrutura (Git, Linux, Redes de Computadores, DevOps, Cloud e Contentores)
- Ciência de Dados e Análise
- Hardware e Sistemas Embarcados
- Metodologias Ágeis e Gestão de Projetos
- Blockchain e Tecnologias Descentralizadas
- Testes de Software e Qualidade
- Arquitetura de Software

Cada área tem um banco de perguntas técnicas próprio. Qualquer outro tema escrito pelo
utilizador recebe igualmente um plano estruturado, com quizzes de cultura técnica geral
exigentes, em vez de perguntas genéricas.

## Páginas

| Rota | Descrição |
|------|-----------|
| `/` | Página inicial com o formulário de criação |
| `/planos` | **Meus Planos**: todos os planos criados, com estatísticas, procura e filtro por nível |
| `/plano/:id` | Plano de estudos, com percurso, tópicos e quizzes |

## API

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/api/health` | Estado do serviço |
| GET | `/api/subjects` | Lista das áreas curriculares disponíveis |
| POST | `/api/plans` | Cria um plano a partir de `{ topic, days, level }` |
| GET | `/api/plans` | Lista os planos mais recentes |
| GET | `/api/plans/:id` | Devolve um plano completo |
| POST | `/api/plans/:id/progress` | Guarda o progresso em `{ progress: [1, 2] }` |
| DELETE | `/api/plans/:id` | Apaga um plano |

## Arquitetura

- **Frontend**: React 18 com React Router, compilado com Vite.
- **Backend**: Node.js com Express, responsável pela API e pela entrega dos ficheiros do frontend.
- **Base de dados**: Supabase (PostgreSQL), através do cliente oficial `@supabase/supabase-js`.
- **Geração de planos**: motor próprio, em `server/planos`, que combina uma base de conhecimento
  curricular com regras de estruturação do percurso.

### Estrutura de pastas

```
webapp/
├── index.html
├── package.json
├── vite.config.js
├── ecosystem.config.cjs
├── .env.example              exemplo das variáveis do Supabase
├── supabase/
│   └── schema.sql            script de criação da tabela
├── server/
│   ├── index.js              servidor Express e API
│   ├── env.js                carregamento das variáveis de ambiente
│   ├── db.js                 ligação ao Supabase
│   ├── repo.js               operações de dados
│   └── planos/
│       ├── index.js          motor de geração de planos e dos quizzes
│       ├── subjects/
│       │   ├── frontend.js   React, JavaScript, TypeScript, HTML e CSS
│       │   ├── backend.js    Node.js, SQL e Bases de Dados
│       │   ├── mobile.js     Mobile, Web Design, Gestão de Conteúdos
│       │   ├── security.js   Segurança, Marketing, Full-Stack
│       │   ├── games.js      Jogos, Design de Jogos, Gráficos
│       │   ├── langs.js      Python, Algoritmos, C e C++, Java, C#
│       │   ├── infra.js      Git, Linux, Redes, DevOps
│       │   └── more.js       Dados, Hardware, Ágil, Blockchain, Testes, Arquitetura
│       └── banco/
│           ├── index.js      índice dos bancos de perguntas
│           ├── react.js
│           ├── javascript.js
│           ├── typescript.js
│           ├── htmlcss.js
│           ├── nodejs.js
│           ├── sql.js
│           ├── mobile.js
│           ├── webdesign.js
│           ├── conteudos.js
│           ├── seguranca.js
│           ├── marketing.js
│           ├── fullstack.js
│           ├── games.js
│           ├── gamedesign.js
│           ├── graficos.js
│           ├── python.js
│           ├── algoritmos.js
│           ├── cpp.js
│           ├── java.js
│           ├── csharp.js
│           ├── git.js
│           ├── linux.js
│           ├── redes.js
│           ├── devops.js
│           ├── dados.js
│           ├── hardware.js
│           ├── agile.js
│           ├── blockchain.js
│           ├── testes.js
│           └── arquitetura.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── api.js
    ├── index.css
    ├── components/
    │   ├── Navbar.jsx
    │   ├── DayPanel.jsx      tópicos e sistema de quizzes
    │   ├── Toast.jsx
    │   └── Icons.jsx
    └── pages/
        ├── Landing.jsx
        ├── Loading.jsx
        ├── Plan.jsx
        └── MyPlans.jsx
```

## Base de dados (Supabase)

Tabela `plans`, criada pelo script `supabase/schema.sql`:

| Coluna | Tipo | Descrição |
|--------|------|-----------|
| id | text | Identificador do plano (chave primária) |
| topic | text | Tema escrito pelo utilizador |
| level | text | Nível escolhido |
| total_days | integer | Número de dias |
| title | text | Título do plano |
| summary | text | Resumo do percurso |
| content | jsonb | Dias do plano |
| progress | jsonb | Dias concluídos |
| matched | text | Área curricular associada |
| created_at | timestamptz | Data de criação |

### Configurar o Supabase

1. Criar um projeto em https://supabase.com.
2. Abrir o **SQL Editor** e executar o conteúdo de `supabase/schema.sql`.
3. Em **Project Settings → API**, copiar o URL do projeto e a chave `service_role`.
4. Copiar `.env.example` para `.env` e preencher:

```
SUPABASE_URL=https://o-teu-projeto.supabase.co
SUPABASE_SERVICE_KEY=a-tua-chave-service-role
PORT=3000
```

O ficheiro `.env` nunca deve ser enviado para o repositório.

Sem credenciais configuradas, a aplicação arranca em modo local com SQLite, para permitir
desenvolvimento e testes imediatos. Assim que o `.env` existir, passa a usar o Supabase
automaticamente.

## Como usar

1. Escreve na página inicial o que queres aprender, ou escolhe uma das sugestões.
2. Escolhe a duração e o nível.
3. Clica em **Gerar o meu plano de estudos**.
4. Navega pelos dias no menu lateral, lê os tópicos e responde aos quizzes.
5. Em cada pergunta podes pedir uma **dica** antes de responder; depois de responder vês a explicação.
6. No fim do quiz do dia vês a **pontuação** (certas/total) e uma orientação de estudo.
7. Marca os dias como concluídos para acompanhar o progresso.
8. Consulta todos os planos criados na página **Meus Planos**, com estatísticas e procura.

## Instalação e execução

Requisitos: Node.js 18 ou superior.

```bash
npm install
npm run build
npm start
```

A aplicação fica disponível em http://localhost:3000.

Para desenvolvimento com recarregamento automático do frontend:

```bash
npm run dev
```

### Base de dados

A aplicação suporta dois modos:

- **Local (por defeito)**: usa SQLite e guarda os dados no ficheiro `data/trilha.db`. Não requer
  qualquer configuração e funciona logo após a instalação.
- **Supabase**: se existir um ficheiro `.env` com as credenciais, passa a usar o Supabase
  automaticamente. Ver a secção *Configurar o Supabase* acima.

## Tecnologias

- React
- Node.js
- Express
- Vite
- Supabase (PostgreSQL) ou SQLite

---

*Trilha · Projeto Integrado 3*
