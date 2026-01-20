# Portfolio Wesley Costa - React

Portfolio profissional desenvolvido com React e Vite, apresentando projetos, habilidades e informações de contato.

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para construção de interfaces
- **Vite** - Build tool moderna e rápida
- **CSS3** - Estilização com variáveis CSS e animações
- **React Hooks** - useState, useEffect, hooks customizados

## 📁 Estrutura do Projeto

```
portfolio-react/
├── src/
│   ├── components/          # Componentes React
│   │   ├── SplashScreen.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Sites.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/                # Dados dos projetos e skills
│   │   ├── projects.js
│   │   └── skills.js
│   ├── hooks/               # Hooks customizados
│   │   └── useTheme.js
│   ├── assets/              # Imagens e recursos
│   │   └── images/
│   ├── styles/              # Estilos globais
│   │   └── index.css
│   ├── App.jsx              # Componente principal
│   └── main.jsx             # Ponto de entrada
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Funcionalidades

- ✅ **Splash Screen Animada** - Tela inicial com efeito de digitação
- ✅ **Tema Dark/Light** - Alternância entre modos claro e escuro
- ✅ **Hero Split Screen** - Seção inicial interativa com duas faces
- ✅ **Terminal Retro** - Seção "Sobre" estilizada como terminal
- ✅ **Projetos Interativos** - Navegação entre projetos com preview
- ✅ **Navegação Suave** - Smooth scroll entre seções
- ✅ **Totalmente Responsivo** - Adaptado para mobile e desktop
- ✅ **Animações CSS3** - Efeitos visuais modernos
- ✅ **Intersection Observer** - Animações ao scroll

## 🛠️ Como Executar

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Iniciar servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Acessar no navegador:**
   ```
   http://localhost:5173
   ```

## 📦 Build para Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

## 🎯 Componentes Principais

### SplashScreen
Tela inicial com animação de digitação que aparece ao carregar a página.

### Header
Barra de navegação fixa com menu responsivo e botão de alternância de tema.

### Hero
Seção split-screen interativa mostrando as duas especialidades (QA e Desenvolvedor).

### About
Seção com terminal retro e grid de tecnologias.

### Projects
Lista de projetos com navegação e preview de imagens.

### Skills
Grid de habilidades organizadas por categoria.

### Contact
Cards de contato com links para redes sociais e comunicação.

## 🔧 Hooks Customizados

### useTheme
Gerencia o tema (light/dark) com persistência em localStorage.

```javascript
const { theme, toggleTheme } = useTheme();
```

## 🎨 Variáveis CSS

O projeto utiliza CSS Custom Properties para fácil customização:

```css
--primary-color: #667eea
--secondary-color: #764ba2
--accent-color: #f093fb
```

## 📱 Responsividade

- **Desktop:** Layout completo com todas as funcionalidades
- **Mobile:** Menu hamburger, layout adaptado, cards empilhados

## 🌐 Deploy

Projeto pronto para deploy em:
- Vercel
- Netlify
- GitHub Pages
- Qualquer hosting estático

## 👨‍💻 Autor

**Wesley Aparecido Costa**
- Email: wesleymr.robot@gmail.com
- GitHub: [@wesleyara](https://github.com/wesleyara)
- LinkedIn: [/wesleyara](https://linkedin.com/in/wesleyara)

## 📄 Licença

Este projeto está sob a licença MIT.
