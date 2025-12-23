# Portal Descoladão

Portal institucional do aplicativo Descoladão - Website moderno e responsivo construído com Vite, React, TypeScript e shadcn/ui.

## Funcionalidades

- **Home**: Landing page com apresentação do app, principais funcionalidades e CTAs para download
- **Sobre**: Página institucional com história, missão, valores e conquistas
- **Suporte**: FAQ completo e formulário de contato integrado com EmailJS
- Design responsivo e moderno
- Componentes reutilizáveis com shadcn/ui
- Navegação fluida com React Router
- Dark mode ready

## Stack Tecnológica

- **Build Tool**: Vite
- **Framework**: React 18 + TypeScript
- **UI Components**: shadcn/ui (Radix UI + Tailwind CSS)
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Email**: EmailJS

## Pré-requisitos

- Node.js 20.x ou superior
- npm ou yarn

## Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd Portal_Descoladao
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente para EmailJS:
```bash
cp .env.example .env
```

4. Edite o arquivo `.env` e adicione suas credenciais do EmailJS:
   - Crie uma conta gratuita em [emailjs.com](https://www.emailjs.com/)
   - Configure um serviço de email (Gmail, Outlook, etc)
   - Crie um template de email com as variáveis: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`
   - Cole as credenciais no arquivo `.env`

5. Atualize o componente ContactForm com as variáveis de ambiente:
   - Abra `src/components/ContactForm.tsx`
   - Substitua as credenciais hardcoded pelas variáveis de ambiente do Vite

## Desenvolvimento

Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

O site estará disponível em `http://localhost:5173`

## Build para Produção

```bash
npm run build
```

Os arquivos otimizados estarão na pasta `dist/`

## Preview da Build

```bash
npm run preview
```

## Estrutura do Projeto

```
Portal_Descoladao/
├── public/              # Arquivos estáticos
│   └── images/         # Screenshots, logo, etc
├── src/
│   ├── components/     # Componentes React
│   │   ├── ui/        # Componentes shadcn/ui
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── AppInfo.tsx
│   │   ├── FAQ.tsx
│   │   └── ContactForm.tsx
│   ├── pages/         # Páginas do site
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Support.tsx
│   │   └── NotFound.tsx
│   ├── lib/
│   │   └── utils.ts   # Utilitários
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .env.example
├── components.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Personalização

### Conteúdo

Para personalizar o conteúdo do site:

1. **Informações do app**: Edite os componentes em `src/components/`
2. **FAQ**: Modifique o array `faqs` em `src/components/FAQ.tsx`
3. **Funcionalidades**: Atualize o array `features` em `src/components/Features.tsx`
4. **Página Sobre**: Edite `src/pages/About.tsx`

### Imagens

Adicione suas imagens na pasta `public/images/`:
- Logo do aplicativo
- Screenshots do app
- Ícone/favicon

Atualize as referências nos componentes conforme necessário.

### Cores e Tema

As cores são definidas via CSS variables em `src/index.css`. Para personalizar:

1. Edite as variáveis HSL em `:root` e `.dark`
2. Ou use o gerador de temas do shadcn/ui: [ui.shadcn.com/themes](https://ui.shadcn.com/themes)

## Deploy

O projeto pode ser facilmente deployado em:

- **Vercel**: `vercel --prod`
- **Netlify**: Arraste a pasta `dist/` ou conecte o repositório Git
- **GitHub Pages**: Use `gh-pages` ou GitHub Actions

## Próximos Passos

- [ ] Adicionar imagens reais do aplicativo
- [ ] Configurar EmailJS com suas credenciais
- [ ] Personalizar conteúdo (textos, estatísticas, etc)
- [ ] Adicionar links reais para App Store e Google Play
- [ ] Configurar Google Analytics (opcional)
- [ ] Adicionar sitemap.xml para SEO
- [ ] Configurar meta tags Open Graph e Twitter Cards

## Licença

Este projeto é propriedade do Descoladão. Todos os direitos reservados.
