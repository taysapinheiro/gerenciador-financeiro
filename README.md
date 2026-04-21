# Gerenciador Financeiro

Um aplicativo moderno de gerenciamento financeiro construído com **Angular 20** utilizando as tecnologias mais recentes e melhores práticas do framework.

## 🎯 Objetivos de Aprendizado

Este projeto foi desenvolvido para explorar e dominar os seguintes conceitos avançados do Angular:

### 1. **Dominar os Fundamentos**
Se você está começando, não se preocupe! Temos um módulo opcional dedicado aos conceitos essenciais do Angular.

### 2. **Construir Apps Reativas com Signals API**
Aprenda a criar aplicações dinâmicas e de alta performance usando a revolucionária Signals API para gerenciamento de estado.

### 3. **Gerenciar Requisições como um Profissional**
Explore a nova Resource API (httpResource) para lidar com requisições HTTP de forma reativa e eficiente.

### 4. **Desvendar o Desenvolvimento Zoneless**
Entenda e aplique o conceito Zoneless em suas aplicações, eliminando o Zone.js para ganhos significativos de performance.

### 5. **Integrar RxJS e Signals**
Saiba como combinar o poder do RxJS com a eficiência das Signals, usando a API de interoperabilidade.

### 6. **Implementar Autenticação Robusta**
Crie fluxos de autenticação seguros com Functional Interceptors, Guards, Resolvers e o elegante Facade Pattern.

### 7. **Desenvolver Componentes Inteligentes**
Crie Pipes e Diretivas customizadas, utilizando a Directive Composition API para um código mais limpo e organizado.

### 8. **Otimizar a Performance**
Use o Defer Block para carregar elementos pesados sob demanda, garantindo páginas mais rápidas.

### 9. **Criar Formulários Dinâmicos**
Domine a construção de formulários inteligentes com Reactive Forms e Signals.

### 10. **Construir Dashboards Profissionais**
Desenvolva uma dashboard completa e elegante utilizando o Angular Material 20+.

## 🚀 O que está Incluído

- **Angular 20.3.x** com suporte completo a Signals
- **Angular Material 20** para UI profissional
- **RxJS 7.8** integrado com Signals
- **Reactive Forms** para gerenciamento de formulários
- **JSON Server** para simulação de backend
- **TypeScript** com configurações modernas
- **SCSS** para estilização avançada

## 📋 Pré-requisitos

Certifique-se de ter instalado:

- **Node.js** (versão 18 ou superior)
- **npm** (versão 9 ou superior)

## 🛠️ Como Iniciar o Projeto

### 1. Instalar Dependências

```bash
npm install
```

### 2. Iniciar a Aplicação

```bash
npm start
```

Este comando iniciará simultaneamente:

- **Servidor de desenvolvimento Angular** em `http://localhost:4200`
- **JSON Server** em `http://localhost:3000` (para simular o backend)

### Scripts Disponíveis

| Comando                | Descrição                                            |
| ---------------------- | ---------------------------------------------------- |
| `npm start`            | Inicia o app Angular e o JSON Server simultaneamente |
| `npm run start:app`    | Inicia apenas o servidor de desenvolvimento Angular  |
| `npm run start:server` | Inicia apenas o JSON Server                          |
| `npm run build`        | Compila o projeto para produção                      |
| `npm run watch`        | Recompila automaticamente em desenvolvimento         |
| `npm test`             | Executa testes unitários                             |

## 🗂️ Estrutura do Projeto

```
src/
├── app/
│   ├── core/              # Módulos principais e layout
│   │   └── layout/        # Componente de layout
│   ├── features/          # Funcionalidades principais
│   │   ├── home/          # Dashboard principal
│   │   └── components/    # Componentes compartilhados de features
│   ├── shared/            # Serviços e interfaces compartilhadas
│   │   ├── transaction/   # Tipos e enums de transações
│   │   └── feedback/      # Serviços de feedback
│   └── app.ts             # Componente raiz
├── styles/                # Estilos globais e theme
└── main.ts                # Entry point
```

## 🎨 Tecnologias Utilizadas

- **Angular 20** - Framework principal
- **Angular Material 20** - Componentes UI
- **RxJS** - Programação reativa
- **Signals API** - Gerenciamento de estado moderno
- **Reactive Forms** - Gerenciamento de formulários
- **TypeScript** - Linguagem tipada
- **SCSS** - Pré-processador CSS
- **JSON Server** - Backend simulado

## 📝 Funcionalidades

- 📊 Dashboard com visualização de transações
- 💰 Gerenciamento de transações financeiras
- 💳 Cálculo de balanço automático
- 🎯 Filtros e buscas avançadas
- 🎨 Interface responsiva com Material Design
- ⚡ Performance otimizada com Signals

## 📚 Próximos Passos

1. Explore a pasta `src/app` para entender a estrutura do projeto
2. Estude os serviços em `src/app/shared/services` para ver a integração com Signals
3. Revise os componentes em `src/app/features` para ver componentes inteligentes
4. Implemente novas funcionalidades usando as técnicas aprendidas

## 🤝 Contribuindo

Este é um projeto de estudo. Sinta-se livre para experimentar, modificar e aprender com o código.

## 📄 Licença

Este projeto está disponível para fins educacionais.

---

**Desenvolvido com ❤️ para aprender Angular moderno**
# gerenciador-financeiro
