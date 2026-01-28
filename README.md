# 🔐 JWT Auth API • Frontend

Este é o **frontend do projeto JWT Auth API**, uma aplicação que demonstra um fluxo completo de autenticação usando **Java, Spring Boot e JSON Web Tokens (JWT)**.

A interface é moderna, com:
- Tema claro / escuro
- Animações fluidas
- Chatbot explicativo
- Visualização do token JWT
- Integração com a API backend

---

## 🚀 Link ao vivo

Veja a aplicação rodando no GitHub Pages:

🔗 https://KVmustang.github.io/java-auth-api-jwt/


---

## 📌 O que este projeto mostra

Este frontend consome a API de autenticação JWT. Funcionalidades incluídas:

✔ Login com usuário e senha  
✔ Armazenamento do token JWT no `localStorage`  
✔ Acesso a rota protegida (`/api/user/profile`)  
✔ Decodificação visual do token (header e payload)  
✔ Animações e UX modernas  
✔ Chatbot com explicações interativas  
✔ Tema claro / escuro persistente

---

## 📦 Tecnologias usadas

| Tecnologia | Finalidade |
|------------|------------|
| HTML       | Estrutura da página |
| CSS        | Estilo, temas, animações |
| JavaScript | Lógica de interação e comunicação com a API |
| GitHub Pages | Hospedagem gratuita do frontend |

---

## 🧠 Como funciona

A aplicação frontend conversa com o backend JWT Auth API. O fluxo é:

1. O usuário digita usuário e senha
2. O frontend envia para o backend
3. Se correto, o backend retorna um token JWT
4. O token é salvo e usado para acessar rotas protegidas
5. O frontend mostra visualmente o token decodificado

---

## 📦 Conteúdo do projeto

auth-api-jwt-ui/
├── index.html
├── css/
│ └── style.css
├── js/
│ ├── api.js
│ ├── ui.js
│ └── chatbot.js
└── assets/
└── bot.svg


---

## 🧠 Dicas de uso

1. Clone o repositório
2. Abra o `index.html` no navegador
3. Use a API backend rodando em http://localhost:8080
4. Teste login, perfil e observe as animações

---

## 👨‍💻 Autor

Desenvolvido por KVmustang

GitHub: https://github.com/KVmustang

---

## 📝 Observações finais

Este projeto foi criado como parte de um portfólio profissional para vagas de **desenvolvedor júnior**, demonstrando:
- Integração frontend + backend
- Conceitos de segurança (JWT)
- UI/UX com animações e interatividade
