# Guia Completo de Publicação - Juntas Somos Mais Fortes

## 📋 Pré-requisitos

1. **Conta no GitHub** - [Criar conta](https://github.com/signup)
2. **Git instalado** - [Baixar Git](https://git-scm.com/downloads)
3. **Conta no Vercel** (opcional, mas recomendado) - [Criar conta](https://vercel.com/signup)

---

## 🚀 PASSO 1: Preparar o Projeto Localmente

### 1.1 Extrair os arquivos
Se você recebeu um arquivo ZIP:
- Descompacte o arquivo `juntas-somos-mais-fortes.zip`
- Você terá uma pasta chamada `juntas-somos-mais-fortes-html`

### 1.2 Verificar os arquivos
Abra a pasta e certifique-se de que tem:
```
juntas-somos-mais-fortes-html/
├── index.html
├── styles/
│   └── style.css
├── scripts/
│   └── script.js
├── images/
│   ├── logo-unifg.png
│   └── hero-background.png
├── README.md
├── package.json
├── .gitignore
└── GUIA_PUBLICACAO.md
```

### 1.3 Testar localmente (opcional)
Abra o arquivo `index.html` no navegador para testar o site.

---

## 📝 PASSO 2: Criar Repositório no GitHub

### 2.1 Acessar GitHub
1. Vá para [github.com](https://github.com)
2. Faça login com sua conta
3. Clique no ícone `+` no canto superior direito
4. Selecione "New repository"

### 2.2 Configurar o repositório
1. **Repository name:** `juntas-somos-mais-fortes`
2. **Description:** "Site de conscientização sobre violência doméstica desenvolvido pelos alunos do curso de direito da UNIFG"
3. **Public:** Deixe marcado (para que todos possam acessar)
4. **Initialize this repository:** Deixe desmarcado
5. Clique em "Create repository"

### 2.3 Copiar o URL
Você verá uma página com instruções. Copie o URL que aparece (algo como `https://github.com/seu-usuario/juntas-somos-mais-fortes.git`)

---

## 💻 PASSO 3: Enviar para GitHub via Git

### 3.1 Abrir o terminal/prompt de comando

**Windows:**
- Clique com botão direito na pasta `juntas-somos-mais-fortes-html`
- Selecione "Open PowerShell window here" ou "Git Bash here"

**Mac/Linux:**
- Abra o Terminal
- Digite: `cd /caminho/para/juntas-somos-mais-fortes-html`

### 3.2 Configurar Git (primeira vez apenas)
```bash
git config --global user.name "Seu Nome Completo"
git config --global user.email "seu.email@gmail.com"
```

### 3.3 Inicializar o repositório local
```bash
git init
```

### 3.4 Adicionar todos os arquivos
```bash
git add .
```

### 3.5 Fazer o primeiro commit
```bash
git commit -m "Projeto Juntas Somos Mais Fortes - Conscientização sobre Violência Doméstica"
```

### 3.6 Adicionar o repositório remoto
```bash
git remote add origin https://github.com/SEU-USUARIO/juntas-somos-mais-fortes.git
```
(Substitua `SEU-USUARIO` pelo seu nome de usuário do GitHub)

### 3.7 Renomear branch para main
```bash
git branch -M main
```

### 3.8 Enviar para GitHub
```bash
git push -u origin main
```

Você pode ser solicitado a fazer login. Use suas credenciais do GitHub.

### ✅ Pronto!
Seu projeto está no GitHub! Acesse `https://github.com/seu-usuario/juntas-somos-mais-fortes` para verificar.

---

## 🌐 PASSO 4: Publicar no Vercel (Recomendado)

### 4.1 Acessar Vercel
1. Vá para [vercel.com](https://vercel.com)
2. Clique em "Sign Up"
3. Escolha "Continue with GitHub"
4. Autorize o Vercel a acessar sua conta GitHub

### 4.2 Importar o projeto
1. Após fazer login, clique em "New Project"
2. Você verá uma lista dos seus repositórios GitHub
3. Procure por "juntas-somos-mais-fortes"
4. Clique em "Import"

### 4.3 Configurar o projeto
1. **Project Name:** Deixe como `juntas-somos-mais-fortes`
2. **Framework Preset:** Deixe em branco (site estático)
3. **Build Command:** Deixe vazio
4. **Output Directory:** Deixe vazio
5. Clique em "Deploy"

### 4.4 Aguardar o deploy
Vercel irá fazer o build e publicar o site. Você verá uma mensagem "Congratulations!" quando terminar.

### 4.5 Acessar o site
Vercel fornecerá um URL como: `https://juntas-somos-mais-fortes.vercel.app`

**Seu site está ao vivo!** 🎉

---

## 🔄 PASSO 5: Atualizações Futuras

Sempre que você fizer mudanças no código:

### 5.1 Adicionar as mudanças
```bash
git add .
```

### 5.2 Fazer commit
```bash
git commit -m "Descrição das mudanças"
```

### 5.3 Enviar para GitHub
```bash
git push
```

**Vercel atualizará automaticamente o site!**

---

## 🆘 Solução de Problemas

### Erro: "fatal: not a git repository"
**Solução:** Certifique-se de que você está na pasta correta e execute `git init`

### Erro: "Permission denied (publickey)"
**Solução:** 
1. Gere uma chave SSH: `ssh-keygen -t ed25519 -C "seu.email@gmail.com"`
2. Adicione a chave ao GitHub: Vá para Settings → SSH and GPG keys → New SSH key
3. Cole a chave pública (arquivo `.pub`)

### Erro: "fatal: The current branch main has no upstream branch"
**Solução:** Use `git push -u origin main` na primeira vez

### O site não aparece no Vercel
**Solução:**
1. Verifique se o repositório é público no GitHub
2. Verifique se o arquivo `index.html` está na raiz do repositório
3. Aguarde alguns minutos e atualize a página do Vercel

---

## 📱 Domínio Personalizado (Opcional)

Se quiser usar um domínio próprio (ex: `juntas-somos-mais-fortes.com.br`):

### No Vercel:
1. Vá para o projeto no Vercel
2. Clique em "Settings"
3. Selecione "Domains"
4. Clique em "Add"
5. Digite seu domínio
6. Siga as instruções para configurar o DNS

---

## 📊 Monitorar o Site

### No Vercel:
- **Analytics:** Veja quantas pessoas visitam seu site
- **Deployments:** Histórico de atualizações
- **Settings:** Configurações gerais do projeto

### No GitHub:
- **Insights:** Estatísticas do repositório
- **Issues:** Rastrear problemas e sugestões
- **Discussions:** Comunidade ao redor do projeto

---

## 🎓 Comandos Git Úteis

```bash
# Ver status do repositório
git status

# Ver histórico de commits
git log

# Ver diferenças
git diff

# Desfazer último commit (cuidado!)
git reset --soft HEAD~1

# Criar nova branch
git checkout -b feature/nova-funcionalidade

# Mudar de branch
git checkout main

# Deletar branch local
git branch -d nome-da-branch

# Clonar um repositório
git clone https://github.com/usuario/repositorio.git
```

---

## 🤝 Colaboração (Opcional)

Se quiser que outras pessoas contribuam:

### 1. Adicionar colaboradores no GitHub
1. Vá para o repositório
2. Clique em "Settings"
3. Selecione "Collaborators"
4. Clique em "Add people"
5. Digite o nome de usuário do GitHub

### 2. Criar Pull Requests
- Colaboradores podem fazer fork, editar e criar pull requests
- Você revisa e aprova as mudanças

---

## ✅ Checklist Final

Antes de considerar o projeto completo:

- [ ] Site está no GitHub
- [ ] Site está publicado no Vercel
- [ ] URL do Vercel funciona corretamente
- [ ] Todas as páginas carregam
- [ ] Botões de emergência (180, 190) funcionam
- [ ] Site é responsivo (testado em mobile)
- [ ] README.md está atualizado
- [ ] Créditos da equipe aparecem no footer

---

## 📞 Suporte

Se tiver dúvidas:
1. Consulte a documentação do GitHub: [docs.github.com](https://docs.github.com)
2. Consulte a documentação do Vercel: [vercel.com/docs](https://vercel.com/docs)
3. Procure por tutoriais no YouTube
4. Abra uma issue no repositório do GitHub

---

## 🎉 Parabéns!

Você publicou com sucesso um site de conscientização sobre violência doméstica!

**Compartilhe o link com amigos, familiares e colegas para ajudar a conscientizar mais pessoas.**

---

**Desenvolvido com ❤️ para conscientização e proteção de mulheres**

*Você não está sozinha. Existe ajuda disponível.*

**Ligue 180 - Central de Atendimento à Mulher**
