# Juntas Somos Mais Fortes - Conscientização sobre Violência Doméstica

Um site informativo e profissional dedicado à conscientização sobre violência doméstica, desenvolvido pelos alunos do curso de direito da UNIFG.

## 🎯 Objetivo

Criar um espaço seguro e informativo onde mulheres em situação de violência doméstica possam encontrar informações, orientações e canais de ajuda disponíveis. O site também busca conscientizar a sociedade sobre este problema grave e oferecer suporte a quem deseja ajudar.

## 📁 Estrutura do Projeto

```
juntas-somos-mais-fortes/
├── index.html           # Arquivo principal com todo o conteúdo
├── styles/
│   └── style.css        # Estilos CSS (cores, fontes, layout)
├── scripts/
│   └── script.js        # Funcionalidades interativas
├── images/
│   ├── logo-unifg.png   # Logo UNIFG
│   └── hero-background.png  # Imagem feminista de fundo
├── README.md            # Este arquivo
└── package.json         # Configuração para Vercel
```

## 🌐 Páginas do Site

### 1. **Página Inicial (Home)**
- Hero section com mensagem principal
- Botão destacado "BUSQUE AJUDA AGORA - LIGUE 180"
- Seção de Sinais de Alerta com 5 cards
- Seção de Estatísticas com dados reais
- Links para as outras páginas

### 2. **Tipos de Violência**
Descrição detalhada dos 5 tipos:
- Violência Física
- Violência Psicológica
- Violência Sexual
- Violência Patrimonial
- Violência Moral

### 4. **Canal de Ajuda**
Informações sobre canais de emergência:
- Ligue 180 (Central da Mulher)
- Polícia 190 (Emergências)

### 4. **Informações**
Recursos importantes:
- Lei Maria da Penha
- Plano de Segurança (8 passos)
- Como Ajudar uma Amiga

## 🎨 Design e Cores

Paleta de cores profissional e feminina:
- **Rosa:** #E91E63 (cor principal)
- **Vermelho:** #D32F2F (destaque e emergência)
- **Roxo:** #8E24AA (seções secundárias)
- **Branco e Cinza:** Fundos e textos

## 🚀 Funcionalidades

- ✅ Botão Flutuante "LIGUE 180" (sempre visível em desktop)
- ✅ Links Diretos para Ligação (tel:180 e tel:190)
- ✅ Design Responsivo (mobile e desktop)
- ✅ Navegação Intuitiva
- ✅ Conteúdo Acessível
- ✅ Animações Suaves
- ✅ Créditos da Equipe

## 📱 Responsividade

O site foi desenvolvido com design mobile-first:
- ✅ Desktop (1920px+)
- ✅ Tablet (768px - 1024px)
- ✅ Mobile (320px - 767px)

## 👥 Equipe UNIFG

### Docentes
Diego Guilherme Lopes Rodrigues
Fernanda Beatriz do Nascimento Silva Xárá

### Discentes
Ademar Fogaça Pereira
Ana Júlia Mendes Gomes
André Ítalo Vieira de Matos
Breno Silva Teixeira
Guilherme Miranda Santana
Igor de Souza Alves
Lara Abreu Costa Salles

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura semântica
- **CSS3:** Estilização responsiva com Flexbox e Grid
- **JavaScript:** Funcionalidades interativas
- **Sem dependências externas:** Código puro e leve

## 📦 Como Usar Localmente

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/juntas-somos-mais-fortes.git
cd juntas-somos-mais-fortes
```

### 2. Abra o arquivo index.html
Você pode abrir o arquivo diretamente no navegador:
- Windows: Clique duas vezes em `index.html`
- Mac: Clique duas vezes em `index.html`
- Linux: Clique duas vezes em `index.html` ou use `open index.html`

### 3. Ou use um servidor local (opcional)

#### Com Python 3:
```bash
python -m http.server 8000
```

#### Com Python 2:
```bash
python -m SimpleHTTPServer 8000
```

#### Com Node.js (http-server):
```bash
npx http-server
```

Depois acesse: `http://localhost:8000`

## 🚀 Publicação no GitHub

### 1. Crie um repositório no GitHub
- Acesse [github.com/new](https://github.com/new)
- Nome: `juntas-somos-mais-fortes`
- Descrição: "Site de conscientização sobre violência doméstica"
- Deixe como público
- Clique em "Create repository"

### 2. Configure o Git local
```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu.email@example.com"
```

### 3. Inicialize e envie para GitHub
```bash
# Navegue até a pasta do projeto
cd juntas-somos-mais-fortes

# Inicialize o git
git init

# Adicione todos os arquivos
git add .

# Faça o primeiro commit
git commit -m "Projeto Juntas Somos Mais Fortes - Conscientização sobre Violência Doméstica"

# Adicione o repositório remoto
git remote add origin https://github.com/seu-usuario/juntas-somos-mais-fortes.git

# Mude para a branch main
git branch -M main

# Envie para GitHub
git push -u origin main
```

## 🌐 Publicação no Vercel

### 1. Crie uma conta no Vercel
- Acesse [vercel.com](https://vercel.com)
- Clique em "Sign Up"
- Escolha "Continue with GitHub"
- Autorize o Vercel

### 2. Importe o projeto
- Clique em "New Project"
- Selecione o repositório `juntas-somos-mais-fortes`
- Clique em "Import"

### 3. Configure o projeto
- **Framework Preset:** Deixe em branco (site estático)
- **Build Command:** Deixe vazio
- **Output Directory:** Deixe vazio
- Clique em "Deploy"

### 4. Seu site está ao vivo!
Vercel fornecerá um URL como: `https://juntas-somos-mais-fortes.vercel.app`

O site será atualizado automaticamente a cada push no GitHub.

## 🔧 Comandos Git Úteis

```bash
# Ver status
git status

# Ver histórico de commits
git log

# Fazer novo commit após edições
git add .
git commit -m "Descrição das mudanças"
git push

# Criar nova branch
git checkout -b feature/nova-funcionalidade

# Mudar de branch
git checkout main

# Deletar branch local
git branch -d nome-da-branch
```

## 📞 Contatos de Emergência

**Ligue 180** - Central de Atendimento à Mulher
- Disponível 24 horas, 7 dias por semana
- Atendimento confidencial e gratuito
- Orientação jurídica, psicológica e social

**Polícia 190** - Para emergências

## ♿ Acessibilidade

- ✅ Contraste de cores adequado
- ✅ Textos descritivos
- ✅ Navegação por teclado
- ✅ Semântica HTML correta
- ✅ Links com `tel:` para chamadas diretas

## 📄 Licença

Este projeto é de código aberto e foi desenvolvido para fins educacionais e de conscientização.

## 🤝 Contribuições

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📧 Contato

Para dúvidas ou sugestões, entre em contato com a equipe UNIFG.

## 🎓 Sobre o Projeto

Este site foi desenvolvido como projeto acadêmico pelos alunos do curso de direito da UNIFG, sob orientação dos professores Me. Silas da Silva Freire Nascimento e Fernanda Beatriz do Nascimento Silva Xará.

O objetivo é conscientizar a sociedade sobre violência doméstica e fornecer informações e recursos para mulheres em situação de risco.

---

**Desenvolvido com ❤️ para conscientização e proteção de mulheres**

*Você não está sozinha. Existe ajuda disponível.*

**Ligue 180 - Central de Atendimento à Mulher**
